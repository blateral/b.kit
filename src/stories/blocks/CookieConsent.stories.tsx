/* eslint-disable react/no-unescaped-entities */
import * as React from 'react';
import { Meta, Story } from '@storybook/react';
import CookieConsent, {
    CookieActions,
    CookieIcon,
    CookieTypeSelect,
    CookieText,
    CookieTitle,
} from 'components/blocks/CookieConsent';

import cookieImg from '../../../public/images/Cookie.png';
import Button from 'components/buttons/Button';
import ButtonGhost from 'components/buttons/ButtonGhost';

export default {
    title: 'Blocks/CookieConsent',
    component: CookieConsent,
    parameters: {
        status: {
            type: 'stable',
        },
    },
} as Meta;

export const WithIcon: Story = () => (
    <div>
        <button data-consent-button>Open consent banner</button>
        <div data-consent-status></div>
        <CookieConsent>
            {() => (
                <React.Fragment>
                    <CookieIcon src={cookieImg} alt="logo" />
                </React.Fragment>
            )}
        </CookieConsent>
    </div>
);

export const WithTitle: Story = () => (
    <div>
        <button data-consent-button>Open consent banner</button>
        <div data-consent-status></div>
        <CookieConsent>
            {() => (
                <React.Fragment>
                    <CookieIcon src={cookieImg} alt="logo" />
                    <CookieTitle
                        isCentered
                        innerHTML="Verwendung von Cookies für Analysezwecke"
                    />
                </React.Fragment>
            )}
        </CookieConsent>
    </div>
);

export const WithText: Story = () => (
    <div>
        <button data-consent-button>Open consent banner</button>
        <div data-consent-status></div>
        <CookieConsent>
            {() => (
                <React.Fragment>
                    <CookieIcon src={cookieImg} alt="logo" />
                    <CookieTitle
                        isCentered
                        innerHTML="Verwendung von Cookies für Analysezwecke"
                    />
                    <CookieText
                        isCentered
                        innerHTML='Wir verwenden Cookies, um die Zugriffe auf unsere Website zu analysieren. Dadurch können wir unsere Webseite für Sie verbessern. Unsere Partner führen diese Informationen möglicherweise mit weiteren Daten zusammen, die Sie ihnen bereitgestellt haben oder die im Rahmen der Nutzung der Dienste gesammelt wurden. Wenn Sie der Verwendung nicht zustimmen, benutzen wir ausschließlich Cookies, die für die Funktionalität der Webseite essentiell sind. Weitere Informationen finden Sie unter <a href="#0">Impressum</a> und <a href="#0">Datenschutz.</a>'
                    />
                </React.Fragment>
            )}
        </CookieConsent>
    </div>
);

export const WithActions: Story = () => (
    <div>
        <button data-consent-button>Open consent banner</button>
        <div data-consent-status></div>
        <CookieConsent>
            {({
                acceptAll,
                declineAll,
                additionalAcceptProps,
                additionalDeclineProps,
            }) => (
                <React.Fragment>
                    <CookieIcon src={cookieImg} alt="logo" />
                    <CookieTitle
                        isCentered
                        innerHTML="Verwendung von Cookies für Analysezwecke"
                    />
                    <CookieText
                        isCentered
                        innerHTML='Wir verwenden Cookies, um die Zugriffe auf unsere Website zu analysieren. Dadurch können wir unsere Webseite für Sie verbessern. Unsere Partner führen diese Informationen möglicherweise mit weiteren Daten zusammen, die Sie ihnen bereitgestellt haben oder die im Rahmen der Nutzung der Dienste gesammelt wurden. Wenn Sie der Verwendung nicht zustimmen, benutzen wir ausschließlich Cookies, die für die Funktionalität der Webseite essentiell sind. Weitere Informationen finden Sie unter <a href="#0">Impressum</a> und <a href="#0">Datenschutz.</a>'
                    />
                    <CookieActions
                        isMirrored
                        primary={
                            <Button.View
                                {...additionalAcceptProps}
                                onClick={acceptAll}
                            >
                                <Button.Label>Cookies zustimmen</Button.Label>
                            </Button.View>
                        }
                        secondary={
                            <ButtonGhost.View
                                {...additionalDeclineProps}
                                onClick={declineAll}
                            >
                                <ButtonGhost.Label>
                                    Cookies ablehnen
                                </ButtonGhost.Label>
                            </ButtonGhost.View>
                        }
                    />
                </React.Fragment>
            )}
        </CookieConsent>
    </div>
);

