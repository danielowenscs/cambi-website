<template>
    <body>
        <header ref="header">
            <div class="container">
            <img src="../assets/imgs/logo-cambi.png" @click="refresh()" alt="Website Logo">
            <!-- <button @click="goToJoinForm()" class="B1">Join Cambi</button> -->
            </div>
        </header>
        <section class="banner"></section>
    </body>
</template>

<script>

export default {
    name: 'Header', 
    methods: {
        goToJoinForm() {
            this.$router.push('/joinus')
        },
        // goHome () {
        //     this.$router.push('/')
        // },
        refresh() {
            this.$forceUpdate('/'); //codepen
    }
  }
}

</script>

<style lang='scss' scoped>
@import '@/assets/styles/styles.scss';



body {
    min-height: fit-content;
}

header button {
    border-radius: 40px;
    width: 209px;
    height: 56px;
    padding: 16px;
    background-color: $Se2;
    border-color: none;
    text-emphasis: $P1;
    visibility: hidden;
}

header {
    // position: fixed;
    // top: 0;
    // left: 0;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: 0.6s;
    padding-left: 1.5%;
    padding-right: 1.5%;
    padding-top: 30px;
    // z-index: 999;
}

header .logo {
    position: relative;
    width: 102px; 
    height: 20px;
}


// header .container { 
//     position: relative;
//     margin: 0 15px;
    
// }
section .banner {
    position: relative;
    max-width: 100%;
    height: 100vh;
    background-size: cover;
    background: linear-gradient(-45deg, #312D9F, #4858D7);
}

</style>
