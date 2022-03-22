import React from 'react';
import Tag from './Tag';
import Heading from 'components/typography/Heading';
import Copy from 'components/typography/Copy';
import { format } from 'date-fns';
import de from 'date-fns/locale/de';
import styled, { ThemeContext } from 'styled-components';
import { getColors, mq, spacings } from 'utils/styles';
import AngleRight from 'components/base/icons/AngleRight';

const View = styled.a`
    text-decoration: none;
    color: inherit;
`;

const TagContainer = styled.div`
    margin-top: -${spacings.nudge}px;
    margin-left: -${spacings.nudge}px;

    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

    &:not(:only-child) {
        margin-bottom: ${spacings.nudge * 3}px;
    }
`;

const Content = styled.div`
    & > * + * {
        margin-top: ${spacings.nudge * 2}px;
    }
`;

const TagWrapper = styled.div`
    padding-top: ${spacings.nudge}px;
    padding-left: ${spacings.nudge}px;
`;

const Title = styled(Heading)<{ isClickable?: boolean }>`
    display: inline-block;

    pointer-events: ${({ isClickable }) => (isClickable ? 'all' : 'none')};
    cursor: ${({ isClickable }) => (isClickable ? 'pointer' : 'default')};

    transtion: all 0.2s ease-in-out;

    ${View}:hover & {
        color: ${({ theme }) => getColors(theme).new.primary.hover};
    }
`;

const TitleIcon = styled.span`
    display: inline-block;
    margin-left: ${spacings.nudge * 2}px;

    @media ${mq.medium} {
        margin-left: ${spacings.nudge * 3}px;
    }
`;

const DefaultIcon = styled(AngleRight)``;

const Text = styled(Copy)`
    margin-top: ${spacings.spacer}px;
`;

export interface EventProps {
    customTag?: (props: {
        name: string;
        isInverted?: boolean;
    }) => React.ReactNode;
    tags?: string[];
    activeTags?: string[];
    title?: string;
    date?: Date;
    text?: string;
    isInverted?: boolean;
    link?: string;
    customTitleIcon?: (props: { isInverted?: boolean }) => React.ReactNode;
}

const EventBlock: React.FC<EventProps> = ({
    customTag,
    title,
    date,
    text,
    tags,
    isInverted,
    link,
    customTitleIcon,
}) => {
    const theme = React.useContext(ThemeContext);
    return (
        <View href={link}>
            {tags && (
                <TagContainer>
                    {tags.map((tag, i) => (
                        <TagWrapper key={'tag_' + i}>
                            {customTag ? (
                                customTag({
                                    name: tag,
                                })
                            ) : (
                                <Tag isInverted={isInverted}>{tag}</Tag>
                            )}
                        </TagWrapper>
                    ))}
                </TagContainer>
            )}
            <Content>
                {date && (
                    <Copy isInverted={isInverted} size="medium" type="copy">
                        {format(date, 'EE dd.MM.yyyy', { locale: de })}
                    </Copy>
                )}
                {title && (
                    <Title
                        isInverted={isInverted}
                        textColor={getColors(theme).new.primary.default}
                        size="heading-4"
                        isClickable={!!link}
                    >
                        {title}
                        {title && (
                            <TitleIcon>
                                {customTitleIcon ? (
                                    customTitleIcon({ isInverted })
                                ) : (
                                    <DefaultIcon />
                                )}
                            </TitleIcon>
                        )}
                    </Title>
                )}
            </Content>
            {text && (
                <Text
                    isInverted={isInverted}
                    textColor={getColors(theme).new.elementBg.medium}
                    innerHTML={text}
                />
            )}
        </View>
    );
};

export default EventBlock;
