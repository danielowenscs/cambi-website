<template>
<div class="background">
    <div class="container">
        <div class="grid">
                 <div class="text">
                    <div class="H2"><span class="color">{{ ready }}</span>{{ phone1 }}</div>
                    <div class="B1">{{ phone2 }}</div>    
                </div>
                <div class="telly">
                <img src="@/assets/imgs/phone.png" >
                </div> 
                <div class="b-cont">
                    <button @click="goToJoinForm()" class="button">Join Cambi</button>
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
            ready: strings.ready,
            phone1: strings.phone1,
            phone2: strings.phone2,
       }
   },
   methods: {
    goToJoinForm() {
      this.$router.push('/joinus')
    }
  }
}

</script>
<style lang='scss' scoped>
@import '@/assets/styles/styles.scss';


.background {
    background: $Se6;
    height: auto;
}
.color {
        color: $Se2;
}

.button {
    font-family: 'Inter';
    font-weight: 400;
    line-height: 24px;
    font-size: 18px;
    border-radius: 40px;
    width: 209px;
    height: 56px;
    padding: 16px;
    background-color: $Se2;
    color: $Se6;
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

@media (min-width: 1261px){

    .container {
        max-width: 1260px;
        margin: auto;
        align-items: center;
    }   
    .grid {
        padding: 120px 40px;
        margin: auto;
        height: 400px;
        gap: 1rem;
        display: grid;
        grid-template-columns: repeat(12, 1fr);
        background: $Se6;
    }

    .text, .telly { 
        display: inline-box;
    }

    .text {
        grid-column: 2 / 6;
        grid-row: 1;
        margin: auto;
        margin-bottom: 0;
    }

    .telly {
        position: relative;
        grid-column: 10 / 12;
        grid-row: 1 / 3;
    }

    .b-cont {
        grid-column: 2 / 6;
        grid-row: 2;
    }
    img {
        margin: auto;
        max-width: 100%;
        max-height: auto;
    }

}

@media (min-width: 1024px) and (max-width: 1260px){
    .container {
        margin: auto;
    }
    .grid {
        padding: 100px 0;
        margin: auto;
        gap: 1rem;
        display: grid;
        grid-template-columns: repeat(12, 1fr);
    }
    // .grid {
    // padding: 120px 40px;
    // margin: auto;
    // height: 400px;
    // gap: 1rem;
    // display: grid;
    // grid-template-columns: repeat(12, 1fr);
    // }

    .text {
        grid-column: 2 / 6;
        grid-row: 1;
        margin: auto;
        margin-bottom: 0;
    }

    .telly {
        grid-column: 10 / 12;
        grid-row: 1 / 3;
    }
    .b-cont {
        grid-column: 2 / 6;
        grid-row: 2;
    }

    img {
        margin: auto;
        max-width: 100%;
        max-height: auto;
    }

}

@media (min-width: 768px) and (max-width: 1023px){
    // .background {
    //     height: 608px;
    // }
    .container {
        margin: auto;
    }
    .grid {
        padding: 100px 10px;
        margin: auto;
        gap: 1rem;
        display: grid;
        grid-template-columns: repeat(8, 1fr);
    }

    .text {
        grid-column: 1 / 4;
        grid-row: 1;
        margin: auto;
        margin-bottom: 0;
    }

    .telly {
        grid-column: 7 / 9;
        grid-row: 1 / 3;
    }

    .b-cont {
        grid-column: 1 / 6;
        grid-row: 2;
    }

    img {
        margin: auto;
        max-width: 100%;
        max-height: auto;
    }
}

@media (min-width: 320px) and (max-width: 767px){
    // .background {
    //     height: 752px;
    // }

    container {
        margin: auto;
    }
    .grid {
        padding: 100px 0;
        margin: auto;
        gap: 1rem;
        display: grid;
        grid-template-columns: 1fr;
    }

    .text {
        grid-column-start: 1;
        grid-row: 1;
        text-align: center;
    }

    .telly {
        // padding-left: 100px;
        // padding-right: 100px;
        grid-column: 1;
        grid-row: 2;
        justify-self: center;
    }

    .b-cont {
        grid-column: 1;
        grid-row: 3;
        justify-self: center;
    }

    img {
        margin: auto;
        width: 8.5rem;
        max-height: 18rem;
    }
    .B1 { 
    padding-top: 32px;
    padding-bottom: 32px;
    max-width: 500px;
    margin:auto;
    }
}

</style>
