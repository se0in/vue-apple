<template>
  <header class="header__web">
    <h1 class="header__logo">
      <router-link to="/"><img src="@/assets/img/apple_logo.svg" alt="APPLE"></router-link>
    </h1>
    <ul class="header__nav inner">
      <li><router-link to="/Sub">
        <div class="nav__title">스토어</div>
        
          <div class="nav__list">
            <div class="inner look__wrap">
              <div class="look__list look__bold">
                <div class="look__title">쇼핑하기</div>
                <ul>
                  <li><router-link to="/Sub">최신 제품 쇼핑하기</router-link></li>
                  <li><router-link to="/Sub">Mac</router-link></li>
                  <li><router-link to="/Sub">iPad</router-link></li>
                  <li><router-link to="/Sub">iPhone</router-link></li>
                  <li><router-link to="/Sub">Apple Watch</router-link></li>
                  <li><router-link to="/Sub">액세서리</router-link></li>
                </ul>
              </div>
              <div class="look__list">
                <div class="look__title">빠른 링크</div>
                <ul>
                  <li><router-link to="/Sub">매장 찾기</router-link></li>
                  <li><router-link to="/Sub">주문 상태</router-link></li>
                  <li><router-link to="/Sub">Apple Trade In</router-link></li>
                  <li><router-link to="/Sub">할부 방식</router-link></li>
                </ul>
              </div>
              <div class="look__list">
                <div class="look__title">특별 할인 쇼핑하기</div>
                <ul>
                  <li><router-link to="/Sub">인증 리퍼비쉬 제품</router-link></li>
                  <li><router-link to="/Sub">교육</router-link></li>
                  <li><router-link to="/Sub">비즈니스</router-link></li>
                </ul>
              </div>
            </div>
          </div>
          <div class="nav__blur"></div>
        
      </router-link></li>
      <li><router-link to="/Sub">
        <div class="nav__title">Mac</div>
      </router-link></li>
      <li><router-link to="/Sub">
        <div class="nav__title">iPad</div>
      </router-link></li>
      <li><router-link to="/Sub">
        <div class="nav__title">iPhone</div>
      </router-link></li>
      <li><router-link to="/Sub">
        <div class="nav__title">Watch</div>
      </router-link></li>
      <li><router-link to="/Sub">
        <div class="nav__title">AiPods</div>
      </router-link></li>
      <li><router-link to="/Sub">
        <div class="nav__title">고객지원</div>
      </router-link></li>
      <li><router-link to="/Sub">
        <div class="nav__title">더 살펴보기</div>
      </router-link></li>
    </ul>
    <ul class="header__util">
      <li><span class="material-symbols-outlined">search</span></li>
      <li><span class="material-symbols-outlined">shopping_bag</span></li>
    </ul>
  </header>
</template>

<script>



export default {
  name: 'CommonHeader',
  props: {
    msg: String
  }
}
</script>

<style lang="scss" scoped>
@mixin flexCenter {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

  .header__web {
    @include flexCenter;
    background-color: #f3f3f3;
    font-size: 14px;
    padding: 0 16px;
    box-sizing: border-box;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 900;

    .header__logo {
      height: 100%;
      width: 70px;
      img {
        width: 25px;
      }
    }
    .header__nav {
      @include flexCenter;
      width: 100%;

      li {
        height: 100%;
        .nav__title {
          padding: 12px 0;
          height: 100%;
          display: block;
        }
        &:hover .nav__blur {
          display: block;
        }

          .nav__list {
            position: fixed;
            top: 40px;
            left: 0;
            width: 100%;
            background-color: #f3f3f3;
            padding: 50px 0;
            z-index: 920;
            
            .look__wrap {
              display: flex;
            gap: 50px;

            .look__list {
              &.look__bold {
                font-size: 20px;
                font-family: 'Noto Sans KR', 'Pretendard-Regular', sans-serif;
                font-weight: 600;
              }
              .look__title {
                font-size: 13px;
                font-weight: 400;
                color: var(--sub-text-color);
                font-family: 'Pretendard-Regular','Noto Sans KR', sans-serif;
                margin-bottom: 16px;
              }
              ul {
                line-height: 1.8;
              }
            }
          }
        }
        .nav__blur {
          position: fixed;
          top: 50px;
          left: 0;
          width: 100%;
          height: 100vh;
        background-color: rgba(255, 255, 255, 0.527);
        filter: blur(50px) contrast(0.7) brightness(0.7);
        }
      }
    }

    .header__util {
      @include flexCenter();
      color: #ddd;
      width: 70px;
    }
  }

</style>
