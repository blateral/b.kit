import React, { FC, useEffect, useMemo, useState } from 'react';
import styled, { css } from 'styled-components';

import Section from 'components/base/Section';
import Wrapper from 'components/base/Wrapper';
import { withLibTheme } from 'utils/LibThemeProvider';
import useLeafletMap, { LeafletMapMarker } from 'utils/useLeafletMap';
import { mq, withRange, getColors as color, spacings } from 'utils/styles';
import {
    generateNavbarIdent as genIdent,
    getFullNavbarHeights as getNavHeight,
} from '../navigation/Navigation';
import { getSVGDataImg as getSVGData } from 'utils/dataURI';
import LocationPin from 'components/base/icons/LocationPin';
import Copy from 'components/typography/Copy';
import { isValidArray } from 'utils/arrays';
import POIFacts from 'components/blocks/POIFacts';
import InfoList, { Info } from 'components/blocks/InfoList';
import useGeolocation from 'utils/useGeolocation';
import CurrentLocation from 'components/base/icons/CurrentLocation';
import Cross from 'components/base/icons/Cross';
import MyLocation from 'components/base/icons/MyLocation';

const genHeightStyles = () => css`
    // Doing some crazy shit to calculate curent navbar height in CSS
    ${({ theme }) => {
        // navbar main only
        const mainIdent = genIdent({
            pageFlow: 'beforeContent',
            hasMain: true,
        });

        // navbar main and top
        const mainTopIdent = genIdent({
            pageFlow: 'beforeContent',
            hasMain: true,
            hasTop: true,
        });

        // navbar main and bottom
        const mainBottomIdent = genIdent({
            pageFlow: 'beforeContent',
            hasMain: true,
            hasBottom: true,
        });

        // full navbar with all bars
        const fullIdent = genIdent({
            pageFlow: 'beforeContent',
            hasTop: true,
            hasMain: true,
            hasBottom: true,
        });

        const navMainHeight = getNavHeight(theme, mainIdent).large;
        const navMainTopHeight = getNavHeight(theme, mainTopIdent).large;
        const navMainBottomHeight = getNavHeight(theme, mainBottomIdent).large;
        const navFullHeight = getNavHeight(theme, fullIdent).large;

        const mapToSelector = (idents: string[]) => {
            return idents.map((id) => `[data-navbar-ident*='${id}']`).join('');
        };

        const refHeight = '100vh';

        return css`
            ${Map} {
                height: ${refHeight};
            }

            // with main navbar element
            header${mapToSelector(mainIdent.split('-'))} ~ & {
                ${Map} {
                    height: calc(${refHeight} - ${navMainHeight[0]}px);
                }
            }

            // with main and top navbar elements
            header${mapToSelector(mainTopIdent.split('-'))} ~ & {
                ${Map} {
                    height: calc(${refHeight} - ${navMainTopHeight[0]}px);
                }
            }

            // with main and bottom navbar elements
            header${mapToSelector(mainBottomIdent.split('-'))} ~ & {
                ${Map} {
                    height: calc(${refHeight} - ${navMainBottomHeight[0]}px);
                }
            }

            // with all navbar elements
            header${mapToSelector(fullIdent.split('-'))} ~ & {
                ${Map} {
                    height: calc(${refHeight} - ${navFullHeight[0]}px);
                }
            }

            @media ${mq.semilarge} {
                // with main navbar element
                header${mapToSelector(mainIdent.split('-'))} ~ & {
                    ${Map} {
                        height: calc(${refHeight} - ${navMainHeight[1]}px);
                    }
                }

                // with main and top navbar elements
                header${mapToSelector(mainTopIdent.split('-'))} ~ & {
                    ${Map} {
                        height: calc(${refHeight} - ${navMainTopHeight[1]}px);
                    }
                }

                // with main and bottom navbar elements
                header${mapToSelector(mainBottomIdent.split('-'))} ~ & {
                    ${Map} {
                        height: calc(
                            ${refHeight} - ${navMainBottomHeight[1]}px
                        );
                    }
                }

                // with all navbar elements
                header${mapToSelector(fullIdent.split('-'))} ~ & {
                    ${Map} {
                        height: calc(${refHeight} - ${navFullHeight[1]}px);
                    }
                }
            }
        `;
    }}
`;

