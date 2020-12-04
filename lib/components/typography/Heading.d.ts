import * as React from 'react';
export declare type HeadlineTag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'span' | 'div';
export declare type HeadlineSize = 1 | 2 | 3 | 4 | 5;
declare const Heading: React.FC<{
    as?: HeadlineTag;
    size?: HeadlineSize;
    textColor?: string;
    hyphens?: boolean;
    hasShadow?: boolean;
    className?: string;
}>;
export default Heading;
//# sourceMappingURL=Heading.d.ts.map