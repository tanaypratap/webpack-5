const path = require("path");

const webpackConfig = {
    entry: {
        filename: "index.js",
        path: path.resolve(__dirname, "src")
    },
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist")
    }
}