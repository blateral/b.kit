import React from 'react';
import { Meta, Story } from '@storybook/react';
import NewsCard from 'components/blocks/NewsCard';
import { Pointer } from 'buttons';
import AngleRight from 'components/base/icons/AngleRight';
// import Pointer from 'components/buttons/Pointer';
// import AngleRight from 'components/base/icons/AngleRight';

export default {
    title: 'Blocks/NewsCard',
    component: NewsCard,
    parameters: {
        status: {
            type: ['preview', 'qsReady'],
        },
    },
} as Meta;

export const Default: Story = () => (
    <NewsCard title="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy" />
);

export const WithText: Story = () => (
    <NewsCard
        title="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy"
        text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. "
    />
);

export const WithTags: Story = () => (
    <NewsCard
        tags={[
            { name: 'Tag A', link: { href: '#0' } },
            { name: 'TagB', link: { href: '#0' } },
            { name: 'TagC', link: { href: '#0' } },
        ]}
        onTagClick={console.log}
        title="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy"
        text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. "
        link={{ href: '#0' }}
    />
);

export const WithCustomTags: Story = () => (
    <NewsCard
        tags={[
            { name: 'Tag A', link: { href: '#0' } },
            { name: 'TagB', link: { href: '#0' } },
            { name: 'TagC', link: { href: '#0' } },
        ]}
        onTagClick={console.log}
        title="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy"
        text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. "
        customTag={({ key, name, isActive, clickHandler }) => (
            <button
                key={key}
                style={{ background: isActive ? 'gray' : 'lightgray' }}
                onClick={() => clickHandler && clickHandler()}
            >
                {name}
            </button>
        )}
        link={{ href: '#0' }}
    />
);

export const WithPublishDate: Story = () => (
    <NewsCard
        tags={[
            { name: 'Tag A', link: { href: '#0' } },
            { name: 'TagB', link: { href: '#0' } },
            { name: 'TagC', link: { href: '#0' } },
        ]}
        onTagClick={console.log}
        publishDate={new Date('July 22, 2021 03:24:00')}
        title="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy"
        text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. "
        link={{ href: '#0' }}
    />
);

export const WithImage: Story = () => (
    <NewsCard
        tags={[
            { name: 'Tag A', link: { href: '#0' } },
            { name: 'TagB', link: { href: '#0' } },
            { name: 'TagC', link: { href: '#0' } },
        ]}
        onTagClick={console.log}
        publishDate={new Date('July 22, 2021 03:24:00')}
        title="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy"
        text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. "
        image={{
            small: 'https://unsplash.it/419/313?image=400',
            medium: 'https://unsplash.it/983/736?image=400',
            large: 'https://unsplash.it/1399/1048?image=400',
            xlarge: 'https://unsplash.it/1400/1050?image=400',
        }}
        link={{ href: '#0' }}
    />
);

export const WithAction: Story = () => (
    <NewsCard
        tags={[
            { name: 'Tag A', link: { href: '#0' } },
            { name: 'TagB', link: { href: '#0' } },
            { name: 'TagC', link: { href: '#0' } },
        ]}
        onTagClick={console.log}
        publishDate={new Date('July 22, 2021 03:24:00')}
        title="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy"
        text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. "
        image={{
            small: 'https://unsplash.it/419/313?image=400',
            medium: 'https://unsplash.it/983/736?image=400',
            large: 'https://unsplash.it/1399/1048?image=400',
            xlarge: 'https://unsplash.it/1400/1050?image=400',
        }}
        action={({ isInverted, title, link }) => (
            <Pointer.View
                decoration="none"
                isInverted={isInverted}
                ariaLabel={title}
                {...link}
            >
                <Pointer.Label>Tertiary</Pointer.Label>
                <Pointer.Icon>
                    <AngleRight />
                </Pointer.Icon>
            </Pointer.View>
        )}
        link={{ href: '#0' }}
    />
);

export const Inverted: Story = () => (
    <NewsCard
        isInverted
        tags={[
            { name: 'Tag A', link: { href: '#0' } },
            { name: 'TagB', link: { href: '#0' } },
            { name: 'TagC', link: { href: '#0' } },
        ]}
        onTagClick={console.log}
        publishDate={new Date('July 22, 2021 03:24:00')}
        title="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy"
        text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. "
        image={{
            small: 'https://unsplash.it/419/313?image=400',
            medium: 'https://unsplash.it/983/736?image=400',
            large: 'https://unsplash.it/1399/1048?image=400',
            xlarge: 'https://unsplash.it/1400/1050?image=400',
        }}
        action={({ isInverted, title, link }) => (
            <Pointer.View
                decoration="none"
                isInverted={isInverted}
                ariaLabel={title}
                {...link}
            >
                <Pointer.Label>Tertiary</Pointer.Label>
                <Pointer.Icon>
                    <AngleRight />
                </Pointer.Icon>
            </Pointer.View>
        )}
        link={{ href: '#0' }}
    />
);

Inverted.parameters = {
    backgrounds: {
        default: 'inverted',
        values: [{ name: 'inverted', value: 'black' }],
    },
};
