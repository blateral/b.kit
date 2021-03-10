import React, { FC, useEffect, useState } from 'react';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet-universal';

export interface LeafletMapMarker {
    id: string;
    position: { lat: number; lng: number };
    icon?: {
        url: string;
        anchor?: [number, number];
    };
    popup?: {
        text: string;
    };
}

interface LoadedMarker extends LeafletMapMarker {
    icon?: any;
}

const LeafletMap: FC<{
    markers?: Array<LeafletMapMarker>;
    className?: string;
}> = ({ markers, className }) => {
    const [getMarkers, setMarkers] = useState<LoadedMarker[] | null>(null);

    useEffect(() => {
        const setupMarkers = async () => {
            const L = await import('leaflet');
            if (L && markers && markers.length > 0) {
                const loadedMarkers = markers.map((marker) => {
                    return {
                        ...marker,
                        icon: new L.Icon({
                            iconUrl: marker.icon?.url,
                            iconAnchor: marker.icon?.anchor,
                        }),
                    };
                });
                if (loadedMarkers) setMarkers(loadedMarkers);
            }
        };

        // setup marker icons on clientside
        if (typeof window !== 'undefined') {
            setupMarkers();
        }
    }, [markers]);

    return (
        <Map
            center={[51.505, -0.09]}
            zoom={13}
            scrollWheelZoom={false}
            className={className}
        >
            <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {getMarkers?.map(({ id, position, icon, popup }) => (
                <Marker
                    key={id}
                    position={[position.lat, position.lng]}
                    icon={icon}
                >
                    {popup && <Popup>{popup.text}</Popup>}
                </Marker>
            ))}
        </Map>
    );
};

export default LeafletMap;
