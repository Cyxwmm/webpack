const express = require('express');
const webpack = require('webpack')
const config = require('./webpack.config');
const webpacDevMiddleware = require('webpack-dev-middleware');
const compiler = webpack(config);

const app = express();

app.use(webpacDevMiddleware(compiler, {
    publicPath: config.output.publicPath
}))

app.listen(3000, () => {
    console.log('server is running')
})