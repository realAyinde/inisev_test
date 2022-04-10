<template>
  <section>
    <div class="mobile-menu-icon">
      <a @click="openMenu" class="menu-icon"><i class="icon-log-out"></i></a>
    </div>
    <div class="menu">
      <nav>
        <div class="">
          <div class="logo">
            <span>PROFILES</span>
          </div>
          <div class="nav-items">
            <a href="">Dashboard</a>
            <a href="">Profiles</a>
            <a href="">Users</a>
          </div>
        </div>
        <div class="logout">
          <a @click="logout">
            <span><i class="icon-log-out"></i></span>
            <span>Admin</span>
          </a>
        </div>
      </nav>
    </div>
  </section>
</template>

<script>
import { mapActions, mapMutations } from "vuex";
export default {
  methods: {
    ...mapMutations(["openMenu"]),
    ...mapActions(["logout"])
  },
};
</script>

<style lang="scss">
.mobile-menu-icon {
  position: fixed;
  cursor: pointer;
  left: 16px;
  top: 16px;
  display: none;
  z-index: 15;
  @media screen and (max-width: 768px) {
    display: block;
  }
}

.menu {
  @media screen and (max-width: 768px) {
    display: none;
  }
  position: absolute;
  overflow-y: hidden;
  width: 240px;
  top: 0;
  bottom: 0;
  left: 0;
  z-index: 10;
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
        cursor: pointer;
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
