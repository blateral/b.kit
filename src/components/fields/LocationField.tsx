import React from 'react';
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

import Geocode from 'react-geocode';

// TODO: API KEY
const APIKEY = 'put the api key here';
Geocode.setApiKey(APIKEY);

const FieldView = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    & > * + * {
        margin-left: 16px;
    }
`;

const LocationFlyTo = styled.div`
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
}) => {
    if (isDisabled) {
        errorMessage = '';
    }

    const defaultCoords = {
        accuracy: 0,
        altitude: null,
        altitudeAccuracy: null,
        heading: null,
        latitude: 0,
        longitude: 0,
        speed: null,
    };

    const defaultLocation = {
        city: undefined,
        street: undefined,
        streetNumber: undefined,
        postal: undefined,
        country: undefined,
        language: 'de',
    };

    const [coords, setCoords] =
        React.useState<GeolocationCoordinates>(defaultCoords);

    const [address, setAddress] =
        React.useState<LocationProps>(defaultLocation);
    const [val, setVal] = React.useState(value);

    const getLocation = () => {
        if (!navigator.geolocation) {
            errorMessage =
                // eslint-disable-next-line react-hooks/exhaustive-deps
                '<p>Geolokation wird von ihrem Browser nicht unterstützt</p>';
            return;
        }

        const locationTimeout = setTimeout('geolocFail()', 1000);

        navigator.geolocation.getCurrentPosition(
            (position) => {
                clearTimeout(locationTimeout);
                setCoords(position.coords);
            },
            null,
            { timeout: locationTimeout }
        );

        const formattedCoordinates = `${coords.latitude},${coords.longitude}`;

        // GEOCODING WITH react-geocode
        Geocode.setLanguage(defaultLocation.language);
        Geocode.setRegion(defaultLocation.language);
        Geocode.setLocationType('ROOFTOP');

        Geocode.fromLatLng(`${coords.latitude}`, `${coords.longitude}`).then(
            (response) => {
                let city, street, streetNumber, postal, country;
                for (
                    let i = 0;
                    i < response.results[0].address_components.length;
                    i++
                ) {
                    for (
                        let j = 0;
                        j <
                        response.results[0].address_components[i].types.length;
                        j++
                    ) {
                        switch (
                            response.results[0].address_components[i].types[j]
                        ) {
                            case 'locality':
                                city =
                                    response.results[0].address_components[i]
                                        .long_name;
                                break;
                            case 'route':
                                street =
                                    response.results[0].address_components[i]
                                        .long_name;
                                break;
                            case 'street_number':
                                streetNumber =
                                    response.results[0].address_components[i]
                                        .long_name;
                                break;
                            case 'country':
                                country =
                                    response.results[0].address_components[i]
                                        .long_name;
                                break;
                            case 'postal_code':
                                postal =
                                    response.results[0].address_components[i]
                                        .long_name;
                                break;
                        }
                    }
                }
                setAddress({
                    city: city,
                    street: street,
                    streetNumber: streetNumber,
                    postal: postal,
                    country: country,
                });
            }
        );

        Geocode.fromAddress(value).then((response) => {
            const addressCoords = response.results[0].geometry.location;
            setCoords(addressCoords);
        });

        const hasFormattedAddress =
            address.city !== undefined &&
            address.street !== undefined &&
            address.streetNumber !== undefined &&
            address.postal !== undefined &&
            address.country !== undefined;

        const formattedAddress = `${address.street} ${address.streetNumber}, ${address.postal} ${address.city}, ${address.country}`;

        setVal(hasFormattedAddress ? formattedAddress : formattedCoordinates);

        return val;
    };

    return (
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
                            onChange && onChange(ev), getLocation();
                        }}
                        onBlur={onBlur}
                    />
                </FieldWrapper.Content>
                <LocationFlyTo onClick={getLocation}>
                    {customLocationIcon ? (
                        customLocationIcon({ isInverted })
                    ) : (
                        <FlyTo />
                    )}
                </LocationFlyTo>
            </FieldView>
            <FieldWrapper.Messages
                infoMessage={infoMessage}
                errorMessage={errorMessage}
                isInverted={isInverted}
            />
        </FieldWrapper.View>
    );
};

export default LocationField;
