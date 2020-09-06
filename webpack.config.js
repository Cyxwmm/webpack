const path = require('path')

module.exports = {
    mode: 'development',
    entry: {
        main: './src/index.js'
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
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    }
}