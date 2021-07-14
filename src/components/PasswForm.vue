<template>
  <div>
    <form @submit.prevent="passwordForm">
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
              <input type="password" class="form-control validate-text" id="form4" placeholder="Password" v-model="password">
              <label for="form4" class="color-highlight">Password</label>
              <i class="fa fa-times disabled invalid color-red-dark"></i>
              <i class="fa fa-check disabled valid color-green-dark"></i>
              <em>(required)</em>
            </div>
            <span v-for="item in errors" v-bind:key="item" style="color: red">
              {{item}}
            </span>
            <div class="input-style has-borders no-icon validate-field mb-4">
              <button class="btn btn-m btn-full mb-3 rounded-xs text-uppercase font-900 shadow-s bg-green-dark" style="width: 100%" type="submit" >login</button>
            </div>
          </div>
        </div>
      </div>
<!--      <label>password</label>-->
<!--      <input type="password" required v-model="password">-->
<!--      <button type="submit">login</button>-->
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
      config: new Config(),
      errors: []
    }
  },
  methods:{
    addError(){
      this.item = [];
    },
    async passwordForm(){
      var pass = sha256(md5(this.password).toString()).toString()
      let configData = {
        mobile: sessionStorage.getItem('mobile'),
        'passw': pass
      }
      let cmd = 'authRegMobilePassw'
      const response = await axios.post('api/lwl/app', this.config.data(configData, cmd));
      if('error' in response.data){
        document.getElementById("form4").className = document.getElementById("form4").className + " error";
        this.errors = []
        this.item = response.data.error.message
        this.errors.push(this.item);
        console.log(response.data.error)
      }
      else if (response.data.json.session){
        sessionStorage.setItem('session', response.data.json.session);
        sessionStorage.setItem('user', JSON.stringify(response.data.json));
      }

      if(sessionStorage.getItem('session')){
        this.$router.push('/profile');
      }
    }
  }
}
</script>

<style scoped>
.error {
  border-color:red !important;
}
</style>
