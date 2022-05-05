import * as React from 'react';
import { Meta, Story } from '@storybook/react';
/** Arrows **/
import { default as ArrowUp } from 'components/base/icons/ArrowUp';
import { default as ArrowDown } from 'components/base/icons/ArrowDown';
import { default as ArrowRight } from 'components/base/icons/ArrowRight';
import { default as ArrowRightGhost } from 'components/base/icons/ArrowRightGhost';
import { default as ArrowLeft } from 'components/base/icons/ArrowLeft';
import { default as ArrowLeftGhost } from 'components/base/icons/ArrowLeftGhost';
import { default as ArrowLeftRight } from 'components/base/icons/ArrowLeftRight';
import { default as AngleUp } from 'components/base/icons/AngleUp';
import { default as AngleDown } from 'components/base/icons/AngleDown';
import { default as AngleLeft } from 'components/base/icons/AngleLeft';
import { default as AngleRight } from 'components/base/icons/AngleRight';

/** Files **/
import { default as Excel } from 'components/base/icons/files/Excel';
import { default as Image } from 'components/base/icons/files/Image';
import { default as Pdf } from 'components/base/icons/files/Pdf';
import { default as PowerPoint } from 'components/base/icons/files/PowerPoint';
import { default as Word } from 'components/base/icons/files/Word';
import { default as Zip } from 'components/base/icons/files/Zip';
import { default as External } from 'components/base/icons/External';

/** Socials **/
import { default as Facebook } from 'components/base/icons/socials/Facebook';
import { default as Instagram } from 'components/base/icons/socials/Instagram';
import { default as LinkedIn } from 'components/base/icons/socials/LinkedIn';
import { default as Twitter } from 'components/base/icons/socials/Twitter';
import { default as Xing } from 'components/base/icons/socials/Xing';
import { default as Youtube } from 'components/base/icons/socials/Youtube';

/** Media **/
import { default as Mail } from 'components/base/icons/Mail';
import { default as Phone } from 'components/base/icons/Phone';
import { default as Play } from 'components/base/icons/Play';

/** Menu **/
import { default as MenuBurger } from 'components/base/icons/MenuBurger';
import { default as Language } from 'components/base/icons/Language';
import { default as Cross } from 'components/base/icons/Cross';
import { default as CrossSmall } from 'components/base/icons/CrossSmall';

/** Mixed **/
import { default as Check } from 'components/base/icons/Check';
import { default as Clock } from 'components/base/icons/Clock';
import { default as ExclamationMark } from 'components/base/icons/ExclamationMark';
import { default as FlyTo } from 'components/base/icons/FlyTo';
import { default as LocationPin } from 'components/base/icons/LocationPin';
import { default as Route } from 'components/base/icons/Route';
import { default as Star } from 'components/base/icons/Star';
import { default as Minus } from 'components/base/icons/Minus';
import { default as Plus } from 'components/base/icons/Plus';

export default {
    title: 'Base/Icons',
    subcomponents: {
        ArrowDown,
        ArrowUp,
        ArrowRight,
        ArrowRightGhost,
        ArrowLeft,
        ArrowLeftGhost,
        ArrowLeftRight,
        AngleUp,
        AngleDown,
        AngleLeft,
        AngleRight,
        Excel,
        Image,
        Pdf,
        PowerPoint,
        Word,
        Zip,
        External,
        Facebook,
        Instagram,
        LinkedIn,
        Twitter,
        Xing,
        Youtube,
        Mail,
        Phone,
        Play,
        MenuBurger,
        Language,
        Cross,
        CrossSmall,
        Check,
        Clock,
        ExclamationMark,
        FlyTo,
        LocationPin,
        Minus,
        Plus,
        Route,
        Star,
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

export const IconArrowDown: Story = () => <ArrowDown />;
IconArrowDown.storyName = 'Arrow Down';

export const IconArrowUp: Story = () => <ArrowUp />;
IconArrowUp.storyName = 'Arrow Up';

export const IconArrowRight: Story = () => <ArrowRight />;
IconArrowRight.storyName = 'Arrow Right';

export const IconArrowRightGhost: Story = () => <ArrowRightGhost />;
IconArrowRightGhost.storyName = 'Arrow Right Ghost';

export const IconArrowLeft: Story = () => <ArrowLeft />;
IconArrowLeft.storyName = 'Arrow Left';

export const IconArrowLeftGhost: Story = () => <ArrowLeftGhost />;
IconArrowLeftGhost.storyName = 'Arrow Left Ghost';

export const IconArrowLeftRight: Story = () => <ArrowLeftRight />;
IconArrowLeftRight.storyName = 'Arrow Left Right';

export const IconAngleDown: Story = () => <AngleDown />;
IconAngleDown.storyName = 'Angle Down';

export const IconAngleUp: Story = () => <AngleUp />;
IconAngleUp.storyName = 'Angle Up';

export const IconAngleRight: Story = () => <AngleRight />;
IconAngleRight.storyName = 'Angle Right';

export const IconAngleLeft: Story = () => <AngleLeft />;
IconAngleLeft.storyName = 'Angle Left';

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

export const IconExternal: Story = () => <External />;
IconExternal.storyName = 'External';

export const IconMail: Story = () => <Mail />;
IconMail.storyName = 'Mail';

export const IconPhone: Story = () => <Phone />;
IconPhone.storyName = 'Phone';

export const IconPlay: Story = () => <Play />;
IconPlay.storyName = 'Play';

export const IconMenuBurger: Story = () => <MenuBurger />;
IconMenuBurger.storyName = 'MenuBurger';

export const IconLanguage: Story = () => <Language />;
IconLanguage.storyName = 'Language';

export const IconCross: Story = () => <Cross />;
IconCross.storyName = 'Cross';

export const IconCrossSmall: Story = () => <CrossSmall />;
IconCrossSmall.storyName = 'CrossSmall';

export const IconCheck: Story = () => <Check />;
IconCheck.storyName = 'Check';

export const IconClock: Story = () => <Clock />;
IconClock.storyName = 'Clock';

export const IconExclamationMark: Story = () => <ExclamationMark />;
IconExclamationMark.storyName = 'ExclamationMark';

export const IconFlyTo: Story = () => <FlyTo />;
IconFlyTo.storyName = 'FlyTo';

export const IconLocationPin: Story = () => <LocationPin />;
IconLocationPin.storyName = 'LocationPin';

export const IconRoute: Story = () => <Route />;
IconRoute.storyName = 'Route';

export const IconStar: Story = () => <Star />;
IconStar.storyName = 'Star';

export const IconMinus: Story = () => <Minus />;
IconMinus.storyName = 'Minus';

export const IconPlus: Story = () => <Plus />;
IconPlus.storyName = 'Plus';
