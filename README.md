# Vue apple store
Vue로 작업한 apple store
<br>
## 📣 프로젝트 소개
- 개인프로젝트
- Vue를 사용하여 apple store 리뉴얼 및 카피

### 📅 작업 기간
- 2023년 10월 15일 ~ 2023년 

### 💻 사용 툴 및 작업 언어
- Adobe XD (디자인)
- Visual Studio Code
    - Vue

<br>

## 🎮 주요기능
- 반응형

|web|mobile|
|:---:|:---:|
|![image](path)|![image](path)|

- 동적 요소

|제목|제목|제목|
|---|---|---|
|![image](path)|![image](path)|![image](path)|
|설명|설명|설명|



<br>

## 📌 프로젝트 작업하며 얻은 코드

<details>
  <summary>라우터로 사용하여 App.vue 말고 원하는 페이지로 첫화면 변경하는 법</summary>
  <br>

  - 루트에 있는 App.vue를 아예 사용 안할 순 없었다. 각각 나눈 페이지를 모으는 곳으로 작업했기 때문이다.

  1. 헤더 로고 부분을 <router-link to="/"> 최상위 루트(/)로 바꾸고 

      ```template
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
    },
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


  

 


  
 


  vue에서 이미지를 가져올 때는 require를 가용하여 모듈로 가져오는 것이 일반적이다

```javascript
  return {
    swiperSlide : [
      require('../../assets/img/HomeFirst_1.png'),
      require('../../assets/img/HomeFirst_2.png'),
      require('../../assets/img/HomeFirst_3.png')
    ]
  }
```

모바일에선 스와이퍼 가로 100%
웹에선 1.5개가 보여 좌우로 미리보기가 있도록 하려했는데 아무리 속성을 변경하고 추가해봐도 페이지네이션이 자연스럽게 흘러가지 않고 , 다음 미리보기가 보이지 않는 둥 오류가 끊이지 않았다.
해결 방법 swiper-slide를 3개만 만들어서 그런거였음
slidesPerView를  1.5로 등록하고 slidesPerView가 3개뿐이니 오류가 난 것. 4개로 늘리니 해결됐다!