const PoiMapSection = styled(Section)<{ isLarge?: boolean }>`
    position: relative;
    ${({ isLarge }) => isLarge && genHeightStyles()}

    header + & {
        ${withRange([0], 'padding-top')}
        ${withRange([0], 'margin-top')}
    }
`;

const MapContainer = styled.div`
    position: relative;
`;

const Map = styled.div<{ isLarge?: boolean }>`
    min-height: 360px;
    height: 360px;
    max-height: 1300px;
    z-index: 0;

    @media ${mq.medium} {
        height: 600px;
        min-height: 600px;
    }
`;

const RequestGeolocationBtn = styled.button`
    position: absolute;
    top: ${spacings.nudge * 2}px;
    left: ${spacings.nudge * 2}px;

    background-color: transparent;
    border: none;
    padding: ${spacings.nudge}px;
    cursor: pointer;

    transition: transform 0.2s ease-in-out, opacity 0.2s ease-in-out;

    @media (hover: hover) and (pointer: fine) {
        &:hover {
            opacity: 0.6;
        }
    }

    &:focus {
        outline: 2px solid ${({ theme }) => color(theme).primary.default};
        transform: scale(1.012);
    }

    &:focus:not(:focus-visible) {
        outline: none;
    }

    &:active {
        transform: scale(0.95);
    }

    & > * {
        width: 30px;
        height: 30px;
    }
`;

const CardStage = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 10;

    display: flex;
    align-items: flex-end;
    justify-content: flex-end;

    pointer-events: all;
    background-color: rgba(255, 255, 255, 0.8);

    @media ${mq.medium} {
        position: absolute;
        background-color: transparent;
        padding: ${spacings.nudge * 2}px;
        padding-bottom: ${spacings.nudge * 3}px;

        pointer-events: none;
    }
`;

const MapCardView = styled.div`
    max-height: 100%;
    width: 100%;
    padding: ${spacings.nudge * 2}px;
    overflow: auto;

    background: ${({ theme }) => color(theme).elementBg.light};
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.3);
    pointer-events: all;
    border-radius: 8px;

    & > * + * {
        margin-top: ${spacings.nudge * 3}px;
    }

    @media ${mq.medium} {
        max-width: 400px;
    }
`;

const MapCardHeader = styled.header`
    display: flex;
    align-items: center;
`;

const CloseBtn = styled.button`
    display: inline-block;
    border: none;
    background-color: transparent;
    cursor: pointer;
    margin-left: auto;
    padding: ${spacings.nudge}px;

    transition: transform 0.2s ease-in-out, opacity 0.2s ease-in-out;

    @media (hover: hover) and (pointer: fine) {
        &:hover {
            opacity: 0.6;
        }
    }

    &:focus {
        outline: 2px solid ${({ theme }) => color(theme).primary.default};
        transform: scale(1.012);
    }

    &:focus:not(:focus-visible) {
        outline: none;
    }

    &:active {
        transform: scale(0.95);
    }
