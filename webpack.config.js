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
            }
        ]
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    }
}