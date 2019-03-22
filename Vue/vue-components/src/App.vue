<template>
  <div id="app">
    <Overview></Overview>
  </div>
</template>

<script>
import Overview from './home/main.vue'

export default {
  name: 'app',
  components: {
    Overview
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
