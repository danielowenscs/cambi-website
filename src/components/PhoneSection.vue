<template>
<div class="background">
    <div class="container">
        <div class="grid">
            <div class="content">
                 <div class="column1of2">
                    <div class="H2">{{ phone1 }}</div>
                    <div class="B1">{{ phone2 }}</div>
                    <router-link to="/joinus">
                        <button class="button">Join Cambi</button>
                    </router-link>
                 </div>
                <div class="column2of2">
                <img  src="@/assets/imgs/phone.png">
                </div> 
            </div>
        </div>
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
    float: inline-end; 
    height: 448px;
    width: 210px;
    flex-direction: column;
}

.telly{
    float: right;
}

.box {
    width: 980px;
    height: 448px;
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
}

// .column1of2 {
//     height: 448px;
//     width: 66%;
//     float: left;
// }
// .column2of2 {
//     height: 448px;
//     width: 33%;
//     float: left;
// }
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
    width: 159px;
    // height: 56px;
    padding: 16px;
    background-color: $Se2;
    border-color: none;
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
