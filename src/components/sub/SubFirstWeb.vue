<template>
  <div class="rotate-iphone">
    <div @scroll="handleScroll" class="scroll-container" ref="scrollContainer" @wheel="handleWheel">
      <div class="scroll_wrap">
        <img class="rotating-image" src="../../assets/img/SubFirst-iphone.png" alt="iphone" ref="iphoneImage"
          v-if="iphoneImage">
        <p class="scroll_text" ref="scrollText" :class="{ 'scrollTextShow': scrollText }">탁월한 선택.</p>
        <div class="row_text" ref="rowText">
          <ul>
            <li class="rowList">쾌속으로 질주하는 프로세서.</li>
            <li class="rowList">획기적인 배터리 성능.</li>
            <li class="rowList">고속 5G 연결.</li>
            <li class="rowList">오랜 사용을 염두에 둔 디자인.</li>
            <li class="rowList">수준급 카메라.</li>
            <li class="rowList">익숙해서 좋은 홈버튼.</li>
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
      initialImageWidth: 200,
      scrollThreshold: 800,
      scrollText: false,
      maxScrollPosition: 10000,
      iphoneImage: true,
      lastScrollPosition: 0,
    };
  },
  methods: {
    /* 주석 지우지 말 것 */
    handleWheel(event) {
      const scrollContainer = this.$refs.scrollContainer;
      const scrollPosition = scrollContainer.scrollTop;
      const targetScrollPosition = event.deltaY > 0 ? scrollPosition + 100 : scrollPosition - 850;

      if(window.innerWidth >= 1500){
        if(scrollPosition <= 2500) {
          event.preventDefault();
        }
      }
      /* if (scrollPosition >= 3320 || scrollPosition >= 4100) {
        event.preventDefault();
      } */
      scrollContainer.scrollTop = targetScrollPosition;
    },
    handleScroll() {
      const scrollContainer = this.$refs.scrollContainer;
      const scrollPosition = scrollContainer.scrollTop;
      const rotatingImage = this.$refs.iphoneImage;
      const rowText = this.$refs.rowText;
      this.lastScrollPosition = scrollPosition;
      let rowList = document.querySelectorAll('.rowList');

      if (rotatingImage) {
        if (scrollPosition == 0) {
          this.scrollText = false;
          rotatingImage.style.transform = `rotate(0deg)`;
          rotatingImage.style.width = `200px`;
          rowText.style.display = 'none';
          rotatingImage.style.opacity = '1';
          rowText.style.pointerEvents = 'auto';

        } else if (scrollPosition <= 100) {
          this.scrollText = true;
          rotatingImage.style.opacity = '1';
          rowText.style.display = 'none';
          rowText.style.pointerEvents = 'auto';

        } else if (scrollPosition <= 300) {
          rotatingImage.style.opacity = '1';
          rowText.style.display = 'none';
          rowText.style.pointerEvents = 'auto';

        } else if (scrollPosition <= 600) {
          const scaleFactor = 1 + scrollPosition / this.scrollThreshold;
          const imageWidth = this.initialImageWidth * scaleFactor;
          const rotationDegrees = Math.min(scrollPosition, 90);
          rotatingImage.style.transform = `rotate(-${rotationDegrees}deg)`;
          rotatingImage.style.width = `${imageWidth}px`;
          rowText.style.display = 'none';
          this.scrollText = false;
          rotatingImage.style.opacity = '1';
          rowText.style.pointerEvents = 'auto';

        } else if (scrollPosition <= 800) {
          this.scrollText = false;
          const scaleFactor = 1 + scrollPosition / this.scrollThreshold;
          const imageWidth = this.initialImageWidth * scaleFactor;
          const rotationDegrees = Math.min(scrollPosition, 90);
          rotatingImage.style.transform = `rotate(-${rotationDegrees}deg)`;
          rowText.style.display = 'none';
          rotatingImage.style.width = `${imageWidth + rotationDegrees}px`;
          rowText.style.pointerEvents = 'auto';

        } else if (scrollPosition <= 1000) {
          this.scrollText = false;
          rotatingImage.style.width = "205.6vh";
          rowText.style.display = 'none';
          rotatingImage.style.opacity = '1';
          rowText.style.pointerEvents = 'auto';
          
        } else if (scrollPosition <= 1100) {
          this.scrollText = false;
          rotatingImage.style.transition = '.5s';
          rotatingImage.style.opacity = '.3';
          rowText.style.display = 'block';
          rowText.style.opacity = '0'
          rowText.style.pointerEvents = 'auto';
          
        } else if (scrollPosition <= 1200) {
          this.scrollText = false;
          rowText.style.display = 'block';
          rotatingImage.style.opacity = '0';
          const opacity = (scrollPosition - 1100) / 100;
          rowText.style.opacity = Math.min(opacity, 1);
          rowText.style.pointerEvents = 'none';

        } else if (scrollPosition > 1201) {
          rowText.style.display = 'block';
          rowText.style.opacity = '1';
          rotatingImage.style.opacity = '0';
          rowList.forEach((item) => {
            const leftPosition = `-${scrollPosition - 800}` + 'px';
            item.style.backgroundPosition = leftPosition + ' 0';
          })
        }
      }
    },
  },
};
</script>


