<template>
    <header>
        <div class="container">
            <div class="left">
                <img src="../assets/imgs/logo-cambi.png" alt="Website Logo">
            </div>
            <div class="right">
                <Button class="B1 Primary-Button">Join Cambi</Button>
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
