import Copy from 'components/typography/Copy';
import Link, { LinkProps } from 'components/typography/Link';
import React from 'react';
import styled from 'styled-components';
import {
    getColors as color,
    getGlobals as global,
    spacings,
} from 'utils/styles';
import StatusFormatter from '../../utils/statusFormatter';
import ExclamationMark from '../base/icons/ExclamationMark';

const View = styled(Link)<{ isInverted?: boolean }>`
    display: -ms-grid;
    display: grid;

    -ms-grid-columns: min-content 1fr;
    grid-template-columns: min-content 1fr;
    -ms-grid-rows: min-content 1fr;
    grid-auto-rows: min-content 1fr;

    text-decoration: none;

    position: relative;
    border: 2px solid
        ${({ theme, isInverted }) =>
            isInverted
                ? color(theme).new.primary.inverted
                : color(theme).new.primary.default};
    border-radius: ${({ theme }) => global(theme).sections.edgeRadius};

    color: ${({ theme, isInverted }) =>
        isInverted
            ? color(theme).new.primary.inverted
            : color(theme).new.primary.default};

    padding: ${spacings.nudge * 3}px;

    text-align: left;
    width: 100%;
    cursor: pointer;

    transition: color ease-in-out 0.2s, border 0.2s ease-in-out;

    & > * + * {
        margin-left: ${spacings.nudge * 3}px;
    }

    @media (hover: hover) and (pointer: fine) {
        &:hover {
            border: 2px solid
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
`;

const Icon = styled.div`
    display: flex;
    align-items: center;

    & > * {
        height: 48px;
        width: 48px;
    }
`;

const MainLabel = styled.div`
    display: flex;
    align-items: center;
`;

const Content = styled.div`
    margin-top: ${spacings.nudge}px;

    & > * + * {
        margin-top: ${spacings.nudge}px;
    }
`;

const Title = styled(Copy)`
    display: inline-block;
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
}

const Alert: React.FC<AlertProps & { className?: string }> = ({
    isInverted,
    title,
    date,
    description,
    link,
    customIcon,
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
        <View
            isInverted={isInverted}
            data-sheet="alert"
            ariaLabel={link?.href ? title : undefined}
            className={className}
            {...link}
        >
            <Icon>
                {customIcon ? customIcon({ isInverted }) : <ExclamationMark />}
            </Icon>
            <MainLabel>
                {title && (
                    <Title textColor="inherit" size="medium" type="copy-b">
                        {title}
                    </Title>
                )}
            </MainLabel>
            <span />
            <Content>
                {description && (
                    <Copy
                        isInverted={isInverted}
                        size="small"
                        innerHTML={description}
                    />
                )}
                {date && (
                    <Copy size="small" isInverted={isInverted}>
                        {formattedDate}
                    </Copy>
                )}
            </Content>
        </View>
    );
};

export default Alert;
