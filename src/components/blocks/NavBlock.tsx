import Copy from 'components/typography/Copy';
import Link, { LinkProps } from 'components/typography/Link';
import React from 'react';
import styled from 'styled-components';
import { getColors as color, mq, spacings } from 'utils/styles';

const View = styled(Link)<{ isInverted?: boolean; hasIcon?: boolean }>`
    display: -ms-grid;
    display: grid;

    -ms-grid-columns: ${({ hasIcon }) => (hasIcon ? 'min-content 1fr' : '1fr')};
    grid-template-columns: ${({ hasIcon }) =>
        hasIcon ? 'min-content 1fr' : '1fr'};
    -ms-grid-rows: min-content 1fr;
    grid-auto-rows: min-content 1fr;

    cursor: pointer;
    text-decoration: none;
    color: ${({ theme, isInverted }) =>
        isInverted
            ? color(theme).primary.inverted
            : color(theme).primary.default};

    outline-color: ${({ theme, isInverted }) =>
        isInverted
            ? color(theme).primary.inverted
            : color(theme).primary.default};

    transition: all ease-in-out 0.2s;

    @media (hover: hover) and (pointer: fine) {
        &:hover {
            color: ${({ theme, isInverted }) =>
                isInverted
                    ? color(theme).primary.invertedHover
                    : color(theme).primary.hover};
        }
    }
`;

const MainLabel = styled.div<{ hasIcon?: boolean }>`
    display: flex;
    align-items: center;
    margin-left: ${({ hasIcon }) => hasIcon && `${spacings.nudge * 3}px`};
`;

const Text = styled(Copy)<{ hasIcon?: boolean }>`
    margin-top: ${({ hasIcon }) =>
        hasIcon ? spacings.nudge : spacings.nudge * 2}px;
    margin-left: ${({ hasIcon }) => hasIcon && `${spacings.nudge * 3}px`};
`;

const Icon = styled.div`
    display: flex;
    align-items: center;

    & > * {
        height: 48px;
        width: 48px;
    }
`;

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
        <View
            {...link}
            isInverted={isInverted}
            hasIcon={!!customIcon}
            className={className}
        >
            {customIcon ? <Icon>{customIcon({})}</Icon> : ''}
            <MainLabel hasIcon={!!customIcon}>
                {title && (
                    <Title textColor="inherit" size="medium" type="copy-b">
                        {title}
                        {title && customTitleIcon && (
                            <TitleIcon>
                                {customTitleIcon({ isInverted })}
                            </TitleIcon>
                        )}
                    </Title>
                )}
            </MainLabel>
            {text && (
                <>
                    <span />
                    <Text
                        size="small"
                        isInverted={isInverted}
                        innerHTML={text}
                        hasIcon={!!customIcon}
                    />
                </>
            )}
        </View>
    );
};

export default NavBlock;
