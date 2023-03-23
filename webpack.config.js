const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode:"development",
    entry: {
        index:path.resolve(__dirname,'src/index.js'),
       
    },
    devtool: 'inline-source-map',
    devServer: {
        static:'./dist',
        port:3000,
        open:true,
        compress:true,
        historyApiFallback:true
    },

    plugins:[
        new HtmlWebpackPlugin({
            title:"Development",
            filename:"index.html",
            template:"src/template.html",
        }),
    ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname,'dist'),
        clean:true,
        assetModuleFilename:'[name][ext]'
    },
    optimization:{
        runtimeChunk: 'single',
    },

    module:{
        rules:[
            {
                test: /\.css$/i,
                use: [ 'style-loader','css-loader'],
            },
            {
                test:/\.js/,
                exclude:/node_modules/,
                use:{
                    loader:'babel-loader',
                    options:{
                        presets:['@babel/preset-env']
                    }
                }
            },
            
            {
                test:/\.(png|svg|jpg|jpeg|gif)$/i,
                type:'asset/resource'
            },
            {
                test:/\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
            }
        ],
    },
};