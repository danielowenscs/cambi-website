<template>
<div class="background">
    <div class="container">
        <div class="grid">
            <div class="content">
                 <div class="text">
                    <div class="H2">{{ phone1 }}</div>
                    <div class="B1">{{ phone2 }}</div>
                    <router-link to="/joinus">
                        <button class="button">Join Cambi</button>
                    </router-link>
                </div>
                <div class="telly">
                <img src="@/assets/imgs/phone.png" >
                </div> 
            </div>
        </div>
    </div>
</div>
</template>
<script>
import { strings } from '@/assets/strings.js';

export default {
   name: 'PhoneSection',
   data () {
       return {
            phone1: strings.phone1,
            phone2: strings.phone2,
       }
   }

}

</script>
<style lang='scss' scoped>
@import '@/assets/styles/styles.scss';

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
    grid-column: 1fr/ 12;
}

.text {
    grid-column: 2fr/ 12;
    grid-column-end: span 5;
}

.telly {
    grid-column: 8fr/ 12;
    grid-column-end: span 3;
}

img {
    display: block;
    margin: 50px auto 0;
    max-width: 100%;
    height: auto;
}

.background {
    background: $Se6;
    height: 688px;
}

.button {
    font-family: 'Inter';
    font-weight: 400;
    line-height: 24px;
    font-size: 18px;
    border-radius: 40px;
    width: 209px;
    padding: 16px;
    background-color: $Se2;
    border: none;
}

.H2 { 
    padding-top: 32px;
    padding-bottom: 32px;
    display: inline;
}

.B1 { 
    padding-top: 32px;
    padding-bottom: 32px;
}

</style>
