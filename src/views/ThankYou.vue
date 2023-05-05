<template>
    <body>
        <header>
            <img src="../assets/imgs/logo-cambi-p.png" @click="goHome()" alt="Website Logo">
        </header>
        <main>
            <div class="container">
            <h1 class="H2" >Thank you for your interest in Cambi</h1>
            <div class="spacing-16px"></div>
            <div class="spacing-16px"></div>
            <h2 class="B1">Follow us on Instagram and join our Discord!</h2>
            <div class="spacing-16px"></div>
            <div class="spacing-16px"></div>
            <div>
                <a href="https://instagram.com/cambi_app?igshid=YmMyMTA2M2Y=" target="_blank"><img src="../assets/imgs/Instagram-p.png" alt="Instagram" class="icon"></a>
                <a href="https://discord.gg/JazqGP4m" target="_blank"><img src="../assets/imgs/Discord-p.png" alt="Discord" class="icon"></a>
            </div>
            <div class="spacing-16px"></div>
            <div class="spacing-16px"></div>
            <button class="B1 button" onclick="goHome()">Back to Cambi</button>
        </div>

        </main>
    </body>
  </template>
  <script>

  
  import { usersCollection } from '../firebase'
  import { addDoc } from 'firebase/firestore'
  import Footer from '@/components/Footer.vue';
  import Header from '@/components/Footer.vue';
  
  export default {
      name: "ThankYou",
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
    goHome () {
            this.$router.push('/')
        }
  }
  }
  </script>
  
  <style lang="scss" scoped>
  @import '@/assets/styles/styles.scss';

    html {
        height: 100%;
        margin: 0;
        padding: 0;
    }

    body {
        background-color: $N5;
        margin: 0 auto; /* shorthand for setting top and bottom margin to 0 and left and right margin to auto */
        width: 100%;
        height: 100vh;
        align-items: center;
        justify-content: center; 
    }

    main {
        position: relative;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    header img {
        margin: 1rem;
    }

    header {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        display:inline;
        // justify-content: space-between;
        align-items: center;
        transition: 0.6s;
        padding-left: 1.5%;
        padding-right: 1.5%;
        padding-top: 30px;
        position: fixed;
        top: 0;
        left: 0;
        
    }

    .icon {
        height: 32px;
        margin: 16px;
    }

    .container {
        margin: auto;
        width: 980px;
        text-align: center;
    }
    .spacing-16px{
        height: 16px;
    }
    h1 {
        margin: 0px;
        text-align: center;
    }
    
    h2 {
        margin: 0px;
        text-align: center;
    }

    button {
        font-family: 'Inter';
        font-weight: 400;
        line-height: 24px;
        font-size: 18px;
        border-radius: 40px;
        width: 380px;
        height: 56px;
        padding: 16px;
        background-color: $Se2;
        text-emphasis-color: $P1;
        border: none;
    }
</style>