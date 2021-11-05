<template>
  <header style="width: 100%; background: #333;">
    <div class="df" style="margin: 0 10px; height: 50px;">
      <section class="center pointer" style="margin-right: 30px;" @click="go('home')"><img style="width: 30px; height: 30px;" src="@/assets/img/logo.png"></section>
      <div class="df df-jcsb ">
        <section class="center pointer link" style="margin-right: 30px;" @click="goDetail('login')">login</section>
        <section class="center pointer link" style="margin-right: 30px;" @click="goDetail('weapon')">weapon</section>
      </div>

    </div>
  </header>
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
// tip: 定义 方法
const go = (v) => {
  router.push({ name: v })
}
const goDetail = (v) => {
  store.dispatch('flow/init', store.state[v].map)
  router.push({ name: 'detail' })
}
// tip: 初始化空数据
</script>

<style scoped>
.link:hover {
  color: #fff;
}
</style>

<style>
</style>
