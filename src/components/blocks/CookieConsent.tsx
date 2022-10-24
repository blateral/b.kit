import Actions from 'components/blocks/Actions';
import Checkbox from 'components/fields/Checkbox';
import Copy from 'components/typography/Copy';
import React, { FC, useEffect, useState } from 'react';
import styled from 'styled-components';
import { Cookie, getCookie, setCookie } from 'utils/cookie-consent/cookie';
import {
    activateTrackingScripts,
    bindConsentButtons,
    isUrlInWhitelist,
    updateConsentStatusElements,
} from 'utils/cookie-consent/mutations';
import { LibThemeProvider, ThemeMods } from 'utils/LibThemeProvider';
import { getColors as color, mq, spacings } from 'utils/styles';

const Stage = styled.div<{ zIndex?: number; bgOpacity?: number }>`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(0, 0, 0, ${({ bgOpacity }) => bgOpacity || 0.4});
    z-index: ${({ zIndex }) => zIndex || 1000};
`;

const View = styled.div`
    box-sizing: border-box;
    max-width: 850px;
    width: 100vw;
    max-height: 100vh;
    padding: ${spacings.spacer}px ${spacings.spacer * 1.5}px;
    position: fixed;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 0);
    text-align: center;

    background-color: ${({ theme }) => color(theme).elementBg.light};
    box-shadow: 0 2px 44px rgba(0, 0, 0, 0.3);

    & > * + * {
        margin-top: ${spacings.spacer}px;
    }

    @media ${mq.medium} {
        padding: ${spacings.nudge * 5}px;
    }

    @media ${mq.semilarge} {
        bottom: ${spacings.spacer * 1.5}px;
    }
`;

type RenderProps = {
    types: CookieTypes;
    handleAcceptAll: () => void;
    handleAcceptSelection: () => void;
    toggleTypeConsent: (typeName: keyof CookieTypes) => void;
    additionalDeclineProps: {
        ['data-gtm']: string;
    };
    additionalAcceptProps: {
        ['data-gtm']: string;
    };
};

export interface CookieType {
    label: string;
    isAccepted: boolean;
    isEditable: boolean;
}

export interface CookieTypes {
    [key: string]: CookieType;
}

export interface CookieConsentData {
    types: CookieTypes;
    updatedAt: number;
}

export interface CookieConsentProps {
    cookieName?: string;
    initialCookieTypes?: CookieTypes;

    /** URL's that should be excluded from consent */
    urlWhitelist?: string[];
    consentAcceptStatusMsg?: string;
    consentDeclineStatusMsg?: string;
    noCookieStatusMsg?: string;
    dateFormat?: string;
    timeFormat?: string;
    lifetime?: number;
    localeKey?: 'de' | 'en';
    zIndex?: number;
    overlayOpacity?: number;

    onClose?: () => void;
}

export const CookieConsent: FC<
    CookieConsentProps & {
        className?: string;
        children?: (props: RenderProps) => React.ReactElement;
        theme?: ThemeMods;
    }
