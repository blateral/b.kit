import { NavItem } from 'components/sections/navigation/menu/Menu';

/**
 * Get current navigation item
 * @param items Array of navItems
 * @param includeHidden Include items that are hidden for menu
 * @returns The current navItem
 */
export const getCurrentNavItem = (
    items?: NavItem[],
    includeHidden?: boolean
) => {
    if (!items || items.length === 0) return null;

    const findCurrent = (item?: NavItem): NavItem | null => {
        if (!item) return null;
        if (item.isCurrent && (includeHidden || !item.hideFromMenu)) {
            return item;
        }
        if (item.subItems && item.subItems.length > 0) {
            for (let i = 0; i < item.subItems.length; i++) {
                const result = findCurrent(item.subItems[i]);
                if (result) return result;
            }
        }
        return null;
    };

    for (let i = 0; i < items.length; i++) {
        const result = findCurrent(items[i]);
        if (result) {
            return {
                current: result,
                root: items[i],
                rootIndex: i,
            };
        }
    }
    return null;
};

/**
 * Get naviation item path to current navItem
 * @param items Navigation array with navItems
 * @param exludeHrefs navItems with specific hrefs that should be excluded
 * @returns Array of NavItems
 */
export const getCurrentNavPath = (
    items?: NavItem[],
    exludeHrefs?: string[]
) => {
    if (!items || items.length === 0) return [];
    const excludes = exludeHrefs || [];

    const isItemValid = (item: NavItem) => {
        return item.link?.href && !excludes.includes(item.link.href);
    };

    const getPathToCurrent = (item: NavItem): NavItem[] => {
        if (item.isCurrent && isItemValid(item)) return [item];
        if (!item.subItems) return [];

        for (let i = 0; i < item.subItems.length; i++) {
            const subPath = getPathToCurrent(item.subItems[i]);
            if (subPath.length > 0) return [item, ...subPath];
        }

        return [];
    };

    for (let i = 0; i < items.length; i++) {
        const path = getPathToCurrent(items[i]);
        if (path.length > 0) return [...path];
    }

    return [];
};
