<template>
  <div>
    <form @submit.prevent="secureCode">
      <label>OTP</label>
      <input type="text" required v-model="otp">
      <button type="submit">login</button>
    </form>

  </div>
</template>

<script>
import axios from "axios";
import Config from "@/config/config";

export default {
  name: "Otp",
  data(){
    return {
      otp: '',
      config: new Config()
    }
  },

  methods:{
    async secureCode(){
      let configData = {
        mobile: sessionStorage.getItem('mobile'),
        'otp': this.otp
      }
      let cmd = 'auth.reg.mobile.otp'
      const response = await axios.post('api/lwl/app', this.config.data(configData, cmd));
      // const response = this.config.data(configData, cmd)

      if (response.data.json.success){
        sessionStorage.setItem('otp', true);
      }
      if(sessionStorage.getItem('otp')){
        this.$router.push('/passw');
      }
    }
  }
}
</script>

<style scoped>

</style>
