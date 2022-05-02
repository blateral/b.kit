import Grid from 'components/base/Grid';
import Section, { mapToBgMode } from 'components/base/Section';
import Wrapper from 'components/base/Wrapper';
import Bdot from 'components/blocks/Bdot';
import LanguageSwitcher, { Language } from 'components/blocks/LanguageSwitcher';
import Copy from 'components/typography/Copy';
import Link, { LinkProps } from 'components/typography/Link';
import React, { useMemo } from 'react';
import styled from 'styled-components';
import { useLibTheme } from 'utils/LibThemeProvider';
import { getColors as color, mq, spacings, withRange } from 'utils/styles';

const FooterSection = styled(Section)`
    ${withRange([0], 'padding-bottom')}
    ${withRange([0], 'margin-bottom')}
`;

const MainView = styled.div`
    & > * {
        margin-bottom: ${spacings.nudge * 2}px;
    }
`;

const ColTitle = styled(Copy)`
    margin-bottom: ${spacings.nudge * 2}px;
`;

const StyledLink = styled(Link)<{ isInverted?: boolean }>`
    display: block;
    text-decoration: none;

    color: ${({ theme, isInverted }) =>
        isInverted ? color(theme).text.inverted : color(theme).text.default};
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

const CustomCol = styled.div`
    & > * + * {
        margin-top: ${spacings.nudge * 5}px;
    }

    @media ${mq.semilarge} {
        & > * + * {
            margin-top: ${spacings.spacer}px;
        }
    }
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

export interface SiteLinkGroup {
    title?: string;
    links?: Array<{ label?: string; link?: LinkProps }>;
}

const Footer: React.FC<{
    /** ID value for targeting section with anchor hashes */
    anchorId?: string;

    /** Section background */
    bgMode?: 'full' | 'inverted';

    /** Array of sitelink groups */
    siteLinks?: SiteLinkGroup[];

    /** Function to inject custom footer column content */
    customColumn?: (props: {
        isInverted?: boolean;
        siteLinks?: SiteLinkGroup[];
    }) => React.ReactNode;

    footNote?: string;
    bottomLinks?: { href: string; label?: string; isExternal?: boolean }[];
    language?: Language[];
    languageIcon?: () => React.ReactNode | null;
    brandIcon?: boolean;
}> = ({
    bgMode,
    siteLinks,
    customColumn,
    footNote,
    bottomLinks,
    languageIcon,
    language,
    brandIcon = true,
}) => {
    const { colors } = useLibTheme();

    const isInverted = bgMode === 'inverted';

    const customCol = useMemo(() => {
        return customColumn ? customColumn({ isInverted, siteLinks }) : null;
    }, [customColumn, isInverted, siteLinks]);

    return (
        <FooterSection
            addSeperation
            renderAs="footer"
            bgMode={mapToBgMode(bgMode, true)}
            bgColor={
                isInverted
                    ? colors.sectionBg.dark
                    : bgMode
                    ? colors.sectionBg.medium
                    : colors.sectionBg.light
            }
        >
            <Wrapper addWhitespace>
                <MainView>
                    <Grid.Row gutter={40} medium={{ gutter: 32 }}>
                        {siteLinks?.map(({ title, links }, i) => {
                            return (
                                <Grid.Col
                                    key={i}
                                    medium={{ span: 6 / 12 }}
                                    semilarge={{ span: 4 / 12 }}
                                    large={{ span: 3 / 12 }}
                                >
                                    <ColTitle
                                        type="copy-b"
                                        isInverted={isInverted}
                                    >
                                        {title}
                                    </ColTitle>
                                    <LinkList>
                                        {links?.map(({ link, label }, ii) => (
                                            <LinkItem key={ii}>
                                                <StyledLink
                                                    {...link}
                                                    isInverted={isInverted}
                                                >
                                                    <Copy textColor="inherit">
                                                        {label}
                                                    </Copy>
                                                </StyledLink>
                                            </LinkItem>
                                        ))}
                                    </LinkList>
                                </Grid.Col>
                            );
                        })}
                        {customCol && (
                            <Grid.Col large={{ span: 3 / 12 }}>
                                <CustomCol>{customCol}</CustomCol>
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
        </FooterSection>
    );
};

export default Footer;
