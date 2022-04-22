<template>
  <div style = "background: #ecf0f1; width: 100%; height: 100vh; padding-top:-5%;">
      <div class = "title">
          <h1>Та Шалгалтаа өгч дууссан байна Таны Шалгатын оноо бол</h1>
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
          <h1>hello i am footer </h1>
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
    padding-top: 5rem;
    font-weight: 800;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size:8rem;
}
.footer{
    margin-top: 8rem
}
</style>