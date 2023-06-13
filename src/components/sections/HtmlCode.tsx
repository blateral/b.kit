import { Section, Wrapper } from 'base';
import React from 'react';
import { withLibTheme } from 'utils/LibThemeProvider';

const HtmlCode: React.FC<{ html: string }> = ({ html }) => {
    return (
        <Section>
            <Wrapper>
                <div dangerouslySetInnerHTML={{ __html: html }} />
            </Wrapper>
        </Section>
    );
};

export const HtmlCodeComponent = HtmlCode;
export default withLibTheme(HtmlCode);
