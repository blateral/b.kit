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

    if (!encode) return `data:image/svg+xml;utf8,${svgString}`;

    if (typeof window !== 'undefined') {
        return `data:image/svg+xml;base64,${btoa(svgString)}`;
    } else {
        const baseString = Buffer.from(svgString).toString('base64');
        return `data:image/svg+xml;base64,${baseString}`;
    }
};
