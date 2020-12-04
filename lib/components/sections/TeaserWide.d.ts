import React, { FC } from 'react';
import { HeadlineTag } from '../typography/Heading';
import { ImageProps } from '../blocks/Image';
declare const Teaser: FC<{
    isInverted?: boolean;
    isMirrored?: boolean;
    hasBack?: boolean;
    superTitle?: string;
    title?: string;
    titleAs?: HeadlineTag;
    image?: Omit<ImageProps, 'coverSpace'> & {
        description?: string;
    };
    intro?: string;
    text?: string;
    subText?: string;
    primaryAction?: (isInverted?: boolean) => React.ReactNode;
    secondaryAction?: (isInverted?: boolean) => React.ReactNode;
}>;
export default Teaser;
//# sourceMappingURL=TeaserWide.d.ts.map