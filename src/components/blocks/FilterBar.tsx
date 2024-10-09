import * as Icons from 'components/base/icons/Icons';
import FilterField from 'components/fields/FilterField';
import MultiselectDropdown from 'components/fields/MultiselectDropdown';
import Copy, { copyStyle } from 'components/typography/Copy';
import { isValidArray } from 'hooks';
import React, {
    FC,
    Fragment,
    ReactNode,
    SyntheticEvent,
    useEffect,
    useRef,
    useState,
} from 'react';
import styled, { css } from 'styled-components';
import {
    mq,
    spacings,
    getColors as color,
    getGlobals as global,
    withRange,
} from 'utils/styles';
import Portal from './Portal';
import Pointer from 'components/buttons/Pointer';
import equal from 'fast-deep-equal/react';
import { useLibTheme } from 'utils/LibThemeProvider';
import { getFormFieldTextSize } from 'utils/formFieldText';

const FilterView = styled.div`
    display: inline-block;
`;

const TextFilter = styled(FilterField)<{ hasBorders?: boolean }>`
    min-height: 45px;
    height: 45px;
    background: ${({ theme }) => color(theme).elementBg.light};
    border: ${({ hasBorders }) => (!hasBorders ? 'none' : undefined)};
`;

const Select = styled(MultiselectDropdown)<{ hasBorders?: boolean }>`
    min-width: 220px;
    min-height: 45px;

    button,
    ul {
        border: ${({ hasBorders }) => (!hasBorders ? 'none' : undefined)};
        background: ${({ theme }) => color(theme).elementBg.light};
    }
`;

const OverlayToggleView = styled.button<{ isInverted?: boolean }>`
    width: 250px;
    height: 45px;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    padding: ${spacings.nudge}px;
    background: ${({ theme }) => color(theme).elementBg.light};

    ${copyStyle('copy', 'small')}
    line-height: normal;
    /** Clamping min font size to 16px to prevent browser zooming */
    ${({ theme }) => withRange(getFormFieldTextSize(theme), 'font-size')}

    border: none;
    outline: none;
    border-radius: ${({ theme }) => global(theme).sections.edgeRadius};
    cursor: pointer;

    transition: all ease-in-out 0.2s;

    & > * + * {
        margin-left: ${spacings.nudge}px;
    }

    @media ${mq.medium} {
        display: none;
    }

    @media (hover: hover) and (pointer: fine) {
        ${({ isInverted }) =>
            css`
                &:hover {
                    box-shadow: 0px 8px 16px
                        ${isInverted
                            ? 'rgba(255, 255, 255, 0.25)'
                            : 'rgba(0, 0, 0, 0.25)'};
                }
            `}
    }

    &:focus {
        text-decoration: underline;
        box-shadow: 0px 8px 16px
            ${({ isInverted }) =>
                isInverted
                    ? 'rgba(255, 255, 255, 0.25)'
                    : 'rgba(0, 0, 0, 0.25)'};
    }

    &:focus:not(:focus-visible) {
        text-decoration: none;
        outline: none;
        box-shadow: none;
    }

    &:active {
        box-shadow: 0px 2px 6px
            ${({ isInverted }) =>
                isInverted
                    ? 'rgba(255, 255, 255, 0.25)'
                    : 'rgba(0, 0, 0, 0.3)'};
    }
`;

const Counter = styled(Copy)`
    position: relative;
    background: ${({ theme }) => color(theme).text.default};
    color: ${({ theme }) => color(theme).text.inverted};
    line-height: normal;

    max-height: 20px;
    max-width: 20px;

    height: 20px;
    width: 20px;

    border-radius: 50px;

    margin-left: ${spacings.nudge * 2}px;

    & > * {
        position: absolute;
        top: 50%;
        left: 50%;

        transform: translate(-50%, -50%);
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

const Icon = styled.div`
    display: flex;
    align-items: center;
    padding-left: ${spacings.nudge}px;
    color: inherit;

    transition: transform 0.2s ease-in-out;
`;

const Label = styled.span`
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

