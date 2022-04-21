<template>
<div class="btnBg">
  <b-button pill variant="outline-danger" size="lg" @click="onPostsClick()">ГАРАХ</b-button>
  </div>
</template>
<script>
export default {
  methods:{
    onPostsClick(){
        this.$router.push('/');
    }
  }

}
</script>

<style scoped>
.btnBg{
  background: white;
  border-radius: 25px;
  width: 5.9rem;
}
</style>