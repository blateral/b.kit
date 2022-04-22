import BarBreadcrumbs, { getCurrentNavPath as getPath } from './BarBreadCrumbs';
import BarColumn from './BarColumn';
import BarLogo from './BarLogo';
import BarMenuToggle from './BarMenuToggle';
import BarNavList from './BarNavList';

export const utils = {
    getCurrentNavPath: getPath,
};

export default {
    Col: BarColumn,
    Logo: BarLogo,
    Toggle: BarMenuToggle,
    NavList: BarNavList,
    Breadcrumbs: BarBreadcrumbs,
};
