const base = require("./webpack.baseconfig")
const merge = require("webpack-merge").merge
const webpack = require("webpack")
const proConf = {

    mode: "production",
    plugins: [
        // 引用已经打包好的vendor.js
        new webpack.DllReferencePlugin({
           manifest: require(__dirname+"/vendor-manifest.json")
        }),
        /*使用该插件可以 为业务代码提供变量，业务代码中直接使用
        baseURL即可，例如 console.log(baseURL)*/
        new webpack.DefinePlugin({
            baseURL: "www.yyy.com"
        })
    ]
}
// 使用 webpack-merge 的 merge方法 合并基础配置和开发环境配置
module.exports=merge(base, proConf)
/*最后在 package.json 中的scripts 添加使用的脚本 ：
"build": "webpack --config ./webpack.proconfig.js"  打包命令*/


// 另外一种传递参数给 webpack.baseconfig.js 的方式
/**
 *使用--env production 添加打包参数，然后将 webpack.baseconfig.js 中改为function接收env参数
 *     "build": "webpack --config ./webpack.proconfig.js --env production"
 * @param env
 * @returns
 */
/*module.exports=function (env) {
    return merge(base(env), proConf)
}*/
