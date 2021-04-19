import * as React from 'react';
import styled, { ThemeContext } from 'styled-components';

import { getColors as color, withRange, spacings } from 'utils/styles';
import Intro from 'components/blocks/Intro';
import { HeadlineTag } from 'components/typography/Heading';
import Section from 'components/base/Section';
import Wrapper from 'components/base/Wrapper';
import TableBlock, { TableProps } from 'components/blocks/TableBlock';

const TableWrapper = styled.div<{ withSeperation?: boolean }>`
    ${({ withSeperation }) =>
        withSeperation &&
        withRange([spacings.spacer * 2, spacings.spacer * 4], 'padding-top')};

    & + & {
        ${withRange([spacings.spacer, spacings.spacer * 2], 'margin-top')};
    }
`;

const Table: React.FC<{
    title?: string;
    titleAs?: HeadlineTag;
    superTitle?: string;
    superTitleAs?: HeadlineTag;
    text?: string;

    tableItems: TableProps[];

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
    return (
        <Section
            addSeperation
            bgColor={isInverted ? color(theme).dark : color(theme).mono.light}
        >
            <Wrapper addWhitespace>
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

                {tableItems.map((item, i) => {
                    return (
                        <TableWrapper key={i} withSeperation={!!title}>
                            <TableBlock {...item} isInverted={isInverted} />
                        </TableWrapper>
                    );
                })}
            </Wrapper>
        </Section>
    );
};

export default Table;
