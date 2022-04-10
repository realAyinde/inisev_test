<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  position: relative;
}

*,*::before,
*::after {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

ul, li, a {
  text-decoration: none;
  list-style: none;
}
@import "assets/style.css";
</style>
