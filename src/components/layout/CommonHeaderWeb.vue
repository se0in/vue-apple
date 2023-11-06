<template>
  <header class="header__web">
    <router-link to="/">
      <h1 class="header__logo">
        <img src="@/assets/img/apple_logo.svg" alt="APPLE" />
      </h1>
    </router-link>
    <ul class="header__nav inner" @mouseenter="hideUtilArea('search', 'bag')">
      <li v-for="(menu, index) in webMenu" :key="index" class="nav__for" @mouseenter="showMenu(index)"
        @mouseleave="hideMenu(index)">
        <router-link to="/Sub" @click="closeMenu">
          <div class="nav__title">{{ menu.OneTitle }}</div>
        </router-link>
        <!-- 2depth menu -->
        <div class="nav__list" :class="{ 'show-menu': activeMenu === index }">
          <div class="inner look__wrap">
            <div class="look__list" v-for="(depth, depthIndex) in menu.childDepths" :key="depthIndex">
              <div class="look__title">{{ depth.twoTitle }}</div>
              <ul>
                <li v-for="(list, listIndex) in depth.twoList" :key="listIndex">
                  <router-link to="/Sub" @click="closeMenu">{{ list }}</router-link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </li>
    </ul>
    <ul class="header__util">
      <li class="header__search util__list">
        <span class="material-symbols-outlined util__icon" @click="toggleUtilArea('search'); setFocus();">search</span>
        <div class="util__area" :class="{ 'toggle-util-area': activeUtilArea === 'search' }">
          <div class="inner util__wrap">
            <div class="util__box">
              <span class="material-symbols-outlined">search</span>
              <input type="text" placeholder="apple.com 검색하기" ref="search" />
            </div>
            <ul class="util__link">
              <li class="link__title">빠른 링크</li>
              <ul>
                <li v-for="searchList in search.text" :key="searchList.text">
                  <span class="material-symbols-outlined">{{ searchList.icon }}</span>
                  <router-link :to="searchList.to" @click="closeMenu">{{ searchList.text }}</router-link>
                </li>
              </ul>
            </ul>
          </div>
        </div>
      </li>
      <li class="header__bag util__list">
        <span class="material-symbols-outlined util__icon" @click="toggleUtilArea('bag')">shopping_bag</span>
        <div class="util__area" :class="{ 'toggle-util-area': activeUtilArea === 'bag' }">
          <div class="inner util__wrap">
            <div class="util__box">
              <p class="box__text1">장바구니가 비어 있습니다.</p>
              <p class="box__text2">
                저장해둔 항목이 있는지 확인하려면 로그인하세요
              </p>
            </div>
            <ul class="util__link">
              <li class="link__title">내 프로필</li>
              <ul>
                <li v-for="bagList in bag" :key="bagList">
                  <span class="material-symbols-outlined">{{ bagList.icon }}</span>
                  <router-link :to="bagList.to" @click="closeMenu">{{ bagList.text }}</router-link>
                </li>
              </ul>
            </ul>
          </div>
        </div>
      </li>
    </ul>
    <div @mouseenter="hideUtilArea('search', 'bag')" :class="{ nav__blur: shouldShowBlur }"></div>
  </header>
</template>

