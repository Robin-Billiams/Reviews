var path = require('path');

module.exports = {
  entry: "./react-client/src/index.jsx",
  output: {
    path: path.resolve(__dirname, "./react-client/dist"),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
            query: {
              presets: ["@babel/preset-react"]
            }
        }
      }
    ]
  }
};