<template>
      <HeroSection/>
      <MeetCambi/>
      <InfoSection/>
      <PhoneSection/>
      <Footer/>
  </template>
  
  <script>
  import HeroSection from '../components/HeroSection.vue'
  import MeetCambi from '@/components/MeetCambi.vue';
  import CardSection from '@/components/CardSection.vue';
  import PhoneSection from '@/components/PhoneSection.vue';
  import Footer from '@/components/Footer.vue';
  import InfoSection from '@/components/InfoSection.vue';
  import NavBar from '@/components/NavBar.vue';
import CambiLogo from '@/components/icons/CambiLogo.vue';
  
  export default {
    name: 'Home',
    components: {
    HeroSection,
    MeetCambi,
    CardSection,
    PhoneSection,
    Footer,
    InfoSection,
    NavBar,
    CambiLogo
},
  }
  </script>
  
  <style lang='scss' scoped>
  @import '@/assets/styles/styles.scss';
  </style>
  