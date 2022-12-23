import React, { useEffect, useMemo, useRef, useState } from 'react';
import styled, { css } from 'styled-components';

import AngleDown from 'components/base/icons/AngleDown';
import AngleUp from 'components/base/icons/AngleUp';
import Copy, { copyStyle } from 'components/typography/Copy';
import { useLibTheme } from 'utils/LibThemeProvider';
import {
    getColors as color,
    getFonts as font,
    spacings,
    getGlobals as global,
    withRange,
} from 'utils/styles';
import FieldWrapper from './FormField';
import { FormProps } from './Textfield';
import { getFormFieldTextSize } from 'utils/formFieldText';
import useMounted from 'utils/useMounted';
import { isValidArray } from 'utils/arrays';

const Select = styled.button<{
    hasError?: boolean;
    isOpen?: boolean;
    isInverted?: boolean;
    isSelected?: boolean;
}>`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    min-height: 40px;
    box-shadow: none;
    position: relative;

    -webkit-appearance: none;
    outline: none;
    cursor: pointer;

    padding: ${spacings.nudge}px;

    border: 1px solid
        ${({ theme, isInverted, hasError, isOpen }) => {
            if (isOpen) return 'transparent';
            if (isInverted) {
                return hasError
                    ? color(theme).errorInverted
                    : color(theme).elementBg.light;
            }
            return hasError ? color(theme).error : color(theme).elementBg.dark;
        }};
    border-radius: ${({ theme }) => global(theme).sections.edgeRadius};

    background: transparent;

    ${copyStyle('copy', 'small')}
    /** Clamping min font size to 16px to prevent browser zooming */
    ${({ theme }) => withRange(getFormFieldTextSize(theme), 'font-size')}
    
    color: ${({ theme, isInverted, hasError, isSelected }) => {
        if (!isSelected) {
            return isInverted
                ? color(theme).text.subtileInverted
                : color(theme).text.subtile;
        }

        if (isInverted) {
            return hasError
                ? color(theme).text.errorInverted
                : font(theme).copy.small.colorInverted;
        }
        return hasError
            ? color(theme).text.error
            : font(theme).copy.small.color;
    }};

    &:active {
        border: ${({ theme, isInverted, isOpen }) =>
            `1px solid ${
                isOpen
                    ? 'transparent'
                    : isInverted
                    ? color(theme).primary.inverted
                    : color(theme).primary.default
            }`};
    }

    &:focus {
        outline: ${({ theme, isInverted, isOpen }) =>
            `1px solid ${
                isOpen
                    ? 'transparent'
                    : isInverted
                    ? color(theme).primary.inverted
                    : color(theme).primary.default
            }`};
        outline-offset: 0;
    }

    &:focus:not(:focus-visible) {
        outline: none;
    }

    & > * + * {
        margin-left: ${spacings.nudge}px;
    }
`;

const SelectMain = styled.span`
    display: block;
    user-select: none;

    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    min-width: 0;

    & > * + * {
        margin-left: ${spacings.nudge}px;
    }
`;

const Indicator = styled.span`
    display: block;
    pointer-events: none;
`;

const Flyout = styled.ul<{ isVisible?: boolean; isInverted?: boolean }>`
    list-style: none;
    padding: 0 !important;
    margin: 0 !important;

    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 2;

    display: ${({ isVisible }) => (isVisible ? 'block' : 'none')};
    background: ${({ theme }) => color(theme).elementBg.light};
    border: 1px solid
        ${({ theme, isInverted }) =>
            isInverted
                ? color(theme).elementBg.light
                : color(theme).elementBg.dark};
    border-radius: ${({ theme }) => global(theme).sections.edgeRadius};

    max-height: 300px;
    overflow-y: auto;
    scrollbar-width: none;

    outline: ${({ theme, isInverted }) =>
        `1px solid ${
            isInverted
                ? color(theme).primary.inverted
                : color(theme).primary.default
        }`};
    outline-offset: 0;

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
    padding: ${spacings.nudge}px;
    width: 100%;
    cursor: pointer;
    position: relative;
`;

const Item = styled(Copy)<{ isSelected?: boolean }>`
    z-index: 0;

    @media (hover: hover) and (pointer: fine) {
        ${ItemStyle}:hover & {
            &:before {
                content: '';
                background: ${({ theme }) => color(theme).primary.hover};
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
    }

    ${({ isSelected }) =>
        isSelected &&
        css`
            &:before {
                content: '';
                background: ${({ theme }) => color(theme).primary.default};
                position: absolute;
                top: 0;
                bottom: 0;
                right: 0;
                left: 0;

                z-index: -1;
            }
        `}
`;

const ClearItem = styled(Item)`
    color: transparent;
`;

const Container = styled.div`
    position: relative;
    outline: none;
`;

