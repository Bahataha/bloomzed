<template>
  <div>
    <form @submit.prevent="passwordForm">
      <label>password</label>
      <input type="password" required v-model="password">
      <button type="submit">login</button>
    </form>
  </div>
</template>

<script>
import axios from "axios";
import Config from "@/config/config";
import sha256 from 'crypto-js/sha256'
import md5 from 'crypto-js/md5'
export default {
  name: "PasswForm",
  data(){
    return{
      password: '',
      config: new Config()
    }
  },
  methods:{
    async passwordForm(){
      this.password = sha256(md5(this.password).toString()).toString()
      let configData = {
        mobile: sessionStorage.getItem('mobile'),
        'passw': this.password
      }
      let cmd = 'authRegMobilePassw'
      const response = await axios.post('api/lwl/app', this.config.data(configData, cmd));

      if (response.data.json.session){
        console.log(response)
        sessionStorage.setItem('session', response.data.json.session);
        sessionStorage.setItem('user', response.data.json);

      }
      if(sessionStorage.getItem('session')){
        this.$router.push('/profile');
      }
    }
  }
}
</script>

<style scoped>

</style>
