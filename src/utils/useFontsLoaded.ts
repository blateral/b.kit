import { useEffect, useState } from 'react';

export const useFontsLoaded = () => {
    const [allFontsLoaded, setFontLoaded] = useState<boolean | undefined>(
        false
    );

    useEffect(() => {
        const waitForFonts = () => {
            (document as any)?.fonts?.ready?.then(() => {
                setFontLoaded(true);
            });
        };

        if ((document as any).fonts === undefined) setFontLoaded(undefined);
        else waitForFonts();
    }, []);

    return allFontsLoaded;
};
