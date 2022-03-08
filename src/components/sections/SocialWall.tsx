import React from 'react';
import styled from 'styled-components';
import { getColors as color, spacings } from 'utils/styles';

import Instagram from 'components/base/icons/socials/Instagram';
import Heading from 'components/typography/Heading';
import Section, { mapToBgMode } from 'components/base/Section';
import Wrapper from 'components/base/Wrapper';
import { useLibTheme, withLibTheme } from 'utils/LibThemeProvider';
import Link, { LinkProps } from 'components/typography/Link';
import Grid from 'components/base/Grid';
import Image, { ImageProps } from 'components/blocks/Image';

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
    transform: translate(-50%, -50%);
    text-align: center;

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
    items?: Array<{
        link?: LinkProps;
        image?: Omit<ImageProps, 'coverSpace' | 'ratio'>;
    }>;
    followUs?: string;
    hashtag?: string;
    socialIcon?: React.ReactNode;
    bgMode?: 'full' | 'inverted';
}> = ({ items, hashtag, followUs, socialIcon, bgMode }) => {
    const { colors } = useLibTheme();
    const isInverted = bgMode === 'inverted';
    const hasBg = bgMode === 'full';

    return (
        <Section
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
                <Grid.Row>
                    {items?.map((item, i) => (
                        <Grid.Col
                            key={i}
                            medium={{ span: 6 / 12 }}
                            large={{ span: 4 / 12 }}
                        >
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
                                    {hashtag && (
                                        <Heading size="heading-2" isInverted>
                                            {`#${hashtag}`}
                                        </Heading>
                                    )}
                                </TextContainer>
                                <InstagramIcon>
                                    {socialIcon || <Instagram />}
                                </InstagramIcon>
                            </Card>
                        </Grid.Col>
                    ))}
                </Grid.Row>
            </Wrapper>
        </Section>
    );
};

export const SocialWallComponent = SocialWall;
export default withLibTheme(SocialWall);
