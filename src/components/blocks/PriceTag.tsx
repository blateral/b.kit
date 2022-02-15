import { spacings, getColors, getGlobals as global } from 'utils/styles';
import React, { forwardRef } from 'react';
import styled from 'styled-components';
import Copy from 'components/typography/Copy';
import Actions from './Actions';
import Callout from 'components/typography/Callout';

const View = styled.div<{
    isInverted?: boolean;
    hasBg?: boolean;
    isHighlighted?: boolean;
}>`
    padding: ${spacings.spacer}px;

    border: 1px solid transparent;
    border-radius: ${({ theme }) => global(theme).sections.edgeRadius};

    background: ${({ theme, hasBg, isInverted, isHighlighted }) =>
        isInverted
            ? isHighlighted
                ? getColors(theme).light
                : getColors(theme).mono.light
            : isHighlighted
            ? getColors(theme).dark
            : hasBg
            ? getColors(theme).light
            : getColors(theme).mono.light};

    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    & > * + * {
        margin-top: 20px;
    }
`;

const StyledActions = styled(Actions)`
    display: block;
    margin-top: auto;
    padding-top: ${spacings.spacer}px;
    text-align: center;
`;

export interface PriceTagProps {
    title?: string;
    superTitle?: string;
    text?: string;
    action?: (props: {
        isInverted?: boolean;
        isHighlighted?: boolean;
    }) => React.ReactNode;
    isInverted?: boolean;
    hasBackground?: boolean;
    isHighlighted?: boolean;
}

const PriceTag = forwardRef<
    HTMLDivElement,
    PriceTagProps & { className?: string }
>(
    (
        {
            superTitle,
            title,
            text,
            action,
            isInverted,
            isHighlighted,
            hasBackground,
            className,
        },
        ref
    ) => {
        const inverted = isHighlighted ? !isInverted : false;

        return (
            <View
                ref={ref}
                isInverted={isInverted}
                isHighlighted={isHighlighted}
                hasBg={hasBackground}
                className={className}
            >
                {superTitle && (
                    <Copy
                        type="copy-b"
                        size="big"
                        isInverted={inverted}
                        innerHTML={superTitle}
                        data-sheet="superTitle"
                    />
                )}
                {title && (
                    <Callout
                        renderAs="div"
                        size="big"
                        isInverted={inverted}
                        innerHTML={title}
                        data-sheet="title"
                    />
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
                        action &&
                        action({
                            isInverted: inverted,
                            isHighlighted: isHighlighted,
                        })
                    }
                />
            </View>
        );
    }
);

PriceTag.displayName = 'PriceTag';

export default PriceTag;
