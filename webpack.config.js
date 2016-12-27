const webpack = require('webpack');
const path = require('path');

module.exports = {
    entry: { 
        'render/main': __dirname + '/src/render/main.js'
    },
    output: {
        path: "dist/",
        filename: "[name].js" 
    },
    module: {
        loaders: [{
    		test: /\.js$/,
    		exclude: /(node_modules|bower_components)/,
    		loader: 'babel',
    		query: {
    		     presets: ['react', 'es2015', 'stage-0'] 
        	}
        }],
        plugins: [
            new webpack.ExternalsPlugin('commonjs', [
                'desktop-capturer',
                'electron',
                'ipc',
                'ipc-renderer',
                'native-image',
                'remote',
                'web-frame',
                'clipboard',
                'crash-reporter',
                'screen',
                'shell'
            ])
        ]
    },
    target: "electron"	
};
