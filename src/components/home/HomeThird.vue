<template>
  <div class="contentWrap">
    <h2>시청할 모든 것을 하나의 앱에. <span>APPLE TV.</span></h2>
    <ul>
      <li v-for="list in contents" :key="list" class="content__list"
        :class="{ 'last-item': index === contents.length - 1 }">
        <img :src=list.path :alt=list.title class="content__image">
        <div class="content__text">
          <BtnWatching class="content__btn"></BtnWatching>
          <p>{{ list.text }}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import BtnWatching from '@/components/common/ButtonAppleTv.vue';


export default {
  name: 'HomeThird',
  props: {
    msg: String
  },
  components: {
    BtnWatching
  },
  data() {
    return {
      contents: [
        {
          title: '더 모닝쇼',
          text: '아침 TV 뉴스쇼 무대 뒤에서 펼쳐지는 적나라한 이야기.',
          path: require('@assets/img/HomeThird_the-morning-show.png')
        },
        {
          title: 'see 어둠의 나날',
          text: '먼 미래, 살아남은 인류는 시력을 잃었다.',
          path: require('@assets/img/HomeThird_see.png')
        },
        {
          title: '서번트',
          text: '슬픔에 빠진 한 필라델피아 부부의 이야기를 다루는 드라마.',
          path: require('@assets/img/HomeThird_servant.png')
        },
        {
          title: '파운데이션',
          text: '인류를 구하고, 문명을 재건하기 위해 나선 망명자들의 장대한 여정.',
          path: require('@assets/img/HomeThird_foundation.png')
        },
        {
          title: '핀치',
          text: '폐허가 된 위험한 세상에 소중한 반려견, 갓 만들어낸 로봇과 나만 덩그러니 남았다.',
          path: require('@assets/img/HomeThird_finch.png')
        },
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.contentWrap {
  h2 {
  font-size: 30px;
  padding: 0 16px;
  word-break: keep-all;
  margin: 70px 0 20px;
  span {
    color: $sub-text-color;
    display: block;
  }
}
  ul {
    justify-content: space-between;
    width: 100%;

    .content__list {
      overflow: hidden;
      position: relative;
      transition: 1s;
      height: 500px;

      img.content__image {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }

      &:hover {
        .content__text {
          bottom: 30px;
          opacity: 1;
        }
      }

      .content__text {
        position: absolute;
        gap: 20px;
        left: 30px;
        bottom: 30px;
        opacity: 1;
        transition: .5s;

        p {
          margin-top: 10px;
          color: #fff;
          text-shadow: 0 0 5px #000;
          font-size: 16px;
        }
      }
    }
  }
}

@media screen and (min-width : 768px) {
  .contentWrap {
    h2 {
  text-align: center;
  font-size: 35px;
  margin: 100px 0 30px;
  span {
    display: inline;
  }
}
    ul {
      display: flex;

      .content__list {
        width: calc(100% / 5);

        &:hover {
          width: 100%;
        }

        &:hover {
          .content__text {
            bottom: 30px;
            opacity: 1;
          }
        }

        .content__text {
          @include flexCenter();
          bottom: 0;
          opacity: 0;

          p {
            margin-top: 0;
          }
        }
      }
    }
  }
}
</style>
