import AngleRight from 'components/base/icons/AngleRight';
import Copy from 'components/typography/Copy';
import React from 'react';
import styled from 'styled-components';
import { getColors as color, spacings } from 'utils/styles';
import StatusFormatter from '../../utils/statusFormatter';
import ExclamationMark from '../base/icons/ExclamationMark';

const View = styled.button<{ isClickable?: boolean }>`
    border: 1px solid ${({ theme }) => color(theme).new.primary.default};
    background: ${({ theme }) => color(theme).new.elementBg.light};
    color: ${({ theme }) => color(theme).new.primary.default};

    padding: ${spacings.nudge * 3}px;

    text-align: left;
    width: 100%;

    cursor: ${({ isClickable }) => (isClickable ? 'pointer' : 'default')};
    pointer-events: ${({ isClickable }) => (isClickable ? 'all' : 'none')};

    display: flex;
    flex-direction: row;
    align-itemds: flex-start;

    transition: all ease-in-out 0.2s;

    &:hover {
        border: 1px solid ${({ theme }) => color(theme).new.primary.hover};
        color: ${({ theme }) => color(theme).new.primary.hover};
    }
`;

const AlertIcon = styled.div`
    margin-right: ${spacings.nudge * 3}px;
`;

const AlertContent = styled.div`
    & > * + * {
        margin-top: ${spacings.nudge / 2}px;
    }
`;

const AlertLabel = styled.span`
    display: inline-flex;
    flex-wrap: wrap;
    align-items: center;

    & > * + * {
        margin-left: ${spacings.nudge * 3}px;
    }
`;

export interface AlertProps {
    label: string;
    date?: Date;
    onClick?: () => void;
    descriptionText?: string;
}

const Alert: React.FC<AlertProps> = ({
    label,
    date,
    onClick,
    descriptionText,
}) => {
    let formattedDate = '';
    if (date) {
        const formatter = new StatusFormatter(
            date.getTime(),
            '',
            'dd. MMMM yyyy',
            'hh:mm',
            'de'
        );
        formattedDate = formatter.getFormattedDate();
    }

    return (
        <View isClickable={!!onClick} onClick={onClick}>
            <AlertIcon>
                <ExclamationMark />
            </AlertIcon>
            <AlertContent>
                <AlertLabel>
                    <Copy
                        renderAs="span"
                        textColor="inherit"
                        size="medium"
                        type="copy-b"
                    >
                        {label}
                    </Copy>
                    {onClick && (
                        <span>
                            <AngleRight />
                        </span>
                    )}
                </AlertLabel>
                {descriptionText && (
                    <Copy size="small" innerHTML={descriptionText} />
                )}
                <Copy textColor="inherit" size="small">
                    {formattedDate}
                </Copy>
            </AlertContent>
        </View>
    );
};

export default Alert;
