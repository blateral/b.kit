import AngleDown from 'components/base/icons/AngleDown';
import AngleUp from 'components/base/icons/AngleUp';
import Copy from 'components/typography/Copy';
import React, { useEffect } from 'react';
import styled, { css, ThemeContext } from 'styled-components';
import { hexToRgba } from 'utils/hexRgbConverter';
import { getColors as color, spacings } from 'utils/styles';

const View = styled.div`
    position: relative;
    text-align: left;
`;

const FieldHead = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-bottom: ${spacings.nudge * 3}px;
    padding-left: ${spacings.nudge}px;
    padding-right: ${spacings.nudge}px;
`;

const Select = styled.div<{
    hasError?: boolean;
    isActive?: boolean;
    hasBg?: boolean;
}>`
    border: ${({ hasError, theme }) =>
        hasError ? `2px solid ${color(theme).error}` : '2px solid transparent'};
    background: ${({ theme, hasBg }) =>
        hasBg ? color(theme).mono.light : color(theme).light};
    outline: none;
    padding: ${spacings.spacer}px;
    width: 100%;
    height: 60px;
    max-height: 60px;

    position: relative;

    &:active {
        border: ${({ theme }) =>
            `2px solid ${hexToRgba(color(theme).dark, 0.2)}`};
    }

    &:focus {
        border: ${({ theme }) =>
            `2px solid ${hexToRgba(color(theme).dark, 0.2)}`};
    }

    ${({ isActive, theme }) =>
        isActive &&
        css`
            border: 2px solid ${hexToRgba(color(theme).dark, 0.2)}};
        `}

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

const SelectMain = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    user-select: none;

    & > * + * {
        margin-left: ${spacings.spacer}px;
    }
`;

const Icon = styled.img`
    height: 100%;
    max-height: 25px;
    max-width: 30px;
`;

const Label = styled(Copy)`
    padding-top: 2px;
`;

const Flyout = styled.ul<{ isVisible?: boolean }>`
    list-style: none;
    padding: 0;
    margin: 0;

    position: absolute;
    width: 100%;
    z-index: 2;

    display: ${({ isVisible }) => (isVisible ? 'block' : 'none')};
    background: ${({ theme }) => color(theme).light};
    border: 2px solid ${({ theme }) => hexToRgba(color(theme).dark, 0.2)};
    border-top: none;

    max-height: 300px;
    overflow-y: scroll;
    scrollbar-width: none;

    ::-webkit-scrollbar {
        display: none;
    }

    ::-webkit-scrollbar-thumb {
        border-radius: 8px;
        background-color: ${({ theme }) => color(theme).mono.medium};
        border: 4px solid rgba(0, 0, 0, 0);
        background-clip: padding-box;
    }
`;

const ItemStyle = styled.li`
    padding: ${spacings.spacer}px ${spacings.nudge * 3}px;
    width: 100%;
    cursor: pointer;
    position: relative;
`;

const Item = styled(Copy)<{ isActive?: boolean }>`
    z-index: 1;

    ${ItemStyle}:hover & {
        &:before {
            content: '';
            background: ${({ theme }) => hexToRgba(color(theme).dark, 0.4)};
            opacity: 0.25;
            display: block;
            position: absolute;
            top: 0;
            bottom: 0;
            right: 0;
            left: 0;
        }
    }

    ${({ isActive }) =>
        isActive &&
        css`
            &:hover {
                color: ${({ theme }) => color(theme).dark};
            }

            &:before {
                content: '';
                background-color: ${({ theme }) =>
                    hexToRgba(color(theme).dark, 0.4)};
                position: absolute;
                top: 0;
                bottom: 0;
                right: 0;
                left: 0;

                z-index: 0;
            }
        `}
`;

const Text = styled.span`
    position: relative;
    z-index: 1;
`;

const ErrorMessage = styled(Copy)`
    margin-top: ${spacings.nudge * 2}px;
    padding-left: ${spacings.nudge}px;
`;

const FocusContainer = styled.div`
    outline: none;
    position: relative;
