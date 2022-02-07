import * as React from 'react';
import { Meta, Story } from '@storybook/react';
import NewsIntro, {
    NewsIntroComponent,
} from 'components/sections/news/NewsIntro';

export default {
    title: 'Sections/News/NewsIntro',
    component: NewsIntroComponent,
    parameters: {
        status: {
            type: 'stable',
        },
    },
} as Meta;

export const Default: Story = () => (
    <NewsIntro
        title="Lorem ipsum dolor sit amet"
        text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
    />
);

export const WithAuthor: Story = () => (
    <NewsIntro
        meta={{
            author: 'Max Mustermann',
        }}
        title="Lorem ipsum dolor sit amet"
        text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
    />
);

export const WithAuthorAndDate: Story = () => (
    <NewsIntro
        meta={{
            author: 'Max Mustermann',
            date: new Date('July 22, 2021 03:24:00'),
        }}
        title="Lorem ipsum dolor sit amet"
        text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
    />
);

export const WithTag: Story = () => (
    <NewsIntro
        tags={['Tag Secondary', 'Tag Tertiary', 'Tag Quadrifilogio']}
        onTagClick={console.log}
        meta={{
            author: 'Max Mustermann',
            date: new Date('July 22, 2021 03:24:00'),
        }}
        title="Lorem ipsum dolor sit amet"
        text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
    />
);

export const WithImage: Story = () => (
    <NewsIntro
        tags={['Tag Secondary', 'Tag Tertiary', 'Tag Quadrifilogio']}
        onTagClick={console.log}
        meta={{
            author: 'Max Mustermann',
            date: new Date('July 22, 2021 03:24:00'),
        }}
        title="Lorem ipsum dolor sit amet"
        text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
        image={{
            small: 'https://unsplash.it/619/348?image=400',
            medium: 'https://unsplash.it/791/445?image=400',
            semilarge: 'https://unsplash.it/944/531?image=400',
        }}
    />
);

export const WithBackground: Story = () => (
    <NewsIntro
        bgMode="full"
        tags={['Tag Secondary', 'Tag Tertiary', 'Tag Quadrifilogio']}
        onTagClick={console.log}
        meta={{
            author: 'Max Mustermann',
            date: new Date('July 22, 2021 03:24:00'),
        }}
        title="Lorem ipsum dolor sit amet"
        text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
        image={{
            small: 'https://unsplash.it/619/348?image=400',
            medium: 'https://unsplash.it/791/445?image=400',
            semilarge: 'https://unsplash.it/944/531?image=400',
        }}
    />
);

export const isInverted: Story = () => (
    <NewsIntro
        tags={['Tag Secondary', 'Tag Tertiary', 'Tag Quadrifilogio']}
        onTagClick={console.log}
        meta={{
            author: 'Max Mustermann',
            date: new Date('July 22, 2021 03:24:00'),
        }}
        title="Lorem ipsum dolor sit amet"
        text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
        image={{
            small: 'https://unsplash.it/619/348?image=400',
            medium: 'https://unsplash.it/791/445?image=400',
            semilarge: 'https://unsplash.it/944/531?image=400',
        }}
        bgMode="inverted"
    />
);
