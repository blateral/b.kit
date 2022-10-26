import React, { useEffect, useState, useMemo, useCallback } from 'react';
import ReactDOMServer from 'react-dom/server';

import { Cookie, getCookie, setCookie } from './cookie';
import { activateTrackingScripts, updateConsentStatus } from './mutations';

export interface CookieType {
    label: string;
    isAccepted: boolean;
    isEditable: boolean;
}

export interface CookieTypes {
    [key: string]: CookieType;
}

export interface CookieConsentData {
    types: Record<string, boolean>;
    updatedAt: number;
}

export interface CookieConsentSettings {
    cookieName?: string;
    initialCookieTypes?: CookieTypes;
    lifetime?: number;
}

export const selectors = {
    buttons: {
        class: 'cookie-consent-button',
        attribute: 'data-consent-button',
    },
    status: {
        class: 'cookie-consent-status',
        attribute: 'data-consent-status',
    },
    script: (key: string) => `cookie-consent-script-${key}`,
};

const useCookieConsent = (
    props: CookieConsentSettings,
    onSubmit?: () => void,
    statusRenderer?: (props: {
        updatedAt: number;
        state: CookieTypes;
    }) => React.ReactElement
) => {
    const settings: Required<CookieConsentSettings> = useMemo(() => {
        return {
            cookieName: 'cookie-consent-v2',
            lifetime: 365,
            initialCookieTypes: {
                essentials: {
                    isEditable: false,
                    isAccepted: true,
                    label: 'Essential functionalities',
                },
            },
            ...props,
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const [cookieTypes, setCookieTypes] = useState<CookieTypes>(
        settings.initialCookieTypes
    );

    const updateStatus = useCallback(() => {
        const cookie = getCookie(
            settings.cookieName
        ) as Cookie<CookieConsentData>;

        const statusHtml = statusRenderer?.({
            updatedAt: cookie.data.updatedAt,
            state: cookieTypes,
        });
        if (!statusHtml) return;

        updateConsentStatus(ReactDOMServer.renderToStaticMarkup(statusHtml), [
            `[${selectors.status.attribute}]`,
            `.${selectors.status.class}`,
        ]);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [settings.cookieName]);

    useEffect(() => {
        const cookie = getCookie(
            settings.cookieName
        ) as Cookie<CookieConsentData>;

        if (cookie && cookie.data.types) {
            setCookieTypes((prev) => {
                const cPrev = { ...prev };
                for (const key in cPrev) {
                    if (!cookie.data.types[key]) continue;
                    cPrev[key].isAccepted = cookie.data.types[key];
                }

                updateStatus();
                handleScriptActivation(cPrev);

                return cPrev;
            });
        }
    }, [settings, settings.cookieName, updateStatus]);

    const mapToCookieData = (types: CookieTypes): Record<string, boolean> => {
        const data = {};
        if (!types) return data;

        for (const key in types) {
            data[key] = types[key].isAccepted;
        }

        return data;
    };

    /** Accept all types of cookies */
    const acceptAll = useCallback(() => {
        console.info('Accept all cookie types');

        setCookieTypes((prev) => {
            const types = { ...prev };
            for (const key in types) {
                if (!types[key].isEditable) continue;
                types[key].isAccepted = true;
            }

            setCookie<CookieConsentData>({
                name: settings.cookieName,
                data: {
                    types: mapToCookieData(types),
                    updatedAt: new Date().getTime(),
                },
                days: settings.lifetime,
            });

            updateStatus();
            handleScriptActivation(types);
            return types;
        });
        onSubmit?.();
    }, [onSubmit, settings.cookieName, settings.lifetime, updateStatus]);

    /** Decline all types of cookies (except required ones) */
    const declineAll = useCallback(() => {
        console.info('Decline all cookie types');

        setCookieTypes((prev) => {
            const types = { ...prev };
            for (const key in types) {
                if (!types[key].isEditable) continue;
                types[key].isAccepted = false;
            }

            setCookie<CookieConsentData>({
                name: settings.cookieName,
                data: {
                    types: mapToCookieData(types),
                    updatedAt: new Date().getTime(),
                },
                days: settings.lifetime,
            });

            updateStatus();
            handleScriptActivation(types);
            return types;
        });
        onSubmit?.();
    }, [onSubmit, settings.cookieName, settings.lifetime, updateStatus]);

    /** Accept selected types of cookies */
    const acceptSelected = useCallback(() => {
        console.info('Accept selected cookie types');

        setCookie<CookieConsentData>({
            name: settings.cookieName,
            data: {
                types: mapToCookieData(cookieTypes),
                updatedAt: new Date().getTime(),
            },
            days: settings.lifetime,
        });

        updateStatus();
        handleScriptActivation(cookieTypes);
        onSubmit?.();
    }, [
        cookieTypes,
        onSubmit,
        settings.cookieName,
        settings.lifetime,
        updateStatus,
    ]);

    const handleScriptActivation = (types: CookieTypes) => {
        if (!types) return;

        // activate scripts from cookie types
        const acceptedKeys = Object.keys(types).filter(
            (key) => types[key].isAccepted
        );
        activateTrackingScripts(
            acceptedKeys.map((key) => selectors.script(key))
        );
    };

    /** Set or toggle consent status of cookie type */
    const setConsent = (type: keyof CookieTypes, isAccepted?: boolean) => {
        setCookieTypes((prev) => {
            const types = { ...prev };
            if (!types[type] || !types[type].isEditable) return types;

            if (isAccepted !== undefined) {
                types[type].isAccepted = isAccepted;
            } else {
                types[type].isAccepted = !types[type].isAccepted;
            }

            return types;
        });
    };

    const getCookieValue = (): Cookie<CookieConsentData> | undefined => {
        return getCookie(settings.cookieName) as Cookie<CookieConsentData>;
    };

    return {
        cookieTypes,
        acceptAll,
        acceptSelected,
        declineAll,
        setConsent,
        getCookieValue,
    };
};

export default useCookieConsent;
