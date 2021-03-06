var path = require('path');
var HtmlWebpackPlugin =  require('html-webpack-plugin');

module.exports = {
    devServer: {
        proxy: {
            '/': 'http://localhost:3000'
        }
    },
    entry : './client/index.js',
    output : {
        path : path.resolve(__dirname , 'build'),
        filename: 'bundle.js'
    },
    module : {
        rules : [
            {test : /\.(js)$/, use:'babel-loader'},
            {test : /\.css$/, use:['style-loader', 'css-loader']}
        ]
    },
    mode:'development',
    plugins : [
        new HtmlWebpackPlugin ({
            template : 'client/index.html'
        })
    ]

}