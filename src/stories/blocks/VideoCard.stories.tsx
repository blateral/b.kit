import * as React from 'react';
import { Meta, Story } from '@storybook/react';
import VideoCard from 'components/blocks/VideoCard';
import Play from 'components/base/icons/Play';
import CookieConsent, {
    CookieActions,
    CookieText,
    CookieTitle,
} from 'components/blocks/CookieConsent';
import Button from 'components/buttons/Button';
import ButtonGhost from 'components/buttons/ButtonGhost';

export default {
    title: 'Blocks/VideoCard',
    component: VideoCard,
    parameters: {
        status: {
            type: 'preview',
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
    <VideoCard
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

export const WithCookieTypeRestriction: Story = () => (
    <VideoCard
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

export const WithCustomPlayIcon: Story = () => (
    <VideoCard
        bgImage={{
            small: 'http://unsplash.it/640/480',
            medium: 'http://unsplash.it/1024/576',
            large: 'http://unsplash.it/1440/810',
            xlarge: 'http://unsplash.it/1680/810',
            alt: 'Placeholder Image',
        }}
        embedId="pVE92TNDwUk"
        playIcon={<Play iconColor="red" />}
    />
);
