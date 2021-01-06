const path = require('path')

const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    mode: 'development',
    entry: 'src/index.js',
    output: {
        file: './bundle.js',
        path: path.join(__dirname, '/public')
    },
    devServer: {
        contentBase: './public',
        port: 8080,
        open: false,
    },
    resolve: {
        extensions: ['.js', '.jsx', '.json']
    },
    extensions: [
        new MiniCssExtractPlugin({
            filename: './style.css'
        })
    ],
    module: {
        rules: [
            {
                test: /\.js[x]?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                options: {
                    presets: [
                        '@babel/preset-env',
                        '@babel/preset-react'
                    ]
                }
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader'
                ]
            }
        ]
    }
}