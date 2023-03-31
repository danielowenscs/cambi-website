<template>
    <div>hi</div>
    <div>{{welcome}}</div>
</template>
<script>
import {strings} from '../assets/strings.js'
export default {
    name: "Welcome",
    data () {
        return {
            welcome: strings.welcome
        }
    }

}
</script>