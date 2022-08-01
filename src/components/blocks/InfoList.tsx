import Copy from 'components/typography/Copy';
import React, { FC } from 'react';
import styled from 'styled-components';
import { isValidArray } from 'utils/arrays';

import { mq, spacings } from 'utils/styles';

const View = styled.div``;

const Container = styled.ul`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

    margin: 0;
    padding: 0;
    margin-left: -${spacings.spacer}px;
    margin-top: -${spacings.nudge * 5}px;
    list-style: none;
`;

const Item = styled.li`
    flex: 1 1 100%;
    padding-left: ${spacings.spacer}px;
    padding-top: ${spacings.nudge * 5}px;

    @media ${mq.medium} {
        flex: 1 1 300px;
    }
`;

const Title = styled(Copy)`
    display: block;
    margin-bottom: ${spacings.nudge * 3}px;
`;

const Infos = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
`;

const Content = styled.li`
    display: -ms-grid;
    display: grid;
    margin: 0;

    -ms-grid-columns: min-content 1fr;
    grid-template-columns: min-content 1fr;
    -ms-grid-rows: min-content 1fr;
    grid-auto-rows: min-content 1fr;

    & + & {
        margin-top: ${spacings.nudge * 2}px;
    }

    & > * + * {
        margin-left: ${spacings.nudge * 2}px;
    }
`;

const Icon = styled(Copy)`
    height: 20px;
    width: 20px;

    & > * {
        height: 20px;
        width: 20px;
    }
`;

export interface InfoGroup {
    title?: string;
    items: Info[];
}

export interface Info {
    /** icon injection function */
    icon?: (isInverted?: boolean) => React.ReactNode;
    /** info text (richtText) */
    text?: string;
}

const InfoList: FC<{
    /** Invert text and icon color for dark backgrounds */
    isInverted?: boolean;

    /** Array of info groups */
    items?: InfoGroup[];

    className?: string;
}> = ({ isInverted, items, className }) => {
    return (
        <View className={className}>
            <Container>
                {items?.map((group, i) => {
                    const hasItems = isValidArray(group?.items, false);

                    return (
                        <Item key={i}>
                            {group.title && (
                                <Title
                                    size="small"
                                    type="copy-b"
                                    renderAs="span"
                                    isInverted={isInverted}
                                >
                                    {group.title}
                                </Title>
                            )}
                            {hasItems && (
                                <Infos>
                                    {group?.items?.map((info, ii) => (
                                        <Content key={ii}>
                                            {info.icon && (
                                                <Icon isInverted={isInverted}>
                                                    {info.icon(isInverted)}
                                                </Icon>
                                            )}
                                            {info.text && (
                                                <Copy
                                                    size="small"
                                                    isInverted={isInverted}
                                                    innerHTML={info.text}
                                                    allowLinkIcons={false}
                                                />
                                            )}
                                        </Content>
                                    ))}
                                </Infos>
                            )}
                        </Item>
                    );
                })}
            </Container>
        </View>
    );
};

export default InfoList;
