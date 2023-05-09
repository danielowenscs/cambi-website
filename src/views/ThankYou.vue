<template>
    <div class="container background-color">
        <div class="nav"></div>
        <div class="content">
            <h1 class="headline">Thank you for your interest in Cambi</h1>
            <h2 class="headline-2">Follow us on Instagram and join our Discord!</h2>
            <!-- <a href="https://instagram.com/cambi_app?igshid=YmMyMTA2M2Y=" target="_blank"><img src="../assets/imgs/Instagram-p.png" alt="Instagram" class="icon"></a>
            <a href="https://discord.gg/JazqGP4m" target="_blank"><img src="../assets/imgs/Discord-p.png" alt="Discord" class="icon"></a> -->
            <button @click="goHome"> Back To Cambi </button>
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
        components: {
            NavBar
        },
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
    
    
  
      
        button {
            font-family: 'Inter';
            font-weight: 400;
            line-height: 24px;
            font-size: 16px;
            border-radius: 8px;
           // width: 380px;
            height: 56px;
            padding: 0;
            background-color: $Se2;
            color: $N6;
            border: none;
            background-color: $Se2;
        }
    
        button:hover {
            background-color: $Se3;
        }
        .background-color {
                background-color: #F8FAFF;
            }
       
    
        @media (max-width: 767px) {
            .container {
                height: calc(100vh - 64px);
            }
            .nav {
                background-color: green;
                height: 64px;
            }
            .content {
                height: calc(100% - 64px);
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                padding: 0 40px;
                overflow-y: auto;
                text-align: center;
            }
    
            .headline {
            //spacing
            margin: 0 0 16px 0;
            // text styles
            font-family: 'Inter';
            font-weight: 600;
            line-height: 24px;
            font-size: 20px;
            }
            .headline-2 {
            //spacing
            margin: 0 0 64px 0;
            // text styles
            font-family: 'Inter';
            font-weight: 400;
            line-height: 24px;
            font-size: 16px;
            
            }
    
            input {
                width: calc(100vw - 80px);
                display: block;
                margin: 0 0 16px 0;
            }
            button {
                width: calc(100vw - 80px);
                display: block;
                margin: 0 auto;
            }
        }
        @media (min-width: 768px) {
            .container {
                height: calc(100vh - 64px);
            }
            .nav {
                background-color: green;
                height: 64px;
            }
            .content {
                height: calc(100% - 64px);
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                padding: 0 40px;
                overflow-y: auto;
                text-align: center;
            }
    
            .headline {
            //spacing
            margin: 0 0 16px 0;
            font-family: 'Inter';
            font-weight: 700;
            line-height: 32px;
            font-size: 28px;
            }
            .headline-2 {
            //spacing
            margin: 0 0 64px 0;
            // text styles
            font-family: 'Inter';
            font-weight: 400;
            line-height: 24px;
            font-size: 18px;
            
            }
    
            input {
                width: 388px;
                display: block;
                margin: 0 0 16px 0;
            }
            button {
                width: 388px;
                display: block;
                margin: 0 auto;
            }
        }
    
        
      
      </style>


<a href="https://instagram.com/cambi_app?igshid=YmMyMTA2M2Y=" target="_blank"><img src="../assets/imgs/Instagram-p.png" alt="Instagram" class="icon"></a>
                        <a href="https://discord.gg/JazqGP4m" target="_blank"><img src="../assets/imgs/Discord-p.png" alt="Discord" class="icon"></a>