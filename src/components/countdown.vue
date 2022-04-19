<template>
<div>
<h1>{{minutes}} : {{seconds}}</h1>
</div>
</template>
<script>
export default {
  data(){
    return{
      minutes: 0,
      seconds: 0
    }
  },
mounted(){
  const startingMinutes = 1;
  let time = startingMinutes * 60;
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