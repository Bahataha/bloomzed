<template>
  <div>
    <form @submit.prevent="login">
      <div class="page-title page-title-fixed" style="opacity: 1;">
        <h1>Login</h1>
      </div>
      <div class="page-title-clear"></div>
      <div class="page-content">
        <div class="card card-style">
          <div class="content mb-0">
            <h3></h3>
            <p>
              These boxes will react to them when you type or select a value.
            </p>
            <div class="input-style has-borders no-icon validate-field mb-4">
              <input type="tel" class="form-control validate-text" id="form4" placeholder="Phone" v-model="mobile">
              <label for="form4" class="color-highlight">Phone</label>
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
        mobile: '7' + this.mobile
      }
      let cmd = 'auth.reg.mobile'
      const response = await axios.post('api/lwl/app', this.config.data(configData, cmd))

      if (response.data.error){
        console.log(response)
      }else{
        sessionStorage.setItem('mobile', '7' + this.mobile);
        window.location.reload();
      }
    }

  }
}
</script>

<style scoped>

</style>
