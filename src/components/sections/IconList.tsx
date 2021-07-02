import * as React from 'react';
import styled, { ThemeContext } from 'styled-components';

import Section from 'components/base/Section';
import Wrapper from 'components/base/Wrapper';
import Copy from 'components/typography/Copy';
import { getColors as color, mq, spacings, withRange } from 'utils/styles';
import Actions from 'components/blocks/Actions';
import Intro from 'components/blocks/Intro';
import { HeadlineTag } from 'components/typography/Heading';

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
        ${withRange([spacings.spacer, spacings.spacer * 1.75], 'margin-top')}
    }

    &:not(:last-child) {
        ${withRange([spacings.spacer, spacings.spacer * 1.75], 'margin-bottom')}
    }
`;

const ItemContainer = styled.div<{ isCentered?: boolean }>`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin-bottom: ${spacings.spacer * 1.75}px;

    text-align: center;

    @media ${mq.semilarge} {
        justify-content: ${({ isCentered }) =>
            isCentered ? 'center' : 'flex-start'};
    }
`;

const ShowMore = styled.span<{ itemCount?: number }>`
    text-decoration: underline;
    cursor: pointer;

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
    margin-left: -20px;

    @media ${mq.semilarge} {
        align-items: ${({ isCentered }) =>
            isCentered ? 'center' : 'flex-start'};
        justify-content: ${({ isCentered }) =>
            isCentered ? 'center' : 'flex-start'};
    }
`;

const StyledActions = styled(Actions)<{ isCentered?: boolean }>`
    position: relative;
    padding-top: ${spacings.spacer * 2}px;
    /* left: ${({ isCentered }) => isCentered && '50%'};
    transform: ${({ isCentered }) => isCentered && 'translateX(-50%)'}; */

    @media ${mq.semilarge} {
        margin: ${({ isCentered }) => isCentered && '0 auto'};
        max-width: 600px;
    }
`;

const Item = styled.img<{ isVisible?: boolean; index: number }>`
    display: block;

    padding-left: 20px;
    padding-top: 20px;

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

const ListFooter = styled(Copy)`
    text-align: center;

    @media ${mq.medium} {
        text-align: left;
    }
`;

const IconList: React.FC<{
    title?: string;
    titleAs?: HeadlineTag;
    superTitle?: string;
    superTitleAs?: HeadlineTag;
    text?: string;
    hasBack?: boolean;
    items: { src: string; alt?: string }[];
    primaryAction?: (isInverted?: boolean) => React.ReactNode;
    secondaryAction?: (isInverted?: boolean) => React.ReactNode;
    showMoreText?: string;
    showLessText?: string;
    isInverted?: boolean;
    isCentered?: boolean;
}> = ({
    title,
    titleAs,
    superTitle,
    superTitleAs,
    text,
    hasBack,
    items,
    isInverted = false,
    isCentered = false,
    primaryAction,
    secondaryAction,
    showLessText = 'weniger anzeigen',
    showMoreText = 'weitere anzeigen',
}) => {
    const [showMore, setShowMore] = React.useState(false);
    const theme = React.useContext(ThemeContext);

    return (
        <StyledSection
            addSeperation
            bgColor={
                isInverted
                    ? color(theme).dark
                    : hasBack
                    ? color(theme).mono.light
                    : 'transparent'
            }
            isCentered={isCentered}
        >
            <Wrapper clampWidth="normal" addWhitespace>
                {title && (
                    <Intro
                        title={title}
                        titleAs={titleAs}
                        superTitle={superTitle}
                        superTitleAs={superTitleAs}
                        text={text}
                        colorMode={isInverted ? 'inverted' : 'default'}
                        isCentered={isCentered}
                    />
                )}
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
                        <ListFooter
                            type="copy"
                            size="medium"
                            isInverted={isInverted}
                        >
                            <ShowMore
                                itemCount={items.length}
                                onClick={() => setShowMore((prev) => !prev)}
                            >
                                {showMore ? showLessText : showMoreText}
                            </ShowMore>
                        </ListFooter>
                    </Copy>
                </ListContainer>

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

export default IconList;
