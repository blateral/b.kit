import * as React from 'react';
import { Meta, Story } from '@storybook/react';
import CallToAction from 'components/sections/CallToAction';
import Phone from 'components/base/icons/Phone';
import Mail from 'components/base/icons/Mail';
import { Button, CompactForm } from 'index';
import ButtonGhost from 'components/buttons/ButtonGhost';

export default {
    title: 'Sections/CallToAction',
    component: CallToAction,
} as Meta;

export const Default: Story = () => (
    <CallToAction title="Haus St. Franziskus – lorem ipsum dolor sit amet" />
);

export const WithSuperTitle: Story = () => (
    <CallToAction
        title="Haus St. Franziskus – lorem ipsum dolor sit amet"
        superTitle="Haus St. Franziskus"
    />
);

export const WithIntroText: Story = () => (
    <CallToAction
        title="Haus St. Franziskus – lorem ipsum dolor sit amet"
        superTitle="Haus St. Franziskus"
        text="Mitten im historischen Altstadtkern von Überlingen liegt das Haus St. Franziskus. Das prachtvolle Gebäude, ursprünglich als Kloster von Franziskanermönchen errichtet, kann auf eine rund 750-jährige Geschichte zurückblicken."
    />
);

export const WithContact: Story = () => (
    <CallToAction
        title="Haus St. Franziskus – lorem ipsum dolor sit amet"
        superTitle="Haus St. Franziskus"
        text="Mitten im historischen Altstadtkern von Überlingen liegt das Haus St. Franziskus. Das prachtvolle Gebäude, ursprünglich als Kloster von Franziskanermönchen errichtet, kann auf eine rund 750-jährige Geschichte zurückblicken."
        contact={{
            avatar: {
                src: 'https://via.placeholder.com/196',
                alt: 'avatar',
            },
            name: 'Frau Manuela Müller',
            description: 'Ihre Ansprechpartnerin im Haus St. Franziskus',
            addresses: [
                { decorator: <Phone />, label: '+49 (0) 7551-9534-41' },
                { decorator: <Mail />, label: 'mueller@ueberlingen.de' },
            ],
        }}
    />
);

export const WithActions: Story = () => (
    <CallToAction
        title="Haus St. Franziskus – lorem ipsum dolor sit amet"
        superTitle="Haus St. Franziskus"
        text="Mitten im historischen Altstadtkern von Überlingen liegt das Haus St. Franziskus. Das prachtvolle Gebäude, ursprünglich als Kloster von Franziskanermönchen errichtet, kann auf eine rund 750-jährige Geschichte zurückblicken."
        contact={{
            avatar: {
                src: 'https://via.placeholder.com/196',
                alt: 'avatar',
            },
            name: 'Frau Manuela Müller',
            description: 'Ihre Ansprechpartnerin im Haus St. Franziskus',
            addresses: [
                { decorator: <Phone />, label: '+49 (0) 7551-9534-41' },
                { decorator: <Mail />, label: 'mueller@ueberlingen.de' },
            ],
        }}
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

export const WithBadge: Story = () => (
    <CallToAction
        title="Haus St. Franziskus – lorem ipsum dolor sit amet"
        superTitle="Haus St. Franziskus"
        text="Mitten im historischen Altstadtkern von Überlingen liegt das Haus St. Franziskus. Das prachtvolle Gebäude, ursprünglich als Kloster von Franziskanermönchen errichtet, kann auf eine rund 750-jährige Geschichte zurückblicken."
        contact={{
            avatar: {
                src: 'https://via.placeholder.com/196',
                alt: 'avatar',
            },
            name: 'Frau Manuela Müller',
            description: 'Ihre Ansprechpartnerin im Haus St. Franziskus',
            addresses: [
                { decorator: <Phone />, label: '+49 (0) 7551-9534-41' },
                { decorator: <Mail />, label: 'mueller@ueberlingen.de' },
            ],
        }}
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
        badge={
            <img
                src="https://via.placeholder.com/392x392/?text=badge"
                style={{ height: '100%', width: '100%' }}
            />
        }
    />
);

export const IsInverted: Story = () => (
    <CallToAction
        isInverted
        title="Haus St. Franziskus – lorem ipsum dolor sit amet"
        superTitle="Haus St. Franziskus"
        text="Mitten im historischen Altstadtkern von Überlingen liegt das Haus St. Franziskus. Das prachtvolle Gebäude, ursprünglich als Kloster von Franziskanermönchen errichtet, kann auf eine rund 750-jährige Geschichte zurückblicken."
        contact={{
            avatar: {
                src: 'https://via.placeholder.com/196',
                alt: 'avatar',
            },
            name: 'Frau Manuela Müller',
            description: 'Ihre Ansprechpartnerin im Haus St. Franziskus',
            addresses: [
                { decorator: <Phone />, label: '+49 (0) 7551-9534-41' },
                { decorator: <Mail />, label: 'mueller@ueberlingen.de' },
            ],
        }}
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
        badge={
            <img
                src="https://via.placeholder.com/392x392/?text=badge"
                style={{ height: '100%', width: '100%' }}
            />
        }
    />
);

export const WithNewsletterForm: Story = () => (
    <CallToAction
        title="Haus St. Franziskus – lorem ipsum dolor sit amet"
        superTitle="Haus St. Franziskus"
        text="Mitten im historischen Altstadtkern von Überlingen liegt das Haus St. Franziskus. Das prachtvolle Gebäude, ursprünglich als Kloster von Franziskanermönchen errichtet, kann auf eine rund 750-jährige Geschichte zurückblicken."
        newsForm={(isInverted) => (
            <CompactForm
                isInverted={isInverted}
                placeholder="Geben Sie Ihre E-Mail Adresse an"
                buttonIcon={'Primary'}
                onSubmit={console.log}
                onClick={console.log}
                onBlur={console.log}
                backgroundStyle="white"
            />
        )}
        badge={
            <img
                src="https://via.placeholder.com/392x392/?text=badge"
                style={{ height: '100%', width: '100%' }}
            />
        }
    />
);

export const WithNewsletterFormInverted: Story = () => (
    <CallToAction
        isInverted
        title="Haus St. Franziskus – lorem ipsum dolor sit amet"
        superTitle="Haus St. Franziskus"
        text="Mitten im historischen Altstadtkern von Überlingen liegt das Haus St. Franziskus. Das prachtvolle Gebäude, ursprünglich als Kloster von Franziskanermönchen errichtet, kann auf eine rund 750-jährige Geschichte zurückblicken."
        newsForm={(isInverted) => (
            <CompactForm
                isInverted={isInverted}
                placeholder="Geben Sie Ihre E-Mail Adresse an"
                buttonIcon={'Primary'}
                onSubmit={console.log}
                onClick={console.log}
                onBlur={console.log}
                backgroundStyle="white"
            />
        )}
        badge={
            <img
                src="https://via.placeholder.com/392x392/?text=badge"
                style={{ height: '100%', width: '100%' }}
            />
        }
    />
);
