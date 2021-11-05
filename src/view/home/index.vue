<template>
  <div class="center df-column" style="margin-left: 10px;">
    <div class="center" style="margin-bottom: 20px;" >模块列表</div>
    <div class="df df-wrap" style="width: 100%;">
      <section v-for="(e, i) in moduleList" :key="i" class="center card" style="margin-right: 10px; margin-bottom: 10px; width: 200px; height: 50px; border-radius: 10px;" @click="go(e)">{{e}}</section>
    </div>
  </div>
</template>

<script setup>
// tip: 导入 component
// tip: 导入 data
import { ref, computed } from 'vue'
import { useStore } from 'vuex'
import { useRouter, useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { wait, empty, clone, storage } from '@/fn'
// tip: 定义 各种 use
const store = useStore(), router = useRouter(), route = useRoute()
// tip: 定义 页面
// tip: 定义 不需要关联的
// tip: 定义 需要关联的
// tip: 定义 computed 计算的
const moduleList = computed(() => {
  // auto load from store, map.init is required
  let stateMap = store.state
  const result = []
  Object.keys(stateMap).filter(k => k !== 'flow' && stateMap[k].map && stateMap[k].map.init).map(k => {
    result.push(k)
  })
  return result
})
// tip: 定义 方法
const go = (v) => {
  store.dispatch('flow/init', store.state[v].map)
  router.push({ name: 'detail' })
}
// tip: 初始化空数据
</script>

<style scoped>
.card { background: #666; border: 1px solid #888; color: #888; }
.card:hover { background: #444; border: 1px solid #fff; color: #ddd; }
</style>
