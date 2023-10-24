<template>
  <header class="header__mobile">
    <h1 class="header__logo">
      <router-link to="/"><img src="@/assets/img/apple_logo.svg" alt="APPLE" /></router-link>
    </h1>
    <nav>
      <div class="header__icon header__search">
        <span class="material-symbols-outlined header__icon-search">search</span>
      </div>
      <div class="header__icon header__bag">
        <span class="material-symbols-outlined header__icon-bag">shopping_bag</span>
      </div>
      <div class="header__menu">
        <button class="hamburger">햄버거</button>
        <!-- <ul class="menu__wrap">
          <li v-for="menu in mbMenu" :key="menu">
            <router-link to="/Sub">
              <div class="nav__title">{{ menu.OneTitle }}</div>
            </router-link>
          </li>
        </ul> -->
      </div>
    </nav>
  </header>
</template>

<script>



export default {
  name: 'CommonHeader',
  props: {
    msg: String
  },
  data() {
    return {
      mbMenu: [
        {
          OneTitle: "스토어",
          childDepths: [
            {
              twoTitle: "쇼핑하기",
              twoList: [
                "최신 제품 쇼핑하기",
                "Mac",
                "iPad",
                "iPhone",
                "Apple Watch",
                "액세서리",
              ],
            },
            {
              twoTitle: "빠른 링크",
              twoList: [
                "매장 찾기",
                "주문 상태",
                "Apple Trade In",
                "할부 방식",
              ],
            },
            {
              twoTitle: "특별 할인 쇼핑하기",
              twoList: ["인증 리퍼러쉬 제품", "교육", "비즈니스"],
            },
          ],
        },
        {
          OneTitle: "Mac",
          childDepths: [
            {
              twoTitle: "Mac 살펴보기",
              twoList: [
                "Mac 모두 살펴보기",
                "MacBook Air",
                "MacBook Pro",
                "iMac",
                "Mac mini",
                "Mac Studio",
                "Mac Pro",
                "디스플레이",
              ],
            },
            {
              twoTitle: "Mac 쇼핑하기",
              twoList: [
                "Mac 쇼핑하기",
                "Mac 액세서리",
                "Apple Trade In",
                "할부 방식",
              ],
            },
            {
              twoTitle: "그 외 Mac 관련 항목",
              twoList: [
                "Mac 지원",
                "Mac을 위한 AppleCare+",
                "macOS Sonoma",
                "Final Cut Pro",
                "Logic Pro",
                "연속성",
                "iCloud+",
                "Mac과 비즈니스",
                "교육",
              ],
            },
          ],
        },
        {
          OneTitle: "iPad",
          childDepths: [
            {
              twoTitle: "iPad 살펴보기",
              twoList: [
                "iPad 모두 살펴보기",
                "iPad Pro",
                "iPad Air",
                "iPad",
                "iPad mini",
                "Apple Pencil",
                "키보드",
              ],
            },
            {
              twoTitle: "iPad 쇼핑하기",
              twoList: [
                "iPad 쇼핑하기",
                "iPad 액세서리",
                "Apple Trade In",
                "할부 방식",
              ],
            },
            {
              twoTitle: "그 외 iPad 관련 항목",
              twoList: [
                "iPad 지원",
                "iPad 위한 AppleCare+",
                "iPadOS 17",
                "iPad용 Final Cut Pro",
                "ipad용 Logic Pro",
                "iCloud+",
                "교육",
              ],
            },
          ],
        },
        {
          OneTitle: "iPhone",
          childDepths: [
            {
              twoTitle: "iPhone 살펴보기",
              twoList: [
                "iPhone 모두 살펴보기",
                "iPhone 15 Pro",
                "iPhone 15",
                "iPhone 14",
                "iPhone 13",
                "iPhone SE",
              ],
            },
            {
              twoTitle: "iPhone 쇼핑하기",
              twoList: [
                "iPhone 쇼핑하기",
                "iPhone 액세서리",
                "Apple Trade In",
                "할부 방식",
              ],
            },
            {
              twoTitle: "그 외 iPhone 관련 항목",
              twoList: [
                "iPhone 지원",
                "iPhone 위한 AppleCare+",
                "IOS 17",
                "iPhone의 개인 정보 보호",
                "iCloud+",
                "Apple 지갑, Apple Pay",
                "Siri",
              ],
            },
          ],
        },
        {
          OneTitle: "Watch",
          childDepths: [
            {
              twoTitle: "Watch 살펴보기",
              twoList: [
                "Apple Watch 모두 살펴보기",
                "Apple Watch Series 9",
                "Apple Watch Ultra 2",
                "Apple Watch SE",
                "Apple Watch Nike",
                "Apple Watch Hermés",
              ],
            },
            {
              twoTitle: "Watch 쇼핑하기",
              twoList: [
                "Apple Watch 쇼핑하기",
                "Apple Watch Studio",
                "Apple Watch 밴드",
                "Apple Trade",
                "할부 방식",
              ],
            },
            {
              twoTitle: "그 외 Watch 관련 항목",
              twoList: ["Apple Watch 지원", "AppleCare+", "watchOS 10"],
            },
          ],
        },
        {
          OneTitle: "AirPods",
          childDepths: [
            {
              twoTitle: "AirPods 살펴보기",
              twoList: [
                "AirPods 모두 살펴보기",
                "AirPods Pro 2세대",
                "AirPods 2세대",
                "AirPods 3세대",
                "AirPods Max",
              ],
            },
            {
              twoTitle: "AirPods 쇼핑하기",
              twoList: ["AirPods 쇼핑하기", "AirPods 액세서리"],
            },
            {
              twoTitle: "그 외 AirPods 관련 항목",
              twoList: [
                "AirPods 지원",
                "헤드폰을 위한 AppleCare+",
                "Apple Music",
              ],
            },
          ],
        },
        {
          OneTitle: "고객지원",
          childDepths: [
            {
              twoTitle: "지원 상황 살펴보기",
              twoList: [
                "iPhone",
                "Mac",
                "iPad",
                "Watch",
                "AirPods",
                "Music",
                "TV",
              ],
            },
            {
              twoTitle: "도움 받기",
              twoList: ["커뮤니티", "보장 상태 확인하기", "수리", "문의하기"],
            },
            {
              twoTitle: "유용한 주제",
              twoList: [
                "AppleCare+ 구입하기",
                "Apple ID 및 암호",
                "청구 및 구독",
                "나의 찾기",
                "손쉬운 사용",
              ],
            },
          ],
        },
        {
          OneTitle: "더 살펴보기",
          childDepths: [
            {
              twoTitle: "추가 정보",
              twoList: ["TV 및 홈", "엔터테인먼트", "액세서리"],
            },
          ],
        },
      ],
    };
  },
}
</script>

<style lang="scss" scoped>
@mixin flexCenter {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

  .header__mobile {
    @include flexCenter();
    position: fixed;
    width: 100%;
    z-index: 900;
    padding: 0 16px;
    background-color: #f5f5f5;
    height: 45px;
    box-sizing: border-box;

    .header__logo {
      img {
        width: 26px;
      }
    }
    nav {
      @include flexCenter();
      .header__search {}
      .header__bag {}
      .header__icon {}
      .header__menu {
        .hamburger {}
      }
    }
  }
</style>
