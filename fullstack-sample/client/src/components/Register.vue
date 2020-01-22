<template>
  <div>
    <h1>Register</h1>
    <form action="">
        <label for="">email</label>
        <input type="email" name ="email" v-model="email"/><br><br>
        <label for="">password</label>
        <input type="password" name="password" v-model="password"><br><br>
        <button @click="register">Register</button>
    </form>
  </div>
</template>

<script>
import AuthenticationService from '@services/ AuthenticationService';

export default {
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    async register () {
      const response = await  AuthenticationService.register({
        email: this.email,
        password: this.password
      })
      console.log(response.data)
    }
  }
}

</script>

<style scoped>

</style>
