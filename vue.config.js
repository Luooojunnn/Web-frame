// vue.config.js
const path = require('path')
const fs = require('fs')
const url = require('url')

console.log(process.env.NODE_ENV);
let env = {
  dev: "development",
  "test:pc": "test:pc"
};
let config = {};

if (process.env.NODE_ENV === env.dev) {
  config = {
    devServer: {
      before: function(app, server) {
        app.post("*", function(req, res) {
          console.log(url.parse(req.url))
          let fStream = fs.readFileSync(path.join(__dirname, 'src/apis/mock', 'a.json'))
          res.json(JSON.parse(fStream.toString()))
        });
        app.get("*.json", function(req, res) {
          console.log("--------------");
          res.json({ custom: "response" });
        });
      }
    }
  };
} else if (process.env.NODE_ENV === env["test:pc"]) {
  console.log("联调pc环境");
}

module.exports = config
