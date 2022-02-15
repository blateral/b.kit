import React from 'react';
import { Meta, Story } from '@storybook/react';
import PriceTag from 'components/blocks/PriceTag';
import Button from 'components/buttons/Button';
import ButtonGhost from 'components/buttons/ButtonGhost';

export default {
    title: 'Blocks / PriceTag',
    component: PriceTag,
    parameters: {
        status: {
            type: 'preview',
        },
    },
} as Meta;

const button = (props: { isInverted?: boolean; isHighlighted?: boolean }) => {
    if (props.isHighlighted) {
        return (
            <Button.View isInverted={props.isInverted} as="button">
                <Button.Label>Primary</Button.Label>
            </Button.View>
        );
    } else {
        return (
            <ButtonGhost.View isInverted={props.isInverted} as="button">
                <ButtonGhost.Label>Secondary</ButtonGhost.Label>
            </ButtonGhost.View>
        );
    }
};

export const Default: Story = () => (
    <PriceTag
        superTitle="Tarif"
        title="199,-"
        text={`
            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy</p>`}
        action={button}
    />
);

export const IsCentered: Story = () => (
    <PriceTag
        isCentered
        superTitle="Tarif"
        title="199,-"
        text={`
            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy</p>`}
        action={button}
    />
);

export const IsHighlighted: Story = () => (
    <PriceTag
        isHighlighted
        superTitle="Tarif"
        title="199,-"
        text={`
            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy</p>`}
        action={button}
    />
);

export const hasBackground: Story = () => (
    <PriceTag
        superTitle="Tarif"
        title="199,-"
        text={`
        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy</p>`}
        action={button}
        hasBackground
    />
);

export const IsInverted: Story = () => (
    <PriceTag
        superTitle="Tarif"
        title="199,-"
        text={`
        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy</p>`}
        action={button}
        isInverted
    />
);
