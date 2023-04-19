<template>
   <div class="background">
        <div class="container">
            <div class="grid">
                <div class="content">
                <h1 class="H1">Shop Mindfully</h1>
                <p class="B1">Discover products that align with your values and preferences. Empower yourself to make shopping effortless and enjoyable.</p>
                <a href="/components/JoinForm.vue"><button class="B1 button">Join Cambi</button></a>
                </div>
            </div>
        </div>
   </div>
</template>
<script>
import strings from '@/assets/strings'

export default {
    name: 'HeroSection',
    
    data () {
        return {

        }
    }
}
</script>
<style lang = 'scss' scoped>
@import '@/assets/styles/styles.scss';

html {
    font-size: 62.5% !important;
}
body {
    max-width: 1260px;
    margin:auto;
}
.background {
    background: linear-gradient(-45deg, #312D9F, #4858D7);
}
.container {
    max-width: 1260px;
    margin: auto;
}
.grid {
    padding: 120px 40px;
    margin: auto;
    height: 400px;
    gap: 20px;
    display: grid;
    grid-template-columns: repeat(12, 1fr);
}
.content {
    grid-column: 2/11;
    text-align: center;
}

div.content > * {
    margin: 40px 0 0 0;
    justify-content: flex-start;
    color: $N6;
}
.button {
    border-radius: 40px;
    width: 209px;
    //height: 56px;
    padding: 16px;
    background-color: $Se2;
    border-color: none;
}



</style>