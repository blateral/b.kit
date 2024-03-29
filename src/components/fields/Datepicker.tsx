import React, {
    useState,
    useEffect,
    useRef,
    forwardRef,
    useCallback,
} from 'react';
import styled from 'styled-components';

import {
    getColors as color,
    getFonts as font,
    mq,
    spacings,
    getGlobals as global,
    withRange,
} from 'utils/styles';
import { format, isBefore, isValid } from 'date-fns';
import de from 'date-fns/locale/de';

import ButtonGhost from 'components/buttons/ButtonGhost';
import Button from 'components/buttons/Button';

import { copyStyle } from 'components/typography/Copy';

import ReactDatePicker from 'react-datepicker';
import { hexToRgba } from 'utils/hexRgbConverter';
import FieldWrapper from './FormField';
import { useLibTheme } from 'utils/LibThemeProvider';

import * as Icons from 'components/base/icons/Icons';
import { getFormFieldTextSize } from 'utils/formFieldText';
import { isEqual } from 'date-fns';

const PickerView = styled.div`
    position: relative;
    width: 100%;
    text-align: left;

    .react-datepicker-popper {
        right: ${spacings.spacer * 2}px;
        z-index: 9 !important;
        width: 100%;
    }

    @media ${mq.medium} {
        .react-datepicker-popper {
            right: auto;
            width: auto;
        }
    }

    .react-datepicker {
        display: flex;
        flex-wrap: wrap;
        font-family: 'Roboto', sans-serif;
        border: 1px solid
            ${({ theme }) => hexToRgba(color(theme).elementBg.dark, 0.2)} !important;
        border-radius: ${({ theme }) =>
            global(theme).sections.edgeRadius || '0px'} !important;
        padding: ${spacings.nudge * 2}px;
        width: 100%;

        box-shadow: 0px 3px 9px rgba(0, 0, 0, 0.15);
    }

    .react-datepicker-wrapper {
        width: 100% !important;
    }

    .react-datepicker__header {
        border: none !important;
        background-color: transparent !important;
        margin: 0 ${spacings.nudge * 3}px;
    }

    /* Month */
    .react-datepicker__month-container {
        width: 100%;
        margin-bottom: ${spacings.nudge * 3}px;
    }

    @media ${mq.medium} {
        .react-datepicker__month-container {
            max-width: 50%;
        }
    }

    .react-datepicker__month {
        margin-left: ${spacings.nudge * 2}px;
        margin-right: ${spacings.nudge * 2}px;
    }

    .react-datepicker__current-month {
        font-family: 'Roboto', sans-serif;
        font-weight: 600;
        font-size: 17px;
        line-height: 1.3;
        text-transform: uppercase;
        background-color: ${({ theme }) => color(theme).primary.default};
        padding: 10px 15px;
        color: ${({ theme }) => color(theme).text.inverted} !important;
        width: max-content;
        margin: 0 auto;
    }

    /* Day styles */

    .react-datepicker__day-names {
        display: flex;
        font-size: 11px;
        line-height: 1.25;
        background: transparent;
    }

    @media ${mq.medium} {
        .react-datepicker__day-names {
            display: block;
        }
    }

    .react-datepicker__day-name {
        flex: 1 0 auto;
    }

    .react-datepicker__week {
        display: flex;
        margin: -2px !important;
    }

    @media ${mq.medium} {
        .react-datepicker__week {
            display: block;
        }
    }

    .react-datepicker__day {
        flex: 1 0 auto;
        background-color: ${({ theme }) => color(theme).elementBg.light};
        border-radius: 0 !important;
        font-weight: 600;

        margin: 2px !important;
    }

    @media ${mq.medium} {
        .react-datepicker__day:hover {
            background-color: ${({ theme }) =>
                color(theme).elementBg.dark} !important;
            border-radius: 0 !important;
            color: ${({ theme }) => color(theme).text.inverted};
        }
    }

    .react-datepicker__day--outside-month {
        color: ${({ theme }) => color(theme).elementBg.medium} !important;
        cursor: default;
    }

    .react-datepicker__day--selected {
        background-color: ${({ theme }) =>
            color(theme).primary.default} !important;
        border-radius: 0 !important;
        color: ${({ theme }) => color(theme).text.inverted};
    }

    .react-datepicker__day--today {
        border: 1px solid
            ${({ theme }) => hexToRgba(color(theme).elementBg.dark, 0.6)} !important;
        border-radius: 0 !important;
    }

    /* Triangle Styles */

    .react-datepicker__triangle:before {
        border-bottom-color: ${({ theme }) =>
            hexToRgba(color(theme).elementBg.dark, 0.2)} !important;
    }

    .react-datepicker__triangle:after {
        border-bottom-color: ${({ theme }) =>
            color(theme).elementBg.light} !important;
    }

    /* Day Ranges */

    .react-datepicker__day--in-range {
        background-color: ${({ theme }) =>
            hexToRgba(color(theme).primary.default, 0.7)} !important;
    }

    @media ${mq.medium} {
        .react-datepicker__day--in-range:hover {
            background-color: ${({ theme }) =>
                hexToRgba(color(theme).primary.default, 0.25)} !important;
        }
    }

    .react-datepicker__day--range-start {
        background-color: ${({ theme }) =>
            color(theme).primary.default} !important;
    }

    @media ${mq.medium} {
        .react-datepicker__day--range-start:hover {
            background-color: ${({ theme }) =>
                hexToRgba(color(theme).primary.default, 0.25)} !important;
        }
    }

    .react-datepicker__day--range-end {
        background-color: ${({ theme }) =>
            color(theme).primary.default} !important;
    }

    @media ${mq.medium} {
        .react-datepicker__day--range-end:hover {
            background-color: ${({ theme }) =>
                hexToRgba(color(theme).primary.default, 0.25)} !important;
        }
    }

    .react-datepicker__day--in-selecting-range {
        background-color: ${({ theme }) =>
            hexToRgba(color(theme).primary.default, 0.7)} !important;
    }

    /* Next-/Prev-Arrow */
    .react-datepicker__close-icon {
        display: none !important;
    }

    .react-datepicker__navigation {
        top: ${spacings.nudge}px !important;
    }

    .react-datepicker__navigation-icon--next::before {
        left: 0 !important;
    }

    .react-datepicker__navigation-icon--previous::before {
        left: 0 !important;
    }

    .react-datepicker__navigation:focus {
        outline: 1px solid ${({ theme }) => color(theme).primary.default};
    }

    /* Keyboard selection */
    .react-datepicker__day--keyboard-selected {
        outline: none;
        background: ${({ theme }) => color(theme).elementBg.dark};
    }
`;

