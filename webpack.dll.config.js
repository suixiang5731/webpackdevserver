const webpack = require("webpack")
module.exports = {
    mode: "production",
    entry: {
        // 需要提前打包的库
        vendor: [
            "axios",
            "lodash"
        ]
    },
    output: {
        path: __dirname+"/dist",
        filename: "[name].dll.js",
        library: "[name]_library"
    },

    plugins: [
        new webpack.DllPlugin({
            // 生成一个json用来通知webpack已经打包完成，在webpack.proconfig.js 中使用这个json
            path: __dirname+"/[name]-manifest.json",
            name: "[name]_library", // 必须跟上面的library配置一致
            context: __dirname
        })
    ]
}