import * as React from 'react';
import { Meta } from '@storybook/react';
import styled from 'styled-components';

import Button from '../src/components/buttons/Button';
import ArrowRight from '../src/components/base/icons/ArrowRight';

export default {
    title: 'Buttons/Button',
    component: Button.View,
    decorators: [
        (Story) => (
            <Helper>
                <Story />
            </Helper>
        ),
    ],
} as Meta;

// Story Helper
const Helper = styled.div`
    height: 300px;
    width: 100%;
    padding: 20px;
`;

export const Default = () => (
    <Button.View as="button" onClick={console.log}>
        <Button.Label>Primary</Button.Label>
    </Button.View>
);

export const Link = () => (
    <Button.View as="a" href="#" onClick={console.log}>
        <Button.Label>Primary</Button.Label>
    </Button.View>
);

export const ExternalLink = () => (
    <Button.View as="a" href="#" isExternal onClick={console.log}>
        <Button.Label>Primary</Button.Label>
    </Button.View>
);

export const WithIcon = () => (
    <Button.View as="a" href="#" onClick={console.log}>
        <Button.Label>zum Haus St. Ulrich</Button.Label>
        <Button.Icon>
            <ArrowRight />
        </Button.Icon>
    </Button.View>
);

export const Disabled = () => (
    <Button.View as="a" href="#" isDisabled onClick={console.log}>
        <Button.Label>zum Haus St. Ulrich</Button.Label>
        <Button.Icon>
            <ArrowRight />
        </Button.Icon>
    </Button.View>
);

export const Inverted = () => (
    <Button.View as="a" href="#" isInverted onClick={console.log}>
        <Button.Label>zum Haus St. Ulrich</Button.Label>
        <Button.Icon>
            <ArrowRight />
        </Button.Icon>
    </Button.View>
);

Inverted.parameters = {
    backgrounds: {
        default: 'inverted',
        values: [{ name: 'inverted', value: 'black' }],
    },
};

export const InvertedAndDisabled = () => (
    <Button.View as="a" href="#" isInverted isDisabled onClick={console.log}>
        <Button.Label>zum Haus St. Ulrich</Button.Label>
        <Button.Icon>
            <ArrowRight />
        </Button.Icon>
    </Button.View>
);

InvertedAndDisabled.parameters = {
    backgrounds: {
        default: 'inverted',
        values: [{ name: 'inverted', value: 'black' }],
    },
};

export const Ghost = () => (
    <Button.View type="ghost" as="a" href="#" onClick={console.log}>
        <Button.Label>zum Haus St. Ulrich</Button.Label>
    </Button.View>
);

export const GhostWithIcon = () => (
    <Button.View type="ghost" as="a" href="#" onClick={console.log}>
        <Button.Label>zum Haus St. Ulrich</Button.Label>
        <Button.Icon>
            <ArrowRight />
        </Button.Icon>
    </Button.View>
);

export const GhostDisabled = () => (
    <Button.View type="ghost" as="a" href="#" isDisabled onClick={console.log}>
        <Button.Label>zum Haus St. Ulrich</Button.Label>
        <Button.Icon>
            <ArrowRight />
        </Button.Icon>
    </Button.View>
);

export const GhostInverted = () => (
    <Button.View type="ghost" as="a" href="#" isInverted onClick={console.log}>
        <Button.Label>zum Haus St. Ulrich</Button.Label>
        <Button.Icon>
            <ArrowRight />
        </Button.Icon>
    </Button.View>
);

GhostInverted.parameters = {
    backgrounds: {
        default: 'inverted',
        values: [{ name: 'inverted', value: 'black' }],
    },
};

export const GhostInvertedAndDisabled = () => (
    <Button.View
        type="ghost"
        as="a"
        href="#"
        isInverted
        isDisabled
        onClick={console.log}
    >
        <Button.Label>zum Haus St. Ulrich</Button.Label>
        <Button.Icon>
            <ArrowRight />
        </Button.Icon>
    </Button.View>
);

GhostInvertedAndDisabled.parameters = {
    backgrounds: {
        default: 'inverted',
        values: [{ name: 'inverted', value: 'black' }],
    },
};
