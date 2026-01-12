import { Pointer } from 'buttons';
import * as Icons from 'components/base/icons/Icons';
import PickerAction from 'components/buttons/PickerAction';
import { copyStyle } from 'components/typography/Copy';
import { format, isEqual, isValid } from 'date-fns';
import de from 'date-fns/locale/de';
import React, {
    forwardRef,
    ReactNode,
    useEffect,
    useRef,
    useState,
} from 'react';
import ReactDatePicker, {
    ReactDatePickerCustomHeaderProps,
} from 'react-datepicker';
import styled from 'styled-components';
import { getFormFieldTextSize } from 'utils/formFieldText';
import { hexToRgba } from 'utils/hexRgbConverter';
import { useLibTheme } from 'utils/LibThemeProvider';
import {
    getColors as color,
    getFonts as font,
    getGlobals as global,
    mq,
    spacings,
    withRange,
} from 'utils/styles';
import FieldWrapper from './FormField';

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
            width: min-content;
        }
    }

    .react-datepicker {
        display: grid;
        grid-template-columns: max-content;
        grid-template-rows: auto auto;
        grid-template-areas:
            'month month'
            'footer footer';

        font-family: 'Roboto', sans-serif;
        border: 1px solid
            ${({ theme }) => hexToRgba(color(theme).elementBg.dark, 0.2)} !important;
        border-radius: ${({ theme }) =>
            global(theme).sections.edgeRadius || '0px'} !important;
        padding: ${spacings.nudge * 2}px;
        width: 100%;
        box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.15);

        @media ${mq.medium} {
            grid-template-columns: max-content max-content;
            grid-template-areas:
                'leftMonth rightMonth'
                'footer footer';
        }
    }

    .react-datepicker__month-container {
        grid-area: month;

        @media ${mq.medium} {
            grid-area: rightMonth;
        }
    }

    .react-datepicker__month-container:first-child {
        grid-area: month;

        @media ${mq.medium} {
            grid-area: leftMonth;
        }
    }

    .react-datepicker-wrapper {
        width: 100% !important;
    }

    .react-datepicker__header {
        border: none !important;
        background-color: transparent !important;
    }

    /* Month */
    .react-datepicker__month-container {
        width: 100%;
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
        color: ${({ theme }) => color(theme).text.default} !important;
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

    .react-datepicker__day:focus-visible {
        outline: solid 2px ${({ theme }) => color(theme).elementBg.dark};
    }

    .react-datepicker__day--outside-month {
        color: ${({ theme }) => color(theme).elementBg.medium} !important;
        cursor: default;
        outline: none !important;
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
        color: ${({ theme }) => color(theme).text.inverted} !important;
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
        color: ${({ theme }) => color(theme).text.inverted} !important;
    }

    /* Next-/Prev-Arrow */
    .react-datepicker__close-icon {
        display: none !important;
    }

    .react-datepicker__navigation {
        position: relative;
    }

    .react-datepicker__navigation-icon--next::before {
        left: 0 !important;
    }

    .react-datepicker__navigation-icon--previous::before {
        left: 0 !important;
    }

    .react-datepicker__navigation:focus-visible {
        outline: 2px dotted ${({ theme }) => color(theme).primary.default};
    }

    /* Keyboard selection */
    .react-datepicker__day--keyboard-selected {
        outline: none;
        background: ${({ theme }) => color(theme).elementBg.medium};
        color: ${({ theme }) => color(theme).text.default};
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

    &:not(:disabled):active {
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

const Footer = styled.div`
    grid-area: footer;
`;

const OriginalInput = styled.input`
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border-width: 0;
`;

export interface DatepickerCustomIconFnProps {
    isInverted?: boolean;
    singleSelect?: boolean;
}

export type DatepickerCustomIconFn = (
    props: DatepickerCustomIconFnProps
) => React.ReactNode;

interface PickerBtnProps {
    label?: string;
    errorMessage?: string;
    infoMessage?: string;
    isRequired?: boolean;
    isDisabled?: boolean;
    isInverted?: boolean;
    name?: string;
    altText?: string;
    startDate?: Date | null | undefined;
    endDate?: Date | null | undefined;
    onClick?: (ev: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    dateFormat?: string;
    customIcon?: DatepickerCustomIconFn;
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
            name,
            altText,
            startDate,
            endDate,
            onClick,
            dateFormat = 'dd.MM.yyyy',
            customIcon,
            singleSelect,
        },
        ref
    ) => {
        const id = React.useId();
        const fieldId = `datepicker-${id}`;
        const msgId = `datepicker-message-${id}`;
        const errorMsgId = `datepicker-error-${id}`;

        return (
            <FieldWrapper.View isDisabled={isDisabled}>
                <FieldWrapper.Head
                    label={label}
                    htmlFor={fieldId}
                    isRequired={isRequired}
                    isInverted={isInverted}
                />
                <FieldWrapper.Content>
                    <DatepickerButton
                        ref={ref}
                        id={fieldId}
                        type="button"
                        disabled={isDisabled}
                        onClick={onClick}
                        hasDateValue={!!startDate}
                        isInverted={isInverted}
                        hasError={!!errorMessage}
                        aria-invalid={!!errorMessage}
                        aria-errormessage={errorMessage && errorMsgId}
                        aria-describedby={infoMessage && msgId}
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
                            <OriginalInput
                                aria-hidden="true"
                                name={`${name}["start"]`}
                                value={startDate?.toString()}
                            />
                            <OriginalInput
                                aria-hidden="true"
                                name={`${name}["end"]`}
                                value={endDate?.toString()}
                            />
                        </>
                    )}
                </FieldWrapper.Content>
                <FieldWrapper.Messages
                    infoMsgId={msgId}
                    infoMessage={infoMessage}
                    errorMsgId={errorMsgId}
                    errorMessage={errorMessage}
                    isInverted={isInverted}
                />
            </FieldWrapper.View>
        );
    }
);
PickerButton.displayName = 'PickerButton';

