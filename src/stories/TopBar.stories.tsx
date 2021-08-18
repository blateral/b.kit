/* eslint-disable react/display-name */
import * as React from 'react';
import { Meta, Story } from '@storybook/react';

import ArrowRight from 'components/base/icons/ArrowRight';
import Star from 'components/base/icons/Star';
import StarGhost from 'components/base/icons/StarGhost';
import Button from 'components/buttons/Button';
import ButtonGhost from 'components/buttons/ButtonGhost';
import TopBar from 'components/sections/navigation/TopBar';

const logoFn = ({
    isInverted,
    size,
}: {
    isInverted: boolean;
    size?: 'full' | 'small';
}) => {
    if (isInverted)
        return (
            <img
                src={`https://via.placeholder.com/${
                    size === 'full' ? '425' : '107'
                }x115/000000/FFFFFF/?text=${size}`}
            />
        );
    else
        return (
            <img
                src={`https://via.placeholder.com/${
                    size === 'full' ? '425' : '107'
                }x115/FFFFFF/000000/?text=${size}`}
            />
        );
};

const primaryCtaFn = ({
    isInverted,
    size,
}: {
    isInverted?: boolean;
    size: 'mobile' | 'desktop';
}) => (
    <Button.View as="a" href="#" isInverted={isInverted} onClick={console.log}>
        {size === 'desktop' && (
            <>
                <Button.Label>zum Haus St. Ulrich</Button.Label>
                <Button.Icon>
                    <ArrowRight />
                </Button.Icon>
            </>
        )}
        {size === 'mobile' && (
            <Button.Icon>
                <Star />
            </Button.Icon>
        )}
    </Button.View>
);

const secondaryCtaFn = ({
    isInverted,
    size,
}: {
    isInverted?: boolean;
    size: 'mobile' | 'desktop';
}) => (
    <ButtonGhost.View
        as="a"
        href="#"
        isInverted={isInverted}
        onClick={console.log}
    >
        {size === 'desktop' && (
            <ButtonGhost.Label>zum Haus St. Ulrich</ButtonGhost.Label>
        )}
        {size === 'mobile' && (
            <ButtonGhost.Icon>
                <StarGhost />
            </ButtonGhost.Icon>
        )}
    </ButtonGhost.View>
);

export default {
    title: 'Sections/Navigation/TopBar',
    component: TopBar,
    parameters: {
        backgrounds: {
            default: 'inverted',
            values: [{ name: 'inverted', value: 'grey' }],
        },
    },
    decorators: [
        (Story) => (
            <div
                style={{
                    height: '120vh',
                    width: '100%',
                }}
            >
                <Story />
            </div>
        ),
    ],
} as Meta;

export const Default: Story = () => <TopBar />;

export const WithLogo: Story = () => (
    <TopBar
        logo={{
            icon: logoFn,
            link: '#logoLink',
        }}
    />
);

export const WithCustomLogoScale: Story = () => (
    <TopBar
        logo={{
            icon: logoFn,
            link: '#logoLink',
            pageTopScale: {
                desktop: 1.5,
                mobile: 0.5,
            },
        }}
    />
);

export const WithCustomScrolledLogoScale: Story = () => (
    <TopBar
        logo={{
            icon: logoFn,
            link: '#logoLink',
            scrolledScale: {
                desktop: 1,
                mobile: 1,
            },
        }}
    />
);

export const WithoutLargeState: Story = () => (
    <TopBar
        isLargeOnPageTop={false}
        logo={{
            icon: logoFn,
            link: '#logoLink',
        }}
    />
);

export const PreventTopOverflow: Story = () => (
    <TopBar
        allowTopOverlow={false}
        logo={{
            icon: logoFn,
            link: '#logoLink',
        }}
    />
);

export const WithActions: Story = () => (
    <TopBar
        logo={{
            icon: logoFn,
            link: '#logoLink',
        }}
        primaryAction={primaryCtaFn}
        secondaryAction={secondaryCtaFn}
    />
);

export const WithMirroredView: Story = () => (
    <TopBar
        logo={{
            icon: logoFn,
            link: '#logoLink',
        }}
        primaryAction={primaryCtaFn}
        secondaryAction={secondaryCtaFn}
        isMirrored
    />
);

export const Inverted: Story = () => (
    <TopBar
        isInverted
        logo={{
            icon: logoFn,
            link: '#logoLink',
        }}
        primaryAction={primaryCtaFn}
        secondaryAction={secondaryCtaFn}
    />
);

export const WithToggleIconVariation: Story = () => (
    <TopBar
        isInverted
        toggleIcon={(isInverted) => (
            <Star iconColor={isInverted ? '#fff' : '#000'} />
        )}
        logo={{
            icon: logoFn,
            link: '#logoLink',
        }}
        primaryAction={primaryCtaFn}
        secondaryAction={secondaryCtaFn}
        onToggleClick={() => console.log('Menu toggle click')}
    />
);
