/* eslint-disable react/display-name */
import * as React from 'react';
import { Meta, Story } from '@storybook/react';
import CallToActionDouble, {
    CallToActionDoubleComponent,
} from '../../components/sections/CallToActionDouble';
import ButtonGhost from 'components/buttons/ButtonGhost';
import Button from 'components/buttons/Button';

export default {
    title: 'Sections / CallToActionDouble',
    component: CallToActionDoubleComponent,
} as Meta;

export const Default: Story = () => (
    <CallToActionDouble
        title="Fragen an uns!"
        column={{
            title: 'Expertenchat',
        }}
    />
);

export const WithSuperTitle: Story = () => (
    <CallToActionDouble
        superTitle="Kontakt"
        title="Fragen an uns!"
        column={{
            superTitle: 'Kontakt',
            title: 'Expertenchat',
        }}
    />
);

export const WithIntroText: Story = () => (
    <CallToActionDouble
        superTitle="Kontakt"
        title="Fragen an uns!"
        text="Gerne beraten wir Sie individuell, welches unserer Produkte am geeignetsten für Ihre Anforderungen ist. Kontaktieren Sie uns unkompliziert per Telefon oder E-Mail."
        column={{
            superTitle: 'Kontakt',
            title: 'Expertenchat',
            text: 'Wir sind im Chat für Sie da. Probieren Sie es gleich aus!',
        }}
    />
);

