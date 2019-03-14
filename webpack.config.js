const path =require('path')
const webpack =require('webpack')//启用热更新第二步
const htmlWebpackPlugin=require('html-webpack-plugin')
module.exports={
    entry: path.join(__dirname,'./src/main.js'),//入口
    output: {
        path :path.join(__dirname,'./dist'),//指定打包好的文件放到哪个目录
        filename: 'bundle.js'//指定文件输出名称
    },
    devServer:{ //配置devServer命令行参数的第二种形式
        open: true,
        port: 3000,
        contentBase:'src',
        hot: true //启用热更新的第一步
    },
    plugins:[
         new webpack.HotModuleReplacementPlugin(),//启用热更新的第三步
         new htmlWebpackPlugin({//创建在内存中生成html页面的插件
            template:path.join(__dirname,'./src/index.html'),//根据页面路径生成内存中的页面
            filename:'index.html'
         })
    ],
    module:{//此节点用于第三方模块加载
        rules:[//匹配规则
            { test:/\.css$/,use:['style-loader','css-loader']},
            { test:/\.less$/,use:['style-loader','css-loader','less-loader']},
            { test:/\.scss$/,use:['style-loader','css-loader','sass-loader']},
            { test:/\.(jpg|png|gif|bmp|jpeg)$/,use:'url-loader?limit=194477&name=[hash:8]-[name].[ext]'},
            { test:/\.(ttf|eot|svg|woff|woff2)$/,use:'url-loader'},
            { test:/\.js$/,use:'babel-loader',exclude:/node_modules/},
            { test:/\.vue$/,use:'vue-loader'},
        ]
    },
    // resolve:{
    //     alias:{
    //        // "vue$":"vue/dist/vue.js"
    //     }
    // }
}