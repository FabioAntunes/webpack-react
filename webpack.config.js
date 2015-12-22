var path = require('path');


module.exports = {
    entry: [
        'webpack/hot/dev-server',
        'webpack-dev-server/client?http://localhost:8080',
        path.resolve(__dirname, 'lib/app/main.js')
    ],
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js',
    },
    module: {
    loaders: [
        {
            test: /\.js$/,
            loader: 'babel',
            query: {
                // https://github.com/babel/babel-loader#options
                cacheDirectory: true,
                presets: ['es2015', 'stage-2']
            }
        }
    ],
    },
};
