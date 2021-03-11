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
    };
    popup?: {
        text: string;
    };
}

const LeafletMap: FC<{
    containerRef?: React.MutableRefObject<HTMLDivElement | null>;
    url?: string;
    attribution?: string;
    markers?: Array<LeafletMapMarker>;
    center: [number, number];
    zoom?: number;
    touchZoom?: boolean;
    scrollWheelZoom?: boolean;
    onlyScrollOnFocus?: boolean;
    allMarkersVisible?: boolean;
    fitBoundsPadding?: [number, number];
    onMarkerClick?: (markerId: string) => void;
    onFlyToClick?: () =>
        | { position: [number, number]; zoom?: number }
        | undefined;
    flyToControl?: React.ReactNode;
    className?: string;
}> = ({
    containerRef,
    url = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    attribution = '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
    markers,
    center,
    zoom = 2.5,
    touchZoom = false,
    scrollWheelZoom = false,
    onlyScrollOnFocus = true,
    allMarkersVisible = false,
    fitBoundsPadding = [20, 20], // 0 = TopLeft, 1 = BottomRight
    onMarkerClick,
    onFlyToClick,
    flyToControl,
    className,
}) => {
    const cRef = useRef<HTMLDivElement | null>(null);

    // leaflet ref
    const [L, setLeaflet] = useState<any>(null);
    const [map, setMap] = useState<Map | null>(null);
    const [markersLayer, setMarkersLayer] = useState<FeatureGroup<any> | null>(
        null
    );

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
        if (mapContainerRef?.current) initLeaflet(mapContainerRef.current);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [containerRef]);

    useEffect(() => {
        map?.setZoom(zoom);
    }, [map, zoom]);

    // setup markers
    useEffect(() => {
        if (markersLayer) {
            markersLayer.clearLayers();

            markers?.forEach(({ position, icon, id }) => {
                if (!icon || !position) return;

                const markerIcon = L.icon({
                    iconUrl: icon?.url,

                    iconSize: icon?.size, // size of the icon
                    // shadowSize: [50, 64], // size of the shadow
                    iconAnchor: icon?.anchor, // point of the icon which will correspond to marker's location
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
            });
        }
    }, [L, map, markers, markersLayer, onMarkerClick]);

    useEffect(() => {
        const showAllMarkers = () => {
            if (allMarkersVisible && map && markersLayer) {
                map.fitBounds(markersLayer.getBounds(), {
                    padding: L.point(fitBoundsPadding),
                });
            }
        };

        if (markersLayer) {
            // make sure that all markers are visible
            showAllMarkers();
        }
    }, [L, allMarkersVisible, map, fitBoundsPadding, markersLayer]);

    useEffect(() => {
        if (center && map) map.panTo(center);
    }, [center, map]);

    return (
        <MapContainer ref={cRef} className={className}>
            {flyToControl && (
                <FylToCtrlContainer
                    onClick={(ev) => {
                        ev.stopPropagation();
                        if (map && onFlyToClick) {
                            const target = onFlyToClick();
                            // if target returned fly to it
                            if (target?.position && target?.zoom)
                                map.flyTo(target.position, target.zoom);
                            else if (target?.position && !target?.zoom)
                                map.panTo(target.position);
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
