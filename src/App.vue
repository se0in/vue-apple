<template>
  <!-- <CommonHeader></CommonHeader> -->
  <router-view></router-view>
  <CommonFooter />
</template>

<script>
// import CommonHeader from '@/components/layout/CommonHeader.vue';
import CommonFooter from '@/components/layout/CommonFooter.vue';
export default {
  components : {
    // CommonHeader,
    CommonFooter
  }
}
</script>

<style>
@import '@/assets/scss/reset.scss';
</style>
