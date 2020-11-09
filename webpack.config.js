const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const HtmlWebpackTagsPlugin = require("html-webpack-tags-plugin");

module.exports = {
	mode: "development",
	entry: "./src/index.js",
	output: {
		filename: "bundle.js",
		path: path.resolve(__dirname, "dist"),
	},
	// Helps makes it easier to track down errors when code has been bundled
	devtool: "inline-source-map",
	plugins: [
		new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
		new HtmlWebpackPlugin({
			title: "GitHub Jobs",
			template: "./src/template/index.html",
			meta: {
				viewport: "width=device-width, initial-scale=1, shrink-to-fit=no",
			},
		}),
		new HtmlWebpackTagsPlugin({ append: true }),
	],

	module: {
		rules: [
			{
				test: /\.(scss)$/,
				use: [
					"style-loader", // Inject style into DOM
					"css-loader", // 2. turn css into commonJs
					"sass-loader", //1. turns scss to css
				],
			},
			{
				test: /\.(png|jpe?g|gif|svg|eot|woff2|woff|ttf)$/i,
				use: [
					{
						loader: "file-loader",
						options: {
							outputPath: "images",
						},
					},
				],
			},
		],
	},
	devServer: {
		contentBase: path.join(__dirname, "dist"),
		compress: true,
		port: 9000,
	},
};
