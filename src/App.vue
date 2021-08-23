<template>
  <div class="">
<!--    <div id="preloader"><div class="spinner-border color-highlight" role="status"></div></div>-->
    <div id="page">
      <Header />
      <router-view />
    </div>
  </div>
</template>

<!--<script type="text/javascript" src="@/assets/scripts/bootstrap.min.js"></script>-->
<!--<script type="text/javascript" src="@/assets/scripts/custom.js"></script>-->
<script>
import { StatusBar, Style } from '@capacitor/status-bar';
import Header from "@/components/Header";
import 'bootstrap/dist/js/bootstrap.min'
// require('./assets/scripts/bootstrap.min')
// import './assets/scripts/custom'
StatusBar.setOverlaysWebView({ overlay: true });

StatusBar.setStyle({ style: Style.Light });


export default {
  metaInfo(){
    return {
      meta: [
        { 'http-equiv': 'Content-Type', content: 'text/html; charset=utf-8'},
        { name: 'apple-mobile-web-app-capable', content: 'yes' },
        { name: 'mobile-web-app-capable', content: 'yes' },
        { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' },
        { name: 'mobile-web-app-status-bar-style', content: 'black-translucent' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, viewport-fit=cover'}
      ]
    }
  },
  name: 'App',
  mounted() {
    document.body.classList.add('theme-light')
  },
  components:{
    Header
  }
}
</script>

<style>@import './assets/styles/bootstrap.css';</style>
<style>@import './assets/styles/style.css';</style>
<style>@import "./assets/fonts/css/all.css";</style>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet">
<style>@import './assets/fonts/css/fontawesome-all.min.css';</style>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
