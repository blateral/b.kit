import * as React from 'react';
import { Meta, Story } from '@storybook/react';
import FactList from 'components/sections/FactList';
import Button from 'components/buttons/Button';
import ButtonGhost from 'components/buttons/ButtonGhost';

export default {
    title: 'Sections/FactList',
    component: FactList,
} as Meta;

export const Default: Story = () => (
    <FactList
        title="Haus St. Franziskus – lorem ipsum dolor sit amet"
        superTitle="Haus St. Franziskus"
        intro="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem praesentium, alias porro necessitatibus accusantium placeat non sequi ea eos repellendus sapiente facilis fugiat, sunt provident officia quam! Porro inventore quidem libero officia quam? Quasi perferendis laudantium saepe perspiciatis labore inventore corrupti cupiditate ullam beatae illo mollitia quis ea nulla dolores illum voluptatibus dicta, quos sint, eligendi commodi. Laborum aliquam quae necessitatibus ducimus ut maxime eos alias possimus cum, magnam, eum ipsa optio accusantium ullam! Provident eum aliquam saepe facere error deserunt quae tenetur illo rem, ratione velit sed. Dolore harum soluta illum beatae quaerat placeat earum eius nihil, odio omnis!"
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
        title="Haus St. Franziskus – lorem ipsum dolor sit amet"
        superTitle="Haus St. Franziskus"
        intro="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem praesentium, alias porro necessitatibus accusantium placeat non sequi ea eos repellendus sapiente facilis fugiat, sunt provident officia quam! Porro inventore quidem libero officia quam? Quasi perferendis laudantium saepe perspiciatis labore inventore corrupti cupiditate ullam beatae illo mollitia quis ea nulla dolores illum voluptatibus dicta, quos sint, eligendi commodi. Laborum aliquam quae necessitatibus ducimus ut maxime eos alias possimus cum, magnam, eum ipsa optio accusantium ullam! Provident eum aliquam saepe facere error deserunt quae tenetur illo rem, ratione velit sed. Dolore harum soluta illum beatae quaerat placeat earum eius nihil, odio omnis!"
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
        isInverted
    />
);
export const WithBgColor: Story = () => (
    <FactList
        title="Haus St. Franziskus – lorem ipsum dolor sit amet"
        superTitle="Haus St. Franziskus"
        intro="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem praesentium, alias porro necessitatibus accusantium placeat non sequi ea eos repellendus sapiente facilis fugiat, sunt provident officia quam! Porro inventore quidem libero officia quam? Quasi perferendis laudantium saepe perspiciatis labore inventore corrupti cupiditate ullam beatae illo mollitia quis ea nulla dolores illum voluptatibus dicta, quos sint, eligendi commodi. Laborum aliquam quae necessitatibus ducimus ut maxime eos alias possimus cum, magnam, eum ipsa optio accusantium ullam! Provident eum aliquam saepe facere error deserunt quae tenetur illo rem, ratione velit sed. Dolore harum soluta illum beatae quaerat placeat earum eius nihil, odio omnis!"
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
        bgMode="full"
    />
);

