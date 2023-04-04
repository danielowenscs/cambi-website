<template>
 <HeroSection/>
 <MeetCambi/>
<CardSection/>
<PhoneSection/>
</template>

<script>
import HeroSection from '../components/HeroSection.vue'
import MeetCambi from '@/components/MeetCambi.vue';
import CardSection from '@/components/CardSection.vue';
import PhoneSection from '@/components/PhoneSection.vue';
export default {
    name: 'Home',
    components: {
    HeroSection,
    MeetCambi,
    CardSection,
    PhoneSection
}
}
</script>

<style lang='scss'>
@import '@/assets/styles/styles.scss';

</style>
