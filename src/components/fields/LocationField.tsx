import React, { FC, useCallback, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

import Copy, { copyStyle } from 'components/typography/Copy';
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
import useUpdateEffect from 'utils/useUpdateEffect';
import useGeolocation from 'utils/useGeolocation';
import * as Icons from 'components/base/icons/Icons';

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

const ViewToggle = styled.button`
    display: flex;
    flex-direction: row;
    align-items: center;
    background: none;
    border: none;
    padding: ${spacings.nudge}px 0;
    padding-bottom: ${spacings.nudge * 2}px;

    cursor: pointer;

    & > * + * {
        margin-left: ${spacings.nudge * 2}px;
    }
`;

const ToggleText = styled(Copy)`
    line-height: 1;
`;

const ResetMap = styled.div`
    position: absolute;
    top: ${spacings.nudge}px;
    right: ${spacings.nudge}px;
`;

const ResetMapControl = styled.button`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background: none;
    border: 0;
    padding: ${spacings.nudge}px;
    margin-top: -${spacings.nudge}px;
    margin-right: -${spacings.nudge}px;

    cursor: pointer;
    transition: color 0.2s ease-in-out;

    @media (hover: hover) and (pointer: fine) {
        &:hover {
            color: ${({ theme }) => color(theme).primary.default};
        }
    }

    &:focus {
        outline: 1px solid ${({ theme }) => color(theme).primary.default};
        outline-offset: 0;
    }

    &:focus:not(:focus-visible) {
        outline: none;
    }
`;

const TrackLocation = styled.div`
    position: absolute;
    bottom: ${spacings.nudge * 2}px;
    right: ${spacings.nudge}px;
`;

const TrackLocationControl = styled.button`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background: ${({ theme }) => color(theme).elementBg.dark};
    border: none;
    padding: 0.7em;
    min-height: 40px;

    ${copyStyle('copy', 'small')}
    color: ${({ theme }) => font(theme).copy.small.colorInverted};
    cursor: pointer;

    @media (hover: hover) and (pointer: fine) {
        &:hover {
            box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.25);
        }
    }

    &:focus {
        text-decoration: underline;
        box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.25);
    }

    &:focus:not(:focus-visible) {
        text-decoration: none;
        outline: none;
        box-shadow: none;
    }

    &:active {
        box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.3);
    }
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

export interface LocationFieldProps {
    enableMemo?: boolean;
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
    customToggle?: (props: {
        isInverted?: boolean;
        viewState?: 'desc' | 'map';
        handleClick?: () => void;
    }) => React.ReactNode;
    customLocationControl?: (props: {
        isInverted?: boolean;
        handleClick?: () => void;
    }) => React.ReactNode;
    customResetControl?: (props: {
        isInverted?: boolean;
        handleClick?: () => void;
    }) => React.ReactNode;
    descriptionTabLabel?: string;
    mapTabLabel?: string;
    trackLocationLabel?: string;
}

const LocationField: FC<LocationFieldProps> = ({
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
    customToggle,
    customLocationControl,
    customResetControl,
    descriptionTabLabel = 'Address',
    mapTabLabel = 'GPS Coordinates',
    trackLocationLabel = 'My location',
}) => {
    if (isDisabled) {
        errorMessage = '';
    }

    const { colors } = useLibTheme();

    const [useMapView, setUseMapView] = useState<boolean>(false);
    const [getValue, setValue] = useState<LocationData>(
        value || { description: '' }
    );
    const prevValue = useRef<LocationData | null>(null);
    const [errorMsg, setErrorMsg] = useState<string>(errorMessage || '');
    const [markers, setMarkers] = useState<LeafletMapMarker[]>([]);

    const {
        value: descValue,
        setValue: setDescValue,
        forceUpdate,
    } = useLazyInput((value) => {
        setValue({
            description: value,
            position: undefined,
        });
    }, value?.description || '');

    const getMarkersFromPositions = useCallback(
        (positions: Array<[number, number]>) => {
            /** Markers */
            const defaultMarker: LocationIcon = {
                size: [28, 28],
                anchor: [14, 28],
                sizeActive: [70, 70],
                anchorActive: [35, 70],
                url: getSVGDataImg(<LocationPin />),
            };
            const markerList: LeafletMapMarker[] = [];

            for (const position of positions) {
                markerList.push({
                    id: 'location',
                    position: position,
                    icon: marker || defaultMarker,
                });
            }

            return markerList;
        },
        [marker]
    );

    const {
        setContainer: setMapContainer,
        flyToPosition,
        recalculateMapSize,
    } = useLeafletMap({
        activeMarkerId: 'location',
        markers: markers,
        center: initialMapCenter,
        zoom: zoom,
        onClick: (ev) => {
            mapClickHandler(ev);
        },
    });

    // double click fix
    const doubleClickTimerRef = useRef<number | null>(null);

    const {
        isSupported: isGeolocationSupported,
        isEnabled,
        location,
        error,
        reset: resetLocationTracking,
        cancel: cancelGeolocation,
    } = useGeolocation(true, false);

    const setMapToInitial = useCallback(() => {
        flyToPosition(initialMapCenter, zoom);
        cancelGeolocation();
    }, [cancelGeolocation, flyToPosition, initialMapCenter, zoom]);

    const handleMapClick = (newPos: [number, number]) => {
        cancelGeolocation();

        // set marker
        const markers = getMarkersFromPositions([newPos]);
        setMarkers(markers);
        setValue({
            description: '',
            position: newPos,
        });
    };

    const handleTrackClick = () => {
        // if we have old location set marker, map and value
        setToCurrentLocation();
        resetLocationTracking();
    };

    const mapClickHandler = (ev: LeafletMouseEvent) => {
        const newPos: [number, number] = [ev.latlng.lat, ev.latlng.lng];

        if (doubleClickTimerRef.current === null) {
            doubleClickTimerRef.current = window.setTimeout(() => {
                handleMapClick(newPos);
                doubleClickTimerRef.current = null;
            }, 300);
        } else {
            window.clearTimeout(doubleClickTimerRef.current);
            doubleClickTimerRef.current = null;
        }
    };

    const setToCurrentLocation = useCallback(() => {
        if (!location) return;

        const newPos: [number, number] = [
            location.coords.latitude,
            location.coords.longitude,
        ];

        const marker = getMarkersFromPositions([newPos]);
        setMarkers(marker);
        flyToPosition(newPos, 14);

        setValue({
            description: '',
            position: newPos,
        });
    }, [flyToPosition, getMarkersFromPositions, location]);

    const toggleViewState = () => {
        setUseMapView((prev) => !prev);
    };

    useEffect(() => {
        if (isEnabled && location && !error) {
            setToCurrentLocation();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [error, location, isEnabled]);

    useEffect(() => {
        setErrorMsg(errorMessage || '');
    }, [errorMessage]);

    useEffect(() => {
        setValue({ description: '', position: undefined });

        // recalculate map on view change
        if (useMapView) {
            recalculateMapSize();
            setDescValue('');
        } else {
            setMarkers([]);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [useMapView, recalculateMapSize, descValue]);

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
                {customToggle ? (
                    customToggle({
                        isInverted,
                        viewState: useMapView ? 'map' : 'desc',
                        handleClick: toggleViewState,
                    })
                ) : (
                    <ViewToggle type="button" onClick={toggleViewState}>
                        {useMapView ? (
                            <Icons.ToggleOn
                                iconColor={
                                    isInverted
                                        ? colors.primary.inverted
                                        : colors.primary.default
                                }
                            />
                        ) : (
                            <Icons.ToggleOff />
                        )}
                        <ToggleText size="small" renderAs="span">
                            {!useMapView ? mapTabLabel : descriptionTabLabel}
                        </ToggleText>
                    </ViewToggle>
                )}

                <MapWrapper isVisible={useMapView}>
                    <MapContainer
                        ref={setMapContainer}
                        tabIndex={0}
                        onClick={() => {
                            forceUpdate();
                            onBlur?.(getValue);
                        }}
                    />
                    <ResetMap>
                        {customResetControl ? (
                            customResetControl({
                                isInverted,
                                handleClick: setMapToInitial,
                            })
                        ) : (
                            <ResetMapControl onClick={setMapToInitial}>
                                <Icons.LocationSearch />
                            </ResetMapControl>
                        )}
                    </ResetMap>
                    {isGeolocationSupported && (
                        <TrackLocation>
                            {customLocationControl ? (
                                customLocationControl({
                                    isInverted,
                                    handleClick: handleTrackClick,
                                })
                            ) : (
                                <TrackLocationControl
                                    onClick={handleTrackClick}
                                >
                                    {trackLocationLabel}
                                </TrackLocationControl>
                            )}
                        </TrackLocation>
                    )}

                    {/* {showTrackLocationBtn && (
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
                    )} */}
                </MapWrapper>
                {!useMapView && (
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

/**
 * Function to compare both field prop states
 * @param prev Previous props
 * @param next Next props
 * @returns
 */
const areEqual = (prev: LocationFieldProps, next: LocationFieldProps) => {
    // only apply logic if memo functionality is enabled
    if (!prev.enableMemo) return false;

    if (prev.descriptionTabLabel !== next.descriptionTabLabel) return false;
    if (prev.errorMessage !== next.errorMessage) return false;
    if (prev.infoMessage !== next.infoMessage) return false;
    if (prev.label !== next.label) return false;
    if (prev.mapTabLabel !== next.mapTabLabel) return false;
    if (prev.placeholder !== next.placeholder) return false;
    if (prev.value?.description !== next.value?.description) return false;
    if (
        prev.value?.position?.[0] !== next.value?.position?.[0] ||
        prev.value?.position?.[1] !== next.value?.position?.[1]
    ) {
        return false;
    }

    return true;
};

export default React.memo(LocationField, areEqual);
