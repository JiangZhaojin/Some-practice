<template>
  <div class="hello">
    <h1 class="title">Vue Components List</h1>
    <div class="component-wrap">
      <div class="list-title">1.Tag组件</div>
      <el-tag :closable="true">标签</el-tag>
      <div class="list-title">2.popover组件</div>
      <popover 
        trigger="hover"
        placement="bottom">
        这是一个悬浮
        <button class="reference-div" slot="reference">我有一个悬浮</button>
      </popover>
    </div>
  </div>
</template>

<script>

import ElTag from '../components/tag';
import Popover from '../components/popover/';

export default {
  components: {
    ElTag,
    Popover
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
