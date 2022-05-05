/* eslint-disable react/display-name */
import * as React from 'react';
import { Meta, Story } from '@storybook/react';
import CrossPromotion, {
    CrossPromotionComponent,
} from 'components/sections/CrossPromotion';
import Route from 'components/base/icons/Route';
import Star from 'components/base/icons/Star';
import Phone from 'components/base/icons/Phone';

export default {
    title: 'Sections/CrossPromotion',
    component: CrossPromotionComponent,
    parameters: {
        status: {
            type: ['preview', 'qsReady'],
        },
    },
} as Meta;
// #TODO: Bildgrößen auf Mobile checken
export const SingleImageFull: Story = () => (
    <CrossPromotion
        main={[
            {
                size: 'full',
                image: {
                    small: 'https://unsplash.it/610/244?image=409',
                    medium: 'https://unsplash.it/800/320?image=409',
                    large: 'https://unsplash.it/992/397?image=409',
                    xlarge: 'https://unsplash.it/1410/564?image=409',
                    ratios: {
                        small: { w: 5, h: 2 },
                    },
                },
                title: 'Lorem ipsum dolor sit amet',
            },
        ]}
    />
);

export const WithSuperTitle: Story = () => (
    <CrossPromotion
        main={[
            {
                size: 'full',
                image: {
                    small: 'https://unsplash.it/610/244?image=409',
                    medium: 'https://unsplash.it/800/320?image=409',
                    large: 'https://unsplash.it/992/397?image=409',
                    xlarge: 'https://unsplash.it/1410/564?image=409',
                    ratios: {
                        small: { w: 1, h: 1 },
                    },
                },
                title: 'Lorem ipsum dolor sit amet',
                superTitle: 'Lorem ipsum dolor sit amet dolor',
            },
        ]}
    />
);

export const TwoHalfCardsRatioA: Story = () => (
    <CrossPromotion
        main={[
            {
                size: 'half',
                image: {
                    small: 'https://unsplash.it/619/619?image=409',
                    medium: 'https://unsplash.it/791/791?image=409',
                    semilarge: 'https://unsplash.it/481/481?image=409',
                    large: 'https://unsplash.it/686/686?image=409',
                    xlarge: 'https://unsplash.it/690/690?image=409',
                    ratios: {
                        small: { w: 1, h: 1 },
                    },
                },
                title: 'Lorem ipsum dolor sit amet',
                superTitle: 'Lorem ipsum dolor sit amet dolor',
            },
            {
                size: 'half',
                image: {
                    small: 'https://unsplash.it/619/619?image=409',
                    medium: 'https://unsplash.it/791/791?image=409',
                    semilarge: 'https://unsplash.it/481/481?image=409',
                    large: 'https://unsplash.it/686/686?image=409',
                    xlarge: 'https://unsplash.it/690/690?image=409',
                    ratios: {
                        small: { w: 1, h: 1 },
                    },
                },
                title: 'Lorem ipsum dolor sit amet',
                superTitle: 'Lorem ipsum dolor sit amet dolor',
            },
        ]}
    />
);

TwoHalfCardsRatioA.storyName = 'Two half cards with ratio 1x1';

export const TwoHalfCardsRatioB: Story = () => (
    <CrossPromotion
        main={[
            {
                size: 'half',
                image: {
                    small: 'https://unsplash.it/619/826?image=410',
                    medium: 'https://unsplash.it/791/1055?image=410',
                    semilarge: 'https://unsplash.it/689/920?image=410',
                    large: 'https://unsplash.it/790/1054?image=410',
                    ratios: {
                        small: { w: 3, h: 4 },
                    },
                },
                title: 'Lorem ipsum dolor sit amet',
                superTitle: 'Lorem ipsum dolor sit amet dolor',
            },
            {
                size: 'half',
                image: {
                    small: 'https://unsplash.it/619/826?image=410',
                    medium: 'https://unsplash.it/791/1055?image=410',
                    semilarge: 'https://unsplash.it/689/920?image=410',
                    large: 'https://unsplash.it/790/1054?image=410',
                    ratios: {
                        small: { w: 3, h: 4 },
                    },
                },
                title: 'Lorem ipsum dolor sit amet',
                superTitle: 'Lorem ipsum dolor sit amet dolor',
            },
        ]}
    />
);

