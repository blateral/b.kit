import AngleDown from 'components/base/icons/AngleDown';
import AngleUp from 'components/base/icons/AngleUp';
import Copy from 'components/typography/Copy';
import React, { useEffect, useRef, useState } from 'react';
import styled, { css } from 'styled-components';
import { hexToRgba } from 'utils/hexRgbConverter';
import { useLibTheme } from 'utils/LibThemeProvider';
import {
    getColors as color,
    spacings,
    getGlobals as global,
} from 'utils/styles';
import Field from './Field';
import { FormProps } from './Textfield';

const Select = styled.button<{
    hasError?: boolean;
    isActive?: boolean;
    isInverted?: boolean;
}>`
    display: block;
    outline: none;
    width: 100%;
    min-height: 50px;
    box-shadow: none;

    border-radius: 0px;
    -webkit-appearance: none;

    padding: ${spacings.nudge}px;

    border: 1px solid
        ${({ theme, isInverted, hasError }) =>
            hasError
                ? color(theme).error
                : isInverted
                ? color(theme).elementBg.light
                : color(theme).elementBg.dark};
    border-radius: ${({ isActive, theme }) => {
        const edgeRadius = global(theme).sections.edgeRadius;
        const topLeft = edgeRadius;
        const topRight = edgeRadius;
        const bottomRight = isActive ? '0px' : edgeRadius;
        const bottomLeft = isActive ? '0px' : edgeRadius;

        return `${topLeft} ${topRight} ${bottomRight} ${bottomLeft}`;
    }};

    background: transparent;

    color: ${({ hasError, theme, isInverted }) =>
        hasError
            ? color(theme).text.error
            : isInverted
            ? color(theme).text.inverted
            : color(theme).text.default};

    outline: none;
    width: 100%;
    height: 50px;
    max-height: 50px;

    position: relative;

    &:active {
        border: ${({ theme }) => `1px solid ${color(theme).primary.default}`};
    }

    &:focus {
        outline: ${({ theme }) => `1px solid ${color(theme).primary.default}`};
        outline-offset: 0;
    }

    ${({ isActive, theme }) =>
        isActive &&
        css`
            border: 2px solid ${hexToRgba(color(theme).elementBg.dark, 0.2)};
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
        margin-left: ${spacings.nudge}px;
    }
