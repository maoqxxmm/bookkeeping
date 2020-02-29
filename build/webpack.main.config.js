const path = require("path");

module.exports = env => {
  return {
    mode: env,
    entry: {
      main: path.resolve(__dirname, "../src/background/main.ts")
    },
    output: {
      filename: "main.js",
      path: path.resolve(__dirname, "../dist")
    },
    resolve: {
      modules: [path.resolve(__dirname, "../src"), "node_modules"],
      extensions: [".ts", ".js", ".json"]
    },
    module: {
      rules: [
        {
          test: /\.ts/,
          exclude: /node_modules/,
          loader: "ts-loader"
        }
      ]
    },
    target: "electron-main"
  };
};
