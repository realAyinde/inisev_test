<template>
  <div class="users">
    <users-menu />
    <div class="main">
      <div class="main-content">
        <p class="user-headline">
          <span>USERS </span>
        </p>
        <div class="users-list">
          <ul class="cards">
            <li
              class="cards_item"
              v-for="(profile, index) in profiles"
              :key="index"
            >
              <user-card :profile="profile" />
            </li>
          </ul>
        </div>
      </div>
    </div>

    <app-menu v-if="isMenuOpen" />
    <profile-modal v-if="modalProfile.visible" />
  </div>
</template>
<script>
import UsersMenu from "@/components/users-menu.vue";
import AppMenu from "@/components/app-menu.vue";
import { mapActions, mapMutations, mapState } from "vuex";
import UserCard from "@/components/user-card.vue";
import ProfileModal from "@/components/profile-modal.vue";
export default {
  name: "UsersView",
  components: { UsersMenu, AppMenu, UserCard, ProfileModal },
  methods: {
    ...mapActions(["getAllProfiles"]),
    ...mapMutations(["closeProfile"])
  },
  computed: {
    ...mapState(["profiles", "modalProfile", "isMenuOpen"]),
  },
  created() {
    this.getAllProfiles();
  },
};
</script>
<style lang="scss">
.users {
  position: relative;
  //max-width: 1200px;
  margin: auto;
  height: 100vh;

  .user-headline {
    font-size: 1.5rem;
    font-weight: bold;
    text-align: right;

    span {
      padding-bottom: 4px;
      border-bottom: 4px solid #000;
    }
  }

  .main {
    margin-left: 240px;
    height: 100%;
    padding: 12px;
    width: full;
    overflow: auto;

    @media (max-width: 768px) {
      margin-left: 0;
    }
  }

  .users-list {
    width: 100%;

    .cards {
      display: flex;
      flex-wrap: wrap;
      list-style: none;
      margin: 0;
      padding: 0;
      width: 100%;
    }

    .cards_item {
      display: flex;
      padding: 1rem;
    }

    // @media (min-width: 40rem) {
    //   .cards_item {
    //     width: 50%;
    //   }
    // }

    // @media (min-width: 56rem) {
    //   .cards_item {
    //     width: 25%;
    //   }
    // }
    @media (max-width: 480px) {
      .cards_item {
        width: 50%;
      }
    }

    @media (min-width: 641px) {
      .cards_item {
        width: 33.3333%;
      }
    }

    @media (min-width: 1024px) {
      .cards_item {
        width: 25%;
      }
    }

    @media (min-width: 1200px) {
      .cards_item {
        width: 20%;
      }
    }
  }
}
</style>