`;

const Flyout = styled.ul<{ isVisible?: boolean }>`
    list-style: none;
    padding: 0;
    margin: 0;

    position: absolute;
    width: 100%;
    z-index: 2;

    display: ${({ isVisible }) => (isVisible ? 'block' : 'none')};
    background: ${({ theme }) => color(theme).elementBg.light};
    border: 2px solid
        ${({ theme }) => hexToRgba(color(theme).elementBg.dark, 0.2)};
    border-radius: ${({ isVisible, theme }) => {
        const edgeRadius = global(theme).sections.edgeRadius;
        const topLeft = isVisible ? '0px' : edgeRadius;
        const topRight = isVisible ? '0px' : edgeRadius;
        const bottomRight = edgeRadius;
        const bottomLeft = edgeRadius;

        return `${topLeft} ${topRight} ${bottomRight} ${bottomLeft}`;
    }};
    border-top: none;

    max-height: 300px;
    overflow-y: auto;
    scrollbar-width: none;

    ::-webkit-scrollbar {
        -webkit-appearance: none;
        width: 14px;
    }

    ::-webkit-scrollbar-thumb {
        border-radius: 8px;
        background-color: ${({ theme }) => color(theme).elementBg.medium};
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

const Item = styled(Copy)<{ isSelected?: boolean }>`
    z-index: 0;

    ${ItemStyle}:hover & {
        &:before {
            content: '';
            background: ${({ theme }) =>
                hexToRgba(color(theme).elementBg.dark, 0.4)};
            opacity: 0.25;
            display: block;
            position: absolute;
            top: 0;
            bottom: 0;
            right: 0;
            left: 0;
            z-index: -1;
        }
    }

    ${({ isSelected }) =>
        isSelected &&
        css`
            &:hover {
                color: ${({ theme }) => color(theme).elementBg.dark};
            }

            &:before {
                content: '';
                background-color: ${({ theme }) =>
                    hexToRgba(color(theme).elementBg.dark, 0.4)};
                position: absolute;
                top: 0;
                bottom: 0;
                right: 0;
                left: 0;

                z-index: -1;
            }
        `}
`;

const Container = styled.div`
    position: relative;
    outline: none;
`;

interface SelectItem {
    value?: string;
    label?: string;
}

const SelectDropdown: React.FC<
    FormProps & {
        icon?: { src: string; alt?: string };

        placeholder?: string;
        name?: string;
        value?: string;
        items: SelectItem[];

        onChange?: (value: string) => void;
        onBlur?: () => void;
        indicator?: (props: {
            isOpen: boolean;
            isDisabled?: boolean;
        }) => React.ReactNode;
    }
> = ({
    label,
    isRequired,
    errorMessage,
    infoMessage,
    isDisabled,
    isInverted,
    items,
    name,
    value,
    placeholder,
    onChange,
    onBlur,
    indicator,
}) => {
    const { colors } = useLibTheme();
    const [isOpen, setIsOpen] = useState(false);

    const [activeItemIndex, setActiveItemIndex] = useState<number>(
        items?.findIndex((item) => item.value === value) || -1
    );
    const [selectItems, setSelectItems] = useState<SelectItem[]>(items || []);
    const selectBtnRef = useRef<HTMLButtonElement>(null);
    const isMounted = useRef<boolean>(false);
    const itemHasBeenClicked = useRef<boolean>(false);

    useEffect(() => {
        isMounted.current = true;
    }, []);

    useEffect(() => {
        const index = items?.findIndex((item) => item.value === value);
        if (index !== -1) setActiveItemIndex(index);

        setSelectItems(items || []);
    }, [items, value]);

    useEffect(() => {
        const newItem = selectItems[activeItemIndex];

        if (newItem && isMounted) {
            onChange && onChange(newItem.value || '');
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [selectItems, activeItemIndex, value]);

    const activeItem =
        activeItemIndex >= 0 && activeItemIndex < selectItems.length
            ? selectItems[activeItemIndex]
            : undefined;

    return (
        <Field.View>
            <Field.Head
                label={label}
                isRequired={isRequired}
                isDisabled={isDisabled}
            />
            <Field.Content>
                <Container>
                    <Select
                        ref={selectBtnRef}
                        aria-label={
                            activeItem?.label || placeholder || 'Select item'
                        }
                        isActive={isOpen}
                        isInverted={isInverted}
                        hasError={!!errorMessage}
                        onClick={() => {
                            setIsOpen((prev) => !prev);
                        }}
                        onBlur={() => {
                            if (!itemHasBeenClicked.current) {
                                setIsOpen(false);
                                onBlur && onBlur();
                            }
                        }}
                        onKeyDown={(ev) => {
                            if (ev.key === 'ArrowDown') {
                                ev.preventDefault();
                                setIsOpen(true);

                                if (
                                    isOpen &&
                                    selectItems[activeItemIndex + 1]
                                ) {
                                    setActiveItemIndex((prev) => prev + 1);
                                }
                            } else if (ev.key === 'ArrowUp') {
                                ev.preventDefault();
                                setIsOpen(true);

                                if (
                                    isOpen &&
                                    selectItems[activeItemIndex - 1]
                                ) {
                                    setActiveItemIndex((prev) => prev - 1);
                                }
                            }
                        }}
                    >
                        <SelectMain>
                            {(placeholder || activeItem?.label) && (
                                <Copy
                                    textColor={
                                        isDisabled
                                            ? colors.elementBg.medium
                                            : colors.elementBg.dark
                                    }
                                    size="medium"
                                    type="copy"
                                >
                                    {activeItem?.label || placeholder}
                                </Copy>
                            )}
                        </SelectMain>
                        {indicator &&
                            indicator({ isOpen, isDisabled: isDisabled })}
                        {!indicator &&
                            (isOpen ? (
                                <AngleUp
                                    iconColor={
                                        isDisabled
                                            ? colors.elementBg.medium
                                            : colors.elementBg.dark
                                    }
                                />
                            ) : (
                                <AngleDown
                                    iconColor={
                                        isDisabled
                                            ? colors.elementBg.medium
                                            : colors.elementBg.dark
                                    }
                                />
                            ))}
                    </Select>
                    <Flyout isVisible={isOpen}>
                        {items.map((item, i) => {
                            return (
                                <ItemStyle
                                    key={i}
                                    onMouseDown={() => {
                                        itemHasBeenClicked.current = true;
                                    }}
                                    onClick={(ev) => {
                                        ev.preventDefault();

                                        // set new item
                                        setActiveItemIndex(i);

                                        // set focus back to toggle
                                        selectBtnRef.current?.focus();

                                        // close flyout
                                        setIsOpen(false);
                                        itemHasBeenClicked.current = false;
                                    }}
                                >
                                    <Item
                                        renderAs="span"
                                        isSelected={i === activeItemIndex}
                                        size="small"
                                        textColor={
                                            i === activeItemIndex
                                                ? colors.elementBg.light
                                                : colors.elementBg.dark
                                        }
                                    >
                                        {item.label}
                                    </Item>
                                </ItemStyle>
                            );
                        })}
                    </Flyout>
                </Container>
                {activeItem && (
                    <input type="hidden" name={name} value={activeItem.value} />
                )}
            </Field.Content>
            <Field.Messages
                infoMessage={infoMessage}
                errorMessage={errorMessage}
                isInverted={isInverted}
            />
        </Field.View>
    );
};

export default SelectDropdown;
