import  ExtendVue  from '@/extendVue/extendVue';
import App from "./App.vue";

ExtendVue.config.productionTip = false;

new ExtendVue({
  render: h => h(App)
}).$mount("#app");
