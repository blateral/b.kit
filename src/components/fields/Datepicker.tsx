import React, {
    useState,
    useEffect,
    useContext,
    useRef,
    forwardRef,
    useCallback,
} from 'react';
import styled, { css, ThemeContext } from 'styled-components';

import {
    getColors as color,
    mq,
    spacings,
    getGlobals as global,
} from 'utils/styles';
import { format, isBefore, isValid } from 'date-fns';
import de from 'date-fns/locale/de';

import ButtonGhost from 'components/buttons/ButtonGhost';
import Button from 'components/buttons/Button';

import Copy from 'components/typography/Copy';

import ReactDatePicker from 'react-datepicker';
import { hexToRgba } from 'utils/hexRgbConverter';
import FieldWrapper from './FormField';
import { useLibTheme } from 'utils/LibThemeProvider';

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
            width: auto;
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

const Icon = styled.div`
    height: 100%;

    & > * {
        height: 25px;
        width: 30px;
    }
`;

const DatepickerButton = styled.button<{
    hasError?: boolean;
    isActive?: boolean;
    isInverted?: boolean;
}>`
    padding: ${spacings.nudge}px;

    border: 1px solid
        ${({ theme, isInverted, hasError }) =>
            hasError
                ? color(theme).error
                : isInverted
                ? color(theme).elementBg.light
                : color(theme).elementBg.dark};
    border-radius: ${({ theme }) => global(theme).sections.edgeRadius};

    background: none;

    outline: none;
    width: 100%;
    min-height: 50px;
    max-height: 50px;
    pointer-events: ${({ isActive }) => (isActive ? 'none' : 'all')};

    position: relative;

    &:active {
        border: ${({ theme }) => `1px solid ${color(theme).primary.default}`};
    }

    &:focus {
        outline: ${({ theme }) => `1px solid ${color(theme).primary.default}`};
        outline-offset: 0;
    }

    &:focus:not(:focus-visible) {
        outline: none;
    }

    ${({ isActive }) =>
        isActive &&
        css`
            border: ${({ theme }) =>
                `1px solid ${color(theme).primary.default}`};
        `}

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
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

    /* margin-top: ${spacings.spacer * 14}px; */
`;

const FootFlex = styled.div`
    clear: both;
    display: flex;
    flex-direction: column;

    & > * + * {
        margin-top: ${spacings.spacer * 0.5}px;
    }

    @media ${mq.medium} {
        align-items: center;
        flex-direction: row;

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
    customIcon?: () => React.ReactNode;
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
        },
        ref
    ) => {
        const { colors } = useLibTheme();
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
                        onClick={(e) => {
                            setFocused && setFocused(true);
                            onClick && onClick(e);
                        }}
                        isActive={isFocused}
                        isInverted={isInverted}
                        hasError={!!errorMessage}
                        className="myPickerButton"
                    >
                        <DatepickerButtonMain>
                            <Copy
                                type="copy"
                                textColor={
                                    !startDate
                                        ? colors.elementBg.medium
                                        : isInverted
                                        ? colors.text.inverted
                                        : colors.text.default
                                }
                            >
                                {startDate
                                    ? `${format(startDate, dateFormat)}${
                                          endDate
                                              ? ` – ${format(
                                                    endDate,
                                                    dateFormat
                                                )}`
                                              : ''
                                      }`
                                    : altText}
                            </Copy>
                        </DatepickerButtonMain>
                        {customIcon && <Icon>{customIcon()}</Icon>}
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

const Datepicker: React.FC<{
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
    customIcon?: () => React.ReactNode;
    nextCtrlUrl?: React.ReactNode;
    prevCtrlUrl?: React.ReactNode;

    singleSelect?: boolean;
}> = ({
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
    const theme = useContext(ThemeContext);
    const locale = global(theme).sections.datepickerLocaleKey;
    const dateFormat = global(theme).sections.datepickerDateFormat;

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

export default Datepicker;
