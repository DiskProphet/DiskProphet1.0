<template>
  <div id="app">
    <my-header></my-header>
    <my-modules></my-modules>
    <!-- <div class="main">
       </router-view>
      </div> -->
  </div>
</template>

<script>
  import header from "./components/header/header";
  import someModule from "./components/someModule/someModule";
  export default {
    data() {
      return {};
    },
    components: {
      "my-header": header,
      "my-modules": someModule
    }
  };
</script>

<style>
  #app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
</style>
