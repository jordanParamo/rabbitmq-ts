const merge = require('webpack-merge');
const NodemonPlugin = require('nodemon-webpack-plugin');

const common = require('./webpack.config');

const options = {
	nodemon: {
		script: './.build/server.js',
		watch: path.resolve('./dist'),
		ignore: ['*.js.map'],
		ext: 'js,json',
		delay: "2500",
		verbose: true
	}
}

module.exports = merge(common, {
	mode: 'development',
	devtool: 'source-map',
	plugins: [
		new NodemonPlugin(
			Object.assign(
				{},
				options.nodemon
			)
		)
	]
})
