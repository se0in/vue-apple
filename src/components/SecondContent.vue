<template>
  <h2>최신 제품. <span>따끈따끈한 신제품 이야기.</span></h2>
  <div class="container">
    <div class="item">
      <img src="../assets/SecondContent_1.png" alt="WATCH ULTRA 2 한 차원 높은 모험.">
      <div class="itemBtns">
        <button @click="showPopup"> {{ more }} <i class="material-icons">arrow_forward_ios</i></button>
        <OrderPopup @close="closePopup" ref="popup"/>
        <!-- <button><a href="./SubPage.vue">{{nowOrder}}<i class="material-icons">arrow_forward_ios</i></a></button> -->
      </div>


       <button @click="goToAbout">Go to About Page</button>

       <button @click="$router.push('./SubPage.vue')">제발되셈</button>
    </div>
  </div>

</template>

<script>
import OrderPopup from './OrderPopup.vue'; // 팝업 컴포넌트 가져오기

export default {
  name: 'SecondContent',
  components : {
    OrderPopup,
  },
  props: {
    msg: String
  },
  data() {
    return {
      moreLink : './SubPage',
      more : '더 알아보기',
      nowOrder : '지금 주문하기',
    }
  },
  methods : {
    showPopup() {
      this.$refs.popup.visible = true;
    },
    closePopup() {
      this.$refs.popup.visible = false;
    },
    goToAbout() {
      this.$router.push({ name: 'SubPage' });
    },
  }
}
</script>

<style lang="scss" scoped>
</style>
