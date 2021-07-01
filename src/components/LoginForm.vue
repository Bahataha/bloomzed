<template>
  <div>
    <form @submit.prevent="login">
      <label>phone</label>
      <input type="text" required v-model="phone">
      <label>password</label>
      <input type="password" required v-model="password">
      <button type="submit">login</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'login',
  data(){
    return{
      phone: '',
      password: ''
    }
  },
  methods: {
    async login(){
      const response = await axios.post('oauth/token', {
        phone: this.phone,
        password: this.password
      })

      localStorage.setItem('token', response.data.token);
      this.$router.dispatch('user', response.data.user);
      this.$router.push('/profile');
    }

  }
}
</script>

<style scoped>

</style>