export const WithContactAsRichtext: Story = () => (
    <CallToActionDouble
        superTitle="Kontakt"
        title="Fragen an uns!"
        text="Gerne beraten wir Sie individuell, welches unserer Produkte am geeignetsten für Ihre Anforderungen ist. Kontaktieren Sie uns unkompliziert per Telefon oder E-Mail."
        column={{
            superTitle: 'Kontakt',
            title: 'Expertenchat',
            text: 'Wir sind im Chat für Sie da. Probieren Sie es gleich aus!',
            contact: {
                avatar: {
                    src: 'https://via.placeholder.com/196',
                    alt: 'avatar',
                },
                description: `<b>Frau Manuela Müller</b>
                    <br/> 
                    Ihre Ansprechpartnerin im Haus St. Franziskus
                    <br/>
                    <br/>
                        <p class="icon-label icon-label--list">
                            <svg
                                width="25"
                                height="25"
                                viewBox="0 0 25 25"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fill={iconColor}
                                    d="M23.92962 18.18155c1.4269 1.42053 1.4269 2.98303 0 4.6876-.57072.66283-1.12955 1.16-1.6765 1.49142-.54693.33151-.99875.52086-1.35545.56825-.3567.04729-.86797.07098-1.53382.07098-1.85494 0-4.06648-.94696-6.63472-2.84087-2.04518-1.46783-3.90002-3.05402-5.56462-4.75858-2.1402-2.22543-4.01882-4.75858-5.63596-7.59946C.10175 7.14937-.3263 4.97133.24443 3.26676c.28537-.89961.9512-1.68086 1.99752-2.3438l.07134-.07102c.8561-.56818 1.61704-.85227 2.28288-.85227.90366 0 1.71216.42613 2.42556 1.27837l.07134.07103C8.18695 2.7695 8.94791 3.88222 9.37595 4.6871c.7134 1.46782.68962 2.7225-.07134 3.76424-.57072.75758-.85608 1.30206-.85608 1.63348 0 .14206.30914.56825.92742 1.27847l.07134.07098c1.14144 1.27848 1.75972 1.965 1.85484 2.05968.04756 0 .09512.02369.14268.07108.04756.04729.09512.09467.14278.14196l.14268.14207c.9512.94705 1.64082 1.60988 2.06886 1.98869l.07134.07098c.42804.3788.7134.56825.85608.56825.2378 0 .92742-.3551 2.06886-1.06542.33292-.23674.73718-.35511 1.21288-.35511.85608 0 1.89052.3551 3.1033 1.06542 1.21278.71022 2.15209 1.39675 2.81793 2.05958z"
                                />
                            </svg>
                            <span>+49 (0) 7551-9534-41</span>
                        </p>
                        <p class="icon-label icon-label--list">
                            <SVG
                                width="25"
                                height="25"
                                viewBox="0 0 25 25"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fill={iconColor}
                                    d="M22.3988 2.6786c.61982 0 1.16669.24181 1.64061.72545.47402.48363.71098 1.0417.71098 1.6741v14.844c0 .6324-.23696 1.1905-.71098 1.6741-.47392.4836-1.0208.7255-1.64061.7255H2.60173c-.61979 0-1.16669-.2419-1.64061-.7255s-.71094-1.0417-.71094-1.6741v-14.844c0-.63244.23698-1.1905.71094-1.6741.47396-.48363 1.0208-.72545 1.64061-.72545zm-.27349 5.0781V5.3571l-9.62495 6.529-9.62504-6.529v2.3996l9.62504 6.529z"
                                />
                            </SVG>
                            <a href="mailto:mueller@ueberlingen.de">mueller@ueberlingen.de</a>
                        </p>
                `,
            },
        }}
        contact={{
            avatar: {
                src: 'https://via.placeholder.com/196',
                alt: 'avatar',
            },
            description: `<b>Frau Manuela Müller</b>
                    <br/> 
                    Ihre Ansprechpartnerin im Haus St. Franziskus
                    <br/>
                    <br/>
                        <p class="icon-label icon-label--list">
                            <svg
                                width="25"
                                height="25"
                                viewBox="0 0 25 25"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fill={iconColor}
                                    d="M23.92962 18.18155c1.4269 1.42053 1.4269 2.98303 0 4.6876-.57072.66283-1.12955 1.16-1.6765 1.49142-.54693.33151-.99875.52086-1.35545.56825-.3567.04729-.86797.07098-1.53382.07098-1.85494 0-4.06648-.94696-6.63472-2.84087-2.04518-1.46783-3.90002-3.05402-5.56462-4.75858-2.1402-2.22543-4.01882-4.75858-5.63596-7.59946C.10175 7.14937-.3263 4.97133.24443 3.26676c.28537-.89961.9512-1.68086 1.99752-2.3438l.07134-.07102c.8561-.56818 1.61704-.85227 2.28288-.85227.90366 0 1.71216.42613 2.42556 1.27837l.07134.07103C8.18695 2.7695 8.94791 3.88222 9.37595 4.6871c.7134 1.46782.68962 2.7225-.07134 3.76424-.57072.75758-.85608 1.30206-.85608 1.63348 0 .14206.30914.56825.92742 1.27847l.07134.07098c1.14144 1.27848 1.75972 1.965 1.85484 2.05968.04756 0 .09512.02369.14268.07108.04756.04729.09512.09467.14278.14196l.14268.14207c.9512.94705 1.64082 1.60988 2.06886 1.98869l.07134.07098c.42804.3788.7134.56825.85608.56825.2378 0 .92742-.3551 2.06886-1.06542.33292-.23674.73718-.35511 1.21288-.35511.85608 0 1.89052.3551 3.1033 1.06542 1.21278.71022 2.15209 1.39675 2.81793 2.05958z"
                                />
                            </svg>
                            <span>+49 (0) 7551-9534-41</span>
                        </p>
                        <p class="icon-label icon-label--list">
                            <SVG
                                width="25"
                                height="25"
                                viewBox="0 0 25 25"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fill={iconColor}
                                    d="M22.3988 2.6786c.61982 0 1.16669.24181 1.64061.72545.47402.48363.71098 1.0417.71098 1.6741v14.844c0 .6324-.23696 1.1905-.71098 1.6741-.47392.4836-1.0208.7255-1.64061.7255H2.60173c-.61979 0-1.16669-.2419-1.64061-.7255s-.71094-1.0417-.71094-1.6741v-14.844c0-.63244.23698-1.1905.71094-1.6741.47396-.48363 1.0208-.72545 1.64061-.72545zm-.27349 5.0781V5.3571l-9.62495 6.529-9.62504-6.529v2.3996l9.62504 6.529z"
                                />
                            </SVG>
                            <a href="mailto:mueller@ueberlingen.de">mueller@ueberlingen.de</a>
                        </p>
                `,
        }}
    />
);

