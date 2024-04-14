const hWP = require("html-webpack-plugin")
module.exports = {
    mode: "development",

    // 开发模式一般设置这个 eval-cheap-source-map  生产模式直接关掉 none
    devtool: "eval-cheap-source-map",

    entry: {
        app: "./app.js"
    },

    output: {
        path: __dirname + "/dist",
        filename: "[name].[chunkhash:4].bundle.js"
    },
    devServer: {
        // 端口
        port: 1000,
        // 是否开启热更新，hot为true开启热更新但是不会强制刷新页面
        hot: true,

        proxy: [
            // "http://localhost:3000": {
            //     target: "http://localhost:3000"
            // }
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

    module: {
        rules: [
            {
                test: /\.css/,
                use: ["style-loader", "css-loader"]
            }
        ]
    },

    plugins: [
        new hWP({
            filename: "index.html",
            template: "./index.html"
        })
    ]
}