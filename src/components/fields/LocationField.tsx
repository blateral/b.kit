import React, { useEffect } from 'react';
import styled from 'styled-components';

import { copyStyle } from 'components/typography/Copy';
import {
    getColors as color,
    getFonts as font,
    spacings,
    getGlobals as global,
    withRange,
    mq,
} from 'utils/styles';
import FieldWrapper, { FieldProps } from './FormField';
import { getFormFieldTextSize } from 'utils/formFieldText';
import FlyTo from 'components/base/icons/FlyTo';
import useLeafletMap from 'utils/useLeafletMap';

const MapContainer = styled.div`
    position: relative;
    top: 0;
    left: 0;
    bottom: 0;
    width: 100%;
    z-index: 0;

    height: 100%;
    min-height: 230px;

    @media ${mq.semilarge} {
        position: absolute;
        /** 
            calculate width of 6 grid cols (grid width = viewport width without wrapper paddings)
            and add left or right wrapper padding afterwards
         */
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

    const [coords, setCoords] =
        React.useState<GeolocationCoordinates>(defaultCoords);

    const [val, setVal] = React.useState(value);

    const { setContainer: setMapContainer } = useLeafletMap({
        markers: [{ id: '', position: [coords.latitude, coords.longitude] }],
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
                // clearTimeout(locationTimeout);
                setCoords(position.coords);
            },
            null,
            { timeout: 10000 }
        );

        const formattedCoordinates = `${coords.latitude},${coords.longitude}`;

        setVal(formattedCoordinates);

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
            <MapContainer ref={setMapContainer}>
                {/* {flyToControl && (
                    <FylToCtrlContainer
                        onClick={(ev) => {
                            ev.stopPropagation();
                            flyToActive(flyToZoom);
                        }}
                    >
                        {flyToControl}
                    </FylToCtrlContainer>
                )} */}
            </MapContainer>
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
        </>
    );
};

export default LocationField;
