<template>
  <sub-first></sub-first>
<!--   <sub-second></sub-second>
  <sub-third></sub-third>
  <sub-fourth></sub-fourth> -->
</template>

<script>
import SubFirst from './SubFirst.vue';
/* import SubSecond from './SubSecond.vue';
import SubThird from './SubThird.vue';
import SubFourth from './SubFourth.vue'; */

export default {
  name: 'SubPage',
  components : {
    SubFirst,
/*     SubSecond,
    SubThird,
    SubFourth */
  },
  props: {
    msg: String
  }
}
</script>

<style lang="scss" scoped>
</style>
