<template>
    <div class="nav">
    </div>
</template>

<script>
import CambiLogo from './icons/CambiLogo.vue';

export default {
    name: 'NavBar', 
    components : {
        CambiLogo,
    },
    methods: {
        goHome() {
            this.$router.push('/joinus')
        },
  }
}

</script>

<style lang='scss' scoped>
@import '@/assets/styles/styles.scss';

html, body {
  height: 100%;
}
.nav {
    height: 64px;
    background-color: rgb(227, 152, 101);
}

</style>
