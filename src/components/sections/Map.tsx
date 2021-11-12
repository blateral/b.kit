import Grid from 'components/base/Grid';
import ArrowLeftGhost from 'components/base/icons/ArrowLeftGhost';
import ArrowRightGhost from 'components/base/icons/ArrowRightGhost';
import Section, { mapToBgMode } from 'components/base/Section';
import Wrapper from 'components/base/Wrapper';
import Actions from 'components/blocks/Actions';
import IntroBlock from 'components/blocks/IntroBlock';
import LeafletMap from 'components/blocks/LeafletMap';
import Slider, { SliderContext } from 'components/blocks/Slider';
import Copy from 'components/typography/Copy';
import { HeadlineTag } from 'components/typography/Heading';
import React, { FC, useContext, useState } from 'react';
import styled, { ThemeContext } from 'styled-components';
import { mq, spacings, getColors as color, withRange } from 'utils/styles';
import { withLibTheme } from 'utils/LibThemeProvider';

const StyledSection = styled(Section)`
    position: relative;
    min-height: 500px;
    z-index: 0;
`;

const MapContainer = styled(LeafletMap)<{ isMirrored?: boolean }>`
    position: relative;
    top: 0;
    left: 0;
    bottom: 0;
    width: 100%;
    min-height: 500px;

    @media ${mq.semilarge} {
        position: absolute;
        width: 50%;
        height: 100%;
        left: ${({ isMirrored }) => (isMirrored ? 'auto' : '50%')};
        right: ${({ isMirrored }) => (isMirrored ? '50%' : 'auto')};

        transform: translateX(
            ${({ isMirrored }) => (isMirrored ? '100%' : '-100%')}
        );
    }

    @media ${mq.xlarge} {
        max-width: ${spacings.wrapperLarge / 2}px;
    }
`;

const CardWrapper = styled(Wrapper)`
    pointer-events: none;
`;

const SliderWrapper = styled.div<{ isMirrored?: boolean }>`
    display: flex;
    flex-direction: column;
    position: relative;
    width: 100%;
    pointer-events: all;

    padding: ${spacings.nudge * 3}px ${spacings.nudge * 3}px
        ${spacings.spacer * 2}px ${spacings.nudge * 3}px;

    @media ${mq.medium} {
        padding: ${spacings.nudge * 3}px ${spacings.spacer}px
            ${spacings.spacer * 2}px ${spacings.spacer}px;
    }

    @media ${mq.semilarge} {
        flex-direction: row;
        ${withRange([spacings.spacer * 3, spacings.spacer * 5], 'padding-top')};
        ${withRange(
            [spacings.spacer * 3, spacings.spacer * 5],
            'padding-bottom'
        )};
        ${({ isMirrored }) =>
            isMirrored
                ? withRange(
                      [spacings.spacer, spacings.spacer * 4],
                      'padding-right'
                  )
                : `padding-right: ${spacings.spacer}px`};
        ${({ isMirrored }) =>
            !isMirrored
                ? withRange(
                      [spacings.spacer, spacings.spacer * 4],
                      'padding-left'
                  )
                : `padding-left: ${(1 / 28) * 100}vw`};
    }

    @media ${mq.xlarge} {
        ${({ isMirrored }) =>
            !isMirrored
                ? withRange(
                      [spacings.spacer, spacings.spacer * 4],
                      'padding-left'
                  )
                : `padding-left: ${(1 / 28) * spacings.wrapper}px`};
    }

    .slick-slide div {
        outline: none;
    }

    .slick-initialized .slick-slide.slick-active {
        z-index: 1;
    }
`;

const InfoCardView = styled.div`
    min-height: 100px;
    pointer-events: all;

    & > * + * {
        ${withRange(
            [spacings.spacer * 1.5, spacings.spacer * 2.5],
            'margin-top'
        )}
    }
`;

const CardHeader = styled.div`
    display: flex;
`;

