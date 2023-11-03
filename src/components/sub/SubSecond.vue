<template>
  <div class="content">
    <div class="section_product">
      <div class="swiper">
        웹 스티키될 부분
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
export default {
  name: 'SubPage',
  props: {
    msg: String
  }
}
</script>

<style lang="scss" scoped>
.content {
  margin-top: 100px;
  .section_product {
    width: 100%;
    background-color: rgb(247, 247, 247);
    padding: 20px;
    box-sizing: border-box;
    .swiper {
      width: 100%;
      height: 100px;
      background-color: #999;
    } 
    .choice {
    .choice__box {
      margin: 100px 0 20px;
      h3 {
        font-size: 20px;
        span {
          color: $sub-text-color;
        }
      }
      .choice__select {
        margin-top: 20px;
        .select__btn {
          border: 2px solid #d3d3d3;
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
        p {
          &:first-child {
            font-weight: bold;
            margin-bottom: 6px;
          }
        }
      }
    }
    }
  }
}

@media screen and (min-width : 768px) {
  .content {
  margin-top: 100px;
  .section_product {
    width: 100%;
    background-color: rgb(247, 247, 247);
    padding: 20px;
    box-sizing: border-box;
    display: flex;/*  */
    gap: 30px;
    .swiper {
      // flex: 1.5;
      width: 100%;
      height: 100px;
      background-color: #999;
    } 
    .choice {
      flex-basis: 500px;
      // width: 500px;
      // flex: 1;
    .choice__box {
      &:first-child {
        margin-top: 0;/*  */
      }
      h3 {
        font-size: 20px;
        span {
          color: $sub-text-color;
        }
      }
      .choice__select {
        margin-top: 20px;
        .select__btn {
          border: 2px solid #d3d3d3;
          border-radius: 15px;
          @include flexCenter();
          gap: 20px;
          padding: 0 20px;
          height: 80px;
          width: 100%;
          &:not(:first-child) {
            margin-top: 10px;
          }
          .select__left {
              
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
              &:hover:before {
              }
              &:hover:after {
              }

            }
          }
        }
      }
      .choice__help {
        p {
          &:first-child {
          }
        }
      }
    }
    }
  }
}
}

</style>
