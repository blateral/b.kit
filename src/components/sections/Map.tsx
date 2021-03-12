import Grid from 'components/base/Grid';
import Section from 'components/base/Section';
import Wrapper from 'components/base/Wrapper';
import Actions from 'components/blocks/Actions';
import Intro from 'components/blocks/Intro';
import LeafletMap from 'components/blocks/LeafletMap';
import Slider, { SliderContext } from 'components/blocks/Slider';
import { HeadlineTag } from 'components/typography/Heading';
import React, { FC, useContext, useState } from 'react';
import styled, { ThemeContext } from 'styled-components';
import { mq, spacings, getColors as color, withRange } from 'utils/styles';

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

const SliderWrapper = styled.div`
    position: relative;
    width: 100%;
    pointer-events: all;

    .slick-slide div {
        outline: none;
    }

    .slick-initialized .slick-slide.slick-active {
        z-index: 1;
    }
`;

const LocationInfoCard = styled.div<{ isMirrored?: boolean }>`
    min-height: 100px;
    padding: ${spacings.nudge * 3}px ${spacings.nudge * 3}px
        ${spacings.spacer * 2}px ${spacings.nudge * 3}px;
    pointer-events: all;

    @media ${mq.medium} {
        padding: ${spacings.nudge * 3}px ${spacings.spacer}px
            ${spacings.spacer * 2}px ${spacings.spacer}px;
    }

    @media ${mq.semilarge} {
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
`;

const CardHeader = styled.div`
    display: flex;
`;

const StyledActions = styled(Actions)`
    ${withRange([spacings.spacer, spacings.spacer * 2], 'padding-top')}

    @media ${mq.medium} {
        & > * {
            max-width: 50%;
        }
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
        superTitleAs?: string;
        contact?: Array<{ icon?: React.ReactNode; label?: string }>;
        primaryLabel?: string;
        secondaryLabel?: string;
    };
}

const Map: FC<{
    isInverted?: boolean;
    isMirrored?: boolean;
    center?: [number, number];
    zoom?: number;
    flyToZoom?: number;
    initialLocation?: string;
    locations?: Array<MapLocation>;
    /** Show all markers on first load */
    allMarkersOnInit?: boolean;
    /** Map container padding for show all markers */
    fitBoundsPadding?: [number, number];

    primaryAction?: (props: {
        isInverted?: boolean;
        label?: string;
    }) => React.ReactNode;
    secondaryAction?: (props: {
        isInverted?: boolean;
        label?: string;
    }) => React.ReactNode;
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
}> = ({
    isInverted = false,
    isMirrored = false,
    center = [51.505, -0.09],
    zoom = 5,
    flyToZoom,
    initialLocation,
    locations,
    allMarkersOnInit = false,
    fitBoundsPadding,
    primaryAction,
    secondaryAction,
    flyToControl,
}) => {
    const theme = useContext(ThemeContext);
    const [activeLocation, setActiveLocation] = useState<string>(
        initialLocation || ''
    );

    return (
        <StyledSection
            bgColor={isInverted ? color(theme).dark : color(theme).mono.light}
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
                            onReady={({ showAll }) => {
                                if (allMarkersOnInit) showAll();
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
                            <SliderWrapper>
                                <Slider.Control type="prev">
                                    {() => <span>prev</span>}
                                </Slider.Control>
                                <Slider.Control type="next">
                                    {() => <span>next</span>}
                                </Slider.Control>
                                <Slider.Slides>
                                    {locations?.map(({ meta }, i) => (
                                        <LocationInfoCard
                                            key={i}
                                            isMirrored={isMirrored}
                                        >
                                            {meta?.title && (
                                                <CardHeader>
                                                    <Intro
                                                        isInverted={isInverted}
                                                        title={meta.title}
                                                        superTitle={
                                                            meta?.superTitle
                                                        }
                                                    />
                                                </CardHeader>
                                            )}
                                            {(primaryAction ||
                                                secondaryAction) && (
                                                <StyledActions
                                                    primary={
                                                        meta?.primaryLabel &&
                                                        primaryAction &&
                                                        primaryAction({
                                                            isInverted,
                                                            label:
                                                                meta?.primaryLabel,
                                                        })
                                                    }
                                                    secondary={
                                                        meta?.secondaryLabel &&
                                                        secondaryAction &&
                                                        secondaryAction({
                                                            isInverted,
                                                            label:
                                                                meta?.secondaryLabel,
                                                        })
                                                    }
                                                />
                                            )}
                                        </LocationInfoCard>
                                    ))}
                                </Slider.Slides>
                            </SliderWrapper>
                        </Grid.Col>
                    </Grid.Row>
                </CardWrapper>
            </Slider.Provider>
        </StyledSection>
    );
};

export default Map;
