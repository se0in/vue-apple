<template>
  <h1><!-- HomeFirst --></h1>
  <swiper
    :slidesPerView="1"
    :spaceBetween="0"
    :centeredSlides="true"
    :loop="true"
    :pagination="{
      clickable: true,
    }"
    :autoplay="{
      delay: 30000, 
      disableOnInteraction: false,
    }"
    :navigation="true"
    :modules="modules"
    :variableWidth="true" 
  >
    <swiper-slide
      :class=slide.class  
      v-for="slide in swiperSlide" 
      :key="slide"
      >
      <img :src=slide.path alt="">
      <div class="slide__product">
        <h3> {{slide.product}} 
          <span> {{slide.productSub}} </span>
        </h3>
        <p class="product__text"> {{slide.text}} </p>
        <p class="product__release"> {{slide.release}} </p>
        <div class="product__btn">
          <BtnMore></BtnMore>
          <BtnOrder></BtnOrder>
        </div>
      </div>
      
    </swiper-slide>
  </swiper>
</template>

<script>
  /* swiper 기본 필수 연결 */
  import 'swiper/swiper-bundle.css';

  import { Swiper, SwiperSlide } from 'swiper/vue';
  import { Pagination, Navigation, Autoplay} from 'swiper/modules';
  import 'swiper/css';
  import 'swiper/css/pagination';
  import 'swiper/css/navigation';

  /* btn 연결 */
  import BtnMore from '@/components/common/ButtonMore.vue';
  import BtnOrder from '@/components/common/ButtonOrder.vue';

export default {
  name: 'HomeFirst',
  components: {
    Swiper,
    SwiperSlide,
    BtnMore,
    BtnOrder
  },
  data() {
    return {
      swiperSlide : [
        { class : 'product1', 
          path : require('@/assets/img/HomeFirst_1.svg'), 
          product : 'iPhone 15 Pro', 
          text : '티타늄. 초강력. 초프로', 
          release : '10월 13일 출시'},
        { class : 'product2', 
          path : require('@/assets/img/HomeFirst_2.svg'), 
          product : 'iPhone 15', 
          text : '새로운 카메라. 새로운 디자인. 새로움이 물씬.', 
          release : '10월 13일 출시'},
        { class : 'product3', 
          path : require('@/assets/img/HomeFirst_3.svg'), 
          product : 'WATCH', 
          productSub: 'SERIES 9', 
          text : '보다 똑똑. 보다 또렷. 보다 강력', 
          release : '10월 13일 출시'},
        { class : 'product4', 
          path : require('@/assets/img/HomeFirst_4.svg'), 
          product : 'MacBook Air 16', 
          text : '크게 펼치고, 얇게 접다.', 
          release : '출시 미정'}
      ],
      swiperOptions: {
        slidesPerView: 1, 
      }
    }
  },
  props: {
    msg: String
  },
  setup() {
    return {
      modules: [Pagination, Navigation, Autoplay],
    };
  }
}
</script>

<style lang="scss" scoped>



.swiper {
  width: 100%;
  height: 450px;
  overflow: hidden;

  .product1, .product3 {
    @include BgWhiteColorBlack;
  }
  .product2 {
    @include BgBlackColorWhite;
    img {
      transform: rotate(90deg) translate(10% , -16%) ;
      margin: 0 auto;
      object-fit: contain !important;
      min-height: none;
      height: 300px;
    }
  }
  .product4 {
    @include BgBlackColorWhite;
  }
  .swiper-slide {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: flex-end;

    img {
      width: 100%;
      object-fit: cover;
      min-height: 350px;
    }
    .slide__product {
      text-align: center;
      @include AbsoluteXCenter {
        top: 30px;
      };
      h3 {
        font-size: 35px;
        font-weight: 500;
        font-family: 'Roboto', sans-serif;
        span {
          color: #D60000;
          display: block;
          font-size: 15px;
          letter-spacing: 2px;
        }
      }
      .product__text {
        font-size: 18px;
        padding: 10px;
      }
      .product__release {
        color: $sub-text-color;
        font-size: 14px;
      }
      .product__btn {
        display: flex;
        margin: 0 auto;
        justify-content: center;
        gap : 5px;
        margin-top: 15px;
      }
    }
  }
}    
@media screen and (min-width : 768px) {
  .swiper {
    height: 550px;
    .product2 {
      img {
        transform: rotate(0deg);
        max-width: none;
      }
    }
    .swiper-slide {
      img {
        max-width: 900px;
        margin: 0 auto;
      }
      .slide__product {
        .product__btn {
          gap : 10px;
          margin-top: 20px;
        }
      }
    }
  }
}
</style>
