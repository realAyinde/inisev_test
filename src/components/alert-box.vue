<template>
  <transition name="fade">
    <div class="alert-box">
      <p>{{ alert.message }}</p>
    </div>
  </transition>
</template>
<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["alert"]),
  },
};
</script>

<style lang="scss">
.alert-box {
  position: fixed;
  padding: 8px 24px;
  border-radius: 8px;
  top: 16px;
  left: 50%;
  color: white;
  font-size: .85rem;
  transform: translateX(-50%);
  background: rgba(62, 150, 81, .5);
}


</style>
