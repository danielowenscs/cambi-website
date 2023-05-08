<template>
    <HeroNavContainer/>
    <MeetCambi/>
    <InfoSection/>
    <PhoneSection/>
    <Footer/>
</template>

<script>
import Header from '@/components/Header.vue';
import HeroSection from '../components/HeroSection.vue'
import MeetCambi from '@/components/MeetCambi.vue';
import CardSection from '@/components/CardSection.vue';
import PhoneSection from '@/components/PhoneSection.vue';
import Footer from '@/components/Footer.vue';
import HeroNavContainer from '@/components/HeroNavContainer.vue';
import InfoSection from '@/components/InfoSection.vue';

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
    InfoSection
}
}
</script>

<style lang='scss' scoped>
@import '@/assets/styles/styles.scss';


</style>
