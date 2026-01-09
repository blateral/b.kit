import { Meta, Story } from '@storybook/react';
import Button from 'components/buttons/Button';
import { PriceTableComponent } from 'components/sections/PriceTable';
import React from 'react';

export default {
    title: 'Sections / PriceTable',
    component: PriceTableComponent,
    parameters: {
        status: {
            type: ['production'],
        },
    },
} as Meta;

const button = (props: {
    isInverted?: boolean;
    isHighlighted?: boolean;
    title?: string;
    superTitle?: string;
}) => {
    if (props.isHighlighted) {
        return (
            <Button.View isInverted={props.isInverted} href="#0">
                <Button.Label>Primary</Button.Label>
            </Button.View>
        );
    } else {
        return (
            <Button.View isInverted={props.isInverted} href="#0">
                <Button.Label>Secondary</Button.Label>
            </Button.View>
        );
    }
};

export const Default: Story = () => (
    <PriceTableComponent
        items={[
            {
                superTitle: 'Tarif',
                title: '199,-',
                text: `
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat</p>`,
                action: button,
            },
            {
                superTitle: 'Tarif',
                title: '199,-',
                text: `
                    <p><strong>Lorem Ipsum Dolor Sit Amet</strong></p>
                                <ul>
                    <li>consetetur sadipscing</li>
                    <li>sed diam nonumy eirmod</li>
                    <li>invidunt ut labore et</li>
                    <li>At vero eos et accusam</li>
                    <li>consetetur sadipscing</li>
                    <li>sed diam nonumy eirmod</li>
                    <li>invidunt ut labore et</li>
                    <li>At vero eos et accusam</li>
                    <li>sed diam nonumy eirmod</li>
                </ul>`,
                action: button,
            },
            {
                superTitle: 'Tarif',
                title: '199,-',
                text: `
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat</p>`,
                action: button,
                isHighlighted: true,
            },
            {
                superTitle: 'Tarif',
                title: '199,-',
                text: `
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat</p>`,
                action: button,
            },
            {
                superTitle: 'Tarif',
                title: '199,-',
                text: `
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat</p>`,
                action: button,
            },
        ]}
    />
);

export const IsCentered: Story = () => (
    <PriceTableComponent
        isCentered
        items={[
            {
                superTitle: 'Tarif',
                title: '199,-',
                text: `
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat</p>`,
                action: button,
            },
            {
                superTitle: 'Tarif',
                title: '199,-',
                text: `
                    <p><strong>Lorem Ipsum Dolor Sit Amet</strong></p>
                                <ul>
                    <li>consetetur sadipscing</li>
                    <li>sed diam nonumy eirmod</li>
                    <li>invidunt ut labore et</li>
                    <li>At vero eos et accusam</li>
                    <li>consetetur sadipscing</li>
                    <li>sed diam nonumy eirmod</li>
                    <li>invidunt ut labore et</li>
                    <li>At vero eos et accusam</li>
                    <li>sed diam nonumy eirmod</li>
                </ul>`,
                action: button,
            },
            {
                superTitle: 'Tarif',
                title: '199,-',
                text: `
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat</p>`,
                action: button,
                isHighlighted: true,
            },
            {
                superTitle: 'Tarif',
                title: '199,-',
                text: `
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat</p>`,
                action: button,
            },
            {
                superTitle: 'Tarif',
                title: '199,-',
                text: `
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat</p>`,
                action: button,
            },
        ]}
    />
);

export const HasBackground: Story = () => (
    <PriceTableComponent
        items={[
            {
                superTitle: 'Tarif',
                title: '199,-',
                text: `
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat</p>`,
                action: button,
            },
            {
                superTitle: 'Tarif',
                title: '199,-',
                text: `
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat</p>`,
                action: button,
            },
            {
                superTitle: 'Tarif',
                title: '199,-',
                text: `
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat</p>`,
                action: button,
            },
            {
                superTitle: 'Tarif',
                title: '199,-',
                text: `
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat</p>`,
                action: button,
                isHighlighted: true,
            },
            {
                superTitle: 'Tarif',
                title: '199,-',
                text: `
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat</p>`,
                action: button,
            },
        ]}
        bgMode="full"
    />
);

export const IsInverted: Story = () => (
    <PriceTableComponent
        items={[
            {
                superTitle: 'Tarif',
                title: '199,-',
                text: `
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat</p>`,
                action: button,
            },
            {
                superTitle: 'Tarif',
                title: '199,-',
                text: `
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat</p>`,
                action: button,
            },
            {
                superTitle: 'Tarif',
                title: '199,-',
                text: `
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat</p>`,
                action: button,
            },
            {
                superTitle: 'Tarif',
                title: '199,-',
                text: `
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat</p>`,
                action: button,
                isHighlighted: true,
            },
            {
                superTitle: 'Tarif',
                title: '199,-',
                text: `
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat</p>`,
                action: button,
            },
        ]}
        bgMode="inverted"
    />
);
