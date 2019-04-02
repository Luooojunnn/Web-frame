// vue.config.js
const path = require("path");
const fs = require("fs");
const url = require("url");

console.log(process.env.NODE_ENV);
let env = {
  dev: "development",
  "test:pc": "test:pc"
};
let config = {};

function readFs(req, res) {
  let fStream = fs.readFileSync(
    path.join(__dirname, "src/apis/mock", url.parse(req.url).pathname)
  );
  res.json(JSON.parse(fStream.toString()));
}
if (process.env.NODE_ENV === env.dev) {
  config = Object.assign({}, config, {
    devServer: {
      before: (app, server) => {
        app.post("*.json", function(req, res) {
          readFs(req, res);
        });
        app.get("*.json", function(req, res) {
          readFs(req, res);
        });
      }
    }
  });
} else if (process.env.NODE_ENV === env["test:pc"]) {
  // config = Object.assign({}, config, {
  //   devServer: {
  //     before: (app, server) => {
  //       app.post('/aa', function(req, res) {
  //         console.log(req)
  //         console.log('=======')
  //       })
  //     }
  //   }
  // })
}

module.exports = config;
