import React, { FC } from 'react';
import styled from 'styled-components';

import {
    getColors as color,
    getFonts as font,
    mq,
    spacings,
    withRange,
} from '../../utils/styles';
import Section from '../base/Section';
import Wrapper from '../base/Wrapper';
import Copy from '../typography/Copy';
import Link, { LinkProps } from '../typography/Link';
import Bdot from '../blocks/Bdot';
import SocialList from '../blocks/SocialList';

const MainView = styled(Wrapper)<{ isInverted?: boolean }>`
    background-color: ${({ theme, isInverted }) =>
        isInverted && color(theme).black};
`;

const StyledLink = styled(Link)`
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
        isInverted ? color(theme).white : color(theme).black};

    @media ${mq.medium} {
        flex-direction: row;
        flex-wrap: wrap;
        padding-top: ${spacings.spacer}px;
        padding-bottom: ${spacings.spacer}px;
    }
`;

const ContentBlock = styled.div<{
    direction?: 'row' | 'column';
    topSpace?: string;
}>`
    flex: 1;
    display: flex;
    flex-direction: column;
    min-width: 300px;
    align-items: center;

    padding: ${spacings.spacer}px;

    & > * + * {
        margin-top: ${spacings.spacer}px;
    }

    @media ${mq.medium} {
        flex-direction: ${({ direction }) => direction || 'column'};
        align-items: flex-start;
        padding-top: ${({ topSpace }) => topSpace && topSpace};
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

const LinkWrapper = styled.span<{ isActive?: boolean; isInverted?: boolean }>`
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
            isInverted ? color(theme).white : color(theme).black};
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

const FooterTitle = styled.div`
    font-weight: ${({ theme }) => font(theme)['heading-4'].family};
    font-family: ${({ theme }) => font(theme)['heading-4'].family};
    ${({ theme }) => withRange(font(theme)['heading-4'].size, 'font-size')}
    line-height: ${({ theme }) => font(theme)['heading-4'].lineHeight};
`;

/**** BOTTOM FOOTER CONTENT ****/
const BottomView = styled(Wrapper)`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;

    padding-top: ${spacings.nudge * 1.5}px;
    padding-bottom: ${spacings.nudge * 1.5}px;

    background-color: ${({ theme }) => color(theme).white};
    color: ${({ theme }) => color(theme).black};

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
        image?: React.ReactNode;
        link?: string;
    };
    columnTopSpace?: string;
    contactData?: React.ReactNode;
    siteLinks?: Array<
        Array<LinkProps & { label?: string; isActive?: boolean }>
    >;
    newsTitle?: string;
    newsText?: string;
    newsForm?: (isInverted?: boolean) => React.ReactNode;
    socials?: Array<{ icon: React.ReactNode; href: string }>;
    bottomLinks?: { href: string; label?: string; isExternal?: boolean }[];
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
}) => {
    return (
        <Section as="footer">
            <MainView addWhitespace clampWidth="large" isInverted={isInverted}>
                <Wrapper>
                    <Content isInverted={isInverted}>
                        <ContentBlock>
                            {logo?.image && (
                                <LogoLink href={logo?.link}>
                                    {logo.image}
                                </LogoLink>
                            )}
                            {contactData && (
                                <ContactData size="small">
                                    {contactData}
                                </ContactData>
                            )}
                        </ContentBlock>
                        <ContentBlock
                            direction="row"
                            topSpace={logo && columnTopSpace}
                        >
                            {siteLinks &&
                                siteLinks.map((linkList, i) => (
                                    <SiteLinksView key={i}>
                                        {linkList &&
                                            linkList.map((link, linkIndex) => (
                                                <SiteLink
                                                    key={linkIndex}
                                                    href={link.href}
                                                >
                                                    <LinkWrapper
                                                        isActive={link.isActive}
                                                        isInverted={isInverted}
                                                    >
                                                        {link.label ||
                                                            link.href}
                                                    </LinkWrapper>
                                                </SiteLink>
                                            ))}
                                    </SiteLinksView>
                                ))}
                        </ContentBlock>
                        <ContentBlock topSpace={logo && columnTopSpace}>
                            {newsTitle && (
                                <FooterTitle>{newsTitle}</FooterTitle>
                            )}
                            {newsText && (
                                <Copy size="small">
                                    <div
                                        dangerouslySetInnerHTML={{
                                            __html: newsText,
                                        }}
                                    />
                                </Copy>
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
                    <Bdot />
                </BottomView>
            )}
        </Section>
    );
};

export default Footer;
