
const hWP = require("html-webpack-plugin")
const miniCssExtractPlugin = require("mini-css-extract-plugin")
// 另外一种获取环境变量的方式
/** 注意，该方式并不常用
 * 将 module.exports 的返回结果封装成一个函数
 * @param env
 * @returns {}
 * */
module.exports=function (env) {
    console.log(env)
    let pluginArr = [
        new hWP({
            filename: "index.html",
            template: "./index.html"
        })
    ]
    function hasMiniCss() {
        if (env === "production") {
            pluginArr.push(new miniCssExtractPlugin({
                filename: "test.bundle.css"
            }))
        }
    }
    hasMiniCss()
    return {

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
                        env === "production"? miniCssExtractPlugin.loader:"style-loader",
                        "css-loader"]
                }
            ]
        },

        plugins: pluginArr
    }
}