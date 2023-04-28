<template>
    <footer>
        <div class="background">
            <div class="container">
                <div class="grid">
                    <div class="content">

                    </div>
                </div>
            </div>
            <div class="box">
                <div class="left">
                    <img src="../assets/imgs/logo-cambi.png" alt="Website Logo" class="logo">
                    <h5 class="H4">{{ head }}</h5>
                    <p class="B3">{{ line }}</p>
                    <img src="../assets/imgs/_Instagram.png" alt="Instagram" class="instagram">
                    <img src="../assets/imgs/_Discord.png" alt="Discord" class="discord">
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
import { strings } from '@/assets/strings.js'

export default {
    name: 'Footer', 
    data() {
        return {
            head: strings.head,
            line: strings.line,
        }
    }
}
</script>

<style lang='scss' scoped>
@import '@/assets/styles/styles.scss';

img .logo {
    width: 102px; 
    height: 20px;
}

img .instagram {
    width: 32px; 
    height: 32px;
    margin: 10px;
}

img .discord {
    width: 32px; 
    height: 32px;
    margin: 10px;
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
    grid-column: 2/11;
    text-align: center;
}

.background {
    background-color: $N1;
}

.box {
    display: flex;
    justify-content: space-between;
    padding-left: 1.5%;
    padding-right: 1.5%;
    padding-top: 30px;
    padding-bottom: 30px;
}

.left {
    text-align: left;
    color: $P6;
}


</style>