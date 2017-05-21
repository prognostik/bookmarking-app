var path = require('path');
var UglifyJSPlugin = require('uglifyjs-webpack-plugin');

// need multiple config objects for multiple file output paths
// @see http://stackoverflow.com/questions/35903246/how-to-create-multiple-output-paths-in-webpack-config

module.exports = [{
	entry: {
		app: './client/js/app.js',
		'libs.min': './client/js/libs.js',
		'libs2.min': './client/js/libs2.js',
		'test': './client/test/test.spec.js'
	},

	output: {
		filename: '[name].js',
		path: path.resolve(__dirname, 'public')
	},

	plugins: [
		new UglifyJSPlugin({
			include: [/libs.min.js$/, /libs2.min.js$/],
			minimize: true
		})
	],

	module: {
		rules: [
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader']
			},

			{
				test: /\.html$/,
				loader: 'ngtemplate-loader/!html-loader'
			}
		]
	}
},


{
	entry: {
		'test': './client/test/test.spec.js'
	},

	output: {
		filename: '[name].js',
		path: path.resolve(__dirname, 'client/test')
	}
}

];




