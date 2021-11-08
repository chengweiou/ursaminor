<template>
  <div class="center df-column" style="">
    <div v-for="(currList, si) in step" :key="`s${si}`" class="df">
      <card-tile-detail v-for="(e, i) in currList" :key="i" :e="e" @click="call(e, si)"></card-tile-detail>
    </div>
    <button class="bg-white btn-reset" style="width: 50px; height: 50px; border-radius: 50%; position: fixed; top: 20px; right: 20px;" @click="reset">reset</button>
  </div>
</template>

<script setup>
// tip: 导入 component
import CardTileDetail from '@/component/proj/card/cardTileDetail.vue'
// tip: 导入 data
import { ref, computed } from 'vue'
import { useStore } from 'vuex'
import { useRouter, useRoute } from 'vue-router'
import { wait, empty, clone } from '@/fn'
// tip: 定义 各种 use
const store = useStore(), router = useRouter(), route = useRoute()
// tip: 定义 页面
// tip: 定义 不需要关联的
// tip: 定义 需要关联的
// tip: 定义 computed 计算的
const step = computed(() => store.state.flow.step)
const map = computed(() => store.state.flow.map)
const first = computed(() => store.state.flow.first)
// tip: 定义 方法
const checkState = () => {
  if (!Object.keys(map.value).length || !first.value) {
    console.warn('need to set up: flow map && first node to flow store')
    return
  }
  if (!map.value[first.value]) {
    console.warn('need to confirm: can not find first node in flow map')
  }
}
const reset = () => {
  store.dispatch('flow/reset')
}
const call = (e, prevNum) => {
  step.value[prevNum].forEach(each => {
    each.active = false
  })
  e.active = true
  store.dispatch('flow/next', { curr: e, prevNum: prevNum })
}
// tip: 初始化空数据
checkState()
</script>
