import Copy from 'components/typography/Copy';
import * as React from 'react';
import styled, { css } from 'styled-components';
import { useLibTheme } from 'utils/LibThemeProvider';
import { getColors as color, spacings } from '../../utils/styles';

const View = styled.label`
    display: flex;
    flex-direction: row;
    align-items: center;

    & > * + * {
        margin-left: ${spacings.nudge * 2}px;
    }
`;

const RadioContainer = styled.div<{ isDisabled?: boolean }>`
    cursor: ${({ isDisabled }) => (isDisabled ? 'default' : 'pointer')};
    pointer-events: ${({ isDisabled }) => (isDisabled ? 'none' : 'all')};

    border: 2px solid transparent;
    border-radius: 50%;

    &:focus-within {
        outline: 1px solid ${({ theme }) => color(theme).primary.default};
        outline-offset: 0;
    }
`;

const Original = styled.input`
    position: absolute;
    left: -9999px;
    opacity: 0;
`;

const StyledRadioButton = styled.span<{
    isSelected?: boolean;
    isInverted?: boolean;
}>`
    background: transparent;
    border-radius: 50%;

    position: relative;

    width: 20px;
    height: 20px;
    display: block;

    border: 2px solid
        ${({ isInverted, theme, isSelected }) =>
            isSelected
                ? color(theme).primary.default
                : isInverted
                ? color(theme).elementBg.light
                : color(theme).elementBg.medium};

    ${({ isSelected, theme }) =>
        isSelected
            ? css`
                  background-color: ${color(theme).primary.default};

                  &:before {
                      content: '';
                      position: absolute;
                      display: block;
                      height: 8px;
                      width: 8px;
                      background-color: ${color(theme).elementBg.light};
                      border-radius: 50%;
                      top: 50%;
                      left: 50%;

                      transform: translate(-50%, -50%);
                  }
              `
            : 'none'}
`;

const Label = styled(Copy)`
    padding-top: 2px;
    text-align: left;
    user-select: none;

    & > * {
        margin: 0;
    }
`;

export interface RadioButtonProps {
    enableMemo?: boolean;
    isSelected?: boolean;
    isDisabled?: boolean;
    isInverted?: boolean;
    onChange?: (e: React.SyntheticEvent<HTMLInputElement>) => void;
    name?: string;
    id?: string;
    value?: string;
    label?: string;
}

const RadioButton: React.FC<RadioButtonProps> = ({
    isDisabled,
    isSelected,
    isInverted,
    onChange,
    label,
    id,
    name,
    value,
}) => {
    const { colors } = useLibTheme();

    return (
        <View>
            <RadioContainer isDisabled={isDisabled}>
                <StyledRadioButton
                    isSelected={isSelected}
                    isInverted={isInverted}
                />
                <Original
                    type="radio"
                    name={name}
                    id={id}
                    value={value}
                    checked={isSelected}
                    onChange={onChange}
                />
            </RadioContainer>
            {label && (
                <Label
                    renderAs="span"
                    size="small"
                    type="copy-b"
                    textColor={
                        isDisabled
                            ? colors.elementBg.medium
                            : isInverted
                            ? colors.text.inverted
                            : colors.text.default
                    }
                    innerHTML={label}
                    isInverted={isInverted}
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
const areEqual = (prev: RadioButtonProps, next: RadioButtonProps) => {
    // only apply logic if memo functionality is enabled
    if (!prev.enableMemo) return false;

    if (prev.isSelected !== next.isSelected) return false;
    if (prev.label !== next.label) return false;
    if (prev.value !== next.value) return false;

    return true;
};

export default React.memo(RadioButton, areEqual);
