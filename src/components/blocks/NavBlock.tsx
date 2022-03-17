import AngleRight from 'components/base/icons/AngleRight';
import ArrowRightGhost from 'components/base/icons/ArrowRightGhost';
import Copy from 'components/typography/Copy';
import React from 'react';
import styled from 'styled-components';
import { getColors as color, mq, spacings } from 'utils/styles';

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

const Icon = styled.div``;

const Title = styled(Copy)`
    display: inline-block;
`;

const TitleIcon = styled.span`
    display: inline-block;
    margin-left: ${spacings.nudge * 2}px;

    @media ${mq.medium} {
        margin-left: ${spacings.nudge * 3}px;
    }
`;

const DefaultIcon = styled(AngleRight)`
    && {
        margin-bottom: -2px;
    }
`;
export interface NavBlockProps {
    title?: string;
    text?: string;
    href?: string;
    customIcon?: (props: { isInverted?: boolean }) => React.ReactNode;
    customTitleIcon?: (props: { isInverted?: boolean }) => React.ReactNode;
}

const NavBlock: React.FC<NavBlockProps> = ({
    title,
    text,
    href,
    customIcon,
    customTitleIcon,
}) => {
    return (
        <View href={href} hasLink={!!href}>
            <Main>
                <Icon>{customIcon ? customIcon({}) : <ArrowRightGhost />}</Icon>
                <MainLabel>
                    {title && (
                        <Title textColor="inherit" size="medium" type="copy-b">
                            {title}
                            {title && (
                                <TitleIcon>
                                    {customTitleIcon ? (
                                        customTitleIcon({})
                                    ) : (
                                        <DefaultIcon />
                                    )}
                                </TitleIcon>
                            )}
                        </Title>
                    )}
                </MainLabel>
            </Main>
            <Text size="small">{text}</Text>
        </View>
    );
};

export default NavBlock;
