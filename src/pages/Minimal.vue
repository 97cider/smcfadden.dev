<template>
  <div id="app">
    <button v-on:click="isSimplified = !isSimplified">View a Simpler Experience</button>
    <div v-if="isSimplified === true">
      <img alt="Vue logo" src="src/assets/logo.png">
      <HelloWorld msg="Welcome to Your Vue.js App"/>
    </div>
  </div>
</template>

<script>
import HelloWorld from '../components/HelloWorld.vue'
export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data () {
   return {
     isSimplified : true
   }
  }
}
</script>