import AngleRight from 'components/base/icons/AngleRight';
import Copy from 'components/typography/Copy';
import Link, { LinkProps } from 'components/typography/Link';
import React from 'react';
import styled from 'styled-components';
import { getColors as color, spacings } from 'utils/styles';
import StatusFormatter from '../../utils/statusFormatter';
import ExclamationMark from '../base/icons/ExclamationMark';

const View = styled.div<{ isInverted?: boolean }>`
    position: relative;
    border: 1px solid
        ${({ theme, isInverted }) =>
            isInverted
                ? color(theme).new.primary.inverted
                : color(theme).new.primary.default};
    background: ${({ theme, isInverted }) =>
        isInverted
            ? color(theme).new.elementBg.dark
            : color(theme).new.elementBg.light};
    color: ${({ theme, isInverted }) =>
        isInverted
            ? color(theme).new.primary.inverted
            : color(theme).new.primary.default};

    padding: ${spacings.nudge * 3}px;

    text-align: left;
    width: 100%;

    display: flex;
    flex-direction: row;
    align-items: flex-start;
    cursor: pointer;

    transition: all ease-in-out 0.2s;

    & > * + * {
        margin-left: ${spacings.nudge * 3}px;
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
`;

const ViewLink = styled(Link)`
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: 0;
`;

const Icon = styled.div``;

const Content = styled.div`
    & > * + * {
        margin-top: ${spacings.nudge / 2}px;
    }
`;

const Title = styled(Copy)`
    display: inline-block;
`;

const LabelIcon = styled.span`
    display: inline-block;
    margin-left: ${spacings.nudge * 3}px;
`;

const DefaultIcon = styled(AngleRight)`
    && {
        margin-bottom: -3px;
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
}

const Alert: React.FC<AlertProps> = ({
    isInverted,
    title,
    date,
    description,
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

    return (
        <View isInverted={isInverted}>
            <Icon>
                <ExclamationMark />
            </Icon>
            <Content>
                {title && (
                    <Title textColor="inherit" size="medium" type="copy-b">
                        {title}
                        {title && (
                            <LabelIcon>
                                <DefaultIcon />
                            </LabelIcon>
                        )}
                    </Title>
                )}
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
            <ViewLink {...link} ariaLabel={link?.href ? title : undefined} />
        </View>
    );
};

export default Alert;