export const WithCookieTypes: Story = () => (
    <div>
        <script type="text/cookie-consent-script-analytics">
            {`console.log('b.ig brother is watching you!');`}
        </script>
        <button data-consent-button>Open consent banner</button>
        <div data-consent-status></div>
        <CookieConsent
            initialCookieTypes={{
                essentials: {
                    isAccepted: true,
                    isEditable: false,
                    label: 'Essentielle Funktionen',
                },
                analytics: {
                    isAccepted: false,
                    isEditable: true,
                    label: 'Analyse & Marketing',
                },
            }}
        >
            {({
                acceptAll,
                declineAll,
                additionalAcceptProps,
                additionalDeclineProps,
            }) => (
                <React.Fragment>
                    <CookieIcon src={cookieImg} alt="logo" />
                    <CookieTitle
                        isCentered
                        innerHTML="Verwendung von Cookies für Analysezwecke"
                    />
                    <CookieText
                        isCentered
                        innerHTML='Wir verwenden Cookies, um die Zugriffe auf unsere Website zu analysieren. Dadurch können wir unsere Webseite für Sie verbessern. Unsere Partner führen diese Informationen möglicherweise mit weiteren Daten zusammen, die Sie ihnen bereitgestellt haben oder die im Rahmen der Nutzung der Dienste gesammelt wurden. Wenn Sie der Verwendung nicht zustimmen, benutzen wir ausschließlich Cookies, die für die Funktionalität der Webseite essentiell sind. Weitere Informationen finden Sie unter <a href="#0">Impressum</a> und <a href="#0">Datenschutz.</a>'
                    />
                    <CookieActions
                        isMirrored
                        primary={
                            <Button.View
                                {...additionalAcceptProps}
                                onClick={acceptAll}
                            >
                                <Button.Label>Cookies zustimmen</Button.Label>
                            </Button.View>
                        }
                        secondary={
                            <ButtonGhost.View
                                {...additionalDeclineProps}
                                onClick={declineAll}
                            >
                                <ButtonGhost.Label>
                                    Cookies ablehnen
                                </ButtonGhost.Label>
                            </ButtonGhost.View>
                        }
                    />
                </React.Fragment>
            )}
        </CookieConsent>
    </div>
);

