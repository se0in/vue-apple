<template>
  <h2>최신 제품. <span>따끈따끈한 신제품 이야기.</span></h2>
  <div v-for="card in card" :key="card" class="card__container">

  </div>






<!-- 모달 -->
    <div class="itemBtn">
        <button @click="showPopup"> 
          {{ more }} 
          <i class="material-icons">
            arrow_forward_ios
          </i>
        </button>
        <PopupLayout @close="closePopup" ref="popup"/>
        
      </div>

</template>

<script>
import PopupLayout from '../layout/PopupLayout.vue'
// import BtnMore from '@/components/common/ButtonMore.vue';
// import BtnOrder from '@/components/common/ButtonOrder.vue';

export default {
  name: 'HomeSecond',
  components : {
    PopupLayout,
    // BtnMore,
    // BtnOrder,
  },
  props: {
    msg: String
  },
  data() {
    return {
      card : [
        { class : 'card__item-1', 
          path : require('../../assets/img/HomeSecond_1.png'),
          productName : 'WATCH',
          productSubName : 'ULTRA 2', 
          productDescription : '한 차원 높은 모험.'
        }, 
        /*{ class : 'card__item-2', 
          path : require('../../assets/img/HomeSecond_2.png'),
          productName : 'Carbon Neutral',
          productDescription : 'Apple 최초의 탄소 중립 제품 등장.'
        },
        { class : 'card__item-3', 
          path : require('../../assets/img/HomeSecond_3.png'),
          productName : 'WATCH',
          productSubName : 'SE', 
          productDescription : '부담없이 빠져들다.'
        },
        { class : 'card__item-4', 
          path : require('../../assets/img/HomeSecond_4.png'),
          productName : 'AirPods Pro',
          productDescription : '전에 없던 청취 경험. 적응형 오디오.'
        },
        { class : 'card__item-5', 
          path : require('../../assets/img/HomeSecond_5.png'),
          productName : 'MacBook Air 15',
          productDescription : '크게 펼치고, 얇게 접다.'
        },
        { class : 'card__item-6', 
          path : require('../../assets/img/HomeSecond_6.png'),
          productName : 'iPad Pro',
          productDescription : '막강한 성능의 M2 탑재'
        } */
      ]
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
