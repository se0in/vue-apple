<template>
  <router-link to="/Sub2">
    <button class="nowWatching">지금 시청하기</button>
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
.nowWatching {
  background-color: #fff;
  color: #000;
  border-radius: 25px;
  font-family: "Pretendard-Regular", "Noto Sans KR", sans-serif;
  font-size: 16px;
  padding: 10px 0;
  width: 150px;
  box-shadow: 1px 1px 10px rgba(0, 0, 0, .2);
  transition: .5s;

  &:hover {
    background-color: #ebebeb;
  }

  &::after {
    content: '';
    background: url(../../assets/img/btn_img_nowWatching.svg) no-repeat;
    background-size: 16px 16px;
    width: 16px;
    height: 16px;
    display: inline-block;
    margin-left: 10px;
    vertical-align: -2px;
  }
}
</style>