<template>
  <div>
    <b-progress :value="value" :max="max" animated variant="success"></b-progress>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        value: 80,
        max: 100
      }
    },
    methods: {
      randomValue() {
        this.value = Math.random() * this.max
      }
    }
  }
</script>

<style scoped>

</style>