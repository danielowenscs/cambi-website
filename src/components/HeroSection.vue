<template>
<html>
    <div class="container">
        <div class="auto-layout">
           <div class=" H1 item">
            Shop Mindfully
           </div>
           <div class="B2 item">
            Discover products that align with your values and preferences. Empower yourself to make shopping effortless and enjoyable.
           </div>
           <div>
            <button class="button">Join Cambi</button>
           </div>
        </div>
    </div>
</html>
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
.container {
    height: 584px;
    left: 0px;
    right: 0px;
    top: 80px;
    background-color: $P5;
}
.auto-layout {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 40px 0px;
    gap: 40px;
    height: 344px;
    top: 120px; 
    background-color: $Se1;
}

.item{
    display: flex;
    align-items: center;
    text-align: center;
    color: $N6;
}
.button {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 16px 32px;
    gap: 10px;
    background: $Se2;
    border-radius: 40px;
}
</style>