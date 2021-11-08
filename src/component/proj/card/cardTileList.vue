<template>
<el-card class="center pointer card" style="" @click="go(e)">
  {{e}}
</el-card>
</template>

<script setup>
// tip: 导入 component
// tip: 导入 data
import { ref, computed } from 'vue'
import { useStore } from 'vuex'
import { useRouter, useRoute } from 'vue-router'
// tip: 定义 各种 use
const store = useStore(), router = useRouter(), route = useRoute()
// tip: 定义 页面
defineProps({
  e: { type: String, required: true },
})
// tip: 定义 不需要关联的
// tip: 定义 需要关联的
// tip: 定义 computed 计算的
// tip: 定义 方法
const go = (v) => {
  store.dispatch('flow/init', store.state[v].map)
  router.push({ name: 'detail' })
}
// tip: 初始化空数据
</script>

<style scoped>
.card {
  margin: 0 10px 10px 0;
  min-width: 200px;
}
.card:hover {
  background: #141852;
}
</style>
