import AngleRight from 'components/base/icons/AngleRight';
import ArrowRightGhost from 'components/base/icons/ArrowRightGhost';
import Copy from 'components/typography/Copy';
import Link, { LinkProps } from 'components/typography/Link';
import React from 'react';
import styled from 'styled-components';
import { getColors as color, mq, spacings } from 'utils/styles';

const View = styled.div``;

const Main = styled(Link)<{ isInverted?: boolean }>`
    color: ${({ theme, isInverted }) =>
        isInverted
            ? color(theme).new.primary.inverted
            : color(theme).new.primary.default};

    display: inline-flex;
    flex-direction: row;
    align-items: center;
    cursor: pointer;
    text-decoration: none;

    outline-color: ${({ theme, isInverted }) =>
        isInverted
            ? color(theme).new.primary.inverted
            : color(theme).new.primary.default};

    & > * + * {
        margin-left: ${spacings.nudge * 3}px;
    }

    transition: all ease-in-out 0.2s;

    @media (hover: hover) and (pointer: fine) {
        &:hover {
            color: ${({ theme, isInverted }) =>
                isInverted
                    ? color(theme).new.primary.invertedHover
                    : color(theme).new.primary.hover};
        }
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
    /** Invert colors for use on dark backgrounds */
    isInverted?: boolean;

    /** Navigation title */
    title?: string;

    /** Navigation text (richtext) */
    text?: string;

    /** Link settings */
    link?: LinkProps;

    /** Function to inject custom icon node */
    customIcon?: (props: { isInverted?: boolean }) => React.ReactNode;

    /** Function to inject custom title icon decorator node */
    customTitleIcon?: (props: { isInverted?: boolean }) => React.ReactNode;

    className?: string;
}

const NavBlock: React.FC<NavBlockProps> = ({
    isInverted = false,
    title,
    text,
    link,
    customIcon,
    customTitleIcon,
    className,
}) => {
    return (
        <View className={className}>
            <Main {...link} isInverted={isInverted}>
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
            {text && (
                <Text size="small" isInverted={isInverted} innerHTML={text} />
            )}
        </View>
    );
};

export default NavBlock;
