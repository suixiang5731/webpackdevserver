const base = require("./webpack.baseconfig")
const merge = require("webpack-merge").merge
const proConf = {
    mode: "production"
    // 开发模式一般设置这个 eval-cheap-source-map  生产模式直接关掉 none
    // devtool: "eval-cheap-source-map",
    /*devServer: {
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
    },*/
}
// 使用 webpack-merge 的 merge方法 合并基础配置和开发环境配置
module.exports=merge(base, proConf)
/*最后在 package.json 中的scripts 添加使用的脚本 ：
"build": "webpack --config ./webpack.proconfig.js"  打包命令*/
