import * as React from 'react';
import styled, { ThemeContext } from 'styled-components';

import Section, { BgMode } from 'components/base/Section';
import Wrapper from 'components/base/Wrapper';
import Copy from 'components/typography/Copy';
import { getColors as color, mq, spacings } from 'utils/styles';
import Actions from 'components/blocks/Actions';
import Intro from 'components/blocks/Intro';

const StyledSection = styled(Section)<{ isCentered?: boolean }>`
    margin: ${({ isCentered }) => (isCentered ? '0 auto' : '0')};

    text-align: ${({ isCentered }) => (isCentered ? 'center' : 'left')};
`;

const ListContainer = styled.div`
    margin-top: ${spacings.spacer * 1.75}px;
    margin-bottom: ${spacings.spacer * 1.75}px;
`;

const ItemContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin-bottom: ${spacings.spacer * 1.75}px;

    text-align: center;
`;

const ShowMore = styled.span`
    text-decoration: underline;
    cursor: pointer;
`;

const Items = styled.div<{ isVisible?: boolean; isCentered?: boolean }>`
    display: ${({ isVisible }) => (isVisible ? 'flex' : 'none')};
    align-items: ${({ isCentered }) => (isCentered ? 'center' : 'flex-start')};
    justify-content: ${({ isCentered }) =>
        isCentered ? 'center' : 'flex-start'};
    flex-wrap: wrap;
    margin-left: -20px;
`;

const StyledActions = styled(Actions)<{ isCentered?: boolean }>`
    position: relative;
    padding-top: ${spacings.spacer * 2}px;
    left: ${({ isCentered }) => isCentered && '50%'};
    transform: ${({ isCentered }) => isCentered && 'translateX(-50%)'};

    @media ${mq.semilarge} {
        max-width: 600px;
    }
`;

const Item = styled.img`
    display: block;

    padding-left: 20px;
    padding-top: 20px;
`;

const IconList: React.FC<{
    title?: string;
    superTitle?: string;
    text?: string;
    bgMode?: 'full' | 'splitted';
    primaryItems?: { src: string; alt?: string }[];
    secondaryItems?: { src: string; alt?: string }[];
    primaryAction?: (isInverted?: boolean) => React.ReactNode;
    secondaryAction?: (isInverted?: boolean) => React.ReactNode;
    isInverted?: boolean;
    isCentered?: boolean;
}> = ({
    title,
    superTitle,
    text,
    bgMode,
    primaryItems,
    secondaryItems,
    isInverted = false,
    isCentered = false,
    primaryAction,
    secondaryAction,
}) => {
    const getSectionBgMode = (): BgMode | undefined => {
        switch (bgMode) {
            case 'full':
                return 'full';
            case 'splitted':
                return 'larger-right';
            default:
                return undefined;
        }
    };

    const [showMore, setShowMore] = React.useState(false);
    const theme = React.useContext(ThemeContext);

    return (
        <StyledSection
            addSeperation
            bgColor={
                isInverted
                    ? color(theme).black
                    : bgMode
                    ? color(theme).mono.light
                    : 'transparent'
            }
            bgMode={!isInverted ? getSectionBgMode() : undefined}
            isCentered={isCentered}
        >
            <Wrapper clampWidth="normal" addWhitespace>
                {title && (
                    <Intro
                        title={title}
                        superTitle={superTitle}
                        text={text}
                        isInverted={isInverted}
                        isCentered={isCentered}
                    />
                )}
                <ListContainer>
                    <Copy
                        type="copy"
                        size="medium"
                        textColor={
                            isInverted ? color(theme).white : color(theme).black
                        }
                    >
                        <ItemContainer>
                            <Items isVisible isCentered={isCentered}>
                                {primaryItems?.map(({ src, alt }, i) => {
                                    return <Item key={i} src={src} alt={alt} />;
                                })}
                            </Items>
                            <Items
                                isVisible={showMore === true}
                                isCentered={isCentered}
                            >
                                {secondaryItems?.map(({ src, alt }, i) => {
                                    return <Item key={i} src={src} alt={alt} />;
                                })}
                            </Items>
                        </ItemContainer>
                        <ShowMore
                            onClick={() =>
                                !showMore
                                    ? setShowMore(true)
                                    : setShowMore(false)
                            }
                        >
                            {showMore ? 'weniger anzeigen' : 'weitere anzeigen'}
                        </ShowMore>
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
