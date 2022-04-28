<template>
  <div class="main">
    <div class="exitBtn">
   <exitButton/>
   </div>
   <div class="container">
  <countdown :StartingMinutes = 'this.minutes'/>
  <progressBar :StartingMinutes = 'this.minutes'/>
  <h1 class="title">Та өгөгдсөн асуултанд 50 үгэнд багтаан хариулна уу</h1>
  <div class="mainContainer">
    <div class="question">
      <h3 class="questionTitle">{{this.Question}}</h3>
    </div>
     <div class="answer">
       <textarea id="word" class="textarea" v-model="text" placeholder="Ta асуултанд хариулна уу"
        rows="10" cols="60">
    </textarea>
      <p class="wordCounter"> Үгийн тоо:
        <span id="show">0</span>
    </p>
    </div>
  </div>
   </div>
   <div class="nextPageButton">
     <nextPageBtn nextPage="exam14"/>
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
  minutes: 5,
  Question: "Хүмүүс ажил хийдэг Учир нь тэдэнд амьдрахын тулд мөнгө хэрэг болно Гэхдээ үүнээс бусад тохиолдолд хүмүүс яагаад ажил хийх ёстой вэ?",
  text: '',
  nextPage: "exam14"
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
watch:{
text(){
  this.countWord()
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
.mainContainer .question{
  width: 50%;
  height: 100%;
}
.questionTitle{
  color: #3c3c3c;
  padding: 1rem;
  font-size: 2rem;
  text-align: justify;
  font-family: 'Courier New', Courier, monospace;
}
.mainContainer .answer{
  width: 50%;
  height: 100%;
  margin: 1.5rem 2rem 1rem 3rem;
}
.textarea{
height: 80%;
width: 100%;
font-size: 1.5rem;
border-radius: 10px;
}
.wordCounter{
  margin-left: 1rem;
  margin-top: 0.5rem;
  font-size: 1.5rem;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: #3c3c3c;
}
</style>