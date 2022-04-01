import * as React from 'react';
import { Meta, Story } from '@storybook/react';

import ArrowRight from 'components/base/icons/ArrowRight';
import ArrowRightGhost from 'components/base/icons/ArrowRightGhost';
import ArrowLeftGhost from 'components/base/icons/ArrowLeftGhost';
import ArrowLeftRight from 'components/base/icons/ArrowLeftRight';
import AngleRight from 'components/base/icons/AngleRight';
import ArrowDown from 'components/base/icons/ArrowDown';
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
import External from 'components/base/icons/External';
import ExclamationMark from 'components/base/icons/ExclamationMark';
import Document from 'components/base/icons/files/Document';
import Excel from 'components/base/icons/files/Excel';
import Image from 'components/base/icons/files/Image';
import Pdf from 'components/base/icons/files/Pdf';
import PowerPoint from 'components/base/icons/files/PowerPoint';
import Word from 'components/base/icons/files/Word';
import Zip from 'components/base/icons/files/Zip';

export default {
    title: 'Base/Icons',
    subcomponents: {
        ArrowRight,
        ArrowRightGhost,
        ArrowLeftGhost,
        ArrowLeftRight,
        AngleRight,
        ArrowDown,
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
        External,
        ExclamationMark,
        Document,
        Excel,
        Image,
        Pdf,
        PowerPoint,
        Word,
        Zip,
    },
    decorators: [
        (Story) => (
            <div style={{ color: 'black', padding: '20px' }}>
                <Story />
            </div>
        ),
    ],
    parameters: {
        status: {
            type: '',
        },
    },
} as Meta;

export const IconArrowRight: Story = () => <ArrowRight />;
IconArrowRight.storyName = 'Arrow right';

export const IconArrowRightGhost: Story = () => <ArrowRightGhost />;
IconArrowRightGhost.storyName = 'Arrow right ghost';

export const IconArrowLeftGhost: Story = () => <ArrowLeftGhost />;
IconArrowLeftGhost.storyName = 'Arrow left ghost';

export const IconArrowLeftRight: Story = () => <ArrowLeftRight />;
IconArrowLeftRight.storyName = 'Arrow left right';

export const IconAngleRight: Story = () => <AngleRight />;
IconAngleRight.storyName = 'Angle right';

export const IconArrowDown: Story = () => <ArrowDown />;
IconArrowDown.storyName = 'Arrow down';

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

export const IconExternal: Story = () => <External />;
IconExternal.storyName = 'External';

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

export const IconExclamationMark: Story = () => <ExclamationMark />;
IconExclamationMark.storyName = 'ExclamationMark';

export const IconDocument: Story = () => <Document />;
IconDocument.storyName = 'Document';

export const IconExcel: Story = () => <Excel />;
IconExcel.storyName = 'Excel';

export const IconImage: Story = () => <Image />;
IconImage.storyName = 'Image';

export const IconPdf: Story = () => <Pdf />;
IconPdf.storyName = 'Pdf';

export const IconPowerPoint: Story = () => <PowerPoint />;
IconPowerPoint.storyName = 'PowerPoint';

export const IconWord: Story = () => <Word />;
IconWord.storyName = 'Word';

export const IconZip: Story = () => <Zip />;
IconZip.storyName = 'Zip';
