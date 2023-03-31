<template>
<form @submit.prevent="createUser">
    <label>Name</label>
    <input v-model="name" required/>
    <label>Email</label>
    <input v-model="email" type="email" required>
    <button type="submit"> Create User</button>
</form>
</template>
<script>
import {usersCollection} from '../firebase'
import { addDoc } from 'firebase/firestore'


export default {
    name: "JoinForm",
    data () {
    return {
        name: null,
        email: null,
    }
},
methods: {
  async createUser () {
    console.log("creating user")
    const addedDoc = await addDoc(usersCollection, this.$data);
    console.log(addDoc, addedDoc);
  },
}
}
</script>