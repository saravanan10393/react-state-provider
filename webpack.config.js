module.exports = {
  context: __dirname+"/src",
  entry: "./store.provider.js",
  output: {
    path: __dirname+"/dist",
    filename: "store.provider.js",
    library: "store.provider",
    libraryTarget: "amd"
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