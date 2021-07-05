import * as React from 'react';
import { Meta, Story } from '@storybook/react';
import NewsOverview from '../components/sections/news/NewsOverview';

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
            'Tag 1',
            'Tag 2',
            'Tag 3',
            'Tag 4',
            'Tag 5',
            'Tag 6',
            'Tag 7',
            'Tag 8',
            'Tag 9',
            'Tag 10',
            'Tag 11',
            'Tag 12',
            'Tag 13',
            'Tag 14',
            'Tag 15',
            'Tag 16',
        ]}
        list={[
            {
                tag: 'Secondary Tag',
                publishDate: 'Date',
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
        isInverted
    />
);