TwoHalfCardsRatioB.storyName = 'Two half cards with ratio 3x4';

export const TwoHalfCardsRatioC: Story = () => (
    <CrossPromotion
        main={[
            {
                size: 'half',
                image: {
                    small: 'https://unsplash.it/619/464?image=409',
                    medium: 'https://unsplash.it/983/737?image=409',
                    large: 'https://unsplash.it/1399/1050?image=409',
                    xlarge: 'https://unsplash.it/1400/1050?image=409',
                    ratios: {
                        small: { w: 4, h: 3 },
                    },
                },
                title: 'Lorem ipsum dolor sit amet',
                superTitle: 'Lorem ipsum dolor sit amet dolor',
            },
            {
                size: 'half',
                image: {
                    small: 'https://unsplash.it/619/464?image=409',
                    medium: 'https://unsplash.it/983/737?image=409',
                    large: 'https://unsplash.it/1399/1050?image=409',
                    xlarge: 'https://unsplash.it/1400/1050?image=409',
                    ratios: {
                        small: { w: 4, h: 3 },
                    },
                },
                title: 'Lorem ipsum dolor sit amet',
                superTitle: 'Lorem ipsum dolor sit amet dolor',
            },
        ]}
    />
);

TwoHalfCardsRatioC.storyName = 'Two half cards with ratio 4x3';

export const MixedImages: Story = () => (
    <CrossPromotion
        main={[
            {
                size: 'half',
                image: {
                    small: 'https://unsplash.it/619/826?image=410',
                    medium: 'https://unsplash.it/791/1055?image=410',
                    semilarge: 'https://unsplash.it/689/920?image=410',
                    large: 'https://unsplash.it/790/1054?image=410',
                    ratios: {
                        small: { w: 3, h: 4 },
                    },
                },
                title: 'Lorem ipsum dolor sit amet',
                superTitle: 'Lorem ipsum dolor sit amet dolor',
            },
        ]}
        aside={[
            {
                size: 'half',
                image: {
                    small: 'https://unsplash.it/619/464?image=409',
                    medium: 'https://unsplash.it/983/737?image=409',
                    large: 'https://unsplash.it/1399/1050?image=409',
                    xlarge: 'https://unsplash.it/1400/1050?image=409',
                    ratios: {
                        small: { w: 4, h: 3 },
                    },
                },
                title: 'Lorem ipsum dolor sit amet',
                superTitle: 'Lorem ipsum dolor sit amet dolor',
            },
            {
                size: 'half',
                image: {
                    small: 'https://unsplash.it/619/464?image=410',
                    medium: 'https://unsplash.it/983/737?image=410',
                    large: 'https://unsplash.it/1399/1050?image=410',
                    xlarge: 'https://unsplash.it/1400/1050?image=410',
                    ratios: {
                        small: { w: 4, h: 3 },
                    },
                },
                title: 'Lorem ipsum dolor sit amet',
                superTitle: 'Lorem ipsum dolor sit amet dolor',
            },
        ]}
    />
);

export const WithFullBackground: Story = () => (
    <CrossPromotion
        bgMode="full"
        main={[
            {
                size: 'half',
                image: {
                    small: 'https://unsplash.it/619/826?image=410',
                    medium: 'https://unsplash.it/791/1055?image=410',
                    semilarge: 'https://unsplash.it/689/920?image=410',
                    large: 'https://unsplash.it/790/1054?image=410',
                    ratios: {
                        small: { w: 3, h: 4 },
                    },
                },
                title: 'Lorem ipsum dolor sit amet',
                superTitle: 'Lorem ipsum dolor sit amet dolor',
            },
        ]}
        aside={[
            {
                size: 'half',
                image: {
                    small: 'https://unsplash.it/619/464?image=409',
                    medium: 'https://unsplash.it/983/737?image=409',
                    large: 'https://unsplash.it/1399/1050?image=409',
                    xlarge: 'https://unsplash.it/1400/1050?image=409',
                    ratios: {
                        small: { w: 4, h: 3 },
                    },
                },
                title: 'Lorem ipsum dolor sit amet',
                superTitle: 'Lorem ipsum dolor sit amet dolor',
            },
            {
                size: 'half',
                image: {
                    small: 'https://unsplash.it/619/464?image=410',
                    medium: 'https://unsplash.it/983/737?image=410',
                    large: 'https://unsplash.it/1399/1050?image=410',
                    xlarge: 'https://unsplash.it/1400/1050?image=410',
                    ratios: {
                        small: { w: 4, h: 3 },
                    },
                },
                title: 'Lorem ipsum dolor sit amet',
                superTitle: 'Lorem ipsum dolor sit amet dolor',
            },
        ]}
    />
);

