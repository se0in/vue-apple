<template>
  <div class="popup" v-if="visible">
    <div class="popup-content">
      안뇽?
    </div>
    <button @click="closePopup">닫기</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      visible: false
    };
  },
  methods: {
    closePopup() {
      this.visible = false;
    }
  }
}
</script>
