<template>
  <footer class="footer wrap">
    <div class="inner">
      <div class="footer__text">
        <p>₩1,060,000은 iPhone 14 Pro Max 1TB 모델의 보상 판매 금액으로, 보상 판매 프로그램은 Apple의 파트너이자 독립적으로 운영되는 제3의 업체에 의해 제공됩니다. Apple 및 Apple의 계열사는 고객과 파트너 간 계약의 당사자가 아닙니다. 보상 판매 견적은 예상 금액이며 실제 보상 판매 금액은 예상 금액보다 낮을 수 있습니다. 보상 판매 금액은 보상 판매 대상이 되는 제품의 상태, 연도, 구성에 따라 달라집니다. 일부 기기는 보상 판매 대상이 아닙니다. 크레딧 또는 Apple Store Gift Card로 보상 판매를 받으려면 19세 이상이어야 합니다. 보상 판매 금액은 적용 가능한 새 기기 구입 시 적용하거나 Apple Store Gift Card로 받을 수 있습니다. 최종 확정 금액은 보상 판매 대상 기기를 수령한 후, 예상 금액 산정 시 제시한 기기의 설명과 일치하는지 비교 검수 후 정해집니다. 부가세는 새로 구입한 기기의 총액을 바탕으로 부과됩니다. 일부 매장에서는 보상 판매를 제공하지 않으며, 매장 내 보상 판매와 온라인 보상 판매 프로그램 간 내용에 차이가 있을 수 있습니다. 일부 매장은 추가 요구 사항이 있을 수 있습니다. Apple의 보상 판매 파트너사는 어떤 보상 판매도 거래를 거부하거나, 보상 판매 수량을 제한할 권리를 보유합니다. 적용 가능 기기의 보상 판매 및 재활용에 대한 자세한 내용은 Apple의 보상 판매 파트너사에서 확인할 수 있습니다. 규제 및 제한이 적용될 수 있습니다.</p>
        <p>Apple TV+ 이용을 위해서는 가입이 필요합니다.</p>
      </div>
      <nav class="footer__nav">
        <ul class="footer-nav__flex-container">
          <li 
          v-for="(navList, index) in footerNav" 
          :key="index" 
          class="footer-nav__flex-item"
          >
            <h3 
            class="footer-nav__title" 
            @click="handleNavToggle(index)" 
            :class="{ 'rotate' : showList[index]}"> 
              {{ navList.title }} 
            </h3>
            <ul 
            class="footer-nav__list" 
            :class="{'slide-down' : showList[index]}">
              <li 
              v-for="item in navList.list" 
              :key="item">
                <router-link to="/Sub2" 
                class="footer-nav__link"> 
                  {{ item }} 
                </router-link>
              </li>
            </ul>
          </li>
        </ul>
        <p class="footer__nav-text">다양한 쇼핑 방법: <a href="javascript:void(0);">Apple Store를 방문</a>하거나, <a href="javascript:void(0);">리셀러</a>를 찾아보거나, 080-330-8877번으로 전화하세요.</p>
      </nav>
      <nav class="footer__info">
        <div class="footer__info-flex">
          <span class="info__country">대한민국</span>
          <small class="info__copyright">Copyright 2023 Apple Inc. 모든 권리 보유.</small>
          <ul class="info__nav">
            <li class="info__nav-list" v-for="infoList in footerInfo" :key="infoList">
              <router-link to="/Sub2"> {{infoList}} </router-link>
            </li>
          </ul>
        </div>
        <p class="footer__info-text">사업자등록번호 : 120-81-84429 | 통신판매업신고번호 : 제 2011-서울강남-00810호 | 대표이사 : PETER DENWOOD | 주소 : 서울 특별시 강남구 영동대로 517 | 대표전화 : 02-6712-6700</p>
      </nav>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'CommonFooter',
  data() {
    return {
      showList : [],
      footerNav : [
        { title : '쇼핑 및 알아보기' , 
          list : ['스토어', 'Mac', 'iPad', 'iPhone', 'Watch', 'AirPods', 'TV 및 홈', 'AirTag', '액세서리']},
        { title : 'Apple 지갑' , 
          list : ['지갑', 'Apple Pay']},
        { title : '계정', 
          list : ['Apple ID 관리', 'Apple Store 계정', 'iCloud.com']},
        { title : '엔터테인먼트', 
          list : ['Apple One', 'Apple TV+', 'Apple Music', 'Apple Arcade', 'Apple Podcasts', 'Apple Books', 'Apple Store']},
        { title : 'Apple Store', 
          list : ['매장 찾기', 'Genius Bar', 'Today at Apple', 'Apple 캠프', 'Apple Store 앱', '인증 리퍼러쉬 제품', 'Apple Trade In', '할부 방식', '주문 상태', '쇼핑 도움말']},
        { title : '비즈니스', 
          list : ['Apple과 비즈니스', '비즈니스를 위한 제품 쇼핑하기']},
        { title : '교육', 
          list : ['Apple과 교육', '초중고용 제품 쇼핑하기', '대학 생활을 위한 제품 쇼핑하기']},
        { title : 'Apple의 가치관', 
          list : ['손 쉬운 사용', '교육', '환경', '개인정보 보호', '협력업체에 대한 책임']},
        { title : 'Apple 정보', 
          list : ['Newsroom', 'Apple 리더십', '채용 안내', '윤리 및 규정 준수', '이벤트', '일자리 창출', 'Apple 연락처']}
      ],
      footerInfo : [
        '개인정보 처리방침', ' 웹 사이트 이용 약관', '판매 및 환불', '법적 고지', '사이트맵'
      ]
    }
  },
  methods : {
    handleNavToggle(index) {
      if (window.innerWidth < 768) {
        this.showList[index] = !this.showList[index];
      } else {
        this.showList[index] = false
      }
    }
  },
  created() {
    const mediaQuery = window.matchMedia('(min-width: 768px)');

    // 화면 크기에 따라 showList 초기화
    if (mediaQuery.matches) {
      this.showList = new Array(this.footerNav.length).fill(false);
    }

    // 화면 크기 변화에 대응하여 showList 초기화
    mediaQuery.addEventListener('change', (event) => {
      if (event.matches) {
        this.showList = new Array(this.footerNav.length).fill(false);
      }
    }); 
  }
}
</script>

