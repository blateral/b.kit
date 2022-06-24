import React, { useEffect } from 'react';
import styled from 'styled-components';

import { copyStyle } from 'components/typography/Copy';
import {
    getColors as color,
    getFonts as font,
    spacings,
    getGlobals as global,
    withRange,
} from 'utils/styles';
import FieldWrapper, { FieldProps } from './FormField';
import { getFormFieldTextSize } from 'utils/formFieldText';
import FlyTo from 'components/base/icons/FlyTo';
import useLeafletMap from 'utils/useLeafletMap';
import LocationPin from 'components/base/icons/LocationPin';
import { getSVGDataImg } from 'utils/dataURI';
import { LocationIcon } from 'components/sections/Map';
import Button from 'components/buttons/Button';
import { useLibTheme } from 'utils/LibThemeProvider';

const MapWrapper = styled.div<{ isVisible?: boolean }>`
    display: ${({ isVisible }) => (isVisible ? 'block' : 'none')};
`;

const MapContainer = styled.div`
    position: relative;
    width: 100%;
    z-index: 0;

    height: 100%;
    min-height: 250px;

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

export type FormProps = FieldProps & {
    value?: string;
    name?: string;
    placeholder?: string;
};

export interface LocationProps {
    city?: string;
    street?: string;
    streetNumber?: string;
    postal?: string;
    country?: string;
}

const LocationField: React.FC<
    FormProps & {
        type?: 'number' | 'text' | 'tel' | 'email' | 'password';
        isInverted?: boolean;
        onChange?: (ev: React.SyntheticEvent<HTMLInputElement>) => void;
        onBlur?: (ev: React.SyntheticEvent<HTMLInputElement>) => void;
        customLocationIcon?: (props: {
            isInverted?: boolean;
        }) => React.ReactNode;
        customAddressIcon?: (props: {
            isInverted?: boolean;
        }) => React.ReactNode;
        locationButtonLabel?: string;
    }
> = ({
    type = 'text',
    label,
    errorMessage,
    infoMessage,
    isRequired,
    isDisabled,
    isInverted,
    placeholder,
    value = '',
    name,
    onChange,
    onBlur,
    customLocationIcon,
    customAddressIcon,
    locationButtonLabel,
}) => {
    if (isDisabled) {
        errorMessage = '';
    }

    const { colors } = useLibTheme();

    const defaultCoords = {
        accuracy: 0,
        altitude: null,
        altitudeAccuracy: null,
        heading: null,
        latitude: 0,
        longitude: 0,
        speed: null,
    };

    const [coords, setCoords] =
        React.useState<GeolocationCoordinates>(defaultCoords);

    const [asGeolocation, setAsGeolocation] = React.useState<boolean>(true);

    const [val, setVal] = React.useState(value);

    const defaultMarker: LocationIcon = {
        size: [28, 28],
        anchor: [14, 28],
        sizeActive: [70, 70],
        anchorActive: [35, 70],
        url: getSVGDataImg(<LocationPin />),
    };

    const { setContainer: setMapContainer, flyToPosition } = useLeafletMap({
        center: [coords.latitude, coords.longitude],
        activeMarkerId: 'location',
        markers: [
            {
                id: 'location',
                position: [coords.latitude, coords.longitude],
                icon: defaultMarker,
            },
        ],
        fitBoundsPadding: [30, 30],
    });

    const getLocation = () => {
        if (!navigator.geolocation) {
            errorMessage =
                // eslint-disable-next-line react-hooks/exhaustive-deps
                '<p>Geolokation wird von ihrem Browser nicht unterstützt</p>';
            return;
        }

        navigator.geolocation.getCurrentPosition(
            (position) => {
                setCoords(position.coords);
                flyToPosition(
                    [position.coords.latitude, position.coords.longitude],
                    15
                );
            },
            null,
            { timeout: 10000 }
        );

        return val;
    };

    useEffect(() => {
        const formattedCoordinates = `${coords.latitude},${coords.longitude}`;
        setVal(formattedCoordinates);
    }, [coords]);

    useEffect(() => {
        setVal(value);
    }, [value]);

    return (
        <>
            <MapWrapper isVisible={asGeolocation}>
                <MapContainer ref={setMapContainer} />
            </MapWrapper>
            <FieldWrapper.View isDisabled={isDisabled}>
                <FieldWrapper.Head
                    label={label}
                    isRequired={isRequired}
                    isInverted={isInverted}
                />
                <FieldView>
                    <FieldWrapper.Content>
                        <InputField
                            placeholder={placeholder}
                            hasError={!!errorMessage}
                            type={type}
                            isInverted={isInverted}
                            name={name}
                            value={val}
                            required={isRequired}
                            onChange={(ev) => {
                                onChange && onChange(ev);
                                setVal(ev.currentTarget.value);
                            }}
                            onBlur={onBlur}
                        />
                    </FieldWrapper.Content>
                    {asGeolocation ? (
                        <Icon onClick={getLocation}>
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
                        </Icon>
                    ) : (
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
                    )}
                </FieldView>
                <FieldWrapper.Messages
                    infoMessage={infoMessage}
                    errorMessage={errorMessage}
                    isInverted={isInverted}
                />
            </FieldWrapper.View>
            <ActionWrapper>
                <Button.View
                    as="button"
                    onClick={() => setAsGeolocation(!asGeolocation)}
                >
                    <Button.Label>
                        {`${
                            locationButtonLabel
                                ? locationButtonLabel
                                : `Standorterkennung ${
                                      asGeolocation
                                          ? 'ausschalten'
                                          : 'verwenden'
                                  }`
                        }`}
                    </Button.Label>
                </Button.View>
            </ActionWrapper>
        </>
    );
};

export default LocationField;
