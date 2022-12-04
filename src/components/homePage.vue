<template>
  <div>
    <p>selam ben homepage</p>
    <p>{{deneme}}</p>
  </div>
</template>

<script>
export default {
  data() {
    return{
    }
  },

  computed: {
    deneme() {
      return this.$store.state.counter
    }
  }

}
</script>

<style>

</style>