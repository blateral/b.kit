import React from 'react';
import { renderToString } from 'react-dom/server';

export const getSVGDataImg = (
    svg: React.ReactElement,
    encode = true
): string => {
    let svgString = '';
    if (!svg) return '';

    if (typeof svg === 'string') {
        svgString = svg;
    } else {
        svgString = renderToString(svg);
    }

    return encode
        ? `data:image/svg+xml;base64,${btoa(svgString)}`
        : `data:image/svg+xml;utf8,${svgString}`;
};
