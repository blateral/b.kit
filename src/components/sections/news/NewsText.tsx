import Section from 'components/base/Section';
import Copy from 'components/typography/Copy';
import * as React from 'react';
import styled from 'styled-components';
import { spacings } from 'utils/styles';
import Wrapper from '../../base/Wrapper';

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

const NewsText: React.FC<{ text: string }> = ({ text }) => {
    return (
        <Section>
            <Wrapper clampWidth="small" addWhitespace>
                {text && <ContentBlock type="copy" innerHTML={text} />}
            </Wrapper>
        </Section>
    );
};

export default NewsText;
