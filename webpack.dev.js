/**
 * Created by admin on 2017/3/23.
 */
var merge = require('webpack-merge');
const baseConfig = require('./webpack.base');
module.exports = function(env) {
    var options={};
    options.app="app";
    options.build="build";
    options.libs="vue.js";
    return merge(baseConfig(options), {
        devServer: {
            historyApiFallback: true,
            hot: true,
            inline: true
        },
        plugins: [
        ]
    });
};