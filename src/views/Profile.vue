<template>
  <div class="">
    <Footer />
    <div class="page-title page-title-fixed" style="opacity: 1;">
      <h1>Bloomzed</h1>
    </div>
    <div class="page-title-clear"></div>
    <div class="card card-style">
      <div class="content">
        <h1 class="text-center font-30 mb-n1">Кошелек</h1>
        <p class="font-40 text-center pt-3">
          {{numberWithSpaces(response.data.json.balances[0].balance)}}
          <sup class="price-sup font-14">{{response.data.json.balances[0].currency}}</sup>
        </p>
      </div>
    </div>
  </div>

</template>

<script>
import Footer from "@/components/Footer";
import axios from "axios";
import Config from "@/config/config";

export default {
  name: 'Profile',
  components:{
    Footer
  },
  data(){
   return{
     config: new Config(),
     response: ''
   }
  },
  beforeMount(){
   if(!sessionStorage.getItem('session')){
     this.$router.push('/');
   }
  },
  mounted() {
    let cmd = 'my.balance'
    let configData = {
      currency: "",
      paysys: 1,
      session: sessionStorage.getItem('session')
    }
    axios.post('api/lwl/app', this.config.data(configData, cmd)).then(response => (this.response = response))

  },
  methods:{
    numberWithSpaces(x) {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    }
  }
 }
</script>
