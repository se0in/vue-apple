<template>
  <div class="content">
    <div class="title">
      <div class="title__left">
        <span class="new">New</span>
        <h2>아이폰 구입하기</h2>
        <span class="price">₩1,250,000부터</span>
      </div>
      <div class="title__right">
        <div><span>보상 판매로 ₩50,000-₩1,060,000 더 저렴하게</span></div>
        <div><span>신용 카드 할부</span></div>
      </div>
    </div>
    <div class="section_product">
      <div class="swiper__wrap">
        <swiper 
        :hashNavigation="{watchState: true,}" 
        :pagination="{clickable: true,}" 
        :navigation="true" 
        :modules="modules" 
        class="mySwiper">
          <swiper-slide data-hash="slide1">
            <img src="@/assets/img/SubSwiper1.svg" alt="">
          </swiper-slide>
          <swiper-slide data-hash="slide2">
            <img src="@/assets/img/SubSwiper2.svg" alt="">
          </swiper-slide>
        </swiper>

      </div>
      <div class="choice">
        <!-- 모델 선택 -->
        <div class="choice__box choice-model opacity">
          <h3>모델.<span> 당신에게 딱 맞는 모델은?</span></h3>
          <div class="choice__select">
            <button 
            v-for="model in models" 
            :key="model.text" 
            class="select__btn choice-btn"
            :class="{ 'active': modelValue === model.text }" 
            @click="buttonActive1(model.text)">
              <div class="select__left">
                <p class="title__name">{{ model.text }}</p>
                <p class="title__cm">{{ model.description }}</p>
              </div>
              <p class="choice_price select__right">{{ model.price }}</p>
            </button>
          </div>
          <div class="choice__help">
            <p>모델 선택에 도움이 필요하신가요?</p>
            <p>화면 크기와 배터리 사용 시간 등 차이점을 비교해보세요.</p>
          </div>
        </div>

        <!-- 색상 선택 -->
        <div 
        class="choice__box choice-color" 
        :class="{ 'opacity': modelValue }">
          <h3>색상.<span> 맘에 드는 색상을 선택하세요</span></h3>
          <div class="choice__select">
            <p class="color__text">색상</p>
            <div class="color__box">
              <button 
              v-for="color in colors" 
              :key="color" 
              @click="buttonActiveColor(color)"
              :class="{ 'active': colorValue === color }" 
              :disabled="!modelValue">
              </button>
            </div>
          </div>
        </div>

        <!-- 저장 용량 선택 -->
        <div 
        class="choice__box choice-db" 
        :class="{ 'opacity': colorValue }">
          <h3>저장 용량.<span> 당신에게 알맞은 저장 용량은?</span></h3>
          <div class="choice__select">
            <button 
            v-for="storage in storageOptions" 
            :key="storage.value" 
            class="select__btn choice-btn"
            :class="{ 'active': priceValue === storage.value }" 
            @click="buttonActive2(storage.value)"
            :disabled="!colorValue">
              <div class="select__left">
                <p class="title__name">{{ storage.text }}</p>
              </div>
              <p class="choice_price select__right">{{ storage.price }}</p>
            </button>
          </div>
          <div class="choice__help">
            <p>모델 선택에 도움이 필요하신가요?</p>
            <p>화면 크기와 배터리 사용 시간 등 차이점을 비교해보세요.</p>
          </div>
        </div>
      </div>
    </div>
    <div class="choice__bottom">
      <p class="credit__title">Apple Trade In. <span>새 iPhone 구입 시 사용할 수 있는 ₩50,000-₩1,060,000 상당의 크레딧을 얻는 법.</span></p>
      <div class="choice__select">
        <button class="select__btn">
          <p class="btnTitle">iPhone 선택하기</p>
          <p class="btnSub">몇 가지 질문에 답해주시면 예상 금액이 제시됩니다.</p>
        </button>
        <button class="select__btn">
          <p class="btnTitle">보상 판매 안함</p>
        </button>
      </div>
      <div class="choice__help">
        <p>보상 판매 과정을 알아볼까요?</p>
        <p>보상 판매 과정을 단계별로 자세히 알아보세요</p>
      </div>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';