export const WithText: Story = () => (
    <FactList
        title="Haus St. Franziskus – lorem ipsum dolor sit amet"
        superTitle="Haus St. Franziskus"
        intro="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem praesentium, alias porro necessitatibus accusantium placeat non sequi ea eos repellendus sapiente facilis fugiat, sunt provident officia quam! Porro inventore quidem libero officia quam? Quasi perferendis laudantium saepe perspiciatis labore inventore corrupti cupiditate ullam beatae illo mollitia quis ea nulla dolores illum voluptatibus dicta, quos sint, eligendi commodi. Laborum aliquam quae necessitatibus ducimus ut maxime eos alias possimus cum, magnam, eum ipsa optio accusantium ullam! Provident eum aliquam saepe facere error deserunt quae tenetur illo rem, ratione velit sed. Dolore harum soluta illum beatae quaerat placeat earum eius nihil, odio omnis!"
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
        facts={[
            {
                label: 'Fachgerechte Grund- und Behandlungspflege',
                icon: { src: 'http://placehold.it/40' },
                text:
                    'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam, et eos architecto laboriosam impedit nihil illum non maxime recusandae, dolores doloribus quos iusto? Deserunt dicta non, assumenda pariatur dolore praesentium dolorem hic reiciendis magni itaque esse architecto, necessitatibus earum enim, at ex? Provident, dolorum dolore amet facilis quisquam unde vero, id sapiente sequi perspiciatis qui possimus! Qui asperiores, numquam quasi distinctio illo aut deleniti sequi explicabo ipsum, expedita assumenda unde voluptatum. Eaque, sed! Dolores, facilis reiciendis. Error minima dolorum soluta.',
            },
            {
                label: 'Sorge für Sicherheit und Wohlbefinden',
                icon: { src: 'http://placehold.it/40' },
                text:
                    'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam, et eos architecto laboriosam impedit nihil illum non maxime recusandae, dolores doloribus quos iusto? Deserunt dicta non, assumenda pariatur dolore praesentium dolorem hic reiciendis magni itaque esse architecto, necessitatibus earum enim, at ex? Provident, dolorum dolore amet facilis quisquam unde vero, id sapiente sequi perspiciatis qui possimus! Qui asperiores, numquam quasi distinctio illo aut deleniti sequi explicabo ipsum, expedita assumenda unde voluptatum. Eaque, sed! Dolores, facilis reiciendis. Error minima dolorum soluta.',
            },
            {
                label:
                    'Förderung und Erhaltung des Gesundheitszustandes unserer Bewohner unter Berücksichtigung körperlicher, geistiger und seelischer Bedürfnisse und Ressourcen',
                icon: { src: 'http://placehold.it/40' },
                text:
                    'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam, et eos architecto laboriosam impedit nihil illum non maxime recusandae, dolores doloribus quos iusto? Deserunt dicta non, assumenda pariatur dolore praesentium dolorem hic reiciendis magni itaque esse architecto, necessitatibus earum enim, at ex? Provident, dolorum dolore amet facilis quisquam unde vero, id sapiente sequi perspiciatis qui possimus! Qui asperiores, numquam quasi distinctio illo aut deleniti sequi explicabo ipsum, expedita assumenda unde voluptatum. Eaque, sed! Dolores, facilis reiciendis. Error minima dolorum soluta.',
            },
            {
                label:
                    'Förderung der Aktivitäten und Interessen unserer Bewohner',
                icon: { src: 'http://placehold.it/40' },
                text:
                    'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam, et eos architecto laboriosam impedit nihil illum non maxime recusandae, dolores doloribus quos iusto? Deserunt dicta non, assumenda pariatur dolore praesentium dolorem hic reiciendis magni itaque esse architecto, necessitatibus earum enim, at ex? Provident, dolorum dolore amet facilis quisquam unde vero, id sapiente sequi perspiciatis qui possimus! Qui asperiores, numquam quasi distinctio illo aut deleniti sequi explicabo ipsum, expedita assumenda unde voluptatum. Eaque, sed! Dolores, facilis reiciendis. Error minima dolorum soluta.',
            },
            {
                label:
                    'Integration der einzelnen Bewohner in die Hausgemeinschaft, das neue Lebensumfeld und die Tagesabläufe unseres Hauses',
                icon: { src: 'http://placehold.it/40' },
                text:
                    'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam, et eos architecto laboriosam impedit nihil illum non maxime recusandae, dolores doloribus quos iusto? Deserunt dicta non, assumenda pariatur dolore praesentium dolorem hic reiciendis magni itaque esse architecto, necessitatibus earum enim, at ex? Provident, dolorum dolore amet facilis quisquam unde vero, id sapiente sequi perspiciatis qui possimus! Qui asperiores, numquam quasi distinctio illo aut deleniti sequi explicabo ipsum, expedita assumenda unde voluptatum. Eaque, sed! Dolores, facilis reiciendis. Error minima dolorum soluta.',
            },
            {
                label:
                    'Erhaltung und Förderung der Individualität und Selbstbestimmung',
                icon: { src: 'http://placehold.it/40' },
                text:
                    'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam, et eos architecto laboriosam impedit nihil illum non maxime recusandae, dolores doloribus quos iusto? Deserunt dicta non, assumenda pariatur dolore praesentium dolorem hic reiciendis magni itaque esse architecto, necessitatibus earum enim, at ex? Provident, dolorum dolore amet facilis quisquam unde vero, id sapiente sequi perspiciatis qui possimus! Qui asperiores, numquam quasi distinctio illo aut deleniti sequi explicabo ipsum, expedita assumenda unde voluptatum. Eaque, sed! Dolores, facilis reiciendis. Error minima dolorum soluta.',
            },
            {
                label:
                    'Neben der pflegerischen auch die seelsorgerische Begleitung bis zum Tod',
                icon: { src: 'http://placehold.it/40' },
                text:
                    'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam, et eos architecto laboriosam impedit nihil illum non maxime recusandae, dolores doloribus quos iusto? Deserunt dicta non, assumenda pariatur dolore praesentium dolorem hic reiciendis magni itaque esse architecto, necessitatibus earum enim, at ex? Provident, dolorum dolore amet facilis quisquam unde vero, id sapiente sequi perspiciatis qui possimus! Qui asperiores, numquam quasi distinctio illo aut deleniti sequi explicabo ipsum, expedita assumenda unde voluptatum. Eaque, sed! Dolores, facilis reiciendis. Error minima dolorum soluta.',
            },
        ]}
        bgMode="full"
    />
);
