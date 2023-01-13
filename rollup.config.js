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
        hooks: './src/hooks.ts',
    },
    output: [
        {
            dir: 'lib/cjs',
            format: 'cjs',
            name: 'bkit',
            sourcemap: true,
            plugins: [terser()],
        },
        {
            dir: 'lib/esm',
            format: 'esm',
            sourcemap: true,
        },
    ],
    plugins: [
        del({ targets: 'lib' }),
        peerDepsExternal(),
        commonjs(),
        resolve(),
        typescript({
            typescript: ttypescript,
            useTsconfigDeclarationDir: true,
            tsconfigOverride: {
                exclude: ['src/stories', 'src/tests'],
            },
        }),
        babel({
            babelHelpers: 'bundled',
            extensions: [...DEFAULT_EXTENSIONS, '.ts', '.tsx'],
        }),
    ],
};
