const path = require('path');
const nodeExternals = require('webpack-node-externals')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
	entry: {
		server: './server.ts',
		handler: './src/handler.ts'
	},
	resolve: {
		extensions: ['.ts', '.js', '.json', '.mjs'],
		symlinks: false,
		cacheWithContext: false
	},
	output: {
		path: path.join(__dirname, '.build'),
		filename: '[name].js'
	},
	target: 'node',
	externals: [nodeExternals()],
	module: {
		rules: [
			{
				test: /\.(tsx?)$/,
				use: ['ts-loader'],
				exclude: [
					path.resolve(__dirname, 'node_modules'),
					path.resolve(__dirname, '.serverless'),
					path.resolve(__dirname, '.build')
				]
			}
		]
	},
	plugins: [
		new CleanWebpackPlugin()
	]

};
