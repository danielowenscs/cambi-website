<template>
    <body>
        <div class="container">
            <h1 class="H2" >Join the Cambi Community</h1>
            <div class="spacing-16px"></div>
            <div class="spacing-16px"></div>
            <h2 class="B1">Sign up for exclusive updates and early access!</h2>
            <div class="spacing-16px"></div>
            <div class="spacing-16px"></div>
            <div class="spacing-16px"></div>
            <div class="spacing-16px"></div>
            <form>
                <input type="email">
                <div class="spacing-16px"></div>
                <div class="spacing-16px"></div>
                <input type="phone">
                <div class="spacing-16px"></div>
                <div class="spacing-16px"></div>
                <input type="text">
            </form>
        </div>
    </body>
  </template>
  <script>
//   const script = document.createElement('script');
//   script.src = 'https://www.google.com/recaptcha/api.js';
//   script.async = true;
//   script.defer = true;
//   document.body.appendChild(script);
  
  import { usersCollection } from '../firebase'
  import { addDoc } from 'firebase/firestore'
  import Footer from '@/components/Footer.vue';
  import Header from '@/components/Footer.vue';
  
  export default {
      name: "JoinCambi",
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
        background-color: $N5;
        margin: 0 auto; /* shorthand for setting top and bottom margin to 0 and left and right margin to auto */
        width: 50%;
    }

    .container {
        width: 980px;
        height: 520px;
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
    form {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    
    input {
        background-color: $N6;
        border: 1px solid $Se6;
        padding: 16px 20px;
        width: 380px;
        border-radius: 4px;
    }

    input[type=text]:focus{
        outline: 1px solid $Se2;
        background-color: $Se6
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