export const Advanced: Story = () => (
    <div>
        <script type="text/cookie-consent-script-analytics">
            {`console.log('b.ig brother is watching you!');`}
        </script>
        <script type="text/cookie-consent-script-functionals">
            {`console.log('b.unctional cookies enabled!');`}
        </script>
        <button data-consent-button>Open consent banner</button>
        <div data-consent-status></div>
        <CookieConsent
            initialCookieTypes={{
                essentials: {
                    isAccepted: true,
                    isEditable: false,
                    label: 'Essentielle Funktionen',
                },
                analytics: {
                    isAccepted: false,
                    isEditable: true,
                    label: 'Analyse & Marketing',
                },
                functionals: {
                    isAccepted: false,
                    isEditable: true,
                    label: 'Funktionelle Erweiterungen',
                },
            }}
        >
            {({
                acceptAll,
                acceptSelected,
                additionalAcceptProps,
                additionalDeclineProps,
                types,
                setConsent,
            }) => (
                <React.Fragment>
                    <CookieTitle innerHTML="Verwendung von Cookies und Daten" />
                    <CookieText innerHTML="Diese Webseite verwendet Cookies und ähnliche Technologien. Um zusätzliche Funktionen und Informationen anbieten zu können, werden Services von Drittanbietern genutzt. Dabei kann ein Datenaustausch mit Drittanbietern stattfinden. Wenn Sie der Verwendung nicht zustimmen, werden ausschließlich Cookies und Daten genutzt, die technisch notwendig sind." />
                    <CookieTypeSelect types={types} setConsent={setConsent} />
                    <CookieText
                        innerHTML={
                            'Weitere Informationen sowie Details zu den Kategorien finden Sie unter <a href="#">Datenschutz</a> und <a href="#1">Impressum.</a>'
                        }
                    />
                    <CookieActions
                        isMirrored
                        primary={
                            <Button.View
                                {...additionalAcceptProps}
                                onClick={acceptAll}
                            >
                                <Button.Label>
                                    Alle Cookies erlauben
                                </Button.Label>
                            </Button.View>
                        }
                        secondary={
                            <ButtonGhost.View
                                {...additionalDeclineProps}
                                onClick={acceptSelected}
                            >
                                <ButtonGhost.Label>
                                    Auswahl übernehmen
                                </ButtonGhost.Label>
                            </ButtonGhost.View>
                        }
                    />
                </React.Fragment>
            )}
        </CookieConsent>
    </div>
);

export const CustomOverlayOpacity: Story = () => (
    <div>
        <script type="text/cookie-consent-script-analytics">
            {`console.log('b.ig brother is watching you!');`}
        </script>
        <script type="text/cookie-consent-script-functionals">
            {`console.log('b.unctional cookies enabled!');`}
        </script>
        <button data-consent-button>Open consent banner</button>
        <div data-consent-status></div>
        <CookieConsent
            initialCookieTypes={{
                essentials: {
                    isAccepted: true,
                    isEditable: false,
                    label: 'Essentielle Funktionen',
                },
                analytics: {
                    isAccepted: false,
                    isEditable: true,
                    label: 'Analyse & Marketing',
                },
                functionals: {
                    isAccepted: false,
                    isEditable: true,
                    label: 'Funktionelle Erweiterungen',
                },
            }}
            overlayOpacity={0.8}
        >
            {({
                acceptAll,
                acceptSelected,
                additionalAcceptProps,
                additionalDeclineProps,
                types,
                setConsent,
            }) => (
                <React.Fragment>
                    <CookieTitle innerHTML="Verwendung von Cookies und Daten" />
                    <CookieText innerHTML="Diese Webseite verwendet Cookies und ähnliche Technologien. Um zusätzliche Funktionen und Informationen anbieten zu können, werden Services von Drittanbietern genutzt. Dabei kann ein Datenaustausch mit Drittanbietern stattfinden. Wenn Sie der Verwendung nicht zustimmen, werden ausschließlich Cookies und Daten genutzt, die technisch notwendig sind." />
                    <CookieTypeSelect types={types} setConsent={setConsent} />
                    <CookieText
                        innerHTML={
                            'Weitere Informationen sowie Details zu den Kategorien finden Sie unter <a href="#">Datenschutz</a> und <a href="#1">Impressum.</a>'
                        }
                    />
                    <CookieActions
                        isMirrored
                        primary={
                            <Button.View
                                {...additionalAcceptProps}
                                onClick={acceptAll}
                            >
                                <Button.Label>
                                    Alle Cookies erlauben
                                </Button.Label>
                            </Button.View>
                        }
                        secondary={
                            <ButtonGhost.View
                                {...additionalDeclineProps}
                                onClick={acceptSelected}
                            >
                                <ButtonGhost.Label>
                                    Auswahl übernehmen
                                </ButtonGhost.Label>
                            </ButtonGhost.View>
                        }
                    />
                </React.Fragment>
            )}
        </CookieConsent>
    </div>
);

