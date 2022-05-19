import Grid from 'components/base/Grid';
import Section, { mapToBgMode } from 'components/base/Section';
import Wrapper from 'components/base/Wrapper';
import { Language } from 'components/blocks/LanguageSwitcher';
import Copy, { copyStyle } from 'components/typography/Copy';
import Link, { LinkProps } from 'components/typography/Link';
import React, { useMemo } from 'react';
import styled from 'styled-components';
import { useLibTheme } from 'utils/LibThemeProvider';
import { getColors as color, mq, spacings, withRange } from 'utils/styles';
import { withLibTheme } from 'utils/LibThemeProvider';
import FooterBottomBar from './partials/FooterBottomBar';
import { isValidArray } from 'utils/arrays';

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
    display: inline-block;
    text-decoration: none;

    ${copyStyle('copy', 'medium')}
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

export interface SiteLinkGroup {
    title?: string;
    links?: Array<{ label?: string; link?: LinkProps }>;
}

export interface FooterState {
    isInverted?: boolean;
    siteLinks?: SiteLinkGroup[];
    bottomLinksLeft?: BottomLink[];
    bottomLinksRight?: BottomLink[];
    languages?: Language[];
}

export interface BottomLink {
    label?: string;
    link?: LinkProps;
}

const Footer: React.FC<{
    /** ID value for targeting section with anchor hashes */
    anchorId?: string;

    /** Section background */
    bgMode?: 'full' | 'inverted';

    /** Array of sitelink groups */
    siteLinks?: SiteLinkGroup[];

    /** Function to inject custom footer column content */
    customColumn?: (props: FooterState) => React.ReactNode;

    /** Footnote text of main section (richtext) */
    footNote?: string;

    /** Link list in left bottom bar */
    bottomLinksLeft?: BottomLink[];

    /** Link list in right bottom bar */
    bottomLinksRight?: BottomLink[];

    /** Language toggler settings */
    languages?: Language[];

    /** Inject function to suppress bottom bar or define a custom definition */
    bottomBar?: ((props: FooterState) => React.ReactNode | null) | null;
}> = ({
    bgMode,
    siteLinks,
    customColumn,
    footNote,
    bottomBar,
    bottomLinksLeft,
    bottomLinksRight,
    languages,
}) => {
    const { colors } = useLibTheme();
    const isInverted = bgMode === 'inverted';

    const customCol = useMemo(() => {
        return customColumn
            ? customColumn({
                  isInverted,
                  siteLinks,
                  languages,
                  bottomLinksLeft,
                  bottomLinksRight,
              })
            : undefined;
    }, [
        bottomLinksLeft,
        bottomLinksRight,
        customColumn,
        isInverted,
        languages,
        siteLinks,
    ]);

    const bottom = useMemo(() => {
        return bottomBar
            ? bottomBar({
                  isInverted,
                  siteLinks,
                  languages,
                  bottomLinksLeft,
                  bottomLinksRight,
              })
            : undefined;
    }, [
        bottomBar,
        bottomLinksLeft,
        bottomLinksRight,
        isInverted,
        languages,
        siteLinks,
    ]);

    const hasBottomBar = useMemo(() => {
        if (bottomBar === null) return false;
        if (bottom) return true;
        if (bottom === null) return false;

        return (
            isValidArray(languages, false) ||
            isValidArray(bottomLinksLeft, false) ||
            isValidArray(bottomLinksRight, false)
        );
    }, [bottom, bottomBar, bottomLinksLeft, bottomLinksRight, languages]);

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
                    <Grid.Row
                        gutter={spacings.nudge * 5}
                        medium={{ gutter: spacings.spacer }}
                    >
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
                                                    {label}
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
                {bottom ? (
                    bottom
                ) : hasBottomBar ? (
                    <FooterBottomBar
                        isInverted={isInverted}
                        linksLeft={bottomLinksLeft}
                        linksRight={bottomLinksRight}
                        languages={languages}
                    />
                ) : null}
            </Wrapper>
        </FooterSection>
    );
};

export const FooterComponent = Footer;
export default withLibTheme(Footer);