`;

const SelectDropdown: React.FC<{
    icon?: { src: string; alt?: string };
    label?: string;
    placeholder?: string;
    name?: string;
    value?: string;
    items: {
        value?: string;
        label?: string;
    }[];

    isDisabled?: boolean;
    errorMessage?: string;
    isRequired?: boolean;
    isInverted?: boolean;
    hasBg?: boolean;

    onChange?: (value: string) => void;
    onBlur?: () => void;
}> = ({
    label,
    items,
    name,
    value,
    placeholder,
    isDisabled,
    isInverted,
    hasBg,
    errorMessage,
    isRequired,
    icon,
    onChange,
    onBlur,
}) => {
    const theme = React.useContext(ThemeContext);
    const initialItemIndex = items?.findIndex((item) => item.value === value);
    const [isOpen, setIsOpen] = React.useState(false);
    const [selectedItem, setSelectedItem] = React.useState<
        | {
              value?: string;
              id: number;
              label?: string;
          }
        | undefined
    >(
        initialItemIndex !== -1
            ? { ...items[initialItemIndex], id: initialItemIndex }
            : undefined
    );

    useEffect(() => {
        if (onChange && selectedItem) {
            onChange(selectedItem.value || '');
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [selectedItem]);

    return (
        <View>
            <FieldHead>
                <Copy
                    isInverted={isInverted}
                    textColor={
                        isDisabled ? color(theme).mono.medium : undefined
                    }
                    size="medium"
                    type="copy-b"
                >
                    {label}
                    {label && label !== ' ' && isRequired && '*'}
                </Copy>
            </FieldHead>
            <FocusContainer
                tabIndex={0}
                onBlur={() => {
                    setIsOpen(false);
                    onBlur && onBlur();
                }}
            >
                <Select
                    onClick={() => {
                        isOpen ? setIsOpen(false) : setIsOpen(true);
                    }}
                    isActive={isOpen}
                    hasBg={hasBg && !isInverted}
                    hasError={!!errorMessage}
                >
                    <SelectMain>
                        {icon?.src && (
                            <Icon src={icon.src} alt={icon.alt || ''} />
                        )}
                        {(placeholder || selectedItem?.label) && (
                            <Label
                                textColor={
                                    isDisabled
                                        ? color(theme).mono.medium
                                        : color(theme).dark
                                }
                                size="medium"
                                type="copy"
                            >
                                {selectedItem?.label || placeholder}
                            </Label>
                        )}
                    </SelectMain>
                    {isOpen ? (
                        <AngleUp
                            iconColor={
                                isDisabled
                                    ? color(theme).mono.medium
                                    : color(theme).dark
                            }
                        />
                    ) : (
                        <AngleDown
                            iconColor={
                                isDisabled
                                    ? color(theme).mono.medium
                                    : color(theme).dark
                            }
                        />
                    )}
                </Select>
                <Flyout isVisible={isOpen}>
                    {items.map((item, i) => {
                        return (
                            <ItemStyle
                                key={i}
                                onClick={() => {
                                    setIsOpen(false);
                                    setSelectedItem({
                                        ...item,
                                        id: i,
                                    });
                                }}
                            >
                                <Item
                                    isActive={i === selectedItem?.id}
                                    size="small"
                                    textColor={
                                        i === selectedItem?.id
                                            ? color(theme).light
                                            : color(theme).dark
                                    }
                                >
                                    <Text>{item.label}</Text>
                                </Item>
                            </ItemStyle>
                        );
                    })}
                </Flyout>
            </FocusContainer>
            {selectedItem && (
                <input type="hidden" name={name} value={selectedItem.value} />
            )}
            {errorMessage && (
                <ErrorMessage
                    textColor={color(theme).error}
                    size="small"
                    type="copy-i"
                >
                    {errorMessage
                        ? errorMessage
                        : 'Bitte geben Sie einen gültigen Text ein'}
                </ErrorMessage>
            )}
        </View>
    );
};

export default SelectDropdown;
