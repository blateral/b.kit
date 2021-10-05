import React, { FC } from 'react';
import styled from 'styled-components';

import {
    getColors as color,
    getFonts as font,
    mq,
    spacings,
    withRange,
} from 'utils/styles';
import { withLibTheme } from 'utils/LibThemeProvider';
import Section from 'components/base/Section';
import Wrapper from 'components/base/Wrapper';
import Copy from 'components/typography/Copy';
import Link, { LinkProps } from 'components/typography/Link';
import Bdot from 'components/blocks/Bdot';
import SocialList from 'components/blocks/SocialList';

const MainView = styled(Wrapper)<{ isInverted?: boolean }>`
    background-color: ${({ theme, isInverted }) =>
        isInverted && color(theme).dark};
`;

const StyledLink = styled(Link)`
    display: inline-block;
    padding: ${spacings.nudge * 0.5}px 0;
    color: inherit;
    text-decoration: underline;
`;

/**** MAIN FOOTER CONTENT ****/
const Content = styled.div<{ isInverted?: boolean }>`
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    margin-left: -${spacings.spacer}px;
    margin-right: -${spacings.spacer}px;

    color: ${({ theme, isInverted }) =>
        isInverted ? color(theme).light : color(theme).dark};

    & > * {
        flex: 1;
    }

    & > *:last-child {
        flex: 1 1 100%;
    }

    @media ${mq.medium} {
        flex-direction: row;
        flex-wrap: wrap;
        padding-top: ${spacings.spacer}px;
        padding-bottom: ${spacings.spacer}px;

        & > *:last-child {
            max-width: 600px;
        }
    }

    @media ${mq.large} {
        & > *:last-child {
            flex: 1;
            max-width: 100%;
        }
    }
`;

const ContentBlock = styled.div<{
    direction?: 'row' | 'column';
    topSpace?: string;
    hAlign?: 'left' | 'center' | 'right';
}>`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

    padding: ${spacings.spacer}px;

    & > * + * {
        margin-top: ${spacings.spacer}px;
    }

    @media ${mq.medium} {
        flex-direction: ${({ direction }) => direction || 'column'};
        align-items: flex-start;
        padding-top: ${({ topSpace }) => topSpace && topSpace};
        text-align: left;
        min-width: 330px;
    }

    @media ${mq.large} {
        align-items: ${({ hAlign }) =>
            hAlign === 'right'
                ? 'flex-end'
                : hAlign === 'center'
                ? 'center'
                : 'flex-start'};
        text-align: ${({ hAlign }) => hAlign && hAlign};
    }
`;

const LogoLink = styled(Link)`
    display: inline-block;
    color: inherit;
`;

const ContactData = styled(Copy)`
    text-align: center;

    p {
        margin: 0;
        padding: 0;
    }

    @media ${mq.medium} {
        text-align: left;
        margin-top: auto;
        padding: ${spacings.nudge * 2}px 0;
    }
`;

const SiteLinksView = styled.div`
    flex: 50%;
    display: flex;
    flex-direction: column;
    text-align: center;

    margin: 0;

    & + & {
        padding-top: ${spacings.spacer * 2}px;
    }

    & > * + * {
        margin-top: ${spacings.nudge * 2}px;
    }

    @media ${mq.medium} {
        padding: 0 ${spacings.nudge * 3}px;
        text-align: left;

        & + & {
            padding-top: 0;
        }

        & > * + * {
            margin-top: ${spacings.nudge * 3}px;
        }
    }
`;

const SiteLink = styled(StyledLink)`
    font-weight: ${({ theme }) => font(theme)['copy-b'].medium.weight};
    font-family: ${({ theme }) => font(theme)['copy-b'].medium.family};
    ${({ theme }) => withRange(font(theme)['copy-b'].medium.size, 'font-size')}
    line-height: ${({ theme }) => font(theme)['copy-b'].medium.lineHeight};
`;

const LinkWrapper = styled(Copy)<{ isActive?: boolean; isInverted?: boolean }>`
    display: inline-block;
    position: relative;
    padding-bottom: 3px;

    &:before {
        content: ${({ isActive }) => (isActive ? `""` : undefined)};
        position: absolute;
        left: -12px;
        top: 50%;
        height: 4px;
        width: 4px;

        background-color: ${({ theme, isInverted }) =>
            isInverted ? color(theme).light : color(theme).dark};
        border-radius: 4px;

        transform: translateY(-100%);
    }

    &:after {
        content: '';
        position: absolute;
        left: 0;
        bottom: 0;
        right: 0;
        height: 1px;
        background-color: ${({ theme }) => color(theme).primary.medium};
        margin-top: ${spacings.nudge * 10}px;
        opacity: 0;

        transition: opacity 0.2s ease-in-out;

        ${SiteLink}:hover > & {
            opacity: 1;
        }
    }
`;

/**** BOTTOM FOOTER CONTENT ****/
const BottomWrapper = styled(Wrapper)`
    background-color: ${({ theme }) => color(theme).mono.light};
`;

