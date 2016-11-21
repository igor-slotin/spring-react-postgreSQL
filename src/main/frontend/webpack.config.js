const webpack = require('webpack');

const config = {
    devtool: 'sourcemap',
    context: __dirname+'/src',
    entry: './app.jsx',
    output: {
        path: __dirname,
        filename: '../resources/static/build/app.js'
    },
    resolve:{
        modules: [
            "node_modules"
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
            }
        })
    ],
    module: {
        rules: [
            {
                test: /.jsx?$/,
                use:[
                    {
                        loader: "babel-loader",
                        options: {
                            presets: ['es2015', 'react']
                        }
                    }
                ]
            },
            {
                test: /.js?$/,
                use:[
                    {
                        loader: "babel-loader"
                    }
                ]
            }
        ]
    }
};


module.exports = config;