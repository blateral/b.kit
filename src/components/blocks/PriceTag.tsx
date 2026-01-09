import {
    spacings,
    getColors as color,
    getGlobals as global,
} from 'utils/styles';
import React, { forwardRef, useId } from 'react';
import styled from 'styled-components';
import Copy from 'components/typography/Copy';
import Actions from './Actions';
import Callout from 'components/typography/Callout';

const View = styled.div<{
    isInverted?: boolean;
    isCentered?: boolean;
    hasBg?: boolean;
    isHighlighted?: boolean;
}>`
    padding: ${spacings.spacer}px;

    border: 1px solid transparent;
    border-radius: ${({ theme }) => global(theme).sections.edgeRadius};

    background: ${({ theme, hasBg, isInverted, isHighlighted }) =>
        isInverted
            ? isHighlighted
                ? color(theme).primary.inverted
                : color(theme).elementBg.medium
            : isHighlighted
            ? color(theme).primary.default
            : hasBg
            ? color(theme).elementBg.light
            : color(theme).elementBg.medium};

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    text-align: ${({ isCentered }) => (isCentered ? 'center' : 'left')};

    & > * + * {
        margin-top: ${spacings.nudge * 3}px;
    }
`;

const StyledActions = styled(Actions)`
    display: block;
    margin-top: auto;
    padding-top: ${spacings.spacer}px;
    text-align: center;
`;

export interface PriceTagActionFnProps {
    isInverted?: boolean;
    isHighlighted?: boolean;
    title?: string;
    superTitle?: string;
}

export type PriceTagActionFn = (
    props: PriceTagActionFnProps
) => React.ReactNode;

export interface PriceTagProps {
    renderAs?: 'div' | 'li';
    title?: string;
    superTitle?: string;
    text?: string;
    action?: PriceTagActionFn;
    isInverted?: boolean;
    isCentered?: boolean;
    hasBackground?: boolean;
    isHighlighted?: boolean;
}

const PriceTag = forwardRef<
    HTMLDivElement,
    PriceTagProps & { className?: string }
>(
    (
        {
            renderAs,
            superTitle,
            title,
            text,
            action,
            isInverted,
            isCentered,
            isHighlighted,
            hasBackground,
            className,
        },
        ref
    ) => {
        const id = useId();
        const inverted = isHighlighted ? !isInverted : false;
        const titleId = title ? `price-tag-title-${id}` : undefined;
        const descriptionId = text ? `price-tag-desc-${id}` : undefined;

        return (
            <View
                ref={ref}
                as={renderAs || 'div'}
                isInverted={isInverted}
                isCentered={isCentered}
                isHighlighted={isHighlighted}
                hasBg={hasBackground}
                aria-labelledby={titleId}
                aria-describedby={descriptionId}
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
                        id={titleId}
                        renderAs="div"
                        size="big"
                        isInverted={inverted}
                        innerHTML={title}
                        data-sheet="title"
                    />
                )}
                {text && (
                    <Copy
                        id={descriptionId}
                        size="medium"
                        isInverted={inverted}
                        innerHTML={text}
                        data-sheet="desc"
                    />
                )}
                <StyledActions
                    mode="cover"
                    primary={
                        action &&
                        action({
                            isInverted: inverted,
                            isHighlighted: isHighlighted,
                            title,
                            superTitle,
                        })
                    }
                />
            </View>
        );
    }
);

PriceTag.displayName = 'PriceTag';

export default PriceTag;
