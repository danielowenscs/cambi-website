<template>
      <HeroSection/>
      <MeetCambi/>
      <InfoSection/>
      <PhoneSection/>
      <FooterComponent/>

  </template>
  
  <script>
  import HeroSection from '../components/HeroSection.vue'
  import MeetCambi from '@/components/MeetCambi.vue';
  import CardSection from '@/components/CardSection.vue';
  import PhoneSection from '@/components/PhoneSection.vue';
  import InfoSection from '@/components/InfoSection.vue';
  import NavBar from '@/components/NavBar.vue';
import CambiLogo from '@/components/icons/CambiLogo.vue';
import FooterComponent from '@/components/FooterComponent.vue';
  
  export default {
    name: 'Home',
    components: {
    HeroSection,
    MeetCambi,
    CardSection,
    PhoneSection,
    InfoSection,
    NavBar,
    CambiLogo,
    FooterComponent
},
  }
  </script>
  
  <style lang='scss' scoped>
  @import '@/assets/styles/styles.scss';
  </style>
  