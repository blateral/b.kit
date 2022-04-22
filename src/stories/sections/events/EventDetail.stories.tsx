import React from 'react';
import { Meta, Story } from '@storybook/react';
import EventDetail from 'components/sections/events/EventDetail';

export default {
    title: 'Sections / Events / EventDetail',
    component: EventDetail,
} as Meta;

export const Default: Story = () => (
    <EventDetail
        event={{
            title: 'Sitzung des Gemeinderates',
            infoText: `<p><b>Mo, 01.06.2022 | 18.00 - 23.00 Uhr</b><br />Altes Rathaus | Münsterstraße 23 | 88662 Überlingen</p>`,
            text: `<p><b>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Blandit turpis cursus in hac habitasse platea dictumst quisque. Elit ut aliquam purus sit amet. Hendrerit dolor magna eget est lorem ipsum dolor sit amet. Sollicitudin tempor id eu nisl nunc mi ipsum.</b><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae ultricies leo integer malesuada. Eget gravida cum sociis natoque penatibus et magnis. Scelerisque viverra mauris in aliquam sem fringilla ut morbi. Eu lobortis elementum nibh tellus molestie nunc. Cursus in hac habitasse platea. Rhoncus aenean vel elit scelerisque mauris pellentesque. Eu scelerisque felis imperdiet proin fermentum leo. In arcu cursus euismod quis viverra nibh cras pulvinar mattis. Fermentum iaculis eu non diam phasellus vestibulum lorem sed risus. Imperdiet dui accumsan sit amet nulla facilisi morbi tempus iaculis.<br7>Sed ullamcorper morbi tincidunt ornare massa eget egestas purus. Ultrices mi tempus imperdiet nulla malesuada pellentesque elit eget gravida. Ut morbi tincidunt augue interdum. Pulvinar neque laoreet suspendisse interdum. Egestas maecenas pharetra convallis posuere morbi leo urna molestie at. Imperdiet sed euismod nisi porta. Iaculis at erat pellentesque adipiscing commodo. Nunc consequat interdum varius sit. Aliquet nibh praesent tristique magna sit amet purus gravida. Faucibus purus in massa tempor nec feugiat nisl pretium fusce. Maecenas accumsan lacus vel facilisis volutpat est. Imperdiet dui accumsan sit amet nulla facilisi morbi tempus iaculis.<br7>Viverra nam libero justo laoreet. In cursus turpis massa tincidunt dui ut ornare. Eu turpis egestas pretium aenean pharetra. Maecenas pharetra convallis posuere morbi leo urna molestie at elementum. Sit amet risus nullam eget felis eget nunc. Et molestie ac feugiat sed lectus vestibulum. Et magnis dis parturient montes nascetur ridiculus mus mauris vitae. Et tortor at risus viverra adipiscing at in tellus integer. Amet aliquam id diam maecenas. In iaculis nunc sed augue. Vitae elementum curabitur vitae nunc sed velit dignissim sodales ut. Nam libero justo laoreet sit amet cursus sit amet dictum. Consectetur purus ut faucibus pulvinar elementum. Nulla malesuada pellentesque elit eget gravida cum sociis. Volutpat sed cras ornare arcu dui vivamus arcu. Aliquam vestibulum morbi blandit cursus risus at. Nascetur ridiculus mus mauris vitae ultricies leo integer malesuada. Tellus rutrum tellus pellentesque eu tincidunt tortor aliquam nulla. Mollis nunc sed id semper risus.</p>`,
            tags: [
                { name: 'Tag 1', link: { href: '#0' } },
                { name: 'Tag 2', link: { href: '#0' } },
                { name: 'Tag 3', link: { href: '#0' } },
                { name: 'Tag 4', link: { href: '#0' } },
                { name: 'Tag 5', link: { href: '#0' } },
            ],
            link: { href: '#0' },
        }}
    />
);
