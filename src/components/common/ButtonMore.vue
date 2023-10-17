<template>
  <router-link to="/Sub2"> 
    <button class="slideBtn">더 알아보기</button>
  </router-link>
</template>

<script>
export default {
  name: 'BtnMore',
  props: {
    msg: String
  }
}
</script>

<style lang="scss" scoped>
</style>
