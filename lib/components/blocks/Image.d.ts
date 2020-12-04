import * as React from 'react';
export interface ImageProps {
    alt?: string;
    small: string;
    medium?: string;
    semilarge?: string;
    large?: string;
    xlarge?: string;
    coverSpace?: boolean;
}
declare const Image: React.FC<{
    className?: string;
    onClick?: () => void;
} & ImageProps>;
export default Image;
//# sourceMappingURL=Image.d.ts.map