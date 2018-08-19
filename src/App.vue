<template>
  <div id="app">
    <b-jumbotron fluid></b-jumbotron>

    <b-container>
      <tabs></tabs>
      <router-view id="container"></router-view>
    </b-container>

  </div>
</template>

<script>
  import Tabs from "./components/tabs";

  export default {
    name: 'app',
    components: {Tabs}
  }
</script>

<style lang="scss">
  @import "~bootstrap/scss/bootstrap.scss";

  body {
    background-color: whitesmoke;
  }

  #container {
    background-color: white;
    border: 1px solid #dee2e6;
    border-top: none;
  }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
</style>
