<template>
  <div class="main">
    <div class="exitBtn">
   <exitButton/>
   </div>
   <div class="container">
  <countdown :StartingMinutes = 'this.minutes'/>
  <progressBar :StartingMinutes = 'this.minutes'/>
  <h3 class="title">Та доорх өгөгдсөн асуултуудад "Аудио бичиж эхлэх" товчлуур даран амаараа хариулна уу</h3>
  <div class="mainContainer">
    <h4 class="questionTitle">{{QuestionTitle}}</h4>
    <ul class="detailQuestion">
      <li v-for="question in Questions" :key="question.id">
        {{question.content}}
      </li>
    </ul>
  </div>
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
     <nextPageBtn nextPage="exam8"/>
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
  minutes: 8,
  QuestionTitle: "Таны хамгийн орох дуртай ресторан юу вэ?",
  Questions:[{content:"Дуртай ресторан чинь хаана байдаг вэ?"},{content:"Taны дуртай хоол юу вэ?"},{content:"Та ихэвчлэн ямар үед ордог вэ?"},{content:"Яагаад тэр ресторанд орох дуртай болсон бэ?"}],
  isRecord: false,
  nextPage: "exam8"
}
},
mounted(){
  let time = this.minutes * 60;
  const myInverval = setInterval(updateCountdown,1000);
  let self = this
  function updateCountdown(){
     if(time <= 0 ){
       self.$router.push('/' + self.nextPage);
       clearInterval(myInverval);
      }
     time--;
  }
},
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
.mainContainer{
  width: 50%;
  padding-top: 1.5rem;
  height: 40%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: #3c3c3c 1px solid;
  margin-left: 25%;
  margin-bottom: 3rem;
}
.title{
  margin: 2rem 0 1rem 0;
  text-align: center;
  color: #3c3c3c;
}
.questionTitle{
  margin-bottom: 2rem;
  font-weight: 800;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
.detailQuestion{
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: #3c3c3c;
  font-size: 1.5rem;
  padding-bottom: 1.5rem;
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