import Copy from 'components/typography/Copy';
import * as React from 'react';
import styled, { ThemeContext } from 'styled-components';
import { getColors, spacings } from 'utils/styles';
import Check from '../../base/icons/Check';

const CheckboxContainer = styled.div<{ isDisabled?: boolean }>`
    display: flex;
    flex-direction: row;
    align-items: center;

    & > * + * {
        margin-left: ${spacings.nudge * 2}px;
    }

    cursor: ${({ isDisabled }) => (isDisabled ? 'default' : 'pointer')};
    pointer-events: ${({ isDisabled }) => (isDisabled ? 'none' : 'all')};
`;

const Original = styled.input`
    position: absolute;
    left: -9999px;
    opacity: 0;
`;

const Box = styled.span<{ isSelected?: boolean; isInverted?: boolean }>`
    width: 20px;
    min-width: 20px;
    height: 20px;
    display: block;
    position: relative;

    border: 2px solid
        ${({ isInverted, theme }) =>
            isInverted ? '#fff' : getColors(theme).mono.medium};

    background-color: ${({ isSelected, theme }) =>
        isSelected ? getColors(theme).primary.medium : '#fff'};
`;

const StyledCheck = styled(Check)`
    width: 80%;
    height: 80%;
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

const Checkbox: React.FC<{
    label?: string;

    onChange?: () => void;

    name?: string;
    value?: string;

    isDisabled?: boolean;
    isSelected?: boolean;
    isInverted?: boolean;
    isRequired?: boolean;
}> = ({
    label,
    isDisabled,
    isSelected,
    isInverted,
    onChange,
    name,
    value,
    isRequired,
}) => {
    const theme = React.useContext(ThemeContext);
    return (
        <CheckboxContainer isDisabled={isDisabled} onClick={onChange}>
            <Box isSelected={isSelected} isInverted={isInverted}>
                {isSelected && <StyledCheck />}
            </Box>
            <Original
                type="checkbox"
                name={name}
                value={value}
                disabled
                checked={isSelected}
                required={isRequired}
            />
            {label && (
                <Copy
                    size="small"
                    type="copy-b"
                    textColor={
                        isDisabled
                            ? getColors(theme).mono.dark
                            : getColors(theme).primary.medium
                    }
                >
                    {label} {isRequired && '*'}
                </Copy>
            )}
        </CheckboxContainer>
    );
};

export default Checkbox;
