<template>
     <div class="container">
        <div class="item H1 N6">{{ shopMindfully }}</div>
        <div class="item-2 B2 N6">{{ missionStatement }}</div>
        <button class="item-3 B1 Primary-Button">{{ join }}</button>
    </div>
</template>
<script>
import { strings } from '@/assets/strings';

export default {
    name: 'Mission',
    data () {
        return {
            shopMindfully: strings.shopMindfully,
            missionStatement: strings.missionStatement,
            join: strings.join,
        }
    }

}
</script>
<style lang='scss' scoped>
 @import '@/assets/styles/styles.scss';

button { 
    border: none;
    color: $Se2;
    width: 65px;
}

.container {
    background-color: $Se1;
    height: 512px;
    border-radius: 30px;
    margin: 0;
    display: grid;
    align-items: center;
    grid-template-rows: repeat(3, 1fr);
    grid-gap: 10px;
    justify-content: center;
    text-align: center;
}
.N6 {
    color: $N6;
}

.item{

}
.item-2{
    
}
// .item-3 {
//     width: 65px;
// }
</style>
