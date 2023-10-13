<template>
  <h2>최신 제품. <span>따끈따끈한 신제품 이야기.</span></h2>
  <div class="container">
    <div class="item">
      <img src="../assets/SecondContent_1.png" alt="WATCH ULTRA 2 한 차원 높은 모험.">
      <button @click="showPopup"> {{ more }} <i class="material-icons">arrow_forward_ios</i></button>
      <OrderPopup @close="closePopup" ref="popup"/>
      <a :href=SubPage> {{ nowOrder }} <i class="material-icons">arrow_forward_ios</i></a>
      <router-link to="/SubPage">SubPage로 이동</router-link>
      <router-view>페이지 이동</router-view>
      <a :href=SubPage> {{ nowOrder }} <i class="material-icons">arrow_forward_ios</i></a>
      <router-link to="/subpage">{{ nowOrder }} <i class="material-icons">arrow_forward_ios</i></router-link>
      <router-link to="/subpage">{{ nowOrder }} <i class="material-icons">arrow_forward_ios</i></router-link>
<button @click="redirectToSubpage">이동하기</button>

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
      moreLink : './SubPage.vue',
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
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
