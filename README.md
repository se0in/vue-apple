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