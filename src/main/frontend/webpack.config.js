const packajeJSON = require('./package.json');
const webpack = require('webpack');

module.exports = {
    context: __dirname,
    entry: './sell/app.js',
    output: {
        path: '../resources/static/build/',
        filename: 'app.js'
    }
};