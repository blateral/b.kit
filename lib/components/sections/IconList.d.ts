import * as React from 'react';
declare const IconList: React.FC<{
    title?: string;
    superTitle?: string;
    text?: string;
    bgMode?: 'full' | 'splitted';
    primaryItems?: {
        src: string;
        alt?: string;
    }[];
    secondaryItems?: {
        src: string;
        alt?: string;
    }[];
    primaryAction?: (isInverted?: boolean) => React.ReactNode;
    secondaryAction?: (isInverted?: boolean) => React.ReactNode;
    isInverted?: boolean;
    isCentered?: boolean;
}>;
export default IconList;
//# sourceMappingURL=IconList.d.ts.map