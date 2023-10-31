<template>
  <div class="rotate-iphone">
    <div @scroll="handleScroll" class="scroll-container">
      <div class="scroll_wrap">
        <img 
          class="rotating-image" 
          src="../../assets/img/SubFirst-iphone.png" 
          alt="iphone" 
          ref="iphoneImage">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      initialImageWidth: 350, // 초기 이미지 너비 설정
      scrollThreshold: 800, // 스크롤 임계값 설정
      maxScrollPosition: 10000, // 최대 스크롤 위치 설정
    };
  },
  methods: {
    handleScroll(event) {
      const scrollPosition = event.target.scrollTop;
      console.log('scrollPosition: ', scrollPosition);

      // 이미지 회전 각도 계산
      const rotatingImage = this.$refs.iphoneImage;
      const rotationDegrees = Math.min(scrollPosition, 90);
      rotatingImage.style.transform = `rotate(-${rotationDegrees}deg)`;

      // 이미지 크기 조절 
      if (scrollPosition <= 400) {
        const scaleFactor = 1 + scrollPosition / this.scrollThreshold;
        // rotatingImage.style.transition = "width 0.5s"; // transition 추가
        const imageWidth = this.initialImageWidth * scaleFactor;
        rotatingImage.style.width = `${imageWidth}px`;
      } /* else if (scrollPosition > 400) {
        // 스크롤이 maxScrollPosition 이상일 때, 이미지 크기를 다시 초기 크기로 되돌립니다.
        rotatingImage.style.width = `${this.initialImageWidth + 300}px`;
        // rotatingImage.style.transition = "width 0.5s"; // transition 추가
      } */ else {
        // 스크롤이 maxScrollPosition 이상일 때, 이미지 크기를 다시 초기 크기로 되돌립니다.
        rotatingImage.style.transition = "width 0.5s"; // transition 추가
        rotatingImage.style.width = `100%`;
      } 
    },
  },
};
</script>

<style lang="scss" scoped>
.rotate-iphone {
  .scroll-container {
    height: 100vh;
    overflow-y: scroll;
  }
  .scroll_wrap {
    height: 3000px;
    background-color: #ccc;
    img.rotating-image {
      transition: transform 0.5s;
      margin: 0 auto;
      max-width: 100%;
      width: 350px;
    }
  }
}
</style>