const StyledActions = styled(Actions)`
    padding-left: ${spacings.nudge}px;
    padding-right: ${spacings.nudge}px;
    padding-bottom: ${spacings.nudge}px;

    @media ${mq.medium} {
        & > * + * {
            max-width: calc(50% - ${spacings.spacer}px);
        }
    }
`;

const ContactList = styled.ul<{ isInverted?: boolean }>`
    padding: 0;
    list-style-type: none;
    color: ${({ theme, isInverted }) =>
        isInverted ? color(theme).light : color(theme).dark};

    a {
        color: inherit;
    }

    li {
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 0;
        margin: 0;
    }

    li + li {
        margin-top: ${spacings.nudge * 3}px;
    }

    span:first-child {
        flex: 0 0 30px;
        max-width: 30px;

        & > * {
            max-width: 100%;
        }
    }
`;

const ContactListLabel = styled(Copy)`
    margin-left: ${spacings.nudge * 2.5}px;

    * {
        margin: 0;
        padding: 0;
    }
`;

const LocationInfoCard: FC<{
    isInverted?: boolean;
    location: MapLocation;
}> = ({ isInverted, location }) => {
    return (
        <InfoCardView>
            {location.meta?.title && (
                <CardHeader>
                    <IntroBlock
                        colorMode={isInverted ? 'inverted' : 'default'}
                        title={location.meta.title}
                        titleAs={location.meta.titleAs}
                        superTitle={location.meta?.superTitle}
                        superTitleAs={location.meta?.superTitleAs}
                    />
                </CardHeader>
            )}
            {location.meta?.contact ? (
                Array.isArray(location.meta?.contact) &&
                location.meta.contact.length > 0 ? (
                    <ContactList isInverted={isInverted}>
                        {location.meta?.contact
                            ?.filter((c) => c.label)
                            .map((contact, i) => (
                                <li key={i}>
                                    <span>{contact?.icon}</span>
                                    <ContactListLabel
                                        type="copy-b"
                                        size="big"
                                        isInverted={isInverted}
                                        innerHTML={contact?.label}
                                    />
                                </li>
                            ))}
                    </ContactList>
                ) : (
                    <Copy
                        type="copy"
                        size="medium"
                        innerHTML={location.meta?.contact as string}
                    />
                )
            ) : (
                ''
            )}
            {(location?.meta?.primaryAction ||
                location?.meta?.secondaryAction) && (
                <StyledActions
                    primary={
                        location?.meta?.primaryAction &&
                        location.meta.primaryAction(isInverted)
                    }
                    secondary={
                        location?.meta?.secondaryAction &&
                        location.meta.secondaryAction(isInverted)
                    }
                />
            )}
        </InfoCardView>
    );
};

const Controls = styled.div`
    display: flex;
    flex-direction: row;
    align-self: center;
    text-align: center;

    @media ${mq.semilarge} {
        flex-direction: column;
        align-self: flex-start;
        margin-left: auto;
        text-align: right;

        & > * + * {
            margin-top: ${spacings.nudge * 3}px;
        }
    }
`;

const StyledDotGroup = styled(Slider.DotGroup)`
    display: flex;
    flex-direction: row;
    padding-top: ${spacings.spacer * 1.5}px;
    padding-left: ${spacings.spacer * 1.5}px;
    padding-right: ${spacings.spacer * 1.5}px;

    @media ${mq.semilarge} {
        display: none;
        padding: 0;
    }
`;

const DotWrapper = styled.button`
    border: none;
    outline: none;
    background: none;
    cursor: pointer;

    padding: ${spacings.nudge * 2}px;
    margin: -${spacings.nudge * 2}px;

    & + & {
        margin-left: ${spacings.nudge * 1.5}px;
    }
`;

