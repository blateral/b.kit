import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

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
import Checkbox from './Checkbox';

const Select = styled.button<{
    hasError?: boolean;
    isOpen?: boolean;
    isInverted?: boolean;
    inlined?: boolean;
}>`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    min-height: 45px;
    box-shadow: none;
    position: relative;

    -webkit-appearance: none;
    outline: none;
    cursor: ${({ inlined }) => (inlined ? 'default' : 'pointer')};

    padding: ${spacings.nudge}px;

    border: 1px solid
        ${({ theme, isInverted, hasError }) => {
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
    
    color: ${({ theme, isInverted, hasError }) => {
        if (isInverted) {
            return hasError
                ? color(theme).text.errorInverted
                : font(theme).copy.small.colorInverted;
        }
        return hasError
            ? color(theme).text.error
            : font(theme).copy.small.color;
    }};
    line-height: normal;

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

const SelectMain = styled(Copy)`
    display: flex;
    align-items: center;
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
    display: flex;
    align-items: center;
    pointer-events: none;

    & > * + * {
        margin-left: ${spacings.nudge}px;
    }
`;

const Flyout = styled.ul<{
    isVisible?: boolean;
    isInverted?: boolean;
    inlined?: boolean;
}>`
    list-style: none;
    padding: ${spacings.nudge}px ${spacings.nudge * 2}px;
    margin: 0;
    margin-top: ${({ inlined }) => inlined && '3px'};

    position: ${({ inlined }) => (inlined ? 'relative' : 'absolute')};
    top: calc(100% + 3px);
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

    outline: none;

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
    width: 100%;
    cursor: pointer;
    position: relative;

    padding: 5px 0px;
`;

const ItemCheckbox = styled(Checkbox)`
    width: 100%;
`;

const Container = styled.div`
    position: relative;
    outline: none;
`;

const Counter = styled(Copy)`
    flex: 0 0 20px;

    position: relative;
    background: ${({ theme }) => color(theme).text.default};

    line-height: normal;
    color: ${({ theme }) => color(theme).text.inverted};

    max-height: 20px;
    max-width: 20px;

    height: 20px;
    width: 20px;

    border-radius: 50px;

    & > * {
        position: absolute;
        top: 50%;
        left: 50%;

        transform: translate(-50%, -50%);
    }
`;

const Reset = styled.button`
    background: none;
    border: none;
    padding: 0;

    ${copyStyle('copy', 'small')};
    margin-top: ${spacings.nudge * 2}px;

    cursor: pointer;

    @media (hover: hover) and (pointer: fine) {
        &:hover {
            text-decoration: underline;
        }
    }

    &:focus {
        outline: 1px dashed ${({ theme }) => font(theme).link.color};
        outline-offset: 1px;
    }

    &:focus:not(:focus-visible) {
        outline: none;
    }
`;
const Icon = styled.div`
    display: flex;
    align-items: center;
    padding-left: ${spacings.nudge}px;
    color: inherit;

    transition: transform 0.2s ease-in-out;
