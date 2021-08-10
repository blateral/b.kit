import * as React from 'react';
import { Meta, Story } from '@storybook/react';
import Accordion from 'components/sections/Accordion';

export default {
    title: 'Sections/Accordion',
    component: Accordion,
} as Meta;

export const Default: Story = () => (
    <Accordion
        items={[
            {
                label: 'Punkt 1',
                text:
                    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe suscipit cumque explicabo quod assumenda hic molestiae expedita debitis ipsum eligendi.',
            },
            {
                label: 'Punkt 2',
                text:
                    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe suscipit cumque explicabo quod assumenda hic molestiae expedita debitis ipsum eligendi.',
            },
            {
                label: 'Punkt 3',
                text: `Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. <br/></br><b>Subheadline</b></br>
            <ul>
                <li>Lorem ipsum dolor sit amet, consetetur sadipscing elitr </li>
                <li>Lorem ipsum dolor sit amet, consetetur sadipscing elitr </li>
                <li>Lorem ipsum dolor sit amet, consetetur sadipscing elitr </li>
                <li>Lorem ipsum dolor sit amet, consetetur sadipscing elitr </li>
                <li>Lorem ipsum dolor sit amet, consetetur sadipscing elitr </li>
                <li>Lorem ipsum dolor sit amet, consetetur sadipscing elitr </li>
            </ul>
            <br/><br/><a href="#0">Textlinks</a>
            `,
            },
            {
                label: 'Punkt 4',
                text:
                    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe suscipit cumque explicabo quod assumenda hic molestiae expedita debitis ipsum eligendi.',
            },
            {
                label: 'Punkt 5',
                text:
                    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe suscipit cumque explicabo quod assumenda hic molestiae expedita debitis ipsum eligendi.',
            },
        ]}
    />
);

export const WithColumns: Story = () => (
    <Accordion
        items={[
            {
                label: 'Punkt 1',
                text:
                    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe suscipit cumque explicabo quod assumenda hic molestiae expedita debitis ipsum eligendi.',
                hasColumns: true,
            },
            {
                label: 'Punkt 2',
                text:
                    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe suscipit cumque explicabo quod assumenda hic molestiae expedita debitis ipsum eligendi.',
            },
            {
                label: 'Punkt 3',
                text: `Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. <br/></br><b>Subheadline</b></br>
                    <ul>
                        <li>Lorem ipsum dolor sit amet, consetetur sadipscing elitr </li>
                        <li>Lorem ipsum dolor sit amet, consetetur sadipscing elitr </li>
                        <li>Lorem ipsum dolor sit amet, consetetur sadipscing elitr </li>
                        <li>Lorem ipsum dolor sit amet, consetetur sadipscing elitr </li>
                        <li>Lorem ipsum dolor sit amet, consetetur sadipscing elitr </li>
                        <li>Lorem ipsum dolor sit amet, consetetur sadipscing elitr </li>
                    </ul>
                    <br/><br/><a href="#0">Textlinks</a>
                    <br />
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. <br/></br><b>Subheadline</b></br>
                    <ul>
                        <li>Lorem ipsum dolor sit amet, consetetur sadipscing elitr </li>
                        <li>Lorem ipsum dolor sit amet, consetetur sadipscing elitr </li>
                        <li>Lorem ipsum dolor sit amet, consetetur sadipscing elitr </li>
                        <li>Lorem ipsum dolor sit amet, consetetur sadipscing elitr </li>
                        <li>Lorem ipsum dolor sit amet, consetetur sadipscing elitr </li>
                        <li>Lorem ipsum dolor sit amet, consetetur sadipscing elitr </li>
                    </ul>
                    <br/><br/><a href="#0">Textlinks</a>`,
                hasColumns: true,
            },
            {
                label: 'Punkt 4',
                text:
                    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe suscipit cumque explicabo quod assumenda hic molestiae expedita debitis ipsum eligendi.',
            },
            {
                label: 'Punkt 5',
                text:
                    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe suscipit cumque explicabo quod assumenda hic molestiae expedita debitis ipsum eligendi.',
            },
        ]}
    />
);

export const WithCustomBorderColor: Story = () => (
    <Accordion
        items={[
            {
                label: 'Punkt 1',
                text:
                    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe suscipit cumque explicabo quod assumenda hic molestiae expedita debitis ipsum eligendi.',
                hasColumns: true,
            },
            {
                label: 'Punkt 2',
                text:
                    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe suscipit cumque explicabo quod assumenda hic molestiae expedita debitis ipsum eligendi.',
            },
            {
                label: 'Punkt 3',
                text: `Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. <br/></br><b>Subheadline</b></br>
                    <ul>
                        <li>Lorem ipsum dolor sit amet, consetetur sadipscing elitr </li>
                        <li>Lorem ipsum dolor sit amet, consetetur sadipscing elitr </li>
                        <li>Lorem ipsum dolor sit amet, consetetur sadipscing elitr </li>
                        <li>Lorem ipsum dolor sit amet, consetetur sadipscing elitr </li>
                        <li>Lorem ipsum dolor sit amet, consetetur sadipscing elitr </li>
                        <li>Lorem ipsum dolor sit amet, consetetur sadipscing elitr </li>
                    </ul>
                    <br/><br/><a href="#0">Textlinks</a>
                    <br />
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. <br/></br><b>Subheadline</b></br>
                    <ul>
                        <li>Lorem ipsum dolor sit amet, consetetur sadipscing elitr </li>
                        <li>Lorem ipsum dolor sit amet, consetetur sadipscing elitr </li>
                        <li>Lorem ipsum dolor sit amet, consetetur sadipscing elitr </li>
                        <li>Lorem ipsum dolor sit amet, consetetur sadipscing elitr </li>
                        <li>Lorem ipsum dolor sit amet, consetetur sadipscing elitr </li>
                        <li>Lorem ipsum dolor sit amet, consetetur sadipscing elitr </li>
                    </ul>
                    <br/><br/><a href="#0">Textlinks</a>`,
                hasColumns: true,
            },
            {
                label: 'Punkt 4',
                text:
                    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe suscipit cumque explicabo quod assumenda hic molestiae expedita debitis ipsum eligendi.',
            },
            {
                label: 'Punkt 5',
                text:
                    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe suscipit cumque explicabo quod assumenda hic molestiae expedita debitis ipsum eligendi.',
            },
        ]}
        borderColor="#000"
    />
);

