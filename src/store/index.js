import Vue from "vue";
import Vuex from "vuex";
import router from '../router';
import { userService } from "../services/user";


const API_URL = 'https://mock.follow.it/profiles.json'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    profiles: [],
    modalProfile: {
      visible: false,
      profile: {}
    },
    alert: {
      visible: false,
      message: ""
    },
    isMenuOpen: false
  },
  getters: {},
  mutations: {
    showProfile(state, profile) {
      state.modalProfile.profile = profile,
      state.modalProfile.visible = true
    },
    showAlert(state, msg) {
      state.alert.message = msg,
      state.alert.visible = true
      setTimeout(()=>{
        state.alert.visible = false
      }, 5000)
    },
    closeProfile(state) {
      state.modalProfile.visible = false
    },
    openMenu(state) {
      state.isMenuOpen = true
    },
    closeMenu(state) {
      state.isMenuOpen = false
    }
  },
  actions: {
    getAllProfiles({ state }) {
      return fetch(API_URL)
        .then(async (response) => await response.json())
        .then((data) => {
          state.profiles = data;
        })
        .catch((error) => console.error("There was an error!", error));
    },
    logout({commit}){
      userService.logout()
      commit("showAlert", "Logout Successfully!")
      router.push('login');
    }
  },
  modules: {},
});
