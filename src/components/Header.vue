<template>
    <header>
        <div class="container">
            <div class="left">
                <img src="../assets/imgs/logo-cambi.png" alt="Website Logo">
            </div>
            <div class="right">
                <button class="B1 Primary-Button">Join Cambi</button>
            </div>
        </div>
    </header>
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

<style lang='scss'>
@import '@/assets/styles/styles.scss';

img {
    width: 102px; 
    height: 20px;
}

button {
    border-radius: 40px;
    width: 209px;
    height: 56px;
    padding: 16px;
    background-color: $Se2;
    border-color: none;
    text-emphasis-color: $P1;
}

.container {
    display: flex;
    justify-content: space-between;
    padding-left: 1.5%;
    padding-right: 1.5%;
    padding-top: 30px;
}

.left {
    text-align: left;
}

.right {
    text-align: right;
}

</style>
