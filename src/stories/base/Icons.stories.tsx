import React from 'react';
import { Meta, Story } from '@storybook/react';

/** Actions */
import CalendarToday from 'components/base/icons/CalendarToday';

/** Arrows **/
import ArrowUp from 'components/base/icons/ArrowUp';
import ArrowDown from 'components/base/icons/ArrowDown';
import ArrowRight from 'components/base/icons/ArrowRight';
import ArrowRightGhost from 'components/base/icons/ArrowRightGhost';
import ArrowLeft from 'components/base/icons/ArrowLeft';
import ArrowLeftGhost from 'components/base/icons/ArrowLeftGhost';
import ArrowLeftRight from 'components/base/icons/ArrowLeftRight';
import AngleUp from 'components/base/icons/AngleUp';
import AngleDown from 'components/base/icons/AngleDown';
import AngleLeft from 'components/base/icons/AngleLeft';
import AngleRight from 'components/base/icons/AngleRight';

/** Files **/
import UploadFile from 'components/base/icons/files/UploadFile';
import Excel from 'components/base/icons/files/Excel';
import Image from 'components/base/icons/files/Image';
import Pdf from 'components/base/icons/files/Pdf';
import PowerPoint from 'components/base/icons/files/PowerPoint';
import Word from 'components/base/icons/files/Word';
import Zip from 'components/base/icons/files/Zip';
import External from 'components/base/icons/External';

/** Socials **/
import Facebook from 'components/base/icons/socials/Facebook';
import Instagram from 'components/base/icons/socials/Instagram';
import LinkedIn from 'components/base/icons/socials/LinkedIn';
import Twitter from 'components/base/icons/socials/Twitter';
import Xing from 'components/base/icons/socials/Xing';
import Youtube from 'components/base/icons/socials/Youtube';

/** Media **/
import Mail from 'components/base/icons/Mail';
import Phone from 'components/base/icons/Phone';
import Play from 'components/base/icons/Play';

/** Menu **/
import MenuBurger from 'components/base/icons/MenuBurger';
import Language from 'components/base/icons/Language';
import Cross from 'components/base/icons/Cross';
import CrossSmall from 'components/base/icons/CrossSmall';

/** Mixed **/
import Check from 'components/base/icons/Check';
import Clock from 'components/base/icons/Clock';
import Info from 'components/base/icons/Info';
import FlyTo from 'components/base/icons/FlyTo';
import LocationPin from 'components/base/icons/LocationPin';
import Route from 'components/base/icons/Route';
import Star from 'components/base/icons/Star';
import Minus from 'components/base/icons/Minus';
import Plus from 'components/base/icons/Plus';
import DeleteForever from 'components/base/icons/DeleteForever';

export default {
    title: 'Base/Icons',
    subcomponents: {
        CalendarToday,
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
        UploadFile,
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
        Info,
        FlyTo,
        LocationPin,
        Minus,
        Plus,
        Route,
        Star,
        DeleteForever,
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

export const IconCalendarToday: Story = () => <CalendarToday />;
IconCalendarToday.storyName = 'Calendar Today';

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

export const IconUploadFile: Story = () => <UploadFile />;
IconUploadFile.storyName = 'Upload File';

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

export const IconInfo: Story = () => <Info />;
IconInfo.storyName = 'Info';

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

export const IconDeleteForever: Story = () => <DeleteForever />;
IconDeleteForever.storyName = 'Delete Forever';
