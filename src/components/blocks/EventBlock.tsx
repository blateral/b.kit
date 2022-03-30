import React from 'react';
import Tag from './Tag';
import Copy from 'components/typography/Copy';
import { format } from 'date-fns';
import de from 'date-fns/locale/de';
import styled from 'styled-components';
import { spacings } from 'utils/styles';

const View = styled.div`
    text-decoration: none;
    color: inherit;

    & > * + * {
        margin-top: ${spacings.nudge * 3}px;
    }
`;

const TagContainer = styled.div`
    margin-top: -${spacings.nudge}px;
    margin-left: -${spacings.nudge}px;

    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
`;

const Content = styled.div`
    & > * + * {
        margin-top: ${spacings.nudge}px;
    }
`;

const TagWrapper = styled.div`
    padding-top: ${spacings.nudge}px;
    padding-left: ${spacings.nudge}px;
`;

const Title = styled(Copy)``;

// const TitleIcon = styled.span`
//     display: inline-block;
//     margin-left: ${spacings.nudge * 2}px;

//     @media ${mq.medium} {
//         margin-left: ${spacings.nudge * 3}px;
//     }
// `;

// const DefaultIcon = styled(AngleRight)``;

const Text = styled(Copy)``;

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
    tertiaryAction?: (isInverted?: boolean) => React.ReactNode;
}

const EventBlock: React.FC<EventProps> = ({
    customTag,
    title,
    date,
    text,
    tags,
    isInverted,
    tertiaryAction,
}) => {
    return (
        <View>
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
                    <Title isInverted={isInverted} size="big" type="copy-b">
                        {title}
                    </Title>
                )}
            </Content>
            {text && (
                <Text size="small" isInverted={isInverted} innerHTML={text} />
            )}
            {tertiaryAction && <div> {tertiaryAction(isInverted)} </div>}
        </View>
    );
};

export default EventBlock;
