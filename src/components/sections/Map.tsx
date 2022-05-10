import React, { FC, useState } from 'react';
import styled, { css } from 'styled-components';

import {
    mq,
    spacings,
    getColors as color,
    getFonts as font,
} from 'utils/styles';
import { useLibTheme, withLibTheme } from 'utils/LibThemeProvider';

import Section, { mapToBgMode } from 'components/base/Section';
import Grid, { getGridWidth, gridSettings } from 'components/base/Grid';
import Wrapper, { wrapperWhitespace } from 'components/base/Wrapper';

import IntroBlock from 'components/blocks/IntroBlock';
import LeafletMap from 'components/blocks/LeafletMap';
import Slider, { SliderContext } from 'components/blocks/Slider';

import Copy, { copyStyle } from 'components/typography/Copy';
import { HeadlineTag } from 'components/typography/Heading';

import Phone from 'components/base/icons/Phone';
import Mail from 'components/base/icons/Mail';

import { generateLocalBusiness } from 'utils/structuredData';
import Link from 'components/typography/Link';
import LocationPin from 'components/base/icons/LocationPin';
import Control from 'components/buttons/Control';
import * as Icons from 'components/base/icons/Icons';

interface Address {
    street: string;
    postalCode: string;
    city?: string;
    country: string;
}

const MapSection = styled(Section)`
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

    height: 100%;
    min-height: 400px;

    @media ${mq.semilarge} {
        position: absolute;
        /** 
            calculate width of 6 grid cols (grid width = viewport width without wrapper paddings)
            and add left or right wrapper padding afterwards
         */
        width: calc(
            ${getGridWidth({
                    cols: 6,
                    gridWidth: `100% - ${wrapperWhitespace * 2}px `,
                })} + ${wrapperWhitespace}px
        );
        left: ${({ isMirrored }) => (isMirrored ? 'auto' : '0')};
        right: ${({ isMirrored }) => (isMirrored ? '0' : 'auto')};
    }

    @media ${mq.xlarge} {
        width: calc(50% - ${gridSettings.gutter}px ${wrapperWhitespace}px);
    }

    @media ${mq.xxlarge} {
        width: calc(
            ${spacings.wrapperLarge / 2}px - ${gridSettings.gutter}px +
                ${wrapperWhitespace}px
        );

        left: ${({ isMirrored }) => (isMirrored ? 'auto' : '50%')};
        right: ${({ isMirrored }) => (isMirrored ? '50%' : 'auto')};

        ${({ isMirrored }) =>
            css`
                transform: translateX(
                    calc(
                        ${isMirrored
                                ? `(100% + ${gridSettings.gutter}px) - `
                                : `(-100% - ${gridSettings.gutter}px) + `}
                            (${wrapperWhitespace}px)
                    )
                );
            `};
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

    @media ${mq.semilarge} {
        flex-direction: row;

        padding-top: ${spacings.spacer * 2.5}px;
        padding-bottom: ${spacings.spacer * 2.5}px;
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
        margin-top: ${spacings.spacer}px;
    }
`;

const CardHeader = styled.div`
    display: flex;
`;

const ContactList = styled.ul<{ isInverted?: boolean }>`
    padding: 0;
    list-style-type: none;
    color: ${({ theme, isInverted }) =>
        isInverted ? color(theme).text.inverted : color(theme).text.default};

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

const ContactListLink = styled(Link)`
    display: block;
    margin-left: ${spacings.nudge * 1.5}px;

    ${copyStyle('copy-b', 'big')}
    color: ${({ theme, isInverted }) =>
        isInverted
            ? font(theme)['copy-b'].big.colorInverted
            : font(theme)['copy-b'].big.color};
`;

const AddressContainer = styled.div`
    display: -ms-grid;
    display: grid;

    -ms-grid-columns: min-content 1fr;
    grid-template-columns: min-content 1fr;
    -ms-grid-rows: min-content 1fr;
    grid-auto-rows: min-content 1fr;

    & > * + * {
        margin-left: ${spacings.nudge * 2}px;
    }
