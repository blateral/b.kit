import React from 'react';
import { Meta, Story } from '@storybook/react';
import Video, { VideoComponent } from 'components/sections/Video';
import Play from 'components/base/icons/Play';
import CookieConsent, {
    CookieActions,
    CookieText,
    CookieTitle,
} from 'components/blocks/CookieConsent';
import Button from 'components/buttons/Button';
import ButtonGhost from 'components/buttons/ButtonGhost';

export default {
    title: 'Sections/Video',
    component: VideoComponent,
    parameters: {
        status: {
            type: ['preview', 'qsReady'],
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
    <Video
        bgImage={{
            small: 'https://unsplash.it/640/480',
            medium: 'https://unsplash.it/1024/576',
            large: 'https://unsplash.it/1440/810',
            xlarge: 'https://unsplash.it/1680/810',
            alt: 'Placeholder Image',
        }}
        embedId="pVE92TNDwUk"
    />
);

export const CustomConsentText: Story = () => (
    <Video
        bgImage={{
            small: 'https://unsplash.it/640/480',
            medium: 'https://unsplash.it/1024/576',
            large: 'https://unsplash.it/1440/810',
            xlarge: 'https://unsplash.it/1680/810',
            alt: 'Placeholder Image',
        }}
        embedId="pVE92TNDwUk"
        consentText="Cookie Consent"
    />
);

export const CustomConsentAction: Story = () => (
    <Video
        bgImage={{
            small: 'https://unsplash.it/640/480',
            medium: 'https://unsplash.it/1024/576',
            large: 'https://unsplash.it/1440/810',
            xlarge: 'https://unsplash.it/1680/810',
            alt: 'Placeholder Image',
        }}
        embedId="pVE92TNDwUk"
        consentAction={({ handleClick, consentProps }) => (
            <button {...consentProps} onClick={handleClick}>
                Open cookie consent banner
            </button>
        )}
    />
);

export const WithBackground: Story = () => (
    <Video
        bgMode="full"
        bgImage={{
            small: 'https://unsplash.it/640/480',
            medium: 'https://unsplash.it/1024/576',
            large: 'https://unsplash.it/1440/810',
            xlarge: 'https://unsplash.it/1680/810',
            alt: 'Placeholder Image',
        }}
        embedId="pVE92TNDwUk"
    />
);

export const WithSplittedBackground: Story = () => (
    <Video
        bgMode="splitted"
        bgImage={{
            small: 'https://unsplash.it/640/480',
            medium: 'https://unsplash.it/1024/576',
            large: 'https://unsplash.it/1440/810',
            xlarge: 'https://unsplash.it/1680/810',
            alt: 'Placeholder Image',
        }}
        embedId="pVE92TNDwUk"
    />
);

export const Inverted: Story = () => (
    <Video
        bgMode="inverted"
        bgImage={{
            small: 'https://unsplash.it/640/480',
            medium: 'https://unsplash.it/1024/576',
            large: 'https://unsplash.it/1440/810',
            xlarge: 'https://unsplash.it/1680/810',
            alt: 'Placeholder Image',
        }}
        embedId="pVE92TNDwUk"
    />
);

export const WithCustomPlayIcon: Story = () => (
    <Video
        bgMode="inverted"
        bgImage={{
            small: 'https://unsplash.it/640/480',
            medium: 'https://unsplash.it/1024/576',
            large: 'https://unsplash.it/1440/810',
            xlarge: 'https://unsplash.it/1680/810',
            alt: 'Placeholder Image',
        }}
        embedId="pVE92TNDwUk"
        playIcon={<Play iconColor="red" />}
    />
);