`;

const MapCard: FC<{
    name?: string;
    facts?: string[];
    description?: string;
    infos?: Info[];

    action?: React.ReactNode;
    onClose?: () => void;
    customFact?: (props: { key: React.Key; name: string }) => React.ReactNode;
    customClose?: React.ReactNode;

    className?: string;
}> = ({
    name,
    facts,
    description,
    infos,
    action,
    customFact,
    customClose,
    onClose,
    className,
}) => {
    return (
        <MapCardView className={className}>
            <MapCardHeader>
                {name && (
                    <Copy type="copy-b" size="big">
                        {name}
                    </Copy>
                )}
                <CloseBtn onClick={onClose}>
                    {customClose || <Cross />}
                </CloseBtn>
            </MapCardHeader>
            {isValidArray(facts, false) && (
                <POIFacts facts={facts} customFact={customFact} />
            )}
            {description && (
                <Copy type="copy" size="small" innerHTML={description} />
            )}
            {isValidArray(infos, false) && (
                <InfoList
                    items={[
                        {
                            items: infos,
                        },
                    ]}
                />
            )}
            {action && action}
        </MapCardView>
    );
};

export interface LocationIcon {
    url: string;
    size: [number, number];
    anchor: [number, number];

    sizeActive: [number, number];
    anchorActive: [number, number];
}

export interface MapPOI {
    /** Unique ID */
    id: string;

    /** Latitude and Longitude of item position */
    position: [number, number];

    /** Marker icon settings */
    icon?: LocationIcon;

    /** POI name */
    name?: string;

    /** POI short description text */
    description?: string;

    /** Array of POI facts */
    facts?: string[];

    /** Array of additional POI informations */
    infos?: Info[];

    /** Function to inject custom action node */
    action?: React.ReactNode;
}

const PointOfInterestMap: FC<{
    /** ID value for targeting section with anchor hashes */
    anchorId?: string;

    /** Size mode */
    size?: 'default' | 'large';

    /** Array of POI card settings */
    pois?: MapPOI[];

    /** Use geolocation for own position */
    showOwnPosition?: boolean;

    /** Map tile provider */
    provider?: string;

    /** Map attribution text (richtext) */
    attribution?: string;

    /** Initial center of the map */
    center?: [number, number];

    /** Initial map zoom */
    zoom?: number;

    /** Min map zoom */
    minZoom?: number;

    /** Max map zoom */
    maxZoom?: number;

    /** Zoom if map jumps to location */
    flyToZoom?: number;

    /** Initial location */
    initialPointOfInterest?: string;

    /** Show all markers on first load */
    allMarkersOnInit?: boolean;

    /** Restrict map to bounds of markers area */
    restrictToMarkersArea?: boolean;

    /** Map container padding for show all markers */
    fitBoundsPadding?: [number, number];

    /** Function to inject custom fact node into MapCard */
    customFact?: (props: { key: React.Key; name: string }) => React.ReactNode;

    /** Custom current position marker */
    currentPosMarker?: LocationIcon;

    /** Custom card close icon */
    customCardClose?: React.ReactNode;

    /** Custom icon for my location request button */
    customLocationRequest?: React.ReactNode;
}> = ({
    anchorId,
    size,
    pois,
    initialPointOfInterest = '',
    provider,
    attribution,
    center = [51.505, -0.09],
    zoom = 5,
    fitBoundsPadding,
    allMarkersOnInit = false,
    restrictToMarkersArea = true,
    showOwnPosition,
    flyToZoom,
    customFact,
    currentPosMarker,
    customCardClose,
    customLocationRequest,
}) => {
    const isLarge = size === 'large';

    const [activePoiId, setActivePoiId] = useState<string>(
        initialPointOfInterest || ''
    );
    const [isDirty, setIsDirty] = useState<boolean>(false);
    const activePOI = useMemo(() => {
        return pois?.find((poi) => poi.id === activePoiId);
    }, [activePoiId, pois]);

    const {
        isSupported: isGeolocationSupported,
        location,
        reset: resetGeolocation,
        // error,
    } = useGeolocation(true, false);

    const mapMarkers = useMemo(() => {
        const defaultMarker: LocationIcon = {
            size: [28, 28],
            anchor: [14, 28],
            sizeActive: [70, 70],
            anchorActive: [35, 70],
            url: getSVGData(<LocationPin />),
        };

        // marker of own position
        const defaultPosMarker: LocationIcon = {
            size: [24, 24],
            anchor: [12, 12],
            sizeActive: [24, 24],
            anchorActive: [12, 12],
            url: getSVGData(<CurrentLocation iconColor="#5383EC" />),
        };

        const markers: LeafletMapMarker[] =
            pois
                ?.filter((poi) => poi.id !== undefined)
                ?.map(({ id, position, icon }) => ({
                    id,
                    position,
                    icon: icon || defaultMarker,
                    isInteractive: true,
                })) || [];

        if (
            isGeolocationSupported &&
            location?.coords.latitude &&
            location?.coords.longitude
        ) {
            markers.push({
                id: 'my-current-position-123456789',
                position: [location.coords.latitude, location.coords.longitude],
                icon: currentPosMarker || defaultPosMarker,
            });
        }

        return markers;
    }, [
        currentPosMarker,
        isGeolocationSupported,
        location?.coords.latitude,
        location?.coords.longitude,
        pois,
    ]);

    const {
        isLoaded,
        setContainer: setMapContainer,
        flyToActive,
        showAllMarkers,
        flyToPosition,
        getCurrentZoom,
    } = useLeafletMap({
        url: provider,
        attribution,
        center,
        zoom,
        activeMarkerId: activePoiId,
        markers: mapMarkers,
        fitBoundsPadding,
        restrictToMarkersArea,
        showZoomControls: true,
        zoomControlPosition: 'bottomleft',
        onMarkerClick: (markerId) => {
            setActivePoiId((prev) => {
                if (prev === markerId) {
                    return '';
                }
                return markerId;
            });
        },
    });

    useEffect(() => {
        if (isLoaded && !isDirty) {
            if (allMarkersOnInit) showAllMarkers();
        } else {
            const currentZoom = getCurrentZoom();
            let zoom = flyToZoom;
            if (flyToZoom !== undefined && currentZoom > flyToZoom) {
                zoom = currentZoom;
            }

            flyToActive(zoom);
        }
    }, [
        activePoiId,
        allMarkersOnInit,
        flyToActive,
        flyToZoom,
        getCurrentZoom,
        initialPointOfInterest,
        isDirty,
        isLoaded,
        showAllMarkers,
    ]);

    useEffect(() => {
        if (!isDirty && activePoiId !== initialPointOfInterest) {
            setIsDirty(true);
        }
    }, [activePoiId, initialPointOfInterest, isDirty]);

    const handleLocationRequest = async () => {
        if (location?.coords?.latitude && location?.coords?.longitude) {
            const currentZoom = getCurrentZoom();
            let zoom = flyToZoom;
            if (flyToZoom !== undefined && currentZoom > flyToZoom) {
                zoom = currentZoom;
            }

            flyToPosition(
                [location.coords.latitude, location.coords.longitude],
                zoom
            );
        } else {
            try {
                const position = await resetGeolocation();
                if (position) showAllMarkers();
            } catch (err) {
                // console.log(err);
            }
        }
    };

    return (
        <PoiMapSection
            anchorId={anchorId}
            bgColor="image"
            bgMode="full"
            isLarge={isLarge}
        >
            <Wrapper clampWidth={isLarge ? 'large' : 'normal'}>
                <MapContainer>
                    <Map ref={setMapContainer} isLarge={size === 'large'} />
                    {showOwnPosition && (
                        <RequestGeolocationBtn onClick={handleLocationRequest}>
                            {customLocationRequest || <MyLocation />}
                        </RequestGeolocationBtn>
                    )}
                    {activePOI && activePOI.name && (
                        <CardStage
                            onClick={(ev) => {
                                if (ev.target !== ev.currentTarget) return;
                                setActivePoiId('');
                            }}
                        >
                            <MapCard
                                {...activePOI}
                                onClose={() => setActivePoiId('')}
                                customFact={customFact}
                                customClose={customCardClose}
                            />
                        </CardStage>
                    )}
                </MapContainer>
            </Wrapper>
        </PoiMapSection>
    );
};

export const PointOfInterestMapComponent = PointOfInterestMap;
export default withLibTheme(PointOfInterestMap);
