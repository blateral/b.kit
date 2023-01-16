import React, { FC, useEffect, useMemo, useState } from 'react';
import styled, { css } from 'styled-components';

import {
    mq,
    spacings,
    getColors as color,
    getFonts as font,
    getGlobals as global,
    withRange,
} from 'utils/styles';
import { useLibTheme, withLibTheme } from 'utils/LibThemeProvider';

import Section, { mapToBgMode } from 'components/base/Section';
import Grid, { getGridWidth, gridSettings } from 'components/base/Grid';
import Wrapper, { wrapperWhitespace } from 'components/base/Wrapper';

import IntroBlock from 'components/blocks/IntroBlock';

import Copy, { copyStyle } from 'components/typography/Copy';
import { HeadlineTag } from 'components/typography/Heading';

import Phone from 'components/base/icons/Phone';
import Mail from 'components/base/icons/Mail';

import { generateLocalBusiness } from 'utils/structuredData';
import Link from 'components/typography/Link';
import LocationPin from 'components/base/icons/LocationPin';
import Control from 'components/buttons/Control';
import * as Icons from 'icons';
import { getSVGDataImg as getSVGData } from 'utils/dataURI';
import useLeafletMap from 'utils/useLeafletMap';
import { isValidArray } from 'utils/arrays';

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

const MapContainer = styled.div<{ isMirrored?: boolean }>`
    position: relative;
    top: 0;
    left: 0;
    bottom: 0;
    width: 100%;
    z-index: 0;

    height: 100%;
    min-height: 230px;

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

const CardContainer = styled.div<{ isMirrored?: boolean }>`
    display: flex;
    flex-direction: row;
    position: relative;
    width: 100%;
    pointer-events: all;

    ${({ theme }) =>
        withRange(
            global(theme).sections.seperation.padding.default,
            'padding-bottom'
        )}

    @media ${mq.semilarge} {
        ${({ theme }) =>
            withRange(
                global(theme).sections.seperation.padding.default,
                'padding-top'
            )}
    }
`;

const InfoCardView = styled.div`
    min-height: 100px;
    pointer-events: all;

    flex: 1 0 80%;
    max-width: 80%;

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

    ${copyStyle('copy-b', 'big')}
    color: ${({ theme, isInverted }) =>
        isInverted
            ? font(theme)['copy-b'].big.colorInverted
            : font(theme)['copy-b'].big.color};

    * + & {
        margin-left: ${spacings.nudge * 1.5}px;
    }
