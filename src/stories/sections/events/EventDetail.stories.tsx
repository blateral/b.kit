/* eslint-disable react/display-name */
import React from 'react';
import { Meta, Story } from '@storybook/react';
import EventDetail, {
    EventDetailComponent,
} from 'components/sections/events/EventDetail';
import Star from 'components/base/icons/Star';
import Info from 'components/base/icons/Info';
import Phone from 'components/base/icons/Phone';
import Mail from 'components/base/icons/Mail';

export default {
    title: 'Sections / Events / EventDetail',
    component: EventDetailComponent,
    parameters: {
        status: {
            type: ['preview', 'qsReady'],
        },
    },
} as Meta;

export const Default: Story = () => (
    <EventDetail
        event={{
            title: 'Lorem ipsum dolor sit amet',
        }}
    />
);

export const WithPublishedDate: Story = () => (
    <EventDetail
        event={{
            title: 'Lorem ipsum dolor sit amet',
            date: new Date('December 17, 1995 03:24:00'),
        }}
    />
);

export const WithDuration: Story = () => (
    <EventDetail
        event={{
            title: 'Lorem ipsum dolor sit amet',
            date: new Date('December 17, 1995 03:24:00'),
            duration: 21600,
        }}
    />
);

export const WithAddress: Story = () => (
    <EventDetail
        event={{
            title: 'Lorem ipsum dolor sit amet',
            date: new Date('December 17, 1995 03:24:00'),
            address: `Altes Rathaus | Münsterstraße 23 | 88662 Überlingen</p>`,
            duration: 21600,
        }}
    />
);

export const WithText: Story = () => (
    <EventDetail
        event={{
            title: 'Lorem ipsum dolor sit amet',
            date: new Date('December 17, 1995 03:24:00'),
            address: `Altes Rathaus | Münsterstraße 23 | 88662 Überlingen</p>`,
            duration: 21600,
            abstract:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Blandit turpis cursus in hac habitasse platea dictumst quisque. Elit ut aliquam purus sit amet. Hendrerit dolor magna eget est lorem ipsum dolor sit amet. Sollicitudin tempor id eu nisl nunc mi ipsum.',
            text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae ultricies leo integer malesuada. Eget gravida cum sociis natoque penatibus et magnis. Scelerisque viverra mauris in aliquam sem fringilla ut morbi. Eu lobortis elementum nibh tellus molestie nunc. Cursus in hac habitasse platea. Rhoncus aenean vel elit scelerisque mauris pellentesque. Eu scelerisque felis imperdiet proin fermentum leo. In arcu cursus euismod quis viverra nibh cras pulvinar mattis. Fermentum iaculis eu non diam phasellus vestibulum lorem sed risus. Imperdiet dui accumsan sit amet nulla facilisi morbi tempus iaculis.<br7>Sed ullamcorper morbi tincidunt ornare massa eget egestas purus. Ultrices mi tempus imperdiet nulla malesuada pellentesque elit eget gravida. Ut morbi tincidunt augue interdum. Pulvinar neque laoreet suspendisse interdum. Egestas maecenas pharetra convallis posuere morbi leo urna molestie at. Imperdiet sed euismod nisi porta. Iaculis at erat pellentesque adipiscing commodo. Nunc consequat interdum varius sit. Aliquet nibh praesent tristique magna sit amet purus gravida. Faucibus purus in massa tempor nec feugiat nisl pretium fusce. Maecenas accumsan lacus vel facilisis volutpat est. Imperdiet dui accumsan sit amet nulla facilisi morbi tempus iaculis.<br7>Viverra nam libero justo laoreet. In cursus turpis massa tincidunt dui ut ornare. Eu turpis egestas pretium aenean pharetra. Maecenas pharetra convallis posuere morbi leo urna molestie at elementum. Sit amet risus nullam eget felis eget nunc. Et molestie ac feugiat sed lectus vestibulum. Et magnis dis parturient montes nascetur ridiculus mus mauris vitae. Et tortor at risus viverra adipiscing at in tellus integer. Amet aliquam id diam maecenas. In iaculis nunc sed augue. Vitae elementum curabitur vitae nunc sed velit dignissim sodales ut. Nam libero justo laoreet sit amet cursus sit amet dictum. Consectetur purus ut faucibus pulvinar elementum. Nulla malesuada pellentesque elit eget gravida cum sociis. Volutpat sed cras ornare arcu dui vivamus arcu. Aliquam vestibulum morbi blandit cursus risus at. Nascetur ridiculus mus mauris vitae ultricies leo integer malesuada. Tellus rutrum tellus pellentesque eu tincidunt tortor aliquam nulla. Mollis nunc sed id semper risus.`,
        }}
    />
);

export const WithTags: Story = () => (
    <EventDetail
        event={{
            title: 'Lorem ipsum dolor sit amet',
            date: new Date('December 17, 1995 03:24:00'),
            address: `Altes Rathaus | Münsterstraße 23 | 88662 Überlingen</p>`,
            duration: 21600,
            abstract:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Blandit turpis cursus in hac habitasse platea dictumst quisque. Elit ut aliquam purus sit amet. Hendrerit dolor magna eget est lorem ipsum dolor sit amet. Sollicitudin tempor id eu nisl nunc mi ipsum.',
            text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae ultricies leo integer malesuada. Eget gravida cum sociis natoque penatibus et magnis. Scelerisque viverra mauris in aliquam sem fringilla ut morbi. Eu lobortis elementum nibh tellus molestie nunc. Cursus in hac habitasse platea. Rhoncus aenean vel elit scelerisque mauris pellentesque. Eu scelerisque felis imperdiet proin fermentum leo. In arcu cursus euismod quis viverra nibh cras pulvinar mattis. Fermentum iaculis eu non diam phasellus vestibulum lorem sed risus. Imperdiet dui accumsan sit amet nulla facilisi morbi tempus iaculis.<br7>Sed ullamcorper morbi tincidunt ornare massa eget egestas purus. Ultrices mi tempus imperdiet nulla malesuada pellentesque elit eget gravida. Ut morbi tincidunt augue interdum. Pulvinar neque laoreet suspendisse interdum. Egestas maecenas pharetra convallis posuere morbi leo urna molestie at. Imperdiet sed euismod nisi porta. Iaculis at erat pellentesque adipiscing commodo. Nunc consequat interdum varius sit. Aliquet nibh praesent tristique magna sit amet purus gravida. Faucibus purus in massa tempor nec feugiat nisl pretium fusce. Maecenas accumsan lacus vel facilisis volutpat est. Imperdiet dui accumsan sit amet nulla facilisi morbi tempus iaculis.<br7>Viverra nam libero justo laoreet. In cursus turpis massa tincidunt dui ut ornare. Eu turpis egestas pretium aenean pharetra. Maecenas pharetra convallis posuere morbi leo urna molestie at elementum. Sit amet risus nullam eget felis eget nunc. Et molestie ac feugiat sed lectus vestibulum. Et magnis dis parturient montes nascetur ridiculus mus mauris vitae. Et tortor at risus viverra adipiscing at in tellus integer. Amet aliquam id diam maecenas. In iaculis nunc sed augue. Vitae elementum curabitur vitae nunc sed velit dignissim sodales ut. Nam libero justo laoreet sit amet cursus sit amet dictum. Consectetur purus ut faucibus pulvinar elementum. Nulla malesuada pellentesque elit eget gravida cum sociis. Volutpat sed cras ornare arcu dui vivamus arcu. Aliquam vestibulum morbi blandit cursus risus at. Nascetur ridiculus mus mauris vitae ultricies leo integer malesuada. Tellus rutrum tellus pellentesque eu tincidunt tortor aliquam nulla. Mollis nunc sed id semper risus.`,
            tags: [
                { name: 'Tag 1', link: { href: '#0' } },
                { name: 'Tag 2', link: { href: '#0' } },
                { name: 'Tag 3', link: { href: '#0' } },
                { name: 'Tag 4', link: { href: '#0' } },
                { name: 'Tag 5', link: { href: '#0' } },
            ],
        }}
    />
);

