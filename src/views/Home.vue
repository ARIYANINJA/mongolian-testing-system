<template>
  <div>
    <h1>home page</h1>
        <button @click.prevent = "onPostsClick()">click to post page</button>
  </div>
</template>

<script>
export default {
  methods:{
    onPostsClick(){
        this.$router.push('/about');
    }
  }
}
</script>

<style>

</style>