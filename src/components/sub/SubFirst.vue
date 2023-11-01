<template>
  <div class="rotate-iphone">
    <div @scroll="handleScroll" class="scroll-container" ref="scrollContainer" @wheel="handleWheel">
      <div class="scroll_wrap">
        <img class="rotating-image" src="../../assets/img/SubFirst-iphone.png" alt="iphone" ref="iphoneImage" v-if="iphoneImage">
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
        <img class="hand-img" src="../../assets/img/SubFirst-hand.png" alt="">
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
      rowItems: [
        "쾌속으로 질주하는 프로세서.",
        "획기적인 배터리 성능.",
        "고속 5G 연결.",
        "오랜 사용을 염두에 둔 디자인.",
        "수준급 카메라.",
        "익숙해서 좋은 홈버튼.",
      ],
    };
  },
  methods: {
    handleWheel(event) {
      const scrollContainer = this.$refs.scrollContainer;
      scrollContainer.scrollTop += event.deltaY > 0 ? 10 : -100;
    },

    handleScroll() {
      const scrollContainer = this.$refs.scrollContainer;
      const scrollPosition = scrollContainer.scrollTop;
      console.log('scrollPosition: ', scrollPosition);
      const rotatingImage = this.$refs.iphoneImage;
      const scrollText = this.$refs.scrollText;
      const rowText = this.$refs.rowText;
      this.lastScrollPosition = scrollPosition;
      let rowList = document.querySelectorAll('.rowList');
      
      if (rotatingImage) {
        if (scrollPosition == 0) {
          rotatingImage.style.transform = `rotate(0deg)`;
          rotatingImage.style.width = `200px`;
          rowText.style.display = 'none';
        } else if (scrollPosition <= 100) {
          this.scrollText = true;
          scrollText.style.position = 'relative';
          rotatingImage.style.opacity = '1';
          rowText.style.display = 'none';
        } else if (scrollPosition <= 300) {
          this.scrollText = false;
          rotatingImage.style.opacity = '1';
          rowText.style.display = 'none';
        } else if (scrollPosition <= 500) {
          const scaleFactor = 1 + scrollPosition / this.scrollThreshold;
          const imageWidth = this.initialImageWidth * scaleFactor;
          const rotationDegrees = Math.min(scrollPosition, 90);
          rotatingImage.style.transform = `rotate(-${rotationDegrees}deg)`;
          rotatingImage.style.width = `${imageWidth}px`;
          rowText.style.display = 'none';
          this.scrollText = false;
          rotatingImage.style.opacity = '1';
        } else if (scrollPosition <= 600) {
          this.scrollText = false;
          const scaleFactor = 1 + scrollPosition / this.scrollThreshold;
          const imageWidth = this.initialImageWidth * scaleFactor;
          const rotationDegrees = Math.min(scrollPosition, 90);
          rotatingImage.style.transform = `rotate(-${rotationDegrees}deg)`;
          rowText.style.display = 'none';
          rotatingImage.style.width = `${imageWidth + rotationDegrees}px`;
        } else if (scrollPosition <= 900) {
          this.scrollText = false;
          rotatingImage.style.width = "198.9vh";
          rowText.style.display = 'none';
          rotatingImage.style.opacity = '1';
        } else if (scrollPosition <= 1100) {
          rotatingImage.style.transition = '.5s';
          rotatingImage.style.opacity = '.3';
          rowText.style.display = 'block';
          rowText.style.opacity = '0'
        } else if (scrollPosition <= 1200) {
          rotatingImage.style.opacity = '0';
          const opacity = (scrollPosition - 1100) / 100; // 1300부터 1400까지 서서히 나타나도록 설정
          rowText.style.opacity = Math.min(opacity, 1); // 최대 1로 제한
        }else if (scrollPosition <= 5000) {
          rowText.style.opacity = '1';
          rotatingImage.style.opacity = '0';
          rowList.forEach((item) => {
            const leftPosition = `-${scrollPosition - 2000}` + 'px';
            item.style.backgroundPosition = leftPosition + ' 0';
            // console.log('item: ', item);
          }
          )
        }else if (scrollPosition <= 5200){
          handImg.style.opacity = '1';
          const handImg = document.querySelector('.hand-img');
          rowText.style.opacity = '0';
          handImg.style.transform = `rotate(-90deg)`;
          handImg.style.width = '534vh';
          handImg.style.top = '-381%';
          handImg.style.left = '0';
        }else if (scrollPosition <= 5800){
          const handImg = document.querySelector('.hand-img');


          // 스크롤 위치에 따른 회전 및 크기 조절
          // const rotationDegrees = Math.min(scrollPosition - 5600, 0);
          // const scaleFactor = 1 + (scrollPosition - 5000) / (this.scrollThreshold - 5000);
          handImg.style.transform = `rotate(0deg)`;
          handImg.style.transition = 'transform 1s';


          const rotationWidth = Math.min(scrollPosition, 520);
          handImg.style.width = `${rotationWidth}px`;

          // 나머지 스타일 조절
          handImg.style.top = '7.3%'; // 미리 정의한 위치로 돌아가도록
          handImg.style.left = '34.8%'; // 미리 정의한 위치로 돌아가도록
        }
      }
      
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
      opacity: 1;
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
      background: linear-gradient(90deg, rgb(81, 59, 181) 30%, rgb(150, 128, 236) 55%);
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
      z-index: 3;
      overflow-x: hidden;
      transition: opacity 0.5s;pointer-events: none;
    }
  }
}
</style>




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
    // background-color: #ccc;

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
      opacity: 1;
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
      background: linear-gradient(90deg, rgb(81, 59, 181) 30%, rgb(150, 128, 236) 55%);
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
      z-index: 3;
      overflow-x: hidden;
      transition: opacity 0.5s;
      // opacity: 0;

      ul {
        // display: none;
        .rowList {
          width: 4500px;
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
    .hand-img {
      transition: transform 0.5s, width 0.5s, opacity 0.5s;
      position: absolute;
      width: 520px;
      left: 34.8%;
      right: 0;
      top: 7.3%;
      bottom: 0;
      // margin: auto;
      pointer-events: none;
      z-index: 1;
      opacity: 0;



      /* width: 534vh;
      left: 0;
      top: -381%;
      transform: rotate(-90deg) ; */
    }
  }
}
</style>
