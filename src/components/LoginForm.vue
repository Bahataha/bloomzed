<template>
  <div>
    <form @submit.prevent="login">
      <label>phone</label>
      <input type="text" required v-model="mobile">
      <button type="submit">login</button>
    </form>
  </div>
</template>

<script>
import axios from "axios";
import Config from "@/config/config";


export default {
  name: 'login',
  data(){
    return{
      mobile: '',
      password: '',
      config: new Config()
    }
  },

  methods: {
    async login(){
      let configData = {
        mobile: this.mobile
      }
      let cmd = 'auth.reg.mobile'
      const response = await axios.post('api/lwl/app', this.config.data(configData, cmd))

      if (response.data.error){
        console.log(response)
      }else{
        sessionStorage.setItem('mobile', this.mobile);
      }

      if(sessionStorage.getItem('mobile') != null){
        this.$router.push('/otp');
      }
    }

  }
}
</script>

<style scoped>

</style>
