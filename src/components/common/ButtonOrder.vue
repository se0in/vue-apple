<template>
  <router-link to="/Sub2"> 
    <button class="slideBtn">지금 주문하기</button>
  </router-link>
</template>

<script>
export default {
  name: 'BtnOrder',
  props: {
    msg: String
  }
}
</script>

<style lang="scss" scoped>
.slideBtn {
  color: $btn-point-color;
  padding: 8px 18px;
  border-radius: 20px;
  transition: .3s;
  &:hover {
    background-color: $btn-point-color;
    color: #fff !important;
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