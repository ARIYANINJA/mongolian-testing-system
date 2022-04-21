<template>
  <div>
  <h1>
      tanii onoo bol 80 / 120 baina 
  </h1>
  <button @click="Exit()">Нүүр хуудас руу буцах</button>
  </div>
</template>

<script>
export default {
    methods:{
        Exit(){
            this.$router.push('/');
        }
    }
}
</script>

<style>

</style>