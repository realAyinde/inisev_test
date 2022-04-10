<template>
  <transition name="slide">
    <div class="menu2">
      <nav>
        <div class="">
          <div class="logo">
            <span>PROFILES</span>
            <span class="menu-close" @click="closeMenu"
              ><i class="icon-close"></i
            ></span>
          </div>
          <div class="nav-items">
            <a href="">Dashboard</a>
            <a href="">Profiles</a>
            <a href="">Users</a>
          </div>
        </div>
        <div class="logout">
          <a href="">
            <span><i class="icon-log-out"></i></span>
            <span>Admin</span>
          </a>
        </div>
      </nav>
    </div>
  </transition>
</template>
<script>
import { mapMutations } from "vuex";
export default {
  methods: {
    ...mapMutations(["closeMenu"]),
  },
};
</script>
<style lang="scss">
.menu2 {
  position: absolute;
  overflow-y: hidden;
  width: 240px;
  top: 0;
  bottom: 0;
  left: 0;
  z-index: 16;
  padding: 8px;

  nav {
    border-radius: 12px;
    background-color: #eee;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 24px;
    height: 100%;

    .logo {
      padding: 12px;
      width: 100%;
      display: flex;
      justify-content: space-between;
      gap: 8px;
      font-weight: bold;
      font-size: 1.1em;

      .menu-close {
        cursor: pointer;
      }
    }

    .nav-items {
      margin: 12px 0;
      width: 100%;

      a {
        color: black;
        display: block;
        padding: 12px;
      }

      a:hover {
        background-color: #ccc;
      }

      a.active {
        background-color: #04aa6d;
        color: white;
      }
    }

    .logout {
      margin: 0 12px 0 0;
      a {
        color: black;
        display: block;
        padding: 12px;
        display: flex;
        gap: 8px;
      }
    }
  }
}
</style>