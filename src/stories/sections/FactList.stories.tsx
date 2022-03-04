import React from 'react';
import { Meta, Story } from '@storybook/react';
import FactList, { FactListComponent } from 'components/sections/FactList';

export default {
    title: 'Sections/FactList',
    component: FactListComponent,
    parameters: {
        status: {
            type: ['preview', 'qsReady'],
        },
    },
} as Meta;

export const Default: Story = () => (
    <FactList
        facts={[
            {
                label: 'Consetetur sadipscing elitr',
            },
            {
                label: 'Sed diam nonumy eirmod tempor invidunt',
            },
            {
                label: 'Ut labore et dolore magna aliquyam erat',
            },
            {
                label: 'Sed diam voluptua',
            },
            {
                label: 'At vero eos et accusam et justo duo dolores et ea rebum',
            },
            {
                label: 'Stet clita kasd gubergren',
            },
            {
                label: 'No sea takimata sanctus est',
            },
        ]}
    />
);

export const WithIcon: Story = () => (
    <FactList
        icon={{ src: 'https://via.placeholder.com/24' }}
        facts={[
            {
                label: 'Consetetur sadipscing elitr',
            },
            {
                label: 'Sed diam nonumy eirmod tempor invidunt',
            },
            {
                label: 'Ut labore et dolore magna aliquyam erat',
            },
            {
                label: 'Sed diam voluptua',
            },
            {
                label: 'At vero eos et accusam et justo duo dolores et ea rebum',
            },
            {
                label: 'Stet clita kasd gubergren',
            },
            {
                label: 'No sea takimata sanctus est',
            },
        ]}
    />
);

export const WithText: Story = () => (
    <FactList
        icon={{ src: 'https://via.placeholder.com/24' }}
        facts={[
            {
                label: 'Consetetur sadipscing elitr',
                text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam, et eos architecto laboriosam <a href="#0">impedit</a> nihil illum non maxime recusandae, dolores doloribus quos iusto? Deserunt dicta non, assumenda pariatur dolore praesentium dolorem hic reiciendis magni itaque esse architecto, necessitatibus earum enim, at ex? Provident, dolorum dolore amet facilis quisquam unde vero, id sapiente sequi perspiciatis qui possimus! Qui asperiores, numquam quasi distinctio illo aut deleniti sequi explicabo ipsum, expedita assumenda unde voluptatum. Eaque, sed! Dolores, facilis reiciendis. Error minima dolorum soluta.',
            },
            {
                label: 'Sed diam nonumy eirmod tempor invidunt',
                text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam, et eos architecto laboriosam <a href="#0">impedit</a> nihil illum non maxime recusandae, dolores doloribus quos iusto? Deserunt dicta non, assumenda pariatur dolore praesentium dolorem hic reiciendis magni itaque esse architecto, necessitatibus earum enim, at ex? Provident, dolorum dolore amet facilis quisquam unde vero, id sapiente sequi perspiciatis qui possimus! Qui asperiores, numquam quasi distinctio illo aut deleniti sequi explicabo ipsum, expedita assumenda unde voluptatum. Eaque, sed! Dolores, facilis reiciendis. Error minima dolorum soluta.',
            },
            {
                label: 'Ut labore et dolore magna aliquyam erat',
                text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam, et eos architecto laboriosam <a href="#0">impedit</a> nihil illum non maxime recusandae, dolores doloribus quos iusto? Deserunt dicta non, assumenda pariatur dolore praesentium dolorem hic reiciendis magni itaque esse architecto, necessitatibus earum enim, at ex? Provident, dolorum dolore amet facilis quisquam unde vero, id sapiente sequi perspiciatis qui possimus! Qui asperiores, numquam quasi distinctio illo aut deleniti sequi explicabo ipsum, expedita assumenda unde voluptatum. Eaque, sed! Dolores, facilis reiciendis. Error minima dolorum soluta.',
            },
            {
                label: 'Sed diam voluptua',
                text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam, et eos architecto laboriosam <a href="#0">impedit</a> nihil illum non maxime recusandae, dolores doloribus quos iusto? Deserunt dicta non, assumenda pariatur dolore praesentium dolorem hic reiciendis magni itaque esse architecto, necessitatibus earum enim, at ex? Provident, dolorum dolore amet facilis quisquam unde vero, id sapiente sequi perspiciatis qui possimus! Qui asperiores, numquam quasi distinctio illo aut deleniti sequi explicabo ipsum, expedita assumenda unde voluptatum. Eaque, sed! Dolores, facilis reiciendis. Error minima dolorum soluta.',
            },
            {
                label: 'At vero eos et accusam et justo duo dolores et ea rebum',
                text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam, et eos architecto laboriosam <a href="#0">impedit</a> nihil illum non maxime recusandae, dolores doloribus quos iusto? Deserunt dicta non, assumenda pariatur dolore praesentium dolorem hic reiciendis magni itaque esse architecto, necessitatibus earum enim, at ex? Provident, dolorum dolore amet facilis quisquam unde vero, id sapiente sequi perspiciatis qui possimus! Qui asperiores, numquam quasi distinctio illo aut deleniti sequi explicabo ipsum, expedita assumenda unde voluptatum. Eaque, sed! Dolores, facilis reiciendis. Error minima dolorum soluta.',
            },
            {
                label: 'Stet clita kasd gubergren',
                text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam, et eos architecto laboriosam <a href="#0">impedit</a> nihil illum non maxime recusandae, dolores doloribus quos iusto? Deserunt dicta non, assumenda pariatur dolore praesentium dolorem hic reiciendis magni itaque esse architecto, necessitatibus earum enim, at ex? Provident, dolorum dolore amet facilis quisquam unde vero, id sapiente sequi perspiciatis qui possimus! Qui asperiores, numquam quasi distinctio illo aut deleniti sequi explicabo ipsum, expedita assumenda unde voluptatum. Eaque, sed! Dolores, facilis reiciendis. Error minima dolorum soluta.',
            },
            {
                label: 'No sea takimata sanctus est',
                text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam, et eos architecto laboriosam <a href="#0">impedit</a> nihil illum non maxime recusandae, dolores doloribus quos iusto? Deserunt dicta non, assumenda pariatur dolore praesentium dolorem hic reiciendis magni itaque esse architecto, necessitatibus earum enim, at ex? Provident, dolorum dolore amet facilis quisquam unde vero, id sapiente sequi perspiciatis qui possimus! Qui asperiores, numquam quasi distinctio illo aut deleniti sequi explicabo ipsum, expedita assumenda unde voluptatum. Eaque, sed! Dolores, facilis reiciendis. Error minima dolorum soluta.',
            },
        ]}
    />
);

