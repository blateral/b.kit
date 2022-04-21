import AngleDown from 'components/base/icons/AngleDown';
import AngleUp from 'components/base/icons/AngleUp';
import Copy from 'components/typography/Copy';
import React, { useContext, useEffect, useRef, useState } from 'react';
import styled, { css, ThemeContext } from 'styled-components';
import { hexToRgba } from 'utils/hexRgbConverter';
import {
    getColors as color,
    spacings,
    getGlobals as global,
} from 'utils/styles';

const View = styled(Copy)`
    display: block;
    text-align: left;
`;

const FieldHead = styled(Copy)`
    display: inline-flex;
    flex-direction: row;
    align-items: top;
    justify-content: space-between;
    padding-bottom: ${spacings.nudge * 3}px;
    padding-left: ${spacings.nudge}px;
    padding-right: ${spacings.nudge}px;
`;

const Select = styled.button<{
    hasError?: boolean;
    isActive?: boolean;
    hasBg?: boolean;
}>`
    border: ${({ hasError, theme }) =>
        hasError ? `2px solid ${color(theme).error}` : '2px solid transparent'};
    border-radius: ${({ isActive, theme }) => {
        const edgeRadius = global(theme).sections.edgeRadius;
        const topLeft = edgeRadius;
        const topRight = edgeRadius;
        const bottomRight = isActive ? '0px' : edgeRadius;
        const bottomLeft = isActive ? '0px' : edgeRadius;

        return `${topLeft} ${topRight} ${bottomRight} ${bottomLeft}`;
    }};
    background: ${({ theme, hasBg }) =>
        hasBg ? color(theme).elementBg.medium : color(theme).elementBg.light};
    outline: none;
    padding: ${spacings.spacer}px;
    width: 100%;
    height: 60px;
    max-height: 60px;

    position: relative;

    &:active {
        border: ${({ theme }) =>
            `2px solid ${hexToRgba(color(theme).elementBg.dark, 0.2)}`};
    }

    &:focus {
        border: ${({ theme }) =>
            `2px solid ${hexToRgba(color(theme).elementBg.dark, 0.2)}`};
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

const ErrorMessage = styled(Copy)`
    margin-top: ${spacings.nudge * 2}px;
    padding-left: ${spacings.nudge}px;
`;

const Container = styled.div`
    position: relative;
    outline: none;
`;

interface SelectItem {
    value?: string;
    label?: string;
}

const SelectDropdown: React.FC<{
    icon?: { src: string; alt?: string };
    label?: string;
    placeholder?: string;
    name?: string;
    value?: string;
    items: SelectItem[];

    isDisabled?: boolean;
    errorMessage?: string;
    isRequired?: boolean;
    isInverted?: boolean;
    hasBg?: boolean;

    onChange?: (value: string) => void;
    onBlur?: () => void;
    indicator?: (props: {
        isOpen: boolean;
        isDisabled?: boolean;
    }) => React.ReactNode;
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
    indicator,
}) => {
    const theme = useContext(ThemeContext);
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
        <View renderAs="label">
            {label && (
                <FieldHead
                    renderAs="span"
                    isInverted={isInverted}
                    textColor={
                        isDisabled ? color(theme).elementBg.medium : undefined
                    }
                    size="medium"
                    type="copy-b"
                >
                    {`${label}${isRequired ? ' *' : ''}`}
                </FieldHead>
            )}
            <Container>
                <Select
                    ref={selectBtnRef}
                    aria-label={
                        activeItem?.label || placeholder || 'Select item'
                    }
                    isActive={isOpen}
                    hasBg={hasBg && !isInverted}
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

                            if (isOpen && selectItems[activeItemIndex + 1]) {
                                setActiveItemIndex((prev) => prev + 1);
                            }
                        } else if (ev.key === 'ArrowUp') {
                            ev.preventDefault();
                            setIsOpen(true);

                            if (isOpen && selectItems[activeItemIndex - 1]) {
                                setActiveItemIndex((prev) => prev - 1);
                            }
                        }
                    }}
                >
                    <SelectMain>
                        {icon?.src && (
                            <Icon src={icon.src} alt={icon.alt || ''} />
                        )}
                        {(placeholder || activeItem?.label) && (
                            <Label
                                textColor={
                                    isDisabled
                                        ? color(theme).elementBg.medium
                                        : color(theme).elementBg.dark
                                }
                                size="medium"
                                type="copy"
                            >
                                {activeItem?.label || placeholder}
                            </Label>
                        )}
                    </SelectMain>
                    {indicator && indicator({ isOpen, isDisabled })}
                    {!indicator &&
                        (isOpen ? (
                            <AngleUp
                                iconColor={
                                    isDisabled
                                        ? color(theme).elementBg.medium
                                        : color(theme).elementBg.dark
                                }
                            />
                        ) : (
                            <AngleDown
                                iconColor={
                                    isDisabled
                                        ? color(theme).elementBg.medium
                                        : color(theme).elementBg.dark
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
                                            ? color(theme).elementBg.light
                                            : color(theme).elementBg.dark
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
            {errorMessage && (
                <ErrorMessage
                    textColor={color(theme).text.error}
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
