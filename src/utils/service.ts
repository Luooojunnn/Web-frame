// import { apis } from "@/apis/apis";
/**
 * service 文件处理网络请求，目前想法是:
 * 1. 如果是 dev 环境，走本地 mock 数据
 * 2. 如果是 test:pc 环境，将请求打到本地 node 服务上，由 node 服务转发请求到后端，将返回发给前端，解决在浏览器联调的时候的跨域问题
 */
import despatch from '@/apis/despatch';

const axios = require("axios");

axios.interceptors.request.use(
  function(config: any) {
    config.url = despatch(config.url)
    console.log(config.url)
    return config;
  },
  function(error: any) {
    // 对请求错误做些什么
    return Promise.reject(error);
  }
);

const Http = {
  get(...params: any[]) {
    return axios.get(
      params[0],
      {
        params: params[1]
      },
      params[2]
    );
  },
  post(...params: any[]) {
    return axios.post(params[0], params[1], params[2]);
  }
};

export default Http;
