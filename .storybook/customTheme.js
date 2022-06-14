import { create } from '@storybook/theming/create';
import { version } from '../package.json';

import brandLogo from '../public/images/Kit_Logo.svg';

export default create({
    base: 'light',
    brandTitle: `b.kit ${version}`,
    brandUrl: 'https://www.blateral.com/',
    brandImage: brandLogo,
});
