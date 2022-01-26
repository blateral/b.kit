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
            type: 'releaseCandidate',
        },
    },
} as Meta;

const button = (props: { isInverted?: boolean; isHighlighted?: boolean }) => {
    if (props.isHighlighted) {
        return (
            <Button.View isInverted={props.isInverted} as="button">
                <Button.Label>Jetzt testen</Button.Label>
            </Button.View>
        );
    } else {
        return (
            <ButtonGhost.View isInverted={props.isInverted} as="button">
                <ButtonGhost.Label>Jetzt testen</ButtonGhost.Label>
            </ButtonGhost.View>
        );
    }
};

export const Default: Story = () => (
    <PriceTag
        superTitle="Pro Tarif"
        title="199,-"
        text={`
            <p>EUR im Monat oder 2 Monate sparen für einmalig 1999,- EUR im Jahr</p>`}
        action={button}
    />
);

export const hasBackground: Story = () => (
    <PriceTag
        superTitle="Pro Tarif"
        title="199,-"
        text={`
        <p>EUR im Monat oder 2 Monate sparen für einmalig 1999,- EUR im Jahr</p>`}
        action={button}
        hasBackground
    />
);

export const IsInverted: Story = () => (
    <PriceTag
        superTitle="Pro Tarif"
        title="199,-"
        text={`
        <p>EUR im Monat oder 2 Monate sparen für einmalig 1999,- EUR im Jahr</p>`}
        action={button}
        isInverted
    />
);
