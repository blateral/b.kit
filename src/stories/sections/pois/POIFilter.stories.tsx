import React from 'react';
import { Meta, Story } from '@storybook/react';
import POIFilter from 'components/sections/pois/POIFilter';
import styled from 'styled-components';

export default {
    title: 'Sections / POIs / POIFilter',
    component: POIFilter,
} as Meta;

const Background = styled.div`
    background: black;
    height: 100vh;
    position: relative;
`;

export const Default: Story = () => (
    <Background>
        <POIFilter
            filter={{
                label: 'Suchen & Filtern',
                dropdownLabel: 'Kategorien',
                categories: [
                    {
                        label: 'Restaurant',
                        value: {},
                    },
                    {
                        label: 'Hotel',
                        value: {},
                    },
                    {
                        label: 'Handel',
                        value: {},
                    },
                    {
                        label: 'Kantine',
                        value: {},
                    },
                ],
            }}
        />
    </Background>
);
