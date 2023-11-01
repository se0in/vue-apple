<template>
  <div class="rotate-iphone">
    <div @scroll="handleScroll" class="scroll-container" ref="scrollContainer" @wheel="handleWheel">
      <div class="scroll_wrap">
        <img class="rotating-image" src="../../assets/img/SubFirst-iphone.png" alt="iphone" ref="iphoneImage"
          v-if="iphoneImage">
        <p class="scroll_text" ref="scrollText" :class="{ 'scrollTextShow': scrollText }">탁월한 선택.</p>
        <div class="column_text">
          <ul>
            <li>쾌속으로 질주하는 프로세서.</li>
            <li>획기적인 배터리 성능.</li>
            <li>고속 5G 연결.</li>
            <li>오랜 사용을 염두에 둔 디자인.</li>
            <li>수준급 카메라.</li>
            <li>익숙해서 좋은 홈버튼.</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      initialImageWidth: 200, // 초기 이미지 너비 설정
      scrollThreshold: 800, // 스크롤 임계값 설정
      maxScrollPosition: 10000, // 최대 스크롤 위치 설정
      scrollText: false,
      iphoneImage: true,
      lastScrollPosition: 0,
    };
  },
  methods: {
    handleWheel(event) {
      const scrollContainer = this.$refs.scrollContainer;
      scrollContainer.scrollTop += event.deltaY > 0 ? 80 : -500;
    },

    handleScroll(event) {
      const scrollPosition = event.target.scrollTop;
      const rotatingImage = this.$refs.iphoneImage;

      if (rotatingImage) {
        if (scrollPosition == 0) {

          this.scrollText = false;
          rotatingImage.style.transform = `rotate(0deg)`;
        }
        else if (scrollPosition < 1600) {
          const scaleFactor = 1 + scrollPosition / this.scrollThreshold;
          const imageWidth = this.initialImageWidth * scaleFactor;
          const rotationDegrees = Math.min(scrollPosition, 90);
          rotatingImage.style.transform = `rotate(-${rotationDegrees}deg)`;
          rotatingImage.style.width = `${imageWidth}px`;
          this.scrollText = true;
        } else if (scrollPosition == 1600) {
          this.scrollText = false;

        } else if (scrollPosition <= 1900) {
          this.scrollText = false;
          const scaleFactor = 1 + scrollPosition / this.scrollThreshold;
          const imageWidth = this.initialImageWidth * scaleFactor;
          const rotationDegrees = Math.min(scrollPosition, 90);
          rotatingImage.style.transform = `rotate(-${rotationDegrees}deg)`;
          rotatingImage.style.width = `${imageWidth + rotationDegrees}px`;
        } else if (scrollPosition <= 2400) {
          this.scrollText = false;
        } else if (scrollPosition <= 3000) {
          // const imageWidth = this.initialImageWidth + (scrollPosition - 1000) * 0.1;
          const rotationDegrees = Math.min(scrollPosition - 1000, 90);
          rotatingImage.style.transform = `rotate(-${rotationDegrees}deg)`;
          rotatingImage.style.width = "203vh";
        }
      }
      console.log('scrollPosition: ', scrollPosition);

      // 스크롤 방향을 판단하여 이미지 나타남/사라짐 동작을 처리합니다.
      if (scrollPosition > 3000) {
        // 스크롤을 아래로 내릴 때
        rotatingImage.style.opacity = "0"; // 이미지 사라짐
        rotatingImage.style.display = "none"
      } else if (scrollPosition == 3000) {
        rotatingImage.style.display = "none"

      } else {
        rotatingImage.style.display = "block"
        // 스크롤을 올릴 때
        rotatingImage.style.opacity = "1"; // 이미지 나타남
      }

      // 스크롤 위치 업데이트
      this.lastScrollPosition = scrollPosition;
    },
  },
};
</script>

<style lang="scss" scoped>
.rotate-iphone {
  overflow-x: hidden;
  position: relative;
  width: 100%;

  &::-webkit-scrollbar,
  &::-webkit-scrollbar-track,
  &::-webkit-scrollbar-thumb {
    width: 0;
  }

  .scroll-container {
    height: 100vh;
    overflow-y: scroll;

    &::-webkit-scrollbar,
    &::-webkit-scrollbar-track,
    &::-webkit-scrollbar-thumb {
      width: 0;
    }
  }

  .scroll_wrap {
    height: 9000px;
    background-color: #ccc;

    img.rotating-image {
      transition: transform 0.5s, width 0.5s, opacity 0.5s;
      width: 200px;
      position: absolute;
      left: 0;
      right: 0;
      top: -20.8%;
      bottom: 0;
      margin: auto;
      pointer-events: none;
      z-index: 1;
    }

    .scroll_text {
      font-size: 50px;
      font-weight: bold;
      position: fixed;
      left: 50%;
      transform: translateX(-50%);
      top: 80vh;
      opacity: 0;
      transition: opacity 0.5s;
      text-align: center;
      z-index: 2;
      background: linear-gradient(90deg, rgb(46, 29, 123) 30%, rgb(104, 86, 177) 55%);
      background-clip: text;
      color: transparent;

      &.scrollTextShow {
        opacity: 1;
      }
    }

    .column_text {
      position: absolute;
      top: 40px;
      width: 100%;
      height: calc(100vh - 40px);
      z-index: 2;
      overflow-x: hidden;

      ul {
        li {
          width: 3000px;
          padding-left: 120px;
          font-size: 36px;
          line-height: calc((100vh - 40px) / 6);
          color: #fff;
          &:nth-child(1) {background: linear-gradient(90deg, rgb(155, 168, 182) 0%, rgb(24, 14, 78) 35%, rgba(59,41,144,1) 60%, rgba(194,132,107,1) 100%);}
          &:nth-child(2) {background: linear-gradient(90deg, rgb(165, 182, 192) 0%, rgba(25,25,74,1) 26%, rgb(30, 18, 78) 64%, rgba(179,100,100,1) 100%);}
          &:nth-child(3) {background: linear-gradient(90deg, rgb(174, 186, 240) 0%, rgb(20, 31, 102) 23%, rgb(61, 37, 145) 70%, rgba(147,74,92,1) 100%);}
          &:nth-child(4) {background: linear-gradient(90deg, rgb(152, 175, 169) 0%, rgba(40,50,109,1) 23%, rgba(47,29,118,1) 72%, rgba(130,68,91,1) 100%);}
          &:nth-child(5) {background: linear-gradient(90deg, rgb(168, 187, 173) 0%, rgba(30,30,87,1) 27%, rgba(52,34,129,1) 64%, rgba(148,89,97,1) 100%);}
          &:nth-child(6) {background: linear-gradient(90deg, rgb(150, 150, 165) 0%, rgba(35,29,77,1) 35%, rgba(59,41,144,1) 60%, rgba(189,112,103,1) 100%);}
        }
      }
    }
  }
}
</style>
