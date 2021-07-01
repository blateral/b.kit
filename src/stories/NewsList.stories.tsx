import * as React from 'react';
import { Meta, Story } from '@storybook/react';
import NewsList from '../components/sections/news/NewsList';
import Button from 'components/buttons/Button';
import ButtonGhost from 'components/buttons/ButtonGhost';

export default {
    title: 'Sections/News/NewsList',
    component: NewsList,
} as Meta;

export const Default: Story = () => (
    <NewsList
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
    />
);

export const WithActions: Story = () => (
    <NewsList
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
    <NewsList
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
