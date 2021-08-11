import * as React from 'react';
import { Meta, Story } from '@storybook/react';
import FactList from 'components/sections/FactList';

export default {
    title: 'Sections/FactList',
    component: FactList,
} as Meta;

export const Default: Story = () => (
    <FactList
        facts={[
            {
                label: 'Fachgerechte Grund- und Behandlungspflege',
                icon: { src: 'http://placehold.it/40' },
            },
            {
                label: 'Sorge für Sicherheit und Wohlbefinden',
                icon: { src: 'http://placehold.it/40' },
            },
            {
                label:
                    'Förderung und Erhaltung des Gesundheitszustandes unserer Bewohner unter Berücksichtigung körperlicher, geistiger und seelischer Bedürfnisse und Ressourcen',
                icon: { src: 'http://placehold.it/40' },
            },
            {
                label:
                    'Förderung der Aktivitäten und Interessen unserer Bewohner',
                icon: { src: 'http://placehold.it/40' },
            },
            {
                label:
                    'Integration der einzelnen Bewohner in die Hausgemeinschaft, das neue Lebensumfeld und die Tagesabläufe unseres Hauses',
                icon: { src: 'http://placehold.it/40' },
            },
            {
                label:
                    'Erhaltung und Förderung der Individualität und Selbstbestimmung',
                icon: { src: 'http://placehold.it/40' },
            },
            {
                label:
                    'Neben der pflegerischen auch die seelsorgerische Begleitung bis zum Tod',
                icon: { src: 'http://placehold.it/40' },
            },
        ]}
    />
);
export const Inverted: Story = () => (
    <FactList
        bgMode="inverted"
        facts={[
            {
                label: 'Fachgerechte Grund- und Behandlungspflege',
                icon: { src: 'http://placehold.it/40' },
            },
            {
                label: 'Sorge für Sicherheit und Wohlbefinden',
                icon: { src: 'http://placehold.it/40' },
            },
            {
                label:
                    'Förderung und Erhaltung des Gesundheitszustandes unserer Bewohner unter Berücksichtigung körperlicher, geistiger und seelischer Bedürfnisse und Ressourcen',
                icon: { src: 'http://placehold.it/40' },
            },
            {
                label:
                    'Förderung der Aktivitäten und Interessen unserer Bewohner',
                icon: { src: 'http://placehold.it/40' },
            },
            {
                label:
                    'Integration der einzelnen Bewohner in die Hausgemeinschaft, das neue Lebensumfeld und die Tagesabläufe unseres Hauses',
                icon: { src: 'http://placehold.it/40' },
            },
            {
                label:
                    'Erhaltung und Förderung der Individualität und Selbstbestimmung',
                icon: { src: 'http://placehold.it/40' },
            },
            {
                label:
                    'Neben der pflegerischen auch die seelsorgerische Begleitung bis zum Tod',
                icon: { src: 'http://placehold.it/40' },
            },
        ]}
    />
);
export const WithBgColor: Story = () => (
    <FactList
        bgMode="full"
        facts={[
            {
                label: 'Fachgerechte Grund- und Behandlungspflege',
                icon: { src: 'http://placehold.it/40' },
            },
            {
                label: 'Sorge für Sicherheit und Wohlbefinden',
                icon: { src: 'http://placehold.it/40' },
            },
            {
                label:
                    'Förderung und Erhaltung des Gesundheitszustandes unserer Bewohner unter Berücksichtigung körperlicher, geistiger und seelischer Bedürfnisse und Ressourcen',
                icon: { src: 'http://placehold.it/40' },
            },
            {
                label:
                    'Förderung der Aktivitäten und Interessen unserer Bewohner',
                icon: { src: 'http://placehold.it/40' },
            },
            {
                label:
                    'Integration der einzelnen Bewohner in die Hausgemeinschaft, das neue Lebensumfeld und die Tagesabläufe unseres Hauses',
                icon: { src: 'http://placehold.it/40' },
            },
            {
                label:
                    'Erhaltung und Förderung der Individualität und Selbstbestimmung',
                icon: { src: 'http://placehold.it/40' },
            },
            {
                label:
                    'Neben der pflegerischen auch die seelsorgerische Begleitung bis zum Tod',
                icon: { src: 'http://placehold.it/40' },
            },
        ]}
    />
);

