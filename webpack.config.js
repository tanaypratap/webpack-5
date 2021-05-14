const path = require("path");

const webpackConfig = {
	entry: path.resolve(__dirname, "src", "index.js"),
    
	output: {
		filename: "main.js",
		path: path.resolve(__dirname, "dist")
	}
};

 module.exports = webpackConfig