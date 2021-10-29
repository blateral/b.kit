import * as React from 'react';
import { Meta, Story } from '@storybook/react';
import PriceList from '../../components/sections/PriceList';

export default {
    title: 'Sections / PriceList',
    component: PriceList,
} as Meta;

export const Default: Story = () => (
    <PriceList
        items={[
            {
                text: `<b>Bruschetta Tomate & Parmesan</b>
                    <br />
                    <div>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
                        voluptua. At vero eos et accusam et justo du.
                    </div>`,
                price: '19,00',
            },
            {
                text: `<b>Bruschetta Tomate & Parmesan</b>
                    <br />
                    <div>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
                        voluptua. At vero eos et accusam et justo du.
                    </div>`,
                price: '19,00',
            },
            {
                text: `<b>Bruschetta Tomate & Parmesan</b>
                    <br />
                    <div>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
                        voluptua. At vero eos et accusam et justo du.
                    </div>`,
                price: '19,00',
            },
            {
                text: `<b>Bruschetta Tomate & Parmesan</b>
                    <br />
                    <div>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
                        voluptua. At vero eos et accusam et justo du.
                    </div>`,
                price: '19,00',
            },
            {
                text: `<b>Bruschetta Tomate & Parmesan</b>
                    <br />
                    <div>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
                        voluptua. At vero eos et accusam et justo du.
                    </div>`,
                price: '19,00',
            },
            {
                text: `<b>Bruschetta Tomate & Parmesan</b>
                    <br />
                    <div>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
                        voluptua. At vero eos et accusam et justo du.
                    </div>`,
                price: '19,00',
            },
            {
                text: `<b>Bruschetta Tomate & Parmesan</b>
                    <br />
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
                text: `<b>Bruschetta Tomate & Parmesan</b>
                    <br />
                    <div>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
                        voluptua. At vero eos et accusam et justo du.
                    </div>`,
                price: '19,00',
            },
            {
                text: `<b>Bruschetta Tomate & Parmesan</b>
                    <br />
                    <div>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
                        voluptua. At vero eos et accusam et justo du.
                    </div>`,
                price: '19,00',
            },
            {
                text: `<b>Bruschetta Tomate & Parmesan</b>
                    <br />
                    <div>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
                        voluptua. At vero eos et accusam et justo du.
                    </div>`,
                price: '19,00',
            },
            {
                text: `<b>Bruschetta Tomate & Parmesan</b>
                    <br />
                    <div>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
                        voluptua. At vero eos et accusam et justo du.
                    </div>`,
                price: '19,00',
            },
            {
                text: `<b>Bruschetta Tomate & Parmesan</b>
                    <br />
                    <div>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
                        voluptua. At vero eos et accusam et justo du.
                    </div>`,
                price: '19,00',
            },
            {
                text: `<b>Bruschetta Tomate & Parmesan</b>
                    <br />
                    <div>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
                        voluptua. At vero eos et accusam et justo du.
                    </div>`,
                price: '19,00',
            },
            {
                text: `<b>Bruschetta Tomate & Parmesan</b>
                    <br />
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
                text: `<b>Bruschetta Tomate & Parmesan</b>
                    <br />
                    <div>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
                        voluptua. At vero eos et accusam et justo du.
                    </div>`,
                price: '19,00',
            },
            {
                text: `<b>Bruschetta Tomate & Parmesan</b>
                    <br />
                    <div>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
                        voluptua. At vero eos et accusam et justo du.
                    </div>`,
                price: '19,00',
            },
            {
                text: `<b>Bruschetta Tomate & Parmesan</b>
                    <br />
                    <div>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
                        voluptua. At vero eos et accusam et justo du.
                    </div>`,
                price: '19,00',
            },
            {
                text: `<b>Bruschetta Tomate & Parmesan</b>
                    <br />
                    <div>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
                        voluptua. At vero eos et accusam et justo du.
                    </div>`,
                price: '19,00',
            },
            {
                text: `<b>Bruschetta Tomate & Parmesan</b>
                    <br />
                    <div>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
                        voluptua. At vero eos et accusam et justo du.
                    </div>`,
                price: '19,00',
            },
            {
                text: `<b>Bruschetta Tomate & Parmesan</b>
                    <br />
                    <div>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
                        voluptua. At vero eos et accusam et justo du.
                    </div>`,
                price: '19,00',
            },
            {
                text: `<b>Bruschetta Tomate & Parmesan</b>
                    <br />
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
