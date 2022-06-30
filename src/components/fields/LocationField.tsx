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
import FlyTo from 'components/base/icons/FlyTo';
import useLeafletMap from 'utils/useLeafletMap';
import LocationPin from 'components/base/icons/LocationPin';
import { getSVGDataImg } from 'utils/dataURI';
import { LocationIcon } from 'components/sections/Map';
import Button from 'components/buttons/Button';
import { useLibTheme } from 'utils/LibThemeProvider';
import { LeafletMouseEvent } from 'leaflet';

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
    margin-top: ${spacings.nudge * 2}px;
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
    marker?: LocationIcon;
    onChange?: (value: LocationData) => void;
    onBlur?: (ev: React.SyntheticEvent<HTMLInputElement>) => void;
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
        value || { description: '', position: [0, 0] }
    );
    const [errorMsg, setErrorMsg] = useState<string>(errorMessage || '');

    const defaultMarker: LocationIcon = {
        size: [28, 28],
        anchor: [14, 28],
        sizeActive: [70, 70],
        anchorActive: [35, 70],
        url: getSVGDataImg(<LocationPin />),
    };

    const onMapClick = (e: LeafletMouseEvent) => {
        setValue((prev) => ({
            ...prev,
            position: [e.latlng.lat, e.latlng.lng],
        }));
    };

    const {
        setContainer: setMapContainer,
        flyToPosition,
        recalculateMapSize,
    } = useLeafletMap({
        activeMarkerId: 'location',
        markers: [
            {
                id: 'location',
                position: [getValue?.position?.[0], getValue?.position?.[1]],
                icon: marker || defaultMarker,
            },
        ],
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
                setValue((prev) => ({
                    ...prev,
                    position: [
                        position.coords.latitude,
                        position.coords.longitude,
                    ],
                }));

                flyToPosition(
                    [position.coords.latitude, position.coords.longitude],
                    5
                );
                setMapDirty(false);
            },
            null,
            { timeout: 10000 }
        );

        return getValue;
    }, [flyToPosition, geolocationErrorMsg, getValue]);

    useEffect(() => {
        setGeolocationSupport(!!navigator.geolocation);
    }, []);

    useEffect(() => {
        if (value) {
            setValue(value);
        }
    }, [value]);

    useEffect(() => {
        if (errorMessage) {
            setErrorMsg(errorMessage);
        }
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
        onChange?.(getValue);
    }, [getValue, onChange]);

    const toggleClickHandler = (
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        ev: React.SyntheticEvent<HTMLButtonElement>
    ) => {
        setAsGeolocation(!asGeolocation);
    };

    const showTrackLocationBtn = isGeolocationSupported && isMapDirty;

    return (
        <React.Fragment>
            <MapWrapper isVisible={asGeolocation}>
                <MapContainer ref={setMapContainer} />
                {showTrackLocationBtn && (
                    <TrackLocationIcon onClick={getLocation}>
                        {customLocationIcon ? (
                            customLocationIcon({ isInverted })
                        ) : (
                            <FlyTo
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
            {name && (
                <input
                    type="hidden"
                    name={`${name}["location"]`}
                    value={`${getValue?.position?.[0]},${getValue?.position?.[1]}`}
                />
            )}

            <FieldWrapper.View isDisabled={isDisabled}>
                {!asGeolocation && (
                    <React.Fragment>
                        <FieldWrapper.Head
                            label={label}
                            isRequired={isRequired}
                            isInverted={isInverted}
                        />
                        <FieldView>
                            <FieldWrapper.Content>
                                <InputField
                                    placeholder={placeholder}
                                    hasError={!!errorMsg}
                                    type="text"
                                    isInverted={isInverted}
                                    name={`${name}["description"]`}
                                    value={getValue.description}
                                    required={isRequired}
                                    onChange={(ev) => {
                                        // onChange && onChange(ev);
                                        const value = ev.currentTarget.value;
                                        setValue((prev) => ({
                                            ...prev,
                                            description: value,
                                        }));
                                    }}
                                    onBlur={onBlur}
                                />
                            </FieldWrapper.Content>
                            <Icon>
                                {customAddressIcon ? (
                                    customAddressIcon({ isInverted })
                                ) : (
                                    <LocationPin
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
                    <Button.View as="button" onClick={toggleClickHandler}>
                        <Button.Label>
                            {asGeolocation
                                ? 'Describe Location'
                                : 'Find location'}
                        </Button.Label>
                    </Button.View>
                )}
            </ActionWrapper>
        </React.Fragment>
    );
};

export default LocationField;
