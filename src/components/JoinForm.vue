<template>
  <body>
    <h1>Join The Cambi Community</h1>
    <p>Sign up for exclusive updates and early access!</p>
    
    <form @submit.prevent="createUser">
      <label>Name</label>
      <input v-model="name" required/>
      <label>Email</label>
      <input v-model="email" type="email" required>
      <button type="submit"> Create User</button>
    </form>

  </body>
  <Footer/>
</template>
<script>
import {usersCollection} from '../firebase'
import { addDoc } from 'firebase/firestore'


export default {
    name: "JoinForm",
    // components: {
    //   Footer
    // },
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

<style lang="scss" scoped>
@import '@/assets/styles/styles.scss';


body {
  background-color: $N6;
  font-family: Inter;
}
</style>