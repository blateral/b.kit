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

import AngleDown from 'components/base/icons/AngleDown';
import AngleUp from 'components/base/icons/AngleUp';
import ReactDatePicker from 'react-datepicker';
import { hexToRgba } from 'utils/hexRgbConverter';

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
            ${({ theme }) => hexToRgba(color(theme).new.elementBg.dark, 0.2)} !important;
        border-radius: ${({ theme }) =>
            global(theme).sections.edgeRadius} !important;
        padding: ${spacings.spacer}px;
        width: 100%;

        box-shadow: 0px 3px 9px rgba(0, 0, 0, 0.15);
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

    @media ${mq.medium} {
        .react-datepicker__month-container {
            width: auto;
        }
    }

    .react-datepicker__month {
        margin-left: ${spacings.spacer}px;
        margin-right: ${spacings.spacer}px;
    }

    .react-datepicker__current-month {
        font-family: 'Roboto', sans-serif;
        font-weight: 600;
        font-size: 17px;
        line-height: 1.3;
        text-transform: uppercase;
        background-color: ${({ theme }) => color(theme).new.primary.default};
        padding: 10px 15px;
        color: ${({ theme }) => color(theme).new.text.inverted} !important;
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
        background-color: ${({ theme }) => color(theme).new.elementBg.light};
        border-radius: 0 !important;
        font-weight: 600;

        margin: 2px !important;
    }

    @media ${mq.medium} {
        .react-datepicker__day:hover {
            background-color: ${({ theme }) =>
                color(theme).new.elementBg.dark} !important;
            border-radius: 0 !important;
            color: ${({ theme }) => color(theme).new.text.inverted};
        }
    }

    .react-datepicker__day--outside-month {
        color: ${({ theme }) => color(theme).new.elementBg.medium} !important;
        cursor: default;
    }

    .react-datepicker__day--selected {
        background-color: ${({ theme }) =>
            color(theme).new.primary.default} !important;
        border-radius: 0 !important;
        color: ${({ theme }) => color(theme).new.text.inverted};
    }

    .react-datepicker__day--today {
        border: 1px solid
            ${({ theme }) => hexToRgba(color(theme).new.elementBg.dark, 0.6)} !important;
        border-radius: 0 !important;
    }

    /* Triangle Styles */

    .react-datepicker__triangle:before {
        border-bottom-color: ${({ theme }) =>
            hexToRgba(color(theme).new.elementBg.dark, 0.2)} !important;
    }

    .react-datepicker__triangle:after {
        border-bottom-color: ${({ theme }) =>
            color(theme).new.elementBg.light} !important;
    }

    /* Day Ranges */

    .react-datepicker__day--in-range {
        background-color: ${({ theme }) =>
            hexToRgba(color(theme).new.primary.default, 0.7)} !important;
    }

    @media ${mq.medium} {
        .react-datepicker__day--in-range:hover {
            background-color: ${({ theme }) =>
                hexToRgba(color(theme).new.primary.default, 0.25)} !important;
        }
    }

    .react-datepicker__day--range-start {
        background-color: ${({ theme }) =>
            color(theme).new.primary.default} !important;
    }

    @media ${mq.medium} {
        .react-datepicker__day--range-start:hover {
            background-color: ${({ theme }) =>
                hexToRgba(color(theme).new.primary.default, 0.25)} !important;
        }
    }

    .react-datepicker__day--range-end {
        background-color: ${({ theme }) =>
            color(theme).new.primary.default} !important;
    }

    @media ${mq.medium} {
        .react-datepicker__day--range-end:hover {
            background-color: ${({ theme }) =>
                hexToRgba(color(theme).new.primary.default, 0.25)} !important;
        }
    }

    .react-datepicker__day--in-selecting-range {
        background-color: ${({ theme }) =>
            hexToRgba(color(theme).new.primary.default, 0.7)} !important;
    }

    /* Next-/Prev-Arrow */
    .react-datepicker__close-icon {
        display: none !important;
    }

    .react-datepicker__navigation {
        top: 0 !important;
    }

    /* Keyboard selection */
    .react-datepicker__day--keyboard-selected {
        background: ${({ theme }) => color(theme).new.elementBg.dark};
    }
`;

const View = styled(Copy)`
    display: block;
    text-align: left;
    width: 100%;
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

const Icon = styled.img`
    height: 100%;
    max-height: 25px;
    max-width: 30px;
`;

const DatepickerButton = styled.button<{
    hasError?: boolean;
    isActive?: boolean;
    hasBg?: boolean;
}>`
    background: ${({ theme, hasBg }) =>
        hasBg
            ? color(theme).new.elementBg.medium
            : color(theme).new.elementBg.light};
    border: ${({ hasError, theme }) =>
        hasError
            ? `2px solid ${color(theme).new.error}`
            : '2px solid transparent'};
    border-radius: ${({ theme }) => global(theme).sections.edgeRadius};
    outline: none;
    padding: ${spacings.spacer}px ${spacings.nudge * 3}px;
    width: 100%;
    max-height: 60px;
    pointer-events: ${({ isActive }) => (isActive ? 'none' : 'all')};

    position: relative;

    &:focus {
        border: ${({ theme }) =>
            `2px solid ${hexToRgba(color(theme).new.elementBg.dark, 0.2)}`};
    }

    &:active {
        border: ${({ theme }) =>
            `2px solid ${hexToRgba(color(theme).new.elementBg.dark, 0.2)}`};
    }

    ${({ isActive }) =>
        isActive &&
        css`
            border: ${({ theme }) =>
                `2px solid ${hexToRgba(color(theme).new.elementBg.dark, 0.2)}`};
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

    margin-top: ${spacings.spacer * 14}px;
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

