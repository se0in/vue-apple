<template>
  <CommonHeaderWeb></CommonHeaderWeb>
  <CommonHeaderMobile></CommonHeaderMobile>
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
  }
}



</script>

<style>
@import '@/assets/scss/common.scss';

</style>
