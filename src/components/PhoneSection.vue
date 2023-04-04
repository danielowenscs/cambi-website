<template>
<div class="container">
    <div class="H2">{{ phone1 }}</div>
    <div class="B1">{{ phone2 }}</div>
    <button>Join Cambi</button>
</div>
<div>
    <img src="@/assets/imgs/phone.png">
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



</style>
