import * as React from 'react';
import { storiesOf } from '@storybook/react';

import Copy from 'components/typography/Copy';

const CopyExample = () => (
    <>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere
            doloremque, temporibus tempore error harum ea nostrum. Molestiae
            tempora odio quo cumque ratione, velit veniam sint deserunt ex
            eveniet magni perspiciatis.
        </p>
        <ul>
            <li>Lorem ipsum dolor sit.</li>
            <li>Sunt sit, hic soluta.</li>
            <li>Adipisci voluptatibus distinctio omnis.</li>
            <li>Perspiciatis sit eum laudantium.</li>
            <li>Eius molestias, aspernatur maiores.</li>
        </ul>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere
            doloremque, temporibus tempore error harum ea nostrum. Molestiae
            tempora odio quo cumque ratione, velit veniam sint deserunt ex
            eveniet magni perspiciatis.
        </p>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere
            doloremque, temporibus tempore error harum ea nostrum. Molestiae
            tempora odio quo cumque ratione, velit veniam sint deserunt ex
            eveniet magni perspiciatis.
        </p>
        <blockquote>
            „Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyame
        </blockquote>
        <ol>
            <li>Lorem ipsum dolor sit.</li>
            <li>Nemo modi quos, at.</li>
            <li>Tempora dignissimos, voluptates impedit.</li>
            <li>Accusamus veniam, voluptates tempora!</li>
            <li>Itaque nihil, ducimus laboriosam.</li>
        </ol>
        <p>
            <a href="#0">Link</a>
            <br />
            <b>Bold</b>
            <br />
            <i>Italic</i>
        </p>
    </>
);

const Separator = () => (
    <React.Fragment>
        <br />
        <br />
        <hr />
        <br />
        <br />
    </React.Fragment>
);

storiesOf('Typography / Copy', module)
    .add('default', () => {
        return (
            <Copy>
                <CopyExample />
            </Copy>
        );
    })
    .add('with different types', () => {
        return (
            <>
                <Separator />
                <Copy type="copy">
                    <CopyExample />
                </Copy>
                <Separator />
                <Copy type="copy-i">
                    <CopyExample />
                </Copy>
                <Separator />
                <Copy type="copy-b">
                    <CopyExample />
                </Copy>
            </>
        );
    })
    .add('with size', () => {
        return (
            <>
                <Separator />
                <Copy size="medium">
                    <CopyExample />
                </Copy>
                <Separator />
                <Copy size="small">
                    <CopyExample />
                </Copy>
                <Separator />
                <Copy size="big">
                    <CopyExample />
                </Copy>
            </>
        );
    })
    .add('with color', () => {
        return (
            <>
                <Copy textColor={'green'}>
                    <CopyExample />
                </Copy>
                <Copy textColor={'hotpink'}>
                    <CopyExample />
                </Copy>
            </>
        );
    })
    .add('with columns', () => {
        return (
            <Copy columns>
                <CopyExample />
                <CopyExample />
            </Copy>
        );
    });
