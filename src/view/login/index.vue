<template>
  <div class="center bg-dark c-white" style="width: 100%; height: 100%;">
    <el-form style="width: 500px; height: 500px;" size="medium">
      <div style="font-size: 42px;">Ursaminor流程规划系统</div>
      <div style="margin-bottom: 10px;">流程规划系统模板</div>
      <div style="height: 58px;"></div>
      <div style="height: 66px;"></div>
      <section class="df" style="height: 50px;">
        <el-button v-loading="loading" :disabled="loading" style="flex: 1;" type="primary" size="large" @click="login(1)">登录</el-button>
      </section>
    </el-form>
  </div>

</template>

<script setup>
// tip: 导入 component
// tip: 导入 data
import { ref, computed } from 'vue'
import { useStore } from 'vuex'
import { useRouter, useRoute } from 'vue-router'
import { wait, empty, clone } from '@/fn'
// tip: 定义 各种 use
const store = useStore(), router = useRouter(), route = useRoute()
// tip: 定义 页面
const formEl = ref(null)
// tip: 定义 不需要关联的
const rules = {
}
const cleanForm = {
}
// tip: 定义 需要关联的
const form = ref(clone(cleanForm))
const loading = ref(false)
// tip: 定义 computed 计算的

// tip: 定义 方法
const login = async() => {
  router.push({ name: 'home' })
}
// tip: 初始化空数据
</script>
<style scoped>
</style>

<style>

</style>
