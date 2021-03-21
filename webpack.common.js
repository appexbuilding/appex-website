const webpack = require("webpack");
const path = require("path");

const CopyWebpackPlugin = require("copy-webpack-plugin");
const AssetsPlugin = require("assets-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",

  entry: {
    cms: path.join(__dirname, "src", "scripts", "cms.js"),
    main: path.join(__dirname, "src", "index.ts"),
  },

  output: {
    filename: "[name].js",
    path: path.join(__dirname, "dist"),
  },

  resolve: {
    alias: {
      "@modules": path.join(__dirname, "site/layouts/partials/modules"),
      "@scripts": path.join(__dirname, "src/scripts"),
    },
    extensions: [
      ".tsx",
      ".ts",
      ".js"
    ]
  },

  module: {
    rules: [
      {
        test: /\.txt$/,
        use: "raw-loader",
      },

      {
        test: /\.(jpe?g|png|gif|svg)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "images/",
              publicPath: "images/",
            },
          },
        ],
      },
      {test: /\.json$/, loader: "json-loader"},
      {
        test: /\.(woff|woff2|ttf|otf)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "fonts/",
              publicPath: "fonts/",
            },
          },
        ],
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              sourceMap: true,
            },
          },
          {
            loader: "postcss-loader",
            options: {
              sourceMap: true,
            },
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: true,
            },
          },
          {
            loader: "webpack-import-glob-loader",
          },
        ],
      },
      {
        test: /\.ts(x)?$/,
        loader: "ts-loader",
        exclude: /node_modules/
      }
      // {
      //   test: /\.(js|jsx)$/,
      //   exclude: /node_modules/,
      //   use: [
      //     {
      //       loader: "babel-loader",
      //       query: {cacheDirectory: true},
      //     },
      //     {
      //       loader: "webpack-import-glob-loader",
      //     },
      //   ],
      // },
    ],
  },
  plugins: [
    //new CleanWebpackPlugin(['dist']),
    //
    // new webpack.ProvidePlugin({
    //   fetch: "imports-loader?this=>global!exports-loader?global.fetch!whatwg-fetch"
    // }),

    new AssetsPlugin({
      filename: "webpack.json",
      path: path.join(process.cwd(), "site/data"),
      prettyPrint: true,
    }),
    new CopyWebpackPlugin([
      {
        from: "./src/fonts/",
        to: "fonts/",
        flatten: true,
      },
    ]),
    new HtmlWebpackPlugin({
      filename: "admin/index.html",
      template: "src/cms.html",
      inject: false,
    }),
  ],
};