export const SplittedBackground: Story = () => (
    <CrossPromotion
        bgMode="splitted"
        main={[
            {
                size: 'half',
                image: {
                    small: 'https://unsplash.it/619/826?image=410',
                    medium: 'https://unsplash.it/791/1055?image=410',
                    semilarge: 'https://unsplash.it/689/920?image=410',
                    large: 'https://unsplash.it/790/1054?image=410',
                    ratios: {
                        small: { w: 3, h: 4 },
                    },
                },
                title: 'Lorem ipsum dolor sit amet',
                superTitle: 'Lorem ipsum dolor sit amet dolor',
            },
        ]}
        aside={[
            {
                size: 'half',
                image: {
                    small: 'https://unsplash.it/619/464?image=409',
                    medium: 'https://unsplash.it/983/737?image=409',
                    large: 'https://unsplash.it/1399/1050?image=409',
                    xlarge: 'https://unsplash.it/1400/1050?image=409',
                    ratios: {
                        small: { w: 4, h: 3 },
                    },
                },
                title: 'Lorem ipsum dolor sit amet',
                superTitle: 'Lorem ipsum dolor sit amet dolor',
            },
            {
                size: 'half',
                image: {
                    small: 'https://unsplash.it/619/464?image=410',
                    medium: 'https://unsplash.it/983/737?image=410',
                    large: 'https://unsplash.it/1399/1050?image=410',
                    xlarge: 'https://unsplash.it/1400/1050?image=410',
                    ratios: {
                        small: { w: 4, h: 3 },
                    },
                },
                title: 'Lorem ipsum dolor sit amet',
                superTitle: 'Lorem ipsum dolor sit amet dolor',
            },
        ]}
    />
);

export const Inverted: Story = () => (
    <CrossPromotion
        bgMode="inverted"
        main={[
            {
                size: 'half',
                image: {
                    small: 'https://unsplash.it/619/826?image=410',
                    medium: 'https://unsplash.it/791/1055?image=410',
                    semilarge: 'https://unsplash.it/689/920?image=410',
                    large: 'https://unsplash.it/790/1054?image=410',
                    ratios: {
                        small: { w: 3, h: 4 },
                    },
                },
                title: 'Lorem ipsum dolor sit amet',
                superTitle: 'Lorem ipsum dolor sit amet dolor',
            },
        ]}
        aside={[
            {
                size: 'half',
                image: {
                    small: 'https://unsplash.it/619/464?image=409',
                    medium: 'https://unsplash.it/983/737?image=409',
                    large: 'https://unsplash.it/1399/1050?image=409',
                    xlarge: 'https://unsplash.it/1400/1050?image=409',
                    ratios: {
                        small: { w: 4, h: 3 },
                    },
                },
                title: 'Lorem ipsum dolor sit amet',
                superTitle: 'Lorem ipsum dolor sit amet dolor',
            },
            {
                size: 'half',
                image: {
                    small: 'https://unsplash.it/619/464?image=410',
                    medium: 'https://unsplash.it/983/737?image=410',
                    large: 'https://unsplash.it/1399/1050?image=410',
                    xlarge: 'https://unsplash.it/1400/1050?image=410',
                    ratios: {
                        small: { w: 4, h: 3 },
                    },
                },
                title: 'Lorem ipsum dolor sit amet',
                superTitle: 'Lorem ipsum dolor sit amet dolor',
            },
        ]}
    />
);

