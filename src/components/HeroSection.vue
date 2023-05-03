<template>
    <div class="container">
        <div class="grid">
            <div class="content">
            <h1 class="H1">Shop Mindfully</h1>
            <p class="B1">Discover products that align with your values and preferences. Empower yourself to make shopping effortless and enjoyable.</p>
            <button @click="goToJoinForm()" class="B1 button">Join Cambi</button>
            </div>
        </div>
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

html {
    font-size: 62.5% !important;
}
body {
    max-width: 1260px;
    margin:auto;
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
    grid-column: 3/11;
    text-align: center;
}

div.content > * {
    margin: 40px 0 0 0;
    justify-content: flex-start;
    color: $N6;
}

.button {
  border-radius: 40px;
  width: 209px;
  padding: 16px;
  background-color: $Se2;
  border: none;
}

@media (min-width: 320px) and (max-width: 767px){
    .container {
        // max-width: 1260px;
        margin: auto;
    }
    .grid {
        // padding: 120px 40px;
        margin: auto;
        // height: 400px;
        gap: 1rem;
        display: grid;
        grid-template-columns: repeat(4, 1fr);
    }
    .content {
        grid-column: 1 / 5;
        text-align: center;
    }
}

@media (min-width: 768px) and (max-width: 1023px){
    .container {
        // max-width: 1260px;
        margin: auto;
    }
    .grid {
        // padding: 120px 40px;
        margin: auto;
        // height: 400px;
        gap: 1rem;
        display: grid;
        grid-template-columns: repeat(8, 1fr);
    }
    .content {
        grid-column: 1 / 9;
        text-align: center;
    }
}

@media (min-width: 1024px) and (max-width: 1260px){
    .container {
        // max-width: 1260px;
        margin: auto;
    }
    .grid {
        // padding: 120px 40px;
        margin: auto;
        // height: 400px;
        gap: 1rem;
        display: grid;
        grid-template-columns: repeat(12, 1fr);
    }
    .content {
        grid-column: 3 / 11;
        text-align: center;
    }
}


</style>