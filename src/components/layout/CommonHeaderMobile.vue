<template>
  <header class="header__mobile">
    <router-link to="/">
      <h1 class="header__logo">
        <img src="@/assets/img/apple_logo.svg" alt="APPLE" />
      </h1>
    </router-link>
    <nav>
      <!-- search -->
      <div class="header__util header__search">
        <span class="material-symbols-outlined header__icon">search</span>
        <div class="nav__sub">
          <div class="sub__title">
            <span class="material-symbols-outlined util__icon-search">search</span>
            <input type="text" placeholder="검색" ref="search" />
          </div>
          <p class="link__title">빠른 링크</p>
          <ul class="util__link">
            <li v-for="search in util.search" :key="search">
              <router-link to="/Sub">
                <div class="list__wrap">
                  <span class="material-symbols-outlined util__icon">arrow_forward</span>
                  <span class="text_block">{{search}}</span>
                </div>
              </router-link>
            </li>
          </ul>
        </div>
      </div>

      <!-- bag -->
      <div class="header__util header__bag">
        <span class="material-symbols-outlined header__icon">shopping_bag</span>
        <div class="nav__sub">
          <div class="sub__title">
            <p class="box__text1">장바구니가 비어 있습니다.</p>
            <p class="box__text2">
              저장해둔 항목이 있는지 확인하려면 로그인하세요
            </p>
          </div>
          <p class="link__title">내 프로필</p>
          <ul class="util__link">
            <li v-for="(bagItem, index) in util.bag.icon" :key="index">
              <router-link to="/Sub">
                <div class="list__wrap">
                  <span class="material-symbols-outlined util__icon">{{ bagItem }}</span>
                  <span class="text_block">{{ util.bag.text[index] }}</span>
                </div>
              </router-link>
            </li>

          </ul>
        </div>
      </div>










      <div class="header__menu">
        <button class="hamburger" :class="close" @click="menuOn">
          <span></span>
          <span></span>
        </button>
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
      util : 
        {
          search : [
            "Apple Store Online에서 쇼핑하기","액세서리","AirPods","AirTag","Apple Trade In"
          ],
          bag : {
            icon : ["list_alt","favorite","person","login"],
            text : ["주문","관심 목록","계정","로그인"]
          }
        }
      
    };
  },
  methods : {
    /* menuOn() {
      if(this.active) {

      }
    } */
    /* if (this.activeMenu === index) {
        this.activeMenu = null; //마우스가 메뉴 항목 밖으로 나갈 때 비활성화
        this.shouldShowBlur = false;
      } */
    
  }
}
</script>

<style lang="scss" scoped>
  .header__mobile {
    @include flexCenter();
    background-color: #f5f5f5b7;
    font-size: 14px;
    padding: 0 16px;
    box-sizing: border-box;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 900;
    box-shadow: 0 0 10px rgba(174, 174, 174, 0.4);
    backdrop-filter: blur(10px);
    height: 45px;


    .header__logo {
    @include flexCenter;
    height: 45px;
    width: 80px;
    img {
      width: 25px;
    }
  }
    nav {
      @include flexCenter();
      height: 45px;
      
      // width: 120px;
      // .header__search {}
      // .header__bag {}
      .header__util {
        @include flexCenter();
        height: 100%;
        flex: 1;
        padding: 0 5px;
        .header__icon {
          color: #999;
          transition: .5s;
          cursor: pointer;

          &:hover {
            color: $main-text-color;
          }
        }
        .nav__sub {/* 2depth */
          @include mbMenu2Depth();
          background-color: #fafafa;
          padding: 50px 40px;
          box-sizing: border-box;
          display: none;
          // 여기~~~~~~~~~~~~
          
          .sub__title {
          margin-bottom: 30px;
          .util__icon-search {
            font-size: 30px;
            vertical-align: -5px;
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
          .link__title {
            font-size: 16px;
            color : $sub-text-color;
            margin-bottom: 10px;
          }
          .util__link {
            li {
              font-size: 16px;
              padding: 5px 0;
              margin: 3px 0;
              border-radius: 8px;
              line-height: 1.5;
              transition: .3s;
              
              &:hover {
                background-color: rgb(236, 236, 236);
              }
              .list__wrap {
                display: flex;
                
                .util__icon {
                  color: $sub-text-color;
                  font-size: 18px;
                  margin-right: 10px;
                  padding-left: 5px;
                  padding-top: 2px;
                }
                .text_block {
                  display: block;
                  width: 100%;
                }
              }
            }
          }
      
        }
      }
      .header__menu {
        color: $main-text-color;
        @include flexCenter();
        height: 100%;

        .hamburger {
          cursor: pointer;
          padding: 0 5px;
          width: 40px;
          height: 45px;
          position: relative;
          z-index: 900;
          &:hover span {
            background-color: $main-text-color;
          }
          span {
            display: block;
            width: 20px;
            margin: 0 auto;
            height: 2px;
            background-color: #999;
            transition: .5s;
            &:nth-child(1) {
              margin-bottom: 6px;
            }
            &:nth-child(2) {
              margin-top: 6px;
            }
          }
          &.close {
            span {
              transition: .5s;
              background-color: $main-text-color;
              // width: 25px;
            &:nth-child(1) {
              transform: rotate(45deg);
              margin-bottom: -2px;
            }
            &:nth-child(2) {
              transform: rotate(-45deg);
              margin-top: -2px;
              
            }
          }
          }
        }
      }
    }
  }
</style>
