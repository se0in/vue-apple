<template>
  <header class="header__web">
    <h1 class="header__logo">
      <router-link to="/"><img src="@/assets/img/apple_logo.svg" alt="APPLE"></router-link>
    </h1>
    <ul class="header__nav inner">
      <li v-for="(menu, index) in webMenu" :key="index" class="nav__for">
        <router-link to="/Sub">
          <div class="nav__title">{{ menu.Onetitle }}</div>
        </router-link>
        <div class="nav__list">
          <div class="inner look__wrap">
            <div class="look__list" v-for="(depth, depthIndex) in menu.childDepths" :key="depthIndex">
              <div class="look__title">{{ depth.twoTitle }}</div>
              <ul>
                <li v-for="(list, listIndex) in depth.twoList" :key="listIndex">
                  <router-link to="/Sub">{{ list }}</router-link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </li>
    </ul>
    <ul class="header__util">
      <li class="header__search util__list">
        <span class="material-symbols-outlined util__icon">search</span>
        <div class="util__area">
          <div class="inner">
            <div class="util__box">
              <span class="material-symbols-outlined">search</span>
              <input type="text" placeholder="apple.com 검색하기" autofocus>
            </div>
            <ul class="util__link">
              <li class="link__title">빠른 링크</li>
              <li>
                <span class="material-symbols-outlined">arrow_forward</span>
                <router-link to="/Sub">Apple Store Online에서 쇼핑하기</router-link>
              </li>
              <li>
                <span class="material-symbols-outlined">arrow_forward</span>
                <router-link to="/Sub">액세서리</router-link>
              </li>
              <li>
                <span class="material-symbols-outlined">arrow_forward</span>
                <router-link to="/Sub">AirPods</router-link>
              </li>
              <li>
                <span class="material-symbols-outlined">arrow_forward</span>
                <router-link to="/Sub">AirTag</router-link>
              </li>
              <li>
                <span class="material-symbols-outlined">arrow_forward</span>
                <router-link to="/Sub">Apple Trade In</router-link>
              </li>
            </ul>
          </div>
        </div>
      </li>
      <li class="header__bag util__list">
        <span class="material-symbols-outlined util__icon">shopping_bag</span>
        <div class="util__area">
          <div class="inner">
            <div class="util__box">
              <p class="box__text1">장바구니가 비어 있습니다.</p>
              <p class="box__text2">저장해둔 항목이 있는지 확인하려면 로그인하세요</p>
            </div>
            <ul class="util__link">
              <li class="link__title">내 프로필</li>
              <li>
                <span class="material-symbols-outlined">list_alt</span>
                <router-link to="/Sub">주문</router-link>
              </li>
              <li>
                <span class="material-symbols-outlined">favorite</span>
                <router-link to="/Sub">관심 목록</router-link>
              </li>
              <li>
                <span class="material-symbols-outlined">person</span>
                <router-link to="/Sub">계정</router-link>
              </li>
              <li>
                <span class="material-symbols-outlined">login</span>
                <router-link to="/Sub">로그인</router-link>
              </li>
            </ul>
          </div>
        </div>
      </li>
    </ul>
    <div class="nav__blur"></div>
  </header>
</template>

