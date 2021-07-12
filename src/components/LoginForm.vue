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
            <div class="input-style input-style-always-active has-borders no-icon validate-field mb-4">
              <input type="tel" class="form-control validate-text" id="form1" placeholder="Phone" v-model="mobile">
              <label for="form1" class="color-theme opacity-50 text-uppercase font-700 font-10">Phone</label>
              <i class="fa fa-times disabled invalid color-red-dark"></i>
              <i class="fa fa-check disabled valid color-green-dark"></i>
              <em>(required)</em>

            </div>
            <span v-for="item in items" v-bind:key="item" style="color: red">
              {{item}}
            </span>
            <div class="input-style has-borders no-icon validate-field mb-4">
              <button class="btn btn-full btn-l font-600 font-13 gradient-highlight mt-4 rounded-s" style="width: 100%" type="submit" >login</button>
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
      config: new Config(),
      items: []
    }
  },

  methods: {
    addError(){
      this.item = [];
    },
    async login(){
      let configData = {
        mobile: '7' + this.mobile
      }
      let cmd = 'auth.reg.mobile'
      const response = await axios.post('api/lwl/app', this.config.data(configData, cmd))
      //this.item = response.data
      //this.items.push(this.item);
      if (response.data.error){
        document.getElementById("form1").className = document.getElementById("form1").className + " error";
        this.items = []
        this.item = response.data.error.message
        this.items.push(this.item);
      }
      else if(!response.data.json.passw){
        document.getElementById("form1").className = document.getElementById("form1").className + " error";
        this.items = []
        this.item = 'Incorrect phone number'
        this.items.push(this.item);
      }
      else if(response.data.json.passw){
        sessionStorage.setItem('mobile', '7' + this.mobile);
        window.location.reload();
      }
      else{
        this.items = []
        this.item = response.data
        this.items.push(this.item);
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
