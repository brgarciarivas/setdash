var webpack = require('webpack')
var path = require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var mainPath = path.resolve(__dirname, 'src', 'index.jsx');
var buildPath = path.resolve(__dirname, 'public');

module.exports = {
	devtool: 'source-map',
	entry: {
		setdash: mainPath
	},
	output:{
		path: buildPath,
		filename: 'setdash-bundle.js',
		publicPath: '/public'
	},
	resolve:{
		extensions: ['', '.jsx', '.js', '.css'],
		moduleDirectories: ['node_modules']
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: 'src/index.html',
			inject: 'body'
		}),
		new webpack.ProvidePlugin({
			'Promise': 'es6-promise',
			'fetch': 'imports?this=>global!exports?global.fetch!whatwg-fetch'
		}),
		new webpack.DefinePlugin({
			'process.env': {NODE_ENV: '"production"'}
		}),
		new ExtractTextPlugin('setdash.css')
	],
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				loader: 'babel-loader',
				exclude: /node_modules/,
				query: {
					presets: ['es2015', 'react']
				}
			},
			{
				test: /\.json$/,
				loader: 'json-loader',
				exclude: /node_modules/
			},
			{
				test: /\.less$/,
				exclude: /node_modules/,
				loader: ExtractTextPlugin.extract('style', 'css!autoprefixer!less')
			}
		]
	}

};