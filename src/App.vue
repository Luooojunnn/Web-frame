<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
  </div>
</template>

<script lang="ts">
import { Component,  } from "vue-property-decorator";
import HelloWorld from "./components/HelloWorld.vue";
import ExtendVue  from '@/extendVue/extendVue';

@Component({
  components: {
    HelloWorld
  }
})
export default class App extends ExtendVue {}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
