import * as React from 'react';
import { Meta, Story } from '@storybook/react';
import NewsVideo from 'components/sections/news/NewsVideo';
import Button from 'components/buttons/Button';
import ButtonGhost from 'components/buttons/ButtonGhost';
import CookieConsent, {
    CookieActions,
    CookieText,
    CookieTitle,
} from 'components/blocks/CookieConsent';

export default {
    title: 'Sections/News/NewsVideo',
    component: NewsVideo,
    parameters: {
        status: {
            type: 'stable',
        },
    },
    decorators: [
        (Story) => (
            <div>
                <Story />
                <CookieConsent>
                    {({
                        acceptAll,
                        declineAll,
                        additionalAcceptProps,
                        additionalDeclineProps,
                    }) => (
                        <React.Fragment>
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
                                        <Button.Label>
                                            Cookies zustimmen
                                        </Button.Label>
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
        ),
    ],
} as Meta;

export const Default: Story = () => (
    <NewsVideo
        bgImage={{
            small: 'http://unsplash.it/640/480',
            medium: 'http://unsplash.it/1024/576',
            large: 'http://unsplash.it/1440/810',
            xlarge: 'http://unsplash.it/1680/810',
            alt: 'Placeholder Image',
        }}
        embedId="pVE92TNDwUk"
    />
);

export const WithActions: Story = () => (
    <NewsVideo
        bgImage={{
            small: 'http://unsplash.it/640/480',
            medium: 'http://unsplash.it/1024/576',
            large: 'http://unsplash.it/1440/810',
            xlarge: 'http://unsplash.it/1680/810',
            alt: 'Placeholder Image',
        }}
        embedId="pVE92TNDwUk"
        primaryAction={(isInverted) => (
            <Button.View isInverted={isInverted}>
                <Button.Label>Primary</Button.Label>
            </Button.View>
        )}
        secondaryAction={(isInverted) => (
            <ButtonGhost.View isInverted={isInverted}>
                <ButtonGhost.Label>Secondary</ButtonGhost.Label>
            </ButtonGhost.View>
        )}
    />
);

export const CustomConsentText: Story = () => (
    <NewsVideo
        bgImage={{
            small: 'http://unsplash.it/640/480',
            medium: 'http://unsplash.it/1024/576',
            large: 'http://unsplash.it/1440/810',
            xlarge: 'http://unsplash.it/1680/810',
            alt: 'Placeholder Image',
        }}
        embedId="pVE92TNDwUk"
        primaryAction={(isInverted) => (
            <Button.View isInverted={isInverted}>
                <Button.Label>Primary</Button.Label>
            </Button.View>
        )}
        secondaryAction={(isInverted) => (
            <ButtonGhost.View isInverted={isInverted}>
                <ButtonGhost.Label>Secondary</ButtonGhost.Label>
            </ButtonGhost.View>
        )}
        consentText="Cookie Consent"
    />
);

export const CustomConsentAction: Story = () => (
    <NewsVideo
        bgImage={{
            small: 'http://unsplash.it/640/480',
            medium: 'http://unsplash.it/1024/576',
            large: 'http://unsplash.it/1440/810',
            xlarge: 'http://unsplash.it/1680/810',
            alt: 'Placeholder Image',
        }}
        embedId="pVE92TNDwUk"
        primaryAction={(isInverted) => (
            <Button.View isInverted={isInverted}>
                <Button.Label>Primary</Button.Label>
            </Button.View>
        )}
        secondaryAction={(isInverted) => (
            <ButtonGhost.View isInverted={isInverted}>
                <ButtonGhost.Label>Secondary</ButtonGhost.Label>
            </ButtonGhost.View>
        )}
        consentAction={({ handleClick, consentProps }) => (
            <button onClick={handleClick} {...consentProps}>
                open cookie consent
            </button>
        )}
    />
);

export const WithBackground: Story = () => (
    <NewsVideo
        bgMode="full"
        bgImage={{
            small: 'http://unsplash.it/640/480',
            medium: 'http://unsplash.it/1024/576',
            large: 'http://unsplash.it/1440/810',
            xlarge: 'http://unsplash.it/1680/810',
            alt: 'Placeholder Image',
        }}
        embedId="pVE92TNDwUk"
        primaryAction={(isInverted) => (
            <Button.View isInverted={isInverted}>
                <Button.Label>Primary</Button.Label>
            </Button.View>
        )}
        secondaryAction={(isInverted) => (
            <ButtonGhost.View isInverted={isInverted}>
                <ButtonGhost.Label>Secondary</ButtonGhost.Label>
            </ButtonGhost.View>
        )}
    />
);

export const isInverted: Story = () => (
    <NewsVideo
        bgImage={{
            small: 'http://unsplash.it/640/480',
            medium: 'http://unsplash.it/1024/576',
            large: 'http://unsplash.it/1440/810',
            xlarge: 'http://unsplash.it/1680/810',
            alt: 'Placeholder Image',
        }}
        embedId="pVE92TNDwUk"
        primaryAction={(isInverted) => (
            <Button.View isInverted={isInverted}>
                <Button.Label>Primary</Button.Label>
            </Button.View>
        )}
        secondaryAction={(isInverted) => (
            <ButtonGhost.View isInverted={isInverted}>
                <ButtonGhost.Label>Secondary</ButtonGhost.Label>
            </ButtonGhost.View>
        )}
        bgMode="inverted"
    />
);
