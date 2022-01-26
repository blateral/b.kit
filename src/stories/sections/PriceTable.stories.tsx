import React from 'react';
import { Meta, Story } from '@storybook/react';
import { PriceTableComponent } from 'components/sections/PriceTable';
import Button from 'components/buttons/Button';
import ButtonGhost from 'components/buttons/ButtonGhost';

export default {
    title: 'Sections / PriceTable',
    component: PriceTableComponent,
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
