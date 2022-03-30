import Section, { mapToBgMode } from 'components/base/Section';
import Wrapper from 'components/base/Wrapper';
import Image, { ImageProps } from 'components/blocks/Image';
import Copy from 'components/typography/Copy';
import Link, { LinkProps } from 'components/typography/Link';
import React from 'react';
import styled from 'styled-components';
import { useLibTheme, withLibTheme } from 'utils/LibThemeProvider';
import { spacings, getColors as color, mq, getGlobals } from 'utils/styles';

const View = styled.div<{ isInverted?: boolean }>`
    position: relative;
    padding-top: 30%;

    color: ${({ theme }) => color(theme).new.text.copyInverted};
    cursor: pointer;

    @media ${mq.medium} {
        padding-top: 85%;
    }
`;

const SolidView = styled(View)`
    background-color: ${({ theme, isInverted }) =>
        isInverted
            ? color(theme).new.primary.inverted
            : color(theme).new.primary.default};

    transition: background-color 0.2s ease-in-out, box-shadow 0.2s ease-in-out;

    @media (hover: hover) and (pointer: fine) {
        &:hover {
            box-shadow: 0 2px 24px 0 rgba(0, 0, 0, 0.35);
            background-color: ${({ theme, isInverted }) =>
                isInverted
                    ? color(theme).new.primary.invertedHover
                    : color(theme).new.primary.hover};
        }
    }
`;

const ImageView = styled(View)`
    transition: box-shadow 0.2s ease-in-out;
    cursor: pointer;

    transition: box-shadow 0.2s ease-in-out;

    @media (hover: hover) and (pointer: fine) {
        img {
            -webkit-backface-visibility: hidden;
            -ms-transform: translateZ(0); /* IE 9 */
            -webkit-transform: translateZ(0); /* Chrome, Safari, Opera */
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

    & > * + * {
        margin-left: ${spacings.nudge * 2}px;
    }
`;

const SubLabel = styled(Copy)`
    text-transform: lowercase;
    display: inline-block;
`;

const Icon = styled.img`
    height: 60px;
    width: 60px;
`;

const CardLink = styled(Link)`
    z-index: 1;
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;

    outline-color: ${({ theme }) => color(theme).new.primary.default};
`;

export interface CardProps {
    isInverted?: boolean;
    title?: string;
    subLabel?: string;
    image?: ImageProps;
    link?: LinkProps;
    icon?: { src: string; alt?: string };
    decorator?: (props: { isInverted?: boolean }) => React.ReactNode;
}

const Card: React.FC<
    Omit<CardProps, 'coverSpace' | 'ratios'> & {
        className?: string;
    }
> = ({ isInverted, icon, title, subLabel, image, link, decorator }) => {
    const CardView = image ? ImageView : SolidView;

    return (
        <CardView isInverted={isInverted}>
            {image && (
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
                            {decorator ? decorator({ isInverted }) : undefined}
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
                    ? colors.new.sectionBg.dark
                    : bgMode
                    ? colors.new.sectionBg.medium
                    : colors.new.sectionBg.light
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
