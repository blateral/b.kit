import * as React from 'react';
import { Meta, Story } from '@storybook/react';

import Grid from 'components/base/Grid';

const ExampleCol = (props: any) => {
    return (
        <div
            style={{
                backgroundColor: 'lightblue',
                padding: 20,
            }}
        >
            {props.children}
        </div>
    );
};

const ExampleCol2 = (props: any) => {
    return (
        <div
            style={{
                backgroundColor: 'lightblue',
                padding: 20,
                height: '300px',
            }}
        >
            {props.children}
        </div>
    );
};

export default {
    title: 'Base/Grid',
    component: Grid.Row,
    parameters: {
        status: {
            type: 'preview',
        },
    },
} as Meta;

export const Default: Story = () => (
    <Grid.Row>
        <Grid.Col>
            <ExampleCol>100 %</ExampleCol>
        </Grid.Col>
        <Grid.Col span={14 / 28}>
            <ExampleCol>50 %</ExampleCol>
        </Grid.Col>
        <Grid.Col span={14 / 28}>
            <ExampleCol>50 %</ExampleCol>
        </Grid.Col>
        <Grid.Col span={4 / 12}>
            <ExampleCol>33 %</ExampleCol>
        </Grid.Col>
        <Grid.Col span={4 / 12}>
            <ExampleCol>33 %</ExampleCol>
        </Grid.Col>
        <Grid.Col span={4 / 12}>
            <ExampleCol>33 %</ExampleCol>
        </Grid.Col>
    </Grid.Row>
);

export const SpanWithMediaQueries: Story = () => (
    <Grid.Row>
        <Grid.Col
            span={3 / 4}
            medium={{
                span: 1 / 2,
            }}
            semilarge={{ span: 2 / 3 }}
            large={{
                span: 1 / 3,
            }}
            xlarge={{
                span: 1 / 4,
            }}
        >
            <ExampleCol>Content A</ExampleCol>
        </Grid.Col>
        <Grid.Col
            span={2 / 4}
            medium={{
                span: 1 / 2,
            }}
            large={{
                span: 1 / 3,
            }}
            xlarge={{
                span: 1 / 4,
            }}
        >
            <ExampleCol>Content B</ExampleCol>
        </Grid.Col>
        <Grid.Col
            medium={{
                span: 1 / 2,
            }}
            large={{
                span: 1 / 3,
            }}
            xlarge={{
                span: 1 / 4,
            }}
        >
            <ExampleCol>Content C</ExampleCol>
        </Grid.Col>
        <Grid.Col
            medium={{
                span: 1 / 2,
            }}
            large={{
                span: 1,
            }}
            xlarge={{
                span: 1 / 4,
            }}
        >
            <ExampleCol>Content D</ExampleCol>
        </Grid.Col>
    </Grid.Row>
);

export const Move: Story = () => (
    <Grid.Row>
        <Grid.Col
            medium={{
                span: 0.5,
                move: 1 / 2,
            }}
            large={{
                span: 2 / 3,
                move: 1 / 3,
            }}
        >
            <ExampleCol>Main Content</ExampleCol>
        </Grid.Col>
        <Grid.Col
            medium={{
                span: 0.5,
                move: -1 / 2,
            }}
            large={{
                span: 1 / 3,
                move: -2 / 3,
            }}
        >
            <ExampleCol>Aside Content</ExampleCol>
        </Grid.Col>
    </Grid.Row>
);

export const GutterWithMediaQueries: Story = () => (
    <Grid.Row gutter={15} semilarge={{ gutter: 32 }}>
        <Grid.Col span={1 / 2} semilarge={{ span: 1 / 3 }}>
            <ExampleCol>Content A</ExampleCol>
        </Grid.Col>
        <Grid.Col span={1 / 2} semilarge={{ span: 1 / 3 }}>
            <ExampleCol>Content B</ExampleCol>
        </Grid.Col>
        <Grid.Col span={1 / 2} semilarge={{ span: 1 / 3 }}>
            <ExampleCol>Content C</ExampleCol>
        </Grid.Col>
        <Grid.Col span={1 / 2} semilarge={{ span: 1 / 3 }}>
            <ExampleCol>Content D</ExampleCol>
        </Grid.Col>
        <Grid.Col span={1 / 2} semilarge={{ span: 1 / 3 }}>
            <ExampleCol>Content E</ExampleCol>
        </Grid.Col>
        <Grid.Col span={1 / 2} semilarge={{ span: 1 / 3 }}>
            <ExampleCol>Content F</ExampleCol>
        </Grid.Col>
    </Grid.Row>
);

export const VerticalAlignA: Story = () => (
    <Grid.Row valign="center">
        <Grid.Col span={7 / 28}>
            <ExampleCol>vertical align center</ExampleCol>
        </Grid.Col>
        <Grid.Col span={7 / 28}>
            <ExampleCol>vertical align center</ExampleCol>
        </Grid.Col>
        <Grid.Col span={7 / 28}>
            <ExampleCol>vertical align center</ExampleCol>
        </Grid.Col>
        <Grid.Col span={7 / 28}>
            <ExampleCol2></ExampleCol2>
        </Grid.Col>
    </Grid.Row>
);

VerticalAlignA.storyName = 'With row vertical align';

export const VerticalAlignB: Story = () => (
    <Grid.Row>
        <Grid.Col span={7 / 28} valign="center">
            <ExampleCol>vertical align center</ExampleCol>
        </Grid.Col>
        <Grid.Col span={7 / 28} valign="top" large={{ valign: 'bottom' }}>
            <ExampleCol>vertical align top</ExampleCol>
        </Grid.Col>
        <Grid.Col span={7 / 28} valign="bottom">
            <ExampleCol>vertical align bottom</ExampleCol>
        </Grid.Col>
        <Grid.Col span={7 / 28}>
            <ExampleCol2></ExampleCol2>
        </Grid.Col>
    </Grid.Row>
);

VerticalAlignB.storyName = 'With different col vertical aligns';

export const DifferentTextAligns: Story = () => (
    <Grid.Row>
        <Grid.Col textAlign="center" span={1 / 2} semilarge={{ span: 1 / 3 }}>
            <ExampleCol>Content A</ExampleCol>
        </Grid.Col>
        <Grid.Col
            textAlign="left"
            span={1 / 2}
            medium={{ textAlign: 'center' }}
            semilarge={{ span: 1 / 3 }}
        >
            <ExampleCol>Content B</ExampleCol>
        </Grid.Col>
        <Grid.Col span={1 / 2} semilarge={{ span: 1 / 3 }}>
            <ExampleCol>Content C</ExampleCol>
        </Grid.Col>
        <Grid.Col
            textAlign="center"
            span={1 / 2}
            medium={{ textAlign: 'right' }}
            semilarge={{ span: 1 / 3 }}
        >
            <ExampleCol>Content D</ExampleCol>
        </Grid.Col>
        <Grid.Col
            textAlign="center"
            span={1 / 2}
            medium={{ textAlign: 'left' }}
            semilarge={{ span: 1 / 3 }}
        >
            <ExampleCol>Content E</ExampleCol>
        </Grid.Col>
        <Grid.Col
            textAlign="center"
            span={1 / 2}
            medium={{ textAlign: 'left' }}
            semilarge={{ span: 1 / 3 }}
        >
            <ExampleCol>Content F</ExampleCol>
        </Grid.Col>
    </Grid.Row>
);
