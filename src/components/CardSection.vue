<template>
<div class="grid">
    <div class="container">
        <div class="B2" >{{ card1 }}</div>
        <div class="H2">{{ card2 }}</div>  
        <div class="B1">{{ card3 }}</div>  
    </div>
<div class="container">
    <div class="B2">{{ card4 }}</div>
    <div class="H2">{{ card5 }}</div>  
    <div class="B1">{{ card6 }}</div>  
</div> 
<div class="container">
    <div class="B2">{{ card7 }}</div>
    <div class="H2">{{ card8 }}</div>  
    <div class="B1">{{ card9 }}</div>  
</div>  
</div>
</template>
<script>
import { strings } from '@/assets/strings';

export default {
   name: 'CardSection',
   data () {
       return {
           card1: strings.card1,
           card2: strings.card2,
           card3: strings.card3,
           card4: strings.card4,
           card5: strings.card5,
           card6: strings.card6,
           card7: strings.card7,
           card8: strings.card8,
           card9: strings.card9,
       }
   }

}
</script>
<style lang='scss' scoped>
@import '@/assets/styles/styles.scss';

html {
    font-size: 62.5% !important;
}
.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 16px;
  padding-bottom: 120px;
  background-color: azure;
  justify-content: center;
}
.container{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 64px 32px;
    gap: 32px;
    background-color:antiquewhite;
    width: 348px;
    border-radius: 16px;
    justify-content: flex-start;
    
}

 
</style>
