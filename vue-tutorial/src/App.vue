<template>
  <div id="app">
    <userProfile/>
  </div>
</template>

<script>
import userProfile from './components/userProfile';
export default {
  name: "App",
  components: {userProfile}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  flex-direction: column;
}
</style>