const Icon = styled.div<{ isInverted?: boolean }>`
    height: 100%;
    min-width: 24px;
    color: ${({ theme, isInverted }) =>
        isInverted
            ? font(theme).copy.small.colorInverted
            : font(theme).copy.small.color};

    & > * {
        height: 20px;
    }
`;

const DatepickerButton = styled.button<{
    hasError?: boolean;
    isActive?: boolean;
    isInverted?: boolean;
    hasDateValue?: boolean;
}>`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    min-height: 40px;
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

    background: none;

    ${copyStyle('copy', 'small')}
    /** Clamping min font size to 16px to prevent browser zooming */
    ${({ theme }) => withRange(getFormFieldTextSize(theme), 'font-size')}
    
    color: ${({ theme, isInverted, hasError, hasDateValue }) => {
        if (isInverted) {
            return hasError
                ? color(theme).text.errorInverted
                : !hasDateValue
                ? color(theme).text.subtileInverted
                : font(theme).copy.small.colorInverted;
        }
        return hasError
            ? color(theme).text.error
            : !hasDateValue
            ? color(theme).text.subtile
            : font(theme).copy.small.color;
    }};

    outline: none;
    pointer-events: ${({ isActive }) => (isActive ? 'none' : 'all')};

    position: relative;

    border: ${({ theme, isInverted, isActive }) =>
        isActive &&
        `1px solid ${
            isInverted
                ? color(theme).primary.inverted
                : color(theme).primary.default
        }`};

    &:active {
        border: ${({ theme, isInverted }) =>
            `1px solid ${
                isInverted
                    ? color(theme).primary.inverted
                    : color(theme).primary.default
            }`};
    }

    &:focus {
        outline: ${({ theme, isInverted }) =>
            `1px solid ${
                isInverted
                    ? color(theme).primary.inverted
                    : color(theme).primary.default
            }`};
        outline-offset: 0;
    }

    &:focus:not(:focus-visible) {
        outline: none;
    }
`;

const DatepickerButtonMain = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;

    & > * + * {
        margin-left: ${spacings.spacer}px;
    }
`;

const DatepickerFoot = styled.div`
    display: block;
    width: 100%;

    /* margin-top: ${spacings.spacer * 14}px; */
