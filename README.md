# Vue apple store
✨ 링크 : https://seoin-apple.netlify.app ✨  
(이미지 로딩이 좀 걸립니다😂😥)  
<br>
Vue로 작업한 apple store  

## 📣 프로젝트 소개
- 개인프로젝트
- Vue를 사용하여 apple store 리뉴얼 및 카피
- 로고(메인 이동)를 제외한 이동 버튼은 모두 서브페이지로 이동합니다.

### 📅 작업 기간
- 2023년 10월 15일 ~ 2023년 11월 7일

### 💻 사용 툴 및 작업 언어
- Adobe XD (디자인)
- Visual Studio Code
    - Vue, SCSS

<br>

## 🎮 주요기능
### 반응형
  #### ◼ 메인 페이지
  |web|mobile|
  |:---:|:---:|
  |<img src="./src/assets/img/readme/readme_web-main.png" height="50%" width="100%" alt=""/>|<img src="./src/assets/img/readme/readme_mb-main.png" height="50%" width="100%" alt=""/>|
  
  #### ◼ 서브 페이지
  |web|mobile|
  |:---:|:---:|
  |<img src="./src/assets/img/readme/readme_web-sub.png" height="50%" width="100%" alt=""/>|<img src="./src/assets/img/readme/readme_mb-sub.png" height="50%" width="100%" alt=""/>|

  #### ◼ MENU
  |web|mobile|
  |:---:|:---:|
  |<img src="./src/assets/img/readme/read-web-menu.png" height="30%" width="100%" alt=""/>|<img src="./src/assets/img/readme/read-mb-menu.png" height="30%" width="100%" alt=""/>|

  #### ◼ footer
  |web|mobile|
  |:---:|:---:|
  |<img src="./src/assets/img/readme/read-web-footer.png" height="30%" width="100%" alt=""/>|<img src="./src/assets/img/readme/read-mb-footer.png" height="30%" width="100%" alt=""/>|


### 동적 요소

#### 메인 페이지
|1.동영상|2.스와이퍼|3.팝업|4.호버 슬라이드|
|---|---|---|---|
|![image](./src/assets/img/readme/read-main1.png)|![image](./src/assets/img/readme/read-main2.png)|![image](./src/assets/img/readme/read-main3.png)|![image](./src/assets/img/readme/read-main4.png)|
|동영상 재생 완료 후 이미지로 변경|vue로 스와이퍼 작업|클릭 시 팝업(내용은 이미지 처리) 띄움. 워치,에어팟,맥북,아이패드 별 다른 이미지 연결|시간 지남과 호버 시 영역 넓어지는 슬라이드|

#### 서브 페이지
|1.스크롤 이벤트|2.position:sticky; 사용/스와이퍼|3.클릭 시 이미지 전환|4.동영상 삽입 + 스크롤 위치에 따른 이미지 확대|
|---|---|---|---|
|![image](./src/assets/img/readme/read-sub1.png)|![image](./src/assets/img/readme/read-sub2.png)|![image](./src/assets/img/readme/read-sub3.png)|![image](./src/assets/img/readme/read-sub4.png)|
|스크롤 동적 이벤트|스와이퍼 이미지 sticky, 우측 스크롤, 버튼 클릭 전에는 다음 버튼 비활성화|해당 위치에 오면 하단 버튼 fixed 및 이미지 변경|해당 위치에 오면 하단 버튼 fixed 및 동영상 삽입|


<br>
<br>

## 📌 프로젝트 작업하며 얻은 코드

<details>
  <summary>라우터로 사용하여 App.vue 말고 원하는 페이지로 첫화면 변경하는 법</summary>
  <br>

  - 루트에 있는 App.vue를 아예 사용 안할 순 없었다. 각각 나눈 페이지를 모으는 곳으로 작업했기 때문이다.

  1. 헤더 로고 부분을 <router-link to="/"> 최상위 루트(/)로 바꾸고 

      ```html
      //CommonHeader.vue

      <router-link to="/">로고</router-link>   |  
      <router-link to="/Sub">스토어</router-link>
      <router-link to="/Sub">Mac</router-link>
      <router-link to="/Sub">iPad</router-link>
      <router-link to="/Sub">iPhone</router-link>
      <router-link to="/Sub">Watch</router-link>
      ```
  
  2. router/index.js에 내가 원하는 (HomePage.vue)곳 path를 /루트로 바꿨더니 완료!
      ```javascript
        { 
          path: '/',
          component: () => import(
            '../components/pages/home/HomePage')
        }
      ```
  
  - `<router-view></router-view>`
    - 렌더링이 되어 화면이 전환된 곳이니 헤더/렌더링/푸터만 있는 페이지(App)가 있어야했다.
    - router-link to(전환될 위치)와 연결되니 (라우터 관련) 화면이 전환될 곳이 넣어줄 것!
