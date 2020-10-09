const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { mode } = require('../../../trivago_v2/webpack.config');

module.exports = {
	mode: 'development',
	entry: './index.js',
	output: {
		filename: 'index.build.js',
		path: path.resolve(__dirname, './dist')
	},
	plugins: [
		new HTMLWebpackPlugin({
			template: './index.html',
			filename: 'index.html',
			inject: 'true'
		}),
		new MiniCssExtractPlugin({
			filename: 'style.css'
		}),
	],
	module: {
		rules: [
			{
				test: /\.scss$/i,
				use: [
					{
						loader: MiniCssExtractPlugin.loader,
						options: {},
					},
					'css-loader',
					'sass-loader'
				]
			},
		]
	}
}