export const WithWhitelist: Story = () => (
    <div>
        <script type="text/cookie-consent-script-analytics">
            {`console.log('b.ig brother is watching you!');`}
        </script>
        <script type="text/cookie-consent-script-functionals">
            {`console.log('b.unctional cookies enabled!');`}
        </script>
        <button data-consent-button>Open consent banner</button>
        <div data-consent-status></div>
        <CookieConsent
            initialCookieTypes={{
                essentials: {
                    isAccepted: true,
                    isEditable: false,
                    label: 'Essentielle Funktionen',
                },
                analytics: {
                    isAccepted: false,
                    isEditable: true,
                    label: 'Analyse & Marketing',
                },
                functionals: {
                    isAccepted: false,
                    isEditable: true,
                    label: 'Funktionelle Erweiterungen',
                },
            }}
            urlWhitelist={['/impressum', '/datenschutz']}
        >
            {({
                acceptAll,
                acceptSelected,
                additionalAcceptProps,
                additionalDeclineProps,
                types,
                setConsent,
            }) => (
                <React.Fragment>
                    <CookieTitle innerHTML="Verwendung von Cookies und Daten" />
                    <CookieText innerHTML="Diese Webseite verwendet Cookies und ähnliche Technologien. Um zusätzliche Funktionen und Informationen anbieten zu können, werden Services von Drittanbietern genutzt. Dabei kann ein Datenaustausch mit Drittanbietern stattfinden. Wenn Sie der Verwendung nicht zustimmen, werden ausschließlich Cookies und Daten genutzt, die technisch notwendig sind." />
                    <CookieTypeSelect types={types} setConsent={setConsent} />
                    <CookieText
                        innerHTML={
                            'Weitere Informationen sowie Details zu den Kategorien finden Sie unter <a href="#">Datenschutz</a> und <a href="#1">Impressum.</a>'
                        }
                    />
                    <CookieActions
                        isMirrored
                        primary={
                            <Button.View
                                {...additionalAcceptProps}
                                onClick={acceptAll}
                            >
                                <Button.Label>
                                    Alle Cookies erlauben
                                </Button.Label>
                            </Button.View>
                        }
                        secondary={
                            <ButtonGhost.View
                                {...additionalDeclineProps}
                                onClick={acceptSelected}
                            >
                                <ButtonGhost.Label>
                                    Auswahl übernehmen
                                </ButtonGhost.Label>
                            </ButtonGhost.View>
                        }
                    />
                </React.Fragment>
            )}
        </CookieConsent>
    </div>
);

export const CustomStatusFormats: Story = () => (
    <div>
        <script type="text/cookie-consent-script-analytics">
            {`console.log('b.ig brother is watching you!');`}
        </script>
        <script type="text/cookie-consent-script-functionals">
            {`console.log('b.unctional cookies enabled!');`}
        </script>
        <button data-consent-button>Open consent banner</button>
        <div data-consent-status></div>
        <CookieConsent
            initialCookieTypes={{
                essentials: {
                    isAccepted: true,
                    isEditable: false,
                    label: 'Essentielle Funktionen',
                },
                analytics: {
                    isAccepted: false,
                    isEditable: true,
                    label: 'Analyse & Marketing',
                },
                functionals: {
                    isAccepted: false,
                    isEditable: true,
                    label: 'Funktionelle Erweiterungen',
                },
            }}
            consentStatusMsg="Cookie aktualisiert am <DATE> um <TIME> Uhr"
            dateFormat="dd.mm.yy"
            timeFormat="hh:mm"
            localeKey="de"
        >
            {({
                acceptAll,
                acceptSelected,
                additionalAcceptProps,
                additionalDeclineProps,
                types,
                setConsent,
            }) => (
                <React.Fragment>
                    <CookieTitle innerHTML="Verwendung von Cookies und Daten" />
                    <CookieText innerHTML="Diese Webseite verwendet Cookies und ähnliche Technologien. Um zusätzliche Funktionen und Informationen anbieten zu können, werden Services von Drittanbietern genutzt. Dabei kann ein Datenaustausch mit Drittanbietern stattfinden. Wenn Sie der Verwendung nicht zustimmen, werden ausschließlich Cookies und Daten genutzt, die technisch notwendig sind." />
                    <CookieTypeSelect types={types} setConsent={setConsent} />
                    <CookieText
                        innerHTML={
                            'Weitere Informationen sowie Details zu den Kategorien finden Sie unter <a href="#">Datenschutz</a> und <a href="#1">Impressum.</a>'
                        }
                    />
                    <CookieActions
                        isMirrored
                        primary={
                            <Button.View
                                {...additionalAcceptProps}
                                onClick={acceptAll}
                            >
                                <Button.Label>
                                    Alle Cookies erlauben
                                </Button.Label>
                            </Button.View>
                        }
                        secondary={
                            <ButtonGhost.View
                                {...additionalDeclineProps}
                                onClick={acceptSelected}
                            >
                                <ButtonGhost.Label>
                                    Auswahl übernehmen
                                </ButtonGhost.Label>
                            </ButtonGhost.View>
                        }
                    />
                </React.Fragment>
            )}
        </CookieConsent>
    </div>
);

