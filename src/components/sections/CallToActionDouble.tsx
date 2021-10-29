import Section, { mapToBgMode } from 'components/base/Section';
import { HeadlineTag } from 'components/typography/Heading';
import * as React from 'react';
import styled, { ThemeContext } from 'styled-components';
import {
    getColors as color,
    spacings,
    withRange,
    mq,
    getFonts as font,
} from 'utils/styles';
import Copy from 'components/typography/Copy';
import Wrapper from 'components/base/Wrapper';
import IntroBlock from 'components/blocks/IntroBlock';
import Actions from 'components/blocks/Actions';
import Grid from 'components/base/Grid';
import { withLibTheme } from 'utils/LibThemeProvider';

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
    margin-right: ${spacings.nudge}px;

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

const ContactBox: React.FC<ContactBoxProps & { className?: string }> = ({
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
                                    type="copy-b"
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

const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: ${(17 / 28) * spacings.wrapper}px;
    margin: 0 auto;

    & > * + * {
        ${withRange([spacings.spacer * 1, spacings.spacer * 1.5], 'margin-top')}
    }

    @media ${mq.large} {
        align-items: flex-start;
    }
`;

const StyledContactBox = styled(ContactBox)`
    margin-top: ${spacings.spacer * 2.5}px;
`;

const StyledActions = styled(Actions)`
    @media ${mq.semilarge} {
        & > * {
            max-width: 300px;
        }
    }
`;

const CallToActionDouble: React.FC<{
    bgMode?: 'full' | 'inverted';
    title?: string;
    titleAs?: HeadlineTag;
    superTitle?: string;
    superTitleAs?: HeadlineTag;
    text?: string;
    contact?: ContactBoxProps;
    primaryAction?: (isInverted?: boolean) => React.ReactNode;
    secondaryAction?: (isInverted?: boolean) => React.ReactNode;

    column?: {
        title?: string;
        titleAs?: HeadlineTag;
        superTitle?: string;
        superTitleAs?: HeadlineTag;
        text?: string;
        contact?: ContactBoxProps;
        primaryAction?: (isInverted?: boolean) => React.ReactNode;
        secondaryAction?: (isInverted?: boolean) => React.ReactNode;
    };
}> = ({
    bgMode,
    title,
    titleAs,
    superTitle,
    superTitleAs,
    text,
    contact,
    column,
    primaryAction,
    secondaryAction,
}) => {
    const theme = React.useContext(ThemeContext);
    const isInverted = bgMode === 'inverted';
    return (
        <Section
            addSeperation
            bgColor={isInverted ? color(theme).dark : color(theme).mono.light}
            bgMode={bgMode ? mapToBgMode(bgMode, true) : 'full'}
        >
            <Wrapper addWhitespace clampWidth="normal">
                <Grid.Row gutter={spacings.spacer * 4}>
                    <Grid.Col large={{ span: 1 / 2 }}>
                        <Content>
                            {title && (
                                <IntroBlock
                                    colorMode={
                                        isInverted ? 'inverted' : 'default'
                                    }
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
                                    primary={
                                        primaryAction &&
                                        primaryAction(isInverted)
                                    }
                                    secondary={
                                        secondaryAction &&
                                        secondaryAction(isInverted)
                                    }
                                />
                            )}
                        </Content>
                    </Grid.Col>
                    <Grid.Col large={{ span: 1 / 2 }}>
                        {column && (
                            <Content>
                                {column.title && (
                                    <IntroBlock
                                        colorMode={
                                            isInverted ? 'inverted' : 'default'
                                        }
                                        title={column.title}
                                        titleAs={column.titleAs}
                                        superTitle={column.superTitle}
                                        superTitleAs={column.superTitleAs}
                                        text={column.text}
                                    />
                                )}
                                {column.contact && (
                                    <StyledContactBox
                                        isInverted={isInverted}
                                        name={column.contact.name}
                                        description={column.contact.description}
                                        addresses={column.contact.addresses}
                                        avatar={column.contact.avatar}
                                    />
                                )}
                                {(column.primaryAction ||
                                    column.secondaryAction) && (
                                    <StyledActions
                                        primary={
                                            column.primaryAction &&
                                            column.primaryAction(isInverted)
                                        }
                                        secondary={
                                            column.secondaryAction &&
                                            column.secondaryAction(isInverted)
                                        }
                                    />
                                )}
                            </Content>
                        )}
                    </Grid.Col>
                </Grid.Row>
            </Wrapper>
        </Section>
    );
};

export const CallToActionDoubleComponent = CallToActionDouble;
export default withLibTheme(CallToActionDouble);
