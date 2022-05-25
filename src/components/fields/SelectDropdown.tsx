import React, { useEffect, useRef, useState } from 'react';
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
} from 'utils/styles';
import FieldWrapper from './FormField';
import { FormProps } from './Textfield';

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

    if (isDisabled) {
        errorMessage = '';
    }

    const activeItem =
        activeItemIndex >= 0 && activeItemIndex < selectItems.length
            ? selectItems[activeItemIndex]
            : undefined;

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
            </FieldWrapper.Content>
            <FieldWrapper.Messages
                infoMessage={infoMessage}
                errorMessage={errorMessage}
                isInverted={isInverted}
            />
        </FieldWrapper.View>
    );
};

export default SelectDropdown;
