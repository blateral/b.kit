/* eslint-disable react/no-unescaped-entities */
import * as React from 'react';
import { Meta, Story } from '@storybook/react';
import CookieConsent, {
    CookieActions,
    CookieIcon,
    CookieText,
    CookieTitle,
} from 'components/blocks/CookieConsent';

import cookieImg from '../../../public/images/Cookie.png';
import Button from 'components/buttons/Button';
import ButtonGhost from 'components/buttons/ButtonGhost';

export default {
    title: 'Blocks/CookieConsent',
    component: CookieConsent,
} as Meta;

export const WithIcon: Story = () => (
    <div>
        <script type="text/cookie-consent-script">
            {`console.log('b.ig brother is watching you! 👀');`}
        </script>
        <button data-consent-button>Open consent banner</button>
        <div data-consent-status></div>
        <CookieConsent>
            {() => (
                <>
                    <CookieIcon src={cookieImg} alt="logo" />
                </>
            )}
        </CookieConsent>
    </div>
);

export const WithTitle: Story = () => (
    <div>
        <script type="text/cookie-consent-script">
            {`console.log('b.ig brother is watching you! 👀');`}
        </script>
        <button data-consent-button>Open consent banner</button>
        <div data-consent-status></div>
        <CookieConsent>
            {() => (
                <>
                    <CookieIcon src={cookieImg} alt="logo" />
                    <CookieTitle innerHTML="Verwendung von Cookies für Analysezwecke" />
                </>
            )}
        </CookieConsent>
    </div>
);

export const WithText: Story = () => (
    <div>
        <script type="text/cookie-consent-script">
            {`console.log('b.ig brother is watching you! 👀');`}
        </script>
        <button data-consent-button>Open consent banner</button>
        <div data-consent-status></div>
        <CookieConsent>
            {() => (
                <>
                    <CookieIcon src={cookieImg} alt="logo" />
                    <CookieTitle innerHTML="Verwendung von Cookies für Analysezwecke" />
                    <CookieText innerHTML='Wir verwenden Cookies, um die Zugriffe auf unsere Website zu analysieren. Dadurch können wir unsere Webseite für Sie verbessern. Unsere Partner führen diese Informationen möglicherweise mit weiteren Daten zusammen, die Sie ihnen bereitgestellt haben oder die im Rahmen der Nutzung der Dienste gesammelt wurden. Wenn Sie der Verwendung nicht zustimmen, benutzen wir ausschließlich Cookies, die für die Funktionalität der Webseite essentiell sind. Weitere Informationen finden Sie unter <a href="#0">Impressum</a> und <a href="#0">Datenschutz.</a>' />
                </>
            )}
        </CookieConsent>
    </div>
);

export const WithActions: Story = () => (
    <div>
        <script type="text/cookie-consent-script">
            {`console.log('b.ig brother is watching you! 👀');`}
        </script>
        <button data-consent-button>Open consent banner</button>
        <div data-consent-status></div>
        <CookieConsent>
            {({
                handleAccept,
                handleDecline,
                additionalAcceptProps,
                additionalDeclineProps,
            }) => (
                <>
                    <CookieIcon src={cookieImg} alt="logo" />
                    <CookieTitle innerHTML="Verwendung von Cookies für Analysezwecke" />
                    <CookieText innerHTML='Wir verwenden Cookies, um die Zugriffe auf unsere Website zu analysieren. Dadurch können wir unsere Webseite für Sie verbessern. Unsere Partner führen diese Informationen möglicherweise mit weiteren Daten zusammen, die Sie ihnen bereitgestellt haben oder die im Rahmen der Nutzung der Dienste gesammelt wurden. Wenn Sie der Verwendung nicht zustimmen, benutzen wir ausschließlich Cookies, die für die Funktionalität der Webseite essentiell sind. Weitere Informationen finden Sie unter <a href="#0">Impressum</a> und <a href="#0">Datenschutz.</a>' />
                    <CookieActions
                        primary={
                            <Button.View
                                {...additionalAcceptProps}
                                onClick={handleAccept}
                            >
                                <Button.Label>Cookies zustimmen</Button.Label>
                            </Button.View>
                        }
                        secondary={
                            <ButtonGhost.View
                                {...additionalDeclineProps}
                                onClick={handleDecline}
                            >
                                <ButtonGhost.Label>
                                    Cookies ablehnen
                                </ButtonGhost.Label>
                            </ButtonGhost.View>
                        }
                    />
                </>
            )}
        </CookieConsent>
    </div>
);

