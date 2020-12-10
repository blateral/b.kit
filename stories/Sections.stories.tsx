import * as React from 'react';
import { Meta, Story } from '@storybook/react';

import Section from '../src/components/base/Section';

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
        <Section>
            <ExampleContent />
        </Section>
        <Section>
            <ExampleContent />
        </Section>
        <Section bgColor="hotpink">
            <ExampleContent />
        </Section>
        <Section bgColor="hotpink">
            <ExampleContent />
        </Section>
        <Section bgColor="hotpink">
            <ExampleContent />
        </Section>
        <Section bgColor="green">
            <ExampleContent />
        </Section>
        <Section bgColor="blue">
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
        <Section bgColor="hotpink" addSeperation>
            <ExampleContent />
        </Section>
        <Section bgColor="hotpink" addSeperation>
            <ExampleContent />
        </Section>
        <Section bgColor="hotpink" addSeperation>
            <ExampleContent />
        </Section>
        <Section bgColor="green" addSeperation>
            <ExampleContent />
        </Section>
        <Section bgColor="blue" addSeperation>
            <ExampleContent />
        </Section>
    </>
);

export const SplittedBackground: Story = () => (
    <>
        <Section addSeperation bgColor="hotpink" bgMode="half-left">
            <ExampleContent />
        </Section>
        <Section addSeperation bgColor="green" bgMode="half-right">
            <ExampleContent />
        </Section>
        <Section addSeperation bgColor="red" bgMode="larger-left">
            <ExampleContent />
        </Section>
        <Section addSeperation bgColor="blue" bgMode="larger-right">
            <ExampleContent />
        </Section>
    </>
);
