<template>
  <div id="app">
    <Renderer />
    <img alt="Vue logo" src="src/assets/logo.png">
    <div>[ sean mcfadden ]</div>
    <div>This website is an interactive experience. If you wish to view a more simple experience, please click the "View Minimal" button below.</div>
    <div>Please select your quality</div>
    <div> 
      <button>low</button>
      <button>medium</button>
      <button>high</button>
    </div>
    <div>------------ or -------------</div>
    <div>
      <button>View Minimal</button>
    </div>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from '../components/HelloWorld.vue';
import Renderer from '../components/Renderer.vue';
import '../scss/style.scss';
export default {
  name: 'App',
  components: {
    HelloWorld,
    Renderer
  }
}
</script>