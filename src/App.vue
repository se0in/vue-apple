<template>
    <MainHeader />
    <FirstContent />
    <SecondContent></SecondContent>
    <ThirdContent />
    <MainFooter />
</template>

<script>
import MainHeader from './components/MainHeader.vue';
import FirstContent from './components/FirstContent.vue';
import SecondContent from './components/SecondContent.vue';
import ThirdContent from './components/ThirdContent.vue';
import MainFooter from './components/MainFooter.vue'; 

export default {
  name: 'App',
  components: {
    MainHeader,
    FirstContent,
    SecondContent,
    ThirdContent,
    MainFooter
  }
}



</script>

<style lang="scss">
  @font-face {
    font-family: 'Pretendard-Regular';
    src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff') format('woff');
    font-weight: 400;
    font-style: normal;
  }
  // reset
  * {margin: 0; padding: 0;}
  li {list-style-type: none;}
  a {color: inherit; text-decoration: none;}
  img {display: block;}
  button {border: none; outline: none; background: inherit; font-size: inherit; font-family: inherit;cursor: pointer;}
  #app {
    font-family: 'Pretendard-Regular';
  }
</style>
