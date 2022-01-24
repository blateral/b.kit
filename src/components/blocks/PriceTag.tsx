import { spacings, getColors, getGlobalSettings as global } from 'utils/styles';
import React from 'react';
import styled from 'styled-components';
import Copy from 'components/typography/Copy';
import Actions from './Actions';

const View = styled.div<{ isInverted?: boolean; hasBg?: boolean }>`
    padding: ${spacings.spacer}px;

    border: 1px solid transparent;
    border-radius: ${({ theme }) => global(theme).sections.edgeRadius};

    background: ${({ theme, isInverted, hasBg }) =>
        isInverted
            ? getColors(theme).primary.dark
            : hasBg
            ? getColors(theme).light
            : getColors(theme).mono.light};

    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    & > * + * {
        margin-top: ${spacings.spacer}px;
    }
`;

const StyledActions = styled(Actions)`
    margin-top: auto;
    padding: 0 ${spacings.spacer}px;
`;

export interface PriceTagProps {
    title?: string;
    superTitle?: string;
    text?: string;
    action?: (isInverted?: boolean) => React.ReactNode;
    isInverted?: boolean;
    hasBackground?: boolean;
}

const PriceTag: React.FC<PriceTagProps & { className?: string }> = ({
    superTitle,
    title,
    text,
    action,
    isInverted,
    hasBackground,
    className,
}) => {
    return (
        <View
            isInverted={isInverted}
            hasBg={hasBackground}
            className={className}
        >
            {superTitle && (
                <Copy
                    type="copy-b"
                    isInverted={isInverted}
                    innerHTML={superTitle}
                    data-sheet="superTitle"
                />
            )}
            {title && (
                <Copy
                    type="copy-b"
                    size="big"
                    isInverted={isInverted}
                    innerHTML={title}
                    data-sheet="title"
                />
            )}
            {text && (
                <Copy
                    size="small"
                    isInverted={isInverted}
                    innerHTML={text}
                    data-sheet="desc"
                />
            )}
            <StyledActions primary={action && action(isInverted)} />
        </View>
    );
};

export default PriceTag;
