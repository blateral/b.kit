import styled, { ThemeContext } from 'styled-components';
import Instagram from 'components/base/icons/socials/Instagram';
import { getColors as color, mq, spacings } from 'utils/styles';
import * as React from 'react';
import Heading from 'components/typography/Heading';
import Section, { mapToBgMode } from 'components/base/Section';
import Wrapper from 'components/base/Wrapper';
import { withLibTheme } from 'utils/LibThemeProvider';
import Link, { LinkProps } from 'components/typography/Link';

const Content = styled.ul`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;

    list-style: none;
    padding: 0;
    margin: 0;
    margin: -${spacings.nudge}px;
`;

const ContentItem = styled.li`
    padding: ${spacings.nudge}px;
    flex: 0 1 100%;

    @media ${mq.medium} {
        flex: 0 1 50%;
    }

    @media ${mq.large} {
        flex: 0 1 33.33%;
    }
`;

const ContentBlock = styled(Link)<{ isInverted?: boolean }>`
    display: block;
    position: relative;
    text-decoration: none;

    &:before {
        content: '';
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background: ${({ theme }) => color(theme).secondary.light};

        opacity: 0;
        pointer-events: none;
        transition: opacity 0.1s ease-in-out;
    }

    &:hover {
        &:before {
            opacity: 1;
            pointer-events: all;
        }
    }

    &:focus-visible {
        outline: 2px solid
            ${({ theme, isInverted }) =>
                isInverted ? color(theme).light : color(theme).dark};
        outline-offset: 2px;
    }
`;

const Image = styled.img`
    display: block;
    width: 100%;
`;

const TextContainer = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;

    opacity: 0;
    pointer-events: none;
    transition: opacity 0.1s ease-in-out;

    ${ContentBlock}:hover & {
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
    color: ${({ theme }) => color(theme).light};

    & > * {
        fill: #fff;

        ${ContentBlock}:hover & {
            color: ${({ theme }) => color(theme).dark};
        }
    }
`;

const SocialWall: React.FC<{
    items?: {
        link?: LinkProps;
        image?: { src: string; alt?: string };
    }[];
    followUs?: string;
    hashtag?: string;
    socialIcon?: React.ReactNode;
    bgMode?: 'full' | 'inverted';
}> = ({ items, hashtag, followUs, socialIcon, bgMode }) => {
    const theme = React.useContext(ThemeContext);
    const isInverted = bgMode === 'inverted';
    const hasBg = bgMode === 'full';

    return (
        <Section
            bgColor={
                isInverted
                    ? color(theme).dark
                    : hasBg
                    ? color(theme).mono.light
                    : 'transparent'
            }
            bgMode={mapToBgMode(bgMode, true)}
            addSeperation
        >
            <Wrapper addWhitespace>
                <Content aria-label="Social Media Feed">
                    {items &&
                        items.map((item, i) => {
                            return (
                                <ContentItem key={i}>
                                    <ContentBlock
                                        isExternal
                                        isInverted={isInverted}
                                        {...item.link}
                                        ariaLabel="Social Media Post"
                                    >
                                        {item.image && (
                                            <Image
                                                src={item.image.src}
                                                alt={item.image.alt ?? ''}
                                            />
                                        )}
                                        <TextContainer>
                                            <FollowUs size="super">
                                                {followUs
                                                    ? followUs
                                                    : 'Follow Us On Instagram'}
                                            </FollowUs>
                                            {hashtag && (
                                                <Heading size="heading-2">
                                                    {`#${hashtag}`}
                                                </Heading>
                                            )}
                                        </TextContainer>
                                        <InstagramIcon>
                                            {socialIcon || <Instagram />}
                                        </InstagramIcon>
                                    </ContentBlock>
                                </ContentItem>
                            );
                        })}
                </Content>
            </Wrapper>
        </Section>
    );
};

export const SocialWallComponent = SocialWall;
export default withLibTheme(SocialWall);
