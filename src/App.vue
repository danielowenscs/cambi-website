<template>
  <link href='https://fonts.googleapis.com/css?family=Inter' rel='stylesheet'>
  <Header/>
  <Home/>
</template>
<script>
import Header from './components/Header.vue'
import Home from './views/Home.vue'

export default { 
  components: {
    Header,
    Home
  }
}
</script>
<style>

</style>