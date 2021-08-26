<template>
  <div class="home">
    <Footer />
    <div class="card card-style">
        <div class="content mb-2">
            <Template />
            <Modal />
        </div>
    </div>
  </div>

</template>

<script>
import Footer from "@/components/Footer";
import Template from "@/components/qc-table/Template";
import Modal from "@/components/qc-modal/Template";
export default {
  name: "Component",
  components:{
    Footer,
    Template,
    Modal
  }
}
</script>

<style scoped>

</style>
