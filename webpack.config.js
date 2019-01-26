const webpack = require('webpack');
const path = require('path');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

function isProd() {
    return process.env.NODE_ENV === 'production';
}

module.exports = {
    entry: ['babel-polyfill', './src/index.tsx'],
    devtool: 'cheap-source-map',
    output: {
        filename: 'm2fc.js',
        path: path.resolve(__dirname, 'view/frontend/web/dist'),
        publicPath: '/',
        chunkFilename: 'm2fc-[chunkhash:4].js',
    },
    optimization: {
        runtimeChunk: {
            name: 'main',
        },
    },
    watchOptions: {
        poll: 1000,
        ignored: ['node_modules'],
    },
    module: {
        rules: [
            {
                test: /\.(ts|js)x?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.(gif|png|jpe?g)$/i,
                use: [
                    {
                        loader: 'image-trace-loader',
                    },
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[hash:4].[ext]',
                            limit: 8192,
                        },
                    },
                ],
            },
            {
                test: /\.(svg)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: '[hash:4].[ext]',
                    },
                },
            },
            {
                test: /\.css/,
                use: [
                    !isProd() ? 'style-loader' : MiniCssExtractPlugin.loader, // creates style nodes from JS strings
                    'css-loader',
                ],
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
        alias: {
            '~': path.join(__dirname, '/src/'),
        },
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {},
        }),
        new ForkTsCheckerWebpackPlugin(),
        new CleanWebpackPlugin(['view/frontend/web/dist'], { watch: false }),
    ],
};
