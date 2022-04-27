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
    lol
  </div>
   </div>
   <div class="nextPageButton">
     <nextPageBtn nextPage="lookPoint"/>
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
  QuestionTitle: "Хүмүүс ажил хийдэг Учир нь тэдэнд амьдрахын тулд мөнгө хэрэг болно Гэхдээ үүнээс бусад тохиолдолд хүмүүс яагаад ажил хийх ёстой вэ?",
  Questions:[{question:"dsdsss"},{question:"dsdsss"},{question:"dsdsss"},{question:"dsdsss"}]
}
},
methods:{
  countWord(){
 let words = document.getElementById("word").value;
 let count = 0;
 let split = words.split(' ');
 for (var i = 0; i < split.length; i++) {
    if (split[i] != "") {
        count += 1;
      }
  }
document.getElementById("show")
.innerHTML = count;
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
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  width: 100%;
  height: 100%;
  padding-top: 2rem;
  height: 62%;
}
.title{
  margin: 2rem 0 1rem 0;
  text-align: center;
  color: #3c3c3c;
}
</style>