export const CustomOverlayOpacity: Story = () => (
    <div>
        <script type="text/cookie-consent-script">
            {`console.log('b.ig brother is watching you! 👀');`}
        </script>
        <button data-consent-button>Open consent banner</button>
        <div data-consent-status></div>
        <CookieConsent overlayOpacity={0.8}>
            {({
                handleAccept,
                handleDecline,
                additionalAcceptProps,
                additionalDeclineProps,
            }) => (
                <>
                    <CookieIcon src={cookieImg} alt="logo" />
                    <CookieTitle innerHTML="Verwendung von Cookies für Analysezwecke" />
                    <CookieText innerHTML='Wir verwenden Cookies, um die Zugriffe auf unsere Website zu analysieren. Dadurch können wir unsere Webseite für Sie verbessern. Unsere Partner führen diese Informationen möglicherweise mit weiteren Daten zusammen, die Sie ihnen bereitgestellt haben oder die im Rahmen der Nutzung der Dienste gesammelt wurden. Wenn Sie der Verwendung nicht zustimmen, benutzen wir ausschließlich Cookies, die für die Funktionalität der Webseite essentiell sind. Weitere Informationen finden Sie unter <a href="#0">Impressum</a> und <a href="#0">Datenschutz.</a>' />
                    <CookieActions
                        primary={
                            <Button.View
                                {...additionalAcceptProps}
                                onClick={handleAccept}
                            >
                                <Button.Label>Cookies zustimmen</Button.Label>
                            </Button.View>
                        }
                        secondary={
                            <ButtonGhost.View
                                {...additionalDeclineProps}
                                onClick={handleDecline}
                            >
                                <ButtonGhost.Label>
                                    Cookies ablehnen
                                </ButtonGhost.Label>
                            </ButtonGhost.View>
                        }
                    />
                </>
            )}
        </CookieConsent>
    </div>
);

export const WithWhitelist: Story = () => (
    <div>
        <script type="text/cookie-consent-script">
            {`console.log('b.ig brother is watching you! 👀');`}
        </script>
        <button data-consent-button>Open consent banner</button>
        <div data-consent-status></div>
        <CookieConsent urlWhitelist={['/impressum', '/datenschutz']}>
            {({
                handleAccept,
                handleDecline,
                additionalAcceptProps,
                additionalDeclineProps,
            }) => (
                <>
                    <CookieIcon src={cookieImg} alt="logo" />
                    <CookieTitle innerHTML="Verwendung von Cookies für Analysezwecke" />
                    <CookieText innerHTML='Wir verwenden Cookies, um die Zugriffe auf unsere Website zu analysieren. Dadurch können wir unsere Webseite für Sie verbessern. Unsere Partner führen diese Informationen möglicherweise mit weiteren Daten zusammen, die Sie ihnen bereitgestellt haben oder die im Rahmen der Nutzung der Dienste gesammelt wurden. Wenn Sie der Verwendung nicht zustimmen, benutzen wir ausschließlich Cookies, die für die Funktionalität der Webseite essentiell sind. Weitere Informationen finden Sie unter <a href="#0">Impressum</a> und <a href="#0">Datenschutz.</a>' />
                    <CookieActions
                        primary={
                            <Button.View
                                {...additionalAcceptProps}
                                onClick={handleAccept}
                            >
                                <Button.Label>Cookies zustimmen</Button.Label>
                            </Button.View>
                        }
                        secondary={
                            <ButtonGhost.View
                                {...additionalDeclineProps}
                                onClick={handleDecline}
                            >
                                <ButtonGhost.Label>
                                    Cookies ablehnen
                                </ButtonGhost.Label>
                            </ButtonGhost.View>
                        }
                    />
                </>
            )}
        </CookieConsent>
    </div>
);

export const CustomStatusText: Story = () => (
    <div>
        <script type="text/cookie-consent-script">
            {`console.log('b.ig brother is watching you! 👀');`}
        </script>
        <button data-consent-button>Open consent banner</button>
        <div data-consent-status></div>
        <CookieConsent
            consentAcceptStatusMsg="Accepted on %DATE% at %TIME%"
            consentDeclineStatusMsg="Declined on %DATE% at %TIME%"
            dateFormat="mm.dd.yy"
            timeFormat="hh:mm"
            localeKey="en"
        >
            {({
                handleAccept,
                handleDecline,
                additionalAcceptProps,
                additionalDeclineProps,
            }) => (
                <>
                    <CookieIcon src={cookieImg} alt="logo" />
                    <CookieTitle innerHTML="Verwendung von Cookies für Analysezwecke" />
                    <CookieText innerHTML='Wir verwenden Cookies, um die Zugriffe auf unsere Website zu analysieren. Dadurch können wir unsere Webseite für Sie verbessern. Unsere Partner führen diese Informationen möglicherweise mit weiteren Daten zusammen, die Sie ihnen bereitgestellt haben oder die im Rahmen der Nutzung der Dienste gesammelt wurden. Wenn Sie der Verwendung nicht zustimmen, benutzen wir ausschließlich Cookies, die für die Funktionalität der Webseite essentiell sind. Weitere Informationen finden Sie unter <a href="#0">Impressum</a> und <a href="#0">Datenschutz.</a>' />
                    <CookieActions
                        primary={
                            <Button.View
                                {...additionalAcceptProps}
                                onClick={handleAccept}
                            >
                                <Button.Label>Cookies zustimmen</Button.Label>
                            </Button.View>
                        }
                        secondary={
                            <ButtonGhost.View
                                {...additionalDeclineProps}
                                onClick={handleDecline}
                            >
                                <ButtonGhost.Label>
                                    Cookies ablehnen
                                </ButtonGhost.Label>
                            </ButtonGhost.View>
                        }
                    />
                </>
            )}
        </CookieConsent>
    </div>
);
