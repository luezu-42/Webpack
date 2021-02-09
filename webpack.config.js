const webpack = require("webpack");
const MiniCss = require("mini-css-extract-plugin");
const modoDev = process.env.NODE_ENV !== "production";
const OptmizeCSS = require("optimize-css-assets-webpack-plugin");

module.exports = {
  mode: modoDev ? "development" : "production",
  entry: "./src/index.js",
  output: {
    filename: "principal.js",
    path: __dirname + "/public",
  },
  plugins: [
    new MiniCss({
      filename: "estilo.css",
    }),
    new OptmizeCSS({}),
  ],
  module: {
    rules: [
      {
        test: /\.s?[ac]ss$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/,
        use: ["file-loader"]
      },
    ],
  },
};
