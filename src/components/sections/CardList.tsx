import Section, { mapToBgMode } from 'components/base/Section';
import Wrapper from 'components/base/Wrapper';
import Image, { ImageProps } from 'components/blocks/Image';
import Copy from 'components/typography/Copy';
import Link, { LinkProps } from 'components/typography/Link';
import React from 'react';
import styled, { css } from 'styled-components';
import { useLibTheme, withLibTheme } from 'utils/LibThemeProvider';
import {
    spacings,
    getColors as color,
    mq,
    getGlobals as global,
} from 'utils/styles';

const View = styled.div<{
    isInverted?: boolean;
    cardColor?: string;
    hasLink?: boolean;
}>`
    position: relative;
    padding-top: 30%;

    color: ${({ theme }) => color(theme).text.inverted};
    border-radius: ${({ theme }) => global(theme).sections.edgeRadius};

    overflow: hidden;

    @media ${mq.medium} {
        padding-top: 85%;
    }
`;

const SolidView = styled(View)`
    background-color: ${({ theme, isInverted, cardColor }) =>
        cardColor
            ? cardColor
            : isInverted
            ? color(theme).primary.inverted
            : color(theme).primary.default};

    transition: background-color 0.2s ease-in-out, box-shadow 0.2s ease-in-out;

    ${({ hasLink }) =>
        hasLink &&
        css`
            cursor: pointer;

            @media (hover: hover) and (pointer: fine) {
                &:hover {
                    box-shadow: 0 2px 24px 0 rgba(0, 0, 0, 0.35);
                }
            }
        `}
`;

const ImageView = styled(View)`
    transition: box-shadow 0.2s ease-in-out;

    ${({ hasLink }) =>
        hasLink &&
        css`
            @media (hover: hover) and (pointer: fine) {
                cursor: pointer;

                img {
                    -webkit-backface-visibility: hidden;
                    -ms-transform: translateZ(0); /* IE 9 */
                    -webkit-transform: translateZ(
                        0
                    ); /* Chrome, Safari, Opera */
                    transform: translateZ(0);
                    transform-origin: center;
                    transition: transform 0.2s ease-in-out;
                }

                &:hover {
                    box-shadow: 0 2px 24px 0 rgba(0, 0, 0, 0.35);

                    img {
                        transform: scale(1.03);
                    }
                }
            }
        `}

    &:after {
        content: '';
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        background: ${({ theme }) => global(theme).sections.imageTextGradient};
        pointer-events: none;
    }

    @media ${mq.medium} {
        padding-top: 0;
    }
`;

const StyledImage = styled(Image)`
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;

    display: block;
    width: 100%;
    height: 100%;

    @media ${mq.medium} {
        position: relative;
    }
`;

const Content = styled.div<{ hasIcon?: boolean }>`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    overflow: hidden;
    z-index: 1;

    padding: ${spacings.nudge * 3}px;

    display: flex;
    flex-direction: row;
    align-items: center;

    & > * + * {
        margin-left: ${spacings.spacer}px;
    }

    @media ${mq.medium} {
        display: flex;
        flex-direction: ${({ hasIcon }) => (hasIcon ? 'column' : 'row')};
        justify-content: space-between;
        align-items: ${({ hasIcon }) => (hasIcon ? 'flex-start' : 'flex-end')};

        & > * + * {
            margin-left: 0;
        }
    }
`;

const TextContainer = styled.div`
    width: 100%;

    & > * + * {
        margin-top: ${spacings.nudge / 2}px;
    }
`;

const Title = styled(Copy)`
    display: inline-block;
    max-width: 100%;

    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-transform: uppercase;

    @media ${mq.medium} {
        -webkit-line-clamp: 2;
    }
`;

const Footer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    & > * + * {
        margin-left: ${spacings.nudge * 2}px;
    }
`;

const SubLabel = styled(Copy)`
    display: inline-block;

    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-transform: lowercase;
`;

const Icon = styled.div`
    & > * {
        height: 60px;
        width: 60px;
    }
`;

const CardLink = styled(Link)<{ isInverted?: boolean }>`
    z-index: 1;
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;

    outline-color: ${({ theme }) => color(theme).primary.default};

    &:focus {
        outline: solid 2px
            ${({ theme, isInverted }) =>
                isInverted
                    ? color(theme).primary.inverted
                    : color(theme).primary.default};
        outline-offset: 4px;

        color: ${({ theme, isInverted }) =>
            isInverted
                ? color(theme).primary.invertedHover
                : color(theme).primary.hover};
    }

    &:focus:not(:focus-visible) {
        outline: none;
    }
