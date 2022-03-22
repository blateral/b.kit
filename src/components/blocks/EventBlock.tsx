import React from 'react';
import Tag from './Tag';
import Heading from 'components/typography/Heading';
import Copy from 'components/typography/Copy';
import { format } from 'date-fns';
import de from 'date-fns/locale/de';
import styled, { ThemeContext } from 'styled-components';
import { getColors, spacings } from 'utils/styles';

const View = styled.div``;

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

const Text = styled(Copy)`
    margin-top: ${spacings.spacer}px;
`;

const EventBlock: React.FC<{
    customTag?: (props: {
        name: string;
        isInverted?: boolean;
        isActive?: boolean;
        clickHandler?: (ev?: React.SyntheticEvent<HTMLButtonElement>) => void;
    }) => React.ReactNode;
    tags?: string[];
    activeTags?: string[];
    title?: string;
    date?: Date;
    text?: string;
}> = ({ customTag, title, date, text, tags }) => {
    const theme = React.useContext(ThemeContext);
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
                                <Tag>{tag}</Tag>
                            )}
                        </TagWrapper>
                    ))}
                </TagContainer>
            )}
            <Content>
                {date && (
                    <Copy size="medium" type="copy">
                        {format(date, 'EE dd.MM.yyyy', { locale: de })}
                    </Copy>
                )}
                <Heading
                    textColor={getColors(theme).new.primary.default}
                    size="heading-4"
                >
                    {title}
                </Heading>
            </Content>
            {text && (
                <Text
                    textColor={getColors(theme).new.elementBg.medium}
                    innerHTML={text}
                />
            )}
        </View>
    );
};

export default EventBlock;
