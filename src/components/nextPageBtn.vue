<template>
<div class="btnBg">
  <b-button @click="changeExam()" pill variant="outline-success" size="lg">Дараагийн Хуудас</b-button>
  </div>
</template>

<script>
export default {
  props:{
    nextPage: String
  },
  methods:{
    changeExam(){
      this.$router.push('/' + this.nextPage);
    }
  }
}
</script>

<style scoped>
.btnBg{
  background: white;
  border-radius: 25px;
  width: 12.75rem;
}
</style>