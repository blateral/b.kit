import React from 'react';

export interface Font {
    rootPath: string;
    sourcePath: string;
}

export const importFonts = (fonts: Font[]) => {
    return (
        <React.Fragment>
            {fonts?.map((font, i) => (
                <link
                    key={i}
                    rel="preconnect"
                    href={font.rootPath}
                    crossOrigin="true"
                />
            ))}
            {fonts?.map((font, i) => (
                <link key={i} rel="preload" as="style" href={font.sourcePath} />
            ))}
            {fonts?.map((font, i) => (
                <link
                    key={i}
                    rel="stylesheet"
                    href={font.sourcePath}
                    media="print"
                    onLoad={(ev) => {
                        ev.currentTarget.media = 'all';
                    }}
                />
            ))}

            <noscript>
                {fonts?.map((font, i) => (
                    <link key={i} rel="stylesheet" href={font.sourcePath} />
                ))}
            </noscript>
        </React.Fragment>
    );
};
