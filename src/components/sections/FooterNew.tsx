import Grid from 'components/base/Grid';
import Section, { mapToBgMode } from 'components/base/Section';
import Wrapper from 'components/base/Wrapper';
import Bdot from 'components/blocks/Bdot';
import LanguageSwitcher, { Language } from 'components/blocks/LanguageSwitcher';
import SocialList, { SocialItem } from 'components/blocks/SocialList';
import Copy from 'components/typography/Copy';
import Link from 'components/typography/Link';
import React from 'react';
import styled from 'styled-components';
import { useLibTheme } from 'utils/LibThemeProvider';
import { getColors as color, mq, spacings } from 'utils/styles';

const MainView = styled.div`
    & > * {
        margin-bottom: ${spacings.nudge * 2}px;
    }
`;

const ColTitle = styled(Copy)`
    margin-bottom: ${spacings.nudge * 2}px;
`;

const StyledLink = styled(Link)`
    display: block;
    text-decoration: none;
`;

const LinkList = styled.ul`
    padding: 0;
    margin: 0;
    list-style: none;
`;

const LinkItem = styled.li`
    & + & {
        margin-top: ${spacings.nudge}px;
    }
`;

const FooterCol = styled.div`
    & > * + * {
        margin-top: ${spacings.nudge * 5}px;
    }

    @media ${mq.semilarge} {
        & > * + * {
            margin-top: ${spacings.spacer}px;
        }
    }
`;

const Action = styled.div`
    padding-top: ${spacings.nudge * 2}px;
`;

const FootNote = styled(Copy)`
    margin-top: ${spacings.nudge * 5}px;

    @media ${mq.semilarge} {
        margin-top: ${spacings.spacer}px;
    }
`;

const BottomLinkList = styled.ul`
    padding: 0;
    margin: 0;
    list-style: none;

    display: flex;
    flex-direction: row;
    align-items: center;
`;

const BottomLinkItem = styled.li`
    & + & {
        margin-left: ${spacings.nudge}px;
    }
`;

const BottomView = styled.div`
    border-top: 1px solid ${({ theme }) => color(theme).elementBg.medium};
    padding: ${spacings.nudge * 2}px 0;

    & > * + * {
        margin-top: ${spacings.nudge * 2}px;
    }

    @media ${mq.semilarge} {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;

        & > * + * {
            margin-top: 0;
            margin-left: ${spacings.nudge * 2}px;
        }
    }
`;

const FooterNew: React.FC<{
    bgMode?: 'inverted';
    siteLinks?: {
        siteColTitle?: string;
        colLinks?: { href?: string; label?: string }[];
    }[];
    callToAction?: {
        title?: string;
        text?: string;
        action?: (isInverted?: boolean) => React.ReactNode;
    };

    socials?: {
        title?: string;
        social: SocialItem[];
    };
    footNote?: string;
    bottomLinks?: { href: string; label?: string; isExternal?: boolean }[];
    language?: Language[];
    languageIcon?: () => React.ReactNode;
    brandIcon?: boolean;
}> = ({
    bgMode,
    siteLinks,
    callToAction,
    socials,
    footNote,
    bottomLinks,
    languageIcon,
    language,
    brandIcon = true,
}) => {
    const { colors } = useLibTheme();

    const isInverted = bgMode === 'inverted';
    return (
        <Section
            renderAs="footer"
            bgMode={mapToBgMode(bgMode)}
            bgColor={bgMode ? colors.sectionBg.dark : colors.sectionBg.light}
        >
            <Wrapper addWhitespace>
                <MainView>
                    <Grid.Row gutter={40} medium={{ gutter: 32 }}>
                        {siteLinks &&
                            siteLinks.map((links, i) => {
                                return (
                                    <Grid.Col
                                        medium={{ span: 6 / 12 }}
                                        semilarge={{ span: 4 / 12 }}
                                        large={{ span: 3 / 12 }}
                                        key={i}
                                    >
                                        <ColTitle
                                            type="copy-b"
                                            isInverted={isInverted}
                                        >
                                            {links.siteColTitle}
                                        </ColTitle>
                                        <LinkList>
                                            {links.colLinks?.map((link, ii) => {
                                                return (
                                                    <LinkItem key={ii}>
                                                        <StyledLink
                                                            isInverted={
                                                                isInverted
                                                            }
                                                            href={link.href}
                                                        >
                                                            <Copy textColor="inherit">
                                                                {link.label}
                                                            </Copy>
                                                        </StyledLink>
                                                    </LinkItem>
                                                );
                                            })}
                                        </LinkList>
                                    </Grid.Col>
                                );
                            })}
                        {(callToAction || socials) && (
                            <Grid.Col large={{ span: 3 / 12 }}>
                                <FooterCol>
                                    {callToAction && (
                                        <div>
                                            <ColTitle
                                                type="copy-b"
                                                isInverted={isInverted}
                                            >
                                                {callToAction.title}
                                            </ColTitle>
                                            <Copy isInverted={isInverted}>
                                                {callToAction.text}
                                            </Copy>

                                            {callToAction.action && (
                                                <Action>
                                                    {callToAction.action(
                                                        isInverted
                                                    )}
                                                </Action>
                                            )}
                                        </div>
                                    )}
                                    {socials && (
                                        <div>
                                            <ColTitle
                                                isInverted={isInverted}
                                                type="copy-b"
                                            >
                                                {socials.title}
                                            </ColTitle>
                                            <SocialList
                                                isInverted={isInverted}
                                                items={socials.social.map(
                                                    (item) => {
                                                        return {
                                                            href:
                                                                item?.href ||
                                                                '',
                                                            icon: item?.icon,
                                                        };
                                                    }
                                                )}
                                            />
                                        </div>
                                    )}
                                </FooterCol>
                            </Grid.Col>
                        )}
                    </Grid.Row>
                    {footNote && (
                        <FootNote
                            isInverted={isInverted}
                            innerHTML={footNote}
                        />
                    )}
                </MainView>
                {((bottomLinks && bottomLinks.length > 0) ||
                    language ||
                    !brandIcon) && (
                    <BottomView>
                        {language && (
                            <LanguageSwitcher
                                isInverted={isInverted}
                                langs={language}
                                languageIcon={languageIcon}
                            />
                        )}
                        <BottomLinkList>
                            {bottomLinks?.map((bottomLink, i) => {
                                return (
                                    <BottomLinkItem key={i}>
                                        <StyledLink
                                            isInverted={isInverted}
                                            href={bottomLink.href}
                                            isExternal={bottomLink.isExternal}
                                        >
                                            <Copy textColor="inherit">
                                                {bottomLink.label}
                                            </Copy>
                                        </StyledLink>
                                    </BottomLinkItem>
                                );
                            })}
                            {brandIcon && (
                                <BottomLinkItem>
                                    <Bdot />
                                </BottomLinkItem>
                            )}
                        </BottomLinkList>
                    </BottomView>
                )}
            </Wrapper>
        </Section>
    );
};

export default FooterNew;
