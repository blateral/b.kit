export const isUrlInWhitelist = (
    urlString: string,
    whitelist: string[] = []
) => {
    let isInWhiteList = false;
    for (let i = 0; i < whitelist.length; i++) {
        if (urlString.indexOf(whitelist[i]) > -1) {
            isInWhiteList = true;
            break;
        }
    }
    return isInWhiteList;
};

export const bindConsentButtons = (
    callback: () => void,
    selectors: string[] = []
) => {
    const allConsentButtons = document.querySelectorAll(selectors.join(', '));

    for (let i = 0, len = allConsentButtons.length; i < len; i++) {
        allConsentButtons[i].addEventListener('click', callback);
    }
};

export const activateTrackingScripts = (scriptTypeSelectors: string[] = []) => {
    const selectors = scriptTypeSelectors
        .filter((selector) => selector)
        .map((selector) => `script[type='text/${selector}']`)
        .join(', ');

    const scriptElements = selectors
        ? document.querySelectorAll(selectors)
        : [];

    let i = scriptElements.length;
    const newScriptElements: HTMLScriptElement[] = [];
    while (i--) {
        // create new script element to call it
        const newScriptElement = document.createElement('script');
        newScriptElement.type = 'text/javascript';

        if (scriptElements[i].hasAttribute('src')) {
            newScriptElement.src = scriptElements[i].getAttribute('src')!;
            newScriptElement.async = true;
        } else {
            newScriptElement.innerHTML = scriptElements[i].innerHTML;
        }

        // add new script tags to list
        newScriptElements.push(newScriptElement);

        // delete old helper element
        if (scriptElements[i].parentNode) {
            // eslint-disable-next-line no-unused-expressions
            scriptElements[i].parentNode?.removeChild(scriptElements[i]);
        }
    }

    // append new script tags
    i = newScriptElements.length;
    while (i--) {
        // append / activate script
        document.body.appendChild(newScriptElements[i]);
    }
};

export const updateConsentStatus = (
    content: string,
    selectors: string[] = []
) => {
    if (!content) return;
    const statusElements = document.querySelectorAll(selectors.join(', '));

    for (let i = 0, len = statusElements.length; i < len; i++) {
        statusElements[i].innerHTML = content;
    }
};
