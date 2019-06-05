const path = require("path");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const cssnano = require("cssnano");

module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
        ]
      },
      {
        test: /\.css$/,
        include: /node_modules/,
        use: [MiniCssExtractPlugin.loader, "css-loader"]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    // 分离CSS
    new MiniCssExtractPlugin({
      filename: "./assets/style/[name].[contenthash:5].css"
    }),
    // 压缩CSS
    new OptimizeCSSAssetsPlugin({
      cssProcessor: cssnano,
      cssProcessorOptions: {
        discardComments: {
          removeAll: true
        },
        safe: true
      },
      canPrint: false
    })
  ],
  optimization: {
    minimizer: [new TerserPlugin({ sourceMap: false })],
    splitChunks: {  // 分割代码块
      cacheGroups: {  // 缓存组
        commons: {  // 公共的模块
          test: /[\\/]node_modules[\\/]/,
          name: "vendor",
          chunks: "initial",
          enforce: true
        },
        antd: {
          name: "antd",
          test: /[\\/]node_modules\/antd[\\/]/,
          priority: 20,
          chunks: "all"
        },
      }
    },
    runtimeChunk: {
      name: "manifest"
    }
  }
}