export const WithBackground: Story = () => (
    <FactList
        bgMode="full"
        icon={{ src: 'https://via.placeholder.com/24' }}
        facts={[
            {
                label: 'Consetetur sadipscing elitr',
                text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam, et eos architecto laboriosam <a href="#0">impedit</a> nihil illum non maxime recusandae, dolores doloribus quos iusto? Deserunt dicta non, assumenda pariatur dolore praesentium dolorem hic reiciendis magni itaque esse architecto, necessitatibus earum enim, at ex? Provident, dolorum dolore amet facilis quisquam unde vero, id sapiente sequi perspiciatis qui possimus! Qui asperiores, numquam quasi distinctio illo aut deleniti sequi explicabo ipsum, expedita assumenda unde voluptatum. Eaque, sed! Dolores, facilis reiciendis. Error minima dolorum soluta.',
            },
            {
                label: 'Sed diam nonumy eirmod tempor invidunt',
                text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam, et eos architecto laboriosam <a href="#0">impedit</a> nihil illum non maxime recusandae, dolores doloribus quos iusto? Deserunt dicta non, assumenda pariatur dolore praesentium dolorem hic reiciendis magni itaque esse architecto, necessitatibus earum enim, at ex? Provident, dolorum dolore amet facilis quisquam unde vero, id sapiente sequi perspiciatis qui possimus! Qui asperiores, numquam quasi distinctio illo aut deleniti sequi explicabo ipsum, expedita assumenda unde voluptatum. Eaque, sed! Dolores, facilis reiciendis. Error minima dolorum soluta.',
            },
            {
                label: 'Ut labore et dolore magna aliquyam erat',
                text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam, et eos architecto laboriosam <a href="#0">impedit</a> nihil illum non maxime recusandae, dolores doloribus quos iusto? Deserunt dicta non, assumenda pariatur dolore praesentium dolorem hic reiciendis magni itaque esse architecto, necessitatibus earum enim, at ex? Provident, dolorum dolore amet facilis quisquam unde vero, id sapiente sequi perspiciatis qui possimus! Qui asperiores, numquam quasi distinctio illo aut deleniti sequi explicabo ipsum, expedita assumenda unde voluptatum. Eaque, sed! Dolores, facilis reiciendis. Error minima dolorum soluta.',
            },
            {
                label: 'Sed diam voluptua',
                text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam, et eos architecto laboriosam <a href="#0">impedit</a> nihil illum non maxime recusandae, dolores doloribus quos iusto? Deserunt dicta non, assumenda pariatur dolore praesentium dolorem hic reiciendis magni itaque esse architecto, necessitatibus earum enim, at ex? Provident, dolorum dolore amet facilis quisquam unde vero, id sapiente sequi perspiciatis qui possimus! Qui asperiores, numquam quasi distinctio illo aut deleniti sequi explicabo ipsum, expedita assumenda unde voluptatum. Eaque, sed! Dolores, facilis reiciendis. Error minima dolorum soluta.',
            },
            {
                label: 'At vero eos et accusam et justo duo dolores et ea rebum',
                text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam, et eos architecto laboriosam <a href="#0">impedit</a> nihil illum non maxime recusandae, dolores doloribus quos iusto? Deserunt dicta non, assumenda pariatur dolore praesentium dolorem hic reiciendis magni itaque esse architecto, necessitatibus earum enim, at ex? Provident, dolorum dolore amet facilis quisquam unde vero, id sapiente sequi perspiciatis qui possimus! Qui asperiores, numquam quasi distinctio illo aut deleniti sequi explicabo ipsum, expedita assumenda unde voluptatum. Eaque, sed! Dolores, facilis reiciendis. Error minima dolorum soluta.',
            },
            {
                label: 'Stet clita kasd gubergren',
                text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam, et eos architecto laboriosam <a href="#0">impedit</a> nihil illum non maxime recusandae, dolores doloribus quos iusto? Deserunt dicta non, assumenda pariatur dolore praesentium dolorem hic reiciendis magni itaque esse architecto, necessitatibus earum enim, at ex? Provident, dolorum dolore amet facilis quisquam unde vero, id sapiente sequi perspiciatis qui possimus! Qui asperiores, numquam quasi distinctio illo aut deleniti sequi explicabo ipsum, expedita assumenda unde voluptatum. Eaque, sed! Dolores, facilis reiciendis. Error minima dolorum soluta.',
            },
            {
                label: 'No sea takimata sanctus est',
                text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam, et eos architecto laboriosam <a href="#0">impedit</a> nihil illum non maxime recusandae, dolores doloribus quos iusto? Deserunt dicta non, assumenda pariatur dolore praesentium dolorem hic reiciendis magni itaque esse architecto, necessitatibus earum enim, at ex? Provident, dolorum dolore amet facilis quisquam unde vero, id sapiente sequi perspiciatis qui possimus! Qui asperiores, numquam quasi distinctio illo aut deleniti sequi explicabo ipsum, expedita assumenda unde voluptatum. Eaque, sed! Dolores, facilis reiciendis. Error minima dolorum soluta.',
            },
        ]}
    />
);