export const WithImage: Story = () => (
    <EventDetail
        event={{
            images: [
                {
                    small: 'https://unsplash.it/640/480?image=110',
                    medium: 'https://unsplash.it/400/300?image=110',
                    semilarge: 'https://unsplash.it/500/375?image=110',
                    large: 'https://unsplash.it/704/528?image=110',
                },
            ],
            title: 'Lorem ipsum dolor sit amet',
            date: new Date('December 17, 1995 03:24:00'),
            address: `Altes Rathaus | Münsterstraße 23 | 88662 Überlingen</p>`,
            duration: 21600,
            abstract:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Blandit turpis cursus in hac habitasse platea dictumst quisque. Elit ut aliquam purus sit amet. Hendrerit dolor magna eget est lorem ipsum dolor sit amet. Sollicitudin tempor id eu nisl nunc mi ipsum.',
            text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae ultricies leo integer malesuada. Eget gravida cum sociis natoque penatibus et magnis. Scelerisque viverra mauris in aliquam sem fringilla ut morbi. Eu lobortis elementum nibh tellus molestie nunc. Cursus in hac habitasse platea. Rhoncus aenean vel elit scelerisque mauris pellentesque. Eu scelerisque felis imperdiet proin fermentum leo. In arcu cursus euismod quis viverra nibh cras pulvinar mattis. Fermentum iaculis eu non diam phasellus vestibulum lorem sed risus. Imperdiet dui accumsan sit amet nulla facilisi morbi tempus iaculis.<br7>Sed ullamcorper morbi tincidunt ornare massa eget egestas purus. Ultrices mi tempus imperdiet nulla malesuada pellentesque elit eget gravida. Ut morbi tincidunt augue interdum. Pulvinar neque laoreet suspendisse interdum. Egestas maecenas pharetra convallis posuere morbi leo urna molestie at. Imperdiet sed euismod nisi porta. Iaculis at erat pellentesque adipiscing commodo. Nunc consequat interdum varius sit. Aliquet nibh praesent tristique magna sit amet purus gravida. Faucibus purus in massa tempor nec feugiat nisl pretium fusce. Maecenas accumsan lacus vel facilisis volutpat est. Imperdiet dui accumsan sit amet nulla facilisi morbi tempus iaculis.<br7>Viverra nam libero justo laoreet. In cursus turpis massa tincidunt dui ut ornare. Eu turpis egestas pretium aenean pharetra. Maecenas pharetra convallis posuere morbi leo urna molestie at elementum. Sit amet risus nullam eget felis eget nunc. Et molestie ac feugiat sed lectus vestibulum. Et magnis dis parturient montes nascetur ridiculus mus mauris vitae. Et tortor at risus viverra adipiscing at in tellus integer. Amet aliquam id diam maecenas. In iaculis nunc sed augue. Vitae elementum curabitur vitae nunc sed velit dignissim sodales ut. Nam libero justo laoreet sit amet cursus sit amet dictum. Consectetur purus ut faucibus pulvinar elementum. Nulla malesuada pellentesque elit eget gravida cum sociis. Volutpat sed cras ornare arcu dui vivamus arcu. Aliquam vestibulum morbi blandit cursus risus at. Nascetur ridiculus mus mauris vitae ultricies leo integer malesuada. Tellus rutrum tellus pellentesque eu tincidunt tortor aliquam nulla. Mollis nunc sed id semper risus.`,
            tags: [
                { name: 'Tag 1', link: { href: '#0' } },
                { name: 'Tag 2', link: { href: '#0' } },
                { name: 'Tag 3', link: { href: '#0' } },
                { name: 'Tag 4', link: { href: '#0' } },
                { name: 'Tag 5', link: { href: '#0' } },
            ],
        }}
    />
);

export const WithImageAsBackground: Story = () => (
    <EventDetail
        useImageAsBg
        event={{
            images: [
                {
                    small: 'https://unsplash.it/640/480?image=110',
                    medium: 'https://unsplash.it/400/300?image=110',
                    semilarge: 'https://unsplash.it/500/375?image=110',
                    large: 'https://unsplash.it/704/528?image=110',
                },
            ],
            title: 'Lorem ipsum dolor sit amet',
            date: new Date('December 17, 1995 03:24:00'),
            address: `Altes Rathaus | Münsterstraße 23 | 88662 Überlingen</p>`,
            duration: 21600,
            abstract:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Blandit turpis cursus in hac habitasse platea dictumst quisque. Elit ut aliquam purus sit amet. Hendrerit dolor magna eget est lorem ipsum dolor sit amet. Sollicitudin tempor id eu nisl nunc mi ipsum.',
            text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae ultricies leo integer malesuada. Eget gravida cum sociis natoque penatibus et magnis. Scelerisque viverra mauris in aliquam sem fringilla ut morbi. Eu lobortis elementum nibh tellus molestie nunc. Cursus in hac habitasse platea. Rhoncus aenean vel elit scelerisque mauris pellentesque. Eu scelerisque felis imperdiet proin fermentum leo. In arcu cursus euismod quis viverra nibh cras pulvinar mattis. Fermentum iaculis eu non diam phasellus vestibulum lorem sed risus. Imperdiet dui accumsan sit amet nulla facilisi morbi tempus iaculis.<br7>Sed ullamcorper morbi tincidunt ornare massa eget egestas purus. Ultrices mi tempus imperdiet nulla malesuada pellentesque elit eget gravida. Ut morbi tincidunt augue interdum. Pulvinar neque laoreet suspendisse interdum. Egestas maecenas pharetra convallis posuere morbi leo urna molestie at. Imperdiet sed euismod nisi porta. Iaculis at erat pellentesque adipiscing commodo. Nunc consequat interdum varius sit. Aliquet nibh praesent tristique magna sit amet purus gravida. Faucibus purus in massa tempor nec feugiat nisl pretium fusce. Maecenas accumsan lacus vel facilisis volutpat est. Imperdiet dui accumsan sit amet nulla facilisi morbi tempus iaculis.<br7>Viverra nam libero justo laoreet. In cursus turpis massa tincidunt dui ut ornare. Eu turpis egestas pretium aenean pharetra. Maecenas pharetra convallis posuere morbi leo urna molestie at elementum. Sit amet risus nullam eget felis eget nunc. Et molestie ac feugiat sed lectus vestibulum. Et magnis dis parturient montes nascetur ridiculus mus mauris vitae. Et tortor at risus viverra adipiscing at in tellus integer. Amet aliquam id diam maecenas. In iaculis nunc sed augue. Vitae elementum curabitur vitae nunc sed velit dignissim sodales ut. Nam libero justo laoreet sit amet cursus sit amet dictum. Consectetur purus ut faucibus pulvinar elementum. Nulla malesuada pellentesque elit eget gravida cum sociis. Volutpat sed cras ornare arcu dui vivamus arcu. Aliquam vestibulum morbi blandit cursus risus at. Nascetur ridiculus mus mauris vitae ultricies leo integer malesuada. Tellus rutrum tellus pellentesque eu tincidunt tortor aliquam nulla. Mollis nunc sed id semper risus.`,
            tags: [
                { name: 'Tag 1', link: { href: '#0' } },
                { name: 'Tag 2', link: { href: '#0' } },
                { name: 'Tag 3', link: { href: '#0' } },
                { name: 'Tag 4', link: { href: '#0' } },
                { name: 'Tag 5', link: { href: '#0' } },
            ],
        }}
    />
);