`;

const CompanyInfo: FC<{
    isInverted?: boolean;
    companyName: string;
    address?: Address;
    customIcon?: (isInverted?: boolean) => React.ReactNode;
}> = ({ isInverted, companyName, address, customIcon }) => {
    return (
        <AddressContainer>
            {customIcon && <span> {customIcon()} </span>}
            <div>
                <Copy type="copy-b" size="big" isInverted={isInverted}>
                    {companyName}
                </Copy>
                {address && (
                    <Copy type="copy-b" size="big" isInverted={isInverted}>
                        <div>{address.street}</div>
                        <div>{`${address.postalCode} ${address.city}`}</div>
                        <div>{address.country}</div>
                    </Copy>
                )}
            </div>
        </AddressContainer>
    );
};

const Desc = styled(Copy)`
    @media ${mq.semilarge} {
        margin-top: ${spacings.spacer * 2.5}px;
    }
`;

const LocationInfoCard: FC<
    MapLocation & {
        isInverted?: boolean;
    }
> = ({
    isInverted,
    title,
    titleAs,
    superTitle,
    superTitleAs,
    companyName,
    address,
    addressIcon,
    contact,
    description,
}) => {
    const { colors } = useLibTheme();

    return (
        <InfoCardView>
            <CardHeader>
                <IntroBlock
                    colorMode={isInverted ? 'inverted' : 'default'}
                    title={title}
                    titleAs={titleAs}
                    superTitle={superTitle}
                    superTitleAs={superTitleAs}
                />
            </CardHeader>
            {companyName && (
                <CompanyInfo
                    companyName={companyName || ''}
                    address={address}
                    customIcon={() =>
                        addressIcon ? (
                            addressIcon({ isInverted })
                        ) : (
                            <LocationPin
                                iconColor={
                                    isInverted
                                        ? colors.text.inverted
                                        : colors.text.default
                                }
                            />
                        )
                    }
                    isInverted={isInverted}
                />
            )}
            {contact && (
                <ContactList isInverted={isInverted}>
                    {contact?.telephone && (
                        <li>
                            <span>
                                {contact?.telephone.icon ? (
                                    contact.telephone.icon({
                                        isInverted,
                                    })
                                ) : (
                                    <Phone />
                                )}
                            </span>
                            <ContactListLink
                                isInverted={isInverted}
                                href={`tel:${
                                    contact.telephone.link ||
                                    contact.telephone.label
                                }`}
                            >
                                {contact.telephone?.label}
                            </ContactListLink>
                        </li>
                    )}
                    {contact.email && (
                        <li>
                            <span>
                                {contact?.email.icon ? (
                                    contact.email.icon({ isInverted })
                                ) : (
                                    <Mail />
                                )}
                            </span>
                            <ContactListLink
                                isInverted={isInverted}
                                href={`mailto:${
                                    contact?.email.link || contact.email.label
                                }`}
                            >
                                {contact?.email.label}
                            </ContactListLink>
                        </li>
                    )}
                </ContactList>
            )}

            <Desc isInverted={isInverted} innerHTML={description} />
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
            margin-top: ${spacings.nudge}px;
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
            isInverted
                ? color(theme).text.inverted
                : color(theme).text.default};
    border-radius: 14px;

    transition: background-color 0.2s ease-in-out;

    background-color: ${({ isActive, isInverted, theme }) =>
        isActive
            ? isInverted
                ? color(theme).text.inverted
                : color(theme).text.default
            : 'transparent'};
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

    title?: string; // Rich Text
    titleAs?: HeadlineTag;
    superTitle?: string;
    superTitleAs?: HeadlineTag;

    companyName?: string;
    address?: Address;
    addressIcon?: (props: { isInverted?: boolean }) => React.ReactNode;
    contact?: {
        telephone?: {
            link?: string;
            label?: string;
            icon?: (props: { isInverted?: boolean }) => React.ReactNode;
        };
        email?: {
            link?: string;
            label?: string;
            icon?: (props: { isInverted?: boolean }) => React.ReactNode;
        };
    };
    image?: string[];
    description?: string;
}

const Map: FC<{
    /** ID value for targeting section with anchor hashes */
    anchorId?: string;

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
        isDisabled?: boolean;
        name?: string;
        clickHandler?: (ev: React.SyntheticEvent<HTMLButtonElement>) => void;
    }) => React.ReactNode;
    controlPrev?: (props: {
        isInverted?: boolean;
        isActive?: boolean;
        isDisabled?: boolean;
        name?: string;
        clickHandler?: (ev: React.SyntheticEvent<HTMLButtonElement>) => void;
    }) => React.ReactNode;
    dot?: (props: {
        isInverted?: boolean;
        isActive?: boolean;
        index?: number;
    }) => React.ReactNode;
}> = ({
    anchorId,
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
    const { colors } = useLibTheme();
    const [activeLocation, setActiveLocation] = useState<string>(
        initialLocation || ''
    );

    const hasBg = bgMode === 'full';
    const isInverted = bgMode === 'inverted';

    return (
        <MapSection
            anchorId={anchorId}
            bgColor={
                isInverted
                    ? colors.sectionBg.dark
                    : hasBg
                    ? colors.sectionBg.medium
                    : colors.sectionBg.light
            }
            bgMode={mapToBgMode(bgMode, true)}
        >
            {locations && generateLocalBusiness(locations)}
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

                <CardWrapper addWhitespace clampWidth="normal">
                    <Grid.Row>
                        <Grid.Col
                            semilarge={{
                                span: 6 / 12,
                                move: (isMirrored ? 6 : 0) / 12,
                            }}
                        ></Grid.Col>
                        <Grid.Col
                            semilarge={{
                                span: 6 / 12,
                                move: (isMirrored ? -6 : 0) / 12,
                            }}
                        >
                            <SliderWrapper isMirrored={isMirrored}>
                                {locations && locations.length > 1 && (
                                    <>
                                        <Slider.Slides>
                                            {locations?.map((location, i) => (
                                                <LocationInfoCard
                                                    key={i}
                                                    {...location}
                                                    isInverted={isInverted}
                                                />
                                            ))}
                                        </Slider.Slides>
                                        <Controls>
                                            <Slider.Control type="next">
                                                {({
                                                    isActive,
                                                    isDisabled,
                                                    clickHandler,
                                                }) =>
                                                    controlNext ? (
                                                        controlNext({
                                                            isInverted,
                                                            isActive,
                                                            isDisabled,
                                                            clickHandler,
                                                            name: 'control_next_head',
                                                        })
                                                    ) : (
                                                        <Control
                                                            isInverted={
                                                                isInverted
                                                            }
                                                            isDisabled={
                                                                isDisabled
                                                            }
                                                            onClick={
                                                                clickHandler
                                                            }
                                                        >
                                                            <Icons.ArrowRightGhost />
                                                        </Control>
                                                    )
                                                }
                                            </Slider.Control>
                                            <Slider.Control type="prev">
                                                {({
                                                    isActive,
                                                    isDisabled,
                                                    clickHandler,
                                                }) =>
                                                    controlPrev ? (
                                                        controlPrev({
                                                            isInverted,
                                                            isActive,
                                                            isDisabled,
                                                            clickHandler,
                                                            name: 'control_prev_head',
                                                        })
                                                    ) : (
                                                        <Control
                                                            isInverted={
                                                                isInverted
                                                            }
                                                            isDisabled={
                                                                isDisabled
                                                            }
                                                            onClick={
                                                                clickHandler
                                                            }
                                                        >
                                                            <Icons.ArrowLeftGhost />
                                                        </Control>
                                                    )
                                                }
                                            </Slider.Control>
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
                                        {...locations[0]}
                                        isInverted={isInverted}
                                    />
                                )}
                            </SliderWrapper>
                        </Grid.Col>
                    </Grid.Row>
                </CardWrapper>
            </Slider.Provider>
        </MapSection>
    );
};

export const MapComponent = Map;
export default withLibTheme(Map);
