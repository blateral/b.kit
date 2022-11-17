import Check from 'components/base/icons/Check';
import Cross from 'components/base/icons/Cross';
import Actions from 'components/blocks/Actions';
import Checkbox from 'components/fields/Checkbox';
import Copy from 'components/typography/Copy';
import React, { FC, useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import {
    bindConsentButtons,
    isUrlInWhitelist,
} from 'utils/cookie-consent/mutations';
import useCookieConsent, {
    CookieTypes,
    selectors,
} from 'utils/cookie-consent/useCookieConsent';
import {
    LibThemeProvider,
    ThemeMods,
    useLibTheme,
} from 'utils/LibThemeProvider';
import StatusFormatter from 'utils/statusFormatter';
import { getColors as color, mq, spacings } from 'utils/styles';
import useMounted from 'utils/useMounted';

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
    max-width: 900px;
    width: 100vw;

    max-height: 80%;
    overflow-y: scroll;
    padding: ${spacings.spacer}px ${spacings.nudge * 2}px;
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
        max-height: 100vh;
        overflow: auto;
    }
`;

const Status = styled(Copy)`
    li > * + * {
        margin-left: ${spacings.nudge}px;
    }
`;

const AcceptIcon = styled(Check)`
    display: inline-block;
    height: 20px;
    width: 20px;
`;

const DeclineIcon = styled(Cross)`
    display: inline-block;
    height: 20px;
    width: 20px;
`;

type RenderProps = {
    types: CookieTypes;
    acceptAll: () => void;
    acceptSelected: () => void;
    declineAll: () => void;
    setConsent: (type: keyof CookieTypes, isAccepted?: boolean) => void;
    additionalDeclineProps: {
        ['data-gtm']: string;
    };
    additionalAcceptProps: {
        ['data-gtm']: string;
    };
};

export const CookieConsent: FC<{
    /** URL's that should be excluded from consent */
    urlWhitelist?: string[];
    zIndex?: number;
    overlayOpacity?: number;
    status?: (props: {
        updatedAt: number;
        state: CookieTypes;
    }) => React.ReactElement;
    className?: string;
    children?: (props: RenderProps) => React.ReactElement;
    theme?: ThemeMods;
}> = ({
    /** URL's that should be excluded from consent */
    urlWhitelist = [],
    zIndex,
    overlayOpacity = 0.4,
    status,
    className,
    children,
    theme,
}) => {
    const { globals } = useLibTheme();

    const statusRenderer = useCallback(
        (props: { updatedAt: number; state: CookieTypes }) => {
            const updatedDate = new Date(props.updatedAt);

            const formatter = new StatusFormatter(
                props.updatedAt,
                globals.cookie.consentStatusFormat,
                globals.cookie.consentDateFormat(updatedDate),
                globals.cookie.consentTimeFormat(updatedDate),
                globals.cookie.consentLocaleKey
            );
            const typeKeys: string[] = Object.keys(props.state);
            const types: CookieTypes = props.state;

            return (
                <Status renderAs="span">
                    <span>{formatter.getFormattedStatus()}</span>
                    <ul>
                        {typeKeys?.map((type, i) => (
                            <li key={i}>
                                <span>{types[type].label}</span>
                                {types[type].isAccepted ? (
                                    <AcceptIcon />
                                ) : (
                                    <DeclineIcon />
                                )}
                            </li>
                        ))}
                    </ul>
                </Status>
            );
        },
        [globals.cookie]
    );

    const [isVisible, setIsVisible] = useState(false);
    const {
        getCookieValue,
        cookieTypes,
        acceptAll,
        acceptSelected,
        declineAll,
        setConsent,
    } = useCookieConsent(
        {
            cookieName: globals.cookie.name,
            initialCookieTypes: globals.cookie.types,
            lifetime: globals.cookie.lifetime,
        },
        () => setIsVisible(false),
        status || statusRenderer
    );
    const isMounted = useMounted();

    useEffect(() => {
        if (isMounted) return;

        // bind buttons to open consent
        bindConsentButtons(
            () => setIsVisible(true),
            [`[${selectors.buttons.attribute}]`, `.${selectors.buttons.class}`]
        );

        // check if consent banner should be open
        const isInWhitelist = isUrlInWhitelist(
            window.location.pathname,
            urlWhitelist
        );
        if (!isInWhitelist) setIsVisible(!getCookieValue());
    }, [getCookieValue, isMounted, urlWhitelist]);

    useEffect(() => {
        document.body.style.overflow = isVisible ? 'hidden' : 'visible';
    }, [isVisible]);

    if (!isVisible) return null;
    return (
        <LibThemeProvider theme={theme}>
            <Stage zIndex={zIndex} bgOpacity={overlayOpacity}>
                <View className={className}>
                    {children?.({
                        types: cookieTypes,
                        acceptAll,
                        acceptSelected,
                        setConsent,
                        declineAll,
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
const TitleView = styled(Copy)<{ isCentered?: boolean }>`
    text-align: ${({ isCentered }) => (isCentered ? 'center' : 'left')};
    margin-left: ${({ isCentered }) => (isCentered ? 'auto' : '0')};
    margin-right: auto;
    max-width: 670px;
`;

export const CookieTitle: FC<{
    isCentered?: boolean;
    innerHTML?: string;
    className?: string;
    children?: React.ReactNode;
}> = ({ isCentered, innerHTML, className, children }) => {
    return (
        <TitleView
            size="big"
            type="copy-b"
            innerHTML={innerHTML}
            isCentered={isCentered}
            className={className}
        >
            {children}
        </TitleView>
    );
};

/** Example Cookie title */
const TextView = styled(Copy)<{ isCentered?: boolean }>`
    text-align: ${({ isCentered }) => (isCentered ? 'center' : 'left')};
`;

export const CookieText: FC<{
    isCentered?: boolean;
    innerHTML?: string;
    className?: string;
    children?: React.ReactNode;
}> = ({ isCentered, innerHTML, className, children }) => {
    return (
        <TextView
            isCentered={isCentered}
            innerHTML={innerHTML}
            className={className}
        >
            {children}
        </TextView>
    );
};

const SelectView = styled.div`
    margin-left: auto;
    margin-right: auto;

    & > * + * {
        margin-top: ${spacings.nudge}px;
    }
`;

export const CookieTypeSelect: FC<{
    types: CookieTypes;
    setConsent: (typeName: keyof CookieTypes, isAccepted?: boolean) => void;
}> = ({ types, setConsent }) => (
    <SelectView>
        {types &&
            Object.keys(types).map((key) => (
                <Checkbox
                    key={key}
                    label={types[key].label}
                    isSelected={types[key].isAccepted}
                    isDisabled={!types[key].isEditable}
                    onChange={() => setConsent(key)}
                />
            ))}
    </SelectView>
);

/** Example Cookie actions */
export const CookieActions = styled(Actions)`
    margin-top: ${spacings.spacer * 1.5}px;
`;

export default CookieConsent;
