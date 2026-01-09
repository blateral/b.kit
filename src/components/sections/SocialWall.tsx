import React from 'react';
import styled from 'styled-components';
import {
    getColors as color,
    mq,
    spacings,
    getGlobals as global,
} from 'utils/styles';

import Instagram from 'components/base/icons/socials/Instagram';
import Heading from 'components/typography/Heading';
import Section, { mapToBgMode } from 'components/base/Section';
import Wrapper from 'components/base/Wrapper';
import { useLibTheme, withLibTheme } from 'utils/LibThemeProvider';
import Link, { LinkProps } from 'components/typography/Link';
import { gridSettings } from 'components/base/Grid';
import Image, { ImageProps } from 'components/blocks/Image';

const Cards = styled.ul`
    display: flex;
    flex-wrap: wrap;
    margin: 0;
    padding: 0;
    list-style: none;

    margin-top: -${spacings.spacer}px;
    margin-left: -${spacings.spacer}px;

    & > * {
        flex: 1 1 100%;
        margin-top: ${spacings.spacer}px;
        margin-left: ${spacings.spacer}px;
    }

    @media ${mq.medium} {
        & > * {
            flex: 1 1 calc(50% - ${gridSettings.gutter}px);
            max-width: calc(50% - ${gridSettings.gutter}px);
        }
    }

    @media ${mq.large} {
        & > * {
            flex: 1 1 calc(${(1 / 3) * 100}% - ${gridSettings.gutter}px);
            max-width: calc(${(1 / 3) * 100}% - ${gridSettings.gutter}px);
        }
    }
`;

const Item = styled.li`
    display: block;
    position: relative;
    padding: 0;
`;

const Card = styled.div<{ isInverted?: boolean }>`
    position: relative;
    display: block;
    color: '#fff';
    outline-color: ${({ theme, isInverted }) =>
        isInverted
            ? color(theme).primary.inverted
            : color(theme).primary.default};

    border-radius: ${({ theme }) => global(theme).sections.edgeRadius};
    overflow: hidden;

    &:before {
        content: '';
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background: ${({ theme, isInverted }) =>
            isInverted
                ? color(theme).secondary.inverted
                : color(theme).secondary.default};

        opacity: 0;
        pointer-events: none;
        z-index: 1;
        transition: opacity 0.2s ease-in-out;
    }

    &:hover {
        &:before {
            opacity: 1;
            pointer-events: all;
        }
    }

    &:focus {
        &:before {
            opacity: 1;
            pointer-events: all;
        }
    }

    &:has(:focus-visible) {
        outline: 2px solid
            ${({ isInverted, theme }) =>
                isInverted
                    ? color(theme).primary.inverted
                    : color(theme).primary.default};

        outline-offset: 2px;
    }
`;

const TitleLink = styled(Link)`
    text-decoration: none;
    outline: none;

    &:before {
        content: '';
        position: absolute;
        inset: 0;
        z-index: 1;
    }

    &:focus-visible {
        outline: none;
    }
`;

const StyledImage = styled(Image)`
    display: block;
    height: 100%;
    z-index: 0;
`;

const TextContainer = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    text-align: center;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    padding: ${spacings.nudge * 2}px;

    opacity: 0;
    pointer-events: none;
    z-index: 2;
    transition: opacity 0.2s ease-in-out;

    & > * + * {
        margin-top: ${spacings.nudge * 2}px;
    }

    ${Card}:hover & {
        opacity: 1;
        pointer-events: all;
    }

    ${Card}:focus & {
        opacity: 1;
        pointer-events: all;
    }
`;

const FollowUs = styled(Heading)`
    text-transform: uppercase;
`;

const InstagramIcon = styled.div`
    position: absolute;
    left: 20px;
    bottom: 20px;
    color: ${({ theme }) => color(theme).text.inverted};
    z-index: 2;

    & > * {
        fill: #fff;

        ${Card}:hover & {
            color: ${({ theme }) => color(theme).text.inverted};
        }
    }
`;

export interface SocialWallItem {
    link?: LinkProps;
    image?: Omit<ImageProps, 'coverSpace' | 'ratio'>;
    followUs?: string;
    hashTag?: string;
    socialIcon?: React.ReactNode;
}

const SocialWall: React.FC<{
    /** ID value for targeting section with anchor hashes */
    anchorId?: string;

    /** Array with item settings */
    items?: SocialWallItem[];

    /** Text for main social media follow call */
    followUs?: string;

    /** Text for e.g. social media hashtag */
    hashTag?: string;

    /** Section background */
    bgMode?: 'full' | 'inverted';

    /** Aria label for the list */
    listAriaLabel?: string;
}> = ({
    anchorId,
    items,
    hashTag,
    followUs,
    bgMode,
    listAriaLabel = 'List of cards with social media links',
}) => {
    const { colors } = useLibTheme();
    const isInverted = bgMode === 'inverted';
    const hasBg = bgMode === 'full';

    return (
        <Section
            anchorId={anchorId}
            bgColor={
                isInverted
                    ? colors.sectionBg.dark
                    : hasBg
                    ? colors.sectionBg.medium
                    : colors.sectionBg.light
            }
            bgMode={mapToBgMode(bgMode, true)}
            addSeperation
        >
            <Wrapper addWhitespace>
                <Cards aria-label={listAriaLabel}>
                    {items?.map((item, i) => {
                        const followUsText =
                            item.followUs || followUs || 'Follow Us';
                        const hashTagText = item.hashTag || hashTag;

                        return (
                            <Item key={i}>
                                <Card isInverted={isInverted}>
                                    {item.image && (
                                        <StyledImage
                                            {...item.image}
                                            coverSpace
                                            ratios={{
                                                small: { w: 1, h: 1 },
                                            }}
                                            isInverted={isInverted}
                                            isDecorative
                                        />
                                    )}
                                    <TextContainer>
                                        <TitleLink isExternal {...item.link}>
                                            <FollowUs size="super" isInverted>
                                                {followUsText}
                                            </FollowUs>
                                        </TitleLink>
                                        {hashTagText && (
                                            <Heading
                                                size="heading-2"
                                                isInverted
                                            >
                                                {hashTagText}
                                            </Heading>
                                        )}
                                    </TextContainer>
                                    <InstagramIcon>
                                        {item.socialIcon || <Instagram />}
                                    </InstagramIcon>
                                </Card>
                            </Item>
                        );
                    })}
                </Cards>
            </Wrapper>
        </Section>
    );
};

export const SocialWallComponent = SocialWall;
export default withLibTheme(SocialWall);
