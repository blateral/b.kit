import * as React from 'react';
import { FontOptionType, FontType } from '../../theme';
declare type CopyType = Exclude<FontType, 'heading-1' | 'heading-2' | 'heading-3' | 'heading-4' | 'callout' | 'super' | 'label'>;
declare const Copy: React.FC<{
    textColor?: string;
    type?: CopyType;
    size?: FontOptionType;
    columns?: boolean;
    className?: string;
}>;
export default Copy;
//# sourceMappingURL=Copy.d.ts.map