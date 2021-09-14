import * as React from 'react';
import styled, { css, ThemeContext } from 'styled-components';

import { getColors as color, mq, spacings } from 'utils/styles';
import { format, isBefore, isValid } from 'date-fns';
import de from 'date-fns/locale/de';

import ButtonGhost from 'components/buttons/ButtonGhost';
import Button from 'components/buttons/Button';

import Copy from 'components/typography/Copy';

import AngleDown from 'components/base/icons/AngleDown';
import AngleUp from 'components/base/icons/AngleUp';
import ReactDatePicker from 'react-datepicker';

const PickerView = styled.div`
    position: relative;
    width: 100%;
    text-align: left;
`;

const View = styled.div`
    width: 100%;
`;

const FieldHead = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-bottom: ${spacings.nudge * 3}px;
    padding-left: ${spacings.nudge}px;
    padding-right: ${spacings.nudge}px;
`;

const Icon = styled.img`
    height: 100%;
    max-height: 25px;
    max-width: 30px;
`;

const DatepickerButton = styled.div<{ hasError?: boolean; isActive?: boolean }>`
    background: ${({ isActive, theme }) =>
        isActive ? color(theme).mono.light : color(theme).light};
    border: 1px solid ${({ theme }) => color(theme).light};
    outline: none;
    padding: ${spacings.spacer}px ${spacings.nudge * 3}px;
    width: 100%;
    max-height: 60px;
    pointer-events: ${({ isActive }) => (isActive ? 'none' : 'all')};

    position: relative;

    &:focus {
        border: 1px solid ${({ theme }) => color(theme).primary.medium};
    }

    &:active {
        border: 1px solid ${({ theme }) => color(theme).primary.medium};
    }

    ${({ isActive }) =>
        isActive &&
        css`
            border: 1px solid ${({ theme }) => color(theme).primary.medium};
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

const Label = styled(Copy)<{ hasError?: boolean }>`
    color: ${({ hasError }) => (hasError ? '#ff0000' : 'inherit')};
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
    onClick?: (ev: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

const PickerButton = React.forwardRef<HTMLDivElement, PickerBtnProps>(
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
            setFocused,
            onClick,
        },
        ref
    ) => {
        const theme = React.useContext(ThemeContext);
        return (
            <View>
                <FieldHead>
                    {label && (
                        <Copy
                            textColor={color(theme).dark}
                            size="medium"
                            type="copy-b"
                        >
                            {label}
                        </Copy>
                    )}
                </FieldHead>
                <DatepickerButton
                    ref={ref}
                    onClick={(e) => {
                        setFocused && setFocused(true);
                        onClick && onClick(e);
                    }}
                    isActive={isFocused}
                    className="myPickerButton"
                >
                    <DatepickerButtonMain>
                        {icon && <Icon src={icon.src} alt={icon.alt} />}

                        <Label
                            textColor={color(theme).dark}
                            size="small"
                            type="copy-b"
                            hasError={!!errorMessage}
                        >
                            {startDate
                                ? `${format(startDate, 'dd.MM.yyyy')}${
                                      endDate
                                          ? ` – ${format(
                                                endDate,
                                                'dd.MM.yyyy'
                                            )}`
                                          : ''
                                  }`
                                : altText}
                        </Label>
                    </DatepickerButtonMain>
                    {isFocused ? (
                        <AngleUp iconColor={color(theme).dark} />
                    ) : (
                        <AngleDown iconColor={color(theme).dark} />
                    )}
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

const Datepicker: React.FC<{
    label?: string;
    name?: string;
    icon?: { src: string; alt?: string };
    placeholder?: string;
    errorMessage?: string;
    infoMessage?: string;

    values?: [Date, Date];
    minDate?: Date;
    maxDate?: Date;
    onDataChange?: (startDate: Date | null, endDate: Date | null) => void;
    onSubmit?: (startDate?: Date | null, endDate?: Date | null) => void;

    singleSelect?: boolean;
}> = ({
    label,
    name,
    icon,
    placeholder,
    singleSelect = false,
    values,
    minDate = new Date(),
    maxDate,
    errorMessage,
    infoMessage,
    onDataChange,
    onSubmit,
}) => {
    const theme = React.useContext(ThemeContext);
    const pickerRef = React.useRef<ReactDatePicker | undefined>(null);
    const pickerBtnRef = React.useRef<HTMLDivElement | null>(null);
    const [isSmall, setIsSmall] = React.useState<boolean>(false);

    const [startDate, setStartDate] = React.useState<Date | null>();
    const [endDate, setEndDate] = React.useState<Date | null>();

    const [focused, setFocused] = React.useState<boolean>();

    React.useEffect(() => {
        const x = async () => {
            const { registerLocale } = await import('react-datepicker');
            registerLocale('de', de);
        };

        if (!singleSelect) setIsSmall(!window.matchMedia(mq.medium).matches);

        x();
    }, [singleSelect]);

    React.useEffect(() => {
        if (values) {
            if (values[0] && isValid(values[0])) {
                setStartDate(values[0]);
            }

            if (values[1] && isValid(values[1])) {
                setEndDate(values[1]);
            }
        }
    }, [values]);

    React.useEffect(() => {
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

    React.useEffect(() => {
        if (pickerRef.current && focused !== undefined) {
            pickerRef.current?.setOpen(focused);
        }
    }, [focused]);

    return (
        <PickerView>
            <ReactDatePicker
                locale="de"
                ref={pickerRef as any}
                dateFormat="dd.MM.yyyy"
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
                    />
                }
                showPopperArrow
                minDate={minDate}
                maxDate={maxDate}
                disabledKeyboardNavigation
                isClearable
                onClickOutside={(ev) => {
                    ev.stopPropagation();
                    setFocused(false);
                    onSubmit && onSubmit(startDate, endDate);
                }}
            >
                <DatepickerFoot>
                    <FootFlex>
                        <ButtonGhost.View
                            as="button"
                            onClick={(ev) => {
                                ev.preventDefault();
                                setStartDate(undefined);
                                setEndDate(undefined);
                                new Date();
                            }}
                        >
                            <ButtonGhostLabel>Löschen</ButtonGhostLabel>
                        </ButtonGhost.View>
                        <Button.View
                            as="button"
                            onClick={(ev) => {
                                ev.preventDefault();
                                setFocused(false);
                                onSubmit && onSubmit(startDate, endDate);
                            }}
                        >
                            <ButtonLabel>Anwenden</ButtonLabel>
                        </Button.View>
                    </FootFlex>
                </DatepickerFoot>
            </ReactDatePicker>
            {infoMessage && (
                <InfoMessage textColor={color(theme).dark} size="small">
                    {infoMessage}
                </InfoMessage>
            )}
            {errorMessage && (
                <ErrorMessage textColor="#ff0000" size="small">
                    {errorMessage
                        ? errorMessage
                        : 'Bitte geben Sie einen gültigen Text ein'}
                </ErrorMessage>
            )}
        </PickerView>
    );
};

export default Datepicker;
