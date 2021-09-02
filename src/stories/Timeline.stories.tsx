import * as React from 'react';
import { Meta, Story } from '@storybook/react';
import Timeline from '../components/sections/Timeline';

export default {
    title: 'sections/Timeline',
    component: Timeline,
    decorators: [
        (Story) => (
            <div style={{ height: '200vh' }}>
                <Story />
            </div>
        ),
    ],
} as Meta;

export const Default: Story = () => (
    <Timeline
        items={[
            {
                label: '2020',
                title:
                    'Umzug in das neue Headquarters & Inbetriebnahme der Gigafactory 1',
                text:
                    'Nach Rekord-Bauzeit von nur 15 Monaten Einzug in das neue Headquarters im Südwesten Darmstadts mit über 20.000 Quadratmeter Arealfläche.',
            },
            {
                label: '2019',
                title: 'Expansion in die USA',
                text: 'Eröffnung eines Produktionsstandorts in Detroit (USA).',
            },
            {
                label: '2018',
                title: 'Erfolgreicher Börsengang an der Frankfurter Börse',
                text: 'IPO mit einem Erlös von über 100 Mio. Euro.',
            },
            {
                label: '2017',
                title: 'Eröffnung von zwei neuen Produktionsstandorten',
                text:
                    'Erweiterung der Produktionskapazitäten durch die Eröffnung von zwei weiteren Produktionsstandorten im südhessischen Langen und Darmstadt.',
            },
            {
                label: '2015 – 2016',
                title: 'Erste Serienaufträge für die AKASOL',
                text:
                    'Serienaufträge von führenden europäischen und skandinavischen Busherstellern.',
            },
            {
                label: '2008',
                title: 'Gründung der AKASOL GmbH',
                text: 'Einstieg der Schulz Group bei der AKASOL.',
            },
            {
                label: '1990',
                title: 'Gründung der AKASOL e.V.',
                text:
                    'Gegründet von Elektrotechnikstudenten der TU Darmstadt. Bekannte Entwicklungsfahrzeuge: Pinky, Chilli, Oscar.',
            },
        ]}
    />
);
