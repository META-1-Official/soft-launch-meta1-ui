/* eslint-disable @typescript-eslint/no-var-requires */
const path = require("path");
const webpack = require("webpack");
const express = require("express");
const webpackDevMiddleware = require("webpack-dev-middleware");
const hotMiddleware = require("webpack-hot-middleware");
const fs = require("fs");
require("dotenv").config({path: `.env.${process.env.NODE_ENV}`});

const perf_dev = process.argv[2] === "perf-dev";

const config = require("./webpack.config.js")({prod: false, perf_dev});

const app = express();
const compiler = webpack(config);

const https = require("https");
const http = require("http");

app.use(
  webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath,
  })
);
app.use(require("webpack-hot-middleware")(compiler));

app.use(hotMiddleware(compiler));

// app.get("*", function(req, res) {
//     res.sendFile(path.join(__dirname, "app/assets/index.html"));
// });

app.use("*", function (req, res, next) {
  const filename = path.join(compiler.outputPath, "index.html");
  compiler.outputFileSystem.readFile(filename, function (err, result) {
    if (err) {
      return next(err);
    }
    res.set("content-type", "text/html");
    res.send(result);
    res.end();
  });
});

const options = {
  key: fs.readFileSync("./ssl/server.key"),
  cert: fs.readFileSync("./ssl/server.crt"),
};

http.createServer(app).listen(8090);
https.createServer(options, app).listen(8085);

console.log("Listening at http://localhost:8090/ or https://localhost:8085/");
console.log("!!!!! Env:", process.env.NODE_ENV, process.env.TORUS_PROJECT_ID);
// new WebpackDevServer(compiler, {
//     publicPath: config.output.publicPath,
//     hot: true,
//     historyApiFallback: true,
//     quiet: false,
//     stats: {colors: true},
//     port: 8080
// }).listen(8080, '0.0.0.0', function (err, result) {
//     if (err) {
//         console.log(err);
//     }
//     console.log('Listening at 0.0.0.0:8080');
// });
