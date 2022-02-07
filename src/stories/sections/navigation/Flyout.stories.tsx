import * as React from 'react';
import { Meta, Story } from '@storybook/react';

import Flyout from 'components/sections/navigation/menu/Flyout';
import SearchInput from 'components/fields/SearchInput';
import Button from 'components/buttons/Button';
import ArrowRight from 'components/base/icons/ArrowRight';
import Star from 'components/base/icons/Star';
import ButtonGhost from 'components/buttons/ButtonGhost';
import StarGhost from 'components/base/icons/StarGhost';

export default {
    title: 'Sections/Navigation/Menu/Flyout',
    component: Flyout.View,
    decorators: [
        (Story) => (
            <div
                style={{
                    height: '100vh',
                    width: '100vw',
                    color: 'black',
                }}
            >
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
                dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
                sed diam voluptua. At vero eos et accusam et justo duo dolores
                et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus
                est Lorem ipsum dolor sit amet.
                <Story />
            </div>
        ),
    ],
    parameters: {
        status: {
            type: 'stable',
        },
    },
} as Meta;

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
    size?: 'desktop' | 'mobile';
}) => (
    <Button.View as="a" href="#" isInverted={isInverted} onClick={console.log}>
        {size === 'desktop' && (
            <>
                <Button.Label>Lorem Ipsum</Button.Label>
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
    size?: 'desktop' | 'mobile';
}) => (
    <ButtonGhost.View
        as="a"
        href="#"
        isInverted={isInverted}
        onClick={console.log}
    >
        {size === 'desktop' && (
            <ButtonGhost.Label>Lorem Ipsum</ButtonGhost.Label>
        )}
        {size === 'mobile' && (
            <ButtonGhost.Icon>
                <StarGhost />
            </ButtonGhost.Icon>
        )}
    </ButtonGhost.View>
);

export const Default: Story = () => <Flyout.View isOpen />;

export const WithSearchInput: Story = () => (
    <Flyout.View
        isOpen
        search={(isInverted) => (
            <SearchInput
                isInverted={isInverted}
                placeholder="Suche"
                onSubmit={() => console.log('submit')}
            />
        )}
    />
);

export const WithNavList: Story = () => (
    <Flyout.View
        isOpen
        search={(isInverted) => (
            <SearchInput
                isInverted={isInverted}
                placeholder="Suche"
                onSubmit={() => console.log('submit')}
            />
        )}
    >
        <Flyout.NavList navGroups={[{ id: 'nav1', name: 'Zimmer' }]} />
    </Flyout.View>
);

export const FullWidth: Story = () => (
    <Flyout.View
        isOpen
        isLarge
        search={(isInverted) => (
            <SearchInput
                isInverted={isInverted}
                placeholder="Suche"
                onSubmit={() => console.log('submit')}
            />
        )}
    >
        <Flyout.NavList navGroups={[{ id: 'nav1', name: 'Zimmer' }]} />
    </Flyout.View>
);

export const FullWidthWithLogo: Story = () => (
    <Flyout.View
        isOpen
        isLarge
        search={(isInverted) => (
            <SearchInput
                isInverted={isInverted}
                placeholder="Suche"
                onSubmit={() => console.log('submit')}
            />
        )}
        logo={{
            icon: logoFn,
            link: '#logoLink',
        }}
    >
        <Flyout.NavList navGroups={[{ id: 'nav1', name: 'Zimmer' }]} />
    </Flyout.View>
);

export const FullWidthWithActions: Story = () => (
    <Flyout.View
        isOpen
        isLarge
        search={(isInverted) => (
            <SearchInput
                isInverted={isInverted}
                placeholder="Suche"
                onSubmit={() => console.log('submit')}
            />
        )}
        logo={{
            icon: logoFn,
            link: '#logoLink',
        }}
        primaryAction={primaryCtaFn}
        secondaryAction={secondaryCtaFn}
    >
        <Flyout.NavList navGroups={[{ id: 'nav1', name: 'Zimmer' }]} />
    </Flyout.View>
);

export const WithBackgroundSettings: Story = () => (
    <Flyout.View
        isOpen
        isLarge
        background={{
            opacity: 0.8,
            blur: '4px',
        }}
        search={(isInverted) => (
            <SearchInput
                isInverted={isInverted}
                placeholder="Suche"
                onSubmit={() => console.log('submit')}
            />
        )}
        logo={{
            icon: logoFn,
            link: '#logoLink',
        }}
        primaryAction={primaryCtaFn}
        secondaryAction={secondaryCtaFn}
    >
        <Flyout.NavList navGroups={[{ id: 'nav1', name: 'Zimmer' }]} />
    </Flyout.View>
);