export const WithActions: Story = () => (
    <CallToActionDouble
        superTitle="Kontakt"
        title="Fragen an uns!"
        text="Gerne beraten wir Sie individuell, welches unserer Produkte am geeignetsten für Ihre Anforderungen ist. Kontaktieren Sie uns unkompliziert per Telefon oder E-Mail."
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
        column={{
            superTitle: 'Kontakt',
            title: 'Expertenchat',
            text: 'Wir sind im Chat für Sie da. Probieren Sie es gleich aus!',
            primaryAction: (isInverted) => (
                <Button.View isInverted={isInverted}>
                    <Button.Label>Primary</Button.Label>
                </Button.View>
            ),
            secondaryAction: (isInverted) => (
                <ButtonGhost.View isInverted={isInverted}>
                    <ButtonGhost.Label>Secondary</ButtonGhost.Label>
                </ButtonGhost.View>
            ),
            contact: {
                avatar: {
                    src: 'https://via.placeholder.com/196',
                    alt: 'avatar',
                },
                description: `<b>Frau Manuela Müller</b>
                    <br/> 
                    Ihre Ansprechpartnerin im Haus St. Franziskus
                    <br/>
                    <br/>
                        <p class="icon-label icon-label--list">
                            <svg
                                width="25"
                                height="25"
                                viewBox="0 0 25 25"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fill={iconColor}
                                    d="M23.92962 18.18155c1.4269 1.42053 1.4269 2.98303 0 4.6876-.57072.66283-1.12955 1.16-1.6765 1.49142-.54693.33151-.99875.52086-1.35545.56825-.3567.04729-.86797.07098-1.53382.07098-1.85494 0-4.06648-.94696-6.63472-2.84087-2.04518-1.46783-3.90002-3.05402-5.56462-4.75858-2.1402-2.22543-4.01882-4.75858-5.63596-7.59946C.10175 7.14937-.3263 4.97133.24443 3.26676c.28537-.89961.9512-1.68086 1.99752-2.3438l.07134-.07102c.8561-.56818 1.61704-.85227 2.28288-.85227.90366 0 1.71216.42613 2.42556 1.27837l.07134.07103C8.18695 2.7695 8.94791 3.88222 9.37595 4.6871c.7134 1.46782.68962 2.7225-.07134 3.76424-.57072.75758-.85608 1.30206-.85608 1.63348 0 .14206.30914.56825.92742 1.27847l.07134.07098c1.14144 1.27848 1.75972 1.965 1.85484 2.05968.04756 0 .09512.02369.14268.07108.04756.04729.09512.09467.14278.14196l.14268.14207c.9512.94705 1.64082 1.60988 2.06886 1.98869l.07134.07098c.42804.3788.7134.56825.85608.56825.2378 0 .92742-.3551 2.06886-1.06542.33292-.23674.73718-.35511 1.21288-.35511.85608 0 1.89052.3551 3.1033 1.06542 1.21278.71022 2.15209 1.39675 2.81793 2.05958z"
                                />
                            </svg>
                            <span>+49 (0) 7551-9534-41</span>
                        </p>
                        <p class="icon-label icon-label--list">
                            <SVG
                                width="25"
                                height="25"
                                viewBox="0 0 25 25"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fill={iconColor}
                                    d="M22.3988 2.6786c.61982 0 1.16669.24181 1.64061.72545.47402.48363.71098 1.0417.71098 1.6741v14.844c0 .6324-.23696 1.1905-.71098 1.6741-.47392.4836-1.0208.7255-1.64061.7255H2.60173c-.61979 0-1.16669-.2419-1.64061-.7255s-.71094-1.0417-.71094-1.6741v-14.844c0-.63244.23698-1.1905.71094-1.6741.47396-.48363 1.0208-.72545 1.64061-.72545zm-.27349 5.0781V5.3571l-9.62495 6.529-9.62504-6.529v2.3996l9.62504 6.529z"
                                />
                            </SVG>
                            <a href="mailto:mueller@ueberlingen.de">mueller@ueberlingen.de</a>
                        </p>
                `,
            },
        }}
        contact={{
            avatar: {
                src: 'https://via.placeholder.com/196',
                alt: 'avatar',
            },
            description: `<b>Frau Manuela Müller</b>
                    <br/> 
                    Ihre Ansprechpartnerin im Haus St. Franziskus
                    <br/>
                    <br/>
                        <p class="icon-label icon-label--list">
                            <svg
                                width="25"
                                height="25"
                                viewBox="0 0 25 25"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fill={iconColor}
                                    d="M23.92962 18.18155c1.4269 1.42053 1.4269 2.98303 0 4.6876-.57072.66283-1.12955 1.16-1.6765 1.49142-.54693.33151-.99875.52086-1.35545.56825-.3567.04729-.86797.07098-1.53382.07098-1.85494 0-4.06648-.94696-6.63472-2.84087-2.04518-1.46783-3.90002-3.05402-5.56462-4.75858-2.1402-2.22543-4.01882-4.75858-5.63596-7.59946C.10175 7.14937-.3263 4.97133.24443 3.26676c.28537-.89961.9512-1.68086 1.99752-2.3438l.07134-.07102c.8561-.56818 1.61704-.85227 2.28288-.85227.90366 0 1.71216.42613 2.42556 1.27837l.07134.07103C8.18695 2.7695 8.94791 3.88222 9.37595 4.6871c.7134 1.46782.68962 2.7225-.07134 3.76424-.57072.75758-.85608 1.30206-.85608 1.63348 0 .14206.30914.56825.92742 1.27847l.07134.07098c1.14144 1.27848 1.75972 1.965 1.85484 2.05968.04756 0 .09512.02369.14268.07108.04756.04729.09512.09467.14278.14196l.14268.14207c.9512.94705 1.64082 1.60988 2.06886 1.98869l.07134.07098c.42804.3788.7134.56825.85608.56825.2378 0 .92742-.3551 2.06886-1.06542.33292-.23674.73718-.35511 1.21288-.35511.85608 0 1.89052.3551 3.1033 1.06542 1.21278.71022 2.15209 1.39675 2.81793 2.05958z"
                                />
                            </svg>
                            <span>+49 (0) 7551-9534-41</span>
                        </p>
                        <p class="icon-label icon-label--list">
                            <SVG
                                width="25"
                                height="25"
                                viewBox="0 0 25 25"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fill={iconColor}
                                    d="M22.3988 2.6786c.61982 0 1.16669.24181 1.64061.72545.47402.48363.71098 1.0417.71098 1.6741v14.844c0 .6324-.23696 1.1905-.71098 1.6741-.47392.4836-1.0208.7255-1.64061.7255H2.60173c-.61979 0-1.16669-.2419-1.64061-.7255s-.71094-1.0417-.71094-1.6741v-14.844c0-.63244.23698-1.1905.71094-1.6741.47396-.48363 1.0208-.72545 1.64061-.72545zm-.27349 5.0781V5.3571l-9.62495 6.529-9.62504-6.529v2.3996l9.62504 6.529z"
                                />
                            </SVG>
                            <a href="mailto:mueller@ueberlingen.de">mueller@ueberlingen.de</a>
                        </p>
                `,
        }}
    />
);