</details>

<details>
  <summary>apple store footer처럼 모바일과 순서는 같지만 웹 사이즈에서 왼쪽 상단부터 쌓이게 정렬하는 법</summary>
  <br>

  - div로 한 번 더 묶어야 하나 했지만 잘 생각해보니 쉽게 해결될 일이었다.

   ```scss

   //미디어쿼리
  .footer-nav__flex-container {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column; /* 세로 방향으로 나열하고 */
    gap: 10px;
    height: 450px; /* 높이값 정해주면 그 안에 채워짐 */
  }
  ```

</details>

<details>
  <summary>v-for 반복문으로 이미지 가져오는 법</summary>
  <br>

  - vue에서 이미지를 가져올 때는 require를 가용하여 모듈로 가져오는 것이 일반적이다

    ```javascript
        return {
          swiperSlide : [
            require('@assets/img/HomeFirst_1.png'),
            require('@assets/img/HomeFirst_2.png'),
            require('@assets/img/HomeFirst_3.png')
          ]
        }
    ```

</details>

<details>
<summary>모바일에선 스와이퍼 width 100%, 웹화면에선 1.5</summary>
  <br>

  - 웹에선 가운데를 기준으로 1.5개가 보여 좌우로 미리볼 수 있도록 하려했는데 아무리 속성을 변경하고 추가해봐도 페이지네이션이 자연스럽게 흘러가지 않고 , 다음 미리보기가 보이지 않는 둥 오류가 끊이지 않았다.

    #### 해결 방법
    - 원인 : swiper-slide를 3개만 만들어서 그런거였다
    - slidesPerView를  1.5로 등록하고 slidesPerView가 3개뿐이니 오류가 난 것. 4개로 늘리니 해결됐다!

</details>


<details>
<summary>vue에서 input autofocus 하는 방법</summary>
  <br>

  - input autofocus 를 넣었는데 먹히지 않았다. 찾아보니 방법이 다르다고 함
    

    #### 해결 방법
    1. 포커스가 될 input 태그에 ref값을 설정
    2. 원하는 methods에 this.$refs.설정값.focus() 입력
    3. 클릭 시 input영역이 나타날 곳에 `@click="methods명()" 추가 
    4. 모바일 메뉴에선 검색 서브메뉴가 열릴 때 실행되도록 했다.

    ```html
      <li class="header__search util__list">
          <span class="material-symbols-outlined util__icon" @click="toggleUtilArea('search'), setFocus()">search</span>
          <div class="util__area" :class="{ 'toggle-util-area': activeUtilArea === 'search' }">
            <div class="inner util__wrap">
              <div class="util__box">
                <span class="material-symbols-outlined">search</span>
                <input type="text" placeholder="apple.com 검색하기" ref="search" />
              </div>
              <!-- ...생략 -->
            </div>
          </div>
        </li>
    ```
    ```javascript
      //methods 부분  
      setFocus: function()
        {
          this.$refs.search.focus();
        }
    ```

    - 모바일 메뉴
    ```javascript
       MenuShow(index, type) {
        this.menuAreaShow[type] = !this.menuAreaShow[type];
        this.closeButton = !this.closeButton;
        if (this.menuAreaShow.search) {
          this.$nextTick(() => {
            this.$refs.search.focus();
          });
        }
      },
    ```

</details>


<details>
<summary>vue에서 slideDown 효과 주기</summary>
  <br>

  - scss와 methods로 해결
    

    #### 해결 방법
    1. scss로 레이아웃 잡고 toggle-util-area 클래스가 붙을 경우 max-height를 최대높이 1000px로 잡음
    2. 클래스 붙기 전 max-height 0px로 숨기고 max-height에만 transition을 준다.
    3. template에는 `:class="{ 'toggle-util-area': activeUtilArea === 'bag' }`로 조건을 걸어서 참일 때만 class가 붙는다.

    ```scss
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
       }   
    ```

</details>

