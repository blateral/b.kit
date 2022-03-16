import AngleRight from 'components/base/icons/AngleRight';
import Copy from 'components/typography/Copy';
import React from 'react';
import styled, { ThemeContext } from 'styled-components';
import { getColors as color, spacings } from 'utils/styles';
import StatusFormatter from '../../utils/statusFormatter';
import ExclamationMark from '../base/icons/ExclamationMark';

const View = styled.a`
    border: 1px solid ${({ theme }) => color(theme).new.primary.default};
    color: ${({ theme }) => color(theme).new.primary.default};

    text-decoration: none;

    padding: ${spacings.nudge * 3}px;

    display: flex;
    flex-direction: row;
    align-itemds: flex-start;

    transition: all ease-in-out 0.2s;

    &:hover {
        border: 1px solid ${({ theme }) => color(theme).new.primary.hover};
        color: ${({ theme }) => color(theme).new.primary.hover};
    }
`;

const AlertIcon = styled.span`
    display: block;

    margin-right: ${spacings.nudge * 3}px;
`;

const AlertContent = styled.span`
    display: block;

    & > * + * {
        margin-top: ${spacings.nudge / 2}px;
    }
`;

const AlertLabel = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;

    & > * + * {
        margin-left: ${spacings.nudge * 3}px;
    }

    ${View}:hover & {
        text-decoration: underline;
    }
`;

const Alert: React.FC<{ label: string; date?: Date; link?: string }> = ({
    label,
    date,
    link,
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

    const theme = React.useContext(ThemeContext);
    return (
        <View href={link}>
            <AlertIcon>
                <ExclamationMark />
            </AlertIcon>
            <AlertContent>
                <AlertLabel>
                    <Copy textColor="inherit" size="medium" type="copy-b">
                        {label}
                    </Copy>
                    {link && <AngleRight />}
                </AlertLabel>
                <Copy
                    textColor={color(theme).new.elementBg.medium}
                    size="small"
                >
                    {formattedDate}
                </Copy>
            </AlertContent>
        </View>
    );
};

export default Alert;
