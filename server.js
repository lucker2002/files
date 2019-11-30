let path = require("path")
let express = require("express")
let webpack = require("webpack")


let webpackDevMiddleware = require("webpack-dev-middleware")
let webpackHotMiddleware = require("webpack-Hot-middleware")
let webpackConfig = require('./webpack.config.js')

let app = express()
let DIST_DIR = path.join(__dirname, "app/assets") // 设置静态访问文件路径
let PORT = 3000 // 设置启动端口
let complier = webpack(webpackConfig)
let devMiddleware = webpackDevMiddleware(complier, {
    hot:true,
    publicPath: webpackConfig.output.publicPath,
    quiet: true //向控制台显示任何内容 
})
let hotMiddleware = webpackHotMiddleware(complier)
app.use(devMiddleware)

app.use(hotMiddleware);


// 这个方法和下边注释的方法作用一样，就是设置访问静态文件的路径
app.use(express.static(DIST_DIR))

// app.get("*", (req, res, next) =>{
//     const filename = path.join(DIST_DIR, 'index.html');

//     complier.outputFileSystem.readFile(filename, (err, result) =>{
//         if(err){
//             return(next(err))
//         }
//         res.set('content-type', 'text/html')
//         res.send(result)
//         res.end()
//     })
// })

app.listen(PORT, function () {
    console.log("成功启动：localhost:" + PORT)
})