<details>
<summary>scss파일 (mixin, variables) 매번 import없이 전역으로 설정하기</summary>
  <br>
 
  #### 해결 방법
  1. scss폴더에 파일 만들기 (scss변수를 모아놓은 파일은 파일 명 앞에 _를 붙이면 자동으로 변수모음파일이라고 인식한다고 함)
  2. vue.config.vs 파일에 코드 추가
  ```javascript
    css: {
      loaderOptions: {
        sass: {
          additionalData: `@import "@/assets/scss/_variables.scss"; @import "@/assets/scss/mixin.scss";`,
        },
      },
    },
  ```
  3. 추가 후 꼭!! 빌드를 시켜줘야 함
  4. App.vue에 import 시켜 줄 것
  
</details>

<details>
<summary>transition 효과</summary>
  <br>

- 숨겨진 메뉴가 표시될 땐 transition 이 먹지 않고 사라질 때만 먹어서 고민

  #### 해결 방법
 - v-if가 false로 시작하면 transition이 안먹는건가 했는데 scss 클래스명 때문이었다. .slide-enter을 .slide-enter-from 로 바꾸니 해결됨

  ```html
    <transition name="slide" appear mode="out-in">
          <div class="nav__sub"  v-if="menuAreaShow.search" key="menuAreaShow.search">
              <div class="sub__title">
              <!-- ...생략 -->
                </li>
              </ul>
          </div>
        </transition>
  ```

  ```scss
    .slide-enter-active, .slide-leave-active {
      transition: transform 1s;
    }

    .slide-enter-from, .slide-leave-to {
      transform: translateY(-100%);
    }
  ```
</details>

<details>
<summary>메뉴 이동 후 top: 0;으로 올라가는 방법</summary>
  <br>

- 스크롤이 내려가 있는 상황에서 라우터`<router-link></router-link>`클릭 시 스크롤이 내려가 있는 상태에서 `<router-view></router-view>`로 전환만 되어 있는 현상
- 스크롤을 올려야 하는 불편함 발생

#### 해결 방법
- src/router/index.js에 함수 추가

  ```javascript
    //기존 코드
    const router = createRouter({
      history: createWebHistory(process.env.BASE_URL),
      routes
    })

    //추가 후
    const router = createRouter({
      history: createWebHistory(process.env.BASE_URL),
      routes,
      scrollBehavior(){
        return { top: 0 }
      },
    })  
  ```

</details>

<details>
<summary>이미지 태그 하나만 놓고 :src를 data로 지정했을 시 fade 효과 주는 법</summary>
  <br>

- transition 효과를 주고 싶은데 v-if,v-show를 사용하지 않아도 적용되지 않는 상황
- :class를 사용하여도 적용되지 않았다.

#### 해결 방법
- :key 다르게 부여하니 적용됨! 이래서 각각의 :key가 중요하다고 한 것을 실감함

  ```html
    <transition name="fade">
      <img 
      :src="imgList[ImgIndex].url" 
      :alt="imgList[ImgIndex].alt"
      :key="imgList[ImgIndex].alt"
      >
      <!-- :key를 각각 부여해야 했다. :key="imgList" 이렇게 하면 안됨!! -->

      <!-- 2023.11.09 수정 
        :key를 인덱스로 가져오는 것은 비추 (리액트와 같은 개념이라고 함. 재랜더링 시 다시 읽어 성능 저하)
       -->
    </transition>
  ```

</details>

<details>
<summary>✨2023-11-07 추가 ✨버튼 클릭 전까지 다음 영역 비활성화 하는 법</summary>
  <br>

#### 해결 방법
- 현재 클릭해야하는 부분은 opacity 1, 다음 영역은 0.5주고 클래스명을 붙여 1이 되도록  했다.
- 클래스명 opacity가 붙기 전에는 버튼을 클릭하지 못하도록 했다.

#### 참고
  - 해당 페이지 (SubSecond)는 `setup(){}`에 `const priceValue = ref(false);`을 써 반응성 (다른 페이지는 data속성 사용)
  - Vue 3에서는 setup 함수를 사용하는 것이 더 선호되는 방법이라고 함

  ```html
    <!-- 이전 ref속성이 true가 되면 opacity 추가 -->
    <div 
    class="choice__box choice-db" 
    :class="{ 'opacity': colorValue }"
    >
      <h3>저장 용량.<span> 당신에게 알맞은 저장 용량은?</span></h3>
      <div class="choice__select">
        <!-- :disabled로 colorValue(이전 영역)가 false면 비활성화 -->
        <button 
        class="select__btn choice-btn"
        :class="{ 'active': priceValue === '256' }"
        @click="buttonActive2('256')"
        :disabled="!colorValue"
        >
          
      <!-- ... 생략 -->
  ```

</details>
