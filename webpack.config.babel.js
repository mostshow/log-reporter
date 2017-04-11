
import path from 'path'
import webpack from 'webpack'

export default{
    entry: {
        logReport:'./index.js'
    },
    output: {
        path: path.join(__dirname, '/dist'),
        publicPath: '/',
        filename: '[name].js'
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production')
            }
        }),
        new webpack.optimize.UglifyJsPlugin()
    ],
    module: {
        loaders:[
            {
                test: /\.js$/,
                include: [
                    path.join(__dirname, 'client')
                ] ,
                loaders: [   ]
            }
        ]
    },
    resolve: {
        extensions: ['.js' ]
    }

};

