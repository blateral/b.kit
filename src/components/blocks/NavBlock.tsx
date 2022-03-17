import AngleRight from 'components/base/icons/AngleRight';
import ArrowRightGhost from 'components/base/icons/ArrowRightGhost';
import Copy from 'components/typography/Copy';
import Heading from 'components/typography/Heading';
import React from 'react';
import styled from 'styled-components';
import { getColors as color, spacings } from 'utils/styles';

const View = styled.a<{ hasLink?: boolean }>`
    color: inherit;
    text-decoration: none;

    pointer-events: ${({ hasLink }) => (hasLink ? 'all' : 'none')};
    cursor: pointer;
`;

const Main = styled.div`
    color: ${({ theme }) => color(theme).new.primary.default};

    display: flex;
    flex-direction: row;
    align-items: flex-start;

    & > * + * {
        margin-left: ${spacings.nudge * 3}px;
    }

    transition: all ease-in-out 0.2s;

    ${View}:hover & {
        color: ${({ theme }) => color(theme).new.primary.hover};
    }
`;

const MainLabel = styled.div`
    & > * {
        display: inline-block;
    }

    & > * + * {
        margin-left: ${spacings.nudge * 3}px;
    }
`;

const Text = styled(Copy)`
    margin-top: ${spacings.nudge * 3}px;
`;

export interface NavBlockProps {
    label?: string;
    text?: string;
    href?: string;
}

const NavBlock: React.FC<NavBlockProps> = ({ label, text, href }) => {
    return (
        <View href={href} hasLink={!!href}>
            <Main>
                <ArrowRightGhost />
                <MainLabel>
                    <Heading textColor="inherit" size="heading-4">
                        {label}
                    </Heading>
                    <AngleRight />
                </MainLabel>
            </Main>
            <Text>{text}</Text>
        </View>
    );
};

export default NavBlock;