export const isMirrored: Story = () => (
    <CrossPromotion
        isMirrored
        main={[
            {
                size: 'half',
                image: {
                    small: 'https://unsplash.it/619/826?image=410',
                    medium: 'https://unsplash.it/791/1055?image=410',
                    semilarge: 'https://unsplash.it/689/920?image=410',
                    large: 'https://unsplash.it/790/1054?image=410',
                    ratios: {
                        small: { w: 3, h: 4 },
                    },
                },
                title: 'Lorem ipsum dolor sit amet',
                superTitle: 'Lorem ipsum dolor sit amet dolor',
            },
        ]}
        aside={[
            {
                size: 'half',
                image: {
                    small: 'https://unsplash.it/619/464?image=409',
                    medium: 'https://unsplash.it/983/737?image=409',
                    large: 'https://unsplash.it/1399/1050?image=409',
                    xlarge: 'https://unsplash.it/1400/1050?image=409',
                    ratios: {
                        small: { w: 4, h: 3 },
                    },
                },
                title: 'Lorem ipsum dolor sit amet',
                superTitle: 'Lorem ipsum dolor sit amet dolor',
            },
            {
                size: 'half',
                image: {
                    small: 'https://unsplash.it/619/464?image=410',
                    medium: 'https://unsplash.it/983/737?image=410',
                    large: 'https://unsplash.it/1399/1050?image=410',
                    xlarge: 'https://unsplash.it/1400/1050?image=410',
                    ratios: {
                        small: { w: 4, h: 3 },
                    },
                },
                title: 'Lorem ipsum dolor sit amet',
                superTitle: 'Lorem ipsum dolor sit amet dolor',
            },
        ]}
    />
);

export const isMirroredAndWithSplittedBackground: Story = () => (
    <CrossPromotion
        isMirrored
        bgMode="splitted"
        main={[
            {
                size: 'half',
                image: {
                    small: 'https://unsplash.it/619/826?image=410',
                    medium: 'https://unsplash.it/791/1055?image=410',
                    semilarge: 'https://unsplash.it/689/920?image=410',
                    large: 'https://unsplash.it/790/1054?image=410',
                    ratios: {
                        small: { w: 3, h: 4 },
                    },
                },
                title: 'Lorem ipsum dolor sit amet',
                superTitle: 'Lorem ipsum dolor sit amet dolor',
            },
        ]}
        aside={[
            {
                size: 'half',
                image: {
                    small: 'https://unsplash.it/619/464?image=409',
                    medium: 'https://unsplash.it/983/737?image=409',
                    large: 'https://unsplash.it/1399/1050?image=409',
                    xlarge: 'https://unsplash.it/1400/1050?image=409',
                    ratios: {
                        small: { w: 4, h: 3 },
                    },
                },
                title: 'Lorem ipsum dolor sit amet',
                superTitle: 'Lorem ipsum dolor sit amet dolor',
            },
            {
                size: 'half',
                image: {
                    small: 'https://unsplash.it/619/464?image=410',
                    medium: 'https://unsplash.it/983/737?image=410',
                    large: 'https://unsplash.it/1399/1050?image=410',
                    xlarge: 'https://unsplash.it/1400/1050?image=410',
                    ratios: {
                        small: { w: 4, h: 3 },
                    },
                },
                title: 'Lorem ipsum dolor sit amet',
                superTitle: 'Lorem ipsum dolor sit amet dolor',
            },
        ]}
    />
);

export const WithLinks: Story = () => (
    <CrossPromotion
        main={[
            {
                link: {
                    href: '#0',
                },
                size: 'half',
                image: {
                    small: 'https://unsplash.it/619/826?image=410',
                    medium: 'https://unsplash.it/791/1055?image=410',
                    semilarge: 'https://unsplash.it/689/920?image=410',
                    large: 'https://unsplash.it/790/1054?image=410',
                    ratios: {
                        small: { w: 3, h: 4 },
                    },
                },
                title: 'Lorem ipsum dolor sit amet',
                superTitle: 'Lorem ipsum dolor sit amet dolor',
            },
        ]}
        aside={[
            {
                link: {
                    href: '#0',
                    isExternal: true,
                },
                size: 'half',
                image: {
                    small: 'https://unsplash.it/619/464?image=409',
                    medium: 'https://unsplash.it/983/737?image=409',
                    large: 'https://unsplash.it/1399/1050?image=409',
                    xlarge: 'https://unsplash.it/1400/1050?image=409',
                    ratios: {
                        small: { w: 4, h: 3 },
                    },
                },
                title: 'Lorem ipsum dolor sit amet',
                superTitle: 'Lorem ipsum dolor sit amet dolor',
            },
            {
                link: {
                    href: '#0',
                    isExternal: true,
                },
                size: 'half',
                image: {
                    small: 'https://unsplash.it/619/464?image=410',
                    medium: 'https://unsplash.it/983/737?image=410',
                    large: 'https://unsplash.it/1399/1050?image=410',
                    xlarge: 'https://unsplash.it/1400/1050?image=410',
                    ratios: {
                        small: { w: 4, h: 3 },
                    },
                },
                title: 'Lorem ipsum dolor sit amet',
                superTitle: 'Lorem ipsum dolor sit amet dolor',
            },
        ]}
    />
);