export const isInverted: Story = () => (
    <CallToActionDouble
        bgMode="inverted"
        superTitle="Kontakt"
        title="Fragen an uns!"
        text="Gerne beraten wir Sie individuell, welches unserer Produkte am geeignetsten für Ihre Anforderungen ist. Kontaktieren Sie uns unkompliziert per Telefon oder E-Mail."
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
        column={{
            superTitle: 'Kontakt',
            title: 'Expertenchat',
            text: 'Wir sind im Chat für Sie da. Probieren Sie es gleich aus!',
            primaryAction: (isInverted) => (
                <Button.View isInverted={isInverted}>
                    <Button.Label>Primary</Button.Label>
                </Button.View>
            ),
            secondaryAction: (isInverted) => (
                <ButtonGhost.View isInverted={isInverted}>
                    <ButtonGhost.Label>Secondary</ButtonGhost.Label>
                </ButtonGhost.View>
            ),
            contact: {
                avatar: {
                    src: 'https://via.placeholder.com/196',
                    alt: 'avatar',
                },
                description: `<b>Frau Manuela Müller</b>
                    <br/> 
                    Ihre Ansprechpartnerin im Haus St. Franziskus
                    <br/>
                    <br/>
                        <p class="icon-label icon-label--list">
                            <svg
                                width="25"
                                height="25"
                                viewBox="0 0 25 25"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fill={iconColor}
                                    d="M23.92962 18.18155c1.4269 1.42053 1.4269 2.98303 0 4.6876-.57072.66283-1.12955 1.16-1.6765 1.49142-.54693.33151-.99875.52086-1.35545.56825-.3567.04729-.86797.07098-1.53382.07098-1.85494 0-4.06648-.94696-6.63472-2.84087-2.04518-1.46783-3.90002-3.05402-5.56462-4.75858-2.1402-2.22543-4.01882-4.75858-5.63596-7.59946C.10175 7.14937-.3263 4.97133.24443 3.26676c.28537-.89961.9512-1.68086 1.99752-2.3438l.07134-.07102c.8561-.56818 1.61704-.85227 2.28288-.85227.90366 0 1.71216.42613 2.42556 1.27837l.07134.07103C8.18695 2.7695 8.94791 3.88222 9.37595 4.6871c.7134 1.46782.68962 2.7225-.07134 3.76424-.57072.75758-.85608 1.30206-.85608 1.63348 0 .14206.30914.56825.92742 1.27847l.07134.07098c1.14144 1.27848 1.75972 1.965 1.85484 2.05968.04756 0 .09512.02369.14268.07108.04756.04729.09512.09467.14278.14196l.14268.14207c.9512.94705 1.64082 1.60988 2.06886 1.98869l.07134.07098c.42804.3788.7134.56825.85608.56825.2378 0 .92742-.3551 2.06886-1.06542.33292-.23674.73718-.35511 1.21288-.35511.85608 0 1.89052.3551 3.1033 1.06542 1.21278.71022 2.15209 1.39675 2.81793 2.05958z"
                                />
                            </svg>
                            <span>+49 (0) 7551-9534-41</span>
                        </p>
                        <p class="icon-label icon-label--list">
                            <SVG
                                width="25"
                                height="25"
                                viewBox="0 0 25 25"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fill={iconColor}
                                    d="M22.3988 2.6786c.61982 0 1.16669.24181 1.64061.72545.47402.48363.71098 1.0417.71098 1.6741v14.844c0 .6324-.23696 1.1905-.71098 1.6741-.47392.4836-1.0208.7255-1.64061.7255H2.60173c-.61979 0-1.16669-.2419-1.64061-.7255s-.71094-1.0417-.71094-1.6741v-14.844c0-.63244.23698-1.1905.71094-1.6741.47396-.48363 1.0208-.72545 1.64061-.72545zm-.27349 5.0781V5.3571l-9.62495 6.529-9.62504-6.529v2.3996l9.62504 6.529z"
                                />
                            </SVG>
                            <a href="mailto:mueller@ueberlingen.de">mueller@ueberlingen.de</a>
                        </p>
                `,
            },
        }}
        contact={{
            avatar: {
                src: 'https://via.placeholder.com/196',
                alt: 'avatar',
            },
            description: `<b>Frau Manuela Müller</b>
                    <br/> 
                    Ihre Ansprechpartnerin im Haus St. Franziskus
                    <br/>
                    <br/>
                        <p class="icon-label icon-label--list">
                            <svg
                                width="25"
                                height="25"
                                viewBox="0 0 25 25"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fill={iconColor}
                                    d="M23.92962 18.18155c1.4269 1.42053 1.4269 2.98303 0 4.6876-.57072.66283-1.12955 1.16-1.6765 1.49142-.54693.33151-.99875.52086-1.35545.56825-.3567.04729-.86797.07098-1.53382.07098-1.85494 0-4.06648-.94696-6.63472-2.84087-2.04518-1.46783-3.90002-3.05402-5.56462-4.75858-2.1402-2.22543-4.01882-4.75858-5.63596-7.59946C.10175 7.14937-.3263 4.97133.24443 3.26676c.28537-.89961.9512-1.68086 1.99752-2.3438l.07134-.07102c.8561-.56818 1.61704-.85227 2.28288-.85227.90366 0 1.71216.42613 2.42556 1.27837l.07134.07103C8.18695 2.7695 8.94791 3.88222 9.37595 4.6871c.7134 1.46782.68962 2.7225-.07134 3.76424-.57072.75758-.85608 1.30206-.85608 1.63348 0 .14206.30914.56825.92742 1.27847l.07134.07098c1.14144 1.27848 1.75972 1.965 1.85484 2.05968.04756 0 .09512.02369.14268.07108.04756.04729.09512.09467.14278.14196l.14268.14207c.9512.94705 1.64082 1.60988 2.06886 1.98869l.07134.07098c.42804.3788.7134.56825.85608.56825.2378 0 .92742-.3551 2.06886-1.06542.33292-.23674.73718-.35511 1.21288-.35511.85608 0 1.89052.3551 3.1033 1.06542 1.21278.71022 2.15209 1.39675 2.81793 2.05958z"
                                />
                            </svg>
                            <span>+49 (0) 7551-9534-41</span>
                        </p>
                        <p class="icon-label icon-label--list">
                            <SVG
                                width="25"
                                height="25"
                                viewBox="0 0 25 25"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fill={iconColor}
                                    d="M22.3988 2.6786c.61982 0 1.16669.24181 1.64061.72545.47402.48363.71098 1.0417.71098 1.6741v14.844c0 .6324-.23696 1.1905-.71098 1.6741-.47392.4836-1.0208.7255-1.64061.7255H2.60173c-.61979 0-1.16669-.2419-1.64061-.7255s-.71094-1.0417-.71094-1.6741v-14.844c0-.63244.23698-1.1905.71094-1.6741.47396-.48363 1.0208-.72545 1.64061-.72545zm-.27349 5.0781V5.3571l-9.62495 6.529-9.62504-6.529v2.3996l9.62504 6.529z"
                                />
                            </SVG>
                            <a href="mailto:mueller@ueberlingen.de">mueller@ueberlingen.de</a>
                        </p>
                `,
        }}
    />
);
