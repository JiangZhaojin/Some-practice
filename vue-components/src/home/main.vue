<template>
  <div class="hello">
    <h1 class="title">Vue Components List</h1>
    <div class="component-wrap">
      <div class="list-title">1.Tag组件</div>
      <el-tag :closable="true">标签</el-tag>
    </div>
  </div>
</template>

<script>
import ElTag from '../components/tag';
export default {
  components: {
    ElTag
  },
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.title {
  text-align: center;
}
</style>
