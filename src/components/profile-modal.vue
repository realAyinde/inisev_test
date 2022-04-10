<template>
  <transition name="modal">
    <div class="modal" @click.self="closeProfile">
      <div class="modal-content">
        <div class="image">
          <img
            :src="modalProfile.profile.image"
            :alt="modalProfile.profile.name"
          />
        </div>
        <div class="texts">
          <a type="button" class="btn-close" @click="closeProfile">
            <i class="icon-close"></i>
          </a>
          <ul>
            <li class="">
              <span class="icon-wrapper"><i class="icon-user"></i></span
              ><span>{{ modalProfile.profile.name }}</span>
            </li>
            <li class="">
              <a :href="`${mailing()}`">
                <span class="icon-wrapper"><i class="icon-envelope"></i></span
                ><span>{{ modalProfile.profile.email }}</span>
              </a>
            </li>
            <li class="">
              <span class="icon-wrapper"><i class="icon-phone1"></i></span
              ><span>{{ modalProfile.profile.phone }}</span>
            </li>
            <li class="">
              <span class="icon-wrapper"><i class="icon-home3"></i></span
              ><span
                >{{ modalProfile.profile.address.city }},
                {{ modalProfile.profile.address.street }}</span
              >
            </li>
            <li class="">
              <span class="icon-wrapper"><i class="icon-sphere"></i></span
              ><span>{{ modalProfile.profile.website }}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </transition>
</template>
<script>
import { mapState, mapMutations } from "vuex";
export default {
  data() {
    return {
      mail: {
        subject: "We are hiring!",
      },
    };
  },
  methods: {
    ...mapMutations(["closeProfile"]),
    msgBody() {
      return (
        "Hello, " +
        this.modalProfile.profile.name +
        " We'd like to propose you an offer."
      );
    },
    mailing() {
      return (
        "mailto:" +
        this.modalProfile.profile.email +
        "?subject=" +
        this.mail.subject +
        "&body=" +
        this.msgBody()
      );
    },
  },
  computed: {
    ...mapState(["modalProfile"]),
  },
};
</script>

<style lang="scss">
.icon-wrapper {
  display: inline-block;
  border: 2px solid #000;
  border-radius: 50%;
  padding: 4px;
}
.modal {
  position: fixed;
  z-index: 20;
  padding-top: 100px;
  transition-duration: 0.5s;
  top: 0;
  right: 0;
  height: 100%;
  overflow: auto;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.6);
  left: 240px;
  @media (max-width: 768px) {
    left: 0;
  }
}

.modal-content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fefefe;
  margin: auto;
  max-height: 220px;
  border-radius: 12px;
  overflow: hidden;
  width: 80%;
  max-width: 560px;
  display: flex;

  @media (min-width: 640px) {
    flex-direction: row;
  }

  .image {
    @media (min-width: 640px) {
      flex-basis: 33.3333%;
      width: 33.3333%;
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .btn-close {
    position: absolute;
    right: 12px;
    top: 12px;
    cursor: pointer;
  }

  .texts {
    padding: 20px;
    @media (min-width: 640px) {
      flex-basis: 66.6666%;
      width: 66.6666%;
    }

    ul {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      gap: 8px;
      height: 100%;

      li,
      li a {
        color: inherit;
        display: flex;
        gap: 8px;
        align-items: center;
        font-size: 0.95rem;
        font-weight: bold;
      }
    }
  }
}
</style>