import * as React from 'react';
import { storiesOf } from '@storybook/react';
import Title from '../src/components/blocks/Title';

storiesOf('Blocks / Title', module)
    .add('default', () => (
        <Title
            title="Ausstattung der Zimmer für Dauer- und Kurzzeitpflege"
            titleAs="h2"
        />
    ))
    .add('with supertitle', () => (
        <Title
            title="Ausstattung der Zimmer für Dauer- und Kurzzeitpflege"
            titleAs="h2"
            superTitle="Haus St. Franziskus"
        />
    ))
    .add('centered', () => (
        <Title
            isCentered
            title="Ausstattung der Zimmer für Dauer- und Kurzzeitpflege"
            titleAs="h2"
            superTitle="Haus St. Franziskus"
        />
    ))
    .add('inverted', () => (
        <div
            style={{ height: '500px', width: '100%', backgroundColor: 'black' }}
        >
            <Title
                isInverted
                isCentered
                title="Ausstattung der Zimmer für Dauer- und Kurzzeitpflege"
                titleAs="h2"
                superTitle="Haus St. Franziskus"
            />
        </div>
    ));
