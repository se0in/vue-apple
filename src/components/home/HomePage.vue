<template>
  <HomeFirst />
  <HomeSecond />
  <HomeThird />
</template>

<script>
import HomeFirst from './HomeFirst.vue';
import HomeSecond from './HomeSecond.vue';
import HomeThird from './HomeThird.vue';

export default {
  name: 'HomePage',
  components: {
    HomeFirst,
    HomeSecond,
    HomeThird,
  }
}
</script>