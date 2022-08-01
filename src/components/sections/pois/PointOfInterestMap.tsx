import React, { FC, useEffect, useMemo, useState } from 'react';
import styled, { css } from 'styled-components';

import Section, { mapToBgMode } from 'components/base/Section';
import Wrapper from 'components/base/Wrapper';
import { useLibTheme, withLibTheme } from 'utils/LibThemeProvider';
import useLeafletMap from 'utils/useLeafletMap';
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
            header${mapToSelector(mainIdent.split('-'))} + & {
                ${Map} {
                    height: calc(${refHeight} - ${navMainHeight[0]}px);
                }
            }

            // with main and top navbar elements
            header${mapToSelector(mainTopIdent.split('-'))} + & {
                ${Map} {
                    height: calc(${refHeight} - ${navMainTopHeight[0]}px);
                }
            }

            // with main and bottom navbar elements
            header${mapToSelector(mainBottomIdent.split('-'))} + & {
                ${Map} {
                    height: calc(${refHeight} - ${navMainBottomHeight[0]}px);
                }
            }

            // with all navbar elements
            header${mapToSelector(fullIdent.split('-'))} + & {
                ${Map} {
                    height: calc(${refHeight} - ${navFullHeight[0]}px);
                }
            }

            @media ${mq.semilarge} {
                // with main navbar element
                header${mapToSelector(mainIdent.split('-'))} + & {
                    ${Map} {
                        height: calc(${refHeight} - ${navMainHeight[1]}px);
                    }
                }

                // with main and top navbar elements
                header${mapToSelector(mainTopIdent.split('-'))} + & {
                    ${Map} {
                        height: calc(${refHeight} - ${navMainTopHeight[1]}px);
                    }
                }

                // with main and bottom navbar elements
                header${mapToSelector(mainBottomIdent.split('-'))} + & {
                    ${Map} {
                        height: calc(
                            ${refHeight} - ${navMainBottomHeight[1]}px
                        );
                    }
                }

                // with all navbar elements
                header${mapToSelector(fullIdent.split('-'))} + & {
                    ${Map} {
                        height: calc(${refHeight} - ${navFullHeight[1]}px);
                    }
                }
            }
        `;
    }}
`;

const PoiMapSection = styled(Section)`
    position: relative;
    ${genHeightStyles()}

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
    z-index: 0;

    @media ${mq.medium} {
        height: 600px;
    }
`;

const CardStage = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;

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

const MapCard: FC<{
    name?: string;
    facts?: string[];
    description?: string;
    infos?: Info[];

    className?: string;
}> = ({ name, facts, description, infos, className }) => {
    return (
        <MapCardView className={className}>
            {name && (
                <Copy type="copy-b" size="big">
                    {name}
                </Copy>
            )}
            {isValidArray(facts, false) && <POIFacts facts={facts} />}
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
}

const PointOfInterestMap: FC<{
    /** ID value for targeting section with anchor hashes */
    anchorId?: string;

    /** Size mode */
    size?: 'default' | 'large';

    /** Array of POI card settings */
    pois?: MapPOI[];

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
    initialPointOfInterest?: string;

    /** Show all markers on first load */
    allMarkersOnInit?: boolean;

    /** Map container padding for show all markers */
    fitBoundsPadding?: [number, number];

    /** Section background */
    bgMode?: 'full' | 'inverted';
}> = ({
    anchorId,
    size,
    pois,
    bgMode,
    initialPointOfInterest = '',
    provider,
    attribution,
    center = [51.505, -0.09],
    zoom = 5,
    fitBoundsPadding,
    allMarkersOnInit = false,
    flyToZoom,
}) => {
    const { colors } = useLibTheme();

    const isInverted = bgMode === 'inverted';
    const hasBg = bgMode === 'full';

    const [activePoiId, setActivePoiId] = useState<string>(
        initialPointOfInterest || ''
    );
    const [isDirty, setIsDirty] = useState<boolean>(false);
    const activePOI = useMemo(() => {
        return pois?.find((poi) => poi.id === activePoiId);
    }, [activePoiId, pois]);

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
        activeMarkerId: activePoiId,
        markers: pois
            ?.filter((poi) => poi.id !== undefined)
            ?.map(({ id, position, icon }) => ({
                id,
                position,
                icon: icon || defaultMarker,
            })),
        fitBoundsPadding,
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
            flyToActive(flyToZoom);
        }
    }, [
        activePoiId,
        allMarkersOnInit,
        flyToActive,
        flyToZoom,
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

    return (
        <PoiMapSection
            addSeperation
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
            <Wrapper
                addWhitespace
                clampWidth={size === 'large' ? 'large' : 'normal'}
            >
                <MapContainer>
                    <Map ref={setMapContainer} isLarge={size === 'large'} />
                    {activePOI && (
                        <CardStage onClick={() => setActivePoiId('')}>
                            <MapCard {...activePOI} />
                        </CardStage>
                    )}
                </MapContainer>
            </Wrapper>
        </PoiMapSection>
    );
};

export const PointOfInterestMapComponent = PointOfInterestMap;
export default withLibTheme(PointOfInterestMap);
