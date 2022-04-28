<template>
  <div class="main">
    <div class="exitBtn">
   <exitButton/>
   </div>
   <audio
      class="audio"
      ref="audio"
      src="../assets/audio/audio2.wav"
    ></audio>
   <div class="container">
  <countdown :StartingMinutes = 'this.minutes'/>
  <progressBar :StartingMinutes = 'this.minutes'/>
  <h3 class="title">Та Товчлуур Дээр Даран Сонссон Өгүүлбэрээ Бичнэ үү ! </h3>
  <div class="body">
  <div v-if="button" class="button" id="button" @click="playAudio()">
    <img class = "SoundPic" src="../assets/images/Sound.svg" alt="Sound picture">
  </div>
  <b-form-textarea
        v-model="answer"
        class="textarea"
        size="lg"
        placeholder="Та Энд Бичвэрээ Бичнэ үү "
      ></b-form-textarea>
  </div>
       <b-tooltip target="button" title="Та Зөвхөн 3 Удаа Аудио Бичлэг Сонсох Боломжтой"></b-tooltip>
   </div>
   <div class="nextPageButton">
     <nextPageBtn nextPage='exam3'/>
   </div>
  </div>
</template>
<script>
import exitButton from '../components/exitButton.vue'
import nextPageBtn from '../components/nextPageBtn.vue'
import countdown from '../components/countdown.vue'
import progressBar from '../components/progressBar.vue'
export default {
components:{
  exitButton,
  nextPageBtn,
  countdown,
  progressBar
},
data(){
return{
  minutes: 3,
  answer:"",
  nextPage: "exam3",
  buttonClicked: 0,
  button: true,
}
},
mounted(){
    let self = this
  let time = self.minutes * 60;
  const myInverval = setInterval(updateCountdown,1000);
  function updateCountdown(){
     if(time <= 0 ){
       self.$router.push('/' + self.nextPage);
       clearInterval(myInverval);
      }
     time--;
  }
},
methods:{
  playAudio(){
    this.$refs.audio.play();
    this.buttonClicked = this.buttonClicked + 1
    this.buttonClicked >= 3 ? this.button = false : this.button = true
  },
},
}
</script>
<style scoped>
.main{
  background-color: #95a5a6;
  width: 100vw;
  height: 100vh;
}
.container{
  margin-left: 10vw;
  margin-top: 3vh;
  width: 80vw;
  height: 75vh;
  background: white;
  border-radius: 20px;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgb(209, 213, 219) 0px 0px 0px 1px inset;
}
.exitBtn{
  padding-top: 3vh;
  padding-left: 88vw;
}
.nextPageButton{
  padding-top: 3vh;
  padding-left: 85vw;
}
.title{
  margin-top: 2rem;
  text-align: center;
}
.body{
  display: flex;
  flex-direction: row;
  width:100%;
  height: 60%;
}
.button{
  border-radius: 50%;
  width: 40rem;
  height: 20rem;
  background: #00b894;
  margin-left: 3rem;
  margin-top: 2rem;
}
.SoundPic{
  width: 15rem;
  height: 15rem;
  padding-top: 5rem;
  padding-left: 5rem;
}
.textarea{
  margin: 3rem 3rem 3rem 10rem;
  font-size: 2rem;
}
.audio{
  display: none;
}
</style>