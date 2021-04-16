import * as React from 'react';
import styled, { ThemeContext } from 'styled-components';

import { getColors as color } from 'utils/styles';
import Intro from 'components/blocks/Intro';
import { HeadlineTag } from 'components/typography/Heading';
import Section from 'components/base/Section';
import Wrapper from 'components/base/Wrapper';
import Table from 'components/blocks/Table';

const TableBlock = styled.div``;

const TableSection: React.FC<{
    title?: string;
    titleAs?: HeadlineTag;
    superTitle?: string;
    superTitleAs?: HeadlineTag;
    text?: string;

    tableItems: (isInverted?: boolean) => React.ReactNode | React.ReactNode[];

    primaryAction?: (isInverted?: boolean) => React.ReactNode;
    secondaryAction?: (isInverted?: boolean) => React.ReactNode;

    isInverted?: boolean;
}> = ({
    text,
    title,
    superTitle,
    superTitleAs,
    titleAs,
    isInverted,
    tableItems,
}) => {
    const theme = React.useContext(ThemeContext);
    const tableArray = React.Children.toArray(tableItems);
    return (
        <Section
            addSeperation
            bgColor={isInverted ? color(theme).dark : color(theme).mono.light}
        >
            <Wrapper>
                {title && (
                    <Intro
                        title={title}
                        titleAs={titleAs}
                        superTitle={superTitle}
                        superTitleAs={superTitleAs}
                        text={text}
                        isInverted={isInverted}
                    />
                )}

                {tableArray.map((item, index) => {
                    return <TableBlock key={index}>{item}</TableBlock>;
                })}
            </Wrapper>
        </Section>
    );
};

export default TableSection;
