<template>
    <Button class="B1 Button">Join Us</Button>
    <div class="test">{{welcome}}</div>

    <!-- <div>

    </div>

    <div class="component-hero-section">
      <span class="component-text DesktopHeadline1_SB_641">
        <span>Shop Mindfully</span>
      </span>
      <span class="component-text2 DesktopBody2_R_16">
        <span>
          Discover products that align with your values and preferences. Empower
          yourself to make shopping effortless and enjoyable
        </span>
      </span>
      <button class="component-button">
        <span class="component-text4 Button_LinkNormal2">
          <span>Join Us</span>
        </span>
      </button>
    </div> -->





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
<style lang='scss'>
@import '@/assets/styles/styles.scss';





// .component-hero-section {
//   width: 1360px;
//   height: auto;
//   display: flex;
//   padding: 120px 0;
//   position: relative;
//   align-items: center;
//   flex-shrink: 0;
//   border-color: transparent;
//   border-radius: 30px;
//   flex-direction: column;
//   background-size: cover;
//   background-image: url("https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/d1bfcf50-2dba-44a3-bcf9-3c447b5c7cb1/5350f227-bd0b-4ffe-a804-2ff5e2ec89a5?org_if_sml=124052");
// }
// .component-text {
//   color: var(--dl-color-neutral-white);
//   height: auto;
//   align-self: stretch;
//   text-align: center;
//   line-height: 76px;
//   margin-right: 0;
//   margin-bottom: 40px;
// }
// .component-text2 {
//   color: rgba(255, 255, 255, 1);
//   width: 379px;
//   height: auto;
//   align-self: auto;
//   text-align: center;
//   line-height: 24px;
//   margin-right: 0;
//   margin-bottom: 40px;
// }
// .component-button {
//   height: 45px;
//   display: flex;
//   padding: 16px 32px;
//   position: relative;
//   align-items: center;
//   flex-shrink: 0;
//   border-color: transparent;
//   border-radius: 15px;
//   justify-content: center;
//   background-color: var(--dl-color-primary-p5);
// }
// .component-text4 {
//   color: var(--dl-color-primary-p3);
//   height: auto;
//   align-self: auto;
//   text-align: center;
//   line-height: 24px;
//   margin-right: 0;
//   margin-bottom: 0;
// }
// @media(max-width: 1600px) {
//   .component-container {
//     height: 2613px;
//   }
// }



</style>