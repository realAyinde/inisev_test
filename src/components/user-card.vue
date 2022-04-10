<template>
  <div class="card" @click="showProfile(profile)">
    <img :src="profile.image" />
    <div class="info">
      <span class="message-box"><i class="icon-mail"></i></span>
      <p class="name">{{ profile.name }}</p>
      <p>{{ profile.address.city }}</p>
    </div>
  </div>
</template>
<script>
import { mapMutations } from "vuex";
export default {
  props: {
    profile: Object,
  },
  methods: {
    ...mapMutations(["showProfile"]),
  },
};
</script>
<style lang="scss">
.card {
  width: 100%;
  height: 240px;
  border-radius: 12px;
  padding: 1rem;
  background: white;
  position: relative;
  display: flex;
  align-items: flex-end;
  transition: 0.4s ease-out;
  box-shadow: 0px 7px 10px rgba(black, 0.5);
  cursor: pointer;

  &:hover {
    transform: scale(102%);
    &:before {
      opacity: 1;
    }
    .info {
      opacity: 1;
      transform: translateY(0px);
    }
  }
  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 12px;
    background: rgba(black, 0.6);
    z-index: 2;
    transition: 0.5s;
    opacity: 0;
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 12px;
  }

  .info {
    position: relative;
    z-index: 3;
    color: white;
    opacity: 0;
    transform: translateY(30px);
    transition: 0.5s;
    width: 100%;
    height: 100%;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;

    .message-box {
      position: absolute;
      right: 0;
      top: 0;
    }

    .name {
      margin: 0px;
      font-weight: bold;
      font-size: 1.1rem;
    }
    p {
      margin-top: 8px;
    }
  }
}
</style>