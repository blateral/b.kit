import Actions from 'components/blocks/Actions';
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

    background-color: ${({ theme }) => color(theme).light};
    box-shadow: 0 2px 44px rgba(0, 0, 0, 0.3);

    & > * + * {
        margin-top: ${spacings.spacer}px;
    }

    @media ${mq.semilarge} {
        bottom: ${spacings.spacer * 1.5}px;
    }

    @media ${mq.medium} {
        padding: ${spacings.spacer * 2}px;
    }
`;

export interface CookieConfig {
    cookieName?: string;

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
}

type RenderProps = {
    handleAccept: () => void;
    handleDecline: () => void;
    additionalDeclineProps: {
        ['data-gtm']: string;
    };
    additionalAcceptProps: {
        ['data-gtm']: string;
    };
};

export interface CookieConsentData {
    consent: boolean;
    updatedAt: number;
}

export const CookieConsent: FC<
    CookieConfig & {
        className?: string;
        children?: (props: RenderProps) => React.ReactElement;
    }
> = ({
    cookieName = 'cookie-consent',
    urlWhitelist,
    consentAcceptStatusMsg = 'Akzeptiert am %DATE% um %TIME% Uhr',
    consentDeclineStatusMsg = 'Abgelehnt am %DATE% um %TIME% Uhr',
    noCookieStatusMsg = '-',
    dateFormat = 'dd.mm.yy',
    timeFormat = 'hh:mm',
    lifetime = 365,
    localeKey = 'de',
    zIndex,
    overlayOpacity = 0.4,
    className,
    children,
}) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        bindConsentButtons(() => setIsVisible(true));

        const cookie = getCookie(cookieName) as Cookie<CookieConsentData>;
        const containsWhitelist = isUrlInWhitelist(
            window.location.pathname,
            urlWhitelist
        );
        if (!containsWhitelist) setIsVisible(!cookie);
        if (cookie && cookie.data.consent) {
            activateTrackingScripts();
        }
    }, [cookieName, urlWhitelist]);

    useEffect(() => {
        const cookie = getCookie(cookieName) as Cookie<CookieConsentData>;

        const str = !cookie
            ? noCookieStatusMsg
            : cookie.data.consent
            ? consentAcceptStatusMsg
            : consentDeclineStatusMsg;

        updateConsentStatusElements({
            cookie,
            status: str,
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

    if (!isVisible) return null;
    return (
        <Stage zIndex={zIndex} bgOpacity={overlayOpacity}>
            <View className={className}>
                {children &&
                    children({
                        handleDecline: () => {
                            console.log('decline');
                            setCookie<CookieConsentData>({
                                name: cookieName,
                                data: {
                                    consent: false,
                                    updatedAt: new Date().getTime(),
                                },
                                days: lifetime,
                            });
                            setIsVisible(false);
                        },
                        handleAccept: () => {
                            console.log('accept');
                            setCookie<CookieConsentData>({
                                name: cookieName,
                                data: {
                                    consent: true,
                                    updatedAt: new Date().getTime(),
                                },
                                days: lifetime,
                            });
                            setIsVisible(false);
                            activateTrackingScripts();
                        },
                        additionalAcceptProps: {
                            ['data-gtm']: 'button-cookie-consent-accept',
                        },
                        additionalDeclineProps: {
                            ['data-gtm']: 'button-cookie-consent-decline',
                        },
                    })}
            </View>
        </Stage>
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
}> = ({ innerHTML, className, children }) => {
    return (
        <TextView innerHTML={innerHTML} className={className}>
            {children}
        </TextView>
    );
};

/** Example Cookie actions */
export const CookieActions = styled(Actions)`
    max-width: 670px;
    margin-top: ${spacings.spacer * 1.5}px;
`;

export default CookieConsent;
