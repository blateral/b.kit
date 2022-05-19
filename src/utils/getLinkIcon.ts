import { DefaultTheme } from 'styled-components';
import { getGlobals as global } from 'utils/styles';

export const getLinkIcon = (
    theme: DefaultTheme,
    href: string,
    isInverted?: boolean
): string => {
    const linkIcons = global(theme).icons.linkIcons;

    const fileExtension = `.${href?.split('.').pop() || ''}`;
    const result = linkIcons.find((icon) => {
        return icon.patterns?.find((pattern) => pattern.match(fileExtension));
    });

    return result?.iconChar || result?.iconUrl?.(isInverted) || '';
};
