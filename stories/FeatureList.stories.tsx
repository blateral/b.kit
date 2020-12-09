import * as React from 'react';
import { storiesOf } from '@storybook/react';
import FeatureList from '../src/components/sections/FeatureList';

const List = [
    {
        image: {
            small: 'https://unsplash.it/640/480?imag:=00',
            medium: 'https://unsplash.it/975/975?imag:=00',
            large: 'https://unsplash.it/1200/1200?image=700',
            xlarge: 'https://unsplash.it/1440/1440?image=700',
        },
        title:
            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy',
        description: 'Name/ Place/Position/ Telefon/Date',
        intro:
            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
        text:
            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. ',
    },
    {
        image: {
            small: 'https://unsplash.it/640/480?imag:=00',
            medium: 'https://unsplash.it/975/975?imag:=00',
            large: 'https://unsplash.it/1200/1200?image=700',
            xlarge: 'https://unsplash.it/1440/1440?image=700',
        },
        title:
            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy',
        description: 'Name/ Place/Position/ Telefon/Date',
        intro:
            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
        text:
            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. ',
    },
    {
        image: {
            small: 'https://unsplash.it/640/480?imag:=00',
            medium: 'https://unsplash.it/975/975?imag:=00',
            large: 'https://unsplash.it/1200/1200?image=700',
            xlarge: 'https://unsplash.it/1440/1440?image=700',
        },
        title:
            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy',
        description: 'Name/ Place/Position/ Telefon/Date',
        intro:
            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
        text:
            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. ',
    },
    {
        image: {
            small: 'https://unsplash.it/640/480?imag:=00',
            medium: 'https://unsplash.it/975/975?imag:=00',
            large: 'https://unsplash.it/1200/1200?image=700',
            xlarge: 'https://unsplash.it/1440/1440?image=700',
        },
        title:
            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy',
        description: 'Name/ Place/Position/ Telefon/Date',
        intro:
            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
        text:
            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. ',
    },
];

storiesOf('Sections / FeatureList', module)
    .add('default', () => {
        return <FeatureList featureContent={List} />;
    })
    .add('with background', () => {
        return <FeatureList featureContent={List} bgMode="full" />;
    })
    .add('with splitted background', () => {
        return <FeatureList featureContent={List} bgMode="splitted" />;
    });
