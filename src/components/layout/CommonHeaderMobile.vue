<template>
  <h1>모바일 헤더</h1>
</template>

<script>



export default {
  name: 'CommonHeader',
  props: {
    msg: String
  }
}
</script>

<style lang="scss" scoped>
  .header__logo {
    width: 40px;
    img {
      width: 100%;
    }
  }
</style>