<style lang="scss" scoped>
  footer {
    font-size: 13px;
    color: $footer-text-color;
    background-color: #f5f5f7;
    padding: 70px 0;
    
    $footerUnderLine : 'text', 'nav', 'info';
    @each $class in $footerUnderLine {
      .footer__#{$class} {
        padding: 0.625rem 0 1.125rem;

        &:first-child {
          border-bottom: 1px solid $footer-border-color;
        }
      }
    } 
    .footer__text {
      line-height: 1.4;
      p:first-child {
        padding-bottom: 0.625rem;
      }
    }
    .footer__nav {
      .footer-nav__title {
        color: $footer-text-color;
        padding: 0.75rem 0 0.375rem;
        cursor: pointer;
        position: relative;
        &::after {
          content: '\e145';
          // 혹은 content: 'add';
          font-family: 'Material Symbols Outlined';
          font-size: 14px;
          position: absolute;
          right: 0;
          transition: .5s;
        }
        &.rotate::after {
          transform: rotate(45deg);
          transition: .5s;
        }
      }
      .footer-nav__list {
        overflow: hidden;
        max-height: 0;
        padding: 0 0 0.375rem 1rem;
        border-bottom: 1px solid $footer-border-color;

        &.slide-down {
          max-height: 62.5rem;
          transition: max-height .5s ease;
        }
        .footer-nav__link {
          display: block;
          padding: 0.5rem 0;
          &:hover {
            text-decoration: underline;
          }
        }
      }
      .footer__nav-text {
        padding-top: 1.125rem;
        a {
          color: #0066cc;
          text-decoration: underline;
        }
      }
    }
    .footer__info {
      .footer__info-flex {
        display: flex;
        flex-direction: column;

        .info__country {
          color: $footer-title-color;
        }
        .info__copyright {
          padding: 0.9375rem 0 0.625rem;
        }
        .info__nav {
          color: $footer-title-color;
          display: flex;
          column-gap: 0.625rem;
          row-gap: 0.25rem;
          flex-wrap: wrap;

          .info__nav-list {
            &:not(:last-child):after {
              content: '';
              border-right: 1px solid $footer-title-color;
              margin-left: 0.625rem;
            }
            &:hover {
              text-decoration: underline;
            }
          }
        }
      }
      .footer__info-text {
        padding-top: 0.75rem;
        line-height: 1.3;
      }
    }
  }

@media screen and (min-width : 768px) {
  footer {
    .footer__nav {
      .footer-nav__flex-container {
        display: flex;
        flex-wrap: wrap;
        flex-direction: column; 
        gap: 0.625rem;
        height: 28.125rem;
        
        .footer-nav__title {
          color : $footer-title-color;
          &::after {
            display: none;
          }
        }
        .footer-nav__flex-item {
          margin-top: 0.625rem;
          .footer-nav__list {
            overflow: visible;
            max-height: 62.5rem;
            border-bottom: none;
            padding: 0;

            .footer-nav__link {
              padding: 0.375rem 0;
            }
          }
        }
      }
    }
    .footer__info {
      .footer__info-flex {
        flex-direction: row;
        column-gap: 15px;
        justify-content: space-between;

        .info__country {
          order: 3;
        }
        .info__copyright {
          padding: 0;
          order: 1;
        }
        .info__nav {
          order: 1;
          row-gap: 0;
          flex: 1;
        }
      }
      .footer__info-text {
        font-size: 12px;
      }
    }
  }
}
</style>

