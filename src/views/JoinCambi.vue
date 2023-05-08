<template>
<NavBar/>
<div class="container">
    <div class="grid">
        <main>
            <div class="content">
                <h1 class="H2" >Join the Cambi Community</h1>
                    <div class="spacing-16px"></div>
                    <div class="spacing-16px"></div>
                <h2 class="B1">Sign up for exclusive updates and early access!</h2>
                    <div class="B1"></div>
                    <div class="spacing-16px"></div>
                    <div class="spacing-16px"></div>
                    <div class="spacing-16px"></div>
                    <div class="spacing-16px"></div>
                    <div v-if="message">
                    <div class="B1 error">{{ message }}</div>
                    <div class="spacing-16px"></div>
                    <div class="spacing-16px"></div>
                    </div>
                <form @submit.prevent="createUser">
                    <input v-model="email" type="email" class="B3" placeholder="Email">
                        <div class="spacing-16px"></div>
                        <div class="spacing-16px"></div>
                    <button type="submit"> Join Cambi </button>
                </form>
            </div>
        </main>
    </div>
</div>
</template>
  
  <script>
//   const script = document.createElement('script');
//   script.src = 'https://www.google.com/recaptcha/api.js';
//   script.async = true;
//   script.defer = true;
//   document.body.appendChild(script);
  
  import { usersCollection } from '../firebase'
  import { addDoc } from 'firebase/firestore'
import NavBar from '@/components/NavBar.vue';

  
  export default {
    name: "JoinCambi",
    data() {
        return {
            email: "",
            message: "",
        };
    },
    methods: {
        async createUser() {
            try {
                const data = { email: this.$data.email, joinDate: new Date().toLocaleDateString() };
                console.log(data);
                //const addedDoc = await addDoc(usersCollection, null);
                const addedDoc = await addDoc(usersCollection, data);
                console.log(addDoc, addedDoc);
                this.$router.push("/thankyou");
            }
            catch (error) {
                this.message = "an error occured";
            }
        },
        goHome() {
            this.$router.push("/");
        },
    },
    components: { NavBar }
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
    }

    main {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);

    }
    .error {
        text-align: center;
        color: $D3;
    }

    img {
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
        
    }

    .content {
        margin: auto;
        width: 980px;
        //height: 100%;
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
        width: 338px;
        border-radius: 4px;
    }

    input:focus{
        outline: 1px solid $Se2;
        background-color: $Se6
    }

    button {
        font-family: 'Inter';
        font-weight: 400;
        line-height: 24px;
        font-size: 18px;
        border-radius: 8px;
        width: 380px;
        height: 56px;
        padding: 16px;
        background-color: $Se2;
        color: $N6;
        border: none;
    }

    button:hover {
        background-color: $Se3;
    }

    @media only screen and (min-width: 280px) and (max-width: 797px) {
        html {
            margin: 0;
            padding: 0;
        }
        // header {
        //     display: none;
        // }
        .container {
            width: 90%;
            height: 100%;
            margin:auto;
            align-items: center;
        }
        .grid {
            height:100vh;
            grid-gap: 1rem;
            display: grid;
            grid-template-columns: repeat(4 , 1fr);
            padding: 0.5rem 0.5rem;
            margin: 0; 
        }
        main {
            margin: 0;
            width: 90%;
            justify-content: center;
            
        }
        .content {
            width: 100%;
            height: auto;
            justify-content: center;
            align-items: center;
            text-align: center;
        }

        content form {
            display:flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            width: 90%;
            margin: 0;
        }

        input {
            padding: 1rem 1.10rem;
            width: 90%;
        }

        button {
            width: 100%;
        }

    }
  
  </style>