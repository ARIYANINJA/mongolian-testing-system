<template>
<div>
<h1>{{minutes}} : {{seconds}}</h1>
</div>
</template>
<script>
export default {
  props:{
    StartingMinutes: Number
  },
  created(){
console.log(this.StartingMinutes);
  },
  data(){
    return{
      minutes: this.StartingMinutes,
      seconds: "00"
    }
  },
mounted(){
  let time = this.StartingMinutes * 60;
  const myInverval = setInterval(updateCountdown,1000);
  let self = this
  function updateCountdown(){
     self.minutes = Math.floor(time / 60);
     self.seconds = time % 60; 
     self.seconds = self.seconds < 10 ? '0' + self.seconds : self.seconds;
     if(time <= 0 ){
       clearInterval(myInverval);
      }
     time--;
  }
}
}
</script>

<style scoped>
  h1{
    padding-left: 5vw;
    padding-top: 5vh;
    font-size: 3rem;
  }
</style>