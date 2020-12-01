import * as React from 'react';
import { storiesOf } from '@storybook/react';

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

storiesOf('Base / Grid', module)
    .add('default', () => {
        return (
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
    })
    .add('span with media queries', () => {
        return (
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
    })
    .add('move', () => {
        return (
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
    })
    .add('with row vertical align', () => {
        return (
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
    })
    .add('with different col vertical aligns', () => {
        return (
            <Grid.Row>
                <Grid.Col span={7 / 28} valign="center">
                    <ExampleCol>vertical align center</ExampleCol>
                </Grid.Col>
                <Grid.Col span={7 / 28} valign="top">
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
    });
