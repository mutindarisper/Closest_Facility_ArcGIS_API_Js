const HtmlWebpackPlugin = require('html-webpack-plugin'); //installed via npm

module.exports = {

  entry: {
    main_app: "./src/js/index.js",
    app_css_style: "./src/js/app_css_style.js",
    bootstrap_style: "./src/js/bootstrap_style.js",
  },

  devServer: {
    compress: true,
    hot: false,
    port: 2021
  },
  devtool: 'inline-source-map',

  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'fonts/'
            }
          }
        ]
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin(
      {
        template: 'src/index.html', // template: By default it will use src/index.ejs if it exists.
      }
    )

  ],
};