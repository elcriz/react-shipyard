const webpack = require('webpack');
const path = require('path');
const autoprefixer = require('autoprefixer');

const isProduction = process.env.NODE_ENV === 'production';

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    context: path.resolve(__dirname, 'src'),
    entry: ['./index.js', './scss/main.scss'],
    output: {
        path: path.resolve(__dirname, 'lib'),
        filename: 'index.js',
        library: ['react-shipyard'],
        libraryTarget: 'umd',
        publicPath: '/lib/',
        globalObject: `typeof self !== 'undefined' ? self : this` // eslint-disable-line quotes
    },
    devtool: 'source-map',
    mode: isProduction ? 'production' : 'development',
    module: {
        rules: [
            {
                test: /\.s?[ac]ss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    { loader: 'css-loader', options: { url: false, sourceMap: true } },
                    { loader: 'sass-loader', options: { sourceMap: true } }
                ],
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            },
            {
                test: /\.(ttf|eot|woff(2)?)(\?[a-z0-9=&.]+)?$/,
                use: ['file-loader']
            },
            {
                test: /\.svg$/,
                use: ['file-loader']
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx', '.scss']
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'es/css/[name].css'
        }),
        new webpack.LoaderOptionsPlugin({
            options: {
                context: __dirname,
                postcss: [autoprefixer]
            }
        }),
        new CopyPlugin([
            {
                from: 'scss/',
                to: 'es/scss/'
            }
        ])
    ]
};
