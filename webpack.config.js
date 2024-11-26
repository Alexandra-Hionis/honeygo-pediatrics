const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: "./assets/js/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.css$/, // Handle CSS files
        use: [
          MiniCssExtractPlugin.loader, // Extracts CSS to a separate file
          "css-loader", // Resolves CSS imports
        ],
      },
      {
        test: /\.scss$/, // Handle SCSS files
        use: [
          MiniCssExtractPlugin.loader, // Extracts SCSS/CSS to a separate file
          "css-loader", // Resolves CSS imports
          "sass-loader", // Compiles Sass to CSS
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "styles.css",
    }),
  ],
  mode: "development",
};
