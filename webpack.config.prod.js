const merge = require('webpack-merge');
const {BundleAnalyzerPlugin} = require('webpack-bundle-analyzer');
const baseConfig = require('./webpack.config.base.js');


// this is an object merge, so it is the same as Object.assign()...
module.exports = merge(baseConfig, {
    mode: "production",

    plugins: [
        // analyzes the sizes of different components of a bundle and generates a report
        new BundleAnalyzerPlugin({
            // completes the build script execution
            analyzerMode: 'static',
            // decides whether the report is opened after being generated
            openAnalyzer: false,
            reportFilename: 'size_stats.html'

        })
    ],

    // specifying that we will use external links for these
    externals: {
        'react': 'React',
        'react-dom': 'ReactDOM'
    }
});