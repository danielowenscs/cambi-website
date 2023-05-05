<template>
    <HeroNavContainer/>
    <MeetCambi/>
    <CardSection/>
    <PhoneSection/>
    <Footer/>
    <JoinCambi/>
</template>

<script>
import Header from '@/components/Header.vue';
import HeroSection from '../components/HeroSection.vue'
import MeetCambi from '@/components/MeetCambi.vue';
import CardSection from '@/components/CardSection.vue';
import PhoneSection from '@/components/PhoneSection.vue';
import Footer from '@/components/Footer.vue';
import HeroNavContainer from '@/components/HeroNavContainer.vue';
import JoinCambi from './JoinCambi.vue';
export default {
    name: 'Home',
    components: {
    Header,
    HeroSection,
    MeetCambi,
    CardSection,
    PhoneSection,
    Footer,
    HeroNavContainer,
    JoinCambi
}
}
</script>

<style lang='scss' scoped>
@import '@/assets/styles/styles.scss';


</style>
