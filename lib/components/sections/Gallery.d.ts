import { FC } from 'react';
import { ImageProps } from '../blocks/Image';
declare const Gallery: FC<{
    isInverted?: boolean;
    hasBack?: boolean;
    images?: Array<ImageProps & {
        size?: 'half' | 'full';
    }>;
    className?: string;
}>;
export default Gallery;
//# sourceMappingURL=Gallery.d.ts.map