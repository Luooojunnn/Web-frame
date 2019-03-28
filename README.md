# financial-market-h5




### 关于请求：
```
axios经过封装挂载在vue的原型上，使用网络请求的地方直接调 this.$http.request(api, opeions) 即可，其中
 - 第一个参数是 api 地址
 - 第二个参数是配置信息，默认的 method 是 'post' 请求，如需 'get' 请求，配置为 
    {
        method: 'GET'
    }，
  携带的额外参数放在date属性下，如
    {
        data: {
            a: 1,
            b: 'age'
        }
    }
```