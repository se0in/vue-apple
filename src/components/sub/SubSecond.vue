<template>
  <div class="content">
    <div class="section_product">
      <div class="swiper">
        <!-- 웹 스티키될 부분 -->
      </div>
      <div class="choice">
        <!-- 선택하는 부분 클릭해야 다음 거 활성화 -->
        <div class="choice__box choice-model">
          <h3>모델.<span>당신에게 딱 맞는 모델은?</span></h3>
          <div class="choice__select">
            <div class="select__btn choice-btn">
              <div class="select__left">
                <p class="title__name">iPhone 15 Pro</p>
                <p class="title__cm">15.5cm 디스플레이</p>
              </div>
              <p class="choice_price select__right">₩1,550,000부터</p>
            </div>
            <div class="select__btn choice-btn">
              <div class="select__left">
                <p class="title__name">iPhone 15 Pro Max</p>
                <p class="title__cm">17.0cm 디스플레이</p>
              </div>
              <p class="choice_price select__right">₩1,900,000부터</p>
            </div>
          </div>
          <div class="choice__help">
            <p>모델 선택에 도움이 필요하신가요?</p>
            <p>화면 크기와 배터리 사용 시간 등 차이점을 비교해보세요.</p>
          </div>
        </div>
        <div class="choice__box choice-color">
          <h3>색상.<span>맘에 드는 색상을 선택하세요</span></h3>
          <div class="choice__select">
            <p>색상</p>
            <div class="color__box">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
        <div class="choice__box choice-db">
          <h3>저장 용량.<span>당신에게 알맞은 저장 용량은?</span></h3>
          <div class="choice__select">
            <div class="select__btn choice-btn">
              <div class="select__left">
                <p class="title__name">256GB<sup>2</sup></p>
              </div>
              <p class="choice_price select__right">₩1,900,000</p>
            </div>
            <div class="select__btn choice-btn">
              <div class="select__left">
                <p class="title__name">512GB<sup>2</sup></p>
              </div>
              <p class="choice_price select__right">₩2,200,000</p>
            </div>
            <div class="select__btn choice-btn">
              <div class="select__left">
                <p class="title__name">1TB<sup>2</sup></p>
              </div>
              <p class="choice_price select__right">₩2,500,000</p>
            </div>
            
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
  
}
</style>
