import styled, { ThemeContext } from 'styled-components';
import Instagram from 'components/base/icons/socials/Instagram';
import { getColors as color, mq, spacings } from 'utils/styles';
import * as React from 'react';
import Heading from 'components/typography/Heading';
import Section, { mapToBgMode } from 'components/base/Section';
import Wrapper from 'components/base/Wrapper';
import { withLibTheme } from 'utils/LibThemeProvider';
import Link, { LinkProps } from 'components/typography/Link';

const Content = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;

    margin: -${spacings.nudge}px;
`;

const ContentBlock = styled(Link)`
    position: relative;
    text-decoration: none;
    color: inherit;

    padding: ${spacings.nudge}px;
    flex: 0 1 100%;

    @media ${mq.medium} {
        flex: 0 1 50%;
    }

    @media ${mq.large} {
        flex: 0 1 33.33%;
    }

    &:before {
        content: '';
        position: absolute;
        top: 5px;
        bottom: 5px;
        left: 5px;
        right: 5px;
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
                    ? color(theme).new.sectionBg.dark
                    : hasBg
                    ? color(theme).new.sectionBg.medium
                    : color(theme).new.sectionBg.light
            }
            bgMode={mapToBgMode(bgMode, true)}
            addSeperation
        >
            <Wrapper addWhitespace>
                <Content>
                    {items &&
                        items.map((item, i) => {
                            return (
                                <ContentBlock isExternal {...item.link} key={i}>
                                    {item.image && (
                                        <Image
                                            src={item.image.src}
                                            alt={item.image.alt}
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
                            );
                        })}
                </Content>
            </Wrapper>
        </Section>
    );
};

export const SocialWallComponent = SocialWall;
export default withLibTheme(SocialWall);
