const path = require("path");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const config = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "build"),
  },
  mode: "development",
  module: {
    rules: [
      { use: "babel-loader", test: /\.js$/ },
      {
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
        test: /\.css$/i,
      },
    ],
  },
  plugins: [new MiniCssExtractPlugin({filename: 'style.css'})],
};

module.exports = config;
