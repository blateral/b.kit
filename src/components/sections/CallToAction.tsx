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
import Grid from 'components/base/Grid';

const ContactView = styled.div`
    /* display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center; */

    margin: 0 auto;
    width: 100%;

    margin-top: ${spacings.nudge * 7}px;

    text-align: left;
    hyphens: auto;
    overflow-wrap: break-word;

    @media ${mq.medium} {
        flex-direction: row;
    }
`;

const Avatar = styled.img`
    height: 196px;
    width: 196px;
    border: solid 1px transparent;
    border-radius: 50%;

    /* CENTERING AVATAR */
    display: flex;
    margin: 0 auto;

    /* padding: ${spacings.nudge}px; */
    /* margin-right: ${spacings.spacer}px; */

    @media ${mq.medium} {
        display: block;
        margin-right: 0;
    }

    @media ${mq.xlarge} {
        margin-right: ${spacings.spacer * 1.5}px;
    }
`;

const Info = styled.div`
    display: flex;
    flex-direction: column;
    align-self: flex-start;
    align-content: center;
    text-align: center;
    width: 100%;

    /* padding: ${spacings.spacer}px; */

    & > *:not(:last-child) {
        margin-bottom: ${spacings.spacer}px;
    }

    @media ${mq.medium} {
        display: block;
        align-content: flex-start;
        text-align: left;
        /* width: auto; */
        /* padding: 0 ${spacings.spacer}px; */
    }
`;

const Description = styled(Copy)`
    text-align: center;

    & > * {
        justify-content: center;
    }

    @media ${mq.medium} {
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

    @media ${mq.medium} {
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
    // className,
}) => {
    return (
        // <ContactView className={className}>
        //     {avatar && <Avatar src={avatar?.src} alt={avatar?.alt} />}
        //     <Info>
        //         {(name || description) && (
        //             <div>
        //                 {name && (
        //                     <Copy type="copy-b" isInverted={isInverted}>
        //                         {name}
        //                     </Copy>
        //                 )}
        //                 {description && (
        //                     <Description
        //                         type="copy"
        //                         isInverted={isInverted}
        //                         innerHTML={description}
        //                     />
        //                 )}
        //             </div>
        //         )}
        //         {addresses && addresses.length > 0 && (
        //             <div>
        //                 {addresses?.map((address, i) => (
        //                     <Address key={i}>
        //                         <Decorator isInverted={isInverted}>
        //                             {address.decorator}
        //                         </Decorator>
        //                         <AddressLabel
        //                             type="copy"
        //                             size="big"
        //                             isInverted={isInverted}
        //                             innerHTML={address.label}
        //                         />
        //                     </Address>
        //                 ))}
        //             </div>
        //         )}
        //     </Info>
        // </ContactView>
        <ContactView>
            <Grid.Row>
                <Grid.Col medium={{ span: 2 / 6 }} semilarge={{ span: 2 / 6 }}>
                    <Avatar src={avatar?.src} alt={avatar?.alt} />
                </Grid.Col>
                <Grid.Col medium={{ span: 4 / 6 }} semilarge={{ span: 4 / 6 }}>
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
                </Grid.Col>
            </Grid.Row>
        </ContactView>
    );
};

const StyledIntro = styled(IntroBlock)`
    @media ${mq.semilarge} {
        & > *:first-child {
            min-height: 110px;
        }
    }
`;

// const Content = styled.div`
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     max-width: ${(17 / 28) * spacings.wrapper}px;
//     margin: 0 auto;

//     & > * + * {
//         ${withRange([spacings.spacer * 1, spacings.spacer * 1.5], 'margin-top')}
//     }

//     @media ${mq.large} {
//         align-items: center;
//     }
// `;

const StyledContactBox = styled(ContactBox)`
    margin-top: ${spacings.nudge * 7}px;
`;

const StyledActions = styled(Actions)`
    margin-top: ${spacings.nudge * 8}px;

    @media ${mq.semilarge} {
        & > * {
            max-width: 300px;
        }
    }
`;

const NewsletterWrapper = styled.div`
    width: 100%;
    margin-top: ${spacings.spacer * 2.5}px;

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
    margin-bottom: -110px;
    z-index: 3;

    @media ${mq.xlarge} {
        display: block;
        margin-right: ${1440 * (1 / 28) + 'px'};
    }
`;

export const CallToAction: FC<{
    title?: string;
    titleAs?: HeadlineTag;
    superTitle?: string;
    superTitleAs?: HeadlineTag;
    text?: string;
    contact?: ContactBoxProps;
    hasNewsletter?: boolean;

    badge?: React.ReactNode;

    primaryAction?: (isInverted?: boolean) => React.ReactNode;
    secondaryAction?: (isInverted?: boolean) => React.ReactNode;
    newsFormMain?: (isInverted?: boolean) => React.ReactNode;

    bgMode?: 'full' | 'inverted';
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
                    ? color(theme).new.bg.inverted
                    : color(theme).new.bg.mono
            }
            bgMode={bgMode ? mapToBgMode(bgMode, true) : 'full'}
        >
            <Wrapper addWhitespace clampWidth="normal">
                {badge && <Badge>{badge}</Badge>}
                <Grid.Row gutter={0}>
                    <Grid.Col
                        semilarge={{ span: 10 / 12, move: 1 / 12 }}
                        large={{ span: 8 / 12, move: 2 / 12 }}
                    >
                        {title && (
                            <StyledIntro
                                isCentered
                                colorMode={isInverted ? 'inverted' : 'default'}
                                title={title}
                                titleAs={titleAs}
                                superTitle={superTitle}
                                superTitleAs={superTitleAs}
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
                        {(primaryAction || secondaryAction) && (
                            <StyledActions
                                primary={
                                    primaryAction && primaryAction(isInverted)
                                }
                                secondary={
                                    secondaryAction &&
                                    secondaryAction(isInverted)
                                }
                            />
                        )}
                    </Grid.Col>
                </Grid.Row>

                {/* <Content>
                    {title && (
                        <StyledIntro
                            isCentered
                            colorMode={isInverted ? 'inverted' : 'default'}
                            title={title}
                            titleAs={titleAs}
                            superTitle={superTitle}
                            superTitleAs={superTitleAs}
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
                    {(primaryAction || secondaryAction) && (
                        <StyledActions
                            primary={primaryAction && primaryAction(isInverted)}
                            secondary={
                                secondaryAction && secondaryAction(isInverted)
                            }
                        />
                    )}
                </Content> */}
            </Wrapper>
        </Section>
    );
};

export const CallToActionComponent = CallToAction;
export default withLibTheme(CallToAction);
