const path = require("path");
const webpack = require("webpack");
const merge = require("webpack-merge");
const tsImportPluginFactory = require("ts-import-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const developmentConfig = require("./build/webpack.development");
const productionConfig = require("./build/webpack.production");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const PATHS = {
  app: path.join(__dirname, "src", "index.tsx"),
  build: "dist"
};

const baseConfig = {
  entry: {
    app: [PATHS.app],
    vendor: ['react', 'react-router-dom', 'redux', 'react-dom', 'react-redux']
  },
  // entry: PATHS.app,
  output: {
    publicPath: "/",
    filename: "[name].[chunkhash:5].js",
    chunkFilename: "[name].[chunkhash:5].bundle.js"
  },
  resolve: {
    alias: {
      actions: path.join(__dirname, "../src/redux/actions"),
      reducers: path.join(__dirname, "../src/redux/reducers")
    },
    extensions: [".ts", ".tsx", ".js", ".jsx", ".json"]
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [
          "babel-loader",
          {
            loader: "ts-loader",
            options: {
              transpileOnly: true,
              getCustomTransformers: () => ({
                before: [
                  tsImportPluginFactory({
                    libraryName: "antd",
                    libraryDirectory: "lib",
                    style: "css"
                  })
                ]
              })
            }
          }
        ]
      },
      {
        test: /\.(jpg|png)$/,
        use: {
          loader: "file-loader",
          options: {
            name: "[path][name].[hash].[ext]"
          }
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "TypeScript版本 - 亦蓁家CRM系统",
      template: path.join(__dirname, "template/index.html")
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css"
    })
  ]
};

module.exports = mode => {
  const config = mode === "production" ? productionConfig : developmentConfig;

  return merge(baseConfig, config, { mode });
};
