import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import typescript from 'rollup-plugin-typescript2';
import ttypescript from 'ttypescript';
import { terser } from 'rollup-plugin-terser';
import { babel } from '@rollup/plugin-babel';
import del from 'rollup-plugin-delete';

import packageJson from './package.json';

export default {
    input: './src/index.ts',
    output: [
        {
            file: packageJson.main,
            format: 'cjs',
            sourcemap: true,
        },
        {
            file: packageJson.module,
            format: 'esm',
            sourcemap: true,
        },
    ],
    plugins: [
        del({ targets: 'lib' }),
        peerDepsExternal(),
        resolve(),
        commonjs(),
        typescript({
            typescript: ttypescript,
            tsconfigOverride: {
                exclude: ['src/stories'],
            },
        }),
        babel({ babelHelpers: 'bundled' }),
        terser(),
    ],
};
