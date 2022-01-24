import React from 'react';
import { Meta, Story } from '@storybook/react';
import PriceTag from 'components/blocks/PriceTag';
import Button from 'components/buttons/Button';

export default {
    title: 'Blocks / PriceTag',
    component: PriceTag,
} as Meta;

export const Default: Story = () => (
    <PriceTag
        text={`<b>Pro Tarif</b>
<br />
<h2>199,-</h2>
<p>EUR im Monat oder 2 Monate sparen für einmalig 1999,- EUR im Jahr</p>`}
        action={(isInverted) => (
            <Button.View
                isInverted={isInverted}
                as="button"
                onClick={console.log}
            >
                <Button.Label>Jetzt testen</Button.Label>
            </Button.View>
        )}
    />
);

export const hasBackground: Story = () => (
    <PriceTag
        text={`<b>Pro Tarif</b>
<br />
<h2>199,-</h2>
<p>EUR im Monat oder 2 Monate sparen für einmalig 1999,- EUR im Jahr</p>`}
        action={(isInverted) => (
            <Button.View
                isInverted={isInverted}
                as="button"
                onClick={console.log}
            >
                <Button.Label>Jetzt testen</Button.Label>
            </Button.View>
        )}
        hasBackground
    />
);

export const IsInverted: Story = () => (
    <PriceTag
        text={`<b>Pro Tarif</b>
<br />
<h2>199,-</h2>
<p>EUR im Monat oder 2 Monate sparen für einmalig 1999,- EUR im Jahr</p>`}
        action={(isInverted) => (
            <Button.View
                isInverted={isInverted}
                as="button"
                onClick={console.log}
            >
                <Button.Label>Jetzt testen</Button.Label>
            </Button.View>
        )}
        isInverted
    />
);