`;

export interface CardProps {
    isInverted?: boolean;
    title?: string;
    subLabel?: string;
    image?: ImageProps;
    link?: LinkProps;
    decorator?: (props: { isInverted?: boolean }) => React.ReactNode;
    cardColor?: string;
    customIcon?: (props: { isInverted?: boolean }) => React.ReactNode;
}

const Card: React.FC<
    Omit<CardProps, 'coverSpace' | 'ratios'> & {
        className?: string;
    }
> = ({
    isInverted,
    title,
    subLabel,
    image,
    link,
    decorator,
    cardColor,
    customIcon,
}) => {
    const { colors } = useLibTheme();
    const CardView = image && image.small ? ImageView : SolidView;
    const defaultCardColor = isInverted
        ? colors.primary.inverted
        : colors.primary.default;

    return (
        <CardView
            isInverted={isInverted}
            cardColor={cardColor || defaultCardColor}
            hasLink={!!link?.href}
        >
            {image?.small && (
                <StyledImage
                    {...image}
                    coverSpace
                    isInverted={isInverted}
                    ratios={{
                        small: { w: 352, h: 108 },
                        medium: { w: 286, h: 244 },
                    }}
                />
            )}
            <Content hasIcon={!!customIcon}>
                {customIcon ? <Icon>{customIcon({})}</Icon> : ''}
                <TextContainer>
                    {title && (
                        <Title size="big" type="copy" isInverted>
                            {title}
                        </Title>
                    )}
                    {subLabel && (
                        <Footer>
                            <SubLabel type="copy-b" size="big" isInverted>
                                {subLabel}
                            </SubLabel>
                            {decorator ? decorator({ isInverted }) : undefined}
                        </Footer>
                    )}
                </TextContainer>
            </Content>
            {link?.href && (
                <CardLink
                    isInverted={isInverted}
                    {...link}
                    ariaLabel={title || undefined}
                />
            )}
        </CardView>
    );
};

const List = styled.ul`
    padding: 0;
    margin-top: -${spacings.nudge * 2}px;
    margin-left: -${spacings.nudge * 2}px;
    list-style: none;

    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
    flex-wrap: wrap;

    @media ${mq.medium} {
        margin-top: -${spacings.spacer}px;
        margin-left: -${spacings.spacer}px;
    }
`;

const CardItem = styled.li<{ isEqual?: boolean }>`
    padding-top: ${spacings.nudge * 2}px;
    padding-left: ${spacings.nudge * 2}px;

    width: 100%;

    @media ${mq.medium} {
        flex: 0 0 50%;
        max-width: 370px;
        padding-top: ${spacings.spacer}px;
        padding-left: ${spacings.spacer}px;
    }

    @media ${mq.semilarge} {
        flex: 0 0 33.33%;
    }

    @media (min-width: 75em) {
        flex: ${({ isEqual }) => isEqual && '0 0 25%'};
    }
`;

const CardList: React.FC<{
    /** ID value for targeting section with anchor hashes */
    anchorId?: string;

    /** Array with card item settings */
    items?: Omit<CardProps, 'decorator' | 'isInverted'>[];

    /** Section background */
    bgMode?: 'full' | 'inverted';

    /** Function to inject custom decoration icon */
    decorator?: (props: { isInverted?: boolean }) => React.ReactNode;
}> = ({ anchorId, items, bgMode, decorator }) => {
    const { colors } = useLibTheme();
    const isInverted = bgMode === 'inverted';

    return (
        <Section
            anchorId={anchorId}
            bgColor={
                isInverted
                    ? colors.sectionBg.dark
                    : bgMode
                    ? colors.sectionBg.medium
                    : colors.sectionBg.light
            }
            bgMode={mapToBgMode(bgMode, true)}
            addSeperation
        >
            <Wrapper addWhitespace>
                <List>
                    {items?.map((item, i) => (
                        <CardItem key={i} isEqual={items.length % 2 === 0}>
                            <Card
                                {...item}
                                isInverted={isInverted}
                                decorator={decorator}
                            />
                        </CardItem>
                    ))}
                </List>
            </Wrapper>
        </Section>
    );
};

export const CardListComponent = CardList;
export default withLibTheme(CardList);
