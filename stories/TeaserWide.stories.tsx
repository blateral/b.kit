import * as React from 'react';
import { storiesOf } from '@storybook/react';
import TeaserWide from 'components/sections/TeaserWide';
import Button from 'components/buttons/Button';

storiesOf('Sections / TeaserWide', module)
    .add('with content', () => (
        <TeaserWide
            superTitle={'Lorem Ipsum Dolor'}
            title={'Lorem ipsum dolor sit amet, consetetur sadipscing elitr'}
            image={{
                small: 'https://unsplash.it/587/350',
                medium: 'https://unsplash.it/852/508',
                large: 'https://unsplash.it/900/675',
                xlarge: 'https://unsplash.it/1192/894',
            }}
            intro="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."
            text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."
        />
    ))
    .add('with sub text', () => (
        <TeaserWide
            superTitle={'Lorem Ipsum Dolor'}
            title={'Lorem ipsum dolor sit amet, consetetur sadipscing elitr'}
            image={{
                small: 'https://unsplash.it/587/350',
                medium: 'https://unsplash.it/852/508',
                large: 'https://unsplash.it/900/675',
                xlarge: 'https://unsplash.it/1192/894',
            }}
            intro="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."
            text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."
            subText="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."
        />
    ))
    .add('with html in text', () => (
        <TeaserWide
            superTitle={'Lorem Ipsum Dolor'}
            title={'Lorem ipsum dolor sit amet, consetetur sadipscing elitr'}
            image={{
                small: 'https://unsplash.it/587/350',
                medium: 'https://unsplash.it/852/508',
                large: 'https://unsplash.it/900/675',
                xlarge: 'https://unsplash.it/1192/894',
            }}
            intro="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."
            text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.<br /><ul><li>Lorem Ipsum</li><li>Lorem Ipsum</li><li>Lorem Ipsum</li></ul>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."
            subText="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."
        />
    ))
    .add('with action', () => (
        <TeaserWide
            superTitle={'Lorem Ipsum Dolor'}
            title={'Lorem ipsum dolor sit amet, consetetur sadipscing elitr'}
            image={{
                small: 'https://unsplash.it/587/350',
                medium: 'https://unsplash.it/852/508',
                large: 'https://unsplash.it/900/675',
                xlarge: 'https://unsplash.it/1192/894',
            }}
            intro="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."
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
        <TeaserWide
            isMirrored
            superTitle={'Lorem Ipsum Dolor'}
            title={'Lorem ipsum dolor sit amet, consetetur sadipscing elitr'}
            image={{
                small: 'https://unsplash.it/587/350',
                medium: 'https://unsplash.it/852/508',
                large: 'https://unsplash.it/900/675',
                xlarge: 'https://unsplash.it/1192/894',
            }}
            intro="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."
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
        <TeaserWide
            isInverted
            superTitle={'Lorem Ipsum Dolor'}
            title={'Lorem ipsum dolor sit amet, consetetur sadipscing elitr'}
            image={{
                small: 'https://unsplash.it/587/350',
                medium: 'https://unsplash.it/852/508',
                large: 'https://unsplash.it/900/675',
                xlarge: 'https://unsplash.it/1192/894',
            }}
            intro="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."
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
        <TeaserWide
            hasBack
            superTitle={'Lorem Ipsum Dolor'}
            title={'Lorem ipsum dolor sit amet, consetetur sadipscing elitr'}
            image={{
                small: 'https://unsplash.it/587/350',
                medium: 'https://unsplash.it/852/508',
                large: 'https://unsplash.it/900/675',
                xlarge: 'https://unsplash.it/1192/894',
            }}
            intro="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."
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
