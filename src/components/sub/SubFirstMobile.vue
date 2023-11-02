<template>
  <div class="content">
    <div class="img-box"><img src="@/assets/img/SubFirst-iphone-mobile.jpg" alt=""></div>
    <h1>탁월한 선택</h1>
    <ul>
      <li>쾌속으로 질주하는 프로세서.</li>
      <li>획기적인 배터리 성능.</li>
      <li>고속 5G 연결.</li>
      <li>오랜 사용을 염두에 둔 디자인.</li>
      <li>수준급 카메라.</li>
      <li>익숙해서 좋은 홈버튼.</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'SubPage',
  props: {
    msg: String
  }
}
</script>

<style lang="scss" scoped>
  .content {
    width: 100%;
    .img-box {
      height: 575px;
      overflow: hidden;
      background-color: #FBFBFD;
      img {
        max-width: 300px;
        margin: -50px auto 0;
      }
    }
    h1 {
      background: linear-gradient(90deg, #513bb5 30%, #9680ec 55%);
      background-clip: text;
      color: transparent;
      font-size: 40px;
      text-align: center;
      margin: 140px 0 100px;
      position: relative;
      &::after {
        content: '';
        width: 104px;
        height: 20px;
        background-color: red;
        display: block;
        background: url(@/assets/img/logo_iphone_se.png) no-repeat;
        position: absolute;
        top: -40px;
        left: 50%;
        transform: translateX(-50%);
        
      }
    }
    ul {
      li {
        height: 90px;
        font-size: 20px;
        line-height: 90px;
        color: #fff;
        padding-left: 30px;
        &:nth-child(1) {background: linear-gradient(90deg, #180e4e 0%, #3a2990cb 70%, #c2846b 100%);}
        &:nth-child(2) {background: linear-gradient(90deg, #232361 0%, #2f1e72e3 60%, #b36464 100%);}
        &:nth-child(3) {background: linear-gradient(90deg, #141f66 0%, #3d2591 50%, #934a5c 100%);}
        &:nth-child(4) {background: linear-gradient(90deg, #28326d 0%, #2f1d76 40%, #82445b 100%);}
        &:nth-child(5) {background: linear-gradient(90deg, #1e1e57 0%, #342281 30%, #945961 100%);}
        &:nth-child(6) {background: linear-gradient(90deg, #231d4d 0%, #3b2990 20%, #bd7067 100%);}
      }
    }
  }
</style>