`;

const AddressContainer = styled.div<{ hasIcon?: boolean }>`
    display: -ms-grid;
    display: grid;

    ${({ hasIcon }) => css`
        -ms-grid-columns: ${hasIcon ? 'min-content' : ''} 1fr;
        grid-template-columns: ${hasIcon ? 'min-content' : ''} 1fr;
        -ms-grid-rows: ${hasIcon ? 'min-content' : ''} 1fr;
        grid-auto-rows: ${hasIcon ? 'min-content' : ''} 1fr;
    `}

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
        <AddressContainer hasIcon={!!customIcon}>
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

    const addressIconContent = addressIcon ? (
        addressIcon({ isInverted })
    ) : (
        <LocationPin
            iconColor={isInverted ? colors.text.inverted : colors.text.default}
        />
    );

    const phoneIconContent = contact?.telephone?.icon ? (
        contact.telephone.icon({
            isInverted,
        })
    ) : (
        <Phone />
    );

    const mailIconContent = contact?.email?.icon ? (
        contact.email.icon({ isInverted })
    ) : (
        <Mail />
    );

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
                    customIcon={
                        addressIconContent
                            ? () => addressIconContent
                            : undefined
                    }
                    isInverted={isInverted}
                />
            )}
            {contact && (
                <ContactList isInverted={isInverted}>
                    {contact?.telephone?.label && (
                        <li>
                            {phoneIconContent && (
                                <span>{phoneIconContent}</span>
                            )}
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
                    {contact?.email?.label && (
                        <li>
                            {mailIconContent && <span>{mailIconContent}</span>}
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
    flex: 1 0 20%;
    max-width: 20%;
    display: flex;
    flex-direction: column;
    align-self: flex-start;
    margin-left: auto;
    text-align: right;

    & > * + * {
        margin-top: ${spacings.nudge}px;
    }
`;

const FylToCtrlContainer = styled.button`
    position: absolute;
    top: 0;
    right: 0;
    z-index: 1000;
    background: none;
    border: none;
    margin: 0;
    padding: 0;

    margin-top: ${spacings.spacer}px;
    margin-right: ${spacings.spacer}px;
    color: ${({ theme }) => color(theme).elementBg.dark};

    cursor: pointer;
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

    /** Section background */
    bgMode?: 'full' | 'inverted';

    /** Switch horizontal order of map and location info text */
    isMirrored?: boolean;

    /** Map tile provider */
    provider?: string;

    /** Map attribution text (richtext) */
    attribution?: string;

    /** Initial center of the map */
    center?: [number, number];

    /** Initial map zoom */
    zoom?: number;

    /** Zoom if map jumps to location */
    flyToZoom?: number;

    /** Initial location */
    initialLocation?: string;

    /** Array of location settings */
    locations?: Array<MapLocation>;

    /** Show all markers on first load */
    allMarkersOnInit?: boolean;

    /** Map container padding for show all markers */
    fitBoundsPadding?: [number, number];

    /** Icon element for flight to the current active location */
    flyToControl?: React.ReactNode;

    /** Injection function to replace default control button */
    controlNext?: (props: {
        isInverted?: boolean;
        isActive?: boolean;
        name?: string;
        clickHandler?: (ev: React.SyntheticEvent<HTMLButtonElement>) => void;
    }) => React.ReactNode;

    /** Injection function to replace default control button */
    controlPrev?: (props: {
        isInverted?: boolean;
        isActive?: boolean;
        name?: string;
        clickHandler?: (ev: React.SyntheticEvent<HTMLButtonElement>) => void;
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
}) => {
    const { colors } = useLibTheme();

    const [activeLocationId, setActiveLocationId] = useState<string>(
        initialLocation || ''
    );
    const [isDirty, setIsDirty] = useState<boolean>(false);
    const activeLocation = useMemo(
        () => locations?.find((l) => l.id === activeLocationId),
        [activeLocationId, locations]
    );

    const hasBg = bgMode === 'full';
    const isInverted = bgMode === 'inverted';

    const defaultMarker: LocationIcon = {
        size: [28, 28],
        anchor: [14, 28],
        sizeActive: [70, 70],
        anchorActive: [35, 70],
        url: getSVGData(<LocationPin />),
    };
    const {
        isLoaded,
        setContainer: setMapContainer,
        flyToActive,
        showAllMarkers,
    } = useLeafletMap({
        url: provider,
        attribution,
        center,
        zoom,
        activeMarkerId: activeLocationId,
        markers: locations?.map(({ id, position, icon }) => ({
            id,
            position,
            icon: icon || defaultMarker,
            isInteractive: true,
        })),
        fitBoundsPadding,
        onMarkerClick: setActiveLocationId,
    });

    const goToNext = () => {
        setActiveLocationId((prev) => {
            if (!locations) return prev;
            const currentIndex = locations.findIndex(
                (l) => l.id === activeLocationId
            );
            if (currentIndex === -1) return prev;

            // get new index
            const newIndex = (currentIndex + 1) % locations.length;
            return locations[newIndex].id;
        });
    };

    const goToPrevious = () => {
        setActiveLocationId((prev) => {
            if (!locations) return prev;
            const currentIndex = locations.findIndex(
                (l) => l.id === activeLocationId
            );
            if (currentIndex === -1) return prev;

            // get new index
            const newIndex =
                currentIndex - 1 < 0 ? locations.length - 1 : currentIndex - 1;
            return locations[newIndex].id;
        });
    };

    useEffect(() => {
        if (isLoaded && !isDirty) {
            if (allMarkersOnInit) showAllMarkers();
        } else {
            flyToActive(flyToZoom);
        }
    }, [
        activeLocationId,
        allMarkersOnInit,
        flyToActive,
        flyToZoom,
        initialLocation,
        isDirty,
        isLoaded,
        showAllMarkers,
    ]);

    useEffect(() => {
        if (!isDirty && activeLocationId !== initialLocation) setIsDirty(true);
    }, [activeLocationId, initialLocation, isDirty]);

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
            <MapContainer ref={setMapContainer} isMirrored={isMirrored}>
                {flyToControl && (
                    <FylToCtrlContainer
                        onClick={(ev) => {
                            ev.stopPropagation();
                            flyToActive(flyToZoom);
                        }}
                    >
                        {flyToControl}
                    </FylToCtrlContainer>
                )}
            </MapContainer>

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
                        <CardContainer isMirrored={isMirrored}>
                            {isValidArray(locations, false) && (
                                <React.Fragment>
                                    {activeLocation && (
                                        <LocationInfoCard
                                            {...activeLocation}
                                            isInverted={isInverted}
                                        />
                                    )}
                                    {locations.length > 1 && (
                                        <Controls>
                                            {controlNext ? (
                                                controlNext({
                                                    isInverted,
                                                    isActive: true,
                                                    clickHandler: goToNext,
                                                    name: 'control_next_head',
                                                })
                                            ) : (
                                                <Control
                                                    isInverted={isInverted}
                                                    isDisabled={false}
                                                    onClick={goToNext}
                                                >
                                                    <Icons.ArrowRightGhost />
                                                </Control>
                                            )}
                                            {controlPrev ? (
                                                controlPrev({
                                                    isInverted,
                                                    isActive: true,
                                                    clickHandler: goToPrevious,
                                                    name: 'control_prev_head',
                                                })
                                            ) : (
                                                <Control
                                                    isInverted={isInverted}
                                                    isDisabled={false}
                                                    onClick={goToPrevious}
                                                >
                                                    <Icons.ArrowLeftGhost />
                                                </Control>
                                            )}
                                        </Controls>
                                    )}
                                </React.Fragment>
                            )}
                        </CardContainer>
                    </Grid.Col>
                </Grid.Row>
            </CardWrapper>
        </MapSection>
    );
};

export const MapComponent = Map;
export default withLibTheme(Map);
