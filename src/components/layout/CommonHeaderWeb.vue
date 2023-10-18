<template>
  <header class="header__web">
    <h1 class="header__logo">
      <router-link to="/"><img src="@/assets/img/apple_logo.svg" alt="APPLE"></router-link>
    </h1>
    <ul class="header__nav inner">
      <li><router-link to="/Sub">스토어</router-link></li>
      <li><router-link to="/Sub">Mac</router-link></li>
      <li><router-link to="/Sub">iPad</router-link></li>
      <li><router-link to="/Sub">iPhone</router-link></li>
      <li><router-link to="/Sub">Watch</router-link></li>
      <li><router-link to="/Sub">AiPods</router-link></li>
      <li><router-link to="/Sub">고객지원</router-link></li>
      <li><router-link to="/Sub">더 살펴보기</router-link></li>
    </ul>
    <ul class="header__util">
      <li><span class="material-symbols-outlined">search</span></li>
      <li><span class="material-symbols-outlined">shopping_bag</span></li>
    </ul>
  </header>
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
