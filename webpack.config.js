
// STYLE LOADERS
let path = require("path");
let root_dir = path.resolve(__dirname);
let webpack = require("webpack");
let isDev = process.env.NODE_ENV == "development";
const HtmlWebpackPlugin = require('html-webpack-plugin');

const { CleanWebpackPlugin } = require('clean-webpack-plugin');
module.exports = {
    devtool: isDev ? 'eval-source-map' : '',
    mode: !isDev ? "production" : "development",
    entry: {
        app: isDev ?
            [
                "react-hot-loader/patch",
                path.resolve(root_dir, "app/main.js")
            ] :
            path.resolve(root_dir, "app/main.js")
    },
    output: {
        publicPath: isDev ?  "/" : "/",
        path: __dirname + "/app/assets",
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /(\.jsx|\.js)$/,
                include: [path.join(root_dir)],
                use: [
                    {
                        loader: "babel-loader",
                        options: {
                            plugins: ["react-hot-loader/babel"]
                        }
                    }
                ]
            },
            {
                test: /\.scss$|\.css$/,
                use: [
                    {
                        loader: "style-loader" // 将 JS 字符串生成为 style 节点
                    },
                    {
                        loader: "css-loader",// 将 CSS 转化成 CommonJS 模块
                        
                    },
                    {
                        loader: "sass-loader" // 将 Sass 编译成 CSS
                    }
                ]
            },
           
            {
                test: /\.html$/,
                loader: 'html-loader'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: path.resolve(root_dir, "app/assets/index.html")
        }),
        new CleanWebpackPlugin({ cleanOnceBeforeBuildPatterns: ['build/*'] }),
        new webpack.HotModuleReplacementPlugin(),
    ],
    resolve: {
        extensions: [".js", ".jsx", ".json"]
    },
};
