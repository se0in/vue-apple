# vue-apple-project

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


라우터로 App.vue 말고 원하는 페이지로 첫화면 변경하는 법
App.vue를 아예 사용 안할 순 없다. 각각 나눈 페이지를 모으는 곳이기 때문이다. 
헤더 로고 부분을   <router-link to="/"> 루트로 바꾸고 
<!-- <router-link to="/">로고</router-link>   |  
  <router-link to="/Sub">스토어</router-link>
  <router-link to="/Sub">Mac</router-link>
  <router-link to="/Sub">iPad</router-link>
  <router-link to="/Sub">iPhone</router-link>
  <router-link to="/Sub">Watch</router-link> -->
  
{ 
    path: '/',
    component: () => import(
      '../components/pages/home/HomePage')
  },
  index.js 내가 원하는 (HomePage.vue)곳 path를 /루트로 바꿨더니 완료!

  <!-- <router-view></router-view> -->
  는 렌더링이 되어 화면이 전환된 곳이니 헤더/렌더링/푸터만 있는 페이지(App)가 있어야했다.
  <!-- <router-view></router-view>는 -->
  router-link to(전환될 위치)와 연결되니 (라우터 관련) 화면이 전환될 곳이 넣어줄 것!


  애플 footer 처럼 순서는 같지만 웹에서 왼쪽 상단부터 쌓여서 정렬하는 법
  ```scss
  .footer-nav__flex-container {
        display: flex;
        flex-wrap: wrap;
        flex-direction: column; 
        gap: 10px;
        height: 450px;
  }
  ```


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