export const With2Images: Story = () => (
    <EventDetail
        event={{
            images: [
                {
                    small: 'https://unsplash.it/640/480?image=110',
                    medium: 'https://unsplash.it/400/300?image=110',
                    semilarge: 'https://unsplash.it/500/375?image=110',
                    large: 'https://unsplash.it/704/528?image=110',
                },
                {
                    small: 'https://unsplash.it/640/480?image=111',
                    medium: 'https://unsplash.it/400/300?image=111',
                    semilarge: 'https://unsplash.it/500/375?image=111',
                    large: 'https://unsplash.it/704/528?image=111',
                },
            ],
            title: 'Lorem ipsum dolor sit amet',
            date: new Date('December 17, 1995 03:24:00'),
            address: `Altes Rathaus | Münsterstraße 23 | 88662 Überlingen</p>`,
            duration: 21600,
            abstract:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Blandit turpis cursus in hac habitasse platea dictumst quisque. Elit ut aliquam purus sit amet. Hendrerit dolor magna eget est lorem ipsum dolor sit amet. Sollicitudin tempor id eu nisl nunc mi ipsum.',
            text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae ultricies leo integer malesuada. Eget gravida cum sociis natoque penatibus et magnis. Scelerisque viverra mauris in aliquam sem fringilla ut morbi. Eu lobortis elementum nibh tellus molestie nunc. Cursus in hac habitasse platea. Rhoncus aenean vel elit scelerisque mauris pellentesque. Eu scelerisque felis imperdiet proin fermentum leo. In arcu cursus euismod quis viverra nibh cras pulvinar mattis. Fermentum iaculis eu non diam phasellus vestibulum lorem sed risus. Imperdiet dui accumsan sit amet nulla facilisi morbi tempus iaculis.<br7>Sed ullamcorper morbi tincidunt ornare massa eget egestas purus. Ultrices mi tempus imperdiet nulla malesuada pellentesque elit eget gravida. Ut morbi tincidunt augue interdum. Pulvinar neque laoreet suspendisse interdum. Egestas maecenas pharetra convallis posuere morbi leo urna molestie at. Imperdiet sed euismod nisi porta. Iaculis at erat pellentesque adipiscing commodo. Nunc consequat interdum varius sit. Aliquet nibh praesent tristique magna sit amet purus gravida. Faucibus purus in massa tempor nec feugiat nisl pretium fusce. Maecenas accumsan lacus vel facilisis volutpat est. Imperdiet dui accumsan sit amet nulla facilisi morbi tempus iaculis.<br7>Viverra nam libero justo laoreet. In cursus turpis massa tincidunt dui ut ornare. Eu turpis egestas pretium aenean pharetra. Maecenas pharetra convallis posuere morbi leo urna molestie at elementum. Sit amet risus nullam eget felis eget nunc. Et molestie ac feugiat sed lectus vestibulum. Et magnis dis parturient montes nascetur ridiculus mus mauris vitae. Et tortor at risus viverra adipiscing at in tellus integer. Amet aliquam id diam maecenas. In iaculis nunc sed augue. Vitae elementum curabitur vitae nunc sed velit dignissim sodales ut. Nam libero justo laoreet sit amet cursus sit amet dictum. Consectetur purus ut faucibus pulvinar elementum. Nulla malesuada pellentesque elit eget gravida cum sociis. Volutpat sed cras ornare arcu dui vivamus arcu. Aliquam vestibulum morbi blandit cursus risus at. Nascetur ridiculus mus mauris vitae ultricies leo integer malesuada. Tellus rutrum tellus pellentesque eu tincidunt tortor aliquam nulla. Mollis nunc sed id semper risus.`,
            tags: [
                { name: 'Tag 1', link: { href: '#0' } },
                { name: 'Tag 2', link: { href: '#0' } },
                { name: 'Tag 3', link: { href: '#0' } },
                { name: 'Tag 4', link: { href: '#0' } },
                { name: 'Tag 5', link: { href: '#0' } },
            ],
        }}
    />
);

export const WithInfoList: Story = () => (
    <EventDetail
        event={{
            images: [
                {
                    small: 'https://unsplash.it/640/480?image=110',
                    medium: 'https://unsplash.it/400/300?image=110',
                    semilarge: 'https://unsplash.it/500/375?image=110',
                    large: 'https://unsplash.it/704/528?image=110',
                },
                {
                    small: 'https://unsplash.it/640/480?image=111',
                    medium: 'https://unsplash.it/400/300?image=111',
                    semilarge: 'https://unsplash.it/500/375?image=111',
                    large: 'https://unsplash.it/704/528?image=111',
                },
            ],
            title: 'Lorem ipsum dolor sit amet dolor sit amet dolor',
            date: new Date('December 17, 1995 03:24:00'),
            address: `Altes Rathaus | Münsterstraße 23 | 88662 Überlingen</p>`,
            duration: 21600,
            abstract:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Blandit turpis cursus in hac habitasse platea dictumst quisque. Elit ut aliquam purus sit amet. Hendrerit dolor magna eget est lorem ipsum dolor sit amet. Sollicitudin tempor id eu nisl nunc mi ipsum.',
            text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae ultricies leo integer malesuada. Eget gravida cum sociis natoque penatibus et magnis. Scelerisque viverra mauris in aliquam sem fringilla ut morbi. Eu lobortis elementum nibh tellus molestie nunc. Cursus in hac habitasse platea. Rhoncus aenean vel elit scelerisque mauris pellentesque. Eu scelerisque felis imperdiet proin fermentum leo. In arcu cursus euismod quis viverra nibh cras pulvinar mattis. Fermentum iaculis eu non diam phasellus vestibulum lorem sed risus. Imperdiet dui accumsan sit amet nulla facilisi morbi tempus iaculis.<br7>Sed ullamcorper morbi tincidunt ornare massa eget egestas purus. Ultrices mi tempus imperdiet nulla malesuada pellentesque elit eget gravida. Ut morbi tincidunt augue interdum. Pulvinar neque laoreet suspendisse interdum. Egestas maecenas pharetra convallis posuere morbi leo urna molestie at. Imperdiet sed euismod nisi porta. Iaculis at erat pellentesque adipiscing commodo. Nunc consequat interdum varius sit. Aliquet nibh praesent tristique magna sit amet purus gravida. Faucibus purus in massa tempor nec feugiat nisl pretium fusce. Maecenas accumsan lacus vel facilisis volutpat est. Imperdiet dui accumsan sit amet nulla facilisi morbi tempus iaculis.<br7>Viverra nam libero justo laoreet. In cursus turpis massa tincidunt dui ut ornare. Eu turpis egestas pretium aenean pharetra. Maecenas pharetra convallis posuere morbi leo urna molestie at elementum. Sit amet risus nullam eget felis eget nunc. Et molestie ac feugiat sed lectus vestibulum. Et magnis dis parturient montes nascetur ridiculus mus mauris vitae. Et tortor at risus viverra adipiscing at in tellus integer. Amet aliquam id diam maecenas. In iaculis nunc sed augue. Vitae elementum curabitur vitae nunc sed velit dignissim sodales ut. Nam libero justo laoreet sit amet cursus sit amet dictum. Consectetur purus ut faucibus pulvinar elementum. Nulla malesuada pellentesque elit eget gravida cum sociis. Volutpat sed cras ornare arcu dui vivamus arcu. Aliquam vestibulum morbi blandit cursus risus at. Nascetur ridiculus mus mauris vitae ultricies leo integer malesuada. Tellus rutrum tellus pellentesque eu tincidunt tortor aliquam nulla. Mollis nunc sed id semper risus.`,
            tags: [
                { name: 'Tag 1', link: { href: '#0' } },
                { name: 'Tag 2', link: { href: '#0' } },
                { name: 'Tag 3', link: { href: '#0' } },
                { name: 'Tag 4', link: { href: '#0' } },
                { name: 'Tag 5', link: { href: '#0' } },
            ],
        }}
        infos={[
            {
                title: 'Allgemeine Infos',
                items: [
                    {
                        icon: () => <Star />,
                        text: 'Altes Rauthaus, Münsterstraße 23, 88662 Überlingen',
                    },
                    {
                        icon: () => <Star />,
                        text: 'Auf Karte anzeigen',
                    },
                    {
                        icon: () => <Star />,
                        // text: 'Eintritt frei',
                    },
                    {
                        icon: () => <Info />,
                        text: 'Lorem ipsum dolor sit amet consectetur adipiscing elit',
                    },
                ],
            },
            {
                title: 'Reservierung',
                items: [
                    {
                        icon: () => <Phone />,
                        text: '07551 / 888666',
                    },
                    {
                        icon: () => <Mail />,
                        text: '<a href="mailto:max.mustermann@gmail.com">max.mustermann@gmail.com</a>',
                    },
                    {
                        icon: () => <Star />,
                        text: 'www.topevents.com',
                    },
                    {
                        icon: () => <Info />,
                        text: 'Lorem ipsum dolor sit amet consectetur adipiscing elit',
                    },
                ],
            },
            {
                title: 'Veranstalter',
                items: [
                    {
                        icon: () => <Phone />,
                        text: '07551 / 888666',
                    },
                    {
                        icon: () => <Mail />,
                        text: '<a href="mailto:max.mustermann@gmail.com">max.mustermann@gmail.com</a>',
                    },
                    {
                        icon: () => <Star />,
                        text: 'www.topevents.com',
                    },
                    {
                        icon: () => <Info />,
                        text: 'Lorem ipsum dolor sit amet consectetur adipiscing elit',
                    },
                ],
            },
        ]}
    />
);

