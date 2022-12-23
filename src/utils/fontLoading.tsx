import React from 'react';

interface FontFallback {
    name: string;
    altFont: string;
    sizeAdjust: string;
}

export interface Font {
    rootPath: string;
    sourcePath: string;
    fallbacks?: FontFallback[];
}

export const importFonts = (fonts: Font[]) => {
    return (
        <React.Fragment>
            {fonts && fonts.length > 0 && (
                <style
                    dangerouslySetInnerHTML={{
                        __html: fonts?.reduce((acc, current) => {
                            if (current?.fallbacks) {
                                acc += current?.fallbacks?.reduce(
                                    (fallAcc, f) => {
                                        fallAcc += `@font-face { font-family: '${f.name}'; size-adjust: ${f.sizeAdjust}; src: local('${f.altFont}'); } `;
                                        return fallAcc;
                                    },

                                    ''
                                );
                                return acc;
                            } else return acc;
                        }, ''),
                    }}
                />
            )}

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

            <style
                dangerouslySetInnerHTML={{
                    __html: `</style>${fonts?.reduce<string>(
                        (prev, current) => {
                            return (prev += `
                                <link rel="stylesheet" href="${current.sourcePath}" media="print" onload="this.media='all'" />`);
                        },
                        ''
                    )}<style>`,
                }}
            />

            <noscript>
                {fonts?.map((font, i) => (
                    <link key={i} rel="stylesheet" href={font.sourcePath} />
                ))}
            </noscript>
        </React.Fragment>
    );
};