<script>
export default {
  name: "CommonHeader",
  props: {
    msg: String,
    menu: Object,
  },
  data() {
    return {
      webMenu: [
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
      search: {
        icon: "arrow_forward",
        text: [
          { icon: "arrow_forward", text: "Apple Store Online에서 쇼핑하기", to: "/Sub" },
          { icon: "arrow_forward", text: "액세서리", to: "/Sub" },
          { icon: "arrow_forward", text: "AirPods", to: "/Sub" },
          { icon: "arrow_forward", text: "AirTag", to: "/Sub" },
          { icon: "arrow_forward", text: "Apple Trade In", to: "/Sub" }
        ]
      },
      bag: [
        { icon: "list_alt", text: "주문", to: "/Sub" },
        { icon: "favorite", text: "관심 목록", to: "/Sub" },
        { icon: "person", text: "계정", to: "/Sub" },
        { icon: "login", text: "로그인", to: "/Sub" },
      ],
      activeMenu: null,
      activeUtilArea: null,
      shouldShowBlur: false,
    };
  },
  methods: {
    showNavBlur() {
      if (this.activeUtilArea !== null) {
        this.shouldShowBlur = true;
      }
    },
    showMenu(index) {
      this.activeMenu = index; //인덱스를 설정하여 해당 메뉴의 하위메뉴 표시
      this.shouldShowBlur = true;
    },
    hideMenu(index) {
      if (this.activeMenu === index) {
        this.activeMenu = null; //마우스가 메뉴 항목 밖으로 나갈 때 비활성화
        this.shouldShowBlur = false;
      }
    },
    toggleUtilArea(area) {
      if (this.activeUtilArea === area) {
        this.activeUtilArea = null; // 이미 활성화된 경우 숨김
      } else {
        this.activeUtilArea = area; // 클릭한 아이콘에 해당하는 유틸리티 영역 활성화
      }
      this.shouldShowBlur = this.activeUtilArea !== null; // activeUtilArea가 있는 경우에만 블러 표시
    },
    hideUtilArea(area1, area2) {
      if (this.activeUtilArea === area1 || this.activeUtilArea === area2) {
        this.activeUtilArea = null; // 이미 활성화된 경우 숨김
        this.shouldShowBlur = false; // 어떤 유틸리티 영역도 활성화되지 않으면 블러 숨김
      }
    },
    closeMenu() {
      this.activeMenu = null;
      this.activeUtilArea = null;
      this.shouldShowBlur = false;
    },
    setFocus: function () { this.$refs.search.focus(); }
  },

};    
</script>

<style lang="scss" scoped>
.header__web {
  @include flexCenter;
  background-color: $header-color;
  font-size: 14px;
  padding: 0 16px;
  box-sizing: border-box;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 900;
  box-shadow: 0 0 10px rgba(174, 174, 174, 0.4);

  .header__logo {
    @include flexCenter;
    height: 100%;
    width: 80px;
    height: 40px;

    img {
      width: 25px;
    }
  }

  .header__nav {
    @include flexCenter;
    width: 100%;

    .nav__for {
      height: 100%;
      flex: 1;

      .nav__title {
        padding: 12px 0;
        height: 100%;
        display: block;
        width: 100%;
        text-align: center;
      }

      .nav__list {
        position: fixed;
        top: 40px;
        left: 0;
        width: 100%;
        background-color: $header-color;
        z-index: 920;
        transition: max-height 0.5s;
        max-height: 0;
        overflow: hidden;
        box-shadow: 0 10px 20px rgba(174, 174, 174, 0.2);

        &.show-menu {
          max-height: 1000px;
        }

        .look__wrap {
          display: flex;
          padding: 50px 16px;
          gap: 50px;

          .look__list {
            &:first-child {
              font-size: 20px;
              font-family: "Noto Sans KR", "Pretendard-Regular", sans-serif;
              font-weight: 600;
            }

            .look__title {
              font-size: 13px;
              font-weight: 400;
              color: $sub-text-color;
              font-family: "Pretendard-Regular", "Noto Sans KR", sans-serif;
              margin-bottom: 16px;
            }

            ul {
              line-height: 1.8;

              li {
                color: #363636;
                transition: 0.3s;

                &:hover {
                  color: $main-text-color;
                }
              }
            }
          }
        }
      }
    }
  }

  .header__util {
    @include flexCenter();
    color: #999;

    .util__list {
      .util__icon {
        cursor: pointer;
        transition: 0.5s;
        text-align: right;
        width: 40px;
        padding: 8px 0;

        &:hover {
          color: $main-text-color;
        }
      }
    }

    .util__area {
      position: fixed;
      width: 100%;
      top: 40px;
      left: 0;
      background-color: #f5f5f5;
      z-index: 990;
      color: $sub-text-color;
      max-height: 0;
      transition: max-height 0.5s;
      overflow: hidden;

      &.toggle-util-area {
        max-height: 1000px;
      }

      .util__wrap {
        padding: 50px 16px;

        .util__box {
          span {
            font-size: 30px;
            vertical-align: -10px;
            margin-right: 10px;
          }

          input {
            width: calc(100% - 45px);
            font-size: 30px;
            height: 50px;
            font-family: "Pretendard-Regular", "Noto Sans KR", sans-serif;
            background-color: transparent;
            border: none;
            outline: none;

            &::placeholder {
              font-family: "Noto Sans KR", "Pretendard-Regular", sans-serif;
              font-weight: 500;
              letter-spacing: -2px;
              font-size: 30px;
            }
          }

          .box__text1 {
            font-size: 30px;
            color: $main-text-color;
          }

          .box__text2 {
            margin-top: 20px;
          }
        }

        .util__link {
          margin-top: 30px;

          li {
            color: $main-text-color;
            font-size: 14px;
            padding: 6px 0;

            &.link__title {
              color: $sub-text-color;
              margin: 5px 0;
            }

            span {
              font-size: 16px;
              vertical-align: -3px;
              color: $sub-text-color;
              margin-right: 8px;
            }
          }
        }
      }
    }
  }

  .nav__blur {
    position: fixed;
    top: 40px;
    left: 0;
    height: 100vh;
    transition: backdrop-filter .3s;
    width: 100%;
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    transition: backdrop-filter .3s, -webkit-backdrop-filter .3s;
  }
}
</style>