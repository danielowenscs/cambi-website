<template>
<div class="container">
  <div class="item left">
    <p class="N1 B1">{{ guide1 }} <span class="P2">{{guide2}}</span></p>
    <div class="N1 H2">{{ guide3 }}</div>
    <div class="N1 B1">{{ guide4 }}</div>
  </div>
  <div class="item right">
    <img src="@/assets/imgs/girl.png" >
  </div>
  <div class="item left">
    <img src="@/assets/imgs/girl.png" >
  </div>
  <div class="item left">
    <p class="N1 B1">{{ guide5 }} 
        <span class="P2">{{guide6}}</span>
    </p>
    <div class="N1 H2">{{ guide7 }}</div>
    <div class="N1 B1">{{ guide8 }}</div>
  </div>
  <div class="item left">
    <p class="N1 B1">{{ guide9}} 
        <span class="P2">{{guide10}}</span>
    </p>
    <div class="N1 H2">{{ guide11 }}</div>
    <div class="N1 B1">{{ guide12 }}</div>
</div>
  <div class="item right">
    <img src="@/assets/imgs/choice.png" >
  </div>
</div>
</template>
<script>
import {strings} from '@/assets/strings.js'
export default { 
    name: 'Guide',
    data () {
        return {
            guide1: strings.guide1,
            guide2: strings.guide2,
            guide3: strings.guide3,
            guide4: strings.guide4,
            guide5: strings.guide5,
            guide6: strings.guide6,
            guide7: strings.guide7,
            guide8: strings.guide8,
            guide9: strings.guide9,
            guide10: strings.guide10,
            guide11: strings.guide11,
            guide12: strings.guide12,
        }
    }
}
</script>
<style lang='scss' scoped>
@import '@/assets/styles/styles.scss';

.container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  gap: 10px; /* optional - adds spacing between grid items */
}

.N1 {
    color: $N1;
}
.P2 {
    color: $P2;
}
img {
    width: 400px;
    height: 400px;

}
.item {

}
.left {

}
.right {
    
}





</style>