/**
 * 分发 api 函数，环境分为：
 * 1. dev
 * 2. test
 * 3. huidu
 * 4. prod
 * 返回对应环境的接口的地址
 */
import apis from "./apis";

/**
 * @param {string} - 接口
 * @return {string} - 对应环境的地址
 */
function despatch(api: string) {
  if (!apis[api]) {
    throw new Error('apis文档中没有找到您所请求的接口！')
  }
  if (process.env.NODE_ENV === 'test:pc') {
    return apis[api][process.env.NODE_ENV].replace(/\/\/(\d+.+?)\//g, "//localhost:"+51322+"/")
  }
  return apis[api][process.env.NODE_ENV]
}

export default despatch;
