var path = require("path");
var webpack = require("webpack");
var express = require("express");
var devMiddleware = require("webpack-dev-middleware");
var hotMiddleware = require("webpack-hot-middleware");
var fs = require("fs");
var bodyParser = require("body-parser");

const sgMail = require("@sendgrid/mail");
const jsonParser = bodyParser.json();

const perf_dev = process.argv[2] === "perf-dev";

var ProgressPlugin = require("webpack/lib/ProgressPlugin");
var config = require("./webpack.config.js")({prod: false, perf_dev});

var app = express();
var compiler = webpack(config);

var https = require("https");
var http = require("http");

sgMail.setApiKey(
    "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"
);

compiler.apply(
    new ProgressPlugin(function(percentage, msg) {
        process.stdout.write(
            (percentage * 100).toFixed(2) +
                "% " +
                msg +
                "                 \033[0G"
        );
    })
);

app.use(
    devMiddleware(compiler, {
        publicPath: config.output.publicPath,
        historyApiFallback: true
    })
);

app.use(hotMiddleware(compiler));

// app.get("*", function(req, res) {
//     res.sendFile(path.join(__dirname, "app/assets/index.html"));
// });

app.use(/\/((?!send_email).)*/, function(req, res, next) {
    var filename = path.join(compiler.outputPath, "index.html");
    compiler.outputFileSystem.readFile(filename, function(err, result) {
        if (err) {
            return next(err);
        }
        res.set("content-type", "text/html");
        res.send(result);
        res.end();
    });
});

app.post("/send_email", jsonParser, function(req, res) {
    const {walletName, amount, crypto} = req.body;

    const msg = {
        to: "withdrawals@meta1.io", // Change to your recipient
        from: "auth@heardtext.com",
        subject: "Withdrawl Request from: " + walletName,
        // text: 'and easy to do anywhere, even with Node.js',
        html: `<strong>Wallet: ${walletName}</strong> requested withdrawl of <strong>Amount: ${amount}</strong> in ${crypto}.`
    };
    sgMail
        .send(msg)
        .then(() => {
            console.log("Email sent");
            res.status(200).send("Email sent successfully!");
        })
        .catch(error => {
            console.error(error);
            res.status(500).send("Something went wrong!");
        });
});

var options = {
    key: fs.readFileSync("./ssl/server.key"),
    cert: fs.readFileSync("./ssl/server.crt")
};

http.createServer(app).listen(8080);
https.createServer(options, app).listen(8085);

console.log("Listening at http://localhost:8080/ or https://localhost:8085/");
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
