import * as Leaflet from 'react-leaflet';
import * as React from 'react';

import L, { LatLngExpression } from 'leaflet';

export interface LeafletWrapperProps {
    mapProps?: {
        center: LatLngExpression;
        zoom: number;
        zoomControl?: boolean;
    };
    markers?: {
        position: LatLngExpression;
        icon?: L.IconOptions;
    }[];
}

const LeafletWrapper: React.FC<
    LeafletWrapperProps & { className?: string }
> = ({ mapProps, markers, className }) => {
    // const [scrollEnabled, setScrollEnabled] = React.useState(false);

    return (
        <Leaflet.MapContainer
            {...mapProps}
            scrollWheelZoom={true}
            className={className}
        >
            <Leaflet.TileLayer
                attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {markers &&
                markers.map((marker, i) => {
                    if (marker.icon) {
                        return (
                            <Leaflet.Marker
                                key={i}
                                position={marker.position}
                                icon={new L.Icon({ ...marker.icon })}
                            />
                        );
                    } else {
                        return (
                            <Leaflet.Marker
                                key={i}
                                position={marker.position}
                            />
                        );
                    }
                })}
        </Leaflet.MapContainer>
    );
};

export default LeafletWrapper;
