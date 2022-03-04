import * as React from 'react';
import { Meta, Story } from '@storybook/react';
import TeaserWide, {
    TeaserWideComponent,
} from 'components/sections/TeaserWide';
import Button from 'components/buttons/Button';
import ButtonGhost from 'components/buttons/ButtonGhost';

export default {
    title: 'Sections/TeaserWide',
    component: TeaserWideComponent,
    parameters: {
        status: {
            type: ['preview', 'qsReady'],
        },
    },
} as Meta;

export const WithContent: Story = () => (
    <TeaserWide
        superTitle={'Lorem Ipsum Dolor'}
        title={'Lorem ipsum dolor sit amet, consetetur sadipscing elitr'}
        image={{
            small: 'https://unsplash.it/619/464',
            medium: 'https://unsplash.it/977/734',
            semilarge: 'https://unsplash.it/791/594',
            large: 'https://unsplash.it/1082/876',
            xlarge: 'https://unsplash.it/1200/971',
            ratios: {
                small: { w: 4, h: 3 },
                semilarge: { w: 1, h: 1 },
            },
        }}
        text={`
            <b>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</b>
            <br/>
            <br/>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.<br /><ul><li>Lorem Ipsum</li><li>Lorem Ipsum</li><li>Lorem Ipsum</li></ul>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
            <br/>
            <br/>
            <i>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</i>
        `}
    />
);

export const WithVideo: Story = () => (
    <TeaserWide
        superTitle={'Lorem Ipsum Dolor'}
        title={'Lorem ipsum dolor sit amet, consetetur sadipscing elitr'}
        image={{
            small: 'https://unsplash.it/619/464',
            medium: 'https://unsplash.it/977/734',
            semilarge: 'https://unsplash.it/791/594',
            large: 'https://unsplash.it/1082/876',
            xlarge: 'https://unsplash.it/1200/971',
            ratios: {
                small: { w: 4, h: 3 },
            },
        }}
        video={{
            urls: ['images/videos/alps_stockvideo.mp4'],
            aspectRatios: {
                small: 4 / 3,
            },
        }}
        text={`
            <b>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</b>
            <br/>
            <br/>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.<br /><ul><li>Lorem Ipsum</li><li>Lorem Ipsum</li><li>Lorem Ipsum</li></ul>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
            <br/>
            <br/>
            <i>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</i>
        `}
    />
);

export const WithActions: Story = () => (
    <TeaserWide
        superTitle={'Lorem Ipsum Dolor'}
        title={'Lorem ipsum dolor sit amet, consetetur sadipscing elitr'}
        image={{
            small: 'https://unsplash.it/619/464',
            medium: 'https://unsplash.it/977/734',
            semilarge: 'https://unsplash.it/791/594',
            large: 'https://unsplash.it/1082/876',
            xlarge: 'https://unsplash.it/1200/971',
        }}
        text={`
            <b>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</b>
            <br/>
            <br/>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.<br /><ul><li>Lorem Ipsum</li><li>Lorem Ipsum</li><li>Lorem Ipsum</li></ul>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
            <br/>
            <br/>
            <i>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</i>
        `}
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

export const Mirrored: Story = () => (
    <TeaserWide
        isMirrored
        superTitle={'Lorem Ipsum Dolor'}
        title={'Lorem ipsum dolor sit amet, consetetur sadipscing elitr'}
        image={{
            small: 'https://unsplash.it/619/464',
            medium: 'https://unsplash.it/977/734',
            semilarge: 'https://unsplash.it/791/594',
            large: 'https://unsplash.it/1082/876',
            xlarge: 'https://unsplash.it/1200/971',
        }}
        text={`
            <b>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</b>
            <br/>
            <br/>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.<br /><ul><li>Lorem Ipsum</li><li>Lorem Ipsum</li><li>Lorem Ipsum</li></ul>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
            <br/>
            <br/>
            <i>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</i>
        `}
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

export const Inverted: Story = () => (
    <TeaserWide
        bgMode="inverted"
        superTitle={'Lorem Ipsum Dolor'}
        title={'Lorem ipsum dolor sit amet, consetetur sadipscing elitr'}
        image={{
            small: 'https://unsplash.it/619/464',
            medium: 'https://unsplash.it/977/734',
            semilarge: 'https://unsplash.it/791/594',
            large: 'https://unsplash.it/1082/876',
            xlarge: 'https://unsplash.it/1200/971',
        }}
        text={`
            <b>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</b>
            <br/>
            <br/>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.<br /><ul><li>Lorem Ipsum</li><li>Lorem Ipsum</li><li>Lorem Ipsum</li></ul>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
            <br/>
            <br/>
            <i>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</i>
        `}
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

export const WithBackground: Story = () => (
    <TeaserWide
        bgMode="full"
        superTitle={'Lorem Ipsum Dolor'}
        title={'Lorem ipsum dolor sit amet, consetetur sadipscing elitr'}
        image={{
            small: 'https://unsplash.it/619/464',
            medium: 'https://unsplash.it/977/734',
            semilarge: 'https://unsplash.it/791/594',
            large: 'https://unsplash.it/1082/876',
            xlarge: 'https://unsplash.it/1200/971',
        }}
        text={`
            <b>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</b>
            <br/>
            <br/>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.<br /><ul><li>Lorem Ipsum</li><li>Lorem Ipsum</li><li>Lorem Ipsum</li></ul>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
            <br/>
            <br/>
            <i>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</i>
        `}
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
