<template>
    <div class="content">
        <h1 class="headline">Shop Mindfully</h1>
        <h2 class="body">Discover products that align with your values and preferences. Empower yourself to make shopping effortless and enjoyable.</h2>
        <button @click="goToJoinForm()" class="B1 button">Join Cambi</button>
    </div>
    
</template>
<script>
import strings from '@/assets/strings'

export default {
    name: 'HeroSection',
    methods: {
    goToJoinForm() {
      this.$router.push('/joinus')
    }
  }
    
   
}
</script>
<style lang = 'scss' scoped>
@import '@/assets/styles/styles.scss';

.secondary-2 {
    color: $Se2;
}
.background-shade {
    background-color: #F8FAFF;
}
.button {
  border-radius: 40px;
  width: 209px;
  padding: 16px;
  background-color: $Se2;
  border: none;
  color: $N6;
}
@media (max-width: 767px) {
    .content {
    padding: 128px 24px 128px 24px;
    text-align: center;
    }
    .headline {
        //spacing
        margin: 0 0 32px 0;
        // text styles
        font-family: 'Inter';
        font-weight: 600;
        line-height: 32px;
        font-size: 28px;
        color: $N6;
    }
    .body {
        margin: 0 0 32px 0;
        // text styles
        font-family: 'Inter';
        font-weight: 400;
        line-height: 24px;
        font-size: 16px;
        color: $N6;
    }
}

@media (min-width: 768px) {
    .content {
        padding: 96px 40px;
        text-align: center;
    }
    .headline {
        //spacing
        margin:0 0 32px 0;

        // text styles
        font-family: 'Inter';
        font-weight: 700;
        line-height: 72px;
        font-size: 64px;
        color: $N6;
    }
    .body {
        //spacing
        margin:0 0 32px 0;

        // text styles
        font-family: 'Inter';
        font-weight: 400;
        line-height: 24px;
        font-size: 18px;
        color: $N6;
    }
    
}

</style>