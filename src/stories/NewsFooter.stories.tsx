import * as React from 'react';
import { Meta, Story } from '@storybook/react';
import NewsFooter from '../components/sections/news/NewsFooter';

export default {
    title: 'Sections/News/NewsFooter',
    component: NewsFooter,
} as Meta;

export const Default: Story = () => (
    <NewsFooter
        news={[
            {
                tag: 'Tag Secondary',
                publishDate: 'Date',
                title:
                    'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy ',
                text:
                    'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. ',
                image: {
                    small: 'https://unsplash.it/629/464?image=400',
                    medium: 'https://unsplash.it/791/594?image=400',
                    semilarge: 'https://unsplash.it/462/347?image=400',
                },
            },
            {
                tag: 'Tag Secondary',
                publishDate: 'Date',
                title:
                    'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy ',
                text:
                    'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. ',
                image: {
                    small: 'https://unsplash.it/629/464?image=401',
                    medium: 'https://unsplash.it/791/594?image=401',
                    semilarge: 'https://unsplash.it/462/347?image=401',
                },
            },
        ]}
    />
);

export const WithMoreItems: Story = () => (
    <NewsFooter
        news={[
            {
                tag: 'Tag Secondary',
                publishDate: 'Date',
                title:
                    'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy ',
                text:
                    'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. ',
                image: {
                    small: 'https://unsplash.it/629/464?image=400',
                    medium: 'https://unsplash.it/791/594?image=400',
                    semilarge: 'https://unsplash.it/462/347?image=400',
                },
            },
            {
                tag: 'Tag Secondary',
                publishDate: 'Date',
                title:
                    'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy ',
                text:
                    'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. ',
                image: {
                    small: 'https://unsplash.it/629/464?image=401',
                    medium: 'https://unsplash.it/791/594?image=401',
                    semilarge: 'https://unsplash.it/462/347?image=401',
                },
            },
            {
                tag: 'Tag Secondary',
                publishDate: 'Date',
                title:
                    'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy ',
                text:
                    'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. ',
                image: {
                    small: 'https://unsplash.it/629/464?image=402',
                    medium: 'https://unsplash.it/791/594?image=402',
                    semilarge: 'https://unsplash.it/462/347?image=402',
                },
            },
            {
                tag: 'Tag Secondary',
                publishDate: 'Date',
                title:
                    'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy ',
                text:
                    'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. ',
                image: {
                    small: 'https://unsplash.it/629/464?image=403',
                    medium: 'https://unsplash.it/791/594?image=403',
                    semilarge: 'https://unsplash.it/462/347?image=403',
                },
            },
            {
                tag: 'Tag Secondary',
                publishDate: 'Date',
                title:
                    'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy ',
                text:
                    'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. ',
                image: {
                    small: 'https://unsplash.it/629/464?image=404',
                    medium: 'https://unsplash.it/791/594?image=404',
                    semilarge: 'https://unsplash.it/462/347?image=404',
                },
            },
        ]}
    />
);

export const WithBackground: Story = () => (
    <NewsFooter
        hasBack
        news={[
            {
                tag: 'Tag Secondary',
                publishDate: 'Date',
                title:
                    'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy ',
                text:
                    'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. ',
                image: {
                    small: 'https://unsplash.it/629/464?image=400',
                    medium: 'https://unsplash.it/791/594?image=400',
                    semilarge: 'https://unsplash.it/462/347?image=400',
                },
            },
            {
                tag: 'Tag Secondary',
                publishDate: 'Date',
                title:
                    'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy ',
                text:
                    'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. ',
                image: {
                    small: 'https://unsplash.it/629/464?image=401',
                    medium: 'https://unsplash.it/791/594?image=401',
                    semilarge: 'https://unsplash.it/462/347?image=401',
                },
            },
            {
                tag: 'Tag Secondary',
                publishDate: 'Date',
                title:
                    'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy ',
                text:
                    'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. ',
                image: {
                    small: 'https://unsplash.it/629/464?image=402',
                    medium: 'https://unsplash.it/791/594?image=402',
                    semilarge: 'https://unsplash.it/462/347?image=402',
                },
            },
            {
                tag: 'Tag Secondary',
                publishDate: 'Date',
                title:
                    'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy ',
                text:
                    'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. ',
                image: {
                    small: 'https://unsplash.it/629/464?image=403',
                    medium: 'https://unsplash.it/791/594?image=403',
                    semilarge: 'https://unsplash.it/462/347?image=403',
                },
            },
            {
                tag: 'Tag Secondary',
                publishDate: 'Date',
                title:
                    'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy ',
                text:
                    'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. ',
                image: {
                    small: 'https://unsplash.it/629/464?image=404',
                    medium: 'https://unsplash.it/791/594?image=404',
                    semilarge: 'https://unsplash.it/462/347?image=404',
                },
            },
        ]}
    />
);

export const IsInverted: Story = () => (
    <NewsFooter
        news={[
            {
                tag: 'Tag Secondary',
                publishDate: 'Date',
                title:
                    'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy ',
                text:
                    'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. ',
                image: {
                    small: 'https://unsplash.it/629/464?image=400',
                    medium: 'https://unsplash.it/791/594?image=400',
                    semilarge: 'https://unsplash.it/462/347?image=400',
                },
            },
            {
                tag: 'Tag Secondary',
                publishDate: 'Date',
                title:
                    'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy ',
                text:
                    'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. ',
                image: {
                    small: 'https://unsplash.it/629/464?image=401',
                    medium: 'https://unsplash.it/791/594?image=401',
                    semilarge: 'https://unsplash.it/462/347?image=401',
                },
            },
            {
                tag: 'Tag Secondary',
                publishDate: 'Date',
                title:
                    'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy ',
                text:
                    'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. ',
                image: {
                    small: 'https://unsplash.it/629/464?image=402',
                    medium: 'https://unsplash.it/791/594?image=402',
                    semilarge: 'https://unsplash.it/462/347?image=402',
                },
            },
            {
                tag: 'Tag Secondary',
                publishDate: 'Date',
                title:
                    'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy ',
                text:
                    'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. ',
                image: {
                    small: 'https://unsplash.it/629/464?image=403',
                    medium: 'https://unsplash.it/791/594?image=403',
                    semilarge: 'https://unsplash.it/462/347?image=403',
                },
            },
            {
                tag: 'Tag Secondary',
                publishDate: 'Date',
                title:
                    'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy ',
                text:
                    'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. ',
                image: {
                    small: 'https://unsplash.it/629/464?image=404',
                    medium: 'https://unsplash.it/791/594?image=404',
                    semilarge: 'https://unsplash.it/462/347?image=404',
                },
            },
        ]}
        isInverted
    />
);
