<template>
  <div class="home">
    <Footer />
    <div v-if="sessionStorage.mobile == null">
      <LoginForm />
    </div>
    <div v-else-if="!sessionStorage.otp">
      <Otp />
    </div>
    <div v-else>
      <PasswForm />
    </div>
  </div>
</template>

<script>
import LoginForm from '@/components/LoginForm.vue'
import Otp from '@/components/OtpForm.vue'
import PasswForm from "@/components/PasswForm";
import Footer from "@/components/Footer";
export default {
  data(){
    return {
      otp: '',
      sessionStorage: sessionStorage
    }
  },
  components: {
    LoginForm,
    Otp,
    PasswForm,
    Footer
  },
  mounted(){
    if(sessionStorage.getItem('session')){
      this.$router.push('/profile');
    }
  }
}
</script>
