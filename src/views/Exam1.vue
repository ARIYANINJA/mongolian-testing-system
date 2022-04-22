<template>
  <div class="main">
    <div class="exitBtn">
   <exitButton/>
   </div>
   <div class="container">
  <countdown :StartingMinutes = 'this.minutes'/>
  <progressBar :StartingMinutes = 'this.minutes'/>
  <h3 class="title">Зөв Бичигдсэн Монгол Үгнүүдийг Сонгоно уу ! </h3>
  <div class="words">
    <ul style="list-style:none;">
      <li v-for="item in items" :key="item.id">
        <button>{{item.message}}</button>
      </li>
    </ul>
  </div>
   </div>
   <div class="nextPageButton">
     <nextPageBtn nextPage="exam2"/>
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
  items: [{ message: 'eej' }, { message: 'aav' },{ message: 'emee' },{ message: 'uvuu' },{ message: 'ah' },{ message: 'egch' },{ message: 'bi' },]
}
},
methods:{
  Exit(){
    this.isHomePage = true
  },
  getExam(){
    this.isHomePage = false
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
  padding-top: 3rem;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
}
.words ul li button{
  width: 10vw;
  height: 5vh;
}
</style>