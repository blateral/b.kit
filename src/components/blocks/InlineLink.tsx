import AngleRight from 'components/base/icons/AngleRight';
import Copy from 'components/typography/Copy';
import Link, { LinkProps } from 'components/typography/Link';
import React from 'react';
import styled from 'styled-components';
import { mq, spacings, getColors } from 'utils/styles';

const View = styled.div<{ isInverted?: boolean }>`
    border-bottom: 1px solid transparent;

    max-width: max-content;

    @media (hover: hover) and (pointer: fine) {
        &:hover {
            border-bottom: 1px solid
                ${({ theme, isInverted }) =>
                    isInverted
                        ? getColors(theme).new.primary.invertedHover
                        : getColors(theme).new.primary.hover};
            color: ${({ theme, isInverted }) =>
                isInverted
                    ? getColors(theme).new.primary.invertedHover
                    : getColors(theme).new.primary.hover};
        }
    }
`;

const ViewLink = styled(Link)<{ isInverted?: boolean }>`
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: 0;
    outline-color: ${({ theme, isInverted }) =>
        isInverted
            ? getColors(theme).new.primary.inverted
            : getColors(theme).new.primary.default};
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

const DefaultIcon = styled(AngleRight)`
    && {
        margin-bottom: -2px;
    }
`;

const InlineLink: React.FC<{
    title?: string;
    link?: LinkProps;
    customTitleIcon?: (props: { isInverted?: boolean }) => React.ReactNode;
    isInverted?: boolean;
}> = ({ title, link, customTitleIcon, isInverted }) => {
    return (
        <View isInverted={isInverted}>
            {title && (
                <Title textColor="inherit" size="medium" type="copy-b">
                    {title}
                    {title && (
                        <TitleIcon>
                            {customTitleIcon ? (
                                customTitleIcon({ isInverted })
                            ) : (
                                <DefaultIcon />
                            )}
                        </TitleIcon>
                    )}
                </Title>
            )}
            <ViewLink
                {...link}
                isInverted={isInverted}
                ariaLabel={link?.href ? title : undefined}
            />
        </View>
    );
};

export default InlineLink;
