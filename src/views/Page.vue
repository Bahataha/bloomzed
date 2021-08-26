<template>
<div>
<Footer />
    <div class="card card-style">
        <div class="content mb-2">
            <h4>{{ title }}</h4>
            <Template />
        </div>
    </div>
</div>
</template>

<script>
import Template from '@/components/qc-table/Template.vue'
import Footer from "@/components/Footer";
export default {
  data(){
    return {
      otp: '',
      sessionStorage: sessionStorage
    }
  },
  components: {
    Template,
    Footer
  }
}
</script>
