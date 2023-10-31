<template>
  <div class="rotate-iphone">
    <div @scroll="handleScroll" @wheel="handleWheel" class="scroll-container" ref="scrollContainer" >
      <div class="scroll_wrap">
        <img 
        
          class="rotating-image" 
          src="../../assets/img/SubFirst-iphone.png" 
          alt="iphone" 
          ref="iphoneImage">
          <p class="scroll_text" ref="scrollText1" :class="{ 'scrollTextShow': scrollText }">탁월한 선택.</p>
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
      scrollText : false
    };
  },
  methods: {
    /*  handleWheel(event) {
      // 휠 이벤트의 deltaY 값은 마우스 휠의 스크롤 방향과 속도에 따라 변합니다.
      // 음수 값은 위로 스크롤하고 양수 값은 아래로 스크롤합니다.
      const deltaY = event.deltaY;

      // 원하는 스크롤 이동값 설정 (예: 50px)
      // const scrollStep = 50;

      // 스크롤 이동값을 제한 범위로 설정
      const newScrollPosition = this.$refs.scrollContainer.scrollTop + deltaY;
      const maxScrollPosition = 500; // 원하는 최대 스크롤 픽셀 값

      // 스크롤 이동값이 제한 범위를 벗어나지 않도록 처리
      if (newScrollPosition < 0) {
        this.$refs.scrollContainer.scrollTop = 0;
      } else if (newScrollPosition > maxScrollPosition) {
        this.$refs.scrollContainer.scrollTop = maxScrollPosition;
      } else {
        this.$refs.scrollContainer.scrollTop = newScrollPosition;
      }

      // 이벤트 기본 동작을 막아 스크롤 이벤트가 여러 번 발생하는 것을 방지
      event.preventDefault();
    }, */


    handleScroll(event) {



      
      
      const scrollPosition = event.target.scrollTop; /* scrollTop */
      console.log('scrollPosition: ', scrollPosition);

      const rotatingImage = this.$refs.iphoneImage; /* 이미지 */
      // const scrollText = this.$refs.scrollText1;
      
      const scaleFactor = 1 + scrollPosition / this.scrollThreshold;
      /* 1(필수) + 스크롤탑 / 스크롤임계점 */
      
      /* 초기 이미지 * 사진확대 = 이미지 크기 */
      const imageWidth = this.initialImageWidth * scaleFactor;
      
      /* 각도와 scrollTop 동일 , 각도는 90deg이 최대  */
      
      const rotationDegrees = Math.min(scrollPosition, 90); /* 각도 */
      if (scrollPosition <= 200) {
        /* 글자 안보이게 */
        this.scrollText = true;
        rotatingImage.style.width = `${imageWidth}px`;
        rotatingImage.style.transform = `rotate(-${rotationDegrees}deg) `;
        rotatingImage.style.transition = "rotate 1s";





      }else if (scrollPosition <= 300 ) {
        this.scrollText = false;
        rotatingImage.style.transition = "width 1s";
        rotatingImage.style.width = `100%`;
      }else {
        // rotatingImage.style.transform = `rotate(-${rotationDegrees}deg) `;
      }
      
      
      
    
    },
  },
};
</script>

<style lang="scss" scoped>
.rotate-iphone {
  // overflow-x: hidden;
    // width: 100%;
  .scroll-container {
    // overflow-x: hidden;
    // width: 100%;
    height: 100vh;
    overflow-y: scroll;
  }
  .scroll_wrap {
    overflow-x: hidden;
    width: 100%;
    height: 3000px;
    background-color: #ccc;
    // perspective:1000px;
    // padding-top: 50px;
    img.rotating-image {
      transition: transform 0.5s;
      max-width: 100%;
      width: 200px;
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      margin: auto;
      pointer-events: none; 
      z-index: 2;
    }
    .scroll_text {
      font-size: 50px;
      font-weight: bold;
      position: relative;
      // left: 50%;
      // transform: translateX(-50%);
      top: 80vh;
      opacity: 0;
      transition: opacity .5s;
      text-align: center;
      z-index: 1;
      background:linear-gradient(90deg, rgb(46, 29, 123) 30%, rgb(104, 86, 177) 55%);
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
      background-color: red;
      height: calc(100vh - 40px);
      z-index: 2;
      display: none;
      ul {
        li {
          padding-left: 120px;
          font-size: 36px;
          line-height: calc((100vh - 40px) / 6);
        }
      }
    }
  }
}
</style>
