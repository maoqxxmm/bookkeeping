const path = require("path");

module.exports = env => {
  return {
    mode: env,
    entry: {
      main: path.resolve(__dirname, "../main.js")
    },
    output: {
      filename: "main.js",
      path: path.resolve(__dirname, "../dist")
    },
    target: "electron-main"
  };
};