`;

interface FilterItem {
    value: string;
    label: string;
}

export type MultiselectDropdownProps = Omit<FormProps, 'value'> & {
    enableMemo?: boolean;
    inlined?: boolean;
    placeholder?: string;
    name?: string;
    selectedItems?: string[];
    items: FilterItem[];
    resetLabel?: string;

    onChange?: (values: string[]) => void;
    onBlur?: () => void;
    icon?: (isInverted?: boolean) => React.ReactNode;
    indicator?: (props: {
        isOpen: boolean;
        isDisabled?: boolean;
    }) => React.ReactNode;
};

const MultiselectDropdown: React.FC<
    MultiselectDropdownProps & { className?: string }
> = ({
    label,
    isRequired,
    errorMessage,
    infoMessage,
    isDisabled,
    isInverted,
    items,
    name,
    selectedItems,
    placeholder,
    resetLabel,
    inlined,
    icon,
    onChange,
    onBlur,
    indicator,
    className,
}) => {
    const { colors } = useLibTheme();
    const [isOpen, setIsOpen] = useState(inlined || false);
    const [selected, setSelected] = useState<string[]>(selectedItems || []);

    const selectBtnRef = useRef<HTMLButtonElement>(null);
    const selectContainerRef = useRef<HTMLDivElement>(null);
    const isMounted = useMounted();
    const itemHasBeenClicked = useRef<boolean>(false);

    useEffect(() => {
        if (selectedItems) {
            setSelected(selectedItems);
        }
    }, [selectedItems]);

    useEffect(() => {
        if (isMounted) {
            onChange?.(selected);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [selected]);

    if (isDisabled) {
        errorMessage = '';
    }

    const toggleSelected = (value: string) => {
        if (selected.includes(value)) {
            setSelected((prev) => prev.filter((v) => v !== value));
            return;
        }

        setSelected((prev) => [...prev, value]);
    };

    const iconElement = icon?.(isInverted);

    return (
        <FieldWrapper.View isDisabled={isDisabled} className={className}>
            <FieldWrapper.Head
                label={label}
                isRequired={isRequired}
                isInverted={isInverted}
            />
            <FieldWrapper.Content>
                <Container
                    ref={selectContainerRef}
                    onBlur={(ev) => {
                        if (
                            !inlined &&
                            !selectContainerRef.current?.contains(
                                ev.relatedTarget
                            ) &&
                            !itemHasBeenClicked.current
                        ) {
                            setIsOpen(false);
                            onBlur?.();
                        }
                    }}
                >
                    <Select
                        ref={selectBtnRef}
                        type="button"
                        isOpen={isOpen}
                        inlined={inlined}
                        isInverted={isInverted}
                        hasError={!!errorMessage}
                        onClick={() => {
                            if (inlined) return;
                            setIsOpen((prev) => !prev);
                        }}
                        aria-expanded={isOpen}
                    >
                        <SelectMain>
                            {iconElement && <Icon>{iconElement}</Icon>}
                            <span>{placeholder}</span>
                        </SelectMain>
                        <Indicator>
                            <Counter size="small">
                                <span>{selected.length}</span>
                            </Counter>
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
                    <Flyout isVisible={isOpen} inlined={inlined}>
                        {items.map((item, i) => {
                            const isSelected = selected.includes(item.value);

                            return (
                                <ItemStyle
                                    key={`key_${i + 1}`}
                                    onMouseDown={() => {
                                        itemHasBeenClicked.current = true;
                                    }}
                                >
                                    <ItemCheckbox
                                        isSelected={isSelected}
                                        value={item.value}
                                        onChange={() => {
                                            toggleSelected(item.value);
                                            itemHasBeenClicked.current = false;
                                        }}
                                        label={item.label}
                                    />
                                </ItemStyle>
                            );
                        })}
                        {resetLabel && (
                            <Reset onClick={() => setSelected([])}>
                                {resetLabel}
                            </Reset>
                        )}
                    </Flyout>
                </Container>
                <select name={name} multiple hidden defaultValue={selected}>
                    {items.map((item, i) => {
                        return (
                            <option key={`key_${i}`} value={item.value}>
                                {item.label}
                            </option>
                        );
                    })}
                </select>
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
const areEqual = (
    prev: MultiselectDropdownProps,
    next: MultiselectDropdownProps
) => {
    // only apply logic if memo functionality is enabled
    if (!prev.enableMemo) return false;

    if (prev.selectedItems !== next.selectedItems) return false;
    if (prev.errorMessage !== next.errorMessage) return false;
    if (prev.infoMessage !== next.infoMessage) return false;
    if (prev.label !== next.label) return false;
    if (prev.placeholder !== next.placeholder) return false;
    if (prev.resetLabel !== next.resetLabel) return false;
    if (prev.isInverted !== next.isInverted) return false;
    if (prev.isDisabled !== next.isDisabled) return false;
    if (prev.inlined !== next.inlined) return false;

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

export default React.memo(MultiselectDropdown, areEqual);
