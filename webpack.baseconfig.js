const hWP = require("html-webpack-plugin")
const miniCssExtractPlugin = require("mini-css-extract-plugin")
// process.env.NODE_ENV 的值来自于 package.json 中脚本命令中的设置：
/*
cross-env NODE_ENV=production  和 cross-env NODE_ENV=development
    "build": "cross-env NODE_ENV=production webpack --config ./webpack.proconfig.js",
    "dev": "cross-env NODE_ENV=development webpack-dev-server --config ./webpack.devconfig.js"
 */
console.log(process.env.NODE_ENV)
// 判断是否生产模式，按需引入插件 ， 一个技巧 ：编程式配置
let pluginArr = [
    new hWP({
        filename: "index.html",
        template: "./index.html"
    })
]
function hasMiniCss() {
    if (process.env.NODE_ENV === "production") {
        pluginArr.push(new miniCssExtractPlugin({
            filename: "test.bundle.css"
        }))
    }
}
hasMiniCss()
module.exports = {

    entry: {
        app: "./app.js"
    },

    output: {
        path: __dirname + "/dist",
        filename: "[name].[chunkhash:4].bundle.js"
    },

    module: {
        rules: [
            {
                test: /\.css/,
                use: [
                    process.env.NODE_ENV === "production"? miniCssExtractPlugin.loader:"style-loader",
                    "css-loader"]
            }
        ]
    },

    plugins: pluginArr
}