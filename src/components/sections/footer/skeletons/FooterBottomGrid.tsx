import React, { FC } from 'react';
import styled from 'styled-components';

import Bdot from 'components/blocks/Bdot';
import { copyStyle } from 'components/typography/Copy';
import Link from 'components/typography/Link';

import { spacings, getColors as color, mq } from 'utils/styles';
import { BottomLink } from '../Footer';

const View = styled.div`
    border-top: 1px solid ${({ theme }) => color(theme).elementBg.medium};
    padding: ${spacings.nudge * 2}px 0;

    & > * + * {
        margin-top: ${spacings.nudge * 2}px;
    }

    @media ${mq.semilarge} {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;

        & > * + * {
            margin-top: 0;
            margin-left: ${spacings.nudge * 2}px;
        }
    }
`;

const LinkListView = styled.ul`
    padding: 0;
    margin: 0;
    list-style: none;

    display: flex;
    flex-direction: row;
    align-items: center;
`;

const BottomLinkItem = styled.li`
    display: flex;
    align-items: center;

    & + & {
        margin-left: ${spacings.nudge}px;
    }
`;

const StyledLink = styled(Link)<{ isInverted?: boolean }>`
    display: block;
    text-decoration: none;

    ${copyStyle('copy', 'medium')}
    color: ${({ theme, isInverted }) =>
        isInverted ? color(theme).text.inverted : color(theme).text.default};
`;

const LinkList: FC<{
    isInverted?: boolean;
    links?: BottomLink[];
    brandIcon?: (isInverted?: boolean) => React.ReactNode;
    className?: string;
}> = ({ isInverted, links, brandIcon, className }) => {
    return (
        <LinkListView className={className}>
            {links?.map((item, i) => (
                <BottomLinkItem key={i}>
                    <StyledLink {...item.link} isInverted={isInverted}>
                        {item.label}
                    </StyledLink>
                </BottomLinkItem>
            ))}
            <BottomLinkItem>
                {brandIcon ? brandIcon(isInverted) : <Bdot />}
            </BottomLinkItem>
        </LinkListView>
    );
};

const FooterBottomGrid: FC<{
    className?: string;
    children?: React.ReactNode;
}> = ({ className, children }) => {
    return <View className={className}>{children}</View>;
};

export default {
    View: FooterBottomGrid,
    LinkList: LinkList,
};
