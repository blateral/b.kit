import * as React from 'react';
import { Meta, Story } from '@storybook/react';
import Navigation from 'components/sections/navigation/Navigation';
import ButtonGhost from 'components/buttons/ButtonGhost';
import Button from 'components/buttons/Button';
import ArrowRight from 'components/base/icons/ArrowRight';
import Star from 'components/base/icons/Star';
import StarGhost from 'components/base/icons/StarGhost';
import SearchInput from 'components/fields/SearchInput';
import Magnifier from 'components/base/icons/Magnifier';
import Facebook from 'components/base/icons/socials/Facebook';
import LinkedIn from 'components/base/icons/socials/LinkedIn';
import Twitter from 'components/base/icons/socials/Twitter';
import Pointer from 'components/buttons/Pointer';

export default {
    title: 'Sections/Navigation',
    component: Navigation,
    decorators: [
        (Story) => (
            <div style={{ height: '120vh', width: '100%', background: 'grey' }}>
                <Story />
                <div
                    style={{
                        height: '600px',
                        background: '#4d4d4d',
                        color: 'white',
                    }}
                >
                    Content
                </div>
            </div>
        ),
    ],
    parameters: {
        status: {
            type: 'deprecated',
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
    if (!isInverted)
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
    size: 'mobile' | 'desktop';
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

const primaryPointer = ({ isInverted }: { isInverted?: boolean }) => (
    <Pointer.View
        as="a"
        href="#"
        isInverted={isInverted}
        onClick={console.log}
        textDecoration="none"
    >
        <Pointer.Label>Primary</Pointer.Label>
    </Pointer.View>
);

const secondaryPointer = ({ isInverted }: { isInverted?: boolean }) => (
    <Pointer.View
        as="a"
        href="#"
        isInverted={isInverted}
        onClick={console.log}
        textDecoration="none"
    >
        <Pointer.Label>Secondary</Pointer.Label>
    </Pointer.View>
);

const exampleNavItems = {
    activeNavItem: 'navGroup2.activeb',
    navItems: [
        {
            id: 'navGroup1',
            items: [
                {
                    id: 'start',
                    label: 'Startseite',
                    link: { href: '#' },
                    onClick: (id: string, fullId: string) =>
                        console.log(fullId),
                },
                {
                    id: 'about',
                    label: 'Über uns',
                    link: { href: '#' },
                    onClick: (id: string, fullId: string) =>
                        console.log(fullId),
                },
                {
                    id: 'corona',
                    label: 'Corona Info',
                    link: { href: '#' },
                    onClick: (id: string, fullId: string) =>
                        console.log(fullId),
                },
            ],
        },
        {
            id: 'navGroup2',
            name: 'Gruppe 2',
            items: [
                {
                    id: 'activea',
                    label: 'Unterpunkt 1',
                    link: { href: '#' },
                    onClick: (id: string, fullId: string) =>
                        console.log(fullId),
                },
                {
                    id: 'activeb',
                    label: 'Unterpunkt 2',
                    link: { href: '#' },
                    onClick: (id: string, fullId: string) =>
                        console.log(fullId),
                },
                {
                    id: 'activec',
                    label: 'Unterpunkt 3',
                    link: { href: '#' },
                    onClick: (id: string, fullId: string) =>
                        console.log(fullId),
                },
                {
                    id: 'actived',
                    label: 'Unterpunkt 4',
                    link: { href: '#' },
                    onClick: (id: string, fullId: string) =>
                        console.log(fullId),
                },
            ],
        },
        {
            id: 'navGroup3',
            name: 'Gruppe 3',
            items: [
                {
                    id: 'activea',
                    label: 'Unterpunkt 1',
                    link: { href: '#' },
                    onClick: (id: string, fullId: string) =>
                        console.log(fullId),
                },
                {
                    id: 'activeb',
                    label: 'Unterpunkt 2',
                    link: { href: '#' },
                    onClick: (id: string, fullId: string) =>
                        console.log(fullId),
                },
                {
                    id: 'activec',
                    label: 'Unterpunkt 3',
                    link: { href: '#' },
                    onClick: (id: string, fullId: string) =>
                        console.log(fullId),
                },
                {
                    id: 'actived',
                    label: 'Unterpunkt 4',
                    link: { href: '#' },
                    onClick: (id: string, fullId: string) =>
                        console.log(fullId),
                },
            ],
        },
        {
            id: 'navGroup3',
            isSmall: true,
            items: [
                {
                    id: 'add1',
                    label: 'Unterpunkt 1',
                    link: { href: '#' },
                    onClick: (id: string, fullId: string) =>
                        console.log(fullId),
                },
                {
                    id: 'add2',
                    label: 'Unterpunkt 2',
                    link: { href: '#' },
                    onClick: (id: string, fullId: string) =>
                        console.log(fullId),
                },
                {
                    id: 'add3',
                    label: 'Unterpunkt 3',
                    link: { href: '#' },
                    onClick: (id: string, fullId: string) =>
                        console.log(fullId),
                },
                {
                    id: 'add4',
                    label: 'Unterpunkt 4',
                    link: { href: '#' },
                    onClick: (id: string, fullId: string) =>
                        console.log(fullId),
                },
            ],
        },
    ],
};

export const WithLogo: Story = () => (
    <Navigation
        logo={{
            icon: logoFn,
            link: '#logoLink',
        }}
    />
);

export const WithTopbarActions: Story = () => (
    <Navigation
        logo={{
            icon: logoFn,
            link: '#logoLink',
        }}
        primaryCta={primaryCtaFn}
        secondaryCta={secondaryCtaFn}
    />
);

export const WithTopbarPointers: Story = () => (
    <Navigation
        logo={{
            icon: logoFn,
            link: '#logoLink',
        }}
        primaryCta={primaryPointer}
        secondaryCta={secondaryPointer}
    />
);

export const WithInvertedTopbar: Story = () => (
    <Navigation
        isTopbarInverted
        logo={{
            icon: logoFn,
            link: '#logoLink',
        }}
        primaryCta={primaryCtaFn}
        secondaryCta={secondaryCtaFn}
    />
);

export const PreventTopbarOverflow: Story = () => (
    <Navigation
        allowTopbarOverflow={false}
        logo={{
            icon: logoFn,
            link: '#logoLink',
        }}
        primaryCta={primaryCtaFn}
        secondaryCta={secondaryCtaFn}
    />
);

export const WithoutTopbarLargeState: Story = () => (
    <Navigation
        isTopbarLargeOnPageTop={false}
        logo={{
            icon: logoFn,
            link: '#logoLink',
        }}
        primaryCta={primaryCtaFn}
        secondaryCta={secondaryCtaFn}
    />
);

export const WithoutLargeAndOverflow: Story = () => (
    <Navigation
        allowTopbarOverflow={false}
        isTopbarLargeOnPageTop={false}
        logo={{
            icon: logoFn,
            link: '#logoLink',
        }}
        primaryCta={primaryCtaFn}
        secondaryCta={secondaryCtaFn}
    />
);

export const WithMenuNavItems: Story = () => (
    <Navigation
        logo={{
            icon: logoFn,
            link: '#logoLink',
        }}
        primaryCta={primaryCtaFn}
        secondaryCta={secondaryCtaFn}
        {...exampleNavItems}
    />
);

export const WithMenuSearchbar: Story = () => (
    <Navigation
        logo={{
            icon: logoFn,
            link: '#logoLink',
        }}
        primaryCta={primaryCtaFn}
        secondaryCta={secondaryCtaFn}
        {...exampleNavItems}
        search={(isInverted) => (
            <SearchInput
                isInverted={isInverted}
                placeholder="Search"
                submitIcon={<Magnifier />}
                onSubmit={() => console.log('submit')}
            />
        )}
    />
);

export const WithMenuSocials: Story = () => (
    <Navigation
        logo={{
            icon: logoFn,
            link: '#logoLink',
        }}
        primaryCta={primaryCtaFn}
        secondaryCta={secondaryCtaFn}
        {...exampleNavItems}
        search={(isInverted) => (
            <SearchInput
                isInverted={isInverted}
                placeholder="Search"
                submitIcon={<Magnifier />}
                onSubmit={() => console.log('submit')}
            />
        )}
        socials={[
            { href: '#', icon: <Facebook /> },
            { href: '#', icon: <LinkedIn /> },
            { href: '#', icon: <Twitter /> },
        ]}
    />
);

export const WithMirroredView: Story = () => (
    <Navigation
        isMirrored
        logo={{
            icon: logoFn,
            link: '#logoLink',
        }}
        primaryCta={primaryCtaFn}
        secondaryCta={secondaryCtaFn}
        {...exampleNavItems}
        search={(isInverted) => (
            <SearchInput
                isInverted={isInverted}
                placeholder="Search"
                submitIcon={<Magnifier />}
                onSubmit={() => console.log('submit')}
            />
        )}
        socials={[
            { href: '#', icon: <Facebook /> },
            { href: '#', icon: <LinkedIn /> },
            { href: '#', icon: <Twitter /> },
        ]}
    />
);

export const HideTopbarBackgroundUnderMenu: Story = () => (
    <Navigation
        hideTopbarBackUnderMenu
        logo={{
            icon: logoFn,
            link: '#logoLink',
        }}
        primaryCta={primaryCtaFn}
        secondaryCta={secondaryCtaFn}
        {...exampleNavItems}
        search={(isInverted) => (
            <SearchInput
                isInverted={isInverted}
                placeholder="Search"
                submitIcon={<Magnifier />}
                onSubmit={() => console.log('submit')}
            />
        )}
        socials={[
            { href: '#', icon: <Facebook /> },
            { href: '#', icon: <LinkedIn /> },
            { href: '#', icon: <Twitter /> },
        ]}
    />
);

export const WithInvertedMenu: Story = () => (
    <Navigation
        isMenuInverted
        logo={{
            icon: logoFn,
            link: '#logoLink',
        }}
        primaryCta={primaryCtaFn}
        secondaryCta={secondaryCtaFn}
        {...exampleNavItems}
        search={(isInverted) => (
            <SearchInput
                isInverted={isInverted}
                placeholder="Search"
                submitIcon={<Magnifier />}
                onSubmit={() => console.log('submit')}
            />
        )}
        socials={[
            { href: '#', icon: <Facebook /> },
            { href: '#', icon: <LinkedIn /> },
            { href: '#', icon: <Twitter /> },
        ]}
    />
);

export const WithLargeMenu: Story = () => (
    <Navigation
        isLargeMenu
        logo={{
            icon: logoFn,
            link: '#logoLink',
        }}
        primaryCta={primaryCtaFn}
        secondaryCta={secondaryCtaFn}
        {...exampleNavItems}
        search={(isInverted) => (
            <SearchInput
                isInverted={isInverted}
                placeholder="Search"
                submitIcon={<Magnifier />}
                onSubmit={() => console.log('submit')}
            />
        )}
        socials={[
            { href: '#', icon: <Facebook /> },
            { href: '#', icon: <LinkedIn /> },
            { href: '#', icon: <Twitter /> },
        ]}
    />
);

export const WithLargeMenuAndPointerActions: Story = () => (
    <Navigation
        isLargeMenu
        logo={{
            icon: logoFn,
            link: '#logoLink',
        }}
        primaryCta={primaryPointer}
        secondaryCta={secondaryPointer}
        {...exampleNavItems}
        search={(isInverted) => (
            <SearchInput
                isInverted={isInverted}
                placeholder="Search"
                submitIcon={<Magnifier />}
                onSubmit={() => console.log('submit')}
            />
        )}
        socials={[
            { href: '#', icon: <Facebook /> },
            { href: '#', icon: <LinkedIn /> },
            { href: '#', icon: <Twitter /> },
        ]}
    />
);

export const WithLargeMirroredMenu: Story = () => (
    <Navigation
        isLargeMenu
        isMirrored
        logo={{
            icon: logoFn,
            link: '#logoLink',
        }}
        primaryCta={primaryCtaFn}
        secondaryCta={secondaryCtaFn}
        {...exampleNavItems}
        search={(isInverted) => (
            <SearchInput
                isInverted={isInverted}
                placeholder="Search"
                submitIcon={<Magnifier />}
                onSubmit={() => console.log('submit')}
            />
        )}
        socials={[
            { href: '#', icon: <Facebook /> },
            { href: '#', icon: <LinkedIn /> },
            { href: '#', icon: <Twitter /> },
        ]}
    />
);

export const WithLargeMirroredMenuAndPointers: Story = () => (
    <Navigation
        isLargeMenu
        isMirrored
        logo={{
            icon: logoFn,
            link: '#logoLink',
        }}
        primaryCta={primaryPointer}
        secondaryCta={secondaryPointer}
        {...exampleNavItems}
        search={(isInverted) => (
            <SearchInput
                isInverted={isInverted}
                placeholder="Search"
                submitIcon={<Magnifier />}
                onSubmit={() => console.log('submit')}
            />
        )}
        socials={[
            { href: '#', icon: <Facebook /> },
            { href: '#', icon: <LinkedIn /> },
            { href: '#', icon: <Twitter /> },
        ]}
    />
);

export const WithInvertedLargeMenu: Story = () => (
    <Navigation
        isLargeMenu
        isMenuInverted
        logo={{
            icon: logoFn,
            link: '#logoLink',
        }}
        primaryCta={primaryCtaFn}
        secondaryCta={secondaryCtaFn}
        {...exampleNavItems}
        search={(isInverted) => (
            <SearchInput
                isInverted={isInverted}
                placeholder="Search"
                submitIcon={<Magnifier />}
                onSubmit={() => console.log('submit')}
            />
        )}
        socials={[
            { href: '#', icon: <Facebook /> },
            { href: '#', icon: <LinkedIn /> },
            { href: '#', icon: <Twitter /> },
        ]}
    />
);
