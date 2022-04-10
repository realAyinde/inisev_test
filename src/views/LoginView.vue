<template>
  <section>
    <alert-box v-if="alert.visible" />
    <div class="login">
      <div>
        <p>SIGN IN TO YOUR ACCOUNT</p>
        <form>
          <input type="text" v-model="username" />
          <input type="password" v-model="password" />
          <a @click="login">SIGN IN</a>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
import alertBox from "@/components/alert-box.vue";
import { mapMutations, mapState } from "vuex";
export default {
  name: "LoginView",
  components: { alertBox },
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    ...mapMutations(["showAlert"]),
    login() {
      console.log(this.username);
      if (this.username === "") {
        this.showAlert("Please fill the username field");
      }
    },
  },
  computed: {
    ...mapState(["alert"]),
  },
};
</script>

<style lang="scss">
$input-bg: rgb(231, 207, 207);
$indigo: indigo;
.login {
  display: flex;
  height: 100vh;
  align-items: center;
  justify-items: center;

  div {
    max-width: 340px;
    padding: 0 24px;
    margin: auto;
  }

  p {
    text-align: center;
    text-transform: uppercase;
    margin: 24px 0;
    font-weight: bold;
  }

  form {
    margin: 24px 0;
    width: 100%;

    input {
      border-radius: 8px;
      display: inline-block;
      outline: none;
      border: none;
      padding: 12px;
      margin: 4px 0;
      width: 100%;
      color: gray;
      background: $input-bg;
    }

    button,
    a {
      display: block;
      border-radius: 8px;
      cursor: pointer;
      border: none;
      padding: 12px;
      margin: 4px 0;
      margin-top: 48px;
      width: 100%;
      text-align: center;
      color: white;
      background: $indigo;
      font-weight: bold;
    }
  }
}
</style>
