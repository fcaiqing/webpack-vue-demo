/**
 * Created by admin on 2017/3/23.
 */
var merge = require('webpack-merge');
const baseConfig = require('./webpack.base');
var UglifyJsPlugin = require('uglifyjs-webpack-plugin');
module.exports = function(env) {
    var options={};
    options.app="app";
    options.build="build";
    return merge(baseConfig(options), {
        plugins: [
            new UglifyJsPlugin()
        ]
    });
};