/**
 * Created by admin on 2017/3/27.
 */
const path=require('path');
const webpack=require('webpack');
const autoprefixer = require('autoprefixer');
const  ROOT_PATH=path.resolve(__dirname);
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const extractCSS = new ExtractTextPlugin({
    /*同一入口文件中使用不同类型样式，必须区分filename，否则按plugins中提取顺序会进行样式覆盖*/
    filename: 'css/[name].[contenthash].style.css',
    ignoreOrder: true
});
const extractLESS = new ExtractTextPlugin({
    filename: 'css/[name].[contenthash].style.css',
    ignoreOrder: true
});
const extractSASS = new ExtractTextPlugin({
    filename: 'css/[name].[contenthash].style.css',
    ignoreOrder: true
});
module.exports = function (options) {
    const  APP_PATH=path.resolve(ROOT_PATH,options.app);
    const  LIB_PATH=path.resolve(ROOT_PATH,"src/libs");
    return {
        entry: {
            first:  APP_PATH+"/index.js",
            second: APP_PATH+"/index2.js",
            //3rd party libraries
            vendor: [LIB_PATH+"/vue.js"]
        },
        output: {
            path: path.resolve(ROOT_PATH, options.build),
            filename: 'js/[name].bundle.js'
        },
        resolve: {
            extensions: ['.js', '.vue'],
            alias: {
                'Vue': 'vue/dist/vue.js'
            }
        },
        module: {
            rules: [
                {
                    test: /\.vue$/,
                    loader:'vue-loader',
                },
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: ['latest']
                        }
                    }
                },
                {
                    test: /\.css$/,
                    use: extractCSS.extract({
                        fallback: "style-loader",
                        use: ["css-loader", "postcss-loader"]
                    })
                },
                {
                    test: /\.scss$/,
                    use: extractSASS.extract({
                            fallback: "style-loader",
                            use: ['css-loader', 'postcss-loader', 'sass-loader']
                    })
                },
                {
                    test: /\.less$/i,
                    use: extractLESS.extract({
                            fallback: "style-loader",
                            use: ['css-loader', 'postcss-loader', 'less-loader']
                    })
                }
            ]
        },
        plugins: [
            new HtmlWebpackPlugin({
                title: "my demo",
                template: "src/index.html"
            }),
            new webpack.optimize.CommonsChunkPlugin({
                name: "vendor",
                filename: "libs/[name].js"
            }),
            extractCSS,
            extractSASS,
            extractLESS,
            new webpack.LoaderOptionsPlugin({options: {postcss: [autoprefixer]}}),
        ],
    }
};