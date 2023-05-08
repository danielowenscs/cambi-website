<template>
   <div class="content background-shade">
        <h1 class="headline">Meet <span class="secondary-2">Cambi</span></h1>
        <p class="body">The App that embodies your shopping values and transforms your shopping habits.</p>
   </div>
</template>
<script>
import { strings } from '@/assets/strings';
    export default {
        name: 'MeetCambi'
    }
</script>
<style lang='scss' scoped>
@import '@/assets/styles/styles.scss';
.secondary-2 {
    color: $Se2;
}
.background-shade {
    background-color: #F8FAFF;
}
@media (max-width: 767px) {
    .content {
    padding: 64px 24px 64px 24px;
    }
    .headline {
        //spacing
        margin: 0 0 16px 0;
        // text styles
        font-family: 'Inter';
        font-weight: 600;
        line-height: 32px;
        font-size: 28px;
        text-align: center;
    }
    .body {
        margin: 0;
        // text styles
        font-family: 'Inter';
        font-weight: 400;
        line-height: 24px;
        font-size: 16px;
        text-align: center;
    }
}

@media (min-width: 768px) and (max-width: 1200px) {
    .content {
        padding: 120px 40px;
    }
    .headline {
        //spacing
        margin:0 0 16px 0;

        // text styles
        font-family: 'Inter';
        font-weight: 700;
        line-height: 36px;
        font-size: 48px;
        text-align: center;
    }
    .body {
        //spacing
        margin: 0;

        // text styles
        font-family: 'Inter';
        font-weight: 400;
        line-height: 24px;
        font-size: 18px;
        text-align: center;
    }
    
}
@media (min-width: 1201px){
    .content {
        display: grid;
        grid-template-columns: repeat(1200px);
        padding: 120px 40px;
    }
    .headline {
        //spacing
        margin:0 0 16px 0;


        // text styles
        font-family: 'Inter';
        font-weight: 700;
        line-height: 36px;
        font-size: 48px;
        text-align: center;
    }
    .body {
        //spacing
        margin: 0;

        // text styles
        font-family: 'Inter';
        font-weight: 400;
        line-height: 24px;
        font-size: 18px;
        text-align: center;

    } 
}

</style>