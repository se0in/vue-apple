<template>
  <h2>최신 제품. <span>따끈따끈한 신제품 이야기.</span></h2>
  <div class="card__container"><!-- 전체 -->
    <div 
    v-for="card in card" 
    :key="card" 
    :class=card.class
    class="popupCard"
    ><!-- 반복 돌릴 것 -->
      <img :src=card.path alt="">
      <div class="card__inbox">
        <h3> {{card.productName}} 
          <span> {{card.productSubName}} </span>
        </h3>
        <p> {{card.productDescription}} </p>
        <div class="card__btn">
        </div>
      </div>
    </div>
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
      card : [
        { class : 'card__item-1', 
          path : require('../../assets/img/HomeSecond_1.png'),
          productName : 'WATCH',
          productSubName : 'ULTRA 2', 
          productDescription : '한 차원 높은 모험.'
        }, 
        { class : 'card__item-2', 
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
        }
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
@mixin AbsoluteXCenter {
  position: absolute;
  text-align: center;
  width: 100%;
  left: 50%;
  transform: translateX(-50%);
  @content; 
}

h2 {
  font-size: 30px;
  padding: 0 16px;
  word-break: keep-all;
  margin-bottom: 20px;
  span {
    color: var(--sub-text-color);
    display: block;
  }
}
.card__container {
  padding: 0 16px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  
  $itemNum : '1','2','3','4','5','6';
  @each $num in $itemNum {

    .card__item-1 {
      span {color: #FD701D}
    }
    .card__item-3 {
      span {color: #D60000}
    }
    .card__item-4, .card__item-6 {
      color: #fff;
    }
    .card__item-#{$num} { /* 반복 돌릴 것 */
      border-radius: 10px;
      height: 400px;
      border: 1px solid #f1f1f1;
      overflow: hidden;
      position: relative;
      cursor: pointer;
      transition: .3s;

      &:hover {
        transform: translateY(-3px);
        box-shadow: 1px 1px 10px rgba(192, 192, 192, 0.4);
      }
      img {
        width: 100%;
        object-fit: cover;
        height: 400px;
      }
      .card__inbox {
        @include AbsoluteXCenter {
          top: 7%;
        }
        h3 {
          font-size: 26px;
          font-family: 'Noto Sans KR', 'Pretendard-Regular';
          font-weight: 700;
          span {
            display: block;
            font-size: 14px;
            font-weight: 600;
            letter-spacing: 2px;
            margin-top: -4px;
          }
        }
        p {
          margin-top: 8px;
        }
      }
    }
  }
} 

@media screen and (min-width : 768px) {
h2 {
  text-align: center;
  font-size: 35px;
  margin-bottom: 40px;
  span {
    display: inline;
  }
}
.card__container {
  flex-direction: row;
  flex-wrap: wrap;

  $itemNum : '1','2','3','4','5','6';
  @each $num in $itemNum {
    .card__item-#{$num} { 
      width: calc(100% / 2 - 10px);
      height: 500px;
      img {
        height: 500px;
      }
      .card__inbox {
        h3 {
          font-size: 35px;
          span {
            font-size: 16px;
          }
        }
        p {
          font-size: 18px;
          margin-top: 12px;
        }
      }
    }
  }
}   
}
</style>
