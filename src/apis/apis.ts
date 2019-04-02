interface Apis {
  [propertyName: string]: any
}
const apis: Apis = {
  hellow: {
    development: "a.json",
    "test:pc": "http://100.73.39.18/fundmarket/front/fundInfo/detail"
  }
};

export default apis;
