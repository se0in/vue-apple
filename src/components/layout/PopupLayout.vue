<template>
  <div class="popup" v-if="visible">
    <div class="popup__bg" @click="closePopup"></div>
    <div class="popup__wrap" v-for="(img, index) in popupImg" :key=index >
      <button @click="closePopup">
        <span class="material-symbols-outlined">close</span>
      </button>
      <div class="popup__content">
        <img :src="popupImg[currentIndex].path" alt="">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      popupImg : [
        { path : require('@assets/img/popup_watch.png')},
        { path : require('@assets/img/popup_watch.png')},
        { path : require('@assets/img/popup_watch.png')},
        { path : require('@assets/img/popup_airpod.png')},
        { path : require('@assets/img/popup_macbook.png')},
        { path : require('@assets/img/popup_ipad.png')},
      ],
      currentIndex: 0,
    }
  },
  props: {
    visible: Boolean,
    imgIndex: Number,
  },
  watch: {
    imgIndex(newIndex) {
      this.currentIndex = newIndex;
    },
  },
  methods: {
    closePopup() {
      this.$emit('close'); 
      this.unlockBodyScroll();
    },
    unlockBodyScroll() {
      document.body.style.overflowY = 'auto';
    },
  },
}
</script>

<style lang="scss" scoped>
  .popup {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 997;
  }
  .popup__bg {
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.3);
    cursor: pointer;
    z-index: 998;
  }
  .popup__wrap {
    position: absolute;
    bottom: 0;
    border-radius: 20px 20px 0 0;
    width: 100%;
    height: calc(100% - 30px);
    background-color: #fff;
      z-index: 999;
      button {
        text-align: right;
        width: 100%;
        border-radius: 20px 20px 0 0;
        height: 50px;
        border-bottom: 1px solid #ddd;
        span {
          font-size: 30px;
          color: #999;
          margin-top: 2px;
          transition: .3s;
          margin-right: 16px;
        }
        &:hover {
          span {
            color: #000;
          }
        }
      }
      .popup__content {
        overflow-y: scroll;
        height: calc(100% - 50px);
        img {
          width: 100%;
        }
      }
    }

  @media screen and (min-width : 768px) {
    
    .popup__wrap {
      max-width: 900px;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      border-radius: 20px;
      width: calc(100% - 40px);
      
      .popup__content {
        border-radius: 0 0 20px 20px;
      }
    }
  }
  
</style>