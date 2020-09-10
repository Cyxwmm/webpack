const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack')

module.exports = {
    mode: 'development',
    // development cheap-module-eval-source-map
    // production cheap-module-source-map
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        contentBase: './dist',
        open: true,
        hot: true,
        hotOnly: true
    },
    entry: {
        main: './src/index.js',
    },
    module: {
        rules: [
            {
                test: /\.(png|jpe?(g)|gif)$/i,
                use: {
                    loader: 'url-loader',
                    options: {
                        //placeholder 占位符
                        name: '[name]_[hash].[ext]',
                        outputPath: 'image',
                        limit: 2048
                    }
                }
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)$/i,
                use: {
                    loader: 'file-loader',
                    options: {
                        outputPath: 'font'
                    }
                }
            },
            {
                test: /\.css$/,
                loader: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                    },
                    'sass-loader',
                    'postcss-loader'
                ]
            }
        ]
    },
    plugins: [new HtmlWebpackPlugin({
        template: 'src/index.html'
    }), new CleanWebpackPlugin(), new webpack.HotModuleReplacementPlugin()],
    output: {
        // publicPath: 'https://cdn.com',
        publicPath: '/',
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    }
}