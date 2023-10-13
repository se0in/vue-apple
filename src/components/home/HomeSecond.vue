<template>
  <h2>최신 제품. <span>따끈따끈한 신제품 이야기.</span></h2>
  <div class="container">
    <div class="item">
      <img src="@/assets/img/HomeSecond_1.png" alt="WATCH ULTRA 2 한 차원 높은 모험.">
      <div class="itemBtn">
        <button @click="showPopup"> 
          {{ more }} 
          <i class="material-icons">
            arrow_forward_ios
          </i>
        </button>
        <PopupLayout @close="closePopup" ref="popup"/>
        <router-link to="/sub">
          <button>
            {{nowOrder}}
            <i class="material-icons">
            arrow_forward_ios
            </i>
      </button>
      </router-link> |
      </div>
    </div>
  </div>

</template>

<script>
import PopupLayout from '../layout/PopupLayout.vue'

export default {
  name: 'HomeSecond',
  components : {
    PopupLayout,
  },
  props: {
    msg: String
  },
  data() {
    return {
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
  @font-face {
  font-family: 'Pretendard-Regular';
  src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff') format('woff');
  font-weight: 400;
  font-style: normal;
}
  h2 {

  }
</style>
