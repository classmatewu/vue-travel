<template>
  <div>
    <!-- <keep-alive>与activated ()等函数配套使用 -->
    <!-- <router-view />标签的意思是显示当前路由所对应的组件 -->
    <keep-alive>
      <router-view />
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: ''
}
</script>

<style scoped>

</style>
