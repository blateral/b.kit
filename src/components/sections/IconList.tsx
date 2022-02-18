import React, { useContext, useState } from 'react';
import styled, { ThemeContext } from 'styled-components';

import { withLibTheme } from 'utils/LibThemeProvider';
import Section, { mapToBgMode } from 'components/base/Section';
import Wrapper from 'components/base/Wrapper';
import Copy from 'components/typography/Copy';
import { getColors as color, mq, spacings, withRange } from 'utils/styles';
import Actions from 'components/blocks/Actions';
import Pointer from 'components/buttons/Pointer';

const StyledSection = styled(Section)<{ isCentered?: boolean }>`
    margin: 0 auto;

    @media ${mq.semilarge} {
        margin: ${({ isCentered }) => (isCentered ? '0 auto' : '0')};

        text-align: ${({ isCentered }) => (isCentered ? 'center' : 'left')};
    }
`;

const ListContainer = styled.div`
    text-align: center;
    &:not(:first-child) {
        ${withRange([spacings.nudge * 2, spacings.spacer], 'margin-top')}
    }

    &:not(:last-child) {
        ${withRange([spacings.nudge * 2, spacings.spacer], 'margin-bottom')}
    }
`;

const ItemContainer = styled.div<{ isCentered?: boolean }>`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin-bottom: ${spacings.spacer}px;

    text-align: center;

    @media ${mq.semilarge} {
        justify-content: ${({ isCentered }) =>
            isCentered ? 'center' : 'flex-start'};
    }
`;

const ShowMore = styled.span<{ itemCount?: number }>`
    display: ${({ itemCount }) =>
        itemCount && itemCount > 6 ? 'block' : 'none'};

    @media ${mq.semilarge} {
        display: ${({ itemCount }) =>
            itemCount && itemCount > 8 ? 'block' : 'none'};
    }

    @media ${mq.large} {
        display: ${({ itemCount }) =>
            itemCount && itemCount > 10 ? 'block' : 'none'};
    }
`;

const Items = styled.div<{ isVisible?: boolean; isCentered?: boolean }>`
    display: ${({ isVisible }) => (isVisible ? 'flex' : 'none')};
    align-items: center;
    justify-content: center;

    flex-wrap: wrap;
    margin-left: -18px;

    @media ${mq.medium} {
        align-items: ${({ isCentered }) =>
            isCentered ? 'center' : 'flex-start'};
        justify-content: ${({ isCentered }) =>
            isCentered ? 'center' : 'flex-start'};
    }
`;

const ActionsWrapper = styled.div<{ isCentered?: boolean }>`
    position: relative;
    padding-top: ${spacings.spacer * 2}px;

    @media ${mq.medium} {
        text-align: ${({ isCentered }) => (isCentered ? 'center' : 'left')};
    }
`;

const StyledActions = styled(Actions)`
    @media ${mq.medium} {
        display: block;
        text-align: center;
    }
`;

const Item = styled.img<{ isVisible?: boolean; index: number }>`
    display: block;

    padding-left: 18px;
    padding-top: 18px;

    display: ${({ index, isVisible }) =>
        isVisible || index < 6 ? 'block' : 'none'};

    @media ${mq.semilarge} {
        display: ${({ index, isVisible }) =>
            isVisible || index < 8 ? 'block' : 'none'};
    }

    @media ${mq.large} {
        display: ${({ index, isVisible }) =>
            isVisible || index < 10 ? 'block' : 'none'};
    }
`;

const ListFooter = styled(Copy)<{ isCentered?: boolean }>`
    text-align: center;

    @media ${mq.medium} {
        text-align: ${({ isCentered }) => (isCentered ? 'center' : 'left')};
    }
`;

const IconList: React.FC<{
    items: { src: string; alt?: string }[];
    primaryAction?: (isInverted?: boolean) => React.ReactNode;
    secondaryAction?: (isInverted?: boolean) => React.ReactNode;
    showMoreText?: string;
    showLessText?: string;
    isCentered?: boolean;
    enableToggle?: boolean;
    bgMode?: 'full' | 'inverted';
}> = ({
    items,
    isCentered = false,
    primaryAction,
    secondaryAction,
    showLessText = 'weniger anzeigen',
    showMoreText = 'weitere anzeigen',
    enableToggle,
    bgMode,
}) => {
    const [showMore, setShowMore] = useState(false);
    const isInverted = bgMode === 'inverted';
    const theme = useContext(ThemeContext);

    return (
        <StyledSection
            addSeperation
            bgColor={
                isInverted
                    ? color(theme).new.sectionBg.dark
                    : bgMode
                    ? color(theme).new.sectionBg.medium
                    : color(theme).new.sectionBg.light
            }
            bgMode={mapToBgMode(bgMode, true)}
            isCentered={isCentered}
        >
            <Wrapper clampWidth="normal" addWhitespace>
                <ListContainer>
                    <Copy type="copy" size="medium" isInverted={isInverted}>
                        <ItemContainer isCentered={isCentered}>
                            <Items
                                isVisible={!showMore ? true : showMore === true}
                                isCentered={isCentered}
                            >
                                {items.map(({ src, alt }, i) => {
                                    return (
                                        <Item
                                            isVisible={showMore}
                                            index={i}
                                            key={i}
                                            src={src}
                                            alt={alt}
                                        />
                                    );
                                })}
                            </Items>
                        </ItemContainer>
                        {enableToggle && (
                            <ListFooter
                                type="copy"
                                size="medium"
                                isInverted={isInverted}
                                isCentered={isCentered}
                            >
                                <ShowMore
                                    itemCount={items.length}
                                    onClick={() => setShowMore((prev) => !prev)}
                                >
                                    <Pointer.View
                                        as="button"
                                        isInverted={isInverted}
                                    >
                                        <Pointer.Label>
                                            {showMore
                                                ? showLessText
                                                : showMoreText}
                                        </Pointer.Label>
                                    </Pointer.View>
                                </ShowMore>
                            </ListFooter>
                        )}
                    </Copy>
                </ListContainer>

                {(primaryAction || secondaryAction) && (
                    <ActionsWrapper isCentered={isCentered}>
                        <StyledActions
                            primary={primaryAction && primaryAction(isInverted)}
                            secondary={
                                secondaryAction && secondaryAction(isInverted)
                            }
                        />
                    </ActionsWrapper>
                )}
            </Wrapper>
        </StyledSection>
    );
};

export const IconListComponent = IconList;
export default withLibTheme(IconList);
