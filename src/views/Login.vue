<template>
  <div class="home">
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
    PasswForm
  },
  mounted(){
    if(sessionStorage.getItem('session')){
      this.$router.push('/profile');
    }
  }
}
</script>
