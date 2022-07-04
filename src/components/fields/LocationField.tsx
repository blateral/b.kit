import React, { FC, useCallback, useEffect, useState } from 'react';
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
import useLeafletMap from 'utils/useLeafletMap';
import LocationPin from 'components/base/icons/LocationPin';
import { getSVGDataImg } from 'utils/dataURI';
import { LocationIcon } from 'components/sections/Map';
import { useLibTheme } from 'utils/LibThemeProvider';
import { LeafletMouseEvent } from 'leaflet';
import useLazyInput from 'utils/useLazyInput';
import Place from 'components/base/icons/Place';
import { MyLocation } from 'components/base/icons/Icons';
import useMounted from 'utils/useMounted';
import ButtonGhost from 'components/buttons/ButtonGhost';

const MapWrapper = styled.div<{ isVisible?: boolean }>`
    display: ${({ isVisible }) => (isVisible ? 'block' : 'none')};
    position: relative;
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

const MapContainer = styled.div`
    position: relative;
    width: 100%;
    height: 250px;
    z-index: 0;

    margin-bottom: 10px;
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

const Icon = styled.div`
    & > * {
        max-width: 24px;
        max-height: 24px;
    }
`;

const InputField = styled.input<{
    isInverted?: boolean;
    hasError?: boolean;
}>`
    display: block;
    outline: none;
    width: 100%;
    min-height: 40px;
    box-shadow: none;

    border-radius: 0px;
    -webkit-appearance: none;

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

const ActionWrapper = styled.div`
    margin-top: ${spacings.nudge}px;
    text-align: left;
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
    position: [number, number];
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
    initialPosition?: [number, number];
    marker?: LocationIcon;
    zoom?: number;
    onChange?: (value: LocationData) => void;
    onBlur?: (value: LocationData) => void;
    customLocationIcon?: (props: { isInverted?: boolean }) => React.ReactNode;
    customAddressIcon?: (props: { isInverted?: boolean }) => React.ReactNode;
    toggleAction?: (props: {
        isInverted?: boolean;
        asGeolocation?: boolean;
        handleClick?: (
            e: React.SyntheticEvent<HTMLButtonElement, Event>
        ) => void;
    }) => React.ReactNode;
    geolocationErrorMsg?: string;
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
    initialPosition,
    zoom = 10,
    onChange,
    onBlur,
    customLocationIcon,
    customAddressIcon,
    toggleAction,
    geolocationErrorMsg = 'Your browser or device supports no geolocation!',
}) => {
    if (isDisabled) {
        errorMessage = '';
    }

    const { colors } = useLibTheme();

    const [isGeolocationSupported, setGeolocationSupport] =
        useState<boolean>(false);
    const [asGeolocation, setAsGeolocation] = useState<boolean>(false);
    const [isMapDirty, setMapDirty] = useState<boolean>(false);
    const [getValue, setValue] = useState<LocationData>(
        value || { description: '', position: initialPosition || [0, 0] }
    );
    const isMounted = useMounted();

    const {
        value: descValue,
        setValue: setDescValue,
        forceChange,
    } = useLazyInput({
        initialValue: value?.description || '',
        onLazyChange: (value) => {
            setValue((prev) => ({
                ...prev,
                description: value,
            }));
        },
    });
    const [errorMsg, setErrorMsg] = useState<string>(errorMessage || '');

    const defaultMarker: LocationIcon = {
        size: [28, 28],
        anchor: [14, 28],
        sizeActive: [70, 70],
        anchorActive: [35, 70],
        url: getSVGDataImg(<LocationPin />),
    };

    const onMapClick = (e: LeafletMouseEvent) => {
        const newPos: [number, number] = [e.latlng.lat, e.latlng.lng];
        setValue((prev) => ({
            ...prev,
            position: newPos,
        }));
    };

    const {
        setContainer: setMapContainer,
        flyToPosition,
        panToPosition,
        recalculateMapSize,
        getCurrentZoom,
    } = useLeafletMap({
        activeMarkerId: 'location',
        markers: [
            {
                id: 'location',
                position: [getValue?.position?.[0], getValue?.position?.[1]],
                icon: marker || defaultMarker,
            },
        ],
        center: initialPosition,
        zoom: 2.5,
        onClick: (ev) => {
            onMapClick(ev);
            setMapDirty(true);
        },
    });

    const getLocation = useCallback(() => {
        if (!navigator.geolocation) {
            setErrorMsg(geolocationErrorMsg);
            return;
        }

        navigator.geolocation.getCurrentPosition(
            (position) => {
                const newPos: [number, number] = [
                    position.coords.latitude,
                    position.coords.longitude,
                ];

                setValue((prev) => ({
                    ...prev,
                    position: newPos,
                }));

                setMapDirty(false);
            },
            null,
            { timeout: 10000 }
        );

        return getValue;
    }, [geolocationErrorMsg, getValue]);

    useEffect(() => {
        setGeolocationSupport(!!navigator.geolocation);
    }, []);

    useEffect(() => {
        if (value) {
            setValue(value);
        }
    }, [value]);

    useEffect(() => {
        setErrorMsg(errorMessage || '');
    }, [errorMessage]);

    useEffect(() => {
        if (asGeolocation) {
            recalculateMapSize();

            if (!getValue?.position?.[0] || !getValue?.position?.[1]) {
                getLocation();
            }
        }
    }, [asGeolocation, getLocation, getValue, recalculateMapSize]);

    useEffect(() => {
        if (isMounted) {
            onChange?.(getValue);
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [getValue]);

    useEffect(() => {
        let flyToZoom = zoom;
        const currentZoom = getCurrentZoom();

        if (currentZoom > flyToZoom) {
            flyToZoom = currentZoom;
        }

        flyToPosition(getValue.position, flyToZoom);
    }, [
        flyToPosition,
        getCurrentZoom,
        getValue.position,
        isMapDirty,
        panToPosition,
        zoom,
    ]);

    const toggleClickHandler = (
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        ev: React.SyntheticEvent<HTMLButtonElement>
    ) => {
        setAsGeolocation(!asGeolocation);
    };

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

            <FieldWrapper.View isDisabled={isDisabled}>
                <FieldWrapper.Head
                    label={label}
                    isRequired={isRequired}
                    isInverted={isInverted}
                />
                <MapWrapper isVisible={asGeolocation}>
                    <MapContainer ref={setMapContainer} />
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
                                <InputField
                                    placeholder={placeholder}
                                    hasError={!!errorMsg}
                                    type="text"
                                    isInverted={isInverted}
                                    name={`${name}["description"]`}
                                    value={descValue}
                                    required={isRequired}
                                    onChange={(ev) => {
                                        const value = ev.currentTarget.value;
                                        setDescValue(value);
                                    }}
                                    onBlur={() => {
                                        forceChange();
                                        onBlur?.(getValue);
                                    }}
                                />
                            </FieldWrapper.Content>
                            <Icon>
                                {customAddressIcon ? (
                                    customAddressIcon({ isInverted })
                                ) : (
                                    <Place
                                        iconColor={
                                            isInverted
                                                ? colors.text.inverted
                                                : colors.text.default
                                        }
                                    />
                                )}
                            </Icon>
                        </FieldView>
                    </React.Fragment>
                )}
                <FieldWrapper.Messages
                    infoMessage={infoMessage}
                    errorMessage={errorMsg}
                    isInverted={isInverted}
                />
            </FieldWrapper.View>
            <ActionWrapper>
                {toggleAction ? (
                    toggleAction({
                        isInverted,
                        asGeolocation,
                        handleClick: toggleClickHandler,
                    })
                ) : (
                    <ButtonGhost.View
                        as="button"
                        size="small"
                        onClick={toggleClickHandler}
                        {...{ type: 'button' }}
                    >
                        <ButtonGhost.Label>
                            {asGeolocation
                                ? 'Describe Location'
                                : 'Find location'}
                        </ButtonGhost.Label>
                    </ButtonGhost.View>
                )}
            </ActionWrapper>
        </React.Fragment>
    );
};

export default LocationField;
