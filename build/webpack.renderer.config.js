const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = env => {
  return {
    mode: env,
    entry: [
      require.resolve("react-dev-utils/webpackHotDevClient"),
      path.resolve(__dirname, "../src/app/index.tsx")
    ],
    output: {
      filename: "static/js/bundle.js",
      path: undefined,
      pathinfo: true
    },

    devtool: "source-map",

    resolve: {
      extensions: [".ts", ".tsx", ".js", ".json"]
    },

    module: {
      rules: [
        {
          test: /\.tsx?$/,
          exclude: /node_modules/,
          use: ["ts-loader"]
        },
        { enforce: "pre", test: /\.ts$/, loader: "source-map-loader" },
        {
          test: /\.scss$/,
          use: [
            "style-loader",
            {
              loader: "css-loader",
              options: {
                modules: "global"
              }
            }, // 将 CSS 转化成 CommonJS 模块
            "sass-loader" // 将 Sass 编译成 CSS，默认使用 Node Sass
          ]
        },
        {
          test: /\.css$/,
          use: [
            "style-loader",
            "css-loader" // 将 CSS 转化成 CommonJS 模块
          ]
        }
      ]
    },

    plugins: [
      new MiniCssExtractPlugin(),
      new HtmlWebpackPlugin(
        Object.assign(
          {},
          {
            inject: true,
            template: path.resolve(__dirname, "../public/index.html")
          }
        )
      )
    ],

    devServer: {
      contentBase: path.join(__dirname, "../public"),
      watchContentBase: true,
      publicPath: "/",
      compress: true,
      hot: true,
      transportMode: "ws",
      injectClient: false
    },

    target: "electron-renderer"
  };
};
