import * as React from 'react';
import { Meta, Story } from '@storybook/react';

import Section from 'components/base/Section';

export const ExampleContent: React.FC<{
    isInverted?: boolean;
    textAlign?: 'left' | 'center' | 'right';
    children?: React.ReactNode;
}> = ({ isInverted, textAlign, children }) => (
    <div
        style={{
            position: 'relative',
            textAlign: textAlign || 'center',
            color: isInverted ? 'white' : 'black',
            padding: '30px',
        }}
    >
        {children || 'section'}
    </div>
);

export default {
    title: 'Base/Section',
    component: Section,
    parameters: {
        status: {
            type: 'preview',
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
            <ExampleContent isInverted />
        </Section>
        <Section bgMode="full" bgColor="blueviolet">
            <ExampleContent isInverted />
        </Section>
        <Section bgMode="full" bgColor="aquamarine">
            <ExampleContent isInverted />
        </Section>
        <Section bgMode="full" bgColor="blueviolet">
            <ExampleContent isInverted />
        </Section>
        <Section bgMode="full" bgColor="aquamarine">
            <ExampleContent isInverted />
        </Section>
    </>
);

export const WithDifferentBgModes: Story = () => (
    <>
        <Section bgColor="aquamarine" bgMode="full">
            <ExampleContent isInverted />
        </Section>
        <Section bgColor="blueviolet" bgMode="larger-left">
            <ExampleContent isInverted />
        </Section>
        <Section bgColor="aquamarine" bgMode="larger-right">
            <ExampleContent isInverted />
        </Section>
        <Section bgColor="blueviolet" bgMode="full">
            <ExampleContent isInverted />
        </Section>
    </>
);

export const WithSeperation: Story = () => (
    <>
        <Section addSeperation>
            <ExampleContent>
                <b>Section A</b>
                <br />
                <b>bgMode:</b> full, <b>bgColor:</b> transparent
            </ExampleContent>
        </Section>
        <Section addSeperation>
            <ExampleContent>
                <b>Section B</b>
                <br />
                <b>bgMode:</b> full, <b>bgColor:</b> transparent
            </ExampleContent>
        </Section>
        <Section addSeperation bgColor="blueviolet" bgMode="full">
            <ExampleContent isInverted>
                <b>Section C</b>
                <br />
                <b>bgMode:</b> full, <b>bgColor:</b> blueviolet
            </ExampleContent>
        </Section>
        <Section addSeperation bgColor="blueviolet" bgMode="full">
            <ExampleContent isInverted>
                <b>Section D</b>
                <br />
                <b>bgMode:</b> full, <b>bgColor:</b> blueviolet
            </ExampleContent>
        </Section>
        <Section addSeperation>
            <ExampleContent>
                <b>Section E</b>
                <br />
                <b>bgMode:</b> full, <b>bgColor:</b> transparent
            </ExampleContent>
        </Section>
        <Section addSeperation bgColor="blueviolet" bgMode="larger-right">
            <ExampleContent isInverted textAlign="right">
                <b>Section F</b>
                <br />
                <b>bgMode:</b> larger-right, <b>bgColor:</b> blueviolet
            </ExampleContent>
        </Section>
        <Section addSeperation bgColor="blueviolet" bgMode="larger-right">
            <ExampleContent isInverted textAlign="right">
                <b>Section G</b>
                <br />
                <b>bgMode:</b> larger-right, <b>bgColor:</b> blueviolet
            </ExampleContent>
        </Section>
        <Section addSeperation bgColor="aquamarine" bgMode="larger-right">
            <ExampleContent isInverted textAlign="right">
                <b>Section H</b>
                <br />
                <b>bgMode:</b> larger-right, <b>bgColor:</b> darkturquoise
            </ExampleContent>
        </Section>
        <Section addSeperation bgColor="blueviolet" bgMode="larger-left">
            <ExampleContent isInverted textAlign="left">
                <b>Section I</b>
                <br />
                <b>bgMode:</b> larger-left, <b>bgColor:</b> blueviolet
            </ExampleContent>
        </Section>
        <Section addSeperation bgColor="blueviolet" bgMode="larger-left">
            <ExampleContent isInverted textAlign="left">
                <b>Section J</b>
                <br />
                <b>bgMode:</b> larger-left, <b>bgColor:</b> blueviolet
            </ExampleContent>
        </Section>
        <Section addSeperation>
            <ExampleContent>
                <b>Section K</b>
                <br />
                <b>bgMode:</b> full, <b>bgColor:</b> transparent
            </ExampleContent>
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
            <ExampleContent isInverted />
        </Section>
        <Section addSeperation isStackable bgColor="blueviolet" bgMode="full">
            <ExampleContent isInverted />
        </Section>
        <Section isStackable bgColor="blueviolet" bgMode="full">
            <ExampleContent isInverted />
        </Section>
    </>
);
