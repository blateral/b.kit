import * as React from 'react';
import { Meta, Story } from '@storybook/react';
import Textfield from '../components/blocks/input/Textfield';
import styled from 'styled-components';

const Separator = () => (
    <React.Fragment>
        <br />
        <br />
        <hr />
        <br />
        <br />
    </React.Fragment>
);

const Textfields: React.FC<{
    isInverted?: boolean;
    hasError?: boolean;
    errorMessage?: boolean;
    infoMessage?: boolean;
    isOptionalField?: boolean;
    isDisabledField?: boolean;
}> = ({
    isInverted,
    hasError,
    errorMessage,
    infoMessage,
    isOptionalField,
    isDisabledField,
}) => {
    return (
        <React.Fragment>
            <Textfield
                isInverted={isInverted}
                label="Type Text"
                hasError={hasError}
                errorMessage={
                    errorMessage
                        ? 'Bitte geben Sie einen gültigen Text ein!'
                        : ''
                }
                infoMessage={infoMessage ? 'Das ist ein Textfeld' : ''}
                isDisabled={isDisabledField}
            />
            <Separator />
            <Textfield
                isInverted={isInverted}
                label="Type E-Mail"
                type="email"
                hasError={hasError}
                errorMessage={
                    errorMessage
                        ? 'Bitte geben Sie eine gültige E-Mail ein!'
                        : ''
                }
                infoMessage={infoMessage ? 'Das ist ein E-Mail Feld' : ''}
                isDisabled={isDisabledField}
            />
            <Separator />
            <Textfield
                isInverted={isInverted}
                label="Type Telephone"
                type="tel"
                hasError={hasError}
                errorMessage={
                    errorMessage
                        ? 'Bitte geben Sie eine gültige Telefonnummer ein!'
                        : ''
                }
                infoMessage={infoMessage ? 'Das ist ein Telefon Feld' : ''}
                isOptional={isOptionalField}
            />
        </React.Fragment>
    );
};

const Background = styled.div<{ dark?: boolean }>`
    background-color: ${({ dark }) => (dark ? '#1d2223' : 'transparent')};
    height: 100vh;
    padding: 20px;
`;

export default {
    title: 'Blocks/Input/Textfield',
    component: Textfield,
} as Meta;

export const Default: Story = () => (
    <Background>
        <Textfields />
    </Background>
);

export const IsInverted: Story = () => (
    <Background dark>
        <Textfields isInverted />
    </Background>
);

export const HasError: Story = () => (
    <Background dark>
        <Textfields isInverted hasError errorMessage />
    </Background>
);

export const WithInfoMessage: Story = () => (
    <Background dark>
        <Textfields isInverted infoMessage />
    </Background>
);

export const HasOptionalFields: Story = () => (
    <Background dark>
        <Textfields isInverted infoMessage isOptionalField />
    </Background>
);

export const IsDisabledAndHasOptionalField: Story = () => (
    <Background dark>
        <Textfields isDisabledField isInverted infoMessage isOptionalField />
    </Background>
);
