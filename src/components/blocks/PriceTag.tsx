import { spacings, getColors, getGlobalSettings as global } from 'utils/styles';
import React from 'react';
import styled from 'styled-components';
import Copy from 'components/typography/Copy';
import Actions from './Actions';
import Callout from 'components/typography/Callout';

const View = styled.div<{
    isInverted?: boolean;
    hasBg?: boolean;
    isHighlighted?: boolean;
}>`
    padding: ${spacings.spacer * 2}px;

    border: 1px solid transparent;
    border-radius: ${({ theme }) => global(theme).sections.edgeRadius};

    background: ${({ theme, hasBg, isInverted, isHighlighted }) =>
        isInverted
            ? isHighlighted
                ? getColors(theme).light
                : getColors(theme).mono.light
            : hasBg
            ? isHighlighted
                ? getColors(theme).primary.dark
                : getColors(theme).light
            : isHighlighted
            ? getColors(theme).primary.dark
            : getColors(theme).mono.light};

    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    & > * + * {
        margin-top: 20px;
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
    isHighlighted?: boolean;
}

const PriceTag: React.FC<PriceTagProps & { className?: string }> = ({
    superTitle,
    title,
    text,
    action,
    isInverted,
    isHighlighted,
    hasBackground,
    className,
}) => {
    const inverted = isHighlighted && !isInverted;
    return (
        <View
            isInverted={isInverted}
            isHighlighted={isHighlighted}
            hasBg={hasBackground}
            className={className}
        >
            {superTitle && (
                <div>
                    <Copy
                        type="copy-b"
                        size="big"
                        isInverted={inverted}
                        innerHTML={superTitle}
                        data-sheet="superTitle"
                    />
                </div>
            )}
            {title && (
                <div>
                    <Callout
                        size="big"
                        isInverted={inverted}
                        innerHTML={title}
                        data-sheet="title"
                    />
                </div>
            )}
            {text && (
                <Copy
                    size="medium"
                    isInverted={inverted}
                    innerHTML={text}
                    data-sheet="desc"
                />
            )}
            <StyledActions
                primary={
                    action && action(inverted || (isInverted && !isHighlighted))
                }
            />
        </View>
    );
};

export default PriceTag;
