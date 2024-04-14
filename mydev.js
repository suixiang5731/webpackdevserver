const express = require("express")
const webpackDevMiddleWare = require("webpack-dev-middleware")
const webpack = require("webpack")
const config = require("./webpack.config")
const dist = webpack(config)
const app = express()
app.use(webpackDevMiddleWare(dist))
app.listen(2003)