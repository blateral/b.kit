import * as React from 'react';
import { storiesOf } from '@storybook/react';
import Teaser from 'components/sections/Teaser';
import Button from 'components/buttons/Button';

storiesOf('Sections / Teaser', module)
    .add('with content', () => (
        <Teaser
            superTitle={'Lorem Ipsum Dolor'}
            title={'Lorem ipsum dolor sit amet, consetetur sadipscing elitr'}
            image={{
                small: 'https://unsplash.it/355/266',
                medium: 'https://unsplash.it/610/457',
                large: 'https://unsplash.it/610/610',
                xlarge: 'https://unsplash.it/710/710',
            }}
            intro="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."
            text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."
        />
    ))
    .add('with sub text', () => (
        <Teaser
            superTitle={'Lorem Ipsum Dolor'}
            title={'Lorem ipsum dolor sit amet, consetetur sadipscing elitr'}
            image={{
                small: 'https://unsplash.it/310/310',
                medium: 'https://unsplash.it/410/410',
                large: 'https://unsplash.it/610/610',
                xlarge: 'https://unsplash.it/710/710',
            }}
            intro="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."
            text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."
            subText="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."
        />
    ))
    .add('with html in text', () => (
        <Teaser
            superTitle={'Lorem Ipsum Dolor'}
            title={'Lorem ipsum dolor sit amet, consetetur sadipscing elitr'}
            image={{
                small: 'https://unsplash.it/310/310',
                medium: 'https://unsplash.it/410/410',
                large: 'https://unsplash.it/610/610',
                xlarge: 'https://unsplash.it/710/710',
            }}
            intro="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."
            text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.<br /><ul><li>Lorem Ipsum</li><li>Lorem Ipsum</li><li>Lorem Ipsum</li></ul>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."
            subText="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."
        />
    ))
    .add('with image description', () => (
        <Teaser
            superTitle={'Lorem Ipsum Dolor'}
            title={'Lorem ipsum dolor sit amet, consetetur sadipscing elitr'}
            image={{
                small: 'https://unsplash.it/310/310',
                medium: 'https://unsplash.it/410/410',
                large: 'https://unsplash.it/610/610',
                xlarge: 'https://unsplash.it/710/710',
                description:
                    'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. ',
            }}
            intro="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."
            text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.<br /><ul><li>Lorem Ipsum</li><li>Lorem Ipsum</li><li>Lorem Ipsum</li></ul>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."
            subText="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."
        />
    ))
    .add('with action', () => (
        <Teaser
            superTitle={'Lorem Ipsum Dolor'}
            title={'Lorem ipsum dolor sit amet, consetetur sadipscing elitr'}
            image={{
                small: 'https://unsplash.it/587/350',
                medium: 'https://unsplash.it/852/508',
                large: 'https://unsplash.it/1200/911',
                xlarge: 'https://unsplash.it/1400/1063',
                description:
                    'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. ',
            }}
            intro="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. "
            text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.<br /><ul><li>Lorem Ipsum</li><li>Lorem Ipsum</li><li>Lorem Ipsum</li></ul>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."
            subText="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."
            primaryAction={(isInverted) => (
                <Button.View isInverted={isInverted}>
                    <Button.Label>Primary</Button.Label>
                </Button.View>
            )}
            secondaryAction={(isInverted) => (
                <Button.View type="ghost" isInverted={isInverted}>
                    <Button.Label>Secondary</Button.Label>
                </Button.View>
            )}
        />
    ))
    .add('mirrored', () => (
        <Teaser
            isMirrored
            superTitle={'Lorem Ipsum Dolor'}
            title={'Lorem ipsum dolor sit amet, consetetur sadipscing elitr'}
            image={{
                small: 'https://unsplash.it/587/350',
                medium: 'https://unsplash.it/852/508',
                large: 'https://unsplash.it/1200/911',
                xlarge: 'https://unsplash.it/1400/1063',
                description:
                    'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. ',
            }}
            intro="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. "
            text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.<br /><ul><li>Lorem Ipsum</li><li>Lorem Ipsum</li><li>Lorem Ipsum</li></ul>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."
            subText="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."
            primaryAction={(isInverted) => (
                <Button.View isInverted={isInverted}>
                    <Button.Label>Primary</Button.Label>
                </Button.View>
            )}
            secondaryAction={(isInverted) => (
                <Button.View type="ghost" isInverted={isInverted}>
                    <Button.Label>Secondary</Button.Label>
                </Button.View>
            )}
        />
    ))
    .add('inverted', () => (
        <Teaser
            isInverted
            superTitle={'Lorem Ipsum Dolor'}
            title={'Lorem ipsum dolor sit amet, consetetur sadipscing elitr'}
            image={{
                small: 'https://unsplash.it/587/350',
                medium: 'https://unsplash.it/852/508',
                large: 'https://unsplash.it/1200/911',
                xlarge: 'https://unsplash.it/1400/1063',
                description:
                    'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. ',
            }}
            intro="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. "
            text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.<br /><ul><li>Lorem Ipsum</li><li>Lorem Ipsum</li><li>Lorem Ipsum</li></ul>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."
            subText="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."
            primaryAction={(isInverted) => (
                <Button.View isInverted={isInverted}>
                    <Button.Label>Primary</Button.Label>
                </Button.View>
            )}
            secondaryAction={(isInverted) => (
                <Button.View type="ghost" isInverted={isInverted}>
                    <Button.Label>Secondary</Button.Label>
                </Button.View>
            )}
        />
    ))
    .add('with background', () => (
        <Teaser
            bgMode="full"
            superTitle={'Lorem Ipsum Dolor'}
            title={'Lorem ipsum dolor sit amet, consetetur sadipscing elitr'}
            image={{
                small: 'https://unsplash.it/587/350',
                medium: 'https://unsplash.it/852/508',
                large: 'https://unsplash.it/1200/911',
                xlarge: 'https://unsplash.it/1400/1063',
                description:
                    'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. ',
            }}
            intro="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. "
            text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.<br /><ul><li>Lorem Ipsum</li><li>Lorem Ipsum</li><li>Lorem Ipsum</li></ul>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."
            subText="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."
            primaryAction={(isInverted) => (
                <Button.View isInverted={isInverted}>
                    <Button.Label>Primary</Button.Label>
                </Button.View>
            )}
            secondaryAction={(isInverted) => (
                <Button.View type="ghost" isInverted={isInverted}>
                    <Button.Label>Secondary</Button.Label>
                </Button.View>
            )}
        />
    ))
    .add('with splitted background', () => (
        <Teaser
            bgMode="splitted"
            superTitle={'Lorem Ipsum Dolor'}
            title={'Lorem ipsum dolor sit amet, consetetur sadipscing elitr'}
            image={{
                small: 'https://unsplash.it/587/350',
                medium: 'https://unsplash.it/852/508',
                large: 'https://unsplash.it/1200/911',
                xlarge: 'https://unsplash.it/1400/1063',
                description:
                    'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. ',
            }}
            intro="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. "
            text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.<br /><ul><li>Lorem Ipsum</li><li>Lorem Ipsum</li><li>Lorem Ipsum</li></ul>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."
            subText="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."
            primaryAction={(isInverted) => (
                <Button.View isInverted={isInverted}>
                    <Button.Label>Primary</Button.Label>
                </Button.View>
            )}
            secondaryAction={(isInverted) => (
                <Button.View type="ghost" isInverted={isInverted}>
                    <Button.Label>Secondary</Button.Label>
                </Button.View>
            )}
        />
    ))
    .add('with mirrored and splitted background', () => (
        <Teaser
            isMirrored
            bgMode="splitted"
            superTitle={'Lorem Ipsum Dolor'}
            title={'Lorem ipsum dolor sit amet, consetetur sadipscing elitr'}
            image={{
                small: 'https://unsplash.it/587/350',
                medium: 'https://unsplash.it/852/508',
                large: 'https://unsplash.it/1200/911',
                xlarge: 'https://unsplash.it/1400/1063',
                description:
                    'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. ',
            }}
            intro="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. "
            text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.<br /><ul><li>Lorem Ipsum</li><li>Lorem Ipsum</li><li>Lorem Ipsum</li></ul>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."
            subText="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."
            primaryAction={(isInverted) => (
                <Button.View isInverted={isInverted}>
                    <Button.Label>Primary</Button.Label>
                </Button.View>
            )}
            secondaryAction={(isInverted) => (
                <Button.View type="ghost" isInverted={isInverted}>
                    <Button.Label>Secondary</Button.Label>
                </Button.View>
            )}
        />
    ))
    .add('with 4:3 image', () => (
        <Teaser
            bgMode="splitted"
            superTitle={'Lorem Ipsum Dolor'}
            title={'Lorem ipsum dolor sit amet, consetetur sadipscing elitr'}
            image={{
                small: 'https://unsplash.it/587/350',
                medium: 'https://unsplash.it/852/508',
                large: 'https://unsplash.it/1200/600',
                xlarge: 'https://unsplash.it/1400/1050',
                description:
                    'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. ',
            }}
            intro="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. "
            text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
            primaryAction={(isInverted) => (
                <Button.View isInverted={isInverted}>
                    <Button.Label>Primary</Button.Label>
                </Button.View>
            )}
            secondaryAction={(isInverted) => (
                <Button.View type="ghost" isInverted={isInverted}>
                    <Button.Label>Secondary</Button.Label>
                </Button.View>
            )}
        />
    ))
    .add('with 3:4 image', () => (
        <Teaser
            bgMode="splitted"
            superTitle={'Lorem Ipsum Dolor'}
            title={'Lorem ipsum dolor sit amet, consetetur sadipscing elitr'}
            image={{
                small: 'https://unsplash.it/587/350',
                medium: 'https://unsplash.it/852/508',
                large: 'https://unsplash.it/1200/1600',
                xlarge: 'https://unsplash.it/1400/1866',
                description:
                    'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. ',
            }}
            intro="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. "
            text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.<br /><ul><li>Lorem Ipsum</li><li>Lorem Ipsum</li><li>Lorem Ipsum</li></ul>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."
            subText="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."
            primaryAction={(isInverted) => (
                <Button.View isInverted={isInverted}>
                    <Button.Label>Primary</Button.Label>
                </Button.View>
            )}
            secondaryAction={(isInverted) => (
                <Button.View type="ghost" isInverted={isInverted}>
                    <Button.Label>Secondary</Button.Label>
                </Button.View>
            )}
        />
    ));
