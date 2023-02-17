import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import typescript from 'rollup-plugin-typescript2';
import ttypescript from 'ttypescript';
import { terser } from 'rollup-plugin-terser';
import { babel } from '@rollup/plugin-babel';
import del from 'rollup-plugin-delete';
import { DEFAULT_EXTENSIONS } from '@babel/core';

// import packageJson from './package.json';

export default {
    input: {
        index: './src/index.ts',
        base: './src/base.ts',
        hooks: './src/hooks.ts',
        sections: './src/sections.ts',
        sections_news: './src/sections_news.ts',
        footer: './src/footer.ts',
        icons: './src/icons.ts',
        blocks: './src/blocks.ts',
        cookies: './src/cookies.ts',
        navigation: './src/navigation.ts',
        typography: './src/typography.ts',
        fields: './src/fields.ts',
        buttons: './src/buttons.ts',
    },
    output: [
        {
            dir: 'cjs',
            format: 'cjs',
            name: 'bkit',
            sourcemap: true,
            plugins: [terser()],
        },
        {
            dir: 'esm',
            format: 'esm',
            sourcemap: true,
        },
    ],
    plugins: [
        del({ targets: ['types', 'esm', 'cjs'] }),
        peerDepsExternal(),
        commonjs(),
        resolve(),
        typescript({
            typescript: ttypescript,
            useTsconfigDeclarationDir: true,
            tsconfigOverride: {
                exclude: ['src/stories', 'src/tests'],
                sourceRoot: '/types/',
            },
        }),
        babel({
            babelHelpers: 'bundled',
            extensions: [...DEFAULT_EXTENSIONS, '.ts', '.tsx'],
        }),
    ],
};
