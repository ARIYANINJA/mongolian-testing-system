<template>
  <div style = "background: #ecf0f1; width: 100%; height: 100vh; padding-top:-5%;">
      <div class = "title">
          <h1>Та Шалгалтаа өгч дууссан байна Таны Шалгатын оноо бол !</h1>
      </div>
      <div class="main">
          <div class="image">
          <img src="../assets/images/scoreIcon.png" alt="ScoreIcon" width="350px" height="350px">
          </div>
          <div class="texts">
          <h1>ТООЦООЛСОН ОНОО:</h1>
          <h1 class="point">{{this.MyPoint}} - {{this.TotalPoint}}</h1>
          </div>
      </div>
      <div class="footer">
          <b-button @click="beginExam()" size="lg" variant="outline-danger">ДАХИН ШАЛГАЛТ ӨГӨХ</b-button>
          <b-button @click="BackToHome()" size="lg" variant="info">НҮҮР ХУУДАС РУУ ШИЛЖИХ</b-button>
      </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            MyPoint: 50,
            TotalPoint: 100
        }
    },
  methods:{
        BackToHome(){
        this.$router.push('/');
    },
    beginExam(){
        this.$router.push('/exam1');
    }
  }
}
</script>

<style scoped>
.title{
    padding-top: 3rem ;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    text-align: center;
    font-weight: 800;
    color: black;
    border-radius: 20px;
    border-bottom: solid 2px black;
    box-shadow: rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset;
}
.main{
    padding: 8rem 15rem 0 15rem;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
}
.main .texts{
    display: flex;
    flex-direction: column;
    align-content: space-around;
}
.point{
    text-align: center;
    padding: 5rem 1rem 1rem 1rem;
    font-weight: 800;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: 8rem;
    border-radius: 20px;
    border-bottom: solid 2px black;
    box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset;
    
}
.footer{
    border-top: solid 2px gray;
    margin-top: 5rem;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
}
.footer button{
    margin-top: 3rem;
}
</style>