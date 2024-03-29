import React, { FC } from 'react';
import styled from 'styled-components';

import { getGlobals as global, mq, spacings } from 'utils/styles';
import Copy from 'components/typography/Copy';
import Section, { mapToBgMode } from 'components/base/Section';
import Wrapper from 'components/base/Wrapper';
import { HeadlineTag } from 'components/typography/Heading';
import IntroBlock from 'components/blocks/IntroBlock';
import Actions from 'components/blocks/Actions';
import { useLibTheme, withLibTheme } from 'utils/LibThemeProvider';
import { gridSettings, getGridWidth } from 'components/base/Grid';

const ContactView = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
    width: 100%;

    text-align: left;
    hyphens: auto;
    overflow-wrap: break-word;

    & > * + * {
        margin-top: ${spacings.spacer}px;
    }

    @media ${mq.semilarge} {
        flex-direction: row;

        & > * + * {
            margin-top: 0px;
            margin-left: ${gridSettings.gutter}px;
        }
    }
`;

const Avatar = styled.img<{ isInverted?: boolean }>`
    align-self: center;
    display: block;
    border: solid 1px transparent;
    border-radius: 50%;
    width: 180px;
    height: 180px;

    background: ${({ theme, isInverted }) =>
        isInverted
            ? global(theme).sections.imagePlaceholderBg.inverted
            : global(theme).sections.imagePlaceholderBg.default};

    @media ${mq.semilarge} {
        display: block;
        width: 190px;
        height: 190px;
    }
`;

const Description = styled(Copy)`
    text-align: center;

    .icon-label {
        flex-direction: column;
    }

    .icon-label > * + * {
        margin-left: 0;
        margin-top: ${spacings.nudge * 2}px;
    }

    & > * {
        justify-content: center;
    }

    @media ${mq.semilarge} {
        text-align: left;

        & > * {
            justify-content: left;
        }

        .icon-label {
            flex-direction: row;
        }

        .icon-label > * + * {
            margin-left: ${spacings.nudge * 2}px;
            margin-top: 0;
        }
    }
`;

export interface ContactBoxProps {
    isInverted?: boolean;
    description?: string;
    avatar?: { src: string; alt: string };
}

const ContactBox: FC<ContactBoxProps & { className?: string }> = ({
    isInverted,
    description,
    avatar,
    className,
}) => {
    return (
        <ContactView className={className}>
            <Avatar
                src={avatar?.src}
                alt={avatar?.alt}
                isInverted={isInverted}
            />
            {description && (
                <Description
                    type="copy"
                    isInverted={isInverted}
                    innerHTML={description}
                />
            )}
        </ContactView>
    );
};

const StyledIntro = styled(IntroBlock)<{ hasDecorator?: boolean }>`
    max-width: 880px;
    margin-right: auto;
    margin-left: auto;

    @media ${mq.xlarge} {
        & > *:first-child {
            min-height: ${({ hasDecorator }) => hasDecorator && '110px'};
        }
    }
`;

const StyledContactBox = styled(ContactBox)`
    margin-top: ${spacings.spacer}px;

    @media ${mq.semilarge} {
        max-width: ${getGridWidth({ cols: 8 })};
        margin-right: auto;
        margin-left: auto;
    }

    @media ${mq.large} {
        max-width: ${getGridWidth({ cols: 6 })};
    }
`;

const StyledActions = styled(Actions)`
    margin-top: ${spacings.spacer}px;

    @media ${mq.medium} {
        display: block;
        text-align: center;
    }
`;

const NewsletterWrapper = styled.div`
    width: 100%;
    margin: 0 auto;
    margin-top: ${spacings.spacer}px;

    @media ${mq.semilarge} {
        max-width: 400px;
    }
`;

const Badge = styled.div`
    display: none;
    position: relative;
    height: 241px;
    width: 241px;
    margin-left: auto;
    margin-bottom: -135px;
    z-index: 3;

    @media ${mq.xlarge} {
        display: block;
        margin-right: ${1440 * (1 / 28) + 'px'};
    }
`;

export interface CtaActionProps {
    isInverted?: boolean;
    isTextCentered?: boolean;
}

export const CallToAction: FC<{
    /** ID value for targeting section with anchor hashes */
    anchorId?: string;
    /** Main title text */
    title?: string;
    /** Main title HTML tag type (h2, h3, h4...) */
    titleAs?: HeadlineTag;
    /** Superior title that stands above main title */
    superTitle?: string;
    /** Superior title HTML tag type (h3, h4 ...) */
    superTitleAs?: HeadlineTag;
    /** Bold text underneath the title (limited richtext capabilites) */
    text?: string;
    /** Props for contact area */
    contact?: ContactBoxProps;
    /** Show Newsletter defined by inject function newsFormMain. Only visible if React node is defined! */
    hasNewsletter?: boolean;
    /** Badge decorator visible only on large screens */
    badge?: React.ReactNode;

    /** Section background */
    bgMode?: 'full' | 'inverted';

    /** Function to inject custom primary button */
    primaryAction?: (props: CtaActionProps) => React.ReactNode;
    /** Function to inject custom secondary button */
    secondaryAction?: (props: CtaActionProps) => React.ReactNode;
    /** Function to inject newsletter form */
    newsFormMain?: (isInverted?: boolean) => React.ReactNode;
}> = ({
    anchorId,
    title,
    titleAs = 'h2',
    superTitle,
    superTitleAs,
    text,
    contact,
    badge,
    primaryAction,
    secondaryAction,
    hasNewsletter,
    newsFormMain,
    bgMode,
}) => {
    const { colors } = useLibTheme();
    const isInverted = bgMode === 'inverted';

    return (
        <Section
            addSeperation
            anchorId={anchorId}
            bgColor={
                isInverted ? colors.sectionBg.dark : colors.sectionBg.medium
            }
            bgMode={bgMode ? mapToBgMode(bgMode, true) : 'full'}
        >
            <Wrapper addWhitespace clampWidth="normal">
                {badge && <Badge>{badge}</Badge>}
                {title && (
                    <StyledIntro
                        isCentered
                        colorMode={isInverted ? 'inverted' : 'default'}
                        title={title}
                        titleAs={titleAs}
                        superTitle={superTitle}
                        superTitleAs={superTitleAs}
                        hasDecorator={!!badge}
                        text={text}
                    />
                )}

                {contact && (
                    <StyledContactBox
                        isInverted={isInverted}
                        description={contact.description}
                        avatar={contact.avatar}
                    />
                )}
                {newsFormMain && hasNewsletter && (
                    <NewsletterWrapper>
                        {newsFormMain(isInverted)}
                    </NewsletterWrapper>
                )}
                {(primaryAction || secondaryAction) && (
                    <StyledActions
                        primary={
                            primaryAction &&
                            primaryAction({ isInverted, isTextCentered: true })
                        }
                        secondary={
                            secondaryAction &&
                            secondaryAction({
                                isInverted,
                                isTextCentered: true,
                            })
                        }
                    />
                )}
            </Wrapper>
        </Section>
    );
};

export const CallToActionComponent = CallToAction;
export default withLibTheme(CallToAction);
