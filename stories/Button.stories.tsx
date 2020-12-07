import * as React from 'react';
import { storiesOf } from '@storybook/react';
import styled from 'styled-components';

import Button from '../src/components/buttons/Button';
import ArrowRight from '../src/components/base/icons/ArrowRight';
import { getColors } from '../src/utils/styles';

// Story Helper
const Helper = styled.div<{ inverted?: boolean }>`
    height: 300px;
    width: 100%;
    padding: 20px;
    background-color: ${({ theme, inverted }) =>
        inverted && getColors(theme).black};
`;

storiesOf('Buttons / Button', module)
    .add('default', () => {
        return (
            <Helper>
                <Button.View as="button" onClick={console.log}>
                    <Button.Label>Primary</Button.Label>
                </Button.View>
            </Helper>
        );
    })
    .add('link', () => {
        return (
            <Helper>
                <Button.View as="a" href="#" onClick={console.log}>
                    <Button.Label>Primary</Button.Label>
                </Button.View>
            </Helper>
        );
    })
    .add('external link', () => {
        return (
            <Helper>
                <Button.View as="a" href="#" isExternal onClick={console.log}>
                    <Button.Label>Primary</Button.Label>
                </Button.View>
            </Helper>
        );
    })
    .add('with icon', () => {
        return (
            <Helper>
                <Button.View as="a" href="#" onClick={console.log}>
                    <Button.Label>zum Haus St. Ulrich</Button.Label>
                    <Button.Icon>
                        <ArrowRight />
                    </Button.Icon>
                </Button.View>
            </Helper>
        );
    })
    .add('disabled', () => {
        return (
            <Helper>
                <Button.View as="a" href="#" isDisabled onClick={console.log}>
                    <Button.Label>zum Haus St. Ulrich</Button.Label>
                    <Button.Icon>
                        <ArrowRight />
                    </Button.Icon>
                </Button.View>
            </Helper>
        );
    })
    .add('inverted', () => {
        return (
            <Helper inverted>
                <Button.View as="a" href="#" isInverted onClick={console.log}>
                    <Button.Label>zum Haus St. Ulrich</Button.Label>
                    <Button.Icon>
                        <ArrowRight />
                    </Button.Icon>
                </Button.View>
            </Helper>
        );
    })
    .add('inverted and disabled', () => {
        return (
            <Helper inverted>
                <Button.View
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
            </Helper>
        );
    })
    .add('ghost', () => {
        return (
            <Helper>
                <Button.View type="ghost" as="a" href="#" onClick={console.log}>
                    <Button.Label>zum Haus St. Ulrich</Button.Label>
                </Button.View>
            </Helper>
        );
    })
    .add('ghost with icon', () => {
        return (
            <Helper>
                <Button.View type="ghost" as="a" href="#" onClick={console.log}>
                    <Button.Label>zum Haus St. Ulrich</Button.Label>
                    <Button.Icon>
                        <ArrowRight />
                    </Button.Icon>
                </Button.View>
            </Helper>
        );
    })
    .add('ghost disabled', () => {
        return (
            <Helper>
                <Button.View
                    type="ghost"
                    as="a"
                    href="#"
                    isDisabled
                    onClick={console.log}
                >
                    <Button.Label>zum Haus St. Ulrich</Button.Label>
                    <Button.Icon>
                        <ArrowRight />
                    </Button.Icon>
                </Button.View>
            </Helper>
        );
    })
    .add('ghost inverted', () => {
        return (
            <Helper inverted>
                <Button.View
                    type="ghost"
                    as="a"
                    href="#"
                    isInverted
                    onClick={console.log}
                >
                    <Button.Label>zum Haus St. Ulrich</Button.Label>
                    <Button.Icon>
                        <ArrowRight />
                    </Button.Icon>
                </Button.View>
            </Helper>
        );
    })
    .add('ghost inverted and disabled', () => {
        return (
            <Helper inverted>
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
            </Helper>
        );
    });
