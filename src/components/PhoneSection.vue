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

.color {
    color: $Se2;
}

.container {
    max-width: 1260px;
    margin: auto;
    align-items: center;
}
.grid {
    padding: 120px 40px;
    margin: auto;
    height: 400px;
    gap: 20px;
    display: grid;
    grid-template-columns: repeat(12, 1fr);
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
    height: 56px;
    padding: 16px;
    background-color: $Se2;
    border: none;
    postion: relative;
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

@media (max-width: 1024px){
    .container {
        margin: auto;
    }
    .grid {
        margin: auto;
        gap: 1rem;
        display: grid;
        grid-template-columns: repeat(12, 1fr);
    }

    .text {
        grid-column: 2 / 6;
    }

    .telly {
        grid-column: 10 / 12;
    }
    .b-cont {
    grid-column: 1 / 6;
    grid-row: 2;
    }

    img {
        margin: auto;
        max-width: 100%;
        height: auto;
    }

}

@media (min-width: 768px) and (max-width: 1023px){
    .background {
        height: 608px;
    }
    .container {
        margin: auto;
    }
    .grid {
        margin: auto;
        gap: 1rem;
        display: grid;
        grid-template-columns: repeat(8, 1fr);
    }

    .text {
        grid-column: 1 / 4;
    }

    .telly {
        grid-column: 7 / 9;
    }

    .b-cont {
        grid-column: 1 / 6;
        grid-row: 2;
    }

    img {
        margin: auto;
        max-width: 100%;
        height: auto;
    }
}

@media (min-width: 320px) and (max-width: 767px){
    .background {
        height: 752px;
    }

    container {
        margin: auto;
    }
    .grid {
        margin: auto;
        gap: 1rem;
        display: grid;
        grid-template-columns: repeat(4, 1fr);
    }

    .text {
        grid-column-start: 1;
        grid-row: 1;
        text-align: center;
    }

    .telly {
        grid-column: 2 / 3;
        grid-row: 2;
        align-items: center;
    }

    .b-cont {
        grid-column: 2 / 4;
        grid-row: 3;
    }

    img {
        margin: auto;
        width: 100%;
        max-height: auto;
    }
}

// @media (width > 1260px) {

// }
</style>
