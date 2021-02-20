<template>
  <div id = "app">
    @_{{user.username}} - {{fullName}}
    <strong>Followers: {{followers}}</strong>
    <button @click="followUsers">Follow</button>
  </div>
  
</template>

<script>

export default {
  name: 'App',
  data () {
    return {
      followers: 0,
      user: {
        username: "gayathribuddhika",
        firstName: "Gayathri",
        lastName: "Buddhika",
        email: "wg.gayathri@gmail.com",
        isAdmin: true
      }
    }
  },
  computed: {
    fullName() {
      return `${this.user.firstName} ${this.user.lastName}`;
    }
  },
  methods: {
    followUsers() {
      this.followers++;
    }
  }
  
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
