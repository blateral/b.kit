import * as React from 'react';
import { Meta, Story } from '@storybook/react';
import PriceList, { PriceListComponent } from 'components/sections/PriceList';

export default {
    title: 'Sections / PriceList',
    component: PriceListComponent,
    parameters: {
        status: {
            type: 'preview',
        },
    },
} as Meta;

export const Default: Story = () => (
    <PriceList
        items={[
            {
                title: 'Lorem Ipsum Dolor Sit',
                text: `
                    <div>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
                        voluptua. At vero eos et accusam et justo du.
                    </div>`,
                price: '19,00',
            },
            {
                title: 'Lorem Ipsum Dolor Sit',

                text: `
                    <div>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
                        voluptua. At vero eos et accusam et justo du.
                    </div>`,
                price: '19,00',
            },
            {
                title: 'Lorem Ipsum Dolor Sit',

                text: `
                    <div>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
                        voluptua. At vero eos et accusam et justo du.
                    </div>`,
                price: '19,00',
            },
            {
                title: 'Lorem Ipsum Dolor Sit',

                text: `
                    <div>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
                        voluptua. At vero eos et accusam et justo du.
                    </div>`,
                price: '19,00',
            },
            {
                title: 'Lorem Ipsum Dolor Sit',

                text: `
                    <div>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
                        voluptua. At vero eos et accusam et justo du.
                    </div>`,
                price: '19,00',
            },
            {
                title: 'Lorem Ipsum Dolor Sit',

                text: `
                    <div>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
                        voluptua. At vero eos et accusam et justo du.
                    </div>`,
                price: '19,00',
            },
            {
                title: 'Lorem Ipsum Dolor Sit',

                text: `
                    <div>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
                        voluptua. At vero eos et accusam et justo du.
                    </div>`,
                price: '19,00',
            },
        ]}
    />
);

export const HasBackground: Story = () => (
    <PriceList
        bgMode="full"
        items={[
            {
                title: 'Lorem Ipsum Dolor Sit',

                text: `
                    <div>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
                        voluptua. At vero eos et accusam et justo du.
                    </div>`,
                price: '19,00',
            },
            {
                title: 'Lorem Ipsum Dolor Sit',

                text: `
                    <div>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
                        voluptua. At vero eos et accusam et justo du.
                    </div>`,
                price: '19,00',
            },
            {
                title: 'Lorem Ipsum Dolor Sit',

                text: `
                    <div>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
                        voluptua. At vero eos et accusam et justo du.
                    </div>`,
                price: '19,00',
            },
            {
                title: 'Lorem Ipsum Dolor Sit',

                text: `
                    <div>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
                        voluptua. At vero eos et accusam et justo du.
                    </div>`,
                price: '19,00',
            },
            {
                title: 'Lorem Ipsum Dolor Sit',

                text: `
                    <div>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
                        voluptua. At vero eos et accusam et justo du.
                    </div>`,
                price: '19,00',
            },
            {
                title: 'Lorem Ipsum Dolor Sit',

                text: `
                    <div>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
                        voluptua. At vero eos et accusam et justo du.
                    </div>`,
                price: '19,00',
            },
            {
                title: 'Lorem Ipsum Dolor Sit',

                text: `
                    <div>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
                        voluptua. At vero eos et accusam et justo du.
                    </div>`,
                price: '19,00',
            },
        ]}
    />
);

export const IsInverted: Story = () => (
    <PriceList
        bgMode="inverted"
        items={[
            {
                title: 'Lorem Ipsum Dolor Sit',

                text: `
                    <div>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
                        voluptua. At vero eos et accusam et justo du.
                    </div>`,
                price: '19,00',
            },
            {
                title: 'Lorem Ipsum Dolor Sit',

                text: `
                    <div>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
                        voluptua. At vero eos et accusam et justo du.
                    </div>`,
                price: '19,00',
            },
            {
                title: 'Lorem Ipsum Dolor Sit',

                text: `
                    <div>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
                        voluptua. At vero eos et accusam et justo du.
                    </div>`,
                price: '19,00',
            },
            {
                title: 'Lorem Ipsum Dolor Sit',

                text: `
                    <div>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
                        voluptua. At vero eos et accusam et justo du.
                    </div>`,
                price: '19,00',
            },
            {
                title: 'Lorem Ipsum Dolor Sit',

                text: `
                    <div>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
                        voluptua. At vero eos et accusam et justo du.
                    </div>`,
                price: '19,00',
            },
            {
                title: 'Lorem Ipsum Dolor Sit',

                text: `
                    <div>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
                        voluptua. At vero eos et accusam et justo du.
                    </div>`,
                price: '19,00',
            },
            {
                title: 'Lorem Ipsum Dolor Sit',

                text: `
                    <div>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
                        voluptua. At vero eos et accusam et justo du.
                    </div>`,
                price: '19,00',
            },
        ]}
    />
);
