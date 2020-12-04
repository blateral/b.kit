import GallerySection from './components/sections/Gallery';

// styled.d.ts
import 'styled-components';

interface IPalette {
    main: string;
    contrastText: string;
}

declare module 'styled-components' {
    export interface DefaultTheme {
        borderRadius: string;
        palette: {
            common: {
                black: string;
                white: string;
            };
            primary: IPalette;
            secondary: IPalette;
        };
    }
}

export const Gallery = GallerySection;
