<template>
    <div class="container">
        <div class="grid">
            <div class="content">
                <Header/>
                <HeroSection/>
                <MeetCambi/>
                <CardSection/>
                <PhoneSection/>
                <Footer/>
            </div>
        </div>
    </div>
    
</template>

<script>
import Header from '@/components/Header.vue';
import HeroSection from '../components/HeroSection.vue'
import MeetCambi from '@/components/MeetCambi.vue';
import CardSection from '@/components/CardSection.vue';
import PhoneSection from '@/components/PhoneSection.vue';
import Footer from '@/components/Footer.vue';
export default {
    name: 'Home',
    components: {
    Header,
    HeroSection,
    MeetCambi,
    CardSection,
    PhoneSection,
    Footer
    }
}
</script>

<style lang='scss'>
@import '@/assets/styles/styles.scss';

// .container {
//     max-width: 1260px;
//     margin: auto;
// }
// .grid {
//     padding: 120px 40px;
//     margin: auto;
//     height: 400px;
//     gap: 20px;
//     display: grid;
//     grid-template-columns: repeat(12, 1fr);
// }
// .content {
//     grid-column: 2/11;
//     text-align: center;
//     max-width: 1260px;
// }

</style>
