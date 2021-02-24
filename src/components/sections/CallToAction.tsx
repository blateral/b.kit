import React, { FC, useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';

import {
    getColors as color,
    getFonts as font,
    mq,
    spacings,
    withRange,
} from 'utils/styles';
import Copy from 'components/typography/Copy';
import Section from 'components/base/Section';
import Wrapper from 'components/base/Wrapper';
import { HeadlineTag } from 'components/typography/Heading';
import Intro from 'components/blocks/Intro';
import Actions from 'components/blocks/Actions';

const ContactView = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    margin: 0 auto;
    width: 100%;

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
    padding: ${spacings.nudge}px;

    @media ${mq.medium} {
        margin-right: ${spacings.nudge * 6}px;
    }
`;

const Info = styled.div`
    display: flex;
    flex-direction: column;
    align-self: flex-start;
    align-content: center;
    text-align: center;
    width: 100%;

    padding: ${spacings.spacer}px;

    & > *:not(:last-child) {
        margin-bottom: ${spacings.spacer * 1.5}px;
    }

    @media ${mq.medium} {
        align-content: flex-start;
        text-align: left;
        width: auto;
    }
`;

const Address = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: ${spacings.nudge}px;

    & + & {
        margin-top: ${spacings.nudge}px;
    }

    & > *:not(:first-child) {
        margin-left: 0;
    }

    @media ${mq.medium} {
        justify-content: flex-start;
        flex-direction: row;
        padding: ${spacings.nudge}px ${spacings.nudge}px ${spacings.nudge}px 0;

        & > *:not(:first-child) {
            margin-left: ${spacings.spacer}px;
        }
    }
`;

const Decorator = styled.div<{ isInverted?: boolean }>`
    flex: 1;
    width: 25px;
    margin-bottom: ${spacings.nudge * 1.5}px;

    color: ${({ theme, isInverted }) =>
        isInverted
            ? font(theme)['copy-b'].big.colorInverted
            : font(theme)['copy-b'].big.color};

    @media ${mq.medium} {
        margin-bottom: 0;
    }
`;

const AddressLabel = styled(Copy)`
    flex: 0 100%;
    text-align: left;

    a {
        color: ${({ textColor }) => textColor && textColor};
        text-decoration: none;
    }

    p {
        margin: 0;
    }

    a:hover {
        text-decoration: underline;
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
            {avatar && <Avatar src={avatar?.src} alt={avatar?.alt} />}
            <Info>
                {name && (
                    <div>
                        <Copy type="copy-b" isInverted={isInverted}>
                            {name}
                        </Copy>
                        <Copy type="copy" isInverted={isInverted}>
                            {description}
                        </Copy>
                    </div>
                )}
                <div>
                    {addresses &&
                        addresses.map((address, i) => (
                            <Address key={i}>
                                <Decorator isInverted={isInverted}>
                                    {address.decorator}
                                </Decorator>
                                <AddressLabel
                                    type="copy-b"
                                    size="big"
                                    isInverted={isInverted}
                                >
                                    <div
                                        dangerouslySetInnerHTML={{
                                            __html: address.label,
                                        }}
                                    />
                                </AddressLabel>
                            </Address>
                        ))}
                </div>
            </Info>
        </ContactView>
    );
};

const StyledSection = styled(Section)`
    padding: ${spacings.spacer * 3}px ${spacings.nudge * 2}px;
    padding-top: ${spacings.spacer * 2}px;
    text-align: center;

    @media ${mq.medium} {
        padding: ${spacings.spacer * 3}px ${spacings.spacer}px;
        padding-top: ${spacings.spacer * 2}px;
    }
`;

const StyledIntro = styled(Intro)`
    @media ${mq.semilarge} {
        & > *:first-child {
            min-height: 110px;
        }
    }
`;

const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: ${(17 / 28) * spacings.wrapper}px;
    margin: 0 auto;

    & > * + * {
        ${withRange([spacings.spacer * 1, spacings.spacer * 1.5], 'margin-top')}
    }
`;

const StyledContactBox = styled(ContactBox)`
    margin-top: ${spacings.spacer * 2.5}px;
`;

const StyledActions = styled(Actions)`
    @media ${mq.semilarge} {
        max-width: 600px;
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
    isInverted?: boolean;
    title?: string;
    titleAs?: HeadlineTag;
    superTitle?: string;
    superTitleAs?: HeadlineTag;
    text?: string;
    contact?: ContactBoxProps;

    badge?: React.ReactNode;

    primaryAction?: (isInverted?: boolean) => React.ReactNode;
    secondaryAction?: (isInverted?: boolean) => React.ReactNode;
    newsForm?: (isInverted?: boolean) => React.ReactNode;
}> = ({
    isInverted = false,
    title,
    titleAs = 'h1',
    superTitle,
    superTitleAs,
    text,
    contact,
    badge,
    primaryAction,
    secondaryAction,
    newsForm,
}) => {
    const theme = useContext(ThemeContext);

    return (
        <StyledSection
            addSeperation
            bgColor={isInverted ? color(theme).dark : color(theme).mono.light}
        >
            <Wrapper clampWidth="normal">
                {badge && <Badge>{badge}</Badge>}
                <Content>
                    {title && (
                        <StyledIntro
                            isCentered
                            isInverted={isInverted}
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
                    {(primaryAction || secondaryAction) && (
                        <StyledActions
                            isCentered
                            primary={primaryAction && primaryAction(isInverted)}
                            secondary={
                                secondaryAction && secondaryAction(isInverted)
                            }
                        />
                    )}
                    {newsForm && (
                        <NewsletterWrapper>
                            {newsForm(isInverted)}
                        </NewsletterWrapper>
                    )}
                </Content>
            </Wrapper>
        </StyledSection>
    );
};

export default CallToAction;
