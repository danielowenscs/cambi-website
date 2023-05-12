<template>
        <div class="container">
            <div class="icon-container">
                <a href="https://instagram.com/cambi_app?igshid=YmMyMTA2M2Y=" target="_blank"><img src="../assets/imgs/_Instagram.png" alt="Instagram" class="icon"></a>
                <a href="https://discord.gg/pZKk7tHC" target="_blank"><img src="../assets/imgs/_Discord.png" alt="Discord" class="icon"></a>
            </div>
            <div class="grid">
                <div></div>
                <div>
                    <CambiLogo/>
                </div>
                <div>
                    Resources
                </div>
                <div> <a href="https://linktr.ee/cambi_app" target="_blank">contact us</a></div>
                <div>
                    Policies
                </div>
                <div class="privacy-policy" @click="goToPrivacy">Privacy Policy</div>

            </div>
        </div>
</template>

<script>
import { strings } from '@/assets/strings.js'
import CambiLogo from './icons/CambiLogo.vue';

export default {
    name: "FooterComponent",
    data() {
        return {
            head: strings.head,
            line: strings.line,
            email: strings.email,
        };
    },
    methods: {
        goToPrivacy() {
            this.$router.push("/privacypolicy");
        }
    },
    components: { CambiLogo }
}
</script>

<style lang='scss' scoped>
@import '@/assets/styles/styles.scss';
.container {
    background-color: $N1;
    font-family: 'Inter';
        font-weight: 400;
        line-height: 24px;
        font-size: 14px;
    color: white;
}
a {
    text-decoration: none;
    color: $N6;
    text-align: left;
    padding: 0;

}
img {
    padding: 0 16px;
}

.privacy-policy {
    cursor: pointer;
}

@media (max-width: 767px) {
    .icon-container {
    text-align: center;
    padding: 16px 0;
    height: 32px;
}
    .container {
        padding: 0px 24px 128px 24px;
    }
    .grid {
        display: grid;
        grid-template-columns: 1 fr 1 fr;
    }
    .grid > :nth-child(1){
        height: 1px;
        grid-column: span 2;
        background-color: $Se2;
    }
    .grid > :nth-child(2) {
        padding: 32px 0;
        grid-column: 1;
    }
    .grid > :nth-child(3) {
        color: $Se2;
        padding-bottom: 16px;
        grid-column: 1;
    }
    .grid > :nth-child(4) {
        grid-column: 1;
    }
    .grid > :nth-child(5) {
        color: $Se2;
        grid-column: 2;
        grid-row: 3;
    }
    .grid > :nth-child(6) {
        grid-column: 2;
    }
    .grid > :nth-child(7) {
        height: 1px;
        background-color: $Se2;
    }
}
    @media (min-width: 768px) and (max-width: 1200px)  {
        .icon-container {
    text-align: center;
    padding: 32px 0;
    height: 32px;
}
    .container {
        padding: 32px 0px 64px 0;
    }
    .grid {
        display: grid;
        grid-template-columns: repeat(12, 1fr);
        column-gap: 24px;
    }
    .grid > :nth-child(1){
        margin-bottom: 32px;
        height: 1px;
        background-color: $Se2;
        grid-column: span 12;
    }
    .grid > :nth-child(2) {
        grid-column-start: 1;
        grid-column-end: 3;
    }
    .grid > :nth-child(3) {
        color: $Se2;
        padding-bottom: 16px;
        grid-column-start: 3;
        grid-column-end:5;
    }
    .grid > :nth-child(4) {
        grid-column-start: 3;
        grid-column-end: 5;
        grid-row: 3;
    }
    .grid > :nth-child(5) {
        color: $Se2;
        grid-column-start:5;
        grid-column-end: 7;
    }
    .grid > :nth-child(6) {
        grid-column-start:5;
        grid-column-end: 7;
        grid-row: 3;
    }
 
    }
    @media (min-width: 1200px) {
        .container {
        padding: 0 32px;
       //max-width: 1200px;
    }
    .icon-container {
    text-align: center;
    padding: 32px 0;
    height: 32px;
}
    .grid {
        display: grid;
        grid-template-columns: repeat(12, 78px);
        padding: 0 0 128px 0;
        column-gap: 24px;
        justify-content: center;
    }
    .grid > :nth-child(1){
        margin-bottom: 32px;
        height: 1px;
        background-color: $Se2;
        grid-column: span 12;
    }
    .grid > :nth-child(2) {
        grid-column-start: 1;
        grid-column-end: 3;
    }
    .grid > :nth-child(3) {
        color: $Se2;
        padding-bottom: 16px;
        grid-column-start: 3;
        grid-column-end:5;
    }
    .grid > :nth-child(4) {
        grid-column-start: 3;
        grid-column-end: 5;
        grid-row: 3;
    }
    .grid > :nth-child(5) {
        color: $Se2;
        grid-column-start:5;
        grid-column-end: 7;
    }
    .grid > :nth-child(6) {
        grid-column-start:5;
        grid-column-end: 7;
        grid-row: 3;
    }
    }
</style>