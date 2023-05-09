<template>
    <div class="grid background-shade"> 
            <div class="content">
            <h1 class="headline">Ready To Start?</h1>
            <p class="body">Sign up for Cambi and see how easy it is to align your purchases with your values.</p>
        </div>
        <div class="image-container">
            <img src="@/assets/imgs/phone.png">
        </div>
        <div class="button-container">
            <button @click="goToJoinForm">Join Cambi</button>
        </div>
    </div>
</template>
<script>


export default {
   name: 'PhoneSection',
   methods: {
    goToJoinForm() {
      this.$router.push('/joinus')
    }
  }
}

</script>
<style lang='scss' scoped>
@import '@/assets/styles/styles.scss';
button {
  border-radius: 40px;
  width: 209px;
  padding: 16px;
  background-color: $Se2;
  border: none;
  color: $N6;
  font-size: 18px;
}
button:hover {
    background-color: $Se3;
}
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
    .image-container {
        text-align: center;
    }
    img {
        height: 288px;
        width: 136px;
    }
    .button-container {
        text-align: center;
        padding: 32px 0 64px 0;
    }
}

@media (min-width: 768px) and (max-width: 1200px) {
    .grid {
        display: grid;
        grid-template-columns: repeat(12, 1fr);
        padding: 120px 40px;
        column-gap: 24px;
    }
    .content {
        grid-column: 1/9;
    }
    .headline {
        //spacing
        margin:0 0 16px 0;

        // text styles
        font-family: 'Inter';
        font-weight: 700;
        line-height: 36px;
        font-size: 48px;
    }
    
    .body {
        //spacing
        grid-column: 9/12;
        margin: 0;
        grid-row: 1;

        // text styles
        font-family: 'Inter';
        font-weight: 400;
        line-height: 24px;
        font-size: 18px;

    }
    .image-container {
        grid-column-end: -1;
        grid-row: 1 / span 2;
    }
    img {
        height: 448px;
        width: 210px;
    }
    .button-container {
        margin: 16px 0 0 0;
        grid-row: 2 /span 3;
        grid-column: 1/9;
        height: 100%
    }
    
}
@media (min-width: 1201px){
    // .content {
    //     display: grid;
    //     grid-template-columns: repeat(12, 78px);
    //     padding: 120px 40px;
    //     column-gap: 24px;
    //     justify-content: center;
        
    // }
    .grid {
        display: grid;
        grid-template-columns: repeat(12, 78px);
        padding: 120px 40px;
        column-gap: 24px;
        justify-content: center;
    }
    .content {
        grid-column: 1/9;
        align-self: start;
    }
    .headline {
        //spacing
        margin:0 0 16px 0;

        // text styles
        font-family: 'Inter';
        font-weight: 700;
        line-height: 36px;
        font-size: 48px;
    }
    
    .body {
        //spacing
        grid-column: 9/12;
        margin: 0;
        grid-row: 1;

        // text styles
        font-family: 'Inter';
        font-weight: 400;
        line-height: 24px;
        font-size: 18px;
        height: min-content;

    }
    .image-container {
        grid-column: 10/-1;
        grid-row: 1 / span 2;
    }
    img {
        height: 448px;
        max-width: 100%;
    }
    
    .button-container {
        margin: 16px 0 0 0;
        grid-row: 2 /span 3;
        grid-column: 1/9;
        height: 100%
    }
    
}


</style>
