<template>
  <div id="app">
      <body-container></body-container>
  </div>
</template>

<script>
import BodyContainer from './components/body/bodyContainer'

export default {
  name: 'app',
  components: {
      BodyContainer
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
