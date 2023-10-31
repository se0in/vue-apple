<template>
  <div class="home__wrap">
    <HomeFirstVideo />
    <HomeFirst />
    <HomeSecond />
    <HomeThird />
  </div>
</template>

<script>
import HomeFirstVideo from './HomeFirstVideo.vue';
import HomeFirst from './HomeFirst.vue';
import HomeSecond from './HomeSecond.vue';
import HomeThird from './HomeThird.vue';

export default {
  name: 'HomePage',
  components: {
    HomeFirstVideo,
    HomeFirst,
    HomeSecond,
    HomeThird,
  }
}
</script>

<style lang="scss" scoped>

</style>