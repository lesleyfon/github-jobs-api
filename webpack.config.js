const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const HtmlWebpackTagsPlugin = require("html-webpack-tags-plugin");

const webpack = require("webpack");

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
		// new CleanWebpackPlugin(['dist/*']) for < v2 versions of CleanWebpackPlugin
		// new CleanWebpackPlugin(),
		new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
		new HtmlWebpackPlugin({
			title: "GitHub Jobs",
			template: "./src/template/index.html",
			meta: {
				viewport: "width=device-width, initial-scale=1, shrink-to-fit=no",
			},
		}),
		new HtmlWebpackTagsPlugin({ tags: ["sass/main.css"], append: true }),
	],

	module: {
		rules: [
			{
				test: /\.(scss)$/,
				use: [
					{
						// Adds CSS to the DOM by injecting a `<style>` tag
						loader: "style-loader",
					},
					{
						// Interprets `@import` and `url()` like `import/require()` and will resolve them
						loader: "css-loader",
					},
					{
						loader: "resolve-url-loader",
						// options: {...}
					},
					{
						// Loads a SASS/SCSS file and compiles it to CSS
						loader: "sass-loader",
						options: {
							// Include the path to Vanilla
							includePaths: ["./node_modules"],
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