export const WithBackground: Story = () => (
    <EventDetail
        bgMode="full"
        event={{
            images: [
                {
                    small: 'https://unsplash.it/640/480?image=110',
                    medium: 'https://unsplash.it/400/300?image=110',
                    semilarge: 'https://unsplash.it/500/375?image=110',
                    large: 'https://unsplash.it/704/528?image=110',
                },
                {
                    small: 'https://unsplash.it/640/480?image=111',
                    medium: 'https://unsplash.it/400/300?image=111',
                    semilarge: 'https://unsplash.it/500/375?image=111',
                    large: 'https://unsplash.it/704/528?image=111',
                },
            ],
            title: 'Lorem ipsum dolor sit amet',
            date: new Date('December 17, 1995 03:24:00'),
            address: `Altes Rathaus | Münsterstraße 23 | 88662 Überlingen</p>`,
            duration: 21600,
            abstract:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Blandit turpis cursus in hac habitasse platea dictumst quisque. Elit ut aliquam purus sit amet. Hendrerit dolor magna eget est lorem ipsum dolor sit amet. Sollicitudin tempor id eu nisl nunc mi ipsum.',
            text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae ultricies leo integer malesuada. Eget gravida cum sociis natoque penatibus et magnis. Scelerisque viverra mauris in aliquam sem fringilla ut morbi. Eu lobortis elementum nibh tellus molestie nunc. Cursus in hac habitasse platea. Rhoncus aenean vel elit scelerisque mauris pellentesque. Eu scelerisque felis imperdiet proin fermentum leo. In arcu cursus euismod quis viverra nibh cras pulvinar mattis. Fermentum iaculis eu non diam phasellus vestibulum lorem sed risus. Imperdiet dui accumsan sit amet nulla facilisi morbi tempus iaculis.<br7>Sed ullamcorper morbi tincidunt ornare massa eget egestas purus. Ultrices mi tempus imperdiet nulla malesuada pellentesque elit eget gravida. Ut morbi tincidunt augue interdum. Pulvinar neque laoreet suspendisse interdum. Egestas maecenas pharetra convallis posuere morbi leo urna molestie at. Imperdiet sed euismod nisi porta. Iaculis at erat pellentesque adipiscing commodo. Nunc consequat interdum varius sit. Aliquet nibh praesent tristique magna sit amet purus gravida. Faucibus purus in massa tempor nec feugiat nisl pretium fusce. Maecenas accumsan lacus vel facilisis volutpat est. Imperdiet dui accumsan sit amet nulla facilisi morbi tempus iaculis.<br7>Viverra nam libero justo laoreet. In cursus turpis massa tincidunt dui ut ornare. Eu turpis egestas pretium aenean pharetra. Maecenas pharetra convallis posuere morbi leo urna molestie at elementum. Sit amet risus nullam eget felis eget nunc. Et molestie ac feugiat sed lectus vestibulum. Et magnis dis parturient montes nascetur ridiculus mus mauris vitae. Et tortor at risus viverra adipiscing at in tellus integer. Amet aliquam id diam maecenas. In iaculis nunc sed augue. Vitae elementum curabitur vitae nunc sed velit dignissim sodales ut. Nam libero justo laoreet sit amet cursus sit amet dictum. Consectetur purus ut faucibus pulvinar elementum. Nulla malesuada pellentesque elit eget gravida cum sociis. Volutpat sed cras ornare arcu dui vivamus arcu. Aliquam vestibulum morbi blandit cursus risus at. Nascetur ridiculus mus mauris vitae ultricies leo integer malesuada. Tellus rutrum tellus pellentesque eu tincidunt tortor aliquam nulla. Mollis nunc sed id semper risus.`,
            tags: [
                { name: 'Tag 1', link: { href: '#0' } },
                { name: 'Tag 2', link: { href: '#0' } },
                { name: 'Tag 3', link: { href: '#0' } },
                { name: 'Tag 4', link: { href: '#0' } },
                { name: 'Tag 5', link: { href: '#0' } },
            ],
        }}
        infos={[
            {
                title: 'Allgemeine Infos',
                items: [
                    {
                        icon: () => <Star />,
                        text: 'Altes Rauthaus, Münsterstraße 23, 88662 Überlingen',
                    },
                    {
                        icon: () => <Star />,
                        text: 'Auf Karte anzeigen',
                    },
                    {
                        icon: () => <Star />,
                        text: 'Eintritt frei',
                    },
                    {
                        icon: () => <Info />,
                        text: 'Lorem ipsum dolor sit amet consectetur adipiscing elit',
                    },
                ],
            },
            {
                title: 'Reservierung',
                items: [
                    {
                        icon: () => <Phone />,
                        text: '07551 / 888666',
                    },
                    {
                        icon: () => <Mail />,
                        text: '<a href="mailto:max.mustermann@gmail.com">max.mustermann@gmail.com</a>',
                    },
                    {
                        icon: () => <Star />,
                        text: 'www.topevents.com',
                    },
                    {
                        icon: () => <Info />,
                        text: 'Lorem ipsum dolor sit amet consectetur adipiscing elit',
                    },
                ],
            },
            {
                title: 'Veranstalter',
                items: [
                    {
                        icon: () => <Phone />,
                        text: '07551 / 888666',
                    },
                    {
                        icon: () => <Mail />,
                        text: '<a href="mailto:max.mustermann@gmail.com">max.mustermann@gmail.com</a>',
                    },
                    {
                        icon: () => <Star />,
                        text: 'www.topevents.com',
                    },
                    {
                        icon: () => <Info />,
                        text: 'Lorem ipsum dolor sit amet consectetur adipiscing elit',
                    },
                ],
            },
        ]}
    />
);

export const IsInverted: Story = () => (
    <EventDetail
        bgMode="inverted"
        event={{
            images: [
                {
                    small: 'https://unsplash.it/640/480?image=110',
                    medium: 'https://unsplash.it/400/300?image=110',
                    semilarge: 'https://unsplash.it/500/375?image=110',
                    large: 'https://unsplash.it/704/528?image=110',
                },
                {
                    small: 'https://unsplash.it/640/480?image=111',
                    medium: 'https://unsplash.it/400/300?image=111',
                    semilarge: 'https://unsplash.it/500/375?image=111',
                    large: 'https://unsplash.it/704/528?image=111',
                },
            ],
            title: 'Lorem ipsum dolor sit amet',
            date: new Date('December 17, 1995 03:24:00'),
            address: `Altes Rathaus | Münsterstraße 23 | 88662 Überlingen</p>`,
            duration: 21600,
            abstract:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Blandit turpis cursus in hac habitasse platea dictumst quisque. Elit ut aliquam purus sit amet. Hendrerit dolor magna eget est lorem ipsum dolor sit amet. Sollicitudin tempor id eu nisl nunc mi ipsum.',
            text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae ultricies leo integer malesuada. Eget gravida cum sociis natoque penatibus et magnis. Scelerisque viverra mauris in aliquam sem fringilla ut morbi. Eu lobortis elementum nibh tellus molestie nunc. Cursus in hac habitasse platea. Rhoncus aenean vel elit scelerisque mauris pellentesque. Eu scelerisque felis imperdiet proin fermentum leo. In arcu cursus euismod quis viverra nibh cras pulvinar mattis. Fermentum iaculis eu non diam phasellus vestibulum lorem sed risus. Imperdiet dui accumsan sit amet nulla facilisi morbi tempus iaculis.<br7>Sed ullamcorper morbi tincidunt ornare massa eget egestas purus. Ultrices mi tempus imperdiet nulla malesuada pellentesque elit eget gravida. Ut morbi tincidunt augue interdum. Pulvinar neque laoreet suspendisse interdum. Egestas maecenas pharetra convallis posuere morbi leo urna molestie at. Imperdiet sed euismod nisi porta. Iaculis at erat pellentesque adipiscing commodo. Nunc consequat interdum varius sit. Aliquet nibh praesent tristique magna sit amet purus gravida. Faucibus purus in massa tempor nec feugiat nisl pretium fusce. Maecenas accumsan lacus vel facilisis volutpat est. Imperdiet dui accumsan sit amet nulla facilisi morbi tempus iaculis.<br7>Viverra nam libero justo laoreet. In cursus turpis massa tincidunt dui ut ornare. Eu turpis egestas pretium aenean pharetra. Maecenas pharetra convallis posuere morbi leo urna molestie at elementum. Sit amet risus nullam eget felis eget nunc. Et molestie ac feugiat sed lectus vestibulum. Et magnis dis parturient montes nascetur ridiculus mus mauris vitae. Et tortor at risus viverra adipiscing at in tellus integer. Amet aliquam id diam maecenas. In iaculis nunc sed augue. Vitae elementum curabitur vitae nunc sed velit dignissim sodales ut. Nam libero justo laoreet sit amet cursus sit amet dictum. Consectetur purus ut faucibus pulvinar elementum. Nulla malesuada pellentesque elit eget gravida cum sociis. Volutpat sed cras ornare arcu dui vivamus arcu. Aliquam vestibulum morbi blandit cursus risus at. Nascetur ridiculus mus mauris vitae ultricies leo integer malesuada. Tellus rutrum tellus pellentesque eu tincidunt tortor aliquam nulla. Mollis nunc sed id semper risus.`,
            tags: [
                { name: 'Tag 1', link: { href: '#0' } },
                { name: 'Tag 2', link: { href: '#0' } },
                { name: 'Tag 3', link: { href: '#0' } },
                { name: 'Tag 4', link: { href: '#0' } },
                { name: 'Tag 5', link: { href: '#0' } },
            ],
        }}
        infos={[
            {
                title: 'Allgemeine Infos',
                items: [
                    {
                        icon: () => <Star />,
                        text: 'Altes Rauthaus, Münsterstraße 23, 88662 Überlingen',
                    },
                    {
                        icon: () => <Star />,
                        text: 'Auf Karte anzeigen',
                    },
                    {
                        icon: () => <Star />,
                        text: 'Eintritt frei',
                    },
                    {
                        icon: () => <Info />,
                        text: 'Lorem ipsum dolor sit amet consectetur adipiscing elit',
                    },
                ],
            },
            {
                title: 'Reservierung',
                items: [
                    {
                        icon: () => <Phone />,
                        text: '07551 / 888666',
                    },
                    {
                        icon: () => <Mail />,
                        text: '<a href="mailto:max.mustermann@gmail.com">max.mustermann@gmail.com</a>',
                    },
                    {
                        icon: () => <Star />,
                        text: 'www.topevents.com',
                    },
                    {
                        icon: () => <Info />,
                        text: 'Lorem ipsum dolor sit amet consectetur adipiscing elit',
                    },
                ],
            },
            {
                title: 'Veranstalter',
                items: [
                    {
                        icon: () => <Phone />,
                        text: '07551 / 888666',
                    },
                    {
                        icon: () => <Mail />,
                        text: '<a href="mailto:max.mustermann@gmail.com">max.mustermann@gmail.com</a>',
                    },
                    {
                        icon: () => <Star />,
                        text: 'www.topevents.com',
                    },
                    {
                        icon: () => <Info />,
                        text: 'Lorem ipsum dolor sit amet consectetur adipiscing elit',
                    },
                ],
            },
        ]}
    />
);

