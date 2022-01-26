import React from 'react';
import { Meta, Story } from '@storybook/react';
import { PriceTableComponent } from 'components/sections/PriceTable';
import { Button } from 'index';

export default {
    title: 'Sections / PriceTable',
    component: PriceTableComponent,
    parameters: {
        status: {
            type: 'releaseCandidate',
        },
    },
} as Meta;

const button = (isInverted: boolean) => (
    <Button.View isInverted={isInverted} as="button" onClick={console.log}>
        <Button.Label>Jetzt testen</Button.Label>
    </Button.View>
);

export const Default: Story = () => (
    <PriceTableComponent
        items={[
            {
                superTitle: 'Pro Tarif',
                title: '<h2>100,-</h2>',
                text: `
                <p>EUR im Monat oder 2 Monate sparen für einmalig 1999,- EUR im Jahr</p>`,
                action: button,
            },
            {
                superTitle: 'Pro Tarif',
                title: '<h2>100,-</h2>',
                text: `
                    <p><strong>Für Vereine und gemeinnützige Organisationen</strong></p>
                                <ul>
                    <li>ink. 19% MwSt.</li>
                    <li>bei jährlicher Zahlung (oder 119,- € mtl.)</li>
                    <li>Unbegrenzt Beiträge</li>
                    <li>Unbegrenzt Redakteure</li>
                    <li>Unbegrenzt Speicherplatz</li>
                    <li>Eigene Domain nutzbar</li>
                    <li>Auffindbar&nbsp;in Suchmaschinen</li>
                    <li>Optionales Modul Kleinanzeigen</li>
                    <li>Optionales Modul Werbepartner</li>
                </ul>`,
                action: button,
            },
            {
                superTitle: 'Pro Tarif',
                title: '<h2>100,-</h2>',
                text: `
                <p>EUR im Monat oder 2 Monate sparen für einmalig 1999,- EUR im Jahr</p>`,
                action: button,
                isHighlighted: true,
            },
            {
                superTitle: 'Pro Tarif',
                title: '<h2>100,-</h2>',
                text: `
                <p>EUR im Monat oder 2 Monate sparen für einmalig 1999,- EUR im Jahr</p>`,
                action: button,
            },
            {
                superTitle: 'Pro Tarif',
                title: '<h2>100,-</h2>',
                text: `
                <p>EUR im Monat oder 2 Monate sparen für einmalig 1999,- EUR im Jahr</p>`,
                action: button,
            },
        ]}
    />
);

export const HasBackground: Story = () => (
    <PriceTableComponent
        items={[
            {
                superTitle: 'Pro Tarif',
                title: '<h2>100,-</h2>',
                text: `
                <p>EUR im Monat oder 2 Monate sparen für einmalig 1999,- EUR im Jahr</p>`,
                action: button,
            },
            {
                superTitle: 'Pro Tarif',
                title: '<h2>100,-</h2>',
                text: `
                <p>EUR im Monat oder 2 Monate sparen für einmalig 1999,- EUR im Jahr</p>`,
                action: button,
            },
            {
                superTitle: 'Pro Tarif',
                title: '<h2>100,-</h2>',
                text: `
                <p>EUR im Monat oder 2 Monate sparen für einmalig 1999,- EUR im Jahr</p>`,
                action: button,
            },
            {
                superTitle: 'Pro Tarif',
                title: '<h2>100,-</h2>',
                text: `
                <p>EUR im Monat oder 2 Monate sparen für einmalig 1999,- EUR im Jahr</p>`,
                action: button,
                isHighlighted: true,
            },
            {
                superTitle: 'Pro Tarif',
                title: '<h2>100,-</h2>',
                text: `
                <p>EUR im Monat oder 2 Monate sparen für einmalig 1999,- EUR im Jahr</p>`,
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
                superTitle: 'Pro Tarif',
                title: '<h2>100,-</h2>',
                text: `
                <p>EUR im Monat oder 2 Monate sparen für einmalig 1999,- EUR im Jahr</p>`,
                action: button,
            },
            {
                superTitle: 'Pro Tarif',
                title: '<h2>100,-</h2>',
                text: `
                <p>EUR im Monat oder 2 Monate sparen für einmalig 1999,- EUR im Jahr</p>`,
                action: button,
            },
            {
                superTitle: 'Pro Tarif',
                title: '<h2>100,-</h2>',
                text: `
                <p>EUR im Monat oder 2 Monate sparen für einmalig 1999,- EUR im Jahr</p>`,
                action: button,
            },
            {
                superTitle: 'Pro Tarif',
                title: '<h2>100,-</h2>',
                text: `
                <p>EUR im Monat oder 2 Monate sparen für einmalig 1999,- EUR im Jahr</p>`,
                action: button,
                isHighlighted: true,
            },
            {
                superTitle: 'Pro Tarif',
                title: '<h2>100,-</h2>',
                text: `
                <p>EUR im Monat oder 2 Monate sparen für einmalig 1999,- EUR im Jahr</p>`,
                action: button,
            },
        ]}
        bgMode="inverted"
    />
);
