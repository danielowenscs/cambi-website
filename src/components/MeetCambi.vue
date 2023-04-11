<template>
    <div class="container-1">
        <div class="container-2">
            <div class="H2">
               {{ meet1 }}
            </div>
            <div class=" B2">
               {{ meet2 }}
            </div>

        </div>
    </div>
</template>
<script>
import { strings } from '@/assets/strings';
    export default {
        name: 'MeetCambi',
        data () {
            return {
                meet1: strings.meet1,
                meet2: strings.meet2,
            }
        }
    }
</script>
<style lang='scss' scoped>
@import '@/assets/styles/styles.scss';
.container-1 {
    //height: 192px;
    background-color: white;
    padding-top: 120px;
    //position: absolute;
    //top: 664px;
    left: 0px;
    right: 0px;
    padding: 120px 0px;
}
.container-2 {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 40px 0px;
    gap: 40px;
    background-color: white;
    height: 190px;
}
</style>