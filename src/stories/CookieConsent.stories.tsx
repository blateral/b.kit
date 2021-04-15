/* eslint-disable react/no-unescaped-entities */
import * as React from 'react';
import { Meta, Story } from '@storybook/react';
import CookieConsent from 'components/sections/CookieConsent';

export default {
    title: 'Sections/CookieConsent',
    component: CookieConsent,
} as Meta;

export const Default: Story = () => (
    <>
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
                <div>
                    <p>Cookie Consent</p>
                    <br />
                    <button {...additionalAcceptProps} onClick={handleAccept}>
                        accept
                    </button>
                    <button {...additionalDeclineProps} onClick={handleDecline}>
                        decline
                    </button>
                </div>
            )}
        </CookieConsent>
    </>
);