export const WithText: Story = () => (
    <FactList
        bgMode="full"
        facts={[
            {
                label: 'Fachgerechte Grund- und Behandlungspflege',
                icon: { src: 'http://placehold.it/40' },
                text:
                    'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam, et eos architecto laboriosam <a href="#0">impedit</a> nihil illum non maxime recusandae, dolores doloribus quos iusto? Deserunt dicta non, assumenda pariatur dolore praesentium dolorem hic reiciendis magni itaque esse architecto, necessitatibus earum enim, at ex? Provident, dolorum dolore amet facilis quisquam unde vero, id sapiente sequi perspiciatis qui possimus! Qui asperiores, numquam quasi distinctio illo aut deleniti sequi explicabo ipsum, expedita assumenda unde voluptatum. Eaque, sed! Dolores, facilis reiciendis. Error minima dolorum soluta.',
            },
            {
                label: 'Sorge für Sicherheit und Wohlbefinden',
                icon: { src: 'http://placehold.it/40' },
                text:
                    'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam, et eos architecto laboriosam <a href="#0">impedit</a> nihil illum non maxime recusandae, dolores doloribus quos iusto? Deserunt dicta non, assumenda pariatur dolore praesentium dolorem hic reiciendis magni itaque esse architecto, necessitatibus earum enim, at ex? Provident, dolorum dolore amet facilis quisquam unde vero, id sapiente sequi perspiciatis qui possimus! Qui asperiores, numquam quasi distinctio illo aut deleniti sequi explicabo ipsum, expedita assumenda unde voluptatum. Eaque, sed! Dolores, facilis reiciendis. Error minima dolorum soluta.',
            },
            {
                label:
                    'Förderung und Erhaltung des Gesundheitszustandes unserer Bewohner unter Berücksichtigung körperlicher, geistiger und seelischer Bedürfnisse und Ressourcen',
                icon: { src: 'http://placehold.it/40' },
                text:
                    'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam, et eos architecto laboriosam <a href="#0">impedit</a> nihil illum non maxime recusandae, dolores doloribus quos iusto? Deserunt dicta non, assumenda pariatur dolore praesentium dolorem hic reiciendis magni itaque esse architecto, necessitatibus earum enim, at ex? Provident, dolorum dolore amet facilis quisquam unde vero, id sapiente sequi perspiciatis qui possimus! Qui asperiores, numquam quasi distinctio illo aut deleniti sequi explicabo ipsum, expedita assumenda unde voluptatum. Eaque, sed! Dolores, facilis reiciendis. Error minima dolorum soluta.',
            },
            {
                label:
                    'Förderung der Aktivitäten und Interessen unserer Bewohner',
                icon: { src: 'http://placehold.it/40' },
                text:
                    'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam, et eos architecto laboriosam <a href="#0">impedit</a> nihil illum non maxime recusandae, dolores doloribus quos iusto? Deserunt dicta non, assumenda pariatur dolore praesentium dolorem hic reiciendis magni itaque esse architecto, necessitatibus earum enim, at ex? Provident, dolorum dolore amet facilis quisquam unde vero, id sapiente sequi perspiciatis qui possimus! Qui asperiores, numquam quasi distinctio illo aut deleniti sequi explicabo ipsum, expedita assumenda unde voluptatum. Eaque, sed! Dolores, facilis reiciendis. Error minima dolorum soluta.',
            },
            {
                label:
                    'Integration der einzelnen Bewohner in die Hausgemeinschaft, das neue Lebensumfeld und die Tagesabläufe unseres Hauses',
                icon: { src: 'http://placehold.it/40' },
                text:
                    'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam, et eos architecto laboriosam <a href="#0">impedit</a> nihil illum non maxime recusandae, dolores doloribus quos iusto? Deserunt dicta non, assumenda pariatur dolore praesentium dolorem hic reiciendis magni itaque esse architecto, necessitatibus earum enim, at ex? Provident, dolorum dolore amet facilis quisquam unde vero, id sapiente sequi perspiciatis qui possimus! Qui asperiores, numquam quasi distinctio illo aut deleniti sequi explicabo ipsum, expedita assumenda unde voluptatum. Eaque, sed! Dolores, facilis reiciendis. Error minima dolorum soluta.',
            },
            {
                label:
                    'Erhaltung und Förderung der Individualität und Selbstbestimmung',
                icon: { src: 'http://placehold.it/40' },
                text:
                    'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam, et eos architecto laboriosam <a href="#0">impedit</a> nihil illum non maxime recusandae, dolores doloribus quos iusto? Deserunt dicta non, assumenda pariatur dolore praesentium dolorem hic reiciendis magni itaque esse architecto, necessitatibus earum enim, at ex? Provident, dolorum dolore amet facilis quisquam unde vero, id sapiente sequi perspiciatis qui possimus! Qui asperiores, numquam quasi distinctio illo aut deleniti sequi explicabo ipsum, expedita assumenda unde voluptatum. Eaque, sed! Dolores, facilis reiciendis. Error minima dolorum soluta.',
            },
            {
                label:
                    'Neben der pflegerischen auch die seelsorgerische Begleitung bis zum Tod',
                icon: { src: 'http://placehold.it/40' },
                text:
                    'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam, et eos architecto laboriosam <a href="#0">impedit</a> nihil illum non maxime recusandae, dolores doloribus quos iusto? Deserunt dicta non, assumenda pariatur dolore praesentium dolorem hic reiciendis magni itaque esse architecto, necessitatibus earum enim, at ex? Provident, dolorum dolore amet facilis quisquam unde vero, id sapiente sequi perspiciatis qui possimus! Qui asperiores, numquam quasi distinctio illo aut deleniti sequi explicabo ipsum, expedita assumenda unde voluptatum. Eaque, sed! Dolores, facilis reiciendis. Error minima dolorum soluta.',
            },
        ]}
    />
);
