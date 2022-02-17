import * as React from 'react';
import { Meta, Story } from '@storybook/react';
import FactList, { FactListComponent } from 'components/sections/FactList';

export default {
    title: 'Sections/FactList',
    component: FactListComponent,
    parameters: {
        status: {
            type: 'preview',
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

export const WithIcons: Story = () => (
    <FactList
        facts={[
            {
                label: 'Consetetur sadipscing elitr',
                icon: { src: 'http://placehold.it/40' },
            },
            {
                label: 'Sed diam nonumy eirmod tempor invidunt',
                icon: { src: 'http://placehold.it/40' },
            },
            {
                label: 'Ut labore et dolore magna aliquyam erat',
                icon: { src: 'http://placehold.it/40' },
            },
            {
                label: 'Sed diam voluptua',
                icon: { src: 'http://placehold.it/40' },
            },
            {
                label: 'At vero eos et accusam et justo duo dolores et ea rebum',
                icon: { src: 'http://placehold.it/40' },
            },
            {
                label: 'Stet clita kasd gubergren',
                icon: { src: 'http://placehold.it/40' },
            },
            {
                label: 'No sea takimata sanctus est',
                icon: { src: 'http://placehold.it/40' },
            },
        ]}
    />
);

export const WithText: Story = () => (
    <FactList
        facts={[
            {
                label: 'Consetetur sadipscing elitr',
                icon: { src: 'http://placehold.it/40' },
                text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam, et eos architecto laboriosam <a href="#0">impedit</a> nihil illum non maxime recusandae, dolores doloribus quos iusto? Deserunt dicta non, assumenda pariatur dolore praesentium dolorem hic reiciendis magni itaque esse architecto, necessitatibus earum enim, at ex? Provident, dolorum dolore amet facilis quisquam unde vero, id sapiente sequi perspiciatis qui possimus! Qui asperiores, numquam quasi distinctio illo aut deleniti sequi explicabo ipsum, expedita assumenda unde voluptatum. Eaque, sed! Dolores, facilis reiciendis. Error minima dolorum soluta.',
            },
            {
                label: 'Sed diam nonumy eirmod tempor invidunt',
                icon: { src: 'http://placehold.it/40' },
                text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam, et eos architecto laboriosam <a href="#0">impedit</a> nihil illum non maxime recusandae, dolores doloribus quos iusto? Deserunt dicta non, assumenda pariatur dolore praesentium dolorem hic reiciendis magni itaque esse architecto, necessitatibus earum enim, at ex? Provident, dolorum dolore amet facilis quisquam unde vero, id sapiente sequi perspiciatis qui possimus! Qui asperiores, numquam quasi distinctio illo aut deleniti sequi explicabo ipsum, expedita assumenda unde voluptatum. Eaque, sed! Dolores, facilis reiciendis. Error minima dolorum soluta.',
            },
            {
                label: 'Ut labore et dolore magna aliquyam erat',
                icon: { src: 'http://placehold.it/40' },
                text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam, et eos architecto laboriosam <a href="#0">impedit</a> nihil illum non maxime recusandae, dolores doloribus quos iusto? Deserunt dicta non, assumenda pariatur dolore praesentium dolorem hic reiciendis magni itaque esse architecto, necessitatibus earum enim, at ex? Provident, dolorum dolore amet facilis quisquam unde vero, id sapiente sequi perspiciatis qui possimus! Qui asperiores, numquam quasi distinctio illo aut deleniti sequi explicabo ipsum, expedita assumenda unde voluptatum. Eaque, sed! Dolores, facilis reiciendis. Error minima dolorum soluta.',
            },
            {
                label: 'Sed diam voluptua',
                icon: { src: 'http://placehold.it/40' },
                text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam, et eos architecto laboriosam <a href="#0">impedit</a> nihil illum non maxime recusandae, dolores doloribus quos iusto? Deserunt dicta non, assumenda pariatur dolore praesentium dolorem hic reiciendis magni itaque esse architecto, necessitatibus earum enim, at ex? Provident, dolorum dolore amet facilis quisquam unde vero, id sapiente sequi perspiciatis qui possimus! Qui asperiores, numquam quasi distinctio illo aut deleniti sequi explicabo ipsum, expedita assumenda unde voluptatum. Eaque, sed! Dolores, facilis reiciendis. Error minima dolorum soluta.',
            },
            {
                label: 'At vero eos et accusam et justo duo dolores et ea rebum',
                icon: { src: 'http://placehold.it/40' },
                text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam, et eos architecto laboriosam <a href="#0">impedit</a> nihil illum non maxime recusandae, dolores doloribus quos iusto? Deserunt dicta non, assumenda pariatur dolore praesentium dolorem hic reiciendis magni itaque esse architecto, necessitatibus earum enim, at ex? Provident, dolorum dolore amet facilis quisquam unde vero, id sapiente sequi perspiciatis qui possimus! Qui asperiores, numquam quasi distinctio illo aut deleniti sequi explicabo ipsum, expedita assumenda unde voluptatum. Eaque, sed! Dolores, facilis reiciendis. Error minima dolorum soluta.',
            },
            {
                label: 'Stet clita kasd gubergren',
                icon: { src: 'http://placehold.it/40' },
                text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam, et eos architecto laboriosam <a href="#0">impedit</a> nihil illum non maxime recusandae, dolores doloribus quos iusto? Deserunt dicta non, assumenda pariatur dolore praesentium dolorem hic reiciendis magni itaque esse architecto, necessitatibus earum enim, at ex? Provident, dolorum dolore amet facilis quisquam unde vero, id sapiente sequi perspiciatis qui possimus! Qui asperiores, numquam quasi distinctio illo aut deleniti sequi explicabo ipsum, expedita assumenda unde voluptatum. Eaque, sed! Dolores, facilis reiciendis. Error minima dolorum soluta.',
            },
            {
                label: 'No sea takimata sanctus est',
                icon: { src: 'http://placehold.it/40' },
                text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam, et eos architecto laboriosam <a href="#0">impedit</a> nihil illum non maxime recusandae, dolores doloribus quos iusto? Deserunt dicta non, assumenda pariatur dolore praesentium dolorem hic reiciendis magni itaque esse architecto, necessitatibus earum enim, at ex? Provident, dolorum dolore amet facilis quisquam unde vero, id sapiente sequi perspiciatis qui possimus! Qui asperiores, numquam quasi distinctio illo aut deleniti sequi explicabo ipsum, expedita assumenda unde voluptatum. Eaque, sed! Dolores, facilis reiciendis. Error minima dolorum soluta.',
            },
        ]}
    />
);

export const WithBackground: Story = () => (
    <FactList
        bgMode="full"
        facts={[
            {
                label: 'Consetetur sadipscing elitr',
                icon: { src: 'http://placehold.it/40' },
                text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam, et eos architecto laboriosam <a href="#0">impedit</a> nihil illum non maxime recusandae, dolores doloribus quos iusto? Deserunt dicta non, assumenda pariatur dolore praesentium dolorem hic reiciendis magni itaque esse architecto, necessitatibus earum enim, at ex? Provident, dolorum dolore amet facilis quisquam unde vero, id sapiente sequi perspiciatis qui possimus! Qui asperiores, numquam quasi distinctio illo aut deleniti sequi explicabo ipsum, expedita assumenda unde voluptatum. Eaque, sed! Dolores, facilis reiciendis. Error minima dolorum soluta.',
            },
            {
                label: 'Sed diam nonumy eirmod tempor invidunt',
                icon: { src: 'http://placehold.it/40' },
                text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam, et eos architecto laboriosam <a href="#0">impedit</a> nihil illum non maxime recusandae, dolores doloribus quos iusto? Deserunt dicta non, assumenda pariatur dolore praesentium dolorem hic reiciendis magni itaque esse architecto, necessitatibus earum enim, at ex? Provident, dolorum dolore amet facilis quisquam unde vero, id sapiente sequi perspiciatis qui possimus! Qui asperiores, numquam quasi distinctio illo aut deleniti sequi explicabo ipsum, expedita assumenda unde voluptatum. Eaque, sed! Dolores, facilis reiciendis. Error minima dolorum soluta.',
            },
            {
                label: 'Ut labore et dolore magna aliquyam erat',
                icon: { src: 'http://placehold.it/40' },
                text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam, et eos architecto laboriosam <a href="#0">impedit</a> nihil illum non maxime recusandae, dolores doloribus quos iusto? Deserunt dicta non, assumenda pariatur dolore praesentium dolorem hic reiciendis magni itaque esse architecto, necessitatibus earum enim, at ex? Provident, dolorum dolore amet facilis quisquam unde vero, id sapiente sequi perspiciatis qui possimus! Qui asperiores, numquam quasi distinctio illo aut deleniti sequi explicabo ipsum, expedita assumenda unde voluptatum. Eaque, sed! Dolores, facilis reiciendis. Error minima dolorum soluta.',
            },
            {
                label: 'Sed diam voluptua',
                icon: { src: 'http://placehold.it/40' },
                text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam, et eos architecto laboriosam <a href="#0">impedit</a> nihil illum non maxime recusandae, dolores doloribus quos iusto? Deserunt dicta non, assumenda pariatur dolore praesentium dolorem hic reiciendis magni itaque esse architecto, necessitatibus earum enim, at ex? Provident, dolorum dolore amet facilis quisquam unde vero, id sapiente sequi perspiciatis qui possimus! Qui asperiores, numquam quasi distinctio illo aut deleniti sequi explicabo ipsum, expedita assumenda unde voluptatum. Eaque, sed! Dolores, facilis reiciendis. Error minima dolorum soluta.',
            },
            {
                label: 'At vero eos et accusam et justo duo dolores et ea rebum',
                icon: { src: 'http://placehold.it/40' },
                text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam, et eos architecto laboriosam <a href="#0">impedit</a> nihil illum non maxime recusandae, dolores doloribus quos iusto? Deserunt dicta non, assumenda pariatur dolore praesentium dolorem hic reiciendis magni itaque esse architecto, necessitatibus earum enim, at ex? Provident, dolorum dolore amet facilis quisquam unde vero, id sapiente sequi perspiciatis qui possimus! Qui asperiores, numquam quasi distinctio illo aut deleniti sequi explicabo ipsum, expedita assumenda unde voluptatum. Eaque, sed! Dolores, facilis reiciendis. Error minima dolorum soluta.',
            },
            {
                label: 'Stet clita kasd gubergren',
                icon: { src: 'http://placehold.it/40' },
                text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam, et eos architecto laboriosam <a href="#0">impedit</a> nihil illum non maxime recusandae, dolores doloribus quos iusto? Deserunt dicta non, assumenda pariatur dolore praesentium dolorem hic reiciendis magni itaque esse architecto, necessitatibus earum enim, at ex? Provident, dolorum dolore amet facilis quisquam unde vero, id sapiente sequi perspiciatis qui possimus! Qui asperiores, numquam quasi distinctio illo aut deleniti sequi explicabo ipsum, expedita assumenda unde voluptatum. Eaque, sed! Dolores, facilis reiciendis. Error minima dolorum soluta.',
            },
            {
                label: 'No sea takimata sanctus est',
                icon: { src: 'http://placehold.it/40' },
                text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam, et eos architecto laboriosam <a href="#0">impedit</a> nihil illum non maxime recusandae, dolores doloribus quos iusto? Deserunt dicta non, assumenda pariatur dolore praesentium dolorem hic reiciendis magni itaque esse architecto, necessitatibus earum enim, at ex? Provident, dolorum dolore amet facilis quisquam unde vero, id sapiente sequi perspiciatis qui possimus! Qui asperiores, numquam quasi distinctio illo aut deleniti sequi explicabo ipsum, expedita assumenda unde voluptatum. Eaque, sed! Dolores, facilis reiciendis. Error minima dolorum soluta.',
            },
        ]}
    />
);

export const Inverted: Story = () => (
    <FactList
        bgMode="inverted"
        facts={[
            {
                label: 'Consetetur sadipscing elitr',
                icon: { src: 'http://placehold.it/40' },
                text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam, et eos architecto laboriosam <a href="#0">impedit</a> nihil illum non maxime recusandae, dolores doloribus quos iusto? Deserunt dicta non, assumenda pariatur dolore praesentium dolorem hic reiciendis magni itaque esse architecto, necessitatibus earum enim, at ex? Provident, dolorum dolore amet facilis quisquam unde vero, id sapiente sequi perspiciatis qui possimus! Qui asperiores, numquam quasi distinctio illo aut deleniti sequi explicabo ipsum, expedita assumenda unde voluptatum. Eaque, sed! Dolores, facilis reiciendis. Error minima dolorum soluta.',
            },
            {
                label: 'Sed diam nonumy eirmod tempor invidunt',
                icon: { src: 'http://placehold.it/40' },
                text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam, et eos architecto laboriosam <a href="#0">impedit</a> nihil illum non maxime recusandae, dolores doloribus quos iusto? Deserunt dicta non, assumenda pariatur dolore praesentium dolorem hic reiciendis magni itaque esse architecto, necessitatibus earum enim, at ex? Provident, dolorum dolore amet facilis quisquam unde vero, id sapiente sequi perspiciatis qui possimus! Qui asperiores, numquam quasi distinctio illo aut deleniti sequi explicabo ipsum, expedita assumenda unde voluptatum. Eaque, sed! Dolores, facilis reiciendis. Error minima dolorum soluta.',
            },
            {
                label: 'Ut labore et dolore magna aliquyam erat',
                icon: { src: 'http://placehold.it/40' },
                text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam, et eos architecto laboriosam <a href="#0">impedit</a> nihil illum non maxime recusandae, dolores doloribus quos iusto? Deserunt dicta non, assumenda pariatur dolore praesentium dolorem hic reiciendis magni itaque esse architecto, necessitatibus earum enim, at ex? Provident, dolorum dolore amet facilis quisquam unde vero, id sapiente sequi perspiciatis qui possimus! Qui asperiores, numquam quasi distinctio illo aut deleniti sequi explicabo ipsum, expedita assumenda unde voluptatum. Eaque, sed! Dolores, facilis reiciendis. Error minima dolorum soluta.',
            },
            {
                label: 'Sed diam voluptua',
                icon: { src: 'http://placehold.it/40' },
                text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam, et eos architecto laboriosam <a href="#0">impedit</a> nihil illum non maxime recusandae, dolores doloribus quos iusto? Deserunt dicta non, assumenda pariatur dolore praesentium dolorem hic reiciendis magni itaque esse architecto, necessitatibus earum enim, at ex? Provident, dolorum dolore amet facilis quisquam unde vero, id sapiente sequi perspiciatis qui possimus! Qui asperiores, numquam quasi distinctio illo aut deleniti sequi explicabo ipsum, expedita assumenda unde voluptatum. Eaque, sed! Dolores, facilis reiciendis. Error minima dolorum soluta.',
            },
            {
                label: 'At vero eos et accusam et justo duo dolores et ea rebum',
                icon: { src: 'http://placehold.it/40' },
                text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam, et eos architecto laboriosam <a href="#0">impedit</a> nihil illum non maxime recusandae, dolores doloribus quos iusto? Deserunt dicta non, assumenda pariatur dolore praesentium dolorem hic reiciendis magni itaque esse architecto, necessitatibus earum enim, at ex? Provident, dolorum dolore amet facilis quisquam unde vero, id sapiente sequi perspiciatis qui possimus! Qui asperiores, numquam quasi distinctio illo aut deleniti sequi explicabo ipsum, expedita assumenda unde voluptatum. Eaque, sed! Dolores, facilis reiciendis. Error minima dolorum soluta.',
            },
            {
                label: 'Stet clita kasd gubergren',
                icon: { src: 'http://placehold.it/40' },
                text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam, et eos architecto laboriosam <a href="#0">impedit</a> nihil illum non maxime recusandae, dolores doloribus quos iusto? Deserunt dicta non, assumenda pariatur dolore praesentium dolorem hic reiciendis magni itaque esse architecto, necessitatibus earum enim, at ex? Provident, dolorum dolore amet facilis quisquam unde vero, id sapiente sequi perspiciatis qui possimus! Qui asperiores, numquam quasi distinctio illo aut deleniti sequi explicabo ipsum, expedita assumenda unde voluptatum. Eaque, sed! Dolores, facilis reiciendis. Error minima dolorum soluta.',
            },
            {
                label: 'No sea takimata sanctus est',
                icon: { src: 'http://placehold.it/40' },
                text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam, et eos architecto laboriosam <a href="#0">impedit</a> nihil illum non maxime recusandae, dolores doloribus quos iusto? Deserunt dicta non, assumenda pariatur dolore praesentium dolorem hic reiciendis magni itaque esse architecto, necessitatibus earum enim, at ex? Provident, dolorum dolore amet facilis quisquam unde vero, id sapiente sequi perspiciatis qui possimus! Qui asperiores, numquam quasi distinctio illo aut deleniti sequi explicabo ipsum, expedita assumenda unde voluptatum. Eaque, sed! Dolores, facilis reiciendis. Error minima dolorum soluta.',
            },
        ]}
    />
);
