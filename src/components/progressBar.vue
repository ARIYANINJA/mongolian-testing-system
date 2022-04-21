<template>
  <div>
    <b-progress :value="value" :max="max" animated variant="success"></b-progress>
  </div>
</template>
<script>
  export default {
     props:{
    StartingMinutes: Number
  },
    data() {
      return {
       value: 0,
       max: 0
      }
    },
    mounted(){
      this.max = this.StartingMinutes * 60;
      const myInverval = setInterval(updateCountdown, 1000);
      let self = this;
  function updateCountdown() {
        self.value++;
        if(self.value === self.max){
          clearInterval(myInverval);
        }
      }
    },
    methods: {

    }
  }
</script>

<style scoped>

</style>