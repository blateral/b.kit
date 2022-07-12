import React, {
    FC,
    useCallback,
    useEffect,
    useMemo,
    useRef,
    useState,
} from 'react';
import styled from 'styled-components';

import { copyStyle } from 'components/typography/Copy';
import {
    getColors as color,
    getFonts as font,
    spacings,
    getGlobals as global,
    withRange,
} from 'utils/styles';
import FieldWrapper from './FormField';
import { getFormFieldTextSize } from 'utils/formFieldText';
import useLeafletMap, { LeafletMapMarker } from 'utils/useLeafletMap';
import LocationPin from 'components/base/icons/LocationPin';
import { getSVGDataImg } from 'utils/dataURI';
import { LocationIcon } from 'components/sections/Map';
import { useLibTheme } from 'utils/LibThemeProvider';
import { LeafletMouseEvent } from 'leaflet';
import useLazyInput from 'utils/useLazyInput';
import { MyLocation } from 'components/base/icons/Icons';
import useUpdateEffect from 'utils/useUpdateEffect';
import useGeolocation from 'utils/useGeolocation';

const ViewTabs = styled.div<{ isInverted?: boolean }>`
    display: flex;
    border-bottom: solid 1px
        ${({ theme, isInverted }) =>
            isInverted
                ? color(theme).elementBg.light
                : color(theme).elementBg.dark};

    &:not(:last-child) {
        margin-bottom: ${spacings.nudge}px;
    }
`;

const Tab = styled.button<{ isInverted?: boolean }>`
    position: relative;
    padding: ${spacings.nudge}px;
    background: none;
    border: 0;
    ${copyStyle('copy', 'small')}
    color: ${({ theme, isInverted }) =>
        isInverted
            ? color(theme).elementBg.light
            : color(theme).elementBg.dark};
    cursor: pointer;
    outline: none;

    &:after {
        content: '';
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 4px;
        background-color: transparent;
    }

    &:disabled {
        cursor: default;

        &:after {
            background-color: ${({ theme, isInverted }) =>
                isInverted
                    ? color(theme).elementBg.light
                    : color(theme).elementBg.dark};
        }
    }

    &:focus {
        outline: none;
    }

    &:focus {
        outline: 2px solid
            ${({ theme, isInverted }) =>
                isInverted
                    ? color(theme).primary.inverted
                    : color(theme).primary.default};
        outline-offset: -2px;
    }

    &:focus:not(:focus-visible) {
        outline: none;
    }
`;

const MapWrapper = styled.div<{ isVisible?: boolean }>`
    display: ${({ isVisible }) => (isVisible ? 'block' : 'none')};
    position: relative;
`;

const MapContainer = styled.div`
    position: relative;
    width: 100%;
    height: 290px;
    z-index: 0;
    outline: none;
`;

const TrackLocationIcon = styled.div`
    position: absolute;
    top: ${spacings.nudge * 2}px;
    right: ${spacings.nudge * 2}px;

    cursor: pointer;
`;

const StyledMyLocationIcon = styled(MyLocation)`
    height: 35px;
    width: 35px;
`;

const FieldView = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    & > * + * {
        margin-left: 16px;
    }
`;

const Area = styled.textarea<{
    isInverted?: boolean;
    hasError?: boolean;
    isDisabled?: boolean;
    hasBack?: boolean;
}>`
    display: block;
    outline: none;
    width: 100%;
    min-height: 100px;
    box-shadow: none;
    border-radius: 0px;
    -webkit-appearance: none;

    resize: none;

    padding: ${spacings.nudge}px;

    border: 1px solid
        ${({ theme, isInverted, hasError }) => {
            if (isInverted) {
                return hasError
                    ? color(theme).errorInverted
                    : color(theme).elementBg.light;
            }
            return hasError ? color(theme).error : color(theme).elementBg.dark;
        }};
    border-radius: ${({ theme }) => global(theme).sections.edgeRadius};

    background: transparent;

    ${copyStyle('copy', 'small')}
    /** Clamping min font size to 16px to prevent browser zooming */
    ${({ theme }) => withRange(getFormFieldTextSize(theme), 'font-size')}
    
    color: ${({ theme, isInverted, hasError }) => {
        if (isInverted) {
            return hasError
                ? color(theme).text.errorInverted
                : font(theme).copy.small.colorInverted;
        }
        return hasError
            ? color(theme).text.error
            : font(theme).copy.small.color;
    }};

    &:active {
        border: ${({ theme, isInverted }) =>
            `1px solid ${
                isInverted
                    ? color(theme).primary.inverted
                    : color(theme).primary.default
            }`};
    }

    &:focus {
        outline: ${({ theme, isInverted }) =>
            `1px solid ${
                isInverted
                    ? color(theme).primary.inverted
                    : color(theme).primary.default
            }`};
        outline-offset: 0;
    }

    &:focus:not(:focus-visible) {
        outline: none;
    }

    &::placeholder {
        color: ${({ theme, isInverted }) =>
            isInverted
                ? color(theme).text.subtileInverted
                : color(theme).text.subtile};
    }
