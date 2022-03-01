import React, { useState } from 'react';
import styled from 'styled-components';

import { useLibTheme, withLibTheme } from 'utils/LibThemeProvider';
import Section, { mapToBgMode } from 'components/base/Section';
import Wrapper from 'components/base/Wrapper';
import Copy from 'components/typography/Copy';
import { mq, spacings, getGlobals as global } from 'utils/styles';
import Actions from 'components/blocks/Actions';
import Pointer from 'components/buttons/Pointer';

const StyledSection = styled(Section)<{ isCentered?: boolean }>`
    margin: 0 auto;

    @media ${mq.semilarge} {
        margin: ${({ isCentered }) => (isCentered ? '0 auto' : '0')};

        text-align: ${({ isCentered }) => (isCentered ? 'center' : 'left')};
    }
`;

const ItemContainer = styled.div<{ isCentered?: boolean }>`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    text-align: center;

    &:not(:last-child) {
        margin-bottom: ${spacings.spacer}px;
    }

    @media ${mq.semilarge} {
        justify-content: ${({ isCentered }) =>
            isCentered ? 'center' : 'flex-start'};
    }
`;

const Items = styled.div<{ isVisible?: boolean; isCentered?: boolean }>`
    display: ${({ isVisible }) => (isVisible ? 'flex' : 'none')};
    align-items: center;
    justify-content: center;

    flex-wrap: wrap;
    margin-top: -${spacings.nudge * 2}px;
    margin-left: -${spacings.nudge * 2}px;

    @media ${mq.medium} {
        margin-top: -${spacings.spacer}px;
        margin-left: -${spacings.spacer}px;
        align-items: ${({ isCentered }) =>
            isCentered ? 'center' : 'flex-start'};
        justify-content: ${({ isCentered }) =>
            isCentered ? 'center' : 'flex-start'};
    }
`;

const Item = styled.div<{
    isVisible?: boolean;
    index: number;
}>`
    padding-top: ${spacings.nudge * 2}px;
    padding-left: ${spacings.nudge * 2}px;

    display: ${({ index, isVisible }) =>
        isVisible || index < 6 ? 'block' : 'none'};

    @media ${mq.medium} {
        padding-top: ${spacings.spacer}px;
        padding-left: ${spacings.spacer}px;
    }

    @media ${mq.semilarge} {
        display: ${({ index, isVisible }) =>
            isVisible || index < 8 ? 'block' : 'none'};
    }

    @media ${mq.large} {
        display: ${({ index, isVisible }) =>
            isVisible || index < 10 ? 'block' : 'none'};
    }
`;

const Image = styled.img<{ isInverted?: boolean }>`
    display: block;
    width: 100%;
    object-fit: contain;

    background: ${({ theme, isInverted }) =>
        isInverted
            ? global(theme).sections.imagePlaceholderBg.inverted
            : global(theme).sections.imagePlaceholderBg.default};
`;

const ShowMore = styled(Copy)<{ itemCount?: number; isCentered?: boolean }>`
    display: ${({ itemCount }) =>
        itemCount && itemCount > 6 ? 'block' : 'none'};

    background: none;
    border: none;
    text-align: ${({ isCentered }) => (isCentered ? 'center' : 'left')};

    @media ${mq.semilarge} {
        display: ${({ itemCount }) =>
            itemCount && itemCount > 8 ? 'block' : 'none'};
    }

    @media ${mq.large} {
        display: ${({ itemCount }) =>
            itemCount && itemCount > 10 ? 'block' : 'none'};
    }
`;

const StyledActions = styled(Actions)<{ isCentered?: boolean }>`
    margin-top: ${spacings.spacer}px;

    @media ${mq.medium} {
        display: block;
        text-align: ${({ isCentered }) => isCentered && 'center'};
    }
`;

const IconList: React.FC<{
    /** Array with icon items data */
    items: Array<{
        src: string;
        alt?: string;
        size?: { height: number; width: number };
    }>;

    /** Function to inject custom primary button */
    primaryAction?: (isInverted?: boolean) => React.ReactNode;

    /** Function to inject custom secondary button */
    secondaryAction?: (isInverted?: boolean) => React.ReactNode;

    /** Custom text for toggle button in folded state */
    showMoreText?: string;

    /** Custom text for toggle button in expanded state */
    showLessText?: string;

    /** Center all icons and texts */
    isCentered?: boolean;

    /** Enable toggle feature */
    enableToggle?: boolean;

    /** Section background */
    bgMode?: 'full' | 'inverted';
}> = ({
    items,
    isCentered = false,
    primaryAction,
    secondaryAction,
    showLessText = 'show less',
    showMoreText = 'show more',
    enableToggle,
    bgMode,
}) => {
    const { colors } = useLibTheme();
    const isInverted = bgMode === 'inverted';
    const [showMore, setShowMore] = useState<boolean>(false);

    return (
        <StyledSection
            addSeperation
            bgColor={
                isInverted
                    ? colors.new.sectionBg.dark
                    : bgMode
                    ? colors.new.sectionBg.medium
                    : colors.new.sectionBg.light
            }
            bgMode={mapToBgMode(bgMode, true)}
            isCentered={isCentered}
        >
            <Wrapper clampWidth="normal" addWhitespace>
                <ItemContainer isCentered={isCentered}>
                    <Items
                        isVisible={!showMore ? true : showMore === true}
                        isCentered={isCentered}
                    >
                        {items.map(({ src, alt, size }, i) => {
                            return (
                                <Item isVisible={showMore} index={i} key={i}>
                                    <Image
                                        isInverted={isInverted}
                                        src={src}
                                        alt={alt}
                                        height={size?.height}
                                        width={size?.width}
                                    />
                                </Item>
                            );
                        })}
                    </Items>
                </ItemContainer>
                {enableToggle && (
                    <ShowMore
                        type="copy"
                        size="medium"
                        isInverted={isInverted}
                        isCentered={isCentered}
                        itemCount={items.length}
                        onClick={() => setShowMore((prev) => !prev)}
                    >
                        <Pointer.View
                            as="button"
                            isInverted={isInverted}
                            aria-pressed={showMore}
                        >
                            <Pointer.Label>
                                {showMore ? showLessText : showMoreText}
                            </Pointer.Label>
                        </Pointer.View>
                    </ShowMore>
                )}

                {(primaryAction || secondaryAction) && (
                    <StyledActions
                        isCentered={isCentered}
                        primary={primaryAction && primaryAction(isInverted)}
                        secondary={
                            secondaryAction && secondaryAction(isInverted)
                        }
                    />
                )}
            </Wrapper>
        </StyledSection>
    );
};

export const IconListComponent = IconList;
export default withLibTheme(IconList);