export const CustomStatus: Story = () => (
    <div>
        <script type="text/cookie-consent-script-analytics">
            {`console.log('b.ig brother is watching you!');`}
        </script>
        <script type="text/cookie-consent-script-functionals">
            {`console.log('b.unctional cookies enabled!');`}
        </script>
        <button data-consent-button>Open consent banner</button>
        <div data-consent-status></div>
        <CookieConsent
            initialCookieTypes={{
                essentials: {
                    isAccepted: true,
                    isEditable: false,
                    label: 'Essentielle Funktionen',
                },
                analytics: {
                    isAccepted: false,
                    isEditable: true,
                    label: 'Analyse & Marketing',
                },
                functionals: {
                    isAccepted: false,
                    isEditable: true,
                    label: 'Funktionelle Erweiterungen',
                },
            }}
            status={({ updatedAt }) => (
                <div>
                    Updated at:{' '}
                    {updatedAt ? new Date(updatedAt).toISOString() : ''}
                </div>
            )}
        >
            {({
                acceptAll,
                acceptSelected,
                additionalAcceptProps,
                additionalDeclineProps,
                types,
                setConsent,
            }) => (
                <React.Fragment>
                    <CookieTitle innerHTML="Verwendung von Cookies und Daten" />
                    <CookieText innerHTML="Diese Webseite verwendet Cookies und ähnliche Technologien. Um zusätzliche Funktionen und Informationen anbieten zu können, werden Services von Drittanbietern genutzt. Dabei kann ein Datenaustausch mit Drittanbietern stattfinden. Wenn Sie der Verwendung nicht zustimmen, werden ausschließlich Cookies und Daten genutzt, die technisch notwendig sind." />
                    <CookieTypeSelect types={types} setConsent={setConsent} />
                    <CookieText
                        innerHTML={
                            'Weitere Informationen sowie Details zu den Kategorien finden Sie unter <a href="#">Datenschutz</a> und <a href="#1">Impressum.</a>'
                        }
                    />
                    <CookieActions
                        isMirrored
                        primary={
                            <Button.View
                                {...additionalAcceptProps}
                                onClick={acceptAll}
                            >
                                <Button.Label>
                                    Alle Cookies erlauben
                                </Button.Label>
                            </Button.View>
                        }
                        secondary={
                            <ButtonGhost.View
                                {...additionalDeclineProps}
                                onClick={acceptSelected}
                            >
                                <ButtonGhost.Label>
                                    Auswahl übernehmen
                                </ButtonGhost.Label>
                            </ButtonGhost.View>
                        }
                    />
                </React.Fragment>
            )}
        </CookieConsent>
    </div>
);
