const path = require('path');
const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const baseConfig = {
    entry: path.resolve(__dirname, './src/index.js'),
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.(?:ico|gif|png|jpg|jpeg|svg|webp)$/i,
                type: 'asset/resource',
                generator: {
                  filename: 'image/[name].[ext]'
                }
            },
            {
                test: /\.(scss|css)$/i,
                use: [
                  {
                    loader: 'style-loader',
                  }, {
                    loader: 'css-loader',
                  }, {
                    loader: 'resolve-url-loader',
                  }, {
                    loader: 'sass-loader',
                    options: {
                      sourceMap: true,
                    }
                  }
                ],
            },
            {
                test: /\.(?:mp3|wav|ogg|mp4)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.(woff(2)?|eot|ttf|otf)$/i,
                type: 'asset/resource',
                generator: {
                  filename: 'fonts/[name].[ext]'
                },
            },
        ],
    },
    resolve: {
        extensions: ['.js', '.json'],
    },
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, './dist'),
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './src/index.html'),
            filename: './index.html',
        }),
        new MiniCssExtractPlugin({
            filename: './style.css',
        }),
    ],
};

module.exports = ({ mode }) => {
    const isProductionMode = mode === 'prod';
    const envConfig = isProductionMode ? require('./webpack.prod.config') : require('./webpack.dev.config');

    return merge(baseConfig, envConfig);
};