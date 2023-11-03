<template>
  <!-- <SubFirstWeb v-if="!isMobile" />
  <SubFirstMobile v-else /> -->
  <SubSecond />
  <!-- <sub-third></sub-third> -->
  <!-- <sub-fourth></sub-fourth> -->
</template>

<script>
/* import SubFirstWeb from './SubFirstWeb.vue';
import SubFirstMobile from './SubFirstMobile.vue'; */
import SubSecond from './SubSecond.vue';
// import SubThird from './SubThird.vue';
// import SubFourth from './SubFourth.vue'; 

export default {
  name: 'SubPage',
  components : {
    /* SubFirstWeb,
    SubFirstMobile, */
    SubSecond,
  /*   SubThird,
    SubFourth */
  },
  data() {
    return {
      isMobile : false,
    }
  },
  mounted() {
    window.addEventListener("resize", this.checkIsMobile);
    this.checkIsMobile(); // 초기 설정
  },
  methods: {
    checkIsMobile() {
      this.isMobile = window.innerWidth < 768;
    },
  },
}
</script>

<style lang="scss" scoped>
</style>
