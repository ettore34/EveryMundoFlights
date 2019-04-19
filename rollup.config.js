import nodeResolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import buble from 'rollup-plugin-buble';
import uglify from 'rollup-plugin-uglify';
import serve from 'rollup-plugin-serve';
import livereload from 'rollup-plugin-livereload';

const isProd = process.env.PROD === 'true';
const isDev = process.env.DEV === 'true';

const config = {
    input: './src/index.js',
    output: {
        file: './web/bundle.js',
        format: 'iife',
        sourcemap: isDev
    },
    plugins: [
        nodeResolve(),
        commonjs(),
        buble(),

        // Production-only Plugins
        isProd && uglify.uglify(),

        // Development-only Plugins
        isDev && serve('web')
        // isDev && livereload('web')
    ]
};

export default config;