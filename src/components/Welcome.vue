<template>
    <div>hi</div>
    <div>{{tWelcome}}</div>
</template>
<script>
import {tWelcome} from '../assets/words.js'
export default {
    name: "Welcome",
    tWelcome,
    data () {
        return {
            tWelcome: this.tWelcome
        }
    }

}
</script>