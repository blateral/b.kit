import * as React from 'react';
export declare type BgMode = 'full' | 'half-left' | 'half-right' | 'larger-left' | 'larger-right';
export declare type BgClampType = 'normal' | 'large';
declare const Section: React.FC<{
    as?: 'header' | 'footer';
    bgColor?: string;
    bgMode?: BgMode;
    bgClamp?: BgClampType;
    addSeperation?: boolean;
    className?: any;
}>;
export default Section;
//# sourceMappingURL=Section.d.ts.map