import { ref } from 'vue';

export default {
  name: 'SubPage',
  props: {
    msg: String
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const modelValue = ref(false);
    const colorValue = ref(false);
    const priceValue = ref(false);

    return {
      modules: [Pagination, Navigation],
      modelValue,
      priceValue,
      colorValue,
    };
  },
  data() {
    return {
      models: [
        {
          text: 'iPhone 15 Pro',
          description: '15.5cm 디스플레이',
          price: '₩1,550,000부터',
        },
        {
          text: 'iPhone 15 Pro Max',
          description: '17.0cm 디스플레이',
          price: '₩1,900,000부터',
        },
      ],
      colors: ['내추럴 티타늄', '블루 티타늄', '화이트 티타늄', '블랙 티타늄'],
      storageOptions: [
        { value: '256', text: '256GB²', price: '₩1,900,000' },
        { value: '512', text: '512GB²', price: '₩2,200,000' },
        { value: '1000', text: '1TB²', price: '₩2,500,000' },
      ],
    };
  },
  methods: {
    buttonActive1(value) {
      this.modelValue = value;
    },
    buttonActive2(value) {
      this.priceValue = value;
    },
    buttonActiveColor(value) {
      this.colorValue = value;
    },
  }
}
</script>

<style lang="scss" scoped>
.content {
  margin-top: 150px;

  .title {
    padding: 20px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    gap: 30px;

    .title__left {
      .new {
        color: #e96430;
      }

      h2 {
        font-weight: bold;
        font-size: 40px;
        padding-top: 4px;
        margin-bottom: 20px;
      }

      .price {
        font-size: 14px;
        color: #333333;
      }
    }

    .title__right {
      display: flex;
      flex-direction: column;
      gap: 10px;

      div {
        span {
          font-size: 12px;
          padding: 10px 15px;
          display: inline-block;
          box-sizing: border-box;
          border-radius: 25px;
          background-color: #f6f6f6;
        }
      }
    }
  }

  .section_product {
    width: 100%;
    padding: 20px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;

    .swiper__wrap {
      width: 100%;
      border-radius: 20px;
      overflow: hidden;

      .swiper {
        width: 100%;
        height: 100%;

        .swiper-slide {
          width: 100%;
          height: 100%;

          img {
            min-height: 400px;
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        }
      }
    }

    .choice {
      .choice__box {
        margin: 100px 0 20px;
        transition: .3s;
        opacity: 0.3;

        &.opacity {
          opacity: 1;
        }

        h3 {
          font-size: 25px;
          word-break: keep-all;

          span {
            color: $sub-text-color;
          }
        }

        .choice__select {
          margin-top: 20px;

          .select__btn {
            border: 1px solid #d3d3d3;
            border-radius: 15px;
            @include flexCenter();
            gap: 20px;
            padding: 0 20px;
            box-sizing: border-box;
            height: 100px;
            width: 100%;

            &.active {
              border: 2px solid #3274dd;
            }

            &:not(:first-child) {
              margin-top: 10px;
            }

            .select__left {
              text-align: left;

              .title__name {
                font-size: 18px;
                font-weight: bold;
              }

              .title__cm {
                font-size: 14px;
                color: $sub-text-color;
                padding-top: 5px;
              }
            }

            .select__right {
              font-size: 15px;
              text-align: right;
              word-break: break-all;
              color: $sub-text-color;
            }
          }
        }

        &.choice-color {
          position: relative;

          .color__text {
            font-weight: bold;
            padding-top: 20px;
          }

          .color__box {
            display: flex;
            gap: 20px;
            margin-top: 30px;

            button {
              width: 35px;
              height: 35px;
              border-radius: 50%;
              display: block;
              cursor: pointer;
              box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.2);
              border: 1px solid #0000000a;

              &::after {
                position: absolute;
                top: 70px;
                left: 33px;
                display: none;
                font-weight: bold;
                z-index: 1;
              }

              &::before {
                content: '';
                width: 41px;
                height: 41px;
                border: 1px solid #ddd;
                border-radius: 50%;
                position: relative;
                top: -5px;
                left: -5px;
                display: none;
                z-index: 1;
              }

              &:nth-child(1) {
                background-color: #BBB5A9;

                &:hover:before,
                &.active::before {
                  display: block;
                }

                &:hover:after,
                &.active::after {
                  content: '- 내추럴 티타늄';
                  display: block;
                  background-color: #ffffff;
                  padding-right: 50px;
                  z-index: 2;
                }
              }

              &:nth-child(2) {
                background-color: #3C4453;

                &:hover:before,
                &.active::before {
                  display: block;
                }

                &:hover:after,
                &.active::after {
                  content: '- 블루 티타늄';
                  display: block;
                  background-color: #ffffff;
                  padding-right: 50px;
                  z-index: 2;
                }
              }

              &:nth-child(3) {
                background-color: #F2F1EC;

                &:hover:before,
                &.active::before {
                  display: block;
                }

                &:hover:after,
                &.active::after {
                  content: '- 화이트 티타늄';
                  display: block;
                  background-color: #ffffff;
                  padding-right: 50px;
                  z-index: 2;
                }

              }

              &:nth-child(4) {
                background-color: #202122;

                &:hover:before,
                &.active::before {
                  display: block;
                }

                &:hover:after,
                &.active::after {
                  content: '- 블랙 티타늄';
                  display: block;
                  background-color: #ffffff;
                  padding-right: 50px;
                  z-index: 2;
                }

              }
            }
          }
        }

        .choice__help {
          margin-top: 15px;
          border-radius: 15px;
          background-color: #f6f6f6;
          padding: 20px;
          box-sizing: border-box;
          font-size: 14px;

          p {
            &:first-child {
              font-weight: bold;
              margin-bottom: 6px;
            }

            &:nth-child(2) {
              color: #535353;
            }
          }
        }
      }
    }
  }

  .choice__bottom {
    padding: 20px;

    .credit__title {
      font-size: 20px;
      word-break: keep-all;

      span {
        display: block;
        color: $sub-text-color;
        font-size: 18px;
      }
    }

    .choice__select {
      margin-top: 20px;
      display: flex;
      flex-direction: column;
      gap: 10px;
      
      .select__btn {
        border: 1px solid #d3d3d3;
        border-radius: 15px;
        padding: 0 20px;
        box-sizing: border-box;
        height: 80px;
        width: 100%;
        text-align: center;
        cursor: default;

        p.btnTitle {
          font-weight: bold;
        }

        p.btnSub {
          font-size: 14px;
          margin-top: 5px;
          color: #999;
        }
      }
    }

    .choice__help {
      margin-top: 15px;
      border-radius: 15px;
      background-color: #f6f6f6;
      padding: 20px;
      box-sizing: border-box;
      font-size: 14px;

      p {
        &:first-child {
          font-weight: bold;
          margin-bottom: 6px;
        }

        &:nth-child(2) {
          color: #535353;
        }
      }
    }
  }
}

@media screen and (min-width : 768px) {
  .content {
    max-width: 1260px;
    margin: 100px auto 0;

    .title {
      @include flexCenter();
      flex-direction: row;

      .title__right {
        align-items: flex-end;

        div {
          span {
            font-size: 12px;
            padding: 10px 15px;
            display: inline-block;
            box-sizing: border-box;
            border-radius: 25px;
            background-color: #eee;
          }
        }
      }
    }

    .section_product {
      flex-direction: row;
      gap: 40px;
      width: 100%;

      .swiper__wrap {
        width: calc(100% - 400px);
        height: calc(100vh - 160px);
        position: sticky;
        top: 100px;
      }

      .choice {
        width: 400px;
      }
    }

    .choice__bottom {
      margin-top: 60px;

      .credit__title {
        span {
          display: inline;
        }
      }

      .choice__select {
        flex-direction: row;
      }
    }
  }
}
</style>
