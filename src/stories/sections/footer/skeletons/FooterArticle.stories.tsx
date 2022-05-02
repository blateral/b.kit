/* eslint-disable react/display-name */
import React from 'react';
import { Meta, Story } from '@storybook/react';
import FooterArticle from 'components/sections/footer/skeletons/FooterArticle';
import ButtonGhost from 'components/buttons/ButtonGhost';

export default {
    title: 'Sections / Footer / Skeletons',
    component: FooterArticle,
    parameters: {
        status: {
            type: 'preview',
        },
    },
} as Meta;

export const Default: Story = () => (
    <FooterArticle
        title="Newsletter"
        text="Immer gut informiert. Abbonieren Sie unseren Newsletter um regelmäßig Informationen zu bekommen."
        action={({ isInverted }) => (
            <ButtonGhost.View isInverted={isInverted} href="#0">
                <ButtonGhost.Label>Primary</ButtonGhost.Label>
            </ButtonGhost.View>
        )}
    />
);