export const CustomLinkIcons: Story = () => (
    <CrossPromotion
        externalLinkIcon={<Route />}
        main={[
            {
                link: {
                    href: '#0',
                },
                size: 'half',
                image: {
                    small: 'https://unsplash.it/619/826?image=410',
                    medium: 'https://unsplash.it/791/1055?image=410',
                    semilarge: 'https://unsplash.it/689/920?image=410',
                    large: 'https://unsplash.it/790/1054?image=410',
                    ratios: {
                        small: { w: 3, h: 4 },
                    },
                },
                title: 'Lorem ipsum dolor sit amet',
                superTitle: 'Lorem ipsum dolor sit amet dolor',
            },
        ]}
        aside={[
            {
                link: {
                    href: '#0',
                    isExternal: true,
                },
                size: 'half',
                image: {
                    small: 'https://unsplash.it/619/464?image=409',
                    medium: 'https://unsplash.it/983/737?image=409',
                    large: 'https://unsplash.it/1399/1050?image=409',
                    xlarge: 'https://unsplash.it/1400/1050?image=409',
                    ratios: {
                        small: { w: 4, h: 3 },
                    },
                },
                title: 'Lorem ipsum dolor sit amet',
                superTitle: 'Lorem ipsum dolor sit amet dolor',
            },
            {
                link: {
                    href: '#0',
                    isExternal: true,
                },
                size: 'half',
                image: {
                    small: 'https://unsplash.it/619/464?image=410',
                    medium: 'https://unsplash.it/983/737?image=410',
                    large: 'https://unsplash.it/1399/1050?image=410',
                    xlarge: 'https://unsplash.it/1400/1050?image=410',
                    ratios: {
                        small: { w: 4, h: 3 },
                    },
                },
                title: 'Lorem ipsum dolor sit amet',
                superTitle: 'Lorem ipsum dolor sit amet dolor',
            },
        ]}
    />
);

export const WithIcons: Story = () => (
    <CrossPromotion
        externalLinkIcon={<Route />}
        main={[
            {
                link: {
                    href: '#0',
                },
                size: 'half',
                image: {
                    small: 'https://unsplash.it/619/826?image=410',
                    medium: 'https://unsplash.it/791/1055?image=410',
                    semilarge: 'https://unsplash.it/689/920?image=410',
                    large: 'https://unsplash.it/790/1054?image=410',
                    ratios: {
                        small: { w: 3, h: 4 },
                    },
                },
                title: 'Lorem ipsum dolor sit amet',
                superTitle: 'Lorem ipsum dolor sit amet dolor',
                icon: () => <Star />,
            },
        ]}
        aside={[
            {
                link: {
                    href: '#0',
                    isExternal: true,
                },
                size: 'half',
                image: {
                    small: 'https://unsplash.it/619/464?image=409',
                    medium: 'https://unsplash.it/983/737?image=409',
                    large: 'https://unsplash.it/1399/1050?image=409',
                    xlarge: 'https://unsplash.it/1400/1050?image=409',
                    ratios: {
                        small: { w: 4, h: 3 },
                    },
                },
                title: 'Lorem ipsum dolor sit amet',
                superTitle: 'Lorem ipsum dolor sit amet dolor',
                icon: () => <Phone />,
            },
            {
                link: {
                    href: '#0',
                    isExternal: true,
                },
                size: 'half',
                image: {
                    small: 'https://unsplash.it/619/464?image=410',
                    medium: 'https://unsplash.it/983/737?image=410',
                    large: 'https://unsplash.it/1399/1050?image=410',
                    xlarge: 'https://unsplash.it/1400/1050?image=410',
                    ratios: {
                        small: { w: 4, h: 3 },
                    },
                },
                title: 'Lorem ipsum dolor sit amet',
                superTitle: 'Lorem ipsum dolor sit amet dolor',
            },
        ]}
    />
);
