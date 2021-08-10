import * as React from 'react';
import styled, { ThemeContext } from 'styled-components';

import Section, { mapToBgMode } from 'components/base/Section';
import Actions from 'components/blocks/Actions';
import Copy from 'components/typography/Copy';
import Wrapper from 'components/base/Wrapper';
import { getColors as color, spacings, withRange } from 'utils/styles';
import { useContext } from 'react';

const ContentBlock = styled(Copy)<{
    clampText?: boolean;
    isCentered?: boolean;
}>`
    display: block;
    margin: ${({ isCentered }) => isCentered && '0 auto'};
    max-width: ${({ clampText }) =>
        clampText && (19 / 28) * spacings.wrapperSmall + 'px'};

    :not(:first-child) {
        padding-top: ${spacings.nudge * 5}px;
    }
`;

const StyledActions = styled(Actions)`
    ${withRange([spacings.spacer, spacings.spacer * 2], 'margin-top')};
`;

const NewsText: React.FC<{
    text: string;
    primaryAction?: (isInverted?: boolean) => React.ReactNode;
    secondaryAction?: (isInverted?: boolean) => React.ReactNode;

    bgMode?: 'full' | 'inverted';
}> = ({ text, primaryAction, secondaryAction, bgMode }) => {
    const theme = useContext(ThemeContext);
    const isInverted = bgMode === 'inverted';
    const hasBg = bgMode === 'full';
    return (
        <Section
            addSeperation
            bgColor={
                isInverted
                    ? color(theme).dark
                    : hasBg
                    ? color(theme).mono.light
                    : 'transparent'
            }
            bgMode={mapToBgMode(bgMode)}
        >
            <Wrapper clampWidth="small" addWhitespace>
                {text && (
                    <ContentBlock
                        isInverted={isInverted}
                        type="copy"
                        innerHTML={text}
                    />
                )}
                {(primaryAction || secondaryAction) && (
                    <StyledActions
                        primary={primaryAction && primaryAction(isInverted)}
                        secondary={
                            secondaryAction && secondaryAction(isInverted)
                        }
                    />
                )}
            </Wrapper>
        </Section>
    );
};

export default NewsText;
