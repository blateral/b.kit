import React from 'react';
import styled from 'styled-components';
import { getColors as color, mq, spacings } from 'utils/styles';

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

const Card = styled(Link)<{ isInverted?: boolean }>`
    position: relative;
    display: block;
    text-decoration: none;
    color: '#fff';
    outline-color: ${({ theme, isInverted }) =>
        isInverted
            ? color(theme).new.primary.inverted
            : color(theme).new.primary.default};

    &:before {
        content: '';
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background: ${({ theme, isInverted }) =>
            isInverted
                ? color(theme).new.secondary.inverted
                : color(theme).new.secondary.default};

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
`;

const StyledImage = styled(Image)`
    display: block;
    height: 100%;
    z-index: 0;
`;

const TextContainer = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100%;
    transform: translate(-50%, -50%);
    text-align: center;

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
`;

const FollowUs = styled(Heading)`
    text-transform: uppercase;
`;

const InstagramIcon = styled.div`
    position: absolute;
    left: 20px;
    bottom: 20px;
    color: ${({ theme }) => color(theme).new.text.inverted};
    z-index: 2;

    & > * {
        fill: #fff;

        ${Card}:hover & {
            color: ${({ theme }) => color(theme).new.text.inverted};
        }
    }
`;

const SocialWall: React.FC<{
    /** ID value for targeting section with anchor hashes */
    anchorId?: string;

    /** Array with item settings */
    items?: Array<{
        link?: LinkProps;
        image?: Omit<ImageProps, 'coverSpace' | 'ratio'>;
    }>;

    /** Text for main social media follow call */
    followUs?: string;

    /** Text for e.g. social media hashtag */
    hashTag?: string;

    /** Function to inject custom social icon on bottom left corner */
    socialIcon?: React.ReactNode;

    /** Section background */
    bgMode?: 'full' | 'inverted';
}> = ({ anchorId, items, hashTag, followUs, socialIcon, bgMode }) => {
    const { colors } = useLibTheme();
    const isInverted = bgMode === 'inverted';
    const hasBg = bgMode === 'full';

    return (
        <Section
            anchorId={anchorId}
            bgColor={
                isInverted
                    ? colors.new.sectionBg.dark
                    : hasBg
                    ? colors.new.sectionBg.medium
                    : colors.new.sectionBg.light
            }
            bgMode={mapToBgMode(bgMode, true)}
            addSeperation
        >
            <Wrapper addWhitespace>
                <Cards>
                    {items?.map((item, i) => (
                        <Item key={i}>
                            <Card
                                isExternal
                                {...item.link}
                                isInverted={isInverted}
                                ariaLabel={item?.image?.alt}
                            >
                                {item.image && (
                                    <StyledImage
                                        {...item.image}
                                        coverSpace
                                        ratios={{
                                            small: { w: 1, h: 1 },
                                        }}
                                        isInverted={isInverted}
                                    />
                                )}
                                <TextContainer>
                                    <FollowUs size="super" isInverted>
                                        {followUs
                                            ? followUs
                                            : 'Follow Us On Instagram'}
                                    </FollowUs>
                                    {hashTag && (
                                        <Heading size="heading-2" isInverted>
                                            {hashTag}
                                        </Heading>
                                    )}
                                </TextContainer>
                                <InstagramIcon>
                                    {socialIcon || <Instagram />}
                                </InstagramIcon>
                            </Card>
                        </Item>
                    ))}
                </Cards>
            </Wrapper>
        </Section>
    );
};

export const SocialWallComponent = SocialWall;
export default withLibTheme(SocialWall);