export const CustomTag: Story = () => (
    <EventDetail
        event={{
            images: [
                {
                    small: 'https://unsplash.it/640/480?image=110',
                    medium: 'https://unsplash.it/400/300?image=110',
                    semilarge: 'https://unsplash.it/500/375?image=110',
                    large: 'https://unsplash.it/704/528?image=110',
                },
                {
                    small: 'https://unsplash.it/640/480?image=111',
                    medium: 'https://unsplash.it/400/300?image=111',
                    semilarge: 'https://unsplash.it/500/375?image=111',
                    large: 'https://unsplash.it/704/528?image=111',
                },
            ],
            title: 'Lorem ipsum dolor sit amet',
            date: new Date('December 17, 1995 03:24:00'),
            address: `Altes Rathaus | Münsterstraße 23 | 88662 Überlingen</p>`,
            duration: 21600,
            abstract:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Blandit turpis cursus in hac habitasse platea dictumst quisque. Elit ut aliquam purus sit amet. Hendrerit dolor magna eget est lorem ipsum dolor sit amet. Sollicitudin tempor id eu nisl nunc mi ipsum.',
            text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae ultricies leo integer malesuada. Eget gravida cum sociis natoque penatibus et magnis. Scelerisque viverra mauris in aliquam sem fringilla ut morbi. Eu lobortis elementum nibh tellus molestie nunc. Cursus in hac habitasse platea. Rhoncus aenean vel elit scelerisque mauris pellentesque. Eu scelerisque felis imperdiet proin fermentum leo. In arcu cursus euismod quis viverra nibh cras pulvinar mattis. Fermentum iaculis eu non diam phasellus vestibulum lorem sed risus. Imperdiet dui accumsan sit amet nulla facilisi morbi tempus iaculis.<br7>Sed ullamcorper morbi tincidunt ornare massa eget egestas purus. Ultrices mi tempus imperdiet nulla malesuada pellentesque elit eget gravida. Ut morbi tincidunt augue interdum. Pulvinar neque laoreet suspendisse interdum. Egestas maecenas pharetra convallis posuere morbi leo urna molestie at. Imperdiet sed euismod nisi porta. Iaculis at erat pellentesque adipiscing commodo. Nunc consequat interdum varius sit. Aliquet nibh praesent tristique magna sit amet purus gravida. Faucibus purus in massa tempor nec feugiat nisl pretium fusce. Maecenas accumsan lacus vel facilisis volutpat est. Imperdiet dui accumsan sit amet nulla facilisi morbi tempus iaculis.<br7>Viverra nam libero justo laoreet. In cursus turpis massa tincidunt dui ut ornare. Eu turpis egestas pretium aenean pharetra. Maecenas pharetra convallis posuere morbi leo urna molestie at elementum. Sit amet risus nullam eget felis eget nunc. Et molestie ac feugiat sed lectus vestibulum. Et magnis dis parturient montes nascetur ridiculus mus mauris vitae. Et tortor at risus viverra adipiscing at in tellus integer. Amet aliquam id diam maecenas. In iaculis nunc sed augue. Vitae elementum curabitur vitae nunc sed velit dignissim sodales ut. Nam libero justo laoreet sit amet cursus sit amet dictum. Consectetur purus ut faucibus pulvinar elementum. Nulla malesuada pellentesque elit eget gravida cum sociis. Volutpat sed cras ornare arcu dui vivamus arcu. Aliquam vestibulum morbi blandit cursus risus at. Nascetur ridiculus mus mauris vitae ultricies leo integer malesuada. Tellus rutrum tellus pellentesque eu tincidunt tortor aliquam nulla. Mollis nunc sed id semper risus.`,
            tags: [
                { name: 'Tag 1', link: { href: '#0' } },
                { name: 'Tag 2', link: { href: '#0' } },
                { name: 'Tag 3', link: { href: '#0' } },
                { name: 'Tag 4', link: { href: '#0' } },
                { name: 'Tag 5', link: { href: '#0' } },
            ],
        }}
        infos={[
            {
                title: 'Allgemeine Infos',
                items: [
                    {
                        icon: () => <Star />,
                        text: 'Altes Rauthaus, Münsterstraße 23, 88662 Überlingen',
                    },
                    {
                        icon: () => <Star />,
                        text: 'Auf Karte anzeigen',
                    },
                    {
                        icon: () => <Star />,
                        text: 'Eintritt frei',
                    },
                    {
                        icon: () => <Info />,
                        text: 'Lorem ipsum dolor sit amet consectetur adipiscing elit',
                    },
                ],
            },
            {
                title: 'Reservierung',
                items: [
                    {
                        icon: () => <Phone />,
                        text: '07551 / 888666',
                    },
                    {
                        icon: () => <Mail />,
                        text: '<a href="mailto:max.mustermann@gmail.com">max.mustermann@gmail.com</a>',
                    },
                    {
                        icon: () => <Star />,
                        text: 'www.topevents.com',
                    },
                    {
                        icon: () => <Info />,
                        text: 'Lorem ipsum dolor sit amet consectetur adipiscing elit',
                    },
                ],
            },
            {
                title: 'Veranstalter',
                items: [
                    {
                        icon: () => <Phone />,
                        text: '07551 / 888666',
                    },
                    {
                        icon: () => <Mail />,
                        text: '<a href="mailto:max.mustermann@gmail.com">max.mustermann@gmail.com</a>',
                    },
                    {
                        icon: () => <Star />,
                        text: 'www.topevents.com',
                    },
                    {
                        icon: () => <Info />,
                        text: 'Lorem ipsum dolor sit amet consectetur adipiscing elit',
                    },
                ],
            },
        ]}
        customTag={({ name, isActive, link }) => (
            <a
                style={{
                    display: 'block',
                    background: isActive ? 'gray' : 'lightgray',
                }}
                {...link}
            >
                {name}
            </a>
        )}
    />
);
