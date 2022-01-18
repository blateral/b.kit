import * as React from 'react';
import { Meta, Story } from '@storybook/react';

import Section from 'components/base/Section';

const ExampleContent = () => (
    <div
        style={{
            position: 'relative',
            textAlign: 'center',
        }}
    >
        Content
    </div>
);

export default {
    title: 'Base/Section',
    component: Section,
    parameters: {
        status: {
            type: 'stable',
        },
    },
} as Meta;

export const Default: Story = () => (
    <>
        <Section>
            <ExampleContent />
        </Section>
        <Section>
            <ExampleContent />
        </Section>
    </>
);

export const WithBgColor: Story = () => (
    <>
        <Section bgMode="full">
            <ExampleContent />
        </Section>
        <Section bgMode="full">
            <ExampleContent />
        </Section>
        <Section bgMode="full" bgColor="aquamarine">
            <ExampleContent />
        </Section>
        <Section bgMode="full" bgColor="blueviolet">
            <ExampleContent />
        </Section>
        <Section bgMode="full" bgColor="aquamarine">
            <ExampleContent />
        </Section>
        <Section bgMode="full" bgColor="blueviolet">
            <ExampleContent />
        </Section>
        <Section bgMode="full" bgColor="aquamarine">
            <ExampleContent />
        </Section>
    </>
);

export const WithDifferentBgModes: Story = () => (
    <>
        <Section bgColor="aquamarine" bgMode="full">
            <ExampleContent />
        </Section>
        <Section bgColor="blueviolet" bgMode="larger-left">
            <ExampleContent />
        </Section>
        <Section bgColor="aquamarine" bgMode="larger-right">
            <ExampleContent />
        </Section>
        <Section bgColor="blueviolet" bgMode="full">
            <ExampleContent />
        </Section>
    </>
);

export const WithSeperation: Story = () => (
    <>
        <Section addSeperation>
            <ExampleContent />
        </Section>
        <Section addSeperation>
            <ExampleContent />
        </Section>
        <Section addSeperation bgColor="blueviolet" bgMode="full">
            <ExampleContent />
        </Section>
        <Section addSeperation bgColor="blueviolet" bgMode="full">
            <ExampleContent />
        </Section>
        <Section addSeperation bgColor="blueviolet" bgMode="larger-right">
            <ExampleContent />
        </Section>
        <Section addSeperation bgColor="blueviolet" bgMode="larger-right">
            <ExampleContent />
        </Section>
        <Section addSeperation bgColor="blueviolet" bgMode="larger-left">
            <ExampleContent />
        </Section>
        <Section addSeperation bgColor="blueviolet" bgMode="larger-left">
            <ExampleContent />
        </Section>
        <Section addSeperation>
            <ExampleContent />
        </Section>
    </>
);

export const WithStackable: Story = () => (
    <>
        <Section addSeperation>
            <ExampleContent />
        </Section>
        <Section addSeperation isStackable>
            <ExampleContent />
        </Section>
        <Section addSeperation bgColor="blueviolet" bgMode="full">
            <ExampleContent />
        </Section>
        <Section addSeperation isStackable bgColor="blueviolet" bgMode="full">
            <ExampleContent />
        </Section>
        <Section isStackable bgColor="blueviolet" bgMode="full">
            <ExampleContent />
        </Section>
    </>
);