`;

const FootFlex = styled.div`
    clear: both;
    display: flex;
    flex-direction: column;

    & > * {
        width: 100%;
    }

    & > * + * {
        margin-top: ${spacings.spacer * 0.5}px;
    }

    @media ${mq.medium} {
        align-items: center;
        flex-direction: row;

        & > * {
            width: auto;
        }

        & > * + * {
            margin-top: 0;
            margin-left: ${spacings.spacer * 0.5}px;
        }
    }
`;

const ButtonLabel = styled(Button.Label)`
    font-size: 12px;
`;
const ButtonGhostLabel = styled(ButtonGhost.Label)`
    font-size: 12px;
`;

interface PickerBtnProps {
    label?: string;
    errorMessage?: string;
    infoMessage?: string;
    isRequired?: boolean;
    isDisabled?: boolean;
    isInverted?: boolean;
    isFocused?: boolean;
    name?: string;
    altText?: string;
    startDate?: Date | null | undefined;
    endDate?: Date | null | undefined;
    setFocused: React.Dispatch<React.SetStateAction<boolean>>;
    onClick?: (ev: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    dateFormat?: string;
    customIcon?: (props: {
        isInverted?: boolean;
        singleSelect?: boolean;
    }) => React.ReactNode;
    singleSelect?: boolean;
}

const PickerButton = forwardRef<HTMLButtonElement, PickerBtnProps>(
    (
        {
            label,
            errorMessage,
            infoMessage,
            isRequired,
            isInverted,
            isDisabled,
            isFocused,
            name,
            altText,
            startDate,
            endDate,
            setFocused,
            onClick,
            dateFormat = 'dd.MM.yyyy',
            customIcon,
            singleSelect,
        },
        ref
    ) => {
        return (
            <FieldWrapper.View isDisabled={isDisabled}>
                <FieldWrapper.Head
                    label={label}
                    isRequired={isRequired}
                    isInverted={isInverted}
                />
                <FieldWrapper.Content>
                    <DatepickerButton
                        ref={ref}
                        type="button"
                        onClick={(e) => {
                            setFocused && setFocused(true);
                            onClick && onClick(e);
                        }}
                        isActive={isFocused}
                        hasDateValue={!!startDate}
                        isInverted={isInverted}
                        hasError={!!errorMessage}
                        className="myPickerButton"
                    >
                        <DatepickerButtonMain>
                            {startDate
                                ? `${format(startDate, dateFormat)}${
                                      endDate
                                          ? ` – ${format(endDate, dateFormat)}`
                                          : ''
                                  }`
                                : altText}
                        </DatepickerButtonMain>
                        <Icon isInverted={isInverted}>
                            {customIcon ? (
                                customIcon({ isInverted, singleSelect })
                            ) : singleSelect ? (
                                <Icons.CalendarToday />
                            ) : (
                                <Icons.DateRange />
                            )}
                        </Icon>
                    </DatepickerButton>
                    {name && (
                        <>
                            <input
                                type="hidden"
                                name={`${name}["start"]`}
                                value={startDate?.toString()}
                            />
                            <input
                                type="hidden"
                                name={`${name}["end"]`}
                                value={endDate?.toString()}
                            />
                        </>
                    )}
                </FieldWrapper.Content>
                <FieldWrapper.Messages
                    infoMessage={infoMessage}
                    errorMessage={errorMessage}
                    isInverted={isInverted}
                />
            </FieldWrapper.View>
        );
    }
);
PickerButton.displayName = 'PickerButton';

const PickerHeader = styled.div`
    margin-bottom: ${spacings.nudge * 3}px;
