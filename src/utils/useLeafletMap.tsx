import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import {
    FeatureGroup,
    LatLng,
    LeafletMouseEvent,
    Map,
    Marker,
    MarkerOptions,
} from 'leaflet';

export interface LeafletMapSettings {
    center: [number, number];
    zoom: number;
    minZoom?: number;
    maxZoom?: number;
    touchZoom: boolean;
    scrollWheelZoom: boolean;
    onlyScrollOnFocus: boolean;
    url: string;
    attribution: string;
    markers: Array<LeafletMapMarker>;
    activeMarkerId?: string;
    fitBoundsPadding: [number, number];
    restrictToMarkersArea?: boolean;
    showZoomControls?: boolean;
    zoomControlPosition?: 'bottomleft' | 'bottomright' | 'topleft' | 'topright';
    onMarkerClick?: (markerId: string) => void;
    onActiveMarkerChanged?: (props: { markerId: string }) => void;
    onReady?: () => void;
    onClick?: (ev: LeafletMouseEvent, currentZoom: number) => void;
}

export interface LeafletMapMarker {
    id: string;
    position: [number, number];
    isInteractive?: boolean;
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

const useLeafletMap = (settings: Partial<LeafletMapSettings>) => {
    const [container, setContainer] = useState<HTMLElement | null>(null);
    const [L, setLeaflet] = useState<any>(null);
    const [map, setMap] = useState<Map | null>(null);
    const [markersLayerGroup, setMarkersLayerGroup] =
        useState<FeatureGroup<any> | null>(null);
    const prevMarkerId = useRef<string | null>(null);
    const [isLoaded, setLoaded] = useState<boolean>(false);
    const isRenderedRef = useRef<boolean>(false);

    const lastValidCenter = useRef<LatLng | null>(null);

    const mapSettings: LeafletMapSettings = useMemo(() => {
        // removing undefined keys
        Object.keys(settings).forEach((key) => {
            if (settings[key] === undefined) {
                delete settings[key];
            }
        });

        return {
            center: [0, 0],
            zoom: 2.5,
            touchZoom: true,
            scrollWheelZoom: false,
            showZoomControls: true,
            zoomControlPosition: 'topleft',
            onlyScrollOnFocus: true,
            url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
            attribution:
                '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
            markers: [],
            fitBoundsPadding: [20, 20], // 0 = TopLeft, 1 = BottomRight
            ...settings,
        };
    }, [settings]);

    useEffect(() => {
        if (!container) return;

        const init = async () => {
            if (L || !container || isRenderedRef.current) return;
            isRenderedRef.current = true;

            // init leaflet
            const leaflet = await import('leaflet');
            if (!leaflet) return;

            // set leaflet state
            setLeaflet(leaflet);

            // setup map
            const map = leaflet.map(container, {
                center: mapSettings.center,
                zoom: mapSettings.zoom,
                touchZoom: mapSettings.touchZoom,
                scrollWheelZoom: mapSettings.scrollWheelZoom,
                zoomControl: false,
                minZoom: mapSettings.minZoom,
                maxZoom: mapSettings.maxZoom,
            });

            if (mapSettings.showZoomControls) {
                leaflet.control
                    .zoom({
                        position: mapSettings.zoomControlPosition,
                    })
                    .addTo(map);
            }

            // activate map scrolling on focus
            map.once('focus', () => {
                if (mapSettings.onlyScrollOnFocus) {
                    map.scrollWheelZoom.enable();
                }
            });

            // deactivate map scrolling on focus is lost
            map.once('blur', () => {
                if (mapSettings.onlyScrollOnFocus) {
                    map.scrollWheelZoom.disable();
                }
            });

            map.on('click', (ev) => {
                mapSettings.onClick?.(ev as LeafletMouseEvent, map.getZoom());
            });

            // set map state
            setMap(map);

            // add map layer from map provider
            leaflet
                .tileLayer(mapSettings.url, {
                    attribution: mapSettings.attribution,
                })
                .addTo(map);

            // setup layer for markers
            const group = new leaflet.FeatureGroup();
            group.addTo(map);

            setMarkersLayerGroup(group);
        };

        init();
    }, [
        L,
        container,
        mapSettings,
        mapSettings.attribution,
        mapSettings.center,
        mapSettings.onlyScrollOnFocus,
        mapSettings.scrollWheelZoom,
        mapSettings.touchZoom,
        mapSettings.url,
        mapSettings.zoom,
    ]);

    useEffect(() => {
        if (!map || !markersLayerGroup) return;

        markersLayerGroup.clearLayers();
        mapSettings.markers?.forEach(
            ({ position, icon, id, isInteractive }) => {
                if (!icon?.url || !icon?.size || !position) return;
                const isActive = id === mapSettings.activeMarkerId;

                const markerIcon = L.icon({
                    iconUrl: icon.url,

                    iconSize: isActive ? icon.sizeActive : icon.size, // size of the icon
                    // shadowSize: [50, 64], // size of the shadow
                    iconAnchor: isActive ? icon.anchorActive : icon?.anchor, // point of the icon which will correspond to marker's location
                    // shadowAnchor: [4, 62], // the same for the shadow
                    // popupAnchor: [0, -16], // point from which the popup should open relative to the iconAnchor
                });

                const marker: Marker = L.marker(
                    L.latLng(position[0], position[1]),
                    {
                        icon: markerIcon,
                        riseOnHover: true,
                        interactive: isInteractive,
                    } as MarkerOptions
                ).addTo(map);

                if (isInteractive) {
                    marker.on('click', () => {
                        mapSettings.onMarkerClick?.(id);
                    });
                }

                // add marker to markers layer
                markersLayerGroup.addLayer(marker);

                if (L && map && markersLayerGroup) {
                    if (!isLoaded) {
                        // on first load
                        mapSettings.onReady?.();
                        setLoaded(true);
                        if (mapSettings.activeMarkerId) {
                            prevMarkerId.current = mapSettings.activeMarkerId;
                        }
                    } else {
                        // check if active marker changed
                        if (
                            mapSettings.activeMarkerId &&
                            mapSettings.activeMarkerId !== prevMarkerId?.current
                        ) {
                            prevMarkerId.current = mapSettings.activeMarkerId;

                            mapSettings.onActiveMarkerChanged?.({
                                markerId: mapSettings.activeMarkerId,
                            });
                        }
                    }
                }
            }
        );

        const handleMapMove = () => {
            if (!map) return;
            if (!mapSettings.restrictToMarkersArea) return;

            const markersBounds = markersLayerGroup?.getBounds()?.pad(0.3);
            if (!markersBounds || !markersBounds.isValid()) return;

            const northEdge = markersBounds.getNorth();
            const eastEdge = markersBounds.getEast();
            const southEdge = markersBounds.getSouth();
            const westEdge = markersBounds.getWest();

            const center = map.getCenter();
            let newLat: number | null = null;
            let newLng: number | null = null;

            // on latitude overshoot
            if (
                (center.lat < southEdge || center.lat > northEdge) &&
                lastValidCenter.current
            ) {
                newLat = lastValidCenter.current?.lat;
            }

            // on longitude overshoot
            if (
                (center.lng < westEdge || center.lng > eastEdge) &&
                lastValidCenter.current
            ) {
                newLng = lastValidCenter.current?.lng;
            }

            if (newLng !== null || newLat !== null) {
                if (newLng !== null) center.lng = newLng;
                if (newLat !== null) center.lat = newLat;

                map.panTo(center, { animate: false });
            }

            lastValidCenter.current = center;
        };

        // if set restrict map movement to markers
        if (mapSettings.restrictToMarkersArea) {
            const markersBounds = markersLayerGroup?.getBounds();

            if (markersBounds.isValid()) {
                map.on('drag', handleMapMove);
            }
        }

        return () => {
            lastValidCenter.current = null;
            map?.off('drag', handleMapMove);
        };
    }, [L, isLoaded, map, mapSettings, mapSettings.markers, markersLayerGroup]);

    /**
     * Adjust zoom to show all markers
     */
    const showAllMarkers = useCallback(() => {
        try {
            if (map && markersLayerGroup) {
                map.fitBounds(markersLayerGroup.getBounds(), {
                    padding: L.point(mapSettings.fitBoundsPadding),
                });
            }
        } catch (err) {
            console.log(err);
        }
    }, [L, map, mapSettings.fitBoundsPadding, markersLayerGroup]);

    /**
     * Pan and zoom to active marker position on map
     * @param zoom
     */
    const flyToActive = useCallback(
        (zoom?: number) => {
            const mapZoom = zoom || mapSettings.zoom;
            const marker = mapSettings.markers?.find(
                (m) => m.id === mapSettings.activeMarkerId
            );
            if (marker) map?.flyTo(marker.position, mapZoom);
        },
        [map, mapSettings.activeMarkerId, mapSettings.markers, mapSettings.zoom]
    );

    /**
     * Pan and zoom to marker position on map
     * @param position
     * @param zoom
     */
    const flyToPosition = useCallback(
        (position?: [number, number], zoom?: number) => {
            const mapZoom = zoom || mapSettings.zoom;

            if (position) map?.flyTo(position, mapZoom);
            else flyToActive(mapZoom);
        },
        [flyToActive, map, mapSettings.zoom]
    );

    /**
     * Pan to marker position on map
     * @param position
     */
    const panToPosition = useCallback(
        (position?: [number, number]) => {
            if (position) map?.panTo(position);
        },
        [map]
    );

    /** Recalculate map size */
    const recalculateMapSize = useCallback(() => {
        map?.invalidateSize();
    }, [map]);

    const getCurrentZoom = useCallback(() => {
        return map?.getZoom() || mapSettings.zoom;
    }, [map, mapSettings.zoom]);

    return {
        setContainer,
        flyToActive,
        flyToPosition,
        panToPosition,
        showAllMarkers,
        recalculateMapSize,
        getCurrentZoom,
        isLoaded,
    };
};

export default useLeafletMap;
