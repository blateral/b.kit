import React from 'react';
import { Meta, Story } from '@storybook/react';
import POICard from 'components/blocks/POICard';
import Pointer from 'components/buttons/Pointer';
import AngleRight from 'components/base/icons/AngleRight';
import styled from 'styled-components';
import LocationPin from 'components/base/icons/LocationPin';
import Computer from 'components/base/icons/Computer';
import Phone from 'components/base/icons/Phone';
import Mail from 'components/base/icons/Mail';
import Map from 'components/base/icons/Map';

export default {
    title: 'Blocks / POICard',
    component: POICard,
    decorators: [
        (Story) => (
            <Helper>
                <Story />
            </Helper>
        ),
    ],
    parameters: {
        status: {
            type: 'preview',
        },
    },
} as Meta;

// Story Helper
const Helper = styled.div`
    height: 300px;
    width: 100%;
    padding: 20px;
`;

export const Default: Story = () => <POICard name="Beispiel POI 1" />;

export const WithDescription: Story = () => (
    <POICard
        name="Beispiel POI 1"
        shortDescription="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
    />
);

export const WithPointer: Story = () => (
    <POICard
        name="Beispiel POI 1"
        shortDescription="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
        action={(isInverted) => (
            <Pointer.View
                as="a"
                href="#"
                isInverted={isInverted}
                onClick={console.log}
            >
                <Pointer.Label>Details</Pointer.Label>
                <Pointer.Icon>
                    <AngleRight />
                </Pointer.Icon>
            </Pointer.View>
        )}
    />
);

export const WithFacts: Story = () => (
    <POICard
        name="Beispiel POI 1"
        shortDescription="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
        facts={['Fact 1', 'Fact 2', 'Fact 3', 'Fact 4', 'Fact 5']}
        action={(isInverted) => (
            <Pointer.View
                as="a"
                href="#"
                isInverted={isInverted}
                onClick={console.log}
            >
                <Pointer.Label>Details</Pointer.Label>
                <Pointer.Icon>
                    <AngleRight />
                </Pointer.Icon>
            </Pointer.View>
        )}
    />
);

export const WithInfos: Story = () => (
    <POICard
        name="Beispiel POI 1"
        shortDescription="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
        infos={[
            {
                text: `Altes Rathaus, Münsterstraße , 12345 Example City`,
                icon: () => <LocationPin />,
            },
            {
                text: `Auf Karte anzeigen`,
                icon: () => <Map />,
            },
            {
                text: `07551 / 888666`,
                icon: () => <Phone />,
            },
            {
                text: `max.mustermann@gmail.com`,
                icon: () => <Mail />,
            },
            {
                text: `www.einrichtung.com`,
                icon: () => <Computer />,
            },
        ]}
        facts={['Fact 1', 'Fact 2', 'Fact 3', 'Fact 4', 'Fact 5']}
        action={(isInverted) => (
            <Pointer.View
                as="a"
                href="#"
                isInverted={isInverted}
                onClick={console.log}
            >
                <Pointer.Label>Details</Pointer.Label>
                <Pointer.Icon>
                    <AngleRight />
                </Pointer.Icon>
            </Pointer.View>
        )}
    />
);

export const Inverted: Story = () => (
    <POICard
        isInverted
        name="Beispiel POI 1"
        shortDescription="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
        infos={[
            {
                text: `Altes Rathaus, Münsterstraße , 12345 Example City`,
                icon: () => <LocationPin />,
            },
            {
                text: `Auf Karte anzeigen`,
                icon: () => <Map />,
            },
            {
                text: `07551 / 888666`,
                icon: () => <Phone />,
            },
            {
                text: `max.mustermann@gmail.com`,
                icon: () => <Mail />,
            },
            {
                text: `www.einrichtung.com`,
                icon: () => <Computer />,
            },
        ]}
        facts={['Fact 1', 'Fact 2', 'Fact 3', 'Fact 4', 'Fact 5']}
        action={(isInverted) => (
            <Pointer.View
                as="a"
                href="#"
                isInverted={isInverted}
                onClick={console.log}
            >
                <Pointer.Label>Details</Pointer.Label>
                <Pointer.Icon>
                    <AngleRight />
                </Pointer.Icon>
            </Pointer.View>
        )}
    />
);

Inverted.parameters = {
    backgrounds: {
        default: 'inverted',
        values: [{ name: 'inverted', value: 'black' }],
    },
};

export const CustomFact: Story = () => (
    <POICard
        name="Beispiel POI 1"
        shortDescription="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
        infos={[
            {
                text: `Altes Rathaus, Münsterstraße , 12345 Example City`,
                icon: () => <LocationPin />,
            },
            {
                text: `Auf Karte anzeigen`,
                icon: () => <Map />,
            },
            {
                text: `07551 / 888666`,
                icon: () => <Phone />,
            },
            {
                text: `max.mustermann@gmail.com`,
                icon: () => <Mail />,
            },
            {
                text: `www.einrichtung.com`,
                icon: () => <Computer />,
            },
        ]}
        facts={['Fact 1', 'Fact 2', 'Fact 3', 'Fact 4', 'Fact 5']}
        customFact={({ name }) => <span>{name}</span>}
        action={(isInverted) => (
            <Pointer.View
                as="a"
                href="#"
                isInverted={isInverted}
                onClick={console.log}
            >
                <Pointer.Label>Details</Pointer.Label>
                <Pointer.Icon>
                    <AngleRight />
                </Pointer.Icon>
            </Pointer.View>
        )}
    />
);
