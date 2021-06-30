import * as React from 'react';
import { Meta, Story } from '@storybook/react';
import NewsIntro from '../components/sections/news/NewsIntro';

export default {
    title: 'Sections/News/NewsIntro',
    component: NewsIntro,
} as Meta;

export const Default: Story = () => (
    <NewsIntro
        tag="Tag Secondary"
        meta={{
            author: 'Author Name',
            date: 'Date',
        }}
        title="Haus St. Franziskus – lorem ipsum dolor sit amet"
        text="Mitten im historischen Altstadtkern von Überlingen liegt das Haus St. Franziskus. Das prachtvolle Gebäude, ursprünglich als Kloster von Franziskanermönchen errichtet, kann auf eine rund 750-jährige Geschichte zurückblicken. Heute hat sich das ehemalige Ordenshaus zu einer modernen und leistungsfähigen Einrichtung entwickelt, die über alle Sanierungsmaßnahmen hinweg ihr ganz besonderes Flair erhalten konnte.Die Jahrhunderte lange, durch Mönche und später durch Nonnen gelebte Nächstenliebe ist noch heute, schon beim Betreten des Hauses, deutlich spürbar."
    />
);

export const WithImage: Story = () => (
    <NewsIntro
        tag="Tag Secondary"
        meta={{
            author: 'Author Name',
            date: 'Date',
        }}
        title="Haus St. Franziskus – lorem ipsum dolor sit amet"
        text="Mitten im historischen Altstadtkern von Überlingen liegt das Haus St. Franziskus. Das prachtvolle Gebäude, ursprünglich als Kloster von Franziskanermönchen errichtet, kann auf eine rund 750-jährige Geschichte zurückblicken. Heute hat sich das ehemalige Ordenshaus zu einer modernen und leistungsfähigen Einrichtung entwickelt, die über alle Sanierungsmaßnahmen hinweg ihr ganz besonderes Flair erhalten konnte.Die Jahrhunderte lange, durch Mönche und später durch Nonnen gelebte Nächstenliebe ist noch heute, schon beim Betreten des Hauses, deutlich spürbar."
        image={{
            small: 'https://unsplash.it/619/305?image=400',
            medium: 'https://unsplash.it/983/483?image=400',
            large: 'https://unsplash.it/1399/688?image=400',
            xlarge: 'https://unsplash.it/1400/690?image=400',
        }}
    />
);

export const isInverted: Story = () => (
    <NewsIntro
        tag="Tag Secondary"
        meta={{
            author: 'Author Name',
            date: 'Date',
        }}
        title="Haus St. Franziskus – lorem ipsum dolor sit amet"
        text="Mitten im historischen Altstadtkern von Überlingen liegt das Haus St. Franziskus. Das prachtvolle Gebäude, ursprünglich als Kloster von Franziskanermönchen errichtet, kann auf eine rund 750-jährige Geschichte zurückblicken. Heute hat sich das ehemalige Ordenshaus zu einer modernen und leistungsfähigen Einrichtung entwickelt, die über alle Sanierungsmaßnahmen hinweg ihr ganz besonderes Flair erhalten konnte.Die Jahrhunderte lange, durch Mönche und später durch Nonnen gelebte Nächstenliebe ist noch heute, schon beim Betreten des Hauses, deutlich spürbar."
        image={{
            small: 'https://unsplash.it/619/305?image=400',
            medium: 'https://unsplash.it/983/483?image=400',
            large: 'https://unsplash.it/1399/688?image=400',
            xlarge: 'https://unsplash.it/1400/690?image=400',
        }}
        isInverted
    />
);
