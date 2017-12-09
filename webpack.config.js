module.exports = {
  context: __dirname+"/src",
  entry: "./state.provider.js",
  output: {
    path: __dirname+"/dist",
    filename: "state.provider.js",
    libraryTarget: "umd"
  },
  devtool: "#cheap-source-map",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['babel-preset-env'],
            plugins: ['transform-class-properties']
          }
        }
      }
    ]
  }
}