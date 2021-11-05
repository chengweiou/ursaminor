<template>
  <div class="f-c" style="height: 100%;">
    <div class="df df-column" style="height: 100%;">
      <proj-header style="position: fixed;" />
      <div style="margin-top: 60px; flex: 1 0 auto;">
        <router-view name="full"/>
      </div>
      <proj-footer style="flex: 0 0 auto;"/>
    </div>
    <fail-box/>
  </div>
</template>

<script setup>
// tip: 导入 component
import FailBox from '@/component/failBox/index.vue'
import ProjHeader from '@/component/nav/projHeader.vue'
import ProjFooter from '@/component/nav/projFooter.vue'
// tip: 导入 data
// tip: 定义 各种 use
// tip: 定义 页面
// tip: 定义 不需要关联的
// tip: 定义 需要关联的
// tip: 定义 computed 计算的
// tip: 定义 方法
// tip: 初始化空数据
</script>


<script>
export default {
  name: 'App',
}
</script>
