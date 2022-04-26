<template>
  <div class="main">
    <div class="exitBtn">
   <exitButton/>
   </div>
   <div class="container">
  <countdown :StartingMinutes = 'this.minutes'/>
  <progressBar :StartingMinutes = 'this.minutes'/>
  <div class="mainContainer">
    <div class="essay">
      <h2 class = "essayTitle">Цогцолбор</h2>
      <p class="content">
        {{this.Content}}
      </p>
    </div>
    <div class="radioBtn">
      <h3 class="RadioTitle">Энэхүү Цогцолборт таарах гарчиг өгнө үү </h3>
      <div class="tests">
      <ul style="list-style: none;">
        <li v-for="test in tests" :key="test.id">
          <label class="option_item">
      <input name=test.content value=test.content id=test.content type="radio" class="checkbox">
      <div class="option_inner all">
        <div class="name">{{test.content}}</div>
      </div>
    </label>
        </li>
      </ul>
      </div>
    </div>
  </div>
   </div>
   <div class="nextPageButton">
     <nextPageBtn nextPage="exam6"/>
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
  Content: "Манай оронд асга хадтай уул олон байдаг.Ийм ууланд жижиг сэнж нүхнээс эхлээд том хонгил ч байдаг. Ийм агуйг бүр эртний хүмүүс орон сууц болгож хэрэглэж байжээ. Агуй бол байгалийн сонин зүйлийн нэг юм. Тэндээс түүх дурсгалын ховор сонин зүйл ч олдож болно",
  tests:[{content:"Агуй"},{content:"Нуур"},{content:"Хүмүүс"},{content:"Байгаль"},]
}
},
methods:{
  Exit(){
    this.isHomePage = true
  },
  getExam(){
    this.isHomePage = false
  },
  playAudio(){
    console.log("odoo end ug ni audio bichleg yavagdana");
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
.mainContainer{
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  width: 100%;
  height: 100%;
  padding-top: 2rem;
  height: 75%;
}
.mainContainer .essay{
  background: #ecf0f1;
  width: 50%;
  height: 100%;
  border: 2px solid black;
  border-radius: 10px ;
}
.radioBtn{
  background: white;
  width: 50%;
  height: 100%;
}
.essayTitle{
  font-family: 'Courier New', Courier, monospace;
  padding: 1rem;
  color: #3c3c3c;
  border-bottom: #95a5a6 solid 2px;
}
.content{
  padding:2rem;
  font-size: 1.5rem;
  color: #3c3c3c;
}
.RadioTitle{
  color: black;
  padding: 1rem;
  font-size: 1.5rem;
  text-align: center;
  font-family: 'Courier New', Courier, monospace;
}
.radioBtn ul{
  padding-left: 5rem;
  padding-right: 5rem ;
}
.tests ul li label{
  display: block;
  position: relative;
  width: 30rem;
  height: 3.5rem;
  margin: 1.5rem;
}
.tests ul li label .checkbox {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  opacity: 0;
}
.tests ul li label .option_inner {
  width: 100%;
  height: 100%;
  background: #ecf0f1;
  border-radius: 20px;
  text-align: center;
  font-size: 1.3rem;
  padding-top: 0.8rem;
  cursor: pointer;
  color: black;
  display: block;
  border: 3px solid #00b894;
  border-radius: 20px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  position: relative;
}
.tests ul li label .checkbox:checked ~ .option_inner.all {
  border-color: black;
  background: #00b894;
  box-shadow: #00cba2 0px 30px 31px, #00b894 0px -5px 10px, #00b894 0px 4px 6px, #00bd97 0px 5px 5px, #009b7c 0px -3px 5px;
  color: white;
}
</style>