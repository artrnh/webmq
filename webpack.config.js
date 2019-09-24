const {resolve} = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');

const isProd = process.env.NODE_ENV === 'production';

const config = {
    mode: isProd ? 'production' : 'development',
    entry: {
        index: './src/core/index.tsx'
    },
    output: {
        path: resolve(__dirname, 'build'),
        filename: '[name].js'
    },
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        alias: {
            assets: resolve(__dirname, 'src/assets/'),
            utils: resolve(__dirname, 'src/utils/'),
            stores: resolve(__dirname, 'src/stores/'),
            components: resolve(__dirname, 'src/components/'),
            screens: resolve(__dirname, 'src/screens/'),
            services: resolve(__dirname, 'src/services/'),
            theme: resolve(__dirname, 'src/theme/')
        }
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'babel-loader',
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/core/index.html'
        })
    ]
};

if (isProd) {
    config.optimization = {
        minimizer: [new TerserWebpackPlugin()]
    };
} else {
    config.devServer = {
        port: 3000,
        open: true,
        hot: true,
        compress: true,
        stats: 'errors-only',
        overlay: true,
        historyApiFallback: true
    };
}

module.exports = config;