interface SelectItem {
    value: Record<string, string>;
    label: string;
}

export type SelectDropdownProps = Omit<FormProps, 'value'> & {
    enableMemo?: boolean;
    placeholder?: string;
    name?: string;
    selectedItem?: string;
    items: SelectItem[];

    onChange?: (label: string, value: Record<string, string>) => void;
    onBlur?: () => void;
    indicator?: (props: {
        isOpen: boolean;
        isDisabled?: boolean;
    }) => React.ReactNode;
};

const SelectDropdown: React.FC<SelectDropdownProps> = ({
    label,
    isRequired,
    errorMessage,
    infoMessage,
    isDisabled,
    isInverted,
    items,
    name,
    selectedItem,
    placeholder,
    onChange,
    onBlur,
    indicator,
}) => {
    const { colors } = useLibTheme();
    const [isOpen, setIsOpen] = useState(false);

    const [activeItemIndex, setActiveItemIndex] = useState<number>(
        items?.findIndex((item) => item.label === selectedItem) || -1
    );
    const [selectItems, setSelectItems] = useState<SelectItem[]>(items || []);
    const selectBtnRef = useRef<HTMLButtonElement>(null);
    const isMounted = useMounted();
    const itemHasBeenClicked = useRef<boolean>(false);

    useEffect(() => {
        const index = items?.findIndex((item) => item.label === selectedItem);
        if (index !== -1) setActiveItemIndex(index);

        setSelectItems(items || []);
    }, [items, selectedItem]);

    useEffect(() => {
        const newItem = selectItems[activeItemIndex];

        if (isMounted) {
            onChange && onChange(newItem?.label, newItem?.value);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [selectItems, activeItemIndex, selectedItem]);

    if (isDisabled) {
        errorMessage = '';
    }

    const activeItem = useMemo(() => {
        return activeItemIndex >= 0 && activeItemIndex < selectItems.length
            ? selectItems[activeItemIndex]
            : undefined;
    }, [activeItemIndex, selectItems]);

    return (
        <FieldWrapper.View isDisabled={isDisabled}>
            <FieldWrapper.Head
                label={label}
                isRequired={isRequired}
                isInverted={isInverted}
            />
            <FieldWrapper.Content>
                <Container>
                    <Select
                        ref={selectBtnRef}
                        type="button"
                        aria-label={
                            activeItem?.label || placeholder || 'Select item'
                        }
                        isOpen={isOpen}
                        isInverted={isInverted}
                        isSelected={!!activeItem}
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
                            {activeItem?.label || placeholder}
                        </SelectMain>
                        <Indicator>
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
                        </Indicator>
                    </Select>
                    <Flyout isVisible={isOpen}>
                        {isValidArray(items, false) && (
                            <ItemStyle
                                key="key_0"
                                onMouseDown={() => {
                                    itemHasBeenClicked.current = true;
                                }}
                                onClick={(ev) => {
                                    ev.preventDefault();

                                    // set new item
                                    setActiveItemIndex(-1);

                                    // set focus back to toggle
                                    selectBtnRef.current?.focus();

                                    // close flyout
                                    setIsOpen(false);
                                    itemHasBeenClicked.current = false;
                                }}
                            >
                                <ClearItem renderAs="span" size="small">
                                    Clear
                                </ClearItem>
                            </ItemStyle>
                        )}
                        {items.map((item, i) => {
                            return (
                                <ItemStyle
                                    key={`key_${i + 1}`}
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
                    <input
                        type="hidden"
                        name={name}
                        value={JSON.stringify(activeItem.value)}
                    />
                )}
            </FieldWrapper.Content>
            <FieldWrapper.Messages
                infoMessage={infoMessage}
                errorMessage={errorMessage}
                isInverted={isInverted}
            />
        </FieldWrapper.View>
    );
};

/**
 * Function to compare both field prop states
 * @param prev Previous props
 * @param next Next props
 * @returns
 */
const areEqual = (prev: SelectDropdownProps, next: SelectDropdownProps) => {
    // only apply logic if memo functionality is enabled
    if (!prev.enableMemo) return false;

    if (prev.selectedItem !== next.selectedItem) return false;
    if (prev.errorMessage !== next.errorMessage) return false;
    if (prev.infoMessage !== next.infoMessage) return false;
    if (prev.label !== next.label) return false;
    if (prev.placeholder !== next.placeholder) return false;

    // compare items
    if (prev.items.length !== next.items.length) return false;
    for (let i = 0; i < prev.items.length; i++) {
        if (
            prev.items[i].label !== next.items[i].label ||
            prev.items[i].value !== next.items[i].value
        ) {
            return false;
        }
    }

    return true;
};

export default React.memo(SelectDropdown, areEqual);
