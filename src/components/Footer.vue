<template>
    <footer>
        <div class="background">
            <div class="container">
                <div class="grid">
                    <div class="content">
                    <img src="../assets/imgs/logo-cambi.png" alt="Website Logo" class="logo">
                    <h5 class="H4">{{ head }}</h5>
                    <p class="B3">{{ line }}<span class="color">{{ email }}</span></p>
                    <a href="https://instagram.com/cambi_app?igshid=YmMyMTA2M2Y=" target="_blank"><img src="../assets/imgs/_Instagram.png" alt="Instagram" class="icon"></a>
                    <a href="https://discord.gg/JazqGP4m" target="_blank"><img src="../assets/imgs/_Discord.png" alt="Discord" class="icon"></a>
                    <div @click="goToPrivacy" class=" B3 privacy"> Privacy Policy</div>
                    </div>
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
            email: strings.email,
        }
    },
    methods: {
        goToPrivacy () {
            this.$router.push('/privacypolicy');
        }
    }
}
</script>

<style lang='scss' scoped>
@import '@/assets/styles/styles.scss';

.color {
    color: $Se2;
}
.logo {
    width: 102px; 
    height: 20px;
}
.privacy{
    color: white !important;
    text-decoration: none;
    margin-top: 16px;
}

.icon {
    width: 32px; 
    height: 32px;
    margin-right: 32px;
}
.container {
    max-width: 1260px;
    margin: auto;
}
.grid {
    padding: 120px 40px;
    margin: auto;
    // height: 400px;
    gap: 1rem;
    display: grid;
    grid-template-columns: repeat(12, 1fr);
}
.content {
    grid-column: 2 / 5;
    text-align: left;
    justify-content: space-between;
    padding-left: 1.5%;
    padding-right: 1.5%;
    padding-top: 30px;
    padding-bottom: 30px;
    color: $P6;
}

.background {
    background-color: $N1;
}

// .left {
//     text-align: left;
// }

@media (max-width: 1024px){
    .container {
    // max-width: 1024px;
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
    grid-column: 1 / 4;
    text-align: left;
    justify-content: space-between;
    padding-left: 1.5%;
    padding-right: 1.5%;
    padding-top: 30px;
    padding-bottom: 30px;
    color: $P6;
    }
}

@media (min-width: 768px) and (max-width: 1023px){
  .container {
    margin: auto;
  }
  .grid {
    margin: auto;
    gap: 1rem;
    display: grid;
    grid-template-columns: repeat(8, 1fr);
  }
  .content {
    grid-column: 1 / 4;
    text-align: left;
    justify-content: space-between;
    padding-left: 1.5%;
    padding-right: 1.5%;
    padding-top: 30px;
    padding-bottom: 30px;
    color: $P6;
  }
}

@media (min-width: 280px) and (max-width: 767px){
    .container {
    margin: auto;
    }
    .grid {
    margin: auto;
    gap: 1rem;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    }
    .content {
    grid-column-start: 1;
    text-align: left;
    justify-content: space-between;
    padding-left: 1.5%;
    padding-right: 1.5%;
    padding-top: 30px;
    padding-bottom: 30px;
    color: $P6;
    }
}

</style>