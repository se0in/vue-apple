import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // Vue Router 설정 파일을 가져옴

createApp(App).use(router).use(router)
  .use(router) // Vue Router 등록
  .mount('#app');
