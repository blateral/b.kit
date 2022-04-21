import Check from 'components/base/icons/Check';
import Copy from 'components/typography/Copy';
import React, { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';
import { hexToRgba } from 'utils/hexRgbConverter';
import { getColors as color, spacings } from 'utils/styles';

const View = styled.label`
    display: flex;
    flex-direction: row;
    align-items: center;

    & > * + * {
        margin-left: ${spacings.nudge * 2}px;
    }
`;

const Label = styled(Copy)`
    padding-top: 2px;
    text-align: left;
    user-select: none;

    & > * {
        margin: 0;
    }
`;

const CheckboxContainer = styled.div<{ isDisabled?: boolean }>`
    cursor: ${({ isDisabled }) => (isDisabled ? 'default' : 'pointer')};
    pointer-events: ${({ isDisabled }) => (isDisabled ? 'none' : 'all')};

    border: 2px solid transparent;

    &:focus-within {
        border: ${({ theme }) =>
            `2px solid ${hexToRgba(color(theme).elementBg.dark, 0.2)}`};
    }
`;

const Original = styled.input`
    position: absolute;
    left: -9999px;
    opacity: 0;
`;

const Box = styled.span<{
    isSelected?: boolean;
    isInverted?: boolean;
}>`
    width: 20px;
    min-width: 20px;
    height: 20px;
    display: block;
    position: relative;

    border: 2px solid
        ${({ isInverted, theme, isSelected }) =>
            isSelected
                ? color(theme).primary.default
                : isInverted
                ? color(theme).elementBg.light
                : color(theme).elementBg.medium};

    background-color: ${({ isSelected, theme }) =>
        isSelected
            ? color(theme).primary.default
            : color(theme).elementBg.light};
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

    onChange?: (e: React.SyntheticEvent<HTMLInputElement>) => void;
    onBlur?: (e: React.SyntheticEvent<HTMLInputElement>) => void;
    onClick?: () => void;

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
    onBlur,
    onClick,
    name,
    value,
    isRequired,
}) => {
    const theme = useContext(ThemeContext);

    return (
        <View>
            <CheckboxContainer isDisabled={isDisabled} onClick={onClick}>
                <Box isSelected={isSelected} isInverted={isInverted}>
                    {isSelected && <StyledCheck />}
                </Box>
                <Original
                    type="checkbox"
                    name={`${name}[]`}
                    value={value}
                    checked={isSelected}
                    required={isRequired}
                    onChange={onChange}
                    onBlur={onBlur}
                />
            </CheckboxContainer>
            {label && (
                <Label
                    renderAs="span"
                    size="small"
                    type="copy-b"
                    isInverted={isInverted}
                    textColor={
                        isDisabled ? color(theme).text.inverted : undefined
                    }
                    innerHTML={`${label}${isRequired ? '<span> *</span>' : ''}`}
                />
            )}
        </View>
    );
};

export default Checkbox;
