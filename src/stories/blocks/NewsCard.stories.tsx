import React from 'react';
import { Meta, Story } from '@storybook/react';
import NewsCard from 'components/blocks/NewsCard';
import Button from 'components/buttons/Button';
import ButtonGhost from 'components/buttons/ButtonGhost';
import Pointer from 'components/buttons/Pointer';
import AngleRight from 'components/base/icons/AngleRight';

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

export const WithTag: Story = () => (
    <NewsCard
        tag="Secondary Tag"
        onTagClick={console.log}
        title="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy"
        text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. "
    />
);

export const WithCustomTag: Story = () => (
    <NewsCard
        tag="Secondary Tag"
        onTagClick={console.log}
        title="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy"
        text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. "
        customTag={({ name, isActive, clickHandler }) => (
            <button
                style={{ background: isActive ? 'gray' : 'lightgray' }}
                onClick={clickHandler}
            >
                {name}
            </button>
        )}
    />
);

export const WithPublishDate: Story = () => (
    <NewsCard
        tag="Secondary Tag"
        onTagClick={console.log}
        publishDate={new Date('July 22, 2021 03:24:00')}
        title="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy"
        text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. "
    />
);

export const WithImage: Story = () => (
    <NewsCard
        tag="Secondary Tag"
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
    />
);

export const WithAction: Story = () => (
    <NewsCard
        tag="Secondary Tag"
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
        primaryAction={(isInverted) => (
            <Button.View isInverted={isInverted}>
                <Button.Label>Primary</Button.Label>
            </Button.View>
        )}
        secondaryAction={(isInverted) => (
            <ButtonGhost.View isInverted={isInverted}>
                <ButtonGhost.Label>Secondary</ButtonGhost.Label>
            </ButtonGhost.View>
        )}
    />
);

export const WithTertiaryAction: Story = () => (
    <NewsCard
        tag="Secondary Tag"
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
        tertiaryAction={(isInverted) => (
            <Pointer.View textDecoration="none" isInverted={isInverted}>
                <Pointer.Label>Tertiary</Pointer.Label>
                <Pointer.Icon>
                    <AngleRight />
                </Pointer.Icon>
            </Pointer.View>
        )}
    />
);

export const Inverted: Story = () => (
    <NewsCard
        isInverted
        tag="Secondary Tag"
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
        tertiaryAction={(isInverted) => (
            <Pointer.View isInverted={isInverted}>
                <Pointer.Label>Tertiary</Pointer.Label>
                <Pointer.Icon>
                    <AngleRight />
                </Pointer.Icon>
            </Pointer.View>
        )}
    />
);

Inverted.parameters = {
    backgrounds: {
        default: 'inverted',
        values: [{ name: 'inverted', value: 'black' }],
    },
};
