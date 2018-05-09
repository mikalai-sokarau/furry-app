const path = require('path');

module.exports = {
  entry: './app/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist')
  },
  resolve: {
    modules: [path.resolve(__dirname, 'app'), 'node_modules']
  },
  mode: 'none',
  module: {
    rules: [
      {
        test: /\.html$/,
        loader: 'ngtemplate-loader?relativeTo=' + (path.resolve(__dirname, './app')) + '/!html-loader'
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader'
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          'file-loader'
        ]
      }
    ]
  },
}