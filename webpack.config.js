var CopyWebpackPlugin = require('copy-webpack-plugin');
var path = require('path');

module.exports = {
	entry: './src/index.js',
	output: {
		path: './bin',
		filename: 'app.bundle.js'
	},
	devServer: {
		inline: true
	},
	module: {

		loaders: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel',
				include: __dirname,
				query: {presets: ['es2015', 'react']}
			}
		]
	},

	plugins: [
		new CopyWebpackPlugin([
			{
				from: './src/index.html',
				to: './index.html'
			}
		])
	]
};
