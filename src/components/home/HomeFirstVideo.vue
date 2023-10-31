<template>
  <div class="container">
    <div class="container__inner">
      <video autoplay muted ref="videoElement" :src="videoSource" @loadedmetadata="onVideoLoaded"
        @ended="onVideoEnded">Your browser does not support the video tag.</video>
      <img v-if="showImage" :src="currentImageSource" alt="티타늄 iPhone 15 Pro" />
      <BtnBuy class="buttonBuy" />
      <p>₩1,550,000부터</p>
    </div>
  </div>
</template>

<script>
import BtnBuy from '../common/ButtonBuy.vue';

export default {
  components: {
    BtnBuy
  },
  data() {
    return {
      videoSource: '', // 초기에 비디오 소스를 설정하지 않음
      showImage: false,
      webImageSource: require("@/assets/img/HomeFirstVideo-web.png"),
      mobileImageSource: require("@/assets/img/HomeFirstVideo-mobile.png"),
      currentImageSource: '', // 현재 이미지 소스
    };
  },
  mounted() {
    // 초기 화면 폭에 따른 동영상 및 이미지 설정
    this.setVideoSource();
    this.setCurrentImageSource();

    // 화면 크기 변경 이벤트 리스너 추가
    window.addEventListener("resize", this.setVideoSource);
    window.addEventListener("resize", this.setCurrentImageSource);
  },
  methods: {
    setVideoSource() {
      // 현재 화면 폭에 따라 동영상 소스를 설정
      if (window.innerWidth < 768) {
        // 모바일
        this.videoSource = require("@/assets/img/HomeFirstVideo-mobile.mp4");
      } else {
        // 웹
        this.videoSource = require("@/assets/img/HomeFirstVideo-web.mp4");
      }
    },
    setCurrentImageSource() {
      // 화면 폭에 따라 이미지 소스를 설정
      this.currentImageSource = window.innerWidth < 768 ? this.mobileImageSource : this.webImageSource;
    },
    onVideoLoaded() {
      // 5초 후 이미지로 변경
      setTimeout(() => {
        this.showImage = true;
        // this.$refs.videoElement.pause();
      }, 7000);
    },
    onVideoEnded() {
      // 동영상 재생이 끝나면 비디오 영역을 완전히 숨김
      this.showImage = true;
    },
  },
}
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  background-color: #000;

  .container__inner {
    max-width: 1300px;
    margin: 0 auto;
    padding: 50px 0 200px;
    position: relative;
    text-align: center;

    img {
      position: absolute;
      top: 50px;
      left: 50%;
      transform: translateX(-50%);
      z-index: 10;
    }

    .buttonBuy {
      @include AbsoluteXCenter();
      z-index: 50;
      bottom: 150px;
    }

    p {
      color: #fff;
      font-size: 20px;
      @include AbsoluteXCenter();
      bottom: 100px;
    }
  }
}

@media screen and (min-width: 768px) {
  .container {

    .container__inner {
      padding: 150px 0 200px;

      video {
        width: 100%;
      }

      img {
        width: 100%;
        top: 150px;
      }
    }
  }

}</style>
