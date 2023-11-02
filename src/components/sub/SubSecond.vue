<template>
  <div class="content">
    <div class="section_product">
      <div class="swiper"></div>
      <div class="choice"></div>
    </div>
    <div class="section_credit"></div>
  </div>
</template>

<script>
export default {
  name: 'SubPage',
  props: {
    msg: String
  }
}
</script>

<style lang="scss" scoped>
.content {
  margin-top: 100px;
  
}
</style>
