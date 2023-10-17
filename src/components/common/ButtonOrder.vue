<template>
  <router-link to="/Sub2"> 
    <button class="slideBtn">지금 주문하기</button>
  </router-link>
</template>

<script>
export default {
  name: 'BtnOrder',
  props: {
    msg: String
  }
}
</script>

<style lang="scss" scoped>
</style>