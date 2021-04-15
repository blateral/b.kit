import { create } from '@storybook/theming/create';
import { version } from '../package.json';

export default create({
    base: 'light',
    brandTitle: `B.Kit v${version}`,
    brandUrl: 'https://www.blateral.com/',
    // brandImage: 'https://placehold.it/350x150',
});
