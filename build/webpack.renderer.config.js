const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = env => {
  return {
    mode: env,
    entry: [
      require.resolve("react-dev-utils/webpackHotDevClient"),
      path.resolve(__dirname, "../src/index.tsx")
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
        { test: /\.tsx?$/, loader: "ts-loader" },
        { enforce: "pre", test: /\.ts$/, loader: "source-map-loader" }
      ]
    },

    plugins: [
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
