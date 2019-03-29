/**
 * 将所有全局需要自定义的东西挂载在这里
 */
import Vue from "vue";

import $Http from '@/utils/service'

export default class ExtendVue extends Vue {
  $get(...params: any[]){
    return $Http.get(...params)
  }
  $post(...params: any[]) {
    return $Http.post(...params)
  }
  $GET(...params: any[]) {
    return $Http.get(...params)
  }
  $POST(...params: any[]) {
    return $Http.post(...params)
  }
}