const webpack = require('webpack');

const config = {
    devtool: 'sourcemap',
    context: __dirname+'/src',
    entry: {
        app: './app.jsx',
        vendor: [
            'whatwg-fetch'
        ]
    },
    output: {
        path: __dirname,
        filename: '../resources/static/build/[name].js'
    },
    resolve:{
        modules: [
            "node_modules"
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify(process.env.NODE_ENV || "dev")
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
                            presets: ['latest', 'react'],
                            plugins: ['transform-object-rest-spread']
                        }
                    }
                ]
            },
            {
                test: /.js?$/,
                use:[
                    {
                        loader: "babel-loader",
                        options: {
                            presets: ['latest'],
                            plugins: ['transform-object-rest-spread']
                        }
                    }
                ]
            }
        ]
    }
};


module.exports = config;