> = ({
    cookieName = 'cookie-consent-v2',
    initialCookieTypes,
    urlWhitelist,
    consentAcceptStatusMsg = 'Akzeptiert am <DATE> um <TIME> Uhr',
    consentDeclineStatusMsg = 'Abgelehnt am <DATE> um <TIME> Uhr',
    noCookieStatusMsg = '-',
    dateFormat = 'dd.mm.yy',
    timeFormat = 'hh:mm',
    lifetime = 365,
    localeKey = 'de',
    zIndex,
    overlayOpacity = 0.4,
    onClose,
    className,
    children,
    theme,
}) => {
    const [isVisible, setIsVisible] = useState(false);

    const types: CookieTypes = {
        essentials: {
            isEditable: false,
            isAccepted: true,
            label: 'Essentielle Funktionen',
        },
        ...initialCookieTypes,
    };
    const [cookieTypes, setCookieTypes] = useState<CookieTypes>(types);

    useEffect(() => {
        bindConsentButtons(() => setIsVisible(true));

        const cookie = getCookie(cookieName) as Cookie<CookieConsentData>;
        const isInWhitelist = isUrlInWhitelist(
            window.location.pathname,
            urlWhitelist
        );

        if (!isInWhitelist) setIsVisible(!cookie);
        if (cookie && cookie.data.types) {
            setCookieTypes(cookie.data.types);
            handleScriptActivation(cookie.data.types);
        }
    }, [cookieName, urlWhitelist]);

    useEffect(() => {
        const cookie = getCookie(cookieName) as Cookie<CookieConsentData>;

        // const str = !cookie
        //     ? noCookieStatusMsg
        //     : cookie.data.consent
        //     ? consentAcceptStatusMsg
        //     : consentDeclineStatusMsg;

        updateConsentStatusElements({
            cookie,
            status: '-',
            dateFormat,
            timeFormat,
            localeKey,
        });
    }, [
        consentAcceptStatusMsg,
        consentDeclineStatusMsg,
        cookieName,
        dateFormat,
        isVisible,
        localeKey,
        noCookieStatusMsg,
        timeFormat,
    ]);

    const handleScriptActivation = (types: CookieTypes) => {
        if (!types) return;

        // activate scripts from cookie types
        const acceptedKeys = Object.keys(types).filter(
            (key) => types[key].isAccepted
        );
        activateTrackingScripts(
            acceptedKeys.map((key) => `cookie-consent-script-${key}`)
        );
    };

    const handleAcceptAll = () => {
        console.log('Accept all');
        setCookieTypes((prev) => {
            const types = { ...prev };
            for (const key in types) {
                types[key].isAccepted = true;
            }

            setCookie<CookieConsentData>({
                name: cookieName,
                data: {
                    types,
                    updatedAt: new Date().getTime(),
                },
                days: lifetime,
            });

            handleScriptActivation(types);
            return types;
        });

        setIsVisible(false);
        onClose?.();
    };

    const handleAcceptSelection = () => {
        console.log('Accept selection');
        setCookie<CookieConsentData>({
            name: cookieName,
            data: {
                types: cookieTypes,
                updatedAt: new Date().getTime(),
            },
            days: lifetime,
        });

        handleScriptActivation(cookieTypes);
        setIsVisible(false);
        onClose?.();
    };

    const toggleTypeConsent = (typeName: keyof CookieTypes) => {
        setCookieTypes((prev) => {
            const type = { ...prev };
            if (!type[typeName] || !type[typeName].isEditable) return type;
            type[typeName].isAccepted = !type[typeName].isAccepted;

            return type;
        });
    };

    if (!isVisible) return null;
    return (
        <LibThemeProvider theme={theme}>
            <Stage zIndex={zIndex} bgOpacity={overlayOpacity}>
                <View className={className}>
                    {children?.({
                        types: cookieTypes,
                        handleAcceptAll,
                        handleAcceptSelection,
                        toggleTypeConsent,
                        additionalAcceptProps: {
                            ['data-gtm']: 'button-cookie-consent-accept',
                        },
                        additionalDeclineProps: {
                            ['data-gtm']: 'button-cookie-consent-decline',
                        },
                    })}
                </View>
            </Stage>
        </LibThemeProvider>
    );
};

/** Example Cookie icon */
export const CookieIcon = styled.img`
    display: block;
    margin: 0 auto;
`;

/** Example Cookie title */
const TitleView = styled(Copy)`
    max-width: 670px;
    margin-left: auto;
    margin-right: auto;
`;

export const CookieTitle: FC<{
    innerHTML?: string;
    className?: string;
    children?: React.ReactNode;
}> = ({ innerHTML, className, children }) => {
    return (
        <TitleView
            size="big"
            type="copy-b"
            innerHTML={innerHTML}
            className={className}
        >
            {children}
        </TitleView>
    );
};

/** Example Cookie title */
const TextView = styled(Copy)`
    max-width: 670px;
    margin-left: auto;
    margin-right: auto;
`;

export const CookieText: FC<{
    innerHTML?: string;
    className?: string;
    children?: React.ReactNode;
}> = ({ innerHTML, className, children }) => {
    return (
        <TextView innerHTML={innerHTML} className={className}>
            {children}
        </TextView>
    );
};

const SelectView = styled.div`
    max-width: 670px;
    margin-left: auto;
    margin-right: auto;

    & > * + * {
        margin-top: ${spacings.nudge}px;
    }
`;

export const CookieTypeSelect: FC<{
    types: CookieTypes;
    toggleTypeConsent: (typeName: keyof CookieTypes) => void;
}> = ({ types, toggleTypeConsent }) => (
    <SelectView>
        {types &&
            Object.keys(types).map((key) => (
                <Checkbox
                    key={key}
                    label={types[key].label}
                    isSelected={types[key].isAccepted}
                    isDisabled={!types[key].isEditable}
                    onChange={() => toggleTypeConsent(key)}
                />
            ))}
    </SelectView>
);

/** Example Cookie actions */
export const CookieActions = styled(Actions)`
    max-width: 670px;
    margin-top: ${spacings.spacer * 1.5}px;
`;

export default CookieConsent;
