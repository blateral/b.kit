import React, { useState } from 'react';
import styled from 'styled-components';

import { useLibTheme, withLibTheme } from 'utils/LibThemeProvider';
import Section, { mapToBgMode } from 'components/base/Section';
import Wrapper from 'components/base/Wrapper';
import { mq, spacings, getColors as color, withRange } from 'utils/styles';
import Actions from 'components/blocks/Actions';
import Pointer from 'components/buttons/Pointer';
import Link, { LinkProps } from 'components/typography/Link';
import Image from 'components/blocks/Image';

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

const Items = styled.ul<{ isVisible?: boolean; isCentered?: boolean }>`
    display: ${({ isVisible }) => (isVisible ? 'flex' : 'block')};
    max-width: 100%;
    align-items: center;
    justify-content: ${({ isCentered }) =>
        isCentered ? 'center' : 'flex-start'};

    flex-wrap: wrap;
    padding: 0;
    margin: 0;
    margin-top: -${spacings.nudge * 2}px;
    margin-left: -${spacings.nudge * 2}px;

    list-style: none;

    @media ${mq.medium} {
        margin-top: -${spacings.spacer}px;
        margin-left: -${spacings.spacer}px;

        & > * {
            flex: 0 1 auto;
        }
    }
`;

const Item = styled.li<{
    isVisible?: boolean;
    index: number;
}>`
    /* padding-top: ${spacings.nudge * 2}px;
    padding-left: ${spacings.nudge * 2}px; */

    display: ${({ index, isVisible }) =>
        isVisible || index < 6 ? 'block' : 'none'};

    & > img {
        width: 100%;
    }

    ${withRange([spacings.spacer, spacings.spacer * 2], 'padding-top')}
    ${withRange([spacings.spacer, spacings.spacer * 2], 'padding-left')}

    @media ${mq.medium} {
        & > img {
            width: auto;
        }
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

const ItemLink = styled(Link)<{ isInverted?: boolean }>`
    display: block;
    outline-color: ${({ theme, isInverted }) =>
        isInverted
            ? color(theme).primary.inverted
            : color(theme).primary.default};
`;

const ShowMore = styled.div<{ itemCount?: number; isCentered?: boolean }>`
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

export interface IconListItem {
    src: string;
    alt?: string;
    link?: LinkProps;
    ratio?: { h: number; w: number };
    showPlaceholder?: boolean;
}

const IconList: React.FC<{
    /** ID value for targeting section with anchor hashes */
    anchorId?: string;

    /** Array with icon items data */
    items?: Array<IconListItem>;

    /** Function to inject custom primary button */
    primaryAction?: (isInverted?: boolean) => React.ReactNode;

    /** Function to inject custom secondary button */
    secondaryAction?: (isInverted?: boolean) => React.ReactNode;

    /** Function to inject custom toggle button */
    toggle?: (props: {
        isInverted?: boolean;
        isToggled?: boolean;
        showLessText?: string;
        showMoreText?: string;
        clickHandler?: (ev?: React.SyntheticEvent<HTMLButtonElement>) => void;
        additionalProps?: Record<string, any>;
    }) => React.ReactNode;

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
    anchorId,
    items,
    isCentered = false,
    primaryAction,
    secondaryAction,
    toggle,
    showLessText = 'show less',
    showMoreText = 'show more',
    enableToggle,
    bgMode,
}) => {
    const { colors } = useLibTheme();
    const isInverted = bgMode === 'inverted';
    const [showMore, setShowMore] = useState<boolean>(!enableToggle);

    const handleToggleClick = () => {
        setShowMore((prev) => !prev);
    };

    return (
        <StyledSection
            addSeperation
            anchorId={anchorId}
            bgColor={
                isInverted
                    ? colors.sectionBg.dark
                    : bgMode
                    ? colors.sectionBg.medium
                    : colors.sectionBg.light
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
                        {items?.map(
                            ({ src, link, alt, ratio, showPlaceholder }, i) => (
                                <Item isVisible={showMore} index={i} key={i}>
                                    <ItemLink
                                        {...link}
                                        isInverted={isInverted}
                                        ariaLabel={alt}
                                    >
                                        <Image
                                            data-img-loaded={false}
                                            isInverted={isInverted}
                                            small={src}
                                            alt={alt}
                                            ratios={
                                                ratio
                                                    ? { small: ratio }
                                                    : undefined
                                            }
                                            showPlaceholder={showPlaceholder}
                                        />
                                    </ItemLink>
                                </Item>
                            )
                        )}
                    </Items>
                </ItemContainer>
                {enableToggle && (
                    <ShowMore
                        isCentered={isCentered}
                        itemCount={items?.length || 0}
                    >
                        {toggle ? (
                            toggle({
                                isInverted,
                                showLessText,
                                showMoreText,
                                isToggled: showMore,
                                clickHandler: handleToggleClick,
                                additionalProps: { 'aria-pressed': showMore },
                            })
                        ) : (
                            <Pointer.View
                                as="button"
                                isInverted={isInverted}
                                aria-pressed={showMore}
                                onClick={() => handleToggleClick()}
                            >
                                <Pointer.Label>
                                    {showMore ? showLessText : showMoreText}
                                </Pointer.Label>
                            </Pointer.View>
                        )}
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