const PickerHeader = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: ${spacings.nudge * 3}px;
`;

export type HeaderRendererFnProps = ReactDatePickerCustomHeaderProps;
export type HeaderRendererFn = (settings: {
    locale?: string;
    monthsShown: number;
}) => (props: HeaderRendererFnProps) => ReactNode;

const headerRenderer: HeaderRendererFn =
    ({ monthsShown }) =>
    // eslint-disable-next-line react/display-name
    ({ monthDate, customHeaderCount, decreaseMonth, increaseMonth }) =>
        (
            <PickerHeader>
                {customHeaderCount === 0 ? (
                    <button
                        type="button"
                        aria-label="Previous Month"
                        className={
                            'react-datepicker__navigation react-datepicker__navigation--previous'
                        }
                        onClick={(ev) => {
                            ev.preventDefault();
                            decreaseMonth();
                        }}
                    >
                        <span
                            className={
                                'react-datepicker__navigation-icon react-datepicker__navigation-icon--previous'
                            }
                        >
                            {'<'}
                        </span>
                    </button>
                ) : null}

                <span className="react-datepicker__current-month">
                    {format(monthDate, 'LLLL', { locale: de })}
                </span>

                {customHeaderCount === monthsShown - 1 ? (
                    <button
                        type="button"
                        aria-label="Next Month"
                        className={
                            'react-datepicker__navigation react-datepicker__navigation--next'
                        }
                        onClick={(ev) => {
                            ev.preventDefault();
                            increaseMonth();
                        }}
                    >
                        <span
                            className={
                                'react-datepicker__navigation-icon react-datepicker__navigation-icon--next'
                            }
                        >
                            {'>'}
                        </span>
                    </button>
                ) : null}
            </PickerHeader>
        );

export interface FooterRendererFnProps {
    startDate: Date | null;
    endDate: Date | null;
    singleSelect: boolean;
    monthsShown: number;
    submitLabel: string;
    clearLabel: string;
    closeHandler?: () => void;
    resetHandler?: () => void;
}

export type FooterRendererFn = (props: FooterRendererFnProps) => ReactNode;

const FooterActions = styled.div`
    display: flex;
    justify-content: flex-end;
    gap: ${spacings.nudge}px;
    margin-right: ${spacings.nudge}px;
    margin-top: ${spacings.nudge * 2}px;
