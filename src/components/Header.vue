<template>
    <body>
        <header>
            <div class="container">
            <router-link to="/" class="logo">
                <img src="../assets/imgs/logo-cambi.png" alt="Website Logo">
            </router-link>
            <router-link to="/joinus">
                <button class="B1">Join Cambi</button>
            </router-link>
            </div>
        </header>
        <section class="banner"></section>
    </body>
</template>

<script>

export default {
    name: 'Header', 
    data() {
        return {
            
        }
    }
}
</script>

<style lang='scss' scoped>
@import '@/assets/styles/styles.scss';



body {
    min-height: fit-content;
}

header .logo {
    position: relative;
    width: 102px; 
    height: 20px;
}

header button {
    border-radius: 40px;
    width: 209px;
    height: 56px;
    padding: 16px;
    background-color: $Se2;
    border-color: none;
    text-emphasis-color: $P1;
    visibility: hidden;
}

header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: 0.6s;
    padding-left: 1.5%;
    padding-right: 1.5%;
    padding-top: 30px;
}

header .container { 
    position: relative;
    margin: 0 15px;
}

.banner {
    position: relative;
    max-width: 1260px;
    height: auto;
    background-size: cover;

}

</style>