export const Inverted: Story = () => (
    <FactList
        bgMode="inverted"
        icon={{ src: 'https://via.placeholder.com/24' }}
        facts={[
            {
                label: 'Consetetur sadipscing elitr',
                text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam, et eos architecto laboriosam <a href="#0">impedit</a> nihil illum non maxime recusandae, dolores doloribus quos iusto? Deserunt dicta non, assumenda pariatur dolore praesentium dolorem hic reiciendis magni itaque esse architecto, necessitatibus earum enim, at ex? Provident, dolorum dolore amet facilis quisquam unde vero, id sapiente sequi perspiciatis qui possimus! Qui asperiores, numquam quasi distinctio illo aut deleniti sequi explicabo ipsum, expedita assumenda unde voluptatum. Eaque, sed! Dolores, facilis reiciendis. Error minima dolorum soluta.',
            },
            {
                label: 'Sed diam nonumy eirmod tempor invidunt',
                text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam, et eos architecto laboriosam <a href="#0">impedit</a> nihil illum non maxime recusandae, dolores doloribus quos iusto? Deserunt dicta non, assumenda pariatur dolore praesentium dolorem hic reiciendis magni itaque esse architecto, necessitatibus earum enim, at ex? Provident, dolorum dolore amet facilis quisquam unde vero, id sapiente sequi perspiciatis qui possimus! Qui asperiores, numquam quasi distinctio illo aut deleniti sequi explicabo ipsum, expedita assumenda unde voluptatum. Eaque, sed! Dolores, facilis reiciendis. Error minima dolorum soluta.',
            },
            {
                label: 'Ut labore et dolore magna aliquyam erat',
                text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam, et eos architecto laboriosam <a href="#0">impedit</a> nihil illum non maxime recusandae, dolores doloribus quos iusto? Deserunt dicta non, assumenda pariatur dolore praesentium dolorem hic reiciendis magni itaque esse architecto, necessitatibus earum enim, at ex? Provident, dolorum dolore amet facilis quisquam unde vero, id sapiente sequi perspiciatis qui possimus! Qui asperiores, numquam quasi distinctio illo aut deleniti sequi explicabo ipsum, expedita assumenda unde voluptatum. Eaque, sed! Dolores, facilis reiciendis. Error minima dolorum soluta.',
            },
            {
                label: 'Sed diam voluptua',
                text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam, et eos architecto laboriosam <a href="#0">impedit</a> nihil illum non maxime recusandae, dolores doloribus quos iusto? Deserunt dicta non, assumenda pariatur dolore praesentium dolorem hic reiciendis magni itaque esse architecto, necessitatibus earum enim, at ex? Provident, dolorum dolore amet facilis quisquam unde vero, id sapiente sequi perspiciatis qui possimus! Qui asperiores, numquam quasi distinctio illo aut deleniti sequi explicabo ipsum, expedita assumenda unde voluptatum. Eaque, sed! Dolores, facilis reiciendis. Error minima dolorum soluta.',
            },
            {
                label: 'At vero eos et accusam et justo duo dolores et ea rebum',
                text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam, et eos architecto laboriosam <a href="#0">impedit</a> nihil illum non maxime recusandae, dolores doloribus quos iusto? Deserunt dicta non, assumenda pariatur dolore praesentium dolorem hic reiciendis magni itaque esse architecto, necessitatibus earum enim, at ex? Provident, dolorum dolore amet facilis quisquam unde vero, id sapiente sequi perspiciatis qui possimus! Qui asperiores, numquam quasi distinctio illo aut deleniti sequi explicabo ipsum, expedita assumenda unde voluptatum. Eaque, sed! Dolores, facilis reiciendis. Error minima dolorum soluta.',
            },
            {
                label: 'Stet clita kasd gubergren',
                text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam, et eos architecto laboriosam <a href="#0">impedit</a> nihil illum non maxime recusandae, dolores doloribus quos iusto? Deserunt dicta non, assumenda pariatur dolore praesentium dolorem hic reiciendis magni itaque esse architecto, necessitatibus earum enim, at ex? Provident, dolorum dolore amet facilis quisquam unde vero, id sapiente sequi perspiciatis qui possimus! Qui asperiores, numquam quasi distinctio illo aut deleniti sequi explicabo ipsum, expedita assumenda unde voluptatum. Eaque, sed! Dolores, facilis reiciendis. Error minima dolorum soluta.',
            },
            {
                label: 'No sea takimata sanctus est',
                text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam, et eos architecto laboriosam <a href="#0">impedit</a> nihil illum non maxime recusandae, dolores doloribus quos iusto? Deserunt dicta non, assumenda pariatur dolore praesentium dolorem hic reiciendis magni itaque esse architecto, necessitatibus earum enim, at ex? Provident, dolorum dolore amet facilis quisquam unde vero, id sapiente sequi perspiciatis qui possimus! Qui asperiores, numquam quasi distinctio illo aut deleniti sequi explicabo ipsum, expedita assumenda unde voluptatum. Eaque, sed! Dolores, facilis reiciendis. Error minima dolorum soluta.',
            },
        ]}
    />
);
