module.exports = {
  // what to use for source js file
  entry: ["./src/index.js"],
  // where the bundle will be created
  output: {
    path: __dirname + "/dist",
    publicPath: "/",
    filename: "bundle.js",
  },
  // from where the developer server will run
  devServer: {
    contentBase: "./dist",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["eslint-loader"],
      },
    ],
  },
  // when importing .js and .jsx extensions are optional
  resolve: {
    extensions: [".js", ".jsx"],
  },
};
