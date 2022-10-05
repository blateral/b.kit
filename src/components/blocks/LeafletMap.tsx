import { FeatureGroup, Map, Marker, MarkerOptions } from 'leaflet';
import React, { FC, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { spacings, getColors as color } from 'utils/styles';

const MapContainer = styled.div`
    position: relative;
    z-index: 0;
`;

const FylToCtrlContainer = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    z-index: 1000;

    margin-top: ${spacings.spacer}px;
    margin-right: ${spacings.spacer}px;
    color: ${({ theme }) => color(theme).dark};

    cursor: pointer;
`;

export interface LeafletMapMarker {
    id: string;
    position: [number, number];
    icon?: {
        url: string;
        size: [number, number];
        anchor: [number, number];

        sizeActive: [number, number];
        anchorActive: [number, number];
    };
    popup?: {
        text: string;
    };
}

const LeafletMap: FC<{
    containerRef?: React.MutableRefObject<HTMLDivElement | null>;
    onReady?: (props: {
        goTo: (position?: [number, number], zoom?: number) => void;
        showAll: () => void;
    }) => void;
    url?: string;
    attribution?: string;
    activeMarkerId?: string;
    markers?: Array<LeafletMapMarker>;
    center: [number, number];
    zoom?: number;
    touchZoom?: boolean;
    scrollWheelZoom?: boolean;
    onlyScrollOnFocus?: boolean;
    fitBoundsPadding?: [number, number];
    onMarkerClick?: (markerId: string) => void;
    onFlyToClick?: (goTo: (zoom?: number) => void) => void;
    flyToControl?: React.ReactNode;
    onActiveMarkerChanged?: (props: {
        markerId: string;
        goTo: (zoom?: number) => void;
    }) => void;
    className?: string;
}> = ({
    containerRef,
    onReady,
    url = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    attribution = '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
    activeMarkerId,
    markers,
    center,
    zoom = 2.5,
    touchZoom = false,
    scrollWheelZoom = false,
    onlyScrollOnFocus = true,
    fitBoundsPadding = [20, 20], // 0 = TopLeft, 1 = BottomRight
    onMarkerClick,
    onFlyToClick,
    flyToControl,
    onActiveMarkerChanged,
    className,
}) => {
    const cRef = useRef<HTMLDivElement | null>(null);
    const prevMarkerId = useRef<string | null>(null);

    // leaflet ref
    const [L, setLeaflet] = useState<any>(null);
    const [map, setMap] = useState<Map | null>(null);
    const [markersLayer, setMarkersLayer] =
        useState<FeatureGroup<any> | null>(null);
    const [isLoaded, setLoaded] = useState<boolean>(false);

    useEffect(() => {
        const initLeaflet = async (cElement: HTMLDivElement) => {
            const leaflet = await import('leaflet');
            if (leaflet) {
                // set leaflet state
                setLeaflet(leaflet);

                // setup map
                const map = leaflet.map(cElement, {
                    center: center,
                    zoom: zoom,
                    touchZoom: touchZoom,
                    scrollWheelZoom: scrollWheelZoom,
                });

                // activate map scrolling on focus
                map.once('focus', () => {
                    if (onlyScrollOnFocus) map.scrollWheelZoom.enable();
                });

                // deactivate map scrolling on focus is lost
                map.once('blur', () => {
                    if (onlyScrollOnFocus) map.scrollWheelZoom.disable();
                });

                // set map state
                setMap(map);

                // add map layer from map provider
                leaflet
                    .tileLayer(url, {
                        attribution: attribution,
                    })
                    .addTo(map);

                // setup layer for markers
                const markersLayer = new leaflet.FeatureGroup();
                markersLayer.addTo(map);
                setMarkersLayer(markersLayer);
            }
        };

        // load leaflet
        const mapContainerRef = containerRef || cRef;
        if (!isLoaded && mapContainerRef?.current)
            initLeaflet(mapContainerRef.current);
    }, [
        attribution,
        center,
        containerRef,
        isLoaded,
        onlyScrollOnFocus,
        scrollWheelZoom,
        touchZoom,
        url,
        zoom,
    ]);

    // setup markers
    useEffect(() => {
        /**
         * Adjust zoom to show all markers
         */
        const showAllMarkers = () => {
            if (map && markersLayer) {
                map.fitBounds(markersLayer.getBounds(), {
                    padding: L.point(fitBoundsPadding),
                });
            }
        };

        /**
         * Pan and zoom to marker position on map
         * @param position
         * @param zoom
         */
        const flyToPosition = (position?: [number, number], zoom?: number) => {
            if (position) map?.flyTo(position, zoom);
            else flyToActive(zoom);
        };

        /**
         * Pan and zoom to active marker position on map
         * @param zoom
         */
        const flyToActive = (zoom?: number) => {
            const marker = markers?.find((m) => m.id === activeMarkerId);
            if (marker) map?.flyTo(marker.position, zoom);
        };

        // setup markers
        if (markersLayer) {
            markersLayer.clearLayers();

            markers?.forEach(({ position, icon, id }) => {
                if (!icon?.url || !icon?.size || !position) return;
                const isActive = id === activeMarkerId;

                const markerIcon = L.icon({
                    iconUrl: icon.url,

                    iconSize: isActive ? icon.sizeActive : icon.size, // size of the icon
                    // shadowSize: [50, 64], // size of the shadow
                    iconAnchor: isActive ? icon.anchorActive : icon?.anchor, // point of the icon which will correspond to marker's location
                    // shadowAnchor: [4, 62], // the same for the shadow
                    // popupAnchor: [0, -16], // point from which the popup should open relative to the iconAnchor
                });

                const marker: Marker = L.marker(position, {
                    icon: markerIcon,
                    riseOnHover: true,
                } as MarkerOptions).addTo(map);

                marker.on('click', () => {
                    onMarkerClick && onMarkerClick(id);
                });

                // add marker to markers layer
                markersLayer.addLayer(marker);

                if (L && map && markersLayer) {
                    if (!isLoaded) {
                        // on first load
                        onReady &&
                            onReady({
                                goTo: flyToPosition,
                                showAll: showAllMarkers,
                            });
                        setLoaded(true);
                        if (activeMarkerId)
                            prevMarkerId.current = activeMarkerId;
                    } else {
                        // check if active marker changed
                        if (
                            activeMarkerId &&
                            activeMarkerId !== prevMarkerId?.current
                        ) {
                            prevMarkerId.current = activeMarkerId;
                            activeMarkerId &&
                                onActiveMarkerChanged &&
                                onActiveMarkerChanged({
                                    markerId: activeMarkerId,
                                    goTo: flyToActive,
                                });
                        }
                    }
                }
            });
        }
    }, [
        L,
        fitBoundsPadding,
        isLoaded,
        map,
        markers,
        markersLayer,
        onMarkerClick,
        activeMarkerId,
        onActiveMarkerChanged,
        onReady,
    ]);

    return (
        <MapContainer ref={cRef} className={className}>
            {flyToControl && (
                <FylToCtrlContainer
                    onClick={(ev) => {
                        ev.stopPropagation();
                        if (map && onFlyToClick) {
                            onFlyToClick((zoom) => {
                                // fly to active marker
                                const marker = markers?.find(
                                    (m) => m.id === activeMarkerId
                                );
                                if (marker) {
                                    map.flyTo(marker.position, zoom);
                                }
                            });
                        }
                    }}
                >
                    {flyToControl}
                </FylToCtrlContainer>
            )}
        </MapContainer>
    );
};

export default LeafletMap;
