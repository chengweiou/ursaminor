<template>
  <proj-header>模块列表</proj-header>
  <div style="margin-bottom: 20px;"></div>
  <el-main>
    <div class="df df-wrap">
      <card-tile-list v-for="(e, i) in moduleList" :key="i" :e="e"/>
    </div>
  </el-main>
</template>

<script setup>
// tip: 导入 component
import ProjHeader from '@/component/nav/projHeader.vue'
import CardTileList from '@/component/proj/card/cardTileList.vue'
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
// tip: 初始化空数据
</script>

<style scoped>
</style>