const OverlayToggle: FC<{
    isInverted?: boolean;
    label: string;
    onClick?: (ev: SyntheticEvent<HTMLButtonElement>) => void;
    icon?: (isInverted?: boolean) => ReactNode;
    indicator?: () => ReactNode;
    selected?: number;
    className?: string;
}> = ({ isInverted, label, selected, onClick, icon, indicator, className }) => {
    const iconElement = icon?.(isInverted);
    const { colors } = useLibTheme();

    return (
        <OverlayToggleView
            isInverted={isInverted}
            onClick={onClick}
            className={className}
        >
            <Label>
                {iconElement && <Icon>{iconElement}</Icon>}
                <span>{label}</span>
            </Label>

            <Indicator>
                <Counter size="small">
                    <span>{selected || 0}</span>
                </Counter>
                {indicator?.()}
                {!indicator && (
                    <Icons.AngleDown iconColor={colors.elementBg.dark} />
                )}
            </Indicator>
        </OverlayToggleView>
    );
};

const DesktopFilters = styled.div`
    display: none;

    @media ${mq.medium} {
        display: flex;
        flex-direction: row-reverse;
        align-items: center;
        justify-content: flex-end;

        & > * {
            width: 220px;
        }

        & > * + * {
            margin-right: ${spacings.nudge}px;
        }
    }
`;

const MobileBarStage = styled.div`
    position: fixed;
    bottom: 0;
    left: 0;
    top: 0;
    height: 100vh;
    width: 100vw;
`;

const MobileBarBackdrop = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;

    background-color: ${({ theme }) => color(theme).elementBg.light};
    opacity: 0.8;
    z-index: 0;
`;

const MobileBarContent = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    max-height: 90vh;
    z-index: 0;
    overflow-y: auto;

    padding: ${spacings.nudge * 2}px;
    background-color: ${({ theme }) => color(theme).elementBg.light};
    border-radius: ${({ theme }) => global(theme).sections.edgeRadius};
`;

const FilterBarHead = styled(Copy)`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    margin-bottom: ${spacings.nudge * 3}px;
`;

const FilterBarCloseBtn = styled.button`
    flex: 0 0 auto;

    display: inline-block;
    background: none;
    border: none;
    padding: 0;
    margin: 0;

    cursor: pointer;
`;

const MobileBarMain = styled.div`
    display: flex;
    flex-direction: column;

    & > * {
        width: 100%;
    }

    & > * + * {
        margin-top: ${spacings.nudge * 3}px;
    }
`;

const MobileBarSubmitPointer = styled(Pointer.View)`
    width: auto;
    margin-right: auto;
    margin-top: ${spacings.nudge * 3}px;
`;

export interface FilterBarProps {
    hasBorders?: boolean;
    value?: FilterState;
    onChange?: (filters: FilterState) => void;
    toggleLabel?: string;
    mobileSubmitLabel?: string;
    categoryFilter?: {
        label?: string;
        resetLabel?: string;
        items?: Array<{
            value: string;
            label: string;
        }>;
    };
    textFilter?: {
        placeholder?: string;
        icon?: (isInverted?: boolean) => React.ReactNode;
        submitIcon?: (isInverted?: boolean) => React.ReactNode;
        clearIcon?: (isInverted?: boolean) => React.ReactNode;
    };
    closeIcon?: (isInverted?: boolean) => React.ReactNode;
    filterIcon?: (isInverted?: boolean) => React.ReactNode;
    indicator?: (props: {
        isOpen: boolean;
        isDisabled?: boolean;
    }) => React.ReactNode;
}

export interface FilterState {
    textFilter?: string;
    categoryFilter?: string[];
}

