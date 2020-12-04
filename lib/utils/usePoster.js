import { useEffect, useState } from 'react';
import { isBrowser, useMediaQuery } from './useMediaQuery';
export var canUseWebP = function () {
    if (!isBrowser)
        return false;
    var elem = document.createElement('canvas');
    if (!(elem.getContext && elem.getContext('2d'))) {
        // was able or not to get WebP representation
        return elem.toDataURL('image/webp').indexOf('data:image/webp') == 0;
    }
    // very old browser like IE 8, canvas not supported
    return false;
};
export var usePoster = function (posterImage, mqs) {
    var _a = useState(), currentImage = _a[0], setCurrentImage = _a[1];
    var workingImage = posterImage.webp && canUseWebP() ? posterImage.webp : posterImage;
    var currentMq = useMediaQuery(mqs || ['small', 'medium', 'semilarge', 'large', 'xlarge']);
    useEffect(function () {
        if (currentMq &&
            workingImage[currentMq] &&
            workingImage[currentMq] !== currentImage) {
            setCurrentImage(workingImage[currentMq]);
        }
    }, [currentImage, currentMq, workingImage]);
    return currentImage;
};
//# sourceMappingURL=usePoster.js.map