import React, { FC, useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';

import {
    getColors as color,
    getFonts as font,
    mq,
    spacings,
} from 'utils/styles';
import Copy from 'components/typography/Copy';
import Section, { mapToBgMode } from 'components/base/Section';
import Wrapper from 'components/base/Wrapper';
import { HeadlineTag } from 'components/typography/Heading';
import IntroBlock from 'components/blocks/IntroBlock';
import Actions from 'components/blocks/Actions';
import { withLibTheme } from 'utils/LibThemeProvider';
import Grid, { gridSettings, getGridWidth } from 'components/base/Grid';

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

const Avatar = styled.img`
    display: block;
    border: solid 1px transparent;
    border-radius: 50%;
    width: 180px;
    height: 180px;

    @media ${mq.semilarge} {
        display: block;
        width: 190px;
        height: 190px;
    }
`;

const Info = styled.div`
    display: flex;
    flex-direction: column;
    align-self: flex-start;
    align-content: center;
    text-align: center;
    width: 100%;

    & > *:not(:last-child) {
        margin-bottom: ${spacings.spacer}px;
    }

    @media ${mq.semilarge} {
        display: block;
        align-content: flex-start;
        text-align: left;
    }
`;

const Description = styled(Copy)`
    text-align: center;

    & > * {
        justify-content: center;
    }

    @media ${mq.semilarge} {
        text-align: left;

        & > * {
            justify-content: left;
        }
    }
`;

const Address = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    & + & {
        margin-top: ${spacings.nudge * 2}px;
    }

    & > *:not(:first-child) {
        margin-left: 0;
    }

    @media ${mq.semilarge} {
        justify-content: flex-start;
        flex-direction: row;
        padding: ${spacings.nudge}px ${spacings.nudge}px ${spacings.nudge}px 0;

        & > *:not(:first-child) {
            margin-left: ${spacings.nudge * 2}px;
        }
    }
`;

const Decorator = styled.div<{ isInverted?: boolean }>`
    flex: 1;
    width: 30px;
    margin-bottom: ${spacings.nudge * 1.5}px;

    color: ${({ theme, isInverted }) =>
        isInverted
            ? font(theme)['copy-b'].big.colorInverted
            : font(theme)['copy-b'].big.color};

    & > * {
        max-width: 30px;
    }

    @media ${mq.medium} {
        margin-bottom: 0;
    }
`;

const AddressLabel = styled(Copy)`
    flex: 0 100%;
    text-align: center;

    p {
        margin: 0;
    }

    @media ${mq.medium} {
        text-align: left;
    }
`;

export interface ContactBoxProps {
    isInverted?: boolean;
    name?: string;
    description?: string;
    addresses?: { decorator?: React.ReactNode; label: string }[];
    avatar?: { src: string; alt: string };
}

const ContactBox: FC<ContactBoxProps & { className?: string }> = ({
    isInverted,
    name,
    description,
    addresses,
    avatar,
    className,
}) => {
    return (
        <ContactView className={className}>
            <Avatar src={avatar?.src} alt={avatar?.alt} />
            <Info>
                {(name || description) && (
                    <div>
                        {name && (
                            <Copy type="copy-b" isInverted={isInverted}>
                                {name}
                            </Copy>
                        )}
                        {description && (
                            <Description
                                type="copy"
                                isInverted={isInverted}
                                innerHTML={description}
                            />
                        )}
                    </div>
                )}
                {addresses && addresses.length > 0 && (
                    <div>
                        {addresses?.map((address, i) => (
                            <Address key={i}>
                                <Decorator isInverted={isInverted}>
                                    {address.decorator}
                                </Decorator>
                                <AddressLabel
                                    type="copy"
                                    size="big"
                                    isInverted={isInverted}
                                    innerHTML={address.label}
                                />
                            </Address>
                        ))}
                    </div>
                )}
            </Info>
        </ContactView>
    );
};

const StyledIntro = styled(IntroBlock)<{ hasDecorator?: boolean }>`
    @media ${mq.semilarge} {
        max-width: ${getGridWidth(10)};
        margin-right: auto;
        margin-left: auto;
    }

    @media ${mq.large} {
        max-width: ${getGridWidth(8)};
    }

    @media ${mq.xlarge} {
        & > *:first-child {
            min-height: ${({ hasDecorator }) => hasDecorator && '110px'};
        }
    }
`;

const StyledContactBox = styled(ContactBox)`
    margin-top: ${spacings.spacer}px;

    @media ${mq.semilarge} {
        max-width: ${getGridWidth(8)};
        margin-right: auto;
        margin-left: auto;
    }

    @media ${mq.large} {
        max-width: ${getGridWidth(6)};
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

export const CallToAction: FC<{
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
    primaryAction?: (isInverted?: boolean) => React.ReactNode;
    /** Function to inject custom secondary button */
    secondaryAction?: (isInverted?: boolean) => React.ReactNode;
    /** Function to inject newsletter form */
    newsFormMain?: (isInverted?: boolean) => React.ReactNode;
}> = ({
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
    const theme = useContext(ThemeContext);
    const isInverted = bgMode === 'inverted';
    return (
        <Section
            addSeperation
            bgColor={
                isInverted
                    ? color(theme).new.sectionBg.dark
                    : color(theme).new.sectionBg.medium
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
                        name={contact.name}
                        description={contact.description}
                        addresses={contact.addresses}
                        avatar={contact.avatar}
                    />
                )}
                {newsFormMain && hasNewsletter && (
                    <NewsletterWrapper>
                        {newsFormMain(isInverted)}
                    </NewsletterWrapper>
                )}

                <Grid.Row>
                    <Grid.Col
                        semilarge={{ span: 8 / 12, move: 2 / 12 }}
                        large={{ span: 6 / 12, move: 3 / 12 }}
                        textAlign="center"
                    ></Grid.Col>
                </Grid.Row>
                {(primaryAction || secondaryAction) && (
                    <StyledActions
                        primary={primaryAction && primaryAction(isInverted)}
                        secondary={
                            secondaryAction && secondaryAction(isInverted)
                        }
                    />
                )}
            </Wrapper>
        </Section>
    );
};

export const CallToActionComponent = CallToAction;
export default withLibTheme(CallToAction);
