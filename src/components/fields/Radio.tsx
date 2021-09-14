import Copy from 'components/typography/Copy';
import * as React from 'react';
import styled, { css, ThemeContext } from 'styled-components';
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
`;

const Original = styled.input`
    position: absolute;
    left: -9999px;
    opacity: 0;
`;

const StyledRadioButton = styled.span<{
    isSelected?: boolean;
}>`
    background-color: ${({ theme }) => color(theme).light};
    border-radius: 50%;

    position: relative;

    width: 20px;
    height: 20px;
    display: block;

    ${({ isSelected, theme }) =>
        isSelected
            ? css`
                  background-color: ${color(theme).primary.medium};

                  &:before {
                      content: '';
                      position: absolute;
                      display: block;
                      height: 8px;
                      width: 8px;
                      background-color: ${color(theme).light};
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

    & > * {
        margin: 0;
    }
`;

const RadioButton: React.FC<{
    isSelected?: boolean;
    isDisabled?: boolean;
    onChange?: (e: React.SyntheticEvent<HTMLInputElement>) => void;
    name?: string;
    id?: string;
    value?: string;
    label?: string;
}> = ({ isDisabled, isSelected, onChange, label, id, name, value }) => {
    const theme = React.useContext(ThemeContext);
    return (
        <View>
            <RadioContainer isDisabled={isDisabled}>
                <StyledRadioButton isSelected={isSelected} />
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
                    size="small"
                    type="copy-b"
                    textColor={
                        isDisabled
                            ? color(theme).mono.medium
                            : color(theme).dark
                    }
                    innerHTML={label}
                />
            )}
        </View>
    );
};
export default RadioButton;
