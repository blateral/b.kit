import Copy from 'components/typography/Copy';
import * as React from 'react';
import styled from 'styled-components';
import { spacings, getColors as color } from 'utils/styles';

const View = styled.a<{
    isDisabled?: boolean;
    isActive?: boolean;
    isInverted?: boolean;
}>`
    display: block;
    text-decoration: none;
    color: ${({ isInverted, theme }) =>
        isInverted ? color(theme).new.text.inverted : 'inherit'};
    max-width: min-content;

    text-align: center;

    /* padding: ${spacings.nudge * 5}px ${spacings.nudge * 3}px; */

    pointer-events: ${({ isDisabled }) => (isDisabled ? 'none' : 'all')};

    &:hover {
        & > * {
            transition: opacity 0.2s ease-in-out;
            opacity: ${({ isActive }) => !isActive && 0.4};
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
            <Copy type={isActive ? 'copy-b' : 'copy'} isInverted={isInverted}>
                {label}
            </Copy>
        </View>
    );
};

export default QuicknavButton;
