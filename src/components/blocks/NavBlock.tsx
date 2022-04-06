import Copy from 'components/typography/Copy';
import Link, { LinkProps } from 'components/typography/Link';
import React from 'react';
import styled from 'styled-components';
import { getColors as color, mq, spacings } from 'utils/styles';

const View = styled.div``;

const ContentWrapper = styled(Link)<{ isInverted?: boolean }>`
    color: ${({ theme, isInverted }) =>
        isInverted
            ? color(theme).new.primary.inverted
            : color(theme).new.primary.default};

    display: inline-flex;
    flex-direction: row;
    align-items: flex-start;
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

const MainContent = styled.div`
    padding-top: 12px;
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

const Icon = styled.div`
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
        <View className={className}>
            <ContentWrapper {...link} isInverted={isInverted}>
                {customIcon ? <Icon>{customIcon({})}</Icon> : ''}
                <MainContent>
                    <MainLabel>
                        {title && (
                            <Title
                                textColor="inherit"
                                size="medium"
                                type="copy-b"
                            >
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
                        <Text
                            size="small"
                            isInverted={isInverted}
                            innerHTML={text}
                        />
                    )}
                </MainContent>
            </ContentWrapper>
        </View>
    );
};

export default NavBlock;
