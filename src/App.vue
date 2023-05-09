<template>
  <link href='https://fonts.googleapis.com/css?family=Inter' rel='stylesheet'>
      <RouterView></RouterView>
</template>
<script>
import JoinCambi from './views/JoinCambi.vue';
import ThankYou from './views/ThankYou.vue';
import Home from './views/Home.vue'

export default { 
  components: {
    Home,
    JoinCambi,
    ThankYou,
}
}
</script>
<style lang="scss" scoped>


</style>