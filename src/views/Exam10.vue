<template>
  <div class="main">
    <div class="exitBtn">
   <exitButton/>
   </div>
   <div class="container">
     <audio id="audio" src='../assets/audio/word10.wav'></audio>
  <countdown :StartingMinutes = 'this.minutes'/>
  <progressBar :StartingMinutes = 'this.minutes'/>
  <h3 class="title">Зөв Бичигдсэн Монгол Үгнүүдийг Сонгоно уу ! </h3>
  <div class="words">
    <ul style="list-style:none;">
      <li v-for="word in words" :key="word.id">
      <label class="option_item" id="option_item">
      <input type="checkbox" class="checkbox">
      <div class="option_inner all"> 
        <img @click="playAudio()" class = "iconBtn" src="../assets/images/Sound.svg" alt="sound">
        <div class="name">{{word.content}}</div>
      </div>
    </label>
      </li>
      <b-tooltip target= "option_item" title="Та товчлуур дээр дарснаар Аудио тоглуулах боломжтой"></b-tooltip>
    </ul>
  </div>
   </div>
   <div class="nextPageButton">
     <nextPageBtn nextPage="exam11"/>
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
    words: [
    { content: 'ҮГ 1', audio:"../assets/audio/word1.wav"}, { content: 'ҮГ 2', audio:"../assets/audio/word2.wav"},
    { content: 'ҮГ 3', audio:"../assets/audio/word3.wav"},{ content: 'ҮГ 4', audio:"../assets/audio/word4.wav"},
    { content: 'ҮГ 5', audio:"../assets/audio/word5.wav"},{ content: 'ҮГ 6', audio:"../assets/audio/word6.wav"},
    { content: 'ҮГ 7', audio:"../assets/audio/word7.wav"}, { content: 'ҮГ 8', audio:"../assets/audio/word8.wav"},
    { content: 'ҮГ 9', audio:"../assets/audio/word9.wav"}
  ],
  nextPage: "exam11"
}
},
// mounted(){
//   let time = this.minutes * 60;
//   const myInverval = setInterval(updateCountdown,1000);
//   let self = this
//   function updateCountdown(){
//      if(time <= 0 ){
//        self.$router.push('/' + self.nextPage);
//        clearInterval(myInverval);
//       }
//      time--;
//   }
// },
methods:{
  playAudio(){
    document.getElementById('audio').play();
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
.words ul{
  width: 100%;
  margin: 1.5rem auto 0;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
.words ul li label{
  display: block;
  position: relative;
  width: 13rem;
  height: 4rem;
  margin: 1.5rem 5rem 1.5rem 7rem;
}
.words ul li label .checkbox {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  opacity: 0;
}

.words ul li label .option_inner {
  width: 100%;
  height: 100%;
  background: #ecf0f1;
  border-radius: 20px;
  font-size: 1.5rem;
  padding-top: 0.8rem;
  cursor: pointer;
  color: black;
  display: block;
  border: 3px solid #00b894;
  border-radius: 20px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
}
.words ul li label .checkbox:checked ~ .option_inner.all {
  border-color: black;
  background: #00b894;
  box-shadow: #00cba2 0px 30px 31px, #00b894 0px -5px 10px, #00b894 0px 4px 6px, #00bd97 0px 5px 5px, #009b7c 0px -3px 5px;
  color: white;
}
.iconBtn{
  width: 2.5rem;
  height: 2.5rem;
}
.audio{
  display: none;
}
</style>