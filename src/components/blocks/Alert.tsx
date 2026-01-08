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
import Info from '../base/icons/Info';

const View = styled.div<{ isInverted?: boolean }>`
    position: relative;
    display: -ms-grid;
    display: grid;

    -ms-grid-columns: min-content 1fr;
    grid-template-columns: min-content 1fr;
    -ms-grid-rows: min-content 1fr;
    grid-auto-rows: min-content 1fr;

    text-decoration: none;

    border: 2px solid
        ${({ theme, isInverted }) =>
            isInverted
                ? color(theme).primary.inverted
                : color(theme).primary.default};
    border-radius: ${({ theme }) => global(theme).sections.edgeRadius};

    color: ${({ theme, isInverted }) =>
        isInverted
            ? color(theme).primary.inverted
            : color(theme).primary.default};

    padding: ${spacings.nudge * 3}px;

    text-align: left;
    width: 100%;

    transition: color ease-in-out 0.2s, border 0.2s ease-in-out;

    & > * + * {
        margin-left: ${spacings.nudge * 3}px;
    }

    @media (hover: hover) and (pointer: fine) {
        &:has(a):hover {
            border: 2px solid
                ${({ theme, isInverted }) =>
                    isInverted
                        ? color(theme).primary.invertedHover
                        : color(theme).primary.hover};
            color: ${({ theme, isInverted }) =>
                isInverted
                    ? color(theme).primary.invertedHover
                    : color(theme).primary.hover};
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

const TitleLink = styled(Link)`
    color: inherit;
    cursor: pointer;
    outline: none;

    @media (hover: hover) and (pointer: fine) {
        &:hover {
            color: ${({ isInverted, theme }) =>
                isInverted
                    ? color(theme).primary.invertedHover
                    : color(theme).primary.hover};
        }
    }

    && {
        margin: 0;
    }

    &:before {
        content: '';
        position: absolute;
        inset: 0;
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
        <View isInverted={isInverted} data-sheet="alert" className={className}>
            <Icon>{customIcon ? customIcon({ isInverted }) : <Info />}</Icon>
            <MainLabel>
                {title && link?.href ? (
                    <TitleLink
                        {...link}
                        ariaLabel={link?.href ? title : undefined}
                        isInverted={isInverted}
                    >
                        <Title
                            textColor="inherit"
                            size="medium"
                            type="copy-b"
                            renderAs="span"
                        >
                            {title}
                        </Title>
                    </TitleLink>
                ) : (
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
