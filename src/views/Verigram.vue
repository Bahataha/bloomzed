<template>
    <div>
        <Footer />
        <div id="id_veridoc"></div>
        <button v-on:click="startScan()" id="startButton" autocomplete="off">Start scanning</button>
        <p id="results">No scanning results yet</p>
    </div>
</template>

<script>



import Footer from "@/components/Footer";


export default {
  name: "Verigram",
  components:{
    Footer,
    veridoc
  },
  data(){
      return {
          session: ''
      }
  },
  mounted(){  
    this.onInitializeButtonClick()
  },
  methods:{
    onInitializeButtonClick(){
        veridoc.init("https://services.verigram.ai:8443/veridoc/ru/veridoc/",
        'LFVHos4CAHkCemfS3PQe9DWdenO2zOh2', this.successCallback, this.errorCallback, this.gotPhotoCallback)
        .then(() => {
            veridoc.setDocType(1);
            veridoc.setRecognitionMode(1);
            veridoc.setMirrorPreviewForWebCameras(true);
            veridoc.setIsGlareCheckNeeded(true);
        })
        .catch((e) => {
            // E.g. Show error to user.
        });
        setTimeout(this.onStartButtonClick, 1000);
    },

    onStartButtonClick() {
        
    },
    showResults(data) {
        var allResults = "";
        for (var prop in data) {
            if (data.hasOwnProperty(prop)) {
                var propValue = data[prop].replace(/</g, "&lt;");
                
                if (prop.includes('picture') || prop.includes('personal_signature') ||
                        prop.includes('image')) {
                    allResults += prop + ': ' + propValue.substring(0, 20) + '... </br>';
                } else {
                    allResults += prop + ': ' + propValue + ' </br>';
                }
            }
        }
        
        document.getElementById("results").innerHTML = allResults;
    },

    checkRecognitionWarnings() {
        var recognitionWarnings = veridoc.getRecognitionWarnings();
        if (recognitionWarnings.includes(RecognitionWarning.DOCUMENT_EXPIRED)) {
            console.log('This document expired!');
        }
        if (recognitionWarnings.includes(RecognitionWarning.INCONSISTENT_TRANSLITERATION)) {
            console.log('Transliteration check fail warning!');
        }
    },

    successCallback(data) {
        this.showResults(data);
        this.checkRecognitionWarnings();
    },

    errorCallback(data) {
        this.showResults(data);
    },

    gotPhotoCallback() {},
    startScan(){
        var session_token = veridoc.start();
        console.log('sesion_token is: ' + session_token);
    }
  },
    
}
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