<template>
  <div class="main">
    <div class="exitBtn">
   <exitButton/>
   </div>
   <div class="container">
  <countdown :StartingMinutes = 'this.minutes'/>
  <progressBar :StartingMinutes = 'this.minutes'/>
<h3 class="title">Та доорх бичигдсэн өгүүлбэрийг уншина уу ! </h3>
<h1 class="content">{{Content}}</h1>
<div class="btn">
  <div v-if="!isRecord" class="RecordButton" @click="StartRecording()">
    <img src="../assets/images/microphone-solid (1).svg" alt="microphone" class="Icons">
       <h3>Аудио бичлэг хийж эхлэх</h3>
     </div>
     <div class="MainEndRecord" v-else>
     <div class="RecordingSection" >
       <button class="Rec"></button>
    <p>Аудио бичлэг хийж байна</p>
  </div>
  <div class="RecordButton" @click="EndRecording()">
    <img src="../assets/images/microphone-slash-solid.svg" alt="Mute-Microphone" class="Icons">
       <h3>Аудио бичлэгийг дуусгах</h3>
     </div>
     </div>
     </div>
   </div>
   <div class="nextPageButton">
     <nextPageBtn nextPage="exam5"/>
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
  minutes:3,
  nextPage:"exam5",
  Content: 'Сайн байна уу Би хөгжим сонсох дуртай',
  isRecord: false
}
},
// mounted(){
//   let self = this
//   let time = self.minutes * 60;
//   const myInverval = setInterval(updateCountdown,1000);
//   function updateCountdown(){
//      if(time <= 0 ){
//        self.$router.push('/' + self.nextPage);
//        clearInterval(myInverval);
//       }
//      time--;
//   }
// },
methods:{
  StartRecording(){
    this.isRecord = true
  },
  EndRecording(){
    this.isRecord = false
  }
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
.content{
  margin: 4rem 5rem 8rem 5rem;
  text-align: center;
  border: 2px black solid;
  border-radius: 20px;
  background: #95a5a6;
  padding:1rem;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
}
.btn{
  display: flex;
  flex-direction: row;
  justify-content: flex-start;

}
.MainEndRecord{
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
}
.RecordButton{
  padding: 1rem;
  background: #00b894;
  border: 2px solid white;
  border-radius: 20px;
  text-align: center;
  width: 30rem;
  height: 4.5rem;
  color: black;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
}
.RecordingSection{
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  padding-top: 1rem;
  padding-right: 5rem;
  font-size: 1.5rem;
  color: #00b894;
}
.RecordingSection button{
  width: 35px;
  height: 35px;
  font-size: 0;
  background-color: #00b894;
  border: 0;
  border-radius: 35px;
  outline: none;
  margin-right: 1rem;
}
.Rec{
  width: 2rem;
  height: 2rem;
  margin-right: 0.5rem;
  animation-name: pulse;
  animation-duration: 1.5s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
}
@keyframes pulse {
  0% {
    box-shadow: 0px 0px 5px 0px #01d2a8;
  }
  65% {
    box-shadow: 0px 0px 5px 13px #00e3b5;
  }
  90% {
    box-shadow: 0px 0px 5px 13px #00fecb;
  }
}
.Icons{
  width: 5rem;
  height: 3rem;
  padding-bottom: 0.5rem;
}
</style>