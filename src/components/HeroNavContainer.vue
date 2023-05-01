<template>
<div class="background">
    <Header/>
    <HeroSection/>
</div>
</template>
<script>
import Header from './Header.vue';
import HeroSection from './HeroSection.vue';

export default {
    name: "HeroNavContainer",
    components: { Header, HeroSection }
}
</script>
<style lang="scss" scoped>
.background {
    background: linear-gradient(-45deg, #312D9F, #4858D7);
}

</style>