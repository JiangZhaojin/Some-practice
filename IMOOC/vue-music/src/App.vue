<template>
  <h1>Hello {{ name }}</h1>
</template>

<script type="text/ecmascript-6">
export default {
  data () {
    return {
      name: 'Vue.js'
    }
  }
}
</script>

<style lang="stylus">
h1
  color green 
</style>