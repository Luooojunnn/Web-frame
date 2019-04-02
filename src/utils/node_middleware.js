/* eslint-disable no-console */
/**
 * PC联调代理服务
 * TODO: 解决端口写死问题
 */
const http = require("http");
const url = require("url");
const fs = require('fs');

/**
 * 本地代理服务类
 */
class MidServer {
  constructor() {
    return http.createServer();
  }
  on(method = "", cb = () => {}) {
    this.on(method, cb)
  }
  listen(port = 51322, cb = () => {}) {
    this.listen(port, cb)
  }
}


/**
 * 本地客户端代理类
 */
class ClientRequsst {
  constructor(options, cb) {
    let result = ''
    const c = http.request({
      ...options,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      method: "post"
    });
    c.on("response", res => {
      res.on("data", chunk => (result += chunk.toString()));
      res.on("end", () => (cb(result)));
    });
    c.write(
      fs.readFileSync("./test:pc").toString()
    );
    c.end();
  }
}


/**
 * 实例化，启动代理服务
 */
const midServer = new MidServer()
midServer.on("request", (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "OPTIONS,GET,POST,PUT,DELETE");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin,X-Requested-With,Content-Type,Accept,Authorization,x-xsrf-token"
  );
  res.setHeader(
    "content-type",
    "application/json; application/x-www-form-urlencoded; charset=utf-8; image/png;"
  );

  if (
    req.method === "OPTIONS" ||
    url.parse(req.url).pathname === "/favicon.ico"
  ) {
    res.end();
  } else {
    new ClientRequsst(
      {
        hostname: url.parse(req.url).query.split("=")[1],
        path: url.parse(req.url).path.split("?")[0]
      },
      rr => {
        res.write(rr);
        res.end();
      }
    );
  }
})
midServer.listen(51322, () => console.log("中间服务起在51322端口上了"))
