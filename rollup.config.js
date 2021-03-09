import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import typescript from 'rollup-plugin-typescript2';
import ttypescript from 'ttypescript';
import { terser } from 'rollup-plugin-terser';

import packageJson from './package.json';

export default {
    input: './src/index.ts',
    output: [
        {
            dir: packageJson.main,
            format: 'cjs',
            sourcemap: true,
        },
        {
            dir: packageJson.module,
            format: 'esm',
            sourcemap: true,
        },
    ],
    plugins: [
        peerDepsExternal(),
        resolve(),
        commonjs(),
        typescript({
            typescript: ttypescript,
            tsconfigOverride: {
                exclude: ['src/stories'],
            },
        }),
        terser(),
    ],
};
