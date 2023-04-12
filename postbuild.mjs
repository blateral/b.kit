import fs from 'fs';
import path from 'path';

export const getFiles = (dir) => {
    return fs
        .readdirSync(dir)
        .filter(
            (el) =>
                path.extname(el) === '.ts' && path.parse(el).name !== 'index'
        )
        .map((el) => ({ el, path: dir + '/' + el }));
};

// creating package.json's for different entrypoints
function init() {
    const files = getFiles('./src');
    files.forEach((file) => {
        const name = path.parse(file.el).name;

        fs.mkdirSync(`./lib/${name}`, { recursive: true }, (err) => {
            if (err) throw err;
        });

        const packageJson = {
            internal: true,
            main: `../../cjs/${name}.js`,
            'jsnext:main': `../../esm/${name}.js`,
            module: `../../esm/${name}.js`,
            types: `../../types/${name}.d.ts`,
        };

        fs.writeFileSync(
            `./lib/${name}/package.json`,
            JSON.stringify(packageJson, null, 2),
            (err) => {
                if (err) throw err;
            }
        );
    });
}
init();
