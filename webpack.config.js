const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const webpackConfig = {
	entry: path.resolve(__dirname, "src", "index.js"),

	output: {
		filename: "[name].[contenthash].bundle.js", //<--- added contenthash
		path: path.resolve(__dirname, "dist"),
		clean: true
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /(node_modules)/,
				use: {
					loader: "babel-loader",
					options: {
						presets: ["@babel/preset-env"]
					}
				}
			},
			{
				test: /\.css$/i,
				use: ["style-loader", "css-loader"]
			},
			{
				test: /\.(png|svg|jpg|jpeg|gif)$/i,
				type: "asset"
			}
		]
	},

	plugins: [
		new HtmlWebpackPlugin({
			title: "vanillaJS app",
			template: path.resolve(__dirname, "src", "index.html")
		})
	],
    //added big package and did code splitting, optimization!!! 
    
    optimization:{
        splitChunks:{
            cacheGroups:{
                node_vendors:{
                    name:"vendor",
                    test: /[\\/]node_modules[\\/]/,
                    chunks:"all",
                    priority:1
                }
            }
        }
    },
    devtool: "inline-source-map",

	mode: "devlopment"
};

module.exports = webpackConfig;