const Dot = styled.div<{ isActive?: boolean; isInverted?: boolean }>`
    height: 14px;
    width: 14px;
    border: solid 1px
        ${({ theme, isInverted }) =>
            isInverted ? color(theme).light : color(theme).dark};
    border-radius: 14px;

    transition: background-color 0.2s ease-in-out;

    background-color: ${({ isActive, isInverted, theme }) =>
        isActive
            ? isInverted
                ? color(theme).light
                : color(theme).dark
            : 'transparent'};
`;

const StyledControl = styled(Slider.Control)<{ isInverted?: boolean }>`
    display: none;
    border: none;
    outline: none;
    background: none;
    padding: 0 ${spacings.nudge * 3}px;

    color: ${({ theme, isInverted }) =>
        isInverted ? color(theme).light : color(theme).dark};
    transition: color 0.2s ease-in-out, transform 0.2s ease-in-out;

    &:enabled {
        cursor: pointer;
    }

    &:enabled:hover {
        transform: scale(1.05);
    }

    &:enabled:active {
        transform: scale(0.95);
    }

    &:disabled {
        color: ${({ theme, isInverted }) =>
            isInverted ? color(theme).mono.dark : color(theme).mono.medium};
    }

    @media ${mq.semilarge} {
        display: block;
    }
`;

export interface LocationIcon {
    url: string;
    size: [number, number];
    anchor: [number, number];

    sizeActive: [number, number];
    anchorActive: [number, number];
}

export interface MapLocation {
    id: string;
    position: [number, number];
    icon?: LocationIcon;
    meta?: {
        title?: string;
        titleAs?: HeadlineTag;
        superTitle?: string;
        superTitleAs?: HeadlineTag;
        contact?: Array<{ icon?: React.ReactNode; label?: string }> | string;
        primaryAction?: (isInverted?: boolean) => React.ReactNode;
        secondaryAction?: (isInverted?: boolean) => React.ReactNode;
    };
}

