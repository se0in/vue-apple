<template>
  <CommonHeaderWeb v-if="!isMobile" />
  <CommonHeaderMobile v-else />
  <div class="content-margin_top"></div>
  <router-view></router-view>
  <CommonFooter />

</template>

<script>
import CommonHeaderWeb from '@/components/layout/CommonHeaderWeb.vue';
import CommonHeaderMobile from '@/components/layout/CommonHeaderMobile.vue';
import CommonFooter from '@/components/layout/CommonFooter.vue';
export default {
  components : {
    CommonHeaderWeb,
    CommonHeaderMobile,
    CommonFooter
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
      this.isMobile = window.innerWidth < 768; // 예시: 화면 폭이 768px 미만인 경우 모바일로 설정
    },
  },
}



</script>

<style>
@import '@assets/scss/_variables.scss';
@import '@assets/scss/mixin.scss';
@import '@assets/scss/reset.scss';
@import '@assets/scss/common.scss';
@import '@assets/swiper.css';

.content-margin_top {
  padding-top: 45px;
}
@media screen and (min-width : 768px) {
  .content-margin_top {
    padding-top: 40px;
  }
}

</style>
