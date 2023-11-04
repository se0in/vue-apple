<template>
  <div class="content">
    <div class="sub-inner">
      <h2>보다 자세히 들여다보기.</h2>
      <div class="item__container">
        <div class="item__max">
            <transition name="fade">
            <img 
            :src="imgList[ImgIndex].url" 
            :alt="imgList[ImgIndex].alt"
            :key="imgList[ImgIndex]"
            >
          </transition>
          </div>
  
        <div class="item__btn">
          <button 
            v-for="(button, index) in buttons" 
            :key="index" 
            @click="activateButton(index)">
            {{ button }}
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
      buttons: [1, 2, 3, 4, 5]
    }
  },

  methods: {
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

    .item__max  {
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
      background-color: red;
      position: fixed;
      bottom: 50px;
      height: 40px;
      left: 50%;
      // translate: -50%;
      // z-index: 10;
    }
  }
}


.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s;
}

.fade-enter-from, .fade-leave-to {
  opacity: 0;
}

</style>
