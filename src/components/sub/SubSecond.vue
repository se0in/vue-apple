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
          :hashNavigation="{
            watchState: true,
          }"
          :pagination="{
            clickable: true,
          }"
          :navigation="true"
          :modules="modules"
          class="mySwiper"
        >
          <swiper-slide data-hash="slide1">Slide 1</swiper-slide>
          <swiper-slide data-hash="slide2">Slide 2</swiper-slide>
        </swiper>



      </div>
      <div class="choice">
        <!-- 선택하는 부분 클릭해야 다음 거 활성화 -->
        <div class="choice__box choice-model">
          <h3>모델.<span> 당신에게 딱 맞는 모델은?</span></h3>
          <div class="choice__select">
            <button class="select__btn choice-btn">
              <div class="select__left">
                <p class="title__name">iPhone 15 Pro</p>
                <p class="title__cm">15.5cm 디스플레이</p>
              </div>
              <p class="choice_price select__right">₩1,550,000부터</p>
            </button>
            <button class="select__btn choice-btn">
              <div class="select__left">
                <p class="title__name">iPhone 15 Pro Max</p>
                <p class="title__cm">17.0cm 디스플레이</p>
              </div>
              <p class="choice_price select__right">₩1,900,000부터</p>
            </button>
          </div>
          <div class="choice__help">
            <p>모델 선택에 도움이 필요하신가요?</p>
            <p>화면 크기와 배터리 사용 시간 등 차이점을 비교해보세요.</p>
          </div>
        </div>
        <div class="choice__box choice-color">
          <h3>색상.<span> 맘에 드는 색상을 선택하세요</span></h3>
          <div class="choice__select">
            <p class="color__text">색상</p>
            <div class="color__box">
              <button></button>
              <button></button>
              <button></button>
              <button></button>
            </div>
          </div>
        </div>
        <div class="choice__box choice-db">
          <h3>저장 용량.<span> 당신에게 알맞은 저장 용량은?</span></h3>
          <div class="choice__select">
            <button class="select__btn choice-btn">
              <div class="select__left">
                <p class="title__name">256GB<sup>2</sup></p>
              </div>
              <p class="choice_price select__right">₩1,900,000</p>
            </button>
            <button class="select__btn choice-btn">
              <div class="select__left">
                <p class="title__name">512GB<sup>2</sup></p>
              </div>
              <p class="choice_price select__right">₩2,200,000</p>
            </button>
            <button class="select__btn choice-btn">
              <div class="select__left">
                <p class="title__name">1TB<sup>2</sup></p>
              </div>
              <p class="choice_price select__right">₩2,500,000</p>
            </button>

          </div>
          <div class="choice__help">
            <p>모델 선택에 도움이 필요하신가요?</p>
            <p>화면 크기와 배터리 사용 시간 등 차이점을 비교해보세요.</p>
          </div>
        </div>
      </div>
    </div>
    <div class="section_credit">
      <!-- 밑에 넓은 부분 -->
    </div>
  </div>
</template>

<script>
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import 'swiper/css';
  import 'swiper/css/pagination';
  import 'swiper/css/navigation';
  import { Pagination, Navigation } from 'swiper/modules';

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
      return {
        modules: [Pagination, Navigation],
      };
    },
}
</script>

<style lang="scss" scoped>
.content {
  margin-top: 100px;

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
          background-color: #eee;
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
      height: 500px;
      background-color: #999;

      .swiper {
        height: 100%;
        .swiper-slide {
        background: #8c5b5b;
        height: 100%;

        /* Center slide text vertically */
        .swiper-slide img {

        }
      }

}



    }

    .choice {
      .choice__box {
        margin: 100px 0 20px;

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
                top: 63px;
                left: 33px;
                display: none;
                font-weight: bold;
              }

              &::before {
                content: '';
                display: block;
                width: 41px;
                height: 41px;
                border: 1px solid #ddd;
                border-radius: 50%;
                position: relative;
                top: -5px;
                left: -5px;
                display: none;
              }

              &:nth-child(1) {
                background-color: #BBB5A9;

                &:hover:before {
                  display: block;
                }

                &:hover:after {
                  content: '- 내추럴 티타늄';
                  display: block;
                }
              }

              &:nth-child(2) {
                background-color: #3C4453;

                &:hover:before {
                  display: block;
                }

                &:hover:after {
                  content: '- 블루 티타늄';
                  display: block;
                }
              }

              &:nth-child(3) {
                background-color: #F2F1EC;

                &:hover:before {
                  display: block;
                }

                &:hover:after {
                  content: '- 화이트 티타늄';
                  display: block;
                }

              }

              &:nth-child(4) {
                background-color: #424446;

                &:hover:before {
                  display: block;
                }

                &:hover:after {
                  content: '- 블랙 티타늄';
                  display: block;
                }

              }
            }
          }
        }

        .choice__help {
          margin-top: 15px;
          border-radius: 15px;
          background-color: #eeeeee;
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
        background-color: #999;
        position: sticky;
        top: 100px;
      }

      .choice {
        width: 400px;
      }
    }
  }
}</style>
