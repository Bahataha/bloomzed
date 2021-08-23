<template>
  <div class="">
    <Footer />
    <div class="page-title-clear"></div>
    <div class="page-content">
      <div class="card card-style">
        <div class="content mb-2">
          <div class="row m-1">
            <button class="btn btn-m btn-full mb-3 rounded-xs text-uppercase font-900 shadow-s bg-green-dark" v-on:click="toggleVisible">visible</button>
            <button class="btn btn-m btn-full mb-3 rounded-xs text-uppercase font-900 shadow-s bg-green-dark" v-on:click="changeColor">color</button>
            <button class="btn btn-m btn-full mb-3 rounded-xs text-uppercase font-900 shadow-s bg-green-dark" v-on:click="toggleOverlay">overlay</button>
            <button class="btn btn-m btn-full mb-3 rounded-xs text-uppercase font-900 shadow-s bg-green-dark" v-on:click="styleText">Text Style</button>
          </div>
        </div>

      </div>

    </div>
  </div>

</template>

<script>
import { StatusBar, Animation, Style } from '@capacitor/status-bar';
import Footer from "@/components/Footer";
export default {
  name: "Status",
  data(){
    return {
      visible: true,
      overlay: true,
      style: true
    }
  },
  methods: {
    toggleVisible(){
      if(this.visible){
        StatusBar.hide({ animation: Animation.Slide })
      }
      else{
        StatusBar.show({ animation: Animation.Fade })
      }
      this.visible = !this.visible;
    },
    changeColor(){
      const color = '#' + Math.floor(Math.random() * 16777215).toString(16)
      // const color = '#33000000'
      StatusBar.setBackgroundColor({color: color})
    },
    toggleOverlay(){
      this.overlay = !this.overlay;
      StatusBar.setOverlaysWebView({overlay: this.overlay})
    },
    styleText(){
      if(this.style){
        StatusBar.setStyle({ style: Style.Dark });
      }
      else{
        StatusBar.setStyle({ style: Style.Light });
      }
      this.style = !this.style;
    }
  },
  components: {
    Footer
  }
}
</script>

<style scoped>

</style>
