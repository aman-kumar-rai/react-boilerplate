const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    entry: './src/index.js',
    output: {
        // this requires an absolute path...
        path: path.resolve(__dirname, 'dist'),
        filename: 'app.bundle.js'
    },
    
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                options: {
                    presets: [
                        '@babel/preset-env',
                        '@babel/preset-react'
                    ],
                    plugins: [
                        '@babel/plugin-proposal-class-properties',
                        'react-hot-loader/babel'
                    ]
                }
            }, 
            {
                test: /\.css$/,
                // css-loader: allows webpack to handle/parse css...
                // style-loader: injects the style into markup...
                use: [
                    'style-loader',
                    'css-loader'
                ],
                exclude: /node_modules/
            }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ]

}