<style lang="scss" scoped>
.rotate-iphone {
  
  overflow: hidden;
  position: relative;
  width: 100%;
  height: calc(100vh - 40px);
  &::-webkit-scrollbar,
  &::-webkit-scrollbar-track,
  &::-webkit-scrollbar-thumb {
    width: 0;
  }

  .scroll-container {
    height: calc(100vh - 40px);
    overflow-y: scroll;
    pointer-events: auto;
    &::-webkit-scrollbar,
    &::-webkit-scrollbar-track,
    &::-webkit-scrollbar-thumb {
      width: 0;
    }
  }
  .scroll_wrap {
    height: 4200px;
    
    img.rotating-image {
      transition: transform 0.5s, width 0.5s, opacity 0.5s;
      width: 200px;
      position: absolute;
      left: 0;
      right: 0;
      top: -18.2%;
      bottom: 0;
      margin: auto;
      pointer-events: none;
      z-index: 1;
      opacity: 1;
    }

    .scroll_text {
      font-size: 50px;
      font-weight: bold;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      top: 80vh;
      opacity: 0;
      transition: opacity 0.5s;
      z-index: 2;
      background: linear-gradient(90deg, #513bb5 30%, #9680ec 55%);
      background-clip: text;
      color: transparent;

      &.scrollTextShow {
        opacity: 1;
      }
    }

    .row_text {
      position: absolute;
      display: none;
      top: 0;
      width: 100%;
      height: calc(100vh - 40px);
      z-index: -1;
      overflow: hidden;
      transition: opacity 0.5s;
      // pointer-events: none;
      ul {
        height: 100%;
        
        .rowList {
          width: 3000px;
          overflow: hidden;
          padding-left: 120px;
          font-size: 36px;
          line-height: calc((100vh - 40px) / 6);
          color: #fff;
          &:nth-child(1) {background: linear-gradient(90deg, #aab9c9 0%, #3a29909d 25%, #c2846b 55%, #71a6df 80%, #aab9c9 100%);}
          &:nth-child(2) {background: linear-gradient(90deg, #bfd3df 0%, #1e124eaf 25%, #b36464 55%, #9bc6f3 80%, #bfd3df 100%);}
          &:nth-child(3) {background: linear-gradient(90deg, #aebaf0 0%, #3c25919f 25%, #934a5c 55%, #97bfeb 80%, #aebaf0 100%);}
          &:nth-child(4) {background: linear-gradient(90deg, #c2ddd6 0%, #2f1d769d 25%, #82445b 55%, #6397ce 80%, #c2ddd6 100%);}
          &:nth-child(5) {background: linear-gradient(90deg, #d2e7d8 0%, #332281a8 25%, #945961 55%, #578ac0 80%, #d2e7d8 100%);}
          &:nth-child(6) {background: linear-gradient(90deg, #cfcfe4 0%, #5842c7b4 25%, #bd7067 55%, #5d91c9 80%, #cfcfe4 100%);}
        }
      }
    }
  }
}
</style>