`;

export interface LocationProps {
    city?: string;
    street?: string;
    streetNumber?: string;
    postal?: string;
    country?: string;
}

export interface LocationData {
    description: string;
    position?: [number, number];
}

const LocationField: FC<{
    label?: string;
    errorMessage?: string;
    infoMessage?: string;
    isRequired?: boolean;
    isDisabled?: boolean;
    isInverted?: boolean;
    name?: string;
    placeholder?: string;
    value?: LocationData;
    /** Position of map if no value with position data is defined */
    initialMapCenter?: [number, number];
    marker?: LocationIcon;
    zoom?: number;
    onChange?: (value: LocationData) => void;
    onBlur?: (value: LocationData) => void;
    customLocationIcon?: (props: { isInverted?: boolean }) => React.ReactNode;
    geolocationErrorMsg?: string;
    descriptionTabLabel?: string;
    mapTabLabel?: string;
}> = ({
    label,
    errorMessage,
    infoMessage,
    isRequired,
    isDisabled,
    isInverted,
    placeholder,
    value,
    name,
    marker,
    initialMapCenter,
    zoom = 10,
    onChange,
    onBlur,
    customLocationIcon,
    geolocationErrorMsg = 'Your browser or device supports no geolocation!',
    descriptionTabLabel = 'Address',
    mapTabLabel = 'GPS Coordinates',
}) => {
    if (isDisabled) {
        errorMessage = '';
    }

    const { colors } = useLibTheme();
    const [asGeolocation, setAsGeolocation] = useState<boolean>(false);
    const [isMapDirty, setMapDirty] = useState<boolean>(false);
    const [getValue, setValue] = useState<LocationData>(
        value || { description: '' }
    );
    const prevValue = useRef<LocationData | null>(null);

    const position = useMemo((): [number, number] | undefined => {
        if (
            getValue?.position?.[0] === undefined ||
            getValue?.position?.[1] === undefined
        ) {
            return undefined;
        }
        return [getValue.position[0], getValue.position[1]];
    }, [getValue?.position]);

    const {
        value: descValue,
        setValue: setDescValue,
        forceUpdate,
    } = useLazyInput((value) => {
        setValue((prev) => ({
            ...prev,
            description: value,
        }));
    }, value?.description || '');

    const [errorMsg, setErrorMsg] = useState<string>(errorMessage || '');

    const markers = useMemo(() => {
        /** Markers */
        const defaultMarker: LocationIcon = {
            size: [28, 28],
            anchor: [14, 28],
            sizeActive: [70, 70],
            anchorActive: [35, 70],
            url: getSVGDataImg(<LocationPin />),
        };
        const markerList: LeafletMapMarker[] = [];

        if (position) {
            markerList.push({
                id: 'location',
                position: position,
                icon: marker || defaultMarker,
            });
        }
        return markerList;
    }, [position, marker]);

    const {
        setContainer: setMapContainer,
        flyToPosition,
        panToPosition,
        recalculateMapSize,
        getCurrentZoom,
    } = useLeafletMap({
        activeMarkerId: 'location',
        markers: markers,
        center: initialMapCenter,
        zoom: 2.5,
        onClick: (ev) => {
            mapClickHandler(ev);
        },
    });

    const onMapClick = (newPos: [number, number]) => {
        setValue((prev) => ({
            ...prev,
            position: newPos,
        }));
    };

    // double click fix
    const doubleClickTimerRef = useRef<number | null>(null);

    const mapClickHandler = (ev: LeafletMouseEvent) => {
        const newPos: [number, number] = [ev.latlng.lat, ev.latlng.lng];

        if (doubleClickTimerRef.current === null) {
            doubleClickTimerRef.current = window.setTimeout(() => {
                onMapClick(newPos);
                setMapDirty(true);
                doubleClickTimerRef.current = null;
            }, 300);
        } else {
            window.clearTimeout(doubleClickTimerRef.current);
            doubleClickTimerRef.current = null;
        }
    };

    const {
        isSupported: isGeolocationSupported,
        location,
        error,
    } = useGeolocation();

    useEffect(() => {
        if (!isMapDirty && location && !error) {
            const newPos: [number, number] = [
                location.coords.latitude,
                location.coords.longitude,
            ];

            setValue((prev) => ({
                ...prev,
                position: newPos,
            }));
        }
    }, [error, isMapDirty, location]);

    const getLocation = useCallback(() => {
        if (error) {
            console.log(error);
            setErrorMsg(geolocationErrorMsg);
        }

        if (location?.coords) {
            const newPos: [number, number] = [
                location.coords.latitude,
                location.coords.longitude,
            ];

            setValue((prev) => ({
                ...prev,
                position: newPos,
            }));

            setMapDirty(false);
        }
    }, [error, geolocationErrorMsg, location?.coords]);

    useEffect(() => {
        setErrorMsg(errorMessage || '');
    }, [errorMessage]);

    useEffect(() => {
        if (asGeolocation) {
            recalculateMapSize();

            if (!position) {
                getLocation();
            }
        }
    }, [asGeolocation, getLocation, getValue, position, recalculateMapSize]);

    useUpdateEffect(() => {
        const prev = prevValue.current;
        if (
            !prev ||
            prev.description !== getValue.description ||
            prev.position?.[0] !== getValue.position?.[0] ||
            prev.position?.[1] !== getValue.position?.[1]
        ) {
            prevValue.current = getValue;
            onChange?.(getValue);
        }
    }, [getValue]);

    useEffect(() => {
        let flyToZoom = zoom;
        const currentZoom = getCurrentZoom();

        if (currentZoom > flyToZoom) {
            flyToZoom = currentZoom;
        }

        if (position) {
            flyToPosition(getValue.position, flyToZoom);
        }
    }, [
        flyToPosition,
        getCurrentZoom,
        getValue.position,
        isMapDirty,
        panToPosition,
        position,
        zoom,
    ]);

    const showTrackLocationBtn = isGeolocationSupported && isMapDirty;

    return (
        <React.Fragment>
            {name && (
                <input
                    type="hidden"
                    name={`${name}["location"]`}
                    value={`${getValue?.position?.[0]},${getValue?.position?.[1]}`}
                />
            )}

            <FieldWrapper.View
                isDisabled={isDisabled}
                onClick={(ev) => ev.preventDefault()}
            >
                <FieldWrapper.Head
                    label={label}
                    isRequired={isRequired}
                    isInverted={isInverted}
                />
                <ViewTabs isInverted={isInverted}>
                    <Tab
                        isInverted={isInverted}
                        disabled={!asGeolocation}
                        onClick={() => setAsGeolocation(false)}
                    >
                        {descriptionTabLabel}
                    </Tab>
                    <Tab
                        isInverted={isInverted}
                        disabled={asGeolocation}
                        onClick={() => setAsGeolocation(true)}
                    >
                        {mapTabLabel}
                    </Tab>
                </ViewTabs>
                <MapWrapper isVisible={asGeolocation}>
                    <MapContainer
                        ref={setMapContainer}
                        tabIndex={0}
                        onClick={() => {
                            forceUpdate();
                            onBlur?.(getValue);
                        }}
                    />
                    {showTrackLocationBtn && (
                        <TrackLocationIcon onClick={getLocation}>
                            {customLocationIcon ? (
                                customLocationIcon({ isInverted })
                            ) : (
                                <StyledMyLocationIcon
                                    iconColor={
                                        isInverted
                                            ? colors.text.inverted
                                            : colors.text.default
                                    }
                                />
                            )}
                        </TrackLocationIcon>
                    )}
                </MapWrapper>
                {!asGeolocation && (
                    <React.Fragment>
                        <FieldView>
                            <FieldWrapper.Content>
                                <Area
                                    placeholder={placeholder}
                                    hasError={!!errorMsg}
                                    isInverted={isInverted}
                                    name={`${name}["description"]`}
                                    value={descValue}
                                    required={isRequired}
                                    onChange={(ev) => {
                                        const value = ev.currentTarget.value;
                                        setDescValue(value);
                                    }}
                                    onBlur={() => {
                                        forceUpdate();
                                        onBlur?.(getValue);
                                    }}
                                />
                            </FieldWrapper.Content>
                        </FieldView>
                    </React.Fragment>
                )}
                <FieldWrapper.Messages
                    infoMessage={infoMessage}
                    errorMessage={errorMsg}
                    isInverted={isInverted}
                />
            </FieldWrapper.View>
        </React.Fragment>
    );
};

export default LocationField;