`;

const getPickerHeader =
    (
        locale: string,
        prevMonthAction?: React.ReactNode,
        nextMonthAction?: React.ReactNode
    ) =>
    // eslint-disable-next-line react/display-name
    ({
        monthDate,
        customHeaderCount,
        decreaseMonth,
        increaseMonth,
    }: {
        monthDate: Date;
        customHeaderCount: number;
        decreaseMonth: () => void;
        increaseMonth: () => void;
    }) =>
        (
            <PickerHeader>
                <button
                    aria-label="Previous Month"
                    className={
                        'react-datepicker__navigation react-datepicker__navigation--previous'
                    }
                    style={
                        customHeaderCount === 1
                            ? { visibility: 'hidden' }
                            : undefined
                    }
                    onClick={(ev) => {
                        ev.preventDefault();
                        decreaseMonth();
                    }}
                >
                    {prevMonthAction ? (
                        typeof prevMonthAction === 'string' ? (
                            <img src={prevMonthAction} />
                        ) : (
                            prevMonthAction
                        )
                    ) : (
                        <span
                            className={
                                'react-datepicker__navigation-icon react-datepicker__navigation-icon--previous'
                            }
                        >
                            {'<'}
                        </span>
                    )}
                </button>
                <span className="react-datepicker__current-month">
                    {format(monthDate, 'LLLL', { locale: de })}
                </span>
                <button
                    aria-label="Next Month"
                    className={
                        'react-datepicker__navigation react-datepicker__navigation--next'
                    }
                    style={
                        customHeaderCount === 0
                            ? { visibility: 'hidden' }
                            : undefined
                    }
                    onClick={(ev) => {
                        ev.preventDefault();
                        increaseMonth();
                    }}
                >
                    {nextMonthAction ? (
                        typeof nextMonthAction === 'string' ? (
                            <img src={nextMonthAction} />
                        ) : (
                            nextMonthAction
                        )
                    ) : (
                        <span
                            className={
                                'react-datepicker__navigation-icon react-datepicker__navigation-icon--next'
                            }
                        >
                            {'>'}
                        </span>
                    )}
                </button>
            </PickerHeader>
        );

export interface DatepickerProps {
    enableMemo?: boolean;
    label?: string;
    errorMessage?: string;
    infoMessage?: string;
    isRequired?: boolean;
    isDisabled?: boolean;
    isInverted?: boolean;
    name?: string;
    placeholder?: string;
    dateSubmitLabel?: string;
    dateDeleteLabel?: string;

    values?: [Date, Date];
    minDate?: Date;
    maxDate?: Date;
    onDataChange?: (startDate: Date | null, endDate: Date | null) => void;
    onSubmit?: (startDate?: Date | null, endDate?: Date | null) => void;
    deleteAction?: (
        handleClick: (e: React.SyntheticEvent<HTMLButtonElement, Event>) => void
    ) => React.ReactNode;
    submitAction?: (
        handleClick?: (
            e: React.SyntheticEvent<HTMLButtonElement, Event>
        ) => void
    ) => React.ReactNode;
    customIcon?: (props: {
        isInverted?: boolean;
        singleSelect?: boolean;
    }) => React.ReactNode;
    nextCtrlUrl?: React.ReactNode;
    prevCtrlUrl?: React.ReactNode;

    singleSelect?: boolean;
}

const Datepicker: React.FC<DatepickerProps> = ({
    label,
    errorMessage,
    infoMessage,
    isRequired,
    isDisabled,
    isInverted,
    name,
    dateSubmitLabel,
    dateDeleteLabel,
    placeholder,
    singleSelect = false,
    values,
    minDate = new Date(),
    maxDate,
    onDataChange,
    onSubmit,
    deleteAction,
    submitAction,
    customIcon,
    nextCtrlUrl,
    prevCtrlUrl,
}) => {
    const { globals } = useLibTheme();
    const locale = globals.sections.datepickerLocaleKey;
    const dateFormat = globals.sections.datepickerDateFormat;

    const pickerRef = useRef<ReactDatePicker | undefined>(null);
    const pickerBtnRef = useRef<HTMLButtonElement | null>(null);
    const [isSmall, setIsSmall] = useState<boolean>(false);

    const [startDate, setStartDate] = useState<Date | null>();
    const [endDate, setEndDate] = useState<Date | null>();

    const [focused, setFocused] = useState<boolean>();

    useEffect(() => {
        const x = async () => {
            await import('react-datepicker');

            // if (locale === 'de') registerLocale('de', de);
        };

        if (!singleSelect) setIsSmall(!window.matchMedia(mq.medium).matches);

        x();
    }, [locale, singleSelect]);

    useEffect(() => {
        if (values) {
            if (values[0] && isValid(values[0])) {
                setStartDate(values[0]);
            }

            if (values[1] && isValid(values[1])) {
                setEndDate(values[1]);
            }
        }
    }, [values]);

    useEffect(() => {
        const handleResize = () => {
            const shouldBeSmall = !window.matchMedia(mq.medium).matches;

            if (shouldBeSmall !== isSmall) {
                setIsSmall(shouldBeSmall);
            }
        };
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [isSmall]);

    useEffect(() => {
        if (pickerRef.current && focused !== undefined) {
            pickerRef.current?.setOpen(focused);
        }
    }, [focused]);

    const handleSubmit = useCallback(
        (ev: React.SyntheticEvent<HTMLButtonElement, Event>) => {
            ev.preventDefault();
            setFocused(false);
            onSubmit && onSubmit(startDate, endDate);
        },
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [endDate, startDate]
    );
    const handleReset = useCallback(
        (ev: React.SyntheticEvent<HTMLButtonElement, Event>) => {
            ev.preventDefault();
            setStartDate(undefined);
            setEndDate(undefined);
            new Date();
        },
        []
    );

    return (
        <PickerView>
            <ReactDatePicker
                locale={locale === 'de' ? de : undefined}
                ref={pickerRef as any}
                dateFormat={dateFormat}
                onChange={(date) => {
                    if (date) {
                        if (singleSelect) {
                            setStartDate(date as Date);
                            setFocused(false);
                            onDataChange && onDataChange(date as Date, null);
                        } else if (startDate) {
                            if (endDate) {
                                setStartDate(date as Date);
                                setEndDate(null);
                                onDataChange &&
                                    onDataChange(date as Date, null);
                            } else if (isBefore(date as Date, startDate)) {
                                setEndDate(startDate);
                                setStartDate(date as Date);
                                onDataChange &&
                                    onDataChange(date as Date, startDate);
                            } else {
                                setEndDate(date as Date);
                                onDataChange &&
                                    onDataChange(startDate, date as Date);
                            }
                        } else {
                            setStartDate(date as Date);
                            onDataChange &&
                                onDataChange(date as Date, endDate || null);
                        }
                    } else {
                        setStartDate(undefined);
                        onDataChange && onDataChange(null, null);
                    }
                }}
                selected={startDate}
                startDate={startDate}
                endDate={endDate}
                monthsShown={isSmall ? 1 : 2}
                shouldCloseOnSelect={singleSelect}
                customInput={
                    <PickerButton
                        label={label}
                        isInverted={isInverted}
                        isDisabled={isDisabled}
                        infoMessage={infoMessage}
                        errorMessage={errorMessage}
                        isRequired={isRequired}
                        ref={pickerBtnRef}
                        name={name}
                        altText={placeholder}
                        startDate={startDate}
                        endDate={endDate}
                        isFocused={focused}
                        setFocused={setFocused}
                        dateFormat={dateFormat}
                        customIcon={customIcon}
                        singleSelect={singleSelect}
                    />
                }
                showPopperArrow
                minDate={minDate}
                maxDate={maxDate}
                disabledKeyboardNavigation={false}
                isClearable
                onClickOutside={(ev) => {
                    ev.stopPropagation();
                    setFocused(false);
                    onSubmit && onSubmit(startDate, endDate);
                }}
                renderCustomHeader={getPickerHeader(
                    locale,
                    prevCtrlUrl,
                    nextCtrlUrl
                )}
            >
                <DatepickerFoot>
                    <FootFlex>
                        {deleteAction ? (
                            deleteAction(handleReset)
                        ) : (
                            <ButtonGhost.View as="button" onClick={handleReset}>
                                <ButtonGhostLabel>
                                    {dateDeleteLabel || 'Delete'}
                                </ButtonGhostLabel>
                            </ButtonGhost.View>
                        )}
                        {submitAction ? (
                            submitAction(handleSubmit)
                        ) : (
                            <Button.View as="button" onClick={handleSubmit}>
                                <ButtonLabel>
                                    {dateSubmitLabel || 'Submit'}
                                </ButtonLabel>
                            </Button.View>
                        )}
                    </FootFlex>
                </DatepickerFoot>
            </ReactDatePicker>
        </PickerView>
    );
};

/**
 * Function to compare both field prop states
 * @param prev Previous props
 * @param next Next props
 * @returns
 */
const areEqual = (prev: DatepickerProps, next: DatepickerProps) => {
    // only apply logic if memo functionality is enabled
    if (!prev.enableMemo) return false;

    if (prev.infoMessage !== next.infoMessage) return false;
    if (prev.errorMessage !== next.errorMessage) return false;
    if (prev.dateDeleteLabel !== next.dateDeleteLabel) return false;
    if (prev.dateSubmitLabel !== next.dateSubmitLabel) return false;
    if (prev.label !== next.label) return false;
    if (prev.placeholder !== next.placeholder) return false;

    // compare date values
    const prevDateStart = prev.values?.[0];
    const prevDateEnd = prev.values?.[1];
    const nextDateStart = prev.values?.[0];
    const nextDateEnd = prev.values?.[1];

    if (
        prevDateStart !== nextDateStart ||
        !isEqual(prevDateStart || -1, nextDateStart || -1) ||
        prevDateEnd !== nextDateEnd ||
        !isEqual(prevDateEnd || -1, nextDateEnd || -1)
    ) {
        return false;
    }

    return true;
};

export default React.memo(Datepicker, areEqual);
