import { CookieConsentData } from 'components/blocks/CookieConsent';
import { Cookie } from './cookie';
import StatusFormatter from '../statusFormatter';

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

export const bindConsentButtons = (callback: () => void) => {
    const allConsentButtons = document.querySelectorAll(
        '[data-consent-button], .cookie-consent-button'
    );

    for (let i = 0, len = allConsentButtons.length; i < len; i++) {
        allConsentButtons[i].addEventListener('click', callback);
    }
};

export const activateTrackingScripts = () => {
    const scriptElements = document.querySelectorAll(
        "script[type='text/consent_banner_script'], script[type='text/cookie-consent-script']"
    );

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

export const updateConsentStatusElements = ({
    cookie,
    status,
    dateFormat,
    timeFormat,
    localeKey = 'en',
}: {
    cookie: Cookie<CookieConsentData>;
    status: string;
    dateFormat: string;
    timeFormat: string;
    localeKey: 'de' | 'en';
}) => {
    const allConsentStatusElements = document.querySelectorAll(
        '[data-consent-status], .cookie-consent-status'
    );

    // render status inside defined dom elements without react
    const formatter = new StatusFormatter(
        cookie?.data.updatedAt,
        status,
        dateFormat,
        timeFormat,
        localeKey
    );

    for (let i = 0, len = allConsentStatusElements.length; i < len; i++) {
        allConsentStatusElements[i].innerHTML = formatter.getFormattedStatus();
    }
};