const FilterBar: FC<FilterBarProps & { className?: string }> = ({
    hasBorders,
    value,
    onChange,
    mobileSubmitLabel = 'Apply filters',
    toggleLabel,
    categoryFilter,
    textFilter,
    closeIcon,
    filterIcon,
    indicator,
    className,
}) => {
    const [filters, setFilters] = useState<FilterState>(
        value || {
            textFilter: '',
            categoryFilter: [],
        }
    );
    const lastFilters = useRef<FilterState>(filters);

    const [isMobileBarOpen, setIsMobileBarOpen] = useState(false);
    const [mobileTextFilter, setMobileTextFilter] = useState(
        filters.textFilter || ''
    );
    const [mobileCategoryFilter, setMobileCategoryFilter] = useState(
        filters.categoryFilter || []
    );

    const handleMobileBarSubmit = () => {
        setIsMobileBarOpen(false);
        setFilters({
            textFilter: mobileTextFilter,
            categoryFilter: mobileCategoryFilter,
        });
    };

    const handleMobileBarClose = () => {
        setIsMobileBarOpen(false);
        setMobileCategoryFilter(filters.categoryFilter || []);
        setMobileTextFilter(filters.textFilter || '');
    };

    useEffect(() => {
        setMobileCategoryFilter(filters.categoryFilter || []);
        setMobileTextFilter(filters.textFilter || '');
    }, [filters]);

    useEffect(() => {
        if (!equal(filters, value)) {
            onChange?.(filters);
        }
    }, [filters, onChange, value]);

    useEffect(() => {
        if (value && !equal(value, lastFilters.current)) {
            setFilters(value);
            lastFilters.current = value;
        }
    }, [value]);

    const overallSelected =
        (filters?.categoryFilter?.length || 0) + (filters.textFilter ? 1 : 0);

    const closeIconElement = closeIcon?.() || (
        <Icons.Cross width={32} height={32} />
    );

    return (
        <Fragment>
            <FilterView className={className}>
                <OverlayToggle
                    label={toggleLabel || ''}
                    selected={overallSelected}
                    onClick={() => setIsMobileBarOpen((prev) => !prev)}
                    icon={filterIcon}
                    indicator={
                        indicator
                            ? () =>
                                  indicator({
                                      isOpen: false,
                                      isDisabled: false,
                                  })
                            : undefined
                    }
                />
                <DesktopFilters>
                    {textFilter && (
                        <TextFilter
                            icon={textFilter.icon}
                            submitIcon={textFilter.submitIcon}
                            clearIcon={textFilter.clearIcon}
                            placeholder={textFilter.placeholder}
                            value={filters.textFilter}
                            onSubmit={(value) => {
                                setFilters((prev) => ({
                                    ...prev,
                                    textFilter: value,
                                }));
                            }}
                            hasBorders={hasBorders}
                        />
                    )}
                    {categoryFilter &&
                        isValidArray(categoryFilter?.items, false) && (
                            <Select
                                items={categoryFilter.items}
                                placeholder={categoryFilter.label}
                                icon={filterIcon}
                                indicator={indicator}
                                resetLabel={categoryFilter.resetLabel}
                                onChange={(value) =>
                                    setFilters((prev) => ({
                                        ...prev,
                                        categoryFilter: value,
                                    }))
                                }
                                selectedItems={filters.categoryFilter}
                                hasBorders={hasBorders}
                            />
                        )}
                </DesktopFilters>
            </FilterView>
            <Portal isVisible={isMobileBarOpen}>
                <MobileBarStage>
                    <MobileBarBackdrop onClick={handleMobileBarClose} />
                    <MobileBarContent>
                        <FilterBarHead>
                            <Copy type="copy-b" size="big">
                                {toggleLabel}
                            </Copy>
                            {closeIconElement && (
                                <FilterBarCloseBtn
                                    onClick={handleMobileBarClose}
                                >
                                    {closeIconElement}
                                </FilterBarCloseBtn>
                            )}
                        </FilterBarHead>
                        <MobileBarMain>
                            {textFilter && (
                                <FilterField
                                    icon={textFilter.icon}
                                    submitIcon={textFilter.submitIcon}
                                    clearIcon={textFilter.clearIcon}
                                    placeholder={textFilter.placeholder}
                                    value={mobileTextFilter}
                                    onSubmit={setMobileTextFilter}
                                />
                            )}
                            {categoryFilter &&
                                isValidArray(categoryFilter?.items, false) && (
                                    <MultiselectDropdown
                                        inlined
                                        items={categoryFilter.items}
                                        placeholder={categoryFilter.label}
                                        icon={filterIcon}
                                        indicator={indicator}
                                        resetLabel={categoryFilter.resetLabel}
                                        selectedItems={mobileCategoryFilter}
                                        onChange={setMobileCategoryFilter}
                                    />
                                )}
                            {mobileSubmitLabel && (
                                <MobileBarSubmitPointer
                                    onClick={handleMobileBarSubmit}
                                >
                                    <Pointer.Label>
                                        {mobileSubmitLabel}
                                    </Pointer.Label>
                                    <Pointer.Icon>
                                        <Icons.AngleRight />
                                    </Pointer.Icon>
                                </MobileBarSubmitPointer>
                            )}
                        </MobileBarMain>
                    </MobileBarContent>
                </MobileBarStage>
            </Portal>
        </Fragment>
    );
};

export default FilterBar;
