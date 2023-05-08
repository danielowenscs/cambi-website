<template>
    <div class="content">
        logo here
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

.content {
    height: 64px;
}
</style>
