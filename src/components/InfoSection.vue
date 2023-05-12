<template>
    <div class="content">
        <h1 class="headline">Find Better Products</h1>
        <p class="body">
        No more sifting through endless aisles or scrutinizing product labels - our innovative feature streamlines the process and suggests <span class="secondary-2">ALTERNATIVE</span> product options that better suit your lifestyle and preferences.
        </p>

    </div>
    <div class="content background-shade">
        <h1 class="headline">Fitted To Your Needs</h1>
        <p class="body">
        Select your <span class="secondary-2">PREFERENCES</span> from a range of pre-made goals related to health, diet, lifestyle, and more. Cambi is designed to learn what makes you unique and help you shop to meet your needs. With Cambi, you can finally enjoy a stress-free shopping experience that aligns with your values and preferences.
        </p>
    </div>
    <div class="content">
        <h1 class="headline">Simplify Your Decisions </h1>
        <p class="body">
        Looking for a quick and easy way to determine which products are right for you? Look no further than our <span class="secondary-2">CAMBISCORE</span> system! Our innovative algorithm rates products based on your unique preferences, so you can easily identify the items that are most aligned with you. Say goodbye to tedious research and hello to effortless personlized shopping with Cambi.
        </p>
    </div>
</template>
<script>
export default {
    name: "InfoSection"
}
</script>
<style lang="scss" scoped>
@import '@/assets/styles/styles.scss';
/* Load Inter font from Google Fonts */
@import url('https://fonts.googleapis.com/css?family=Inter');

/* Set Inter as the default font for the body */

.secondary-2 {
    color: $Se2;
}
.background-shade {
    background-color: #F8FAFF;
}
div {
    background-color: white !important;
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
        line-height: 24px;
        font-size: 20px;
    }
    .body {
        margin:0;
        // text styles
        font-family: 'Inter';
        font-weight: 400;
        line-height: 24px;
        font-size: 16px;
    }
}
@media (min-width: 768px) and (max-width: 1200px) {
    .content {
        display: grid;
        grid-template-columns: repeat(12, 1fr);
        padding: 120px 40px;
        column-gap: 24px;
    }
    .headline {
        //spacing
        margin:0 0 32px 0;
        grid-column: 1/12;

        // text styles
        font-family: 'Inter';
        font-weight: 700;
        line-height: 36px;
        font-size: 48px;
    }
    .body {
        //spacing
        grid-column: 1/9;
        margin: 0;

        // text styles
        font-family: 'Inter';
        font-weight: 400;
        line-height: 24px;
        font-size: 18px;

    }
    
}
@media (min-width: 1201px){
    .content {
        display: grid;
        grid-template-columns: repeat(12, 78px);
        padding: 120px 40px;
        column-gap: 24px;
        justify-content: center;
        
    }
    .headline {
        //spacing
        margin:0 0 32px 0;
        grid-column: 1/12;

        // text styles
        font-family: 'Inter';
        font-weight: 700;
        line-height: 36px;
        font-size: 48px;
    }
    .body {
        //spacing
        grid-column: 1/9;
        margin: 0;

        // text styles
        font-family: 'Inter';
        font-weight: 400;
        line-height: 24px;
        font-size: 18px;

    } 
}


</style>
