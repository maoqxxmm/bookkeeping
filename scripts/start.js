process.env.NODE_ENV = "development";

const electron = require("electron");
const { spawn } = require("child_process");
const webpack = require("webpack");
const WebpackDevServer = require("webpack-dev-server");
const webpackConfig = require("../build/webpack.renderer.config");
const electronConfig = require("../build/webpack.main.config");

const startElectron = () => {
  const config = electronConfig(process.env.NODE_ENV);
  webpack(config).watch(
    {
      aggregateTimeout: 1000
    },
    (err, stats) => {
      if (err) {
        console.log(err);
        return;
      }
    }
  );
  const electronProcess = spawn(electron, ["."]);
  electronProcess.stdout.setEncoding("utf8");
  electronProcess.stdout.on("data", function(data) {
    console.log(data.toString());
  });
  electronProcess.on("close", () => {
    process.exit();
  });
};

const startServer = () => {
  const config = webpackConfig("development");
  const compiler = webpack(config);
  const devServerOptions = {
    ...config.devServer,
    open: false,
    quiet: true,
    stats: {
      colors: true
    }
  };
  const server = new WebpackDevServer(compiler, devServerOptions);
  server.listen("9000", () => {
    console.log("\nStarting server on http://localhost:9000\n");
  });
};

const startUp = () => {
  startServer();
  startElectron();
};

startUp();