const InfoMessage = styled(Copy)`
    margin-top: ${spacings.nudge * 2}px;
    padding-left: ${spacings.nudge}px;
`;

const ErrorMessage = styled(Copy)`
    margin-top: ${spacings.nudge * 2}px;
    padding-left: ${spacings.nudge}px;
`;

const ButtonLabel = styled(Button.Label)`
    font-size: 12px;
`;
const ButtonGhostLabel = styled(ButtonGhost.Label)`
    font-size: 12px;
`;

interface PickerBtnProps {
    isFocused?: boolean;
    label?: string;
    name?: string;
    altText?: string;
    errorMessage?: string;
    startDate?: Date | null | undefined;
    endDate?: Date | null | undefined;
    icon?: { src: string; alt?: string };
    setFocused: React.Dispatch<React.SetStateAction<boolean>>;
    onClick?: (ev: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    hasBg?: boolean;
    isInverted?: boolean;
    dateFormat?: string;
    indicator?: (props: {
        isOpen?: boolean;
        isDisabled?: boolean;
    }) => React.ReactNode;
}

const PickerButton = forwardRef<HTMLButtonElement, PickerBtnProps>(
    (
        {
            isFocused,
            label,
            name,
            altText,
            errorMessage,
            startDate,
            endDate,
            icon,
            isInverted,
            hasBg,
            setFocused,
            onClick,
            dateFormat = 'dd.MM.yyyy',
            indicator,
        },
        ref
    ) => {
        const theme = useContext(ThemeContext);

        return (
            <View renderAs="label">
                {label && (
                    <FieldHead
                        renderAs="span"
                        isInverted={isInverted}
                        size="medium"
                        type="copy-b"
                    >
                        {label}
                    </FieldHead>
                )}
                <DatepickerButton
                    ref={ref}
                    onClick={(e) => {
                        setFocused && setFocused(true);
                        onClick && onClick(e);
                    }}
                    isActive={isFocused}
                    hasBg={hasBg && !isInverted}
                    hasError={!!errorMessage}
                    className="myPickerButton"
                >
                    <DatepickerButtonMain>
                        {icon && <Icon src={icon.src} alt={icon.alt || ''} />}

                        <Copy type="copy">
                            {startDate
                                ? `${format(startDate, dateFormat)}${
                                      endDate
                                          ? ` – ${format(endDate, dateFormat)}`
                                          : ''
                                  }`
                                : altText}
                        </Copy>
                    </DatepickerButtonMain>
                    {indicator && indicator({ isOpen: isFocused })}
                    {!indicator &&
                        (isFocused ? (
                            <AngleUp
                                iconColor={color(theme).new.elementBg.dark}
                            />
                        ) : (
                            <AngleDown
                                iconColor={color(theme).new.elementBg.dark}
                            />
                        ))}
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
            </View>
        );
    }
);
PickerButton.displayName = 'PickerButton';

const PickerHeader = styled.div`
    margin-bottom: ${spacings.nudge * 2}px;
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
    name?: string;
    icon?: { src: string; alt?: string };
    placeholder?: string;
    errorMessage?: string;
    infoMessage?: string;
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
    indicator?: (props: {
        isOpen?: boolean;
        isDisabled?: boolean;
    }) => React.ReactNode;
    nextCtrlUrl?: React.ReactNode;
    prevCtrlUrl?: React.ReactNode;

    singleSelect?: boolean;
    hasBg?: boolean;
    isInverted?: boolean;
}> = ({
    label,
    name,
    icon,
    dateSubmitLabel,
    dateDeleteLabel,
    placeholder,
    singleSelect = false,
    values,
    minDate = new Date(),
    maxDate,
    errorMessage,
    infoMessage,
    isInverted,
    hasBg,
    onDataChange,
    onSubmit,
    deleteAction,
    submitAction,
    indicator,
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
                        ref={pickerBtnRef}
                        label={label}
                        name={name}
                        altText={placeholder}
                        startDate={startDate}
                        endDate={endDate}
                        errorMessage={errorMessage}
                        icon={icon}
                        isFocused={focused}
                        setFocused={setFocused}
                        isInverted={isInverted}
                        hasBg={hasBg}
                        dateFormat={dateFormat}
                        indicator={indicator}
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
            {infoMessage && (
                <InfoMessage
                    textColor={color(theme).new.text.default}
                    size="small"
                >
                    {infoMessage}
                </InfoMessage>
            )}
            {errorMessage && (
                <ErrorMessage
                    textColor={color(theme).new.error}
                    size="small"
                    type="copy-i"
                >
                    {errorMessage
                        ? errorMessage
                        : 'Bitte geben Sie einen gültigen Text ein'}
                </ErrorMessage>
            )}
        </PickerView>
    );
};

export default Datepicker;
