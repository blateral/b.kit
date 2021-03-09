import { LeafletWrapperProps } from 'components/blocks/LeafletWrapper';
import React, { FC, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

// import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const View = styled.div`
    position: relative;
    z-index: 0;

    & > * {
        height: 700px;
    }
`;

export interface MapMarker {
    position: { lat: number; lng: number };
    icon?: React.ReactNode;
}

const Map: FC<{
    markers?: MapMarker;
}> = () => {
    // const [map, setMap] = useState<FC<LeafletWrapperProps> | null>(null);
    const mapRef = useRef<FC<LeafletWrapperProps> | null>(null);
    const [isLoaded, setLoaded] = useState(false);
    // const MapWrapper: FC<LeafletWrapperProps> | null = null;

    useEffect(() => {
        if (typeof window !== 'undefined') {
            import('../blocks/LeafletWrapper').then((module) => {
                console.log(module.default);
                // setMap(module.default);
                mapRef.current = module.default;
                setLoaded(true);
            });
        }
    }, []);

    const MapWrapper = mapRef.current;

    return (
        <View>
            {isLoaded && MapWrapper ? (
                <MapWrapper mapProps={{ center: [51.505, -0.09], zoom: 13 }} />
            ) : (
                'Cant load map wrapper'
            )}
        </View>
    );
};

export default Map;
