<template>
    <Mission/>
    <Guide/>
</template>

<script>
import Mission from '../components/Mission.vue'
import Guide from '../components/Guide.vue'
export default {
    name: 'Home',
    components: {
        Mission,
        Guide,
    }
}
</script>

<style lang='scss'>
@import '@/assets/styles/styles.scss';

</style>
