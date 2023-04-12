import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import typescript from 'rollup-plugin-typescript2';
import ttypescript from 'ttypescript';
import { terser } from 'rollup-plugin-terser';
import { babel } from '@rollup/plugin-babel';
import del from 'rollup-plugin-delete';
import { DEFAULT_EXTENSIONS } from '@babel/core';
import { getFiles } from './postbuild.mjs';

/** Rollup main entrypoint **/
export default [
    {
        input: ['./src/index.ts', ...getFiles('./src').map((el) => el.path)],
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
            del({ targets: ['types', 'esm', 'cjs', 'lib'] }),
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
        external: ['react', 'react-dom', 'styled-components'],
    },
];
