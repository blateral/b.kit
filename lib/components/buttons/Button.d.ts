import * as React from 'react';
interface Props {
    type?: 'default' | 'ghost';
    isInverted?: boolean;
    isDisabled?: boolean;
    onClick?: () => void;
    className?: string;
}
declare type BtnProps = Props & {
    as?: 'button';
};
declare type LinkProps = Props & {
    as?: 'a';
    href?: string;
    isExternal?: boolean;
};
declare const _default: {
    View: React.FC<BtnProps | LinkProps>;
    Label: import("styled-components").StyledComponent<"span", import("styled-components").DefaultTheme, {}, never>;
    Icon: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {
        color?: string | undefined;
    }, never>;
};
export default _default;
//# sourceMappingURL=Button.d.ts.map