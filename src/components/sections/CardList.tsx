import AngleRight from 'components/base/icons/AngleRight';
import Section, { mapToBgMode } from 'components/base/Section';
import Wrapper from 'components/base/Wrapper';
import Image, { ImageProps } from 'components/blocks/Image';
import Copy from 'components/typography/Copy';
import Link, { LinkProps } from 'components/typography/Link';
import React from 'react';
import styled from 'styled-components';
import { useLibTheme, withLibTheme } from 'utils/LibThemeProvider';
import { spacings, getColors as color, mq, getGlobals } from 'utils/styles';

const View = styled.div`
    position: relative;

    color: ${({ theme }) => color(theme).new.text.copyInverted};

    cursor: pointer;

    transition: all ease-in-out 0.2s;
`;

const SolidView = styled(View)`
    /* padding-top: ${(3 / 4) * 100}%; */
    background: ${({ theme }) => color(theme).new.primary.default};

    padding-top: 25%;

    @media ${mq.medium} {
        padding-top: 100%;
    }

    @media (hover: hover) and (pointer: fine) {
        &:hover {
            background: ${({ theme }) => color(theme).new.primary.hover};
        }
    }
`;

const ImageView = styled(View)`
    transition: box-shadow 0.2s ease-in-out;
    cursor: pointer;

    padding-top: 25%;

    @media (hover: hover) and (pointer: fine) {
        &:hover {
            box-shadow: 0 2px 24px 0 rgba(0, 0, 0, 0.35);
        }
    }

    &:focus {
        box-shadow: 0 2px 24px 0 rgba(0, 0, 0, 0.35);
    }

    &:after {
        content: '';
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        background: ${({ theme }) =>
            getGlobals(theme).sections.imageTextGradient};
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

const TextContainer = styled(Copy)`
    width: 100%;

    & > * + * {
        margin-top: ${spacings.nudge / 2}px;
    }
`;

const Title = styled(Copy)`
    text-transform: uppercase;
    display: inline-block;
`;

const Footer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const SubLabel = styled(Copy)`
    text-transform: lowercase;
    display: inline-block;
`;

const DecoratorIcon = styled(AngleRight)`
    margin-left: ${spacings.nudge * 2}px;

    width: 13px;
    height: 18px;

    @media ${mq.medium} {
        margin-left: ${spacings.nudge * 3}px;
    }
`;

const Icon = styled.img`
    height: 60px;
    width: 60px;
`;

const CardLink = styled(Link)`
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;

    outline-color: ${({ theme }) => color(theme).new.primary.default};
`;

export interface CardProps {
    title?: string;
    subLabel?: string;
    image?: ImageProps;
    link?: LinkProps;
    icon?: { src: string; alt?: string };
}

const Card: React.FC<
    Omit<CardProps, 'coverSpace'> & {
        className?: string;
    }
> = ({ icon, title, subLabel, image, link }) => {
    const CardView = image ? ImageView : SolidView;

    return (
        <CardView>
            {image && <StyledImage {...image} coverSpace />}
            <Content hasIcon={!!icon}>
                {icon && <Icon src={icon?.src} alt={icon?.alt || ''} />}
                <TextContainer textColor="inherit">
                    {title && (
                        <Title textColor="inherit" size="big" type="copy">
                            {title}
                        </Title>
                    )}
                    {subLabel && (
                        <Footer>
                            <SubLabel
                                textColor="inherit"
                                type="copy-b"
                                size="big"
                            >
                                {subLabel}
                            </SubLabel>
                            <DecoratorIcon />
                        </Footer>
                    )}
                </TextContainer>
            </Content>
            {link && <CardLink {...link} ariaLabel={title || undefined} />}
        </CardView>
    );
};

const List = styled.ul`
    padding: 0;
    margin-top: -${spacings.spacer}px;
    margin-left: -${spacings.spacer}px;
    list-style: none;

    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
    flex-wrap: wrap;
`;

const CardItem = styled.li<{ isEqual?: boolean }>`
    padding-top: ${spacings.spacer}px;
    padding-left: ${spacings.spacer}px;

    width: 100%;

    @media ${mq.medium} {
        flex: 0 0 50%;
        max-width: 370px;
    }

    @media ${mq.semilarge} {
        flex: 0 0 33.33%;
    }

    @media (min-width: 75em) {
        flex: ${({ isEqual }) => isEqual && '0 0 25%'};
    }
`;

const CardList: React.FC<{
    /** Array with card item settings */
    items?: Omit<CardProps, 'mode'>[];
    bgMode?: 'full' | 'inverted';

    /** aspect ratio mode */
}> = ({ items, bgMode }) => {
    const { colors } = useLibTheme();
    const isInverted = bgMode === 'inverted';
    return (
        <Section
            bgColor={
                isInverted
                    ? colors.new.sectionBg.dark
                    : bgMode
                    ? colors.new.sectionBg.medium
                    : colors.new.sectionBg.light
            }
            bgMode={mapToBgMode(bgMode)}
            addSeperation
        >
            <Wrapper addWhitespace>
                <List>
                    {items?.map((item, i) => (
                        <CardItem key={i} isEqual={items.length % 2 === 0}>
                            <Card {...item} />
                        </CardItem>
                    ))}
                </List>
            </Wrapper>
        </Section>
    );
};

export const CardListComponent = CardList;
export default withLibTheme(CardList);
