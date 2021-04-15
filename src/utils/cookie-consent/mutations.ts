import { CookieConsentData } from 'components/sections/CookieConsent';
import { Cookie } from './cookie';
import { StatusFormatter } from './formatter';

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
    while (i--) {
        // create new script element to call it
        const newScriptElement = document.createElement('script');
        newScriptElement.type = 'text/javascript';
        newScriptElement.innerHTML = scriptElements[i].innerHTML;

        // append / activate script
        document.body.appendChild(newScriptElement);

        // delete old helper element
        if (scriptElements[i].parentNode) {
            // eslint-disable-next-line no-unused-expressions
            scriptElements[i].parentNode?.removeChild(scriptElements[i]);
        }
    }
};

export const updateConsentStatusElements = ({
    cookie,
    status,
    dateFormat,
    timeFormat,
    localeKey = 'eng',
}: {
    cookie: Cookie<CookieConsentData>;
    status: string;
    dateFormat: string;
    timeFormat: string;
    localeKey: 'de' | 'eng';
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
