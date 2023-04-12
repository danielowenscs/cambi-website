<template>
<div class="background">
<div class="container">
    <div class="H2">{{ phone1 }}</div>
    <div class="B1">{{ phone2 }}</div>
    <button class="B1 button">Join Cambi</button>
</div>
<div class="telly">
    <img src="@/assets/imgs/phone.png">
</div>
</div>
</template>
<script>
import { strings } from '@/assets/strings';

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

img {
    position: right;
    height: 448px;
    width: 210px;
}

.background {
    background: $Se6;
}

.button {
    border-radius: 40px;
    width: 159px;
    //height: 56px;
    padding: 16px;
    background-color: $Se2;
    border-color: none;
}


</style>