`;

const footerRenderer: FooterRendererFn = ({
    startDate,
    endDate,
    submitLabel,
    clearLabel,
    resetHandler,
    closeHandler,
}) => {
    return (
        <FooterActions>
            {(startDate || endDate) && (
                <PickerAction
                    variant="ghost"
                    ariaLabel="Reset date"
                    onClick={resetHandler}
                >
                    {clearLabel}
                </PickerAction>
            )}
            <PickerAction ariaLabel="Reset date" onClick={closeHandler}>
                <Pointer.Label>{submitLabel}</Pointer.Label>
            </PickerAction>
        </FooterActions>
    );
};
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

    values?: [Date, Date];
    minDate?: Date;
    maxDate?: Date;
    onChange?: (start?: Date | null, end?: Date | null) => void;
    customHeader?: HeaderRendererFn;
    customFooter?: FooterRendererFn;

    customIcon?: DatepickerCustomIconFn;

    singleSelect?: boolean;
    visibleMonths?: '1' | '2';
    shouldCloseOnSelect?: boolean;
    submitLabel?: string;
    clearLabel?: string;
}

const Datepicker: React.FC<DatepickerProps> = ({
    label,
    errorMessage,
    infoMessage,
    isRequired,
    isDisabled,
    isInverted,
    name,
    placeholder,
    singleSelect = false,
    visibleMonths = '1',
    shouldCloseOnSelect = false,
    submitLabel = 'submit',
    clearLabel = 'reset',
    values,
    minDate = new Date(),
    maxDate,
    onChange,
    customHeader,
    customFooter,
    customIcon,
}) => {
    const { globals } = useLibTheme();

    const locale = globals.sections.datepickerLocaleKey;
    const dateFormat = globals.sections.datepickerDateFormat;

    const pickerRef = useRef<ReactDatePicker>(null);
    const [isSmall, setIsSmall] = useState<boolean>(false);

    const initialStart = values?.[0] && isValid(values[0]) ? values[0] : null;
    const initialEnd = values?.[1] && isValid(values[1]) ? values[1] : null;

    const [startDate, setStartDate] = useState<Date | null>(initialStart);
    const [endDate, setEndDate] = useState<Date | null>(initialEnd);
    const prevStartDate = useRef<Date | null>(initialStart);
    const prevEndDate = useRef<Date | null>(initialEnd);

    useEffect(() => {
        const x = async () => {
            await import('react-datepicker');
        };

        if (!singleSelect) setIsSmall(!window.matchMedia(mq.medium).matches);

        x();
    }, [locale, singleSelect]);

    // update if date state from outside has been changed
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

    // react to internal date state changes
    useEffect(() => {
        if (
            startDate?.toDateString() !== prevStartDate.current?.toDateString()
        ) {
            onChange?.(startDate, endDate);
            prevStartDate.current = startDate;
        }

        if (endDate?.toDateString() !== prevEndDate.current?.toDateString()) {
            onChange?.(startDate, endDate);
            prevEndDate.current = endDate;
        }
    }, [startDate, endDate, onChange]);

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

    const closePicker = () => {
        if (!pickerRef.current) return;

        pickerRef.current.setOpen(false);
    };

    const handleReset = () => {
        setStartDate(null);
        setEndDate(null);
    };

    const monthsShown = isSmall ? 1 : visibleMonths === '2' ? 2 : 1;

    const customFooterProps = {
        closeHandler: closePicker,
        resetHandler: handleReset,
        startDate,
        endDate,
        singleSelect,
        monthsShown,
        submitLabel,
        clearLabel,
    };

    return (
        <PickerView>
            <ReactDatePicker
                ref={pickerRef}
                locale={locale === 'de' ? de : undefined}
                dateFormat={dateFormat}
                selectsRange={!singleSelect}
                onSelect={(date) => {
                    if (!singleSelect) return;

                    if (date.toDateString() === startDate?.toDateString()) {
                        setStartDate(null);
                        setEndDate(null);
                    }
                }}
                onChange={(dates) => {
                    if (Array.isArray(dates)) {
                        const [start, end] = dates;
                        setStartDate(start);
                        setEndDate(end);
                    } else {
                        setStartDate(dates);
                        setEndDate(null);
                    }
                }}
                selected={startDate}
                startDate={startDate}
                endDate={endDate}
                minDate={minDate}
                maxDate={maxDate}
                monthsShown={monthsShown}
                shouldCloseOnSelect={shouldCloseOnSelect}
                showPopperArrow={false}
                disabledKeyboardNavigation={false}
                isClearable
                customInput={
                    <PickerButton
                        label={label}
                        isInverted={isInverted}
                        isDisabled={isDisabled}
                        infoMessage={infoMessage}
                        errorMessage={errorMessage}
                        isRequired={isRequired}
                        name={name}
                        altText={placeholder}
                        startDate={startDate}
                        endDate={endDate}
                        dateFormat={dateFormat}
                        customIcon={customIcon}
                        singleSelect={singleSelect}
                    />
                }
                renderCustomHeader={
                    customHeader
                        ? customHeader({ locale, monthsShown })
                        : headerRenderer({ locale, monthsShown })
                }
            >
                <Footer>
                    {customFooter
                        ? customFooter(customFooterProps)
                        : footerRenderer(customFooterProps)}
                </Footer>
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
