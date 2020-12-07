import * as React from 'react';
import Section, { BgMode } from '../base/Section';
import Wrapper from '../base/Wrapper';
import Title from '../blocks/Title';
import styled, { ThemeContext } from 'styled-components';
import Copy from '../typography/Copy';
import { spacings, getColors } from '../../utils/styles';

const StyledSection = styled(Section)<{ isCentered?: boolean }>`
    margin: ${({ isCentered }) => (isCentered ? '0 auto' : '0')};

    text-align: ${({ isCentered }) => (isCentered ? 'center' : 'left')};
`;

const ContentBlock = styled(Copy)<{ isCentered?: boolean }>`
    text-align: ${({ isCentered }) => (isCentered ? 'center' : 'left')};

    ul {
        padding-left: 0;
        list-style-position: inside;
    }

    :not(:first-child) {
        padding-top: ${spacings.nudge * 5}px;
    }
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

const Actions = styled.div`
    & > * + * {
        margin-left: ${spacings.spacer};
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
    isInverted,
    isCentered,
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
            bgColor={
                isInverted
                    ? getColors(theme).black
                    : bgMode
                    ? getColors(theme).mono.light
                    : 'transparent'
            }
            bgMode={!isInverted ? getSectionBgMode() : undefined}
            isCentered={isCentered}
        >
            <Wrapper clampWidth="normal" addWhitespace>
                <Title
                    title={title}
                    superTitle={superTitle}
                    isInverted={isInverted}
                    isCentered={isCentered}
                />
                <ContentBlock
                    isCentered={isCentered}
                    type="copy-b"
                    textColor={
                        isInverted
                            ? getColors(theme).white
                            : getColors(theme).black
                    }
                >
                    {text}
                </ContentBlock>

                <ListContainer>
                    <Copy
                        type="copy"
                        size="medium"
                        textColor={
                            isInverted
                                ? getColors(theme).white
                                : getColors(theme).black
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
                    <Actions>
                        {primaryAction && primaryAction(isInverted)}
                        {secondaryAction && secondaryAction(isInverted)}
                    </Actions>
                )}
            </Wrapper>
        </StyledSection>
    );
};

export default IconList;
