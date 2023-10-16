<template>
  <h1><!-- HomeFirst --></h1>
  <swiper
    :slidesPerView="swiperOptions.slidesPerView"
    :spaceBetween="0"
    :centeredSlides="true"
    :loop="true"
    :pagination="{
      clickable: true,
    }"
    :autoplay="{
        delay: 2000,
        disableOnInteraction: false
      }"
    :navigation="true"
    :modules="modules"
    :loopAdditionalSlides = "2"
  >
    <swiper-slide
      v-for="slide in swiperSlide" 
      :key="slide"
      class=slide.class>
      <img :src=slide.path alt="">
      <div class="slide__product">
        <h3> {{slide.product}} 
          <span> {{slide.productSub}} </span>
        </h3>
        <p class="product__text"> {{slide.text}} </p>
        <p class="product__release"> {{slide.release}} </p>
      </div>
    </swiper-slide>
  </swiper>
</template>

<script>
  /* swiper 기본 필수 연결 */
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import { Pagination, Navigation } from 'swiper/modules';
  import 'swiper/css';
  import 'swiper/css/pagination';
  import 'swiper/css/navigation';

export default {
  name: 'HomeFirst',
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      swiperSlide : [
        { class : 'product1', 
          path : require('../../assets/img/HomeFirst_1.svg'), 
          product : 'iPhone 15 Pro', 
          text : '티타늄. 초강력. 초프로', 
          release : '10월 13일 출시'},
        { class : 'product2', 
          path : require('../../assets/img/HomeFirst_2.svg'), 
          product : 'iPhone 15', 
          text : '새로운 카메라. 새로운 디자인. 새로움이 물씬.', 
          release : '10월 13일 출시'},
        { class : 'product3', 
          path : require('../../assets/img/HomeFirst_3.svg'), 
          product : 'WATCH', 
          productSub: 'SERIES 9', 
          text : '보다 똑똑. 보다 또렷. 보다 강력', 
          release : '10월 13일 출시'}
      ],
      swiperOptions: {
        slidesPerView: 1, // 초기값은 1
      }
    }
  },
  props: {
    msg: String
  },
  setup() {
    return {
      modules: [Pagination, Navigation],
    };
  },
  mounted() {
    // 화면 크기가 변경될 때 스와이퍼 속성 업데이트
    window.addEventListener('resize', this.updateSwiperOptions);
    // 초기 설정
    this.updateSwiperOptions();
  },
  methods: {
    updateSwiperOptions() {
      if (window.innerWidth >= 768) {
        // 화면이 768px 이상일 때
        this.swiperOptions.slidesPerView = 1.5; // 1.5로 변경
      } else {
        // 화면이 768px 미만일 때
        this.swiperOptions.slidesPerView = 1; // 1로 변경
      }
    }
  }
}
</script>

<style lang="scss" scoped>

.swiper {
  width: 100%;
  height: 400px;
  .swiper-slide {
    position: relative;
    width: 100%;

    img {
      width: 100%;
      height: 100%;
      // object-fit: cover;
    }
    .slide__product {
      background-color: rgba(119, 108, 108, 0.418);
      position: absolute;
      top: 0;
      
      h3 {
        span {}
      }
      .product__text {}
      .product__release {}
    }
  }
}


@media screen and (min-width : 768px) {
  .swiper {
    height: 500px;
    .swiper-slide {
      img {
        width: 80%;
      }
      .slide__product {
        h3 {
          span {}
        }
        .product__text {}
        .product__release {}
      }
    }
  }
}
</style>
