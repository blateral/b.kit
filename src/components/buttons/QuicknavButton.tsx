import Copy from 'components/typography/Copy';
import * as React from 'react';
import styled, { css } from 'styled-components';
import { spacings, getColors as color } from 'utils/styles';

const View = styled.a<{
    isDisabled?: boolean;
    isActive?: boolean;
    isInverted?: boolean;
}>`
    display: block;
    text-decoration: none;
    color: ${({ isInverted, theme }) =>
        isInverted ? color(theme).light : 'inherit'};
    max-width: min-content;

    text-align: center;

    padding: ${spacings.nudge * 5}px ${spacings.nudge * 3}px;

    pointer-events: ${({ isDisabled }) => (isDisabled ? 'none' : 'all')};

    ${({ isActive, isDisabled, theme }) =>
        !isDisabled &&
        isActive &&
        css`
            color: ${color(theme).primary.light};

            & > * {
                font-weight: 700;
            }
        `}

    &:hover {
        color: ${({ theme }) => color(theme).primary.light};
    }

    &:focus {
        & > * {
            font-weight: 700;
        }
    }

    &:active {
        & > * {
            font-weight: 700;
        }
    }

    & > * {
        opacity: ${({ isDisabled }) => (isDisabled ? '0.3' : '1')};
    }
`;

const QuicknavButton: React.FC<{
    link?: string;
    label?: string;
    isDisabled?: boolean;
    isActive?: boolean;
    isInverted?: boolean;
}> = ({ link, label, isDisabled, isActive, isInverted }) => {
    return (
        <View
            href={link}
            isActive={isActive}
            isDisabled={isDisabled}
            isInverted={isInverted}
        >
            <Copy textColor="inherit" type="copy">
                {label}
            </Copy>
        </View>
    );
};

export default QuicknavButton;
