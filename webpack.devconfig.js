const base = require("./webpack.baseconfig")
const merge = require("webpack-merge").merge
const webpack = require("webpack")
const devConf = {
    mode: "development",
    // 开发模式一般设置这个 eval-cheap-source-map  生产模式直接关掉 none
    devtool: "eval-cheap-source-map",
    devServer: {
        // 端口
        port: 1000,
        // 是否开启热更新，hot为true开启热更新但是不会强制刷新页面
        hot: true,
        proxy: [
            {
                context: ['/'],
                target: 'http://localhost:3000',
                // 路径重写，以 ‘/num1’ 开头的路径自动转到 '/api/getNum1'
                pathRewrite: {
                    '^/num1': '/api/getNum1'
                },
                // 请求头配置
                headers: {}
            }
        ]
    },
    plugins: [
        /*使用该插件可以 为业务代码提供变量，业务代码中直接使用
        baseURL即可，例如 console.log(baseURL)*/
        new webpack.DefinePlugin({
            baseURL: "www.xxx.com"
        })
    ]
}
// 使用 webpack-merge 的 merge方法 合并基础配置和开发环境配置
module.exports=merge(base, devConf)
/*最后在 package.json 中的scripts 添加使用的脚本 ：
"dev": "webpack-dev-server --config ./webpack.devconfig.js"  本地开发运行命令*/
