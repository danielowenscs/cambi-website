<template>
  <body>
    <div class="background">
        <div class="container-g">
            <div class="grid">
              <div class="content">
                <h1>Join The Cambi Community</h1>
              <p>Sign up for exclusive updates and early access!</p>
    
              <form @submit.prevent="createUser">
                <label>Name</label>
                <input v-model="name" placeholder="Name" required/>
                <br>
                <label>Email</label>
                <input v-model="email" type="email" placeholder="Email" required>
                <br>
                <label>Phone Number(optional)</label>
                <input v-model="phonenum" placeholder="Phone Number(optional)">
                <br>
                <button type="submit"> Create User</button>
              </form>

            <router-link to="/">
              <button class="B1 button">Go Back Home</button>
            </router-link>
              </div>
            </div>
        </div>
    </div>
  </body>
  <Footer/>
</template>
<script>
import { usersCollection } from '../firebase'
import { addDoc } from 'firebase/firestore'
import Footer from '@/components/Footer.vue';
import Header from '@/components/Footer.vue';

export default {
    name: "JoinForm",
    components: {
      Footer
    },
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
  font-family: Inter;
}

h1 {
  position: center;
}

.background {
    background: $N6;
}
.container-g {
    max-width: 1260px;
    margin: auto;
}
.grid {
    padding: 120px 40px;
    margin: auto;
    height: 400px;
    gap: 20px;
    display: grid;
    grid-template-columns: repeat(12, 1fr);
}
.content {
    grid-column: 2/11;
    text-align: center;
}

form {
  grid-column: 5 / 12;
}

// @media (767px < width < 390px){

// }

// @media (1023px < width < 768px){

// }

// @media (1260px < width < 1024px){

// }

// @media (width > 1260px) {

// }

</style>