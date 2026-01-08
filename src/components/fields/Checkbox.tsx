import Check from 'components/base/icons/Check';
import Copy from 'components/typography/Copy';
import React, { useId, useRef } from 'react';
import styled from 'styled-components';
import { useLibTheme } from 'utils/LibThemeProvider';
import { getColors as color, spacings } from 'utils/styles';

const View = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;

    & > * + * {
        margin-left: ${spacings.nudge}px;
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

const CheckboxContainer = styled.div<{
    isDisabled?: boolean;
    isInverted?: boolean;
}>`
    color: ${({ theme }) => color(theme).text.inverted};
    cursor: ${({ isDisabled }) => (isDisabled ? 'default' : 'pointer')};
    pointer-events: ${({ isDisabled }) => (isDisabled ? 'none' : 'all')};

    border: 2px solid transparent;

    &:focus-within {
        outline: 1px solid
            ${({ theme, isInverted, isDisabled }) =>
                isDisabled
                    ? 'transparent'
                    : isInverted
                    ? color(theme).primary.inverted
                    : color(theme).primary.default};
        outline-offset: 0;
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
    isDisabled?: boolean;
}>`
    width: 20px;
    min-width: 20px;
    height: 20px;
    display: block;
    position: relative;

    border: 2px solid
        ${({ isSelected, isDisabled, isInverted, theme }) => {
            if (isDisabled) {
                return isInverted
                    ? color(theme).text.subtileInverted
                    : color(theme).text.subtile;
            }
            if (isSelected) {
                return isInverted
                    ? color(theme).primary.inverted
                    : color(theme).primary.default;
            }
            return isInverted
                ? color(theme).elementBg.light
                : color(theme).elementBg.medium;
        }};

    background-color: ${({ isSelected, isDisabled, isInverted, theme }) => {
        if (isDisabled) {
            return isInverted
                ? color(theme).text.subtileInverted
                : color(theme).text.subtile;
        }
        if (isSelected) {
            return isInverted
                ? color(theme).primary.inverted
                : color(theme).primary.default;
        }
        return 'transparent';
    }};
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

export interface CheckboxProps {
    enableMemo?: boolean;
    label?: string;

    onChange?: (e: React.SyntheticEvent<HTMLInputElement>) => void;
    onBlur?: (e: React.SyntheticEvent<HTMLInputElement>) => void;

    name?: string;
    value?: string;

    isDisabled?: boolean;
    isSelected?: boolean;
    isInverted?: boolean;
    isRequired?: boolean;
}

const Checkbox: React.FC<CheckboxProps & { className?: string }> = ({
    label,
    isDisabled,
    isSelected,
    isInverted,
    onChange,
    onBlur,
    name,
    value,
    isRequired,
    className,
}) => {
    const { colors } = useLibTheme();
    const inputRef = useRef<HTMLInputElement>(null);
    const id = useId();
    const fieldId = `checkbox-${id}`;

    return (
        <View className={className}>
            <CheckboxContainer
                isDisabled={isDisabled}
                isInverted={isInverted}
                onClick={() => {
                    if (!inputRef.current) return;
                    inputRef.current.click();
                }}
            >
                <Box
                    isSelected={isSelected}
                    isInverted={isInverted}
                    isDisabled={isDisabled}
                >
                    {isSelected && <StyledCheck />}
                </Box>
                <Original
                    ref={inputRef}
                    id={fieldId}
                    type="checkbox"
                    name={`${name}[]`}
                    value={value}
                    checked={isSelected}
                    required={isRequired}
                    onChange={onChange}
                    onBlur={onBlur}
                    disabled={isDisabled}
                    tabIndex={isDisabled ? -1 : 0}
                />
            </CheckboxContainer>
            {label && (
                <Label
                    renderAs="label"
                    size="small"
                    type="copy-b"
                    isInverted={isInverted}
                    htmlFor={fieldId}
                    textColor={
                        isDisabled
                            ? isInverted
                                ? colors.text.subtileInverted
                                : colors.text.subtile
                            : undefined
                    }
                    innerHTML={`${label}${isRequired ? '<span> *</span>' : ''}`}
                />
            )}
        </View>
    );
};

/**
 * Function to compare both field prop states
 * @param prev Previous props
 * @param next Next props
 * @returns
 */
const areEqual = (prev: CheckboxProps, next: CheckboxProps) => {
    // only apply logic if memo functionality is enabled
    if (!prev.enableMemo) return false;

    if (prev.label !== next.label) return false;
    if (prev.isSelected !== next.isSelected) return false;
    if (prev.value !== next.value) return false;

    return true;
};

export default React.memo(Checkbox, areEqual);
