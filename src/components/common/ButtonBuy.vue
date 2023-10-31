<template>
  <router-link to="/Sub2"> 
    <button class="buyBtn">구입하기</button>
  </router-link>
</template>

<script>
export default {
  name: 'BtnBuy',
  props: {
    msg: String
  }
}
</script>

<style lang="scss" scoped>
.buyBtn {
  color: #fff;
  padding: 12px 0;
  width: 120px;
  border-radius: 25px;
  transition: .3s;
  background-color: $btn-point-color;
  &:hover {
    background-color: #1062b4 !important;
    &::after {
      animation: arrowToRight .7s 3 linear;
    }
  }

  &::after {
    content: '\e5e1';
    font-family: 'Material Symbols Outlined';
    vertical-align: -1px;
    margin-left: 5px;
    font-size: 14px;
    position: relative;
  }
}
</style>
