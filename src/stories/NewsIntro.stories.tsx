import * as React from 'react';
import { Meta, Story } from '@storybook/react';
import NewsIntro from '../components/sections/news/NewsIntro';

export default {
    title: 'Sections/News/NewsIntro',
    component: NewsIntro,
} as Meta;

export const Default: Story = () => (
    <NewsIntro
        title="Haus St. Franziskus – lorem ipsum dolor sit amet"
        text="Mitten im historischen Altstadtkern von Überlingen liegt das Haus St. Franziskus. Das prachtvolle Gebäude, ursprünglich als Kloster von Franziskanermönchen errichtet, kann auf eine rund 750-jährige Geschichte zurückblicken. Heute hat sich das ehemalige Ordenshaus zu einer modernen und leistungsfähigen Einrichtung entwickelt, die über alle Sanierungsmaßnahmen hinweg ihr ganz besonderes Flair erhalten konnte.Die Jahrhunderte lange, durch Mönche und später durch Nonnen gelebte Nächstenliebe ist noch heute, schon beim Betreten des Hauses, deutlich spürbar."
    />
);

export const WithMeta: Story = () => (
    <NewsIntro
        meta={{
            author: 'Max Mustermann',
            date: new Date('July 22, 2021 03:24:00'),
        }}
        title="Haus St. Franziskus – lorem ipsum dolor sit amet"
        text="Mitten im historischen Altstadtkern von Überlingen liegt das Haus St. Franziskus. Das prachtvolle Gebäude, ursprünglich als Kloster von Franziskanermönchen errichtet, kann auf eine rund 750-jährige Geschichte zurückblicken. Heute hat sich das ehemalige Ordenshaus zu einer modernen und leistungsfähigen Einrichtung entwickelt, die über alle Sanierungsmaßnahmen hinweg ihr ganz besonderes Flair erhalten konnte.Die Jahrhunderte lange, durch Mönche und später durch Nonnen gelebte Nächstenliebe ist noch heute, schon beim Betreten des Hauses, deutlich spürbar."
    />
);

export const WithTag: Story = () => (
    <NewsIntro
        tag="Tag Secondary"
        onTagClick={console.log}
        meta={{
            author: 'Max Mustermann',
            date: new Date('July 22, 2021 03:24:00'),
        }}
        title="Haus St. Franziskus – lorem ipsum dolor sit amet"
        text="Mitten im historischen Altstadtkern von Überlingen liegt das Haus St. Franziskus. Das prachtvolle Gebäude, ursprünglich als Kloster von Franziskanermönchen errichtet, kann auf eine rund 750-jährige Geschichte zurückblicken. Heute hat sich das ehemalige Ordenshaus zu einer modernen und leistungsfähigen Einrichtung entwickelt, die über alle Sanierungsmaßnahmen hinweg ihr ganz besonderes Flair erhalten konnte.Die Jahrhunderte lange, durch Mönche und später durch Nonnen gelebte Nächstenliebe ist noch heute, schon beim Betreten des Hauses, deutlich spürbar."
    />
);

export const WithImage: Story = () => (
    <NewsIntro
        tag="Tag Secondary"
        onTagClick={console.log}
        meta={{
            author: 'Max Mustermann',
            date: new Date('July 22, 2021 03:24:00'),
        }}
        title="Haus St. Franziskus – lorem ipsum dolor sit amet"
        text="Mitten im historischen Altstadtkern von Überlingen liegt das Haus St. Franziskus. Das prachtvolle Gebäude, ursprünglich als Kloster von Franziskanermönchen errichtet, kann auf eine rund 750-jährige Geschichte zurückblicken. Heute hat sich das ehemalige Ordenshaus zu einer modernen und leistungsfähigen Einrichtung entwickelt, die über alle Sanierungsmaßnahmen hinweg ihr ganz besonderes Flair erhalten konnte.Die Jahrhunderte lange, durch Mönche und später durch Nonnen gelebte Nächstenliebe ist noch heute, schon beim Betreten des Hauses, deutlich spürbar."
        image={{
            small: 'https://unsplash.it/619/348?image=400',
            medium: 'https://unsplash.it/791/445?image=400',
            semilarge: 'https://unsplash.it/944/531?image=400',
        }}
    />
);

export const WithBackground: Story = () => (
    <NewsIntro
        hasBack
        tag="Tag Secondary"
        onTagClick={console.log}
        meta={{
            author: 'Max Mustermann',
            date: new Date('July 22, 2021 03:24:00'),
        }}
        title="Haus St. Franziskus – lorem ipsum dolor sit amet"
        text="Mitten im historischen Altstadtkern von Überlingen liegt das Haus St. Franziskus. Das prachtvolle Gebäude, ursprünglich als Kloster von Franziskanermönchen errichtet, kann auf eine rund 750-jährige Geschichte zurückblicken. Heute hat sich das ehemalige Ordenshaus zu einer modernen und leistungsfähigen Einrichtung entwickelt, die über alle Sanierungsmaßnahmen hinweg ihr ganz besonderes Flair erhalten konnte.Die Jahrhunderte lange, durch Mönche und später durch Nonnen gelebte Nächstenliebe ist noch heute, schon beim Betreten des Hauses, deutlich spürbar."
        image={{
            small: 'https://unsplash.it/619/348?image=400',
            medium: 'https://unsplash.it/791/445?image=400',
            semilarge: 'https://unsplash.it/944/531?image=400',
        }}
    />
);

export const isInverted: Story = () => (
    <NewsIntro
        tag="Tag Secondary"
        onTagClick={console.log}
        meta={{
            author: 'Max Mustermann',
            date: new Date('July 22, 2021 03:24:00'),
        }}
        title="Haus St. Franziskus – lorem ipsum dolor sit amet"
        text="Mitten im historischen Altstadtkern von Überlingen liegt das Haus St. Franziskus. Das prachtvolle Gebäude, ursprünglich als Kloster von Franziskanermönchen errichtet, kann auf eine rund 750-jährige Geschichte zurückblicken. Heute hat sich das ehemalige Ordenshaus zu einer modernen und leistungsfähigen Einrichtung entwickelt, die über alle Sanierungsmaßnahmen hinweg ihr ganz besonderes Flair erhalten konnte.Die Jahrhunderte lange, durch Mönche und später durch Nonnen gelebte Nächstenliebe ist noch heute, schon beim Betreten des Hauses, deutlich spürbar."
        image={{
            small: 'https://unsplash.it/619/348?image=400',
            medium: 'https://unsplash.it/791/445?image=400',
            semilarge: 'https://unsplash.it/944/531?image=400',
        }}
        isInverted
    />
);
