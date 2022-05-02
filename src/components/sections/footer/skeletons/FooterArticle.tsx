import React, { FC } from 'react';
import styled from 'styled-components';
import { spacings } from 'utils/styles';

import Copy from 'components/typography/Copy';

const View = styled.div`
    & > * + * {
        margin-top: ${spacings.nudge * 2}px;
    }
`;

const FooterArticle: FC<{
    isInverted?: boolean;
    title?: string;
    text?: string;
    action?: (props: { isInverted?: boolean }) => React.ReactNode;
    className?: string;
}> = ({ isInverted, title, text, action, className }) => {
    return (
        <View className={className}>
            {title && <Copy type="copy-b">{title}</Copy>}
            {text && <Copy size="small" innerHTML={text} />}
            {action && action({ isInverted })}
        </View>
    );
};

export default FooterArticle;
