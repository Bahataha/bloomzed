<template>
    <div>
        <Footer />
<!--        <div id="id_verilive" style="posi5tion: absolute; width: 100vh; height: 100vh; left: -25vh"></div>-->
        <div style="width: 100vw; height: 100%">
          <video style="width: 100vw; height: 100%" autoplay="true" id="video">
          </video>
        </div>
        <button v-on:click="capture">Capture</button>
        <canvas id="canvas" style="display: none" ></canvas>
      <p id="printresult"></p>
        <pre id="results"></pre>
    </div>
</template>

<script>


import axios from "axios";
import Footer from "@/components/Footer";
export default {
  name: "Verigram",
  components:{
    Footer
  },
  mounted() {
    var video = document.querySelector("#video");
    if (navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices.getUserMedia({ video: true })
          .then(function (stream) {
            video.srcObject = stream;
          })
          .catch(function (err0r) {
            console.log(err0r);
          });
    }


  },
  methods:{
    async capture(){
      var canvas = document.getElementById('canvas');
      var video = document.getElementById('video');
      canvas.width = video.offsetWidth;
      canvas.height = video.offsetHeight;
      canvas.getContext('2d').drawImage(video, 0, 0, video.offsetWidth,video.offsetHeight);
      var resultb64=canvas.toDataURL();
      try {
        var status = false;
        var counter = 0;
        while (!status){
          counter++;
          const response = await axios.post('https://stage-prototype.bloomzed.kz/api/test', {'image': resultb64})
              .then(res => {
                if (res.status === 200 || counter === 10){
                  status = true;
                  video.style.display = "none";
                }
              });
        }

      }
      catch (e){
        console.log(e);
      }


    }
  }
}




// import Footer from "@/components/Footer";
// import { Camera, CameraResultType } from '@capacitor/camera';
// import { defineCustomElements } from '@ionic/pwa-elements/loader';
// const url = "https://services.verigram.ai:8443/verilive/verilive"
// const apiKey = "LFVHos4CAHkCemfS3PQe9DWdenO2zOh2";
// export default {
//   name: "Verigram",
//   components:{
//     Footer
//   },
//   data(){
//       return {
//           session: ''
//       }
//   },
//   mounted(){
//     const plugin = document.createElement("script");
//     plugin.setAttribute(
//         "src",
//         "https://s3.eu-central-1.amazonaws.com/verilive-statics.verigram.ai/verilive.js"
//     );
//     document.head.appendChild(plugin);
//     window.addEventListener("load", this.runVerilive, false);
//     setTimeout(() => this.onStartButtonClick(), 2000)
//   },
//   methods:{
//     runVerilive() {
//       console.log('asasff')
//       // document.getElementById('info_verilive_js_version').innerHTML = verilive.version
//
//       let configure;
//       configure = {
//         'recordVideo': false,
//         'videoBitrate': 2500000,
//         'rotated': false,
//         'lang': "custom",
//
//         'render': {
//           'oval': true,
//           'faceContourInsteadOfOval': true,
//           'ovalRingColor': {
//             'default': '#f5f542',
//             'actionSuccess': '#00ba00',
//             'actionFailure': '#d00000',
//             'sessionSuccess': '#00ba00',
//             'sessionFailure': '#d00000',
//           },
//           'ovalWidth': 1.0,
//
//           'overlay': true,
//           'overlayColor': {
//             'default' : '#2f4f4f',
//           },
//           'overlayTransparency': {
//             'default': 0.55,
//           },
//
//           'arrow': true,
//           'arrowColor': {
//             'default': '#f0f0f0',
//           },
//           'arrowProgressColor': {
//             'default': '#404040',
//           },
//
//           'hint': true,
//           'hintTextColor': {
//             "default": "#eee",
//           },
//           'hintFontType': "Arial",
//           'hintUseProgressiveFontSize': true,
//           'hintProgressiveFontSizeMultiplier': 1.0,
//           'hintFontSize': 25,
//           "hintCloudColor": {
//             "default": "#2d312f",
//           },
//
//           'videoUploadProgressBar': true,
//           'videoUploadProgressBarColor1': "#FFEA82",
//           'videoUploadProgressBarColor2': "#eee",
//         },
//
//         'hints': {
//           'noHint': '',
//           'noFace': 'Вас Не Видно',
//           'badLight': "Выравните Освещение",
//           'closer': 'Ближе',
//           'away': 'Отдалитесь',
//           'closerToCenter': 'Ближе к Центру Экрана',
//
//           'targetLeft': 'Медленно Поворачивайте Голову Влево',
//           'targetRight': 'Медленно Поворачивайте Голову Вправо',
//           'targetCenter': 'Посмотрите Прямо',
//
//           'sessionSuccess': 'Вы Прошли!',
//           'sessionFailure': 'Вы Не Прошли!',
//           'sessionError': 'Произошла какая-то ошибка. Попробуйте перезапустить',
//         },
//       };
//
//       verilive.successCallback = this.successCallback;
//       verilive.failCallback = this.failCallback;
//       verilive.errorCallback = this.errorCallback;
//       verilive.updateCallback = this.updateCallback;
//       verilive.videoRecordingNotSupportedCallback = this.videoRecordingNotSupportedCallback;
//       verilive.videoReadyCallback = this.videoReadyCallback;
//       verilive.videoSentCallback = this.videoSentCallback;
//       verilive.videoSendProgressCallback = this.videoSendProgressCallback;
//       verilive.videoSendErrorCallback = this.videoSendErrorCallback;
//
//       verilive.init(url, apiKey, configure)
//           .then(() => {
//             // onStartButtonClick()
//           })
//           .catch((error) => {
//             document.getElementById("results").innerHTML = error;
//           });
//     },
//
//     successCallback(){
//       document.getElementById("results").innerHTML = JSON.stringify(data, undefined, 2).replace(/</g, "&lt;");
//     },
//
//     failCallback(data) {
//       // E.g. Show to user, say to retry again
//       document.getElementById("results").innerHTML = JSON.stringify(data, undefined, 2).replace(/</g, "&lt;");
//     },
//
//     errorCallback(data) {
//       // E.g. Show to user, say to retry again
//       document.getElementById("results").innerHTML = JSON.stringify(data, undefined, 2).replace(/</g, "&lt;");
//     },
//
//     updateCallback(data) {
//       // console.log(data);
//     },
//
//     videoRecordingNotSupportedCallback() {
//       console.log("video recording is not supported on this browser/device");
//     },
//
//     videoReadyCallback(blob) {
//       window.video_blob = blob
//       console.log(`Video is ready`)
//     },
//
//     videoSendProgressCallback(event) {
//       // console.log("Downloaded " + event.loaded + "bytes of " + event.total);
//     },
//
//     videoSendErrorCallback() {
//       console.log('videoSendErrorCallback');
//     },
//     onStartButtonClick() {
//       const token = verilive.start();
//       console.log(verilive)
//       console.log(verilive.name + ': Token - ' + token);
//       document.getElementById('info_current_session').innerHTML = token
//     }
//   },
//
// }
</script>

<style scoped>
#error-box {
    height: 30px;
    line-height: 30px;
    background: #c00;
    text-align: center;
    color: #fff;
    font-weight: bold;
    position: absolute;
    bottom: 0;
    width: 100%;
}
</style>