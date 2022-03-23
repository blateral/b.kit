import Copy from 'components/typography/Copy';
import { LinkProps } from 'components/typography/Link';
import React from 'react';
import styled from 'styled-components';
import {
    getColors as color,
    getGlobals as global,
    mq,
    spacings,
} from 'utils/styles';
import StatusFormatter from '../../utils/statusFormatter';
import ExclamationMark from '../base/icons/ExclamationMark';
import InlineLink from './InlineLink';

const View = styled.div<{ isInverted?: boolean }>`
    position: relative;
    border: 1px solid
        ${({ theme, isInverted }) =>
            isInverted
                ? color(theme).new.primary.inverted
                : color(theme).new.primary.default};
    border-radius: ${({ theme }) => global(theme).sections.edgeRadius};

    background: ${({ theme, isInverted }) =>
        isInverted
            ? color(theme).new.elementBg.dark
            : color(theme).new.elementBg.light};
    color: ${({ theme, isInverted }) =>
        isInverted
            ? color(theme).new.primary.inverted
            : color(theme).new.primary.default};

    padding: ${spacings.nudge * 2}px;

    text-align: left;
    width: 100%;

    display: flex;
    flex-direction: row;
    align-items: flex-start;
    cursor: pointer;

    transition: color ease-in-out 0.2s, border 0.2s ease-in-out;

    & > * + * {
        margin-left: ${spacings.nudge * 2}px;
    }

    @media (hover: hover) and (pointer: fine) {
        &:hover {
            border: 1px solid
                ${({ theme, isInverted }) =>
                    isInverted
                        ? color(theme).new.primary.invertedHover
                        : color(theme).new.primary.hover};
            color: ${({ theme, isInverted }) =>
                isInverted
                    ? color(theme).new.primary.invertedHover
                    : color(theme).new.primary.hover};
        }
    }

    @media ${mq.medium} {
        padding: ${spacings.nudge * 3}px;

        & > * + * {
            margin-left: ${spacings.nudge * 3}px;
        }
    }
`;

const Icon = styled.div``;

const Content = styled.div`
    & > * + * {
        margin-top: ${spacings.nudge / 2}px;
    }
`;

export interface AlertProps {
    /** Invert colors for use on dark backgrounds */
    isInverted?: boolean;

    /** Alert title text */
    title?: string;

    /** Alert date */
    date?: Date;

    /** Additional description text (richtext)  */
    description?: string;

    /** Alert link that covers hole element  */
    link?: LinkProps;

    /** Function to inject custom alert icon */
    customIcon?: (props: { isInverted?: boolean }) => React.ReactNode;

    /** Function to inject custom title icon */
    customTitleIcon?: (props: { isInverted?: boolean }) => React.ReactNode;

    className?: string;
}

const Alert: React.FC<AlertProps> = ({
    isInverted,
    title,
    date,
    description,
    link,
    customIcon,
    customTitleIcon,
    className,
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
        <View isInverted={isInverted} className={className}>
            <Icon>
                {customIcon ? customIcon({ isInverted }) : <ExclamationMark />}
            </Icon>
            <Content>
                <InlineLink
                    link={link}
                    isInverted={isInverted}
                    title={title}
                    customTitleIcon={customTitleIcon}
                />
                {description && (
                    <Copy
                        isInverted={isInverted}
                        size="small"
                        innerHTML={description}
                    />
                )}
                {date && (
                    <Copy textColor="inherit" size="small">
                        {formattedDate}
                    </Copy>
                )}
            </Content>
        </View>
    );
};

export default Alert;