const Map: FC<{
    bgMode?: 'full' | 'inverted';
    isMirrored?: boolean;
    provider?: string;
    attribution?: string;
    center?: [number, number];
    zoom?: number;
    flyToZoom?: number;
    initialLocation?: string;
    locations?: Array<MapLocation>;
    /** Show all markers on first load */
    allMarkersOnInit?: boolean;
    /** Map container padding for show all markers */
    fitBoundsPadding?: [number, number];
    flyToControl?: React.ReactNode;
    controlNext?: (props: {
        isInverted?: boolean;
        isActive?: boolean;
        name?: string;
    }) => React.ReactNode;
    controlPrev?: (props: {
        isInverted?: boolean;
        isActive?: boolean;
        name?: string;
    }) => React.ReactNode;
    dot?: (props: {
        isInverted?: boolean;
        isActive?: boolean;
        index?: number;
    }) => React.ReactNode;
}> = ({
    bgMode,
    isMirrored = false,
    provider,
    attribution,
    center = [51.505, -0.09],
    zoom = 5,
    flyToZoom,
    initialLocation,
    locations,
    allMarkersOnInit = false,
    fitBoundsPadding,
    flyToControl,
    controlNext,
    controlPrev,
    dot,
}) => {
    const theme = useContext(ThemeContext);
    const [activeLocation, setActiveLocation] = useState<string>(
        initialLocation || ''
    );

    const isInverted = bgMode === 'inverted';

    return (
        <StyledSection
            bgColor={isInverted ? color(theme).dark : color(theme).mono.light}
            bgMode={bgMode === 'inverted' ? mapToBgMode(bgMode) : 'full'}
        >
            <Slider.Provider
                fade={true}
                swipe={false}
                slidesToShow={1}
                variableWidth={false}
                sameHeight={true}
                clickSideOffset={0}
                responsive={[
                    {
                        breakpoint: 832,
                        settings: {
                            fade: false,
                            swipe: true,
                        },
                    },
                ]}
                beforeChange={({ nextStep }) => {
                    if (locations && locations[nextStep]) {
                        setActiveLocation(locations[nextStep].id);
                    }
                }}
            >
                <SliderContext.Consumer>
                    {({ goToStep }) => (
                        <MapContainer
                            url={provider}
                            attribution={attribution}
                            onReady={({ showAll, goTo }) => {
                                if (allMarkersOnInit) showAll();
                                else goTo();
                            }}
                            center={center}
                            zoom={zoom}
                            isMirrored={isMirrored}
                            activeMarkerId={activeLocation}
                            onMarkerClick={(markerId) => {
                                setActiveLocation(markerId);

                                // move slider to step
                                const locIndex = locations?.findIndex(
                                    (loc) => loc.id === markerId
                                );

                                if (locIndex !== undefined && locIndex !== -1)
                                    goToStep(locIndex);
                            }}
                            flyToControl={flyToControl}
                            onFlyToClick={(goTo) => {
                                // pan and zoom to active location
                                goTo(flyToZoom);
                            }}
                            fitBoundsPadding={fitBoundsPadding}
                            markers={locations?.map(
                                ({ id, position, icon }) => {
                                    return {
                                        id,
                                        position,
                                        icon,
                                    };
                                }
                            )}
                            onActiveMarkerChanged={({ goTo }) => goTo()}
                        />
                    )}
                </SliderContext.Consumer>

                <CardWrapper clampWidth="normal">
                    <Grid.Row gutter={spacings.spacer}>
                        <Grid.Col
                            semilarge={{
                                span: 14 / 28,
                                move: (isMirrored ? 14 : 0) / 28,
                            }}
                        ></Grid.Col>
                        <Grid.Col
                            semilarge={{
                                span: 14 / 28,
                                move: (isMirrored ? -14 : 0) / 28,
                            }}
                        >
                            <SliderWrapper isMirrored={isMirrored}>
                                {locations && locations.length > 1 && (
                                    <>
                                        <Slider.Slides>
                                            {locations?.map((location, i) => (
                                                <LocationInfoCard
                                                    key={i}
                                                    isInverted={isInverted}
                                                    location={location}
                                                />
                                            ))}
                                        </Slider.Slides>
                                        <Controls>
                                            <StyledControl
                                                type="next"
                                                isInverted={isInverted}
                                            >
                                                {(isActive) =>
                                                    controlNext ? (
                                                        controlNext({
                                                            isInverted,
                                                            isActive,
                                                            name:
                                                                'control_next_head',
                                                        })
                                                    ) : (
                                                        <ArrowRightGhost />
                                                    )
                                                }
                                            </StyledControl>
                                            <StyledControl
                                                type="prev"
                                                isInverted={isInverted}
                                            >
                                                {(isActive) =>
                                                    controlPrev ? (
                                                        controlPrev({
                                                            isInverted,
                                                            isActive,
                                                            name:
                                                                'control_prev_head',
                                                        })
                                                    ) : (
                                                        <ArrowLeftGhost />
                                                    )
                                                }
                                            </StyledControl>
                                            <StyledDotGroup>
                                                {(i, isActive, onClick) => (
                                                    <DotWrapper
                                                        key={i}
                                                        onClick={onClick}
                                                    >
                                                        {dot ? (
                                                            dot({
                                                                isInverted,
                                                                isActive,
                                                                index: i,
                                                            })
                                                        ) : (
                                                            <Dot
                                                                isActive={
                                                                    isActive
                                                                }
                                                                isInverted={
                                                                    isInverted
                                                                }
                                                            />
                                                        )}
                                                    </DotWrapper>
                                                )}
                                            </StyledDotGroup>
                                        </Controls>
                                    </>
                                )}
                                {locations && locations.length === 1 && (
                                    <LocationInfoCard
                                        isInverted={isInverted}
                                        location={locations[0]}
                                    />
                                )}
                            </SliderWrapper>
                        </Grid.Col>
                    </Grid.Row>
                </CardWrapper>
            </Slider.Provider>
        </StyledSection>
    );
};

export const MapComponent = Map;
export default withLibTheme(Map);