export const WithBackground: Story = () => (
    <Accordion
        items={[
            {
                label: 'Punkt 1',
                text:
                    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe suscipit cumque explicabo quod assumenda hic molestiae expedita debitis ipsum eligendi.',
                hasColumns: true,
            },
            {
                label: 'Punkt 2',
                text:
                    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe suscipit cumque explicabo quod assumenda hic molestiae expedita debitis ipsum eligendi.',
            },
            {
                label: 'Punkt 3',
                text: `Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. <br/></br><b>Subheadline</b></br>
                    <ul>
                        <li>Lorem ipsum dolor sit amet, consetetur sadipscing elitr </li>
                        <li>Lorem ipsum dolor sit amet, consetetur sadipscing elitr </li>
                        <li>Lorem ipsum dolor sit amet, consetetur sadipscing elitr </li>
                        <li>Lorem ipsum dolor sit amet, consetetur sadipscing elitr </li>
                        <li>Lorem ipsum dolor sit amet, consetetur sadipscing elitr </li>
                        <li>Lorem ipsum dolor sit amet, consetetur sadipscing elitr </li>
                    </ul>
                    <br/><br/><a href="#0">Textlinks</a>
                    <br />
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. <br/></br><b>Subheadline</b></br>
                    <ul>
                        <li>Lorem ipsum dolor sit amet, consetetur sadipscing elitr </li>
                        <li>Lorem ipsum dolor sit amet, consetetur sadipscing elitr </li>
                        <li>Lorem ipsum dolor sit amet, consetetur sadipscing elitr </li>
                        <li>Lorem ipsum dolor sit amet, consetetur sadipscing elitr </li>
                        <li>Lorem ipsum dolor sit amet, consetetur sadipscing elitr </li>
                        <li>Lorem ipsum dolor sit amet, consetetur sadipscing elitr </li>
                    </ul>
                    <br/><br/><a href="#0">Textlinks</a>`,
                hasColumns: true,
            },
            {
                label: 'Punkt 4',
                text:
                    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe suscipit cumque explicabo quod assumenda hic molestiae expedita debitis ipsum eligendi.',
            },
            {
                label: 'Punkt 5',
                text:
                    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe suscipit cumque explicabo quod assumenda hic molestiae expedita debitis ipsum eligendi.',
            },
        ]}
        bgMode="full"
    />
);

export const isInverted: Story = () => (
    <Accordion
        items={[
            {
                label: 'Punkt 1',
                text:
                    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe suscipit cumque explicabo quod assumenda hic molestiae expedita debitis ipsum eligendi.',
                hasColumns: true,
            },
            {
                label: 'Punkt 2',
                text:
                    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe suscipit cumque explicabo quod assumenda hic molestiae expedita debitis ipsum eligendi.',
            },
            {
                label: 'Punkt 3',
                text: `Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. <br/></br><b>Subheadline</b></br>
                    <ul>
                        <li>Lorem ipsum dolor sit amet, consetetur sadipscing elitr </li>
                        <li>Lorem ipsum dolor sit amet, consetetur sadipscing elitr </li>
                        <li>Lorem ipsum dolor sit amet, consetetur sadipscing elitr </li>
                        <li>Lorem ipsum dolor sit amet, consetetur sadipscing elitr </li>
                        <li>Lorem ipsum dolor sit amet, consetetur sadipscing elitr </li>
                        <li>Lorem ipsum dolor sit amet, consetetur sadipscing elitr </li>
                    </ul>
                    <br/><br/><a href="#0">Textlinks</a>
                    <br />
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. <br/></br><b>Subheadline</b></br>
                    <ul>
                        <li>Lorem ipsum dolor sit amet, consetetur sadipscing elitr </li>
                        <li>Lorem ipsum dolor sit amet, consetetur sadipscing elitr </li>
                        <li>Lorem ipsum dolor sit amet, consetetur sadipscing elitr </li>
                        <li>Lorem ipsum dolor sit amet, consetetur sadipscing elitr </li>
                        <li>Lorem ipsum dolor sit amet, consetetur sadipscing elitr </li>
                        <li>Lorem ipsum dolor sit amet, consetetur sadipscing elitr </li>
                    </ul>
                    <br/><br/><a href="#0">Textlinks</a>`,
                hasColumns: true,
            },
            {
                label: 'Punkt 4',
                text:
                    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe suscipit cumque explicabo quod assumenda hic molestiae expedita debitis ipsum eligendi.',
            },
            {
                label: 'Punkt 5',
                text:
                    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe suscipit cumque explicabo quod assumenda hic molestiae expedita debitis ipsum eligendi.',
            },
        ]}
        bgMode="inverted"
    />
);
