<template>
  <div class="content" @scroll="btnPositionEvent">
    <div class="sub-inner">
      <h2>iPhone.<span> 티타늄을 두르다.</span></h2>
      <div class="content__wrap">
        <div class="top-video">
          <video autoplay muted :src="videoSource" @ended="onVideoEnded">Your browser does not support the video
            tag.</video>
        </div>
        <div class="left-img" ref="imageContainer" @scroll="onScroll">
          <img src="../../assets/img/SubFourthLeft.svg" alt="" class="image-zoom">
        </div>
        <div class="right-img" ref="imageContainer" @scroll="onScroll">
          <img src="../../assets/img/SubFourthRight.svg" alt="" class="image-zoom">
        </div>
        <div class="left-text">
          <p><span>iPhone 사상 최초로 항공우주 등급의 티타늄 디자인</span>을 채택한 iPhone 15 Pro. 화성 탐사선에 쓰이는 소재와 동일한 합금을 사용했습니다.</p>
        </div>
        <div class="right-text">
          <p>금속 중 비강도가 가장 탁월한 것으로 손꼽히는 티타늄을 사용한 덕분에 iPhone 15 Pro는 <span>역대 Pro 모델 중 가장 가볍습니다.</span> 기기를 집어드는 순간, 가벼워진
            무게감이 확연히 느껴지죠.</p>
        </div>
      </div>
    </div>
    <div class="fourth__btn" ref="itemBtn" :style="buttonStyle">
      <p>디자인 및 디스플레이에 대해 더 알아보기</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SubPage',
  props: {
    msg: String
  },
  data() {
    return {
      videoSource: require("@/assets/img/SubFourthVideo.mp4"),
      buttonStyle: {
        position: 'absolute'
      },
      scale: 1
    }
  },
  mounted() {
    window.addEventListener("scroll", this.btnPositionEvent);
    window.addEventListener("scroll", this.onScroll);
  },
  methods: {
    btnPositionEvent() {
      const scrollHeight = window.scrollY || window.pageYOffset;

      if (window.innerWidth < 768) {
        if (scrollHeight > 4400 && scrollHeight < 6000) {
          this.buttonStyle.position = 'fixed';
        } else {
          this.buttonStyle.position = 'absolute';
        }
      } else {
        if (scrollHeight > 3600 && scrollHeight < 4600) {
          this.buttonStyle.position = 'fixed';
        } else {
          this.buttonStyle.position = 'absolute';
        }
      }

    },
    onScroll() {
      const images = document.querySelectorAll(".image-zoom");
      const scrollY = window.scrollY || window.pageYOffset;

      images.forEach((image) => {
        const imageContainer = image.parentElement;
        const containerTop = imageContainer.getBoundingClientRect().top;
        const containerHeight = imageContainer.clientHeight;

        let scale = 1 + 0.08 * Math.sin((containerTop - scrollY) / containerHeight);

        scale = Math.max(1, scale);

        scale = Math.min(1.1, scale);

        image.style.transform = `scale(${scale})`;
      });
    }
  }
}

</script>

<style lang="scss" scoped>
.content {
  background-color: #141414;
  padding: 70px 20px 150px;
  box-sizing: border-box;
  position: relative;

  h2 {
    color: #fff;
    font-size: 40px;
    margin-bottom: 100px;

    span {
      color: #999
    }
  }

  .content__wrap {
    display: flex;
    flex-direction: column;

    div {
      width: 100%;
      max-height: 400px;
      overflow: hidden;
      margin-bottom: 20px;

      video {
        display: block;
        width: 100%;
        height: 100%;
        background-color: #000;
        object-fit: cover;
        padding-top: 100px;
      }

      img {
        width: 100%;
        object-fit: cover;
      }

      p {
        color: #999;
        font-size: 20px;
        font-weight: bold;
        line-height: 1.6;
        width: calc(100% - 200px);
        max-width: 500px;
        margin: 10px auto 0;

        span {
          color: #fff;
        }
      }
    }
  }

  .fourth__btn {
    bottom: 50px;
    left: 50%;
    width: 332px;
    box-sizing: border-box;
    transform: translateX(-50%);
    background-color: #5d5d5d70;
    backdrop-filter: blur(10px);
    padding: 10px 18px;
    border-radius: 30px;

    p {
      color: #fff;

      &::after {
        content: 'add';
        font-family: 'Material Symbols Outlined';
        font-size: 25px;
        margin-left: 10px;
        vertical-align: -5px;
        background-color: #116ffd;
        border-radius: 50%;
        width: 30px;
        text-align: center;
        line-height: 30px;
        height: 30px;
        display: inline-block;
      }
    }
  }
}

@media screen and (min-width : 768px) {
  .content {
    .content__wrap {
      flex-direction: row;
      flex-wrap: wrap;

      div {
        &:nth-child(1) {
          flex-basis: 100%;
        }

        &:nth-child(2) {
          width: calc(50% - 10px);
          margin-right: 10px;
        }

        &:nth-child(3) {
          width: calc(50% - 10px);
          margin-left: 10px;
        }

        &:nth-child(4) {
          width: 50%;
        }

        &:nth-child(5) {
          width: 50%;
        }

        max-height: none;

        video {
          padding-top: 0;
          height: auto;
        }

        img {
          height: 100%;
          max-height: 400px;
        }

        p {
          width: calc(100% - 150px);
        }
      }
    }
  }
}
</style>
