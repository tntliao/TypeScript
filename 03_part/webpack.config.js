//引入一个包
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
//webpack中的所有的配置选项都应该写在module.exports中
module.exports = {

    //指定入口文件
    entry: "./src/index.ts",

    //指定打包文件所在目录
    output: {
        //指定打包文件的目录
        path: path.resolve(__dirname, 'dist'),
        //打包后的文件
        filename: 'bundle.js',

        // 告诉webpack不要使用箭头函数
        environment: {
            arrowFunction: false
        }
    },

    //指定webpack打包时要使用的模块
    module: {
        //指定规则
        rules: [
            {
                //test指定的是规则生效文件
                test: /\.ts$/,
                //要使用的loader
                use: [
                    {
                        // 2.执行babel-loader
                        loader: 'babel-loader',
                        options: {
                            presets: [
                                [
                                    // 指定预定义的环境
                                    "@babel/preset-env",
                                    // 配置信息
                                    {
                                        // 要兼容的目标
                                        targets: {
                                            "chrome": "48",
                                            "ie": "11",
                                        },
                                        // 指定corejs版本
                                        "corejs": "3",
                                        // 使用corejs的方法 "usage" 表示按需加载
                                        "useBuiltIns": "usage"
                                    }
                                ]
                            ]
                        }

                    },
                    //1.先执行ts-loader
                    'ts-loader'
                ],
                //要排除的文件
                exclude: /node-modules/
            },
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            // titel: 'liaoJiaJia ' //自定义title
            template: './src/index.html'
        }),
    ],

    mode: 'production',

    //用来设置引入模块
    resolve: {
        extensions: ['.ts', '.js']
    }
}