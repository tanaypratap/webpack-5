const path = require("path");

const webpackConfig = {
	entry: path.resolve(__dirname, "src", "index.js"),

	output: {
		filename: "main.js",
		path: path.resolve(__dirname, "dist")
	},
    //added babel to webpack know have .concat instead of arrow func in main.js
    module:{
        rules: [
            {
            test: /\.js$/,
            exclude: /(node_modules)/,
            use: {
                loader:"babel-loader",
                options:{
                    presets: ["@babel/preset-env"]
                }
            }
        },
        //telling webpack to test css as of now it don't know css
            {
                test: /\.css$/i,
                use:["style-loader", "css-loader"]
            },
            //adding svg to webpack 
            {
                test:/\.(png|svg|jpg|jpeg|gif)$/i,
                type: "asset" 
            }
        ]
    },
    mode: "production",
};

module.exports = webpackConfig;