import React from 'react';
import { Meta, Story } from '@storybook/react';
import PriceTable from 'components/sections/PriceTable';
import { Button } from 'index';

export default {
    title: 'Sections / PriceTable',
    component: PriceTable,
} as Meta;

const button = (isInverted: boolean) => (
    <Button.View isInverted={isInverted} as="button" onClick={console.log}>
        <Button.Label>Jetzt testen</Button.Label>
    </Button.View>
);

export const Default: Story = () => (
    <PriceTable
        items={[
            {
                text: `<b>Pro Tarif</b>
                <br />
                <h2>199,-</h2>
                <p>EUR im Monat oder 2 Monate sparen für einmalig 1999,- EUR im Jahr</p>`,
                action: button,
            },
            {
                text: `<b>Pro Tarif</b>
                <br />
                <h2>199,-</h2>
                <p>EUR im Monat oder 2 Monate sparen für einmalig 1999,- EUR im Jahr</p>`,
                action: button,
            },
            {
                text: `<b>Pro Tarif</b>
                <br />
                <h2>199,-</h2>
                <p>EUR im Monat oder 2 Monate sparen für einmalig 1999,- EUR im Jahr</p>`,
                action: button,
            },
            {
                text: `<b>Pro Tarif</b>
                <br />
                <h2>199,-</h2>
                <p>EUR im Monat oder 2 Monate sparen für einmalig 1999,- EUR im Jahr</p>`,
                action: button,
            },
            {
                text: `<b>Pro Tarif</b>
                <br />
                <h2>199,-</h2>
                <p>EUR im Monat oder 2 Monate sparen für einmalig 1999,- EUR im Jahr</p>`,
                action: button,
            },
        ]}
    />
);

export const HasBackground: Story = () => (
    <PriceTable
        items={[
            {
                text: `<b>Pro Tarif</b>
                <br />
                <h2>199,-</h2>
                <p>EUR im Monat oder 2 Monate sparen für einmalig 1999,- EUR im Jahr</p>`,
                action: button,
            },
            {
                text: `<b>Pro Tarif</b>
                <br />
                <h2>199,-</h2>
                <p>EUR im Monat oder 2 Monate sparen für einmalig 1999,- EUR im Jahr</p>`,
                action: button,
            },
            {
                text: `<b>Pro Tarif</b>
                <br />
                <h2>199,-</h2>
                <p>EUR im Monat oder 2 Monate sparen für einmalig 1999,- EUR im Jahr</p>`,
                action: button,
            },
            {
                text: `<b>Pro Tarif</b>
                <br />
                <h2>199,-</h2>
                <p>EUR im Monat oder 2 Monate sparen für einmalig 1999,- EUR im Jahr</p>`,
                action: button,
            },
            {
                text: `<b>Pro Tarif</b>
                <br />
                <h2>199,-</h2>
                <p>EUR im Monat oder 2 Monate sparen für einmalig 1999,- EUR im Jahr</p>`,
                action: button,
            },
        ]}
        bgMode="full"
    />
);

export const IsInverted: Story = () => (
    <PriceTable
        items={[
            {
                text: `<b>Pro Tarif</b>
                <br />
                <h2>199,-</h2>
                <p>EUR im Monat oder 2 Monate sparen für einmalig 1999,- EUR im Jahr</p>`,
                action: button,
            },
            {
                text: `<b>Pro Tarif</b>
                <br />
                <h2>199,-</h2>
                <p>EUR im Monat oder 2 Monate sparen für einmalig 1999,- EUR im Jahr</p>`,
                action: button,
            },
            {
                text: `<b>Pro Tarif</b>
                <br />
                <h2>199,-</h2>
                <p>EUR im Monat oder 2 Monate sparen für einmalig 1999,- EUR im Jahr</p>`,
                action: button,
            },
            {
                text: `<b>Pro Tarif</b>
                <br />
                <h2>199,-</h2>
                <p>EUR im Monat oder 2 Monate sparen für einmalig 1999,- EUR im Jahr</p>`,
                action: button,
            },
            {
                text: `<b>Pro Tarif</b>
                <br />
                <h2>199,-</h2>
                <p>EUR im Monat oder 2 Monate sparen für einmalig 1999,- EUR im Jahr</p>`,
                action: button,
            },
        ]}
        bgMode="inverted"
    />
);