const BottomView = styled(Wrapper)`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    min-height: 41px;

    padding-top: ${spacings.nudge * 1.5}px;
    padding-bottom: ${spacings.nudge * 1.5}px;

    color: ${({ theme }) => color(theme).dark};

    & > * + * {
        margin-left: ${spacings.spacer}px;
    }

    @media ${mq.medium} {
        justify-content: flex-end;
    }
`;

/**** FOOTER SECTION ****/
const Footer: FC<{
    isInverted?: boolean;
    logo?: {
        img?: string;
        link?: string;
    };
    columnTopSpace?: string;
    contactData?: string;
    siteLinks?: Array<LinkProps & { label?: string; isActive?: boolean }>;
    newsTitle?: string;
    newsText?: string;
    newsForm?: (isInverted?: boolean) => React.ReactNode;
    socials?: Array<{ icon: React.ReactNode; href: string }>;
    bottomLinks?: { href: string; label?: string; isExternal?: boolean }[];
    brandIcon?: React.ReactNode;
}> = ({
    isInverted = false,
    logo,
    columnTopSpace,
    contactData,
    siteLinks,
    newsTitle,
    newsText,
    newsForm,
    socials,
    bottomLinks,
    brandIcon,
}) => {
    // setup siteLinks columns
    const siteLinksColLeft =
        siteLinks && siteLinks.length > 6
            ? siteLinks?.slice(0, Math.ceil(siteLinks.length / 2))
            : siteLinks;
    const siteLinksColRight =
        siteLinks && siteLinks.length > 6
            ? siteLinks?.slice(Math.ceil(siteLinks.length / 2))
            : undefined;

    return (
        <Section renderAs="footer" bgMode="full" bgColor="transparent">
            <MainView clampWidth="large" isInverted={isInverted}>
                <Wrapper addWhitespace>
                    <Content isInverted={isInverted}>
                        <ContentBlock>
                            {logo?.img && (
                                <LogoLink href={logo?.link}>
                                    <img src={logo?.img} />
                                </LogoLink>
                            )}
                            {contactData && (
                                <ContactData
                                    size="small"
                                    isInverted={isInverted}
                                    innerHTML={contactData}
                                />
                            )}
                        </ContentBlock>
                        <ContentBlock
                            direction="row"
                            topSpace={logo && columnTopSpace}
                        >
                            {siteLinksColLeft && (
                                <SiteLinksView>
                                    {siteLinksColLeft.map((link, i) => (
                                        <SiteLink key={i} href={link.href}>
                                            <LinkWrapper
                                                type="copy"
                                                isActive={link.isActive}
                                                isInverted={isInverted}
                                            >
                                                {link.label || link.href}
                                            </LinkWrapper>
                                        </SiteLink>
                                    ))}
                                </SiteLinksView>
                            )}
                            {siteLinksColRight && (
                                <SiteLinksView>
                                    {siteLinksColRight.map((link, i) => (
                                        <SiteLink key={i} href={link.href}>
                                            <LinkWrapper
                                                type="copy"
                                                isActive={link.isActive}
                                                isInverted={isInverted}
                                            >
                                                {link.label || link.href}
                                            </LinkWrapper>
                                        </SiteLink>
                                    ))}
                                </SiteLinksView>
                            )}
                        </ContentBlock>
                        <ContentBlock
                            topSpace={logo && columnTopSpace}
                            hAlign={
                                !newsTitle && !newsText && !newsForm
                                    ? 'right'
                                    : 'left'
                            }
                        >
                            {newsTitle && (
                                <Copy type="copy-b" isInverted={isInverted}>
                                    {newsTitle}
                                </Copy>
                            )}
                            {newsText && (
                                <Copy
                                    size="small"
                                    isInverted={isInverted}
                                    innerHTML={newsText}
                                />
                            )}
                            {newsForm && newsForm(isInverted)}
                            {socials && (
                                <SocialList
                                    isInverted={isInverted}
                                    items={socials.map((item) => {
                                        return {
                                            href: item.href,
                                            icon: item.icon,
                                        };
                                    })}
                                />
                            )}
                        </ContentBlock>
                    </Content>
                </Wrapper>
            </MainView>

            {bottomLinks && (
                <BottomWrapper clampWidth="large">
                    <BottomView addWhitespace>
                        {bottomLinks.map((link, i) => {
                            if (link.href) {
                                return (
                                    <StyledLink
                                        key={i}
                                        isExternal={link.isExternal}
                                        href={link.href}
                                    >
                                        <Copy size="small">
                                            {link.label || link.href}
                                        </Copy>
                                    </StyledLink>
                                );
                            } else return null;
                        })}
                        {brandIcon ? brandIcon : <Bdot />}
                    </BottomView>
                </BottomWrapper>
            )}
        </Section>
    );
};

export const FooterComponent = Footer;
export default withLibTheme(Footer);
