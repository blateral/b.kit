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

const LocationField: React.FC<
    FormProps & {
        type?: 'number' | 'text' | 'tel' | 'email' | 'password';
        isInverted?: boolean;
        onChange?: (ev: React.SyntheticEvent<HTMLInputElement>) => void;
        onBlur?: (ev: React.SyntheticEvent<HTMLInputElement>) => void;
        onLocationClick?: () => void;
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
    value,
    name,
    onChange,
    onBlur,
    onLocationClick,
    customLocationIcon,
}) => {
    if (isDisabled) {
        errorMessage = '';
    }

    const [coords, setCoords] = React.useState<GeolocationCoordinates>();

    onLocationClick = () => {
        if (!navigator.geolocation) {
            errorMessage =
                '<p>Geolokation wird von ihrem Browser nicht unterstützt</p>';
            return;
        }

        navigator.geolocation.getCurrentPosition((position) => {
            setCoords(position.coords);
        });

        const address =
            'http://maps.googleapis.com/maps/api/staticmap?center=' +
            coords?.latitude +
            ',' +
            coords?.longitude +
            '&zoom=13&size=300x300&sensor=false';

        console.log(
            'Latitude is :',
            coords?.latitude,
            'Longitude is :',
            coords?.longitude,
            'Address: ',
            address
        );
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
                        value={value}
                        required={isRequired}
                        onChange={onChange}
                        onBlur={onBlur}
                    />
                </FieldWrapper.Content>
                <LocationFlyTo onClick={onLocationClick}>
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
