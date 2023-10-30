<template>
  <div class="contentWrap">
    <ul>
      <li 
      v-for="list in contents" 
      :key="list"
      class="content__list"
      >
        <img :src=list.path :alt=list.title>
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
  components : {
    BtnWatching
  },
  data() {
    return {
      contents : [
        {
          title : '더 모닝쇼',
          text :  '아침 TV 뉴스쇼 무대 뒤에서 펼쳐지는 적나라한 이야기.',
          path : require('@assets/img/HomeThird_the-morning-show.png')
        },
        {
          title : 'see 어둠의 나날',
          text :  '먼 미래, 살아남은 인류는 시력을 잃었다.',
          path : require('@assets/img/HomeThird_see.png')
        },
        {
          title : '서번트',
          text :  '슬픔에 빠진 한 필라델피아 부부의 이야기를 다루는 드라마.',
          path : require('@assets/img/HomeThird_servant.png')
        },
        {
          title : '파운데이션',
          text :  '인류를 구하고, 문명을 재건하기 위해 나선 망명자들의 장대한 여정.',
          path : require('@assets/img/HomeThird_foundation.png')
        },
        {
          title : '핀치',
          text :  '폐허가 된 위험한 세상에 소중한 반려견, 갓 만들어낸 로봇과 나만 덩그러니 남았다.',
          path : require('@assets/img/HomeThird_finch.png')
        },
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.contentWrap {
  width: 100%;
  ul {
    width: 100%;
    // overflow: hidden;
    display: flex;
    .content__list {
      width: calc(100% / 5);
      position: relative;
      // overflow: hidden; 
      img {
        transition: transform 0.3s;
      }
      &:hover {
        img {
          transform: scale(1.1);
        }
        .content__text {
          display: flex; 
        }
      }
      .content__text {
        position: absolute;
        @include flexCenter();
        flex-wrap: wrap;
        gap: 20px;
        left: 30px;
        bottom: 30px;
        display: none;
        .content__btn {}
        p {
          color: #fff;
          text-shadow: 0 0 5px #000;
          font-size: 18px;
        }
      }
    }
  }
}
</style>
