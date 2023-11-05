<template>
  <div class="content" @scroll="handleScroll">
    <div class="sub-inner">
      <h2>보다 자세히 들여다보기.</h2>
      <div class="item__container">
        <div class="item__max">
          <transition name="fade">
            <img 
            :src="imgList[ImgIndex].url" 
            :alt="imgList[ImgIndex].alt" 
            :key="imgList[ImgIndex]">
          </transition>
        </div>

        <div class="item__btn" ref="itemBtn" >
          <button 
          v-for="(button, index) in buttons" 
          :key="index" 
          @click="activateButton(index)"
          :class="{active: ImgIndex === index}"
          >
          </button>
        </div>
      </div>
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
      imgList: [
        {
          url: require('@/assets/img/SubAll.svg'),
          alt: "iPhone Pro Color All"
        },
        {
          url: require('@/assets/img/SubNatural.svg'),
          alt: "iPhone Pro Color Natural"
        },
        {
          url: require('@/assets/img/SubBlue.svg'),
          alt: "iPhone Pro Color Blue"
        },
        {
          url: require('@/assets/img/SubWhite.svg'),
          alt: "iPhone Pro Color White"
        },
        {
          url: require('@/assets/img/SubBlack.svg'),
          alt: "iPhone Pro Color Black"
        },
      ],
      ImgIndex: 0,
      buttons: [1, 2, 3, 4, 5],
    }
  },

  methods: {
    checkButtonPosition() {
      /* const itemBtn = this.$refs.itemBtn;
      const itemBtnRect = itemBtn.getBoundingClientRect();
      const contentRect = this.$refs.content.getBoundingClientRect();

      // 컨테이너 내에서 itemBtn의 위치를 계산합니다.
      const btnTopRelativeToContent = itemBtnRect.top - contentRect.top;
      const btnBottomRelativeToContent = btnTopRelativeToContent + itemBtnRect.height;

      // 이벤트를 트리거할 임계값을 정의합니다
      const triggerThreshold = 50; // 필요에 따라 이 값을 조정하세요

      if (btnTopRelativeToContent >= 0 && btnBottomRelativeToContent <= contentRect.height + triggerThreshold) {
        // 버튼이 트리거 임계값 내에 있을 때
        this.$emit('button-in-trigger-zone');
      } */

      console.log('엥?');
    },
    handleScroll() {
      // 스크롤 위치를 가져옵니다.
      const scrollTop = this.$refs.content.scrollTop;
      console.log('스크롤 위치:', scrollTop);
      console.log('??');
      // 이제 여기서 스크롤 위치를 사용할 수 있습니다.
    },
    activateButton(buttonNumber) {
      this.ImgIndex = buttonNumber;
    },
  }
}
</script>

<style lang="scss" scoped>
.content {
  // height: calc(100vh - 40px);
  background-color: #000;
  overflow: hidden;
  margin-top: 100px;
  height: 1000px;
  padding: 20px;

  h2 {
    color: $sub-text-color;
    font-size: 40px;
    margin: 120px 0 80px;
  }

  .item__container {
    height: 100%;
    height: 100%;
    padding-bottom: 200px;
    position: relative;

    .item__max {
      width: 100%;
      height: 400px;
      max-width: 400px;
      margin: 0 auto;
      overflow: hidden;

      img {
        width: 100%;
        height: 100%;
      }
    }

    .item__btn {
      color: #fff;
      position: absolute;
      bottom: 50px;
      left: 50%;
      padding: 10px;
      border-radius: 28px;
      transform: translateX(-50%);
      background-color: #5d5d5d70;
      backdrop-filter: blur(10px);
      display: flex;

      button {
        width: 22px;
        height: 22px;
        border-radius: 50%;
        display: inline-block;
        margin: 6px;
        &.active {
          outline: 2px solid #fff;
        }

        &:nth-child(1) {
          background: url(../../assets/img/SubColorIcon.png) no-repeat;
          background-size: 22px 22px;
        }

        &:nth-child(2) {
          background-color: #BBB5A9;
        }

        &:nth-child(3) {
          background-color: #3C4453;
        }

        &:nth-child(4) {
          background-color: #F2F1EC;
        }

        &:nth-child(5) {
          background-color: #202122;
        }
      }
    }
  }
}</style>
