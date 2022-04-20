<template>
  <b-button pill variant="outline-danger" size="lg" @click="onPostsClick()">ГАРАХ</b-button>
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

<style>

</style>