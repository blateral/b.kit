import styled from 'styled-components';
import Instagram from 'components/base/icons/socials/Instagram';
import {
    getColors as color,
    Heading,
    mq,
    Section,
    spacings,
    Wrapper,
} from 'index';
import * as React from 'react';

const Content = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;

    margin: -${spacings.nudge}px;
`;

const ContentBlock = styled.a`
    position: relative;
    text-decoration: none;
    color: inherit;

    padding: ${spacings.nudge}px;

    flex: 1 0 50%;

    @media ${mq.large} {
        flex: 1 0 33.33%;
    }

    &:hover {
        &:before {
            content: '';
            position: absolute;
            top: 5px;
            bottom: 5px;
            left: 5px;
            right: 5px;
            background: ${({ theme }) => color(theme).secondary.light};
        }
    }
`;

const Image = styled.img`
    display: block;
    width: 100%;
`;

const TextContainer = styled.div`
    display: none;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;

    ${ContentBlock}:hover & {
        display: block;
    }
`;

const FollowUs = styled(Heading)`
    text-transform: uppercase;
`;

const InstagramIcon = styled.div`
    position: absolute;
    left: 20px;
    bottom: 20px;

    & > * {
        fill: #fff;

        ${ContentBlock}:hover & {
            fill: ${({ theme }) => color(theme).dark};
        }
    }
`;

const SocialWall: React.FC<{
    items?: {
        link?: string;
        image?: { src: string; alt?: string };
    }[];
    followUs?: string;
    hashtag?: string;
}> = ({ items, hashtag, followUs }) => {
    return (
        <Section>
            <Wrapper addWhitespace>
                <Content>
                    {items &&
                        items.map((item, i) => {
                            return (
                                <ContentBlock href={item.link} key={i}>
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
                                        <Instagram iconColor="inherit" />
                                    </InstagramIcon>
                                </ContentBlock>
                            );
                        })}
                </Content>
            </Wrapper>
        </Section>
    );
};

export default SocialWall;