<script>
export default {
  name: 'CommonHeader',
  props: {
    msg: String,
    menu: Object,
  },
  data() {
    return {
      webMenu: [
        {
          Onetitle: '스토어',
          childDepths: [{ 
            twoTitle: '쇼핑하기',
            twoList: ['최신 제품 쇼핑하기', 'Mac', 'iPad', 'iPhone', 'Apple Watch', '액세서리'],
          },{
            twoTitle: '빠른 링크',
            twoList: ['매장 찾기', '주문 상태', 'Apple Trade In', '할부 방식'],
          },{
            twoTitle: '특별 할인 쇼핑하기',
            twoList: ['인증 리퍼러쉬 제품', '교육', '비즈니스'],
            },],
        },
        {
          Onetitle: 'Mac',
          childDepths: [{ 
            twoTitle: 'Mac 살펴보기',
            twoList: ['Mac 모두 살펴보기', 'MacBook Air', 'MacBook Pro', 'iMac', 'Mac mini', 'Mac Studio','MAc Pro','디스플레이'],
          },{
            twoTitle: 'Mac 쇼핑하기',
            twoList: ['Mac 쇼핑하기', 'Mac 액세서리', 'Apple Trade In', '할부 방식'],
          },{
            twoTitle: '그 외 Mac 관련 항목',
            twoList: ['Mac 지원', 'Mac을 위한 AppleCare+', 'macOS Sonoma', 'Final Cut Pro', 'Logic Pro', '연속성', 'iCloud+','Mac과 비즈니스', '교육'],
            },],
        },
        {
          Onetitle: 'iPad',
          childDepths: [{ 
            twoTitle: 'iPad 살펴보기',
            twoList: ['iPad 모두 살펴보기', 'iPad Pro', 'iPad Air', 'iPad', 'iPad mini', 'Apple Pencil','키보드'],
          },{
            twoTitle: 'iPad 쇼핑하기',
            twoList: ['iPad 쇼핑하기', 'iPad 액세서리', 'Apple Trade In', '할부 방식'],
          },{
            twoTitle: '그 외 iPad 관련 항목',
            twoList: ['iPad 지원', 'iPad 위한 AppleCare+', 'iPadOS 17', 'iPad용 Final Cut Pro', 'ipad용 Logic Pro','iCloud+','교육'],
            },],
        },
        {
          Onetitle: 'iPhone',
          childDepths: [{ 
            twoTitle: 'iPhone 살펴보기',
            twoList: ['iPhone 모두 살펴보기', 'iPhone 15 Pro', 'iPhone 15', 'iPhone 14', 'iPhone 13', 'iPhone SE'],
          },{
            twoTitle: 'iPhone 쇼핑하기',
            twoList: ['iPhone 쇼핑하기', 'iPhone 액세서리', 'Apple Trade In', '할부 방식'],
          },{
            twoTitle: '그 외 iPhone 관련 항목',
            twoList: ['iPhone 지원', 'iPhone 위한 AppleCare+', 'IOS 17', 'iPhone의 개인 정보 보호', 'iCloud+','Apple 지갑, Apple Pay', 'Siri'],
            },],
        },
        {
          Onetitle: 'Watch',
          childDepths: [{ 
            twoTitle: 'Watch 살펴보기',
            twoList: ['Apple Watch 모두 살펴보기', 'Apple Watch Series 9', 'Apple Watch Ultra 2', 'Apple Watch SE', 'Apple Watch Nike', 'Apple Watch Hermés'],
          },{
            twoTitle: 'Watch 쇼핑하기',
            twoList: ['Apple Watch 쇼핑하기', 'Apple Watch Studio', 'Apple Watch 밴드','Apple Trade', '할부 방식'],
          },{
            twoTitle: '그 외 Watch 관련 항목',
            twoList: ['Apple Watch 지원','AppleCare+','watchOS 10'],
            },],
        },
        {
          Onetitle: 'AirPods',
          childDepths: [{ 
            twoTitle: 'AirPods 살펴보기',
            twoList: ['AirPods 모두 살펴보기', 'AirPods Pro 2세대', 'AirPods 2세대', 'AirPods 3세대', 'AirPods Max'],
          },{
            twoTitle: 'AirPods 쇼핑하기',
            twoList: ['AirPods 쇼핑하기','AirPods 액세서리'],
          },{
            twoTitle: '그 외 AirPods 관련 항목',
            twoList: ['AirPods 지원','헤드폰을 위한 AppleCare+','Apple Music'],
            },],
        },
        {
          Onetitle: '고객지원',
          childDepths: [{ 
            twoTitle: '지원 상황 살펴보기',
            twoList: ['iPhone','Mac','iPad','Watch','AirPods','Music','TV'],
          },{
            twoTitle: '도움 받기',
            twoList: ['커뮤니티','보장 상태 확인하기','수리','문의하기'],
          },{
            twoTitle: '유용한 주제',
            twoList: ['AppleCare+ 구입하기', 'Apple ID 및 암호','청구 및 구독', '나의 찾기', '손쉬운 사용'],
            },],
        },
        {
          Onetitle: '더 살펴보기',
          childDepths: [{ 
            twoTitle: '추가 정보',
            twoList: ['TV 및 홈','엔터테인먼트','액세서리'],
          }],
        },
      ],
  }
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
    background-color: #f5f5f5;
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
        &:hover .nav__list { 
          display: block;
        }
        &:hover .nav__blur { //스크립트로 블러에 손 대도 사라져야함
          display: block;
        }
          .nav__list {
            position: fixed;
            top: 40px;
            left: 0;
            width: 100%;
            background-color: #f5f5f5;
            padding: 50px 0;
            z-index: 920;
            display: none;
            
            .look__wrap {
              display: flex;
              gap: 50px;

            .look__list {
              
              &:first-child {
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
                li {
                  color: #363636;
                  transition: .3s;
                  &:hover {
                    color: var(--main-text-color);
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
      gap: 10px;
      color: #ddd;
      // width: 60px;
      .util__list {
        .util__icon {
          cursor: pointer;
          transition: .5s;
          &:hover {
            color : var(--sub-text-color)
          }  
        }
      }
      .util__area {
        position: fixed;
        width: 100%;
        top: 40px;
        left: 0;
        background-color: #f5f5f5;
        z-index: 9999;
        padding: 50px 0;
        color: var(--sub-text-color);
        // display: none;
      }
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
          font-family: 'Pretendard-Regular', 'Noto Sans KR',  sans-serif;
          background-color: transparent;
          border: none;
          outline: none;

          &::placeholder {
            font-family: 'Noto Sans KR', 'Pretendard-Regular', sans-serif;
            font-weight: 600;
            letter-spacing: -2px;
            font-size: 30px;
          }
        }
        .box__text1 {
          font-size: 30px;
          color: var(--main-text-color);
        }
        .box__text2 {
          margin-top: 20px;
        }
      }
      .util__link {
        margin-top: 30px;
        li {
          color: var(--main-text-color);
          font-size: 14px;
          padding: 6px 0;
          &.link__title {
            color: var(--sub-text-color);
            margin: 5px 0;
          }
          span {
            font-size: 16px;
            vertical-align: -3px;
            color: var(--sub-text-color);
            margin-right: 8px;  
          }
        }
        
      } 
    }
  }
.nav__blur {
  position: fixed;
  top: 40px;
  left: 0;
  width: 100%;
  height: 100vh;
  display: none;
  backdrop-filter: blur( 8px );
  -webkit-backdrop-filter: blur( 8px );
}/* 
&:hover .nav__blur { //스크립트로 블러에 손 대도 사라져야함
          display: block;
        } */
</style>
