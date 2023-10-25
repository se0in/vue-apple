<template>
  <!-- <CommonHeaderWeb></CommonHeaderWeb> -->
  <CommonHeaderMobile></CommonHeaderMobile>
  <div class="header-margin-top"></div>
  <router-view></router-view>
  <CommonFooter />

</template>

<script>
// import CommonHeaderWeb from '@/components/layout/CommonHeaderWeb.vue';
import CommonHeaderMobile from '@/components/layout/CommonHeaderMobile.vue';
import CommonFooter from '@/components/layout/CommonFooter.vue';
export default {
  components : {
    // CommonHeaderWeb,
    CommonHeaderMobile,
    CommonFooter
  }
}



</script>

<style>
@import '@assets/scss/_variables.scss';
@import '@assets/scss/mixin.scss';
@import '@assets/scss/reset.scss';
@import '@assets/scss/common.scss';
@import '@assets/swiper.css';

.header-margin-top {
  padding-top: 40px;
}
@media screen and (min-width : 768px) {
  .header-margin-top {
    padding-top: 45px;
  }
}
</style>
