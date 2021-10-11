import * as React from 'react';
import { Meta, Story } from '@storybook/react';

import ArrowRight from 'components/base/icons/ArrowRight';
import ArrowRightGhost from 'components/base/icons/ArrowRightGhost';
import ArrowLeftGhost from 'components/base/icons/ArrowLeftGhost';
import ArrowLeftRight from 'components/base/icons/ArrowLeftRight';
import Cross from 'components/base/icons/Cross';
import CrossSmall from 'components/base/icons/CrossSmall';
import Magnifier from 'components/base/icons/Magnifier';
import MenuBurger from 'components/base/icons/MenuBurger';
import Play from 'components/base/icons/Play';
import Star from 'components/base/icons/Star';
import StarGhost from 'components/base/icons/StarGhost';
import Phone from 'components/base/icons/Phone';
import Route from 'components/base/icons/Route';
import Mail from 'components/base/icons/Mail';
import FlyTo from 'components/base/icons/FlyTo';
import Facebook from 'components/base/icons/socials/Facebook';
import Instagram from 'components/base/icons/socials/Instagram';
import LinkedIn from 'components/base/icons/socials/LinkedIn';
import Twitter from 'components/base/icons/socials/Twitter';
import Xing from 'components/base/icons/socials/Xing';
import Youtube from 'components/base/icons/socials/Youtube';

export default {
    title: 'Base/Icons',
    subcomponents: {
        ArrowRight,
        ArrowRightGhost,
        ArrowLeftGhost,
        ArrowLeftRight,
        Cross,
        CrossSmall,
        Magnifier,
        MenuBurger,
        Play,
        Star,
        StarGhost,
        Facebook,
        Instagram,
        Twitter,
        LinkedIn,
        Youtube,
        Phone,
        Mail,
        FlyTo,
        Route,
    },
    decorators: [
        (Story) => (
            <div style={{ color: 'black', padding: '20px' }}>
                <Story />
            </div>
        ),
    ],
} as Meta;

export const IconArrowRight: Story = () => <ArrowRight />;
IconArrowRight.storyName = 'Arrow right';

export const IconArrowRightGhost: Story = () => <ArrowRightGhost />;
IconArrowRightGhost.storyName = 'Arrow right ghost';

export const IconArrowLeftGhost: Story = () => <ArrowLeftGhost />;
IconArrowLeftGhost.storyName = 'Arrow left ghost';

export const IconArrowLeftRight: Story = () => <ArrowLeftRight />;
IconArrowLeftRight.storyName = 'Arrow left right';

export const IconCross: Story = () => <Cross />;
IconCross.storyName = 'Cross';

export const IconCrossSmall: Story = () => <CrossSmall />;
IconCrossSmall.storyName = 'Cross small';

export const IconMagnifier: Story = () => <Magnifier />;
IconMagnifier.storyName = 'Magnifier';

export const IconMenuBurger: Story = () => <MenuBurger />;
IconMenuBurger.storyName = 'MenuBurger';

export const IconPlay: Story = () => <Play />;
IconPlay.storyName = 'Play';

export const IconStar: Story = () => <Star />;
IconStar.storyName = 'Star';

export const IconStarGhost: Story = () => <StarGhost />;
IconStarGhost.storyName = 'Star ghost';

export const IconPhone: Story = () => <Phone />;
IconPhone.storyName = 'Phone';

export const IconMail: Story = () => <Mail />;
IconMail.storyName = 'Mail';

export const IconRoute: Story = () => <Route />;
IconRoute.storyName = 'Routing';

export const IconFlyTo: Story = () => <FlyTo />;
IconFlyTo.storyName = 'Fly to';

export const IconFacebook: Story = () => <Facebook />;
IconFacebook.storyName = 'Facebook logo';

export const IconInstagram: Story = () => <Instagram />;
IconInstagram.storyName = 'Instagram logo';

export const IconLinkedIn: Story = () => <LinkedIn />;
IconLinkedIn.storyName = 'LinkedIn logo';

export const IconTwitter: Story = () => <Twitter />;
IconTwitter.storyName = 'Twitter logo';

export const IconXing: Story = () => <Xing />;
IconXing.storyName = 'Xing logo';

export const IconYoutube: Story = () => <Youtube />;
IconYoutube.storyName = 'Youtube logo';
