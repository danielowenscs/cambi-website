<template>
  <link href='https://fonts.googleapis.com/css?family=Inter' rel='stylesheet'>
  <RouterView></RouterView>
</template>
<script>
import JoinForm from './components/JoinForm.vue';
import Home from './views/Home.vue'

export default { 
  components: {
    Home,
    JoinForm
}
}
</script>
<style>

</style>