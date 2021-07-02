import * as React from 'react';
import { Meta, Story } from '@storybook/react';
import NewsOverview from '../components/sections/news/NewsOverview';
import Button from 'components/buttons/Button';
import ButtonGhost from 'components/buttons/ButtonGhost';

export default {
    title: 'Sections/News/NewsOverview',
    component: NewsOverview,
} as Meta;

export const Default: Story = () => (
    <NewsOverview
        intro={{
            title: 'Haus St. Franziskus – lorem ipsum dolor sit amet',
            superTitle: 'Haus St. Franziskus',
            text:
                'Mitten im historischen Altstadtkern von Überlingen liegt das Haus St. Franziskus. Das prachtvolle Gebäude, ursprünglich als Kloster von Franziskanermönchen errichtet, kann auf eine rund 750-jährige Geschichte zurückblicken.',
        }}
        tags={[
            { label: 'Tag 1', id: '1' },
            { label: 'Tag 2', id: '2' },
            { label: 'Tag 3', id: '3' },
            { label: 'Tag 4', id: '4' },
            { label: 'Tag 5', id: '5' },
            { label: 'Tag 6', id: '6' },
            { label: 'Tag 7', id: '7' },
            { label: 'Tag 8', id: '8' },
            { label: 'Tag 9', id: '9' },
            { label: 'Tag 10', id: '10' },
            { label: 'Tag 11', id: '11' },
            { label: 'Tag 12', id: '12' },
            { label: 'Tag 13', id: '13' },
            { label: 'Tag 14', id: '14' },
            { label: 'Tag 15', id: '15' },
            { label: 'Tag 16', id: '16' },
        ]}
        list={[
            {
                tag: 'Secondary Tag',
                publishDate: 'Date',
                newsLink: '#0',
                title:
                    'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy ',
                text:
                    'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. ',
                image: {
                    small: 'https://unsplash.it/419/313?image=400',
                    medium: 'https://unsplash.it/983/736?image=400',
                    large: 'https://unsplash.it/1399/1048?image=400',
                    xlarge: 'https://unsplash.it/1400/1050?image=400',
                },
            },
            {
                tag: 'Secondary Tag',
                publishDate: 'Date',
                newsLink: '#0',
                title:
                    'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy ',
                text:
                    'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. ',
                image: {
                    small: 'https://unsplash.it/419/313?image=400',
                    medium: 'https://unsplash.it/983/736?image=400',
                    large: 'https://unsplash.it/1399/1048?image=400',
                    xlarge: 'https://unsplash.it/1400/1050?image=400',
                },
            },
            {
                tag: 'Secondary Tag',
                publishDate: 'Date',
                newsLink: '#0',
                title:
                    'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy ',
                text:
                    'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. ',
                image: {
                    small: 'https://unsplash.it/419/313?image=400',
                    medium: 'https://unsplash.it/983/736?image=400',
                    large: 'https://unsplash.it/1399/1048?image=400',
                    xlarge: 'https://unsplash.it/1400/1050?image=400',
                },
            },
            {
                tag: 'Secondary Tag',
                publishDate: 'Date',
                newsLink: '#0',
                title:
                    'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy ',
                text:
                    'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. ',
                image: {
                    small: 'https://unsplash.it/419/313?image=400',
                    medium: 'https://unsplash.it/983/736?image=400',
                    large: 'https://unsplash.it/1399/1048?image=400',
                    xlarge: 'https://unsplash.it/1400/1050?image=400',
                },
            },
            {
                tag: 'Secondary Tag',
                publishDate: 'Date',
                newsLink: '#0',
                title:
                    'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy ',
                text:
                    'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. ',
                image: {
                    small: 'https://unsplash.it/419/313?image=400',
                    medium: 'https://unsplash.it/983/736?image=400',
                    large: 'https://unsplash.it/1399/1048?image=400',
                    xlarge: 'https://unsplash.it/1400/1050?image=400',
                },
            },
            {
                tag: 'Secondary Tag',
                publishDate: 'Date',
                newsLink: '#0',
                title:
                    'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy ',
                text:
                    'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. ',
                image: {
                    small: 'https://unsplash.it/419/313?image=400',
                    medium: 'https://unsplash.it/983/736?image=400',
                    large: 'https://unsplash.it/1399/1048?image=400',
                    xlarge: 'https://unsplash.it/1400/1050?image=400',
                },
            },
            {
                tag: 'Secondary Tag',
                publishDate: 'Date',
                newsLink: '#0',
                title:
                    'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy ',
                text:
                    'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. ',
                image: {
                    small: 'https://unsplash.it/419/313?image=400',
                    medium: 'https://unsplash.it/983/736?image=400',
                    large: 'https://unsplash.it/1399/1048?image=400',
                    xlarge: 'https://unsplash.it/1400/1050?image=400',
                },
            },
            {
                tag: 'Secondary Tag',
                publishDate: 'Date',
                newsLink: '#0',
                title:
                    'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy ',
                text:
                    'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. ',
                image: {
                    small: 'https://unsplash.it/419/313?image=400',
                    medium: 'https://unsplash.it/983/736?image=400',
                    large: 'https://unsplash.it/1399/1048?image=400',
                    xlarge: 'https://unsplash.it/1400/1050?image=400',
                },
            },
            {
                tag: 'Secondary Tag',
                publishDate: 'Date',
                newsLink: '#0',
                title:
                    'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy ',
                text:
                    'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. ',
                image: {
                    small: 'https://unsplash.it/419/313?image=400',
                    medium: 'https://unsplash.it/983/736?image=400',
                    large: 'https://unsplash.it/1399/1048?image=400',
                    xlarge: 'https://unsplash.it/1400/1050?image=400',
                },
            },
        ]}
    />
);

export const WithActions: Story = () => (
    <NewsOverview
        intro={{
            title: 'Haus St. Franziskus – lorem ipsum dolor sit amet',
            superTitle: 'Haus St. Franziskus',
            text:
                'Mitten im historischen Altstadtkern von Überlingen liegt das Haus St. Franziskus. Das prachtvolle Gebäude, ursprünglich als Kloster von Franziskanermönchen errichtet, kann auf eine rund 750-jährige Geschichte zurückblicken.',
        }}
        list={[
            {
                tag: 'Secondary Tag',
                publishDate: 'Date',
                newsLink: '#0',
                title:
                    'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy ',
                text:
                    'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. ',
                image: {
                    small: 'https://unsplash.it/419/313?image=400',
                    medium: 'https://unsplash.it/983/736?image=400',
                    large: 'https://unsplash.it/1399/1048?image=400',
                    xlarge: 'https://unsplash.it/1400/1050?image=400',
                },
            },
            {
                tag: 'Secondary Tag',
                publishDate: 'Date',
                newsLink: '#0',
                title:
                    'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy ',
                text:
                    'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. ',
                image: {
                    small: 'https://unsplash.it/419/313?image=400',
                    medium: 'https://unsplash.it/983/736?image=400',
                    large: 'https://unsplash.it/1399/1048?image=400',
                    xlarge: 'https://unsplash.it/1400/1050?image=400',
                },
            },
            {
                tag: 'Secondary Tag',
                publishDate: 'Date',
                newsLink: '#0',
                title:
                    'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy ',
                text:
                    'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. ',
                image: {
                    small: 'https://unsplash.it/419/313?image=400',
                    medium: 'https://unsplash.it/983/736?image=400',
                    large: 'https://unsplash.it/1399/1048?image=400',
                    xlarge: 'https://unsplash.it/1400/1050?image=400',
                },
            },
            {
                tag: 'Secondary Tag',
                publishDate: 'Date',
                newsLink: '#0',
                title:
                    'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy ',
                text:
                    'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. ',
                image: {
                    small: 'https://unsplash.it/419/313?image=400',
                    medium: 'https://unsplash.it/983/736?image=400',
                    large: 'https://unsplash.it/1399/1048?image=400',
                    xlarge: 'https://unsplash.it/1400/1050?image=400',
                },
            },
        ]}
        primaryAction={(isInverted) => (
            <Button.View isInverted={isInverted}>
                <Button.Label>Primary</Button.Label>
            </Button.View>
        )}
        secondaryAction={(isInverted) => (
            <ButtonGhost.View isInverted={isInverted}>
                <ButtonGhost.Label>Secondary</ButtonGhost.Label>
            </ButtonGhost.View>
        )}
    />
);

export const IsInverted: Story = () => (
    <NewsOverview
        intro={{
            title: 'Haus St. Franziskus – lorem ipsum dolor sit amet',
            superTitle: 'Haus St. Franziskus',
            text:
                'Mitten im historischen Altstadtkern von Überlingen liegt das Haus St. Franziskus. Das prachtvolle Gebäude, ursprünglich als Kloster von Franziskanermönchen errichtet, kann auf eine rund 750-jährige Geschichte zurückblicken.',
        }}
        list={[
            {
                tag: 'Secondary Tag',
                publishDate: 'Date',
                newsLink: '#0',
                title:
                    'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy ',
                text:
                    'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. ',
                image: {
                    small: 'https://unsplash.it/419/313?image=400',
                    medium: 'https://unsplash.it/983/736?image=400',
                    large: 'https://unsplash.it/1399/1048?image=400',
                    xlarge: 'https://unsplash.it/1400/1050?image=400',
                },
            },
            {
                tag: 'Secondary Tag',
                publishDate: 'Date',
                newsLink: '#0',
                title:
                    'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy ',
                text:
                    'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. ',
                image: {
                    small: 'https://unsplash.it/419/313?image=400',
                    medium: 'https://unsplash.it/983/736?image=400',
                    large: 'https://unsplash.it/1399/1048?image=400',
                    xlarge: 'https://unsplash.it/1400/1050?image=400',
                },
            },
            {
                tag: 'Secondary Tag',
                publishDate: 'Date',
                newsLink: '#0',
                title:
                    'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy ',
                text:
                    'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. ',
                image: {
                    small: 'https://unsplash.it/419/313?image=400',
                    medium: 'https://unsplash.it/983/736?image=400',
                    large: 'https://unsplash.it/1399/1048?image=400',
                    xlarge: 'https://unsplash.it/1400/1050?image=400',
                },
            },
            {
                tag: 'Secondary Tag',
                publishDate: 'Date',
                newsLink: '#0',
                title:
                    'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy ',
                text:
                    'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. ',
                image: {
                    small: 'https://unsplash.it/419/313?image=400',
                    medium: 'https://unsplash.it/983/736?image=400',
                    large: 'https://unsplash.it/1399/1048?image=400',
                    xlarge: 'https://unsplash.it/1400/1050?image=400',
                },
            },
        ]}
        primaryAction={(isInverted) => (
            <Button.View isInverted={isInverted}>
                <Button.Label>Primary</Button.Label>
            </Button.View>
        )}
        secondaryAction={(isInverted) => (
            <ButtonGhost.View isInverted={isInverted}>
                <ButtonGhost.Label>Secondary</ButtonGhost.Label>
            </ButtonGhost.View>
        )}
        isInverted
    />
);
