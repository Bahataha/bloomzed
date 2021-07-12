<template>
  <div>
    <form @submit.prevent="secureCode">
      <div class="page-title page-title-fixed" style="opacity: 1;">
        <h1>Login</h1>
      </div>
      <div class="page-title-clear"></div>
      <div class="page-content">
        <div class="card card-style">
          <div class="content mb-0">
            <h3></h3>
            <div class="input-style has-borders no-icon validate-field mb-4">
              <input type="tel" class="form-control validate-text" id="form4" placeholder="OTP" v-model="otp">
              <label for="form4" class="color-highlight">OTP</label>
              <i class="fa fa-times disabled invalid color-red-dark"></i>
              <i class="fa fa-check disabled valid color-green-dark"></i>
              <em>(required)</em>
            </div>
            <div class="input-style has-borders no-icon validate-field mb-4">
              <button class="btn btn-m btn-full mb-3 rounded-xs text-uppercase font-900 shadow-s bg-green-dark" style="width: 100%" type="submit" >login</button>
            </div>
          </div>
        </div>
      </div>
<!--      <input type="text" required v-model="otp">-->
<!--      <button type="submit">login</button>-->
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
        window.location.reload();
      }
    }
  }
}
</script>

<style scoped>

</style>
