//Directly copied from the header and needs heavy altering
<template>
    <footer>
        <div class="background">
            <div class="container">
                <div class="left">
                    <img src="../assets/imgs/logo-cambi.png" alt="Website Logo">
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
import strings from '@/assets/strings'
export default {
    name: 'Footer', 
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

.background {
    background-color: $N1;
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


</style>