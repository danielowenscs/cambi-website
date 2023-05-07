<template>
    <Header/>
<div class="content" B3>
    Privacy Policy

Cambi ("Cambi", "we", "us", "our") is committed to protecting the privacy and security of our users. This Privacy Policy explains how we collect, use, and disclose information that we collect from you when you use our website, mobile application, and related services (together, the "Service").

Information We Collect

We collect personal information that you provide to us when you use the Service, such as your name, email address, and other contact information. We may also collect information about your use of the Service, such as your device type, browser type, IP address, and usage data.

How We Use Your Information

We may use the personal information we collect for a variety of purposes, including:

To provide and improve the Service
To personalize your experience and preferences
To communicate with you about the Service, including updates, promotions, and surveys
To enforce our policies and legal requirements
To protect our rights and property
We may also use non-personal information for research and analytics purposes to improve our Service and user experience.

Disclosure of Information

We may share your personal information with third-party service providers who perform services on our behalf, such as hosting, analytics, and customer support. We may also disclose your information if required by law or in connection with legal proceedings.

We do not sell, rent, or trade your personal information to third parties for marketing purposes.

Security

We take reasonable measures to protect the security of your personal information, including using encryption and secure storage. However, we cannot guarantee that unauthorized access, hacking, data loss, or other breaches will never occur.

Your Choices

You can manage your communication preferences and opt-out of promotional emails by following the instructions in the email or contacting us at cambiapp.scan@gmail.com. You may also disable cookies or adjust your browser settings to limit the collection of non-personal information.

Changes to the Privacy Policy

We may update this Privacy Policy from time to time. If we make material changes, we will provide notice on the Service or by other means. Your continued use of the Service after the changes are posted indicates your acceptance of the revised policy.

Contact Us

If you have any questions or concerns about our Privacy Policy, please contact us.
</div>
</template>
<script>
import Header from '@/components/Header.vue';
    export default {
        name: "PrivacyPolicy",
        components: {
        Header,
        }
    }
</script>
<style lang="scss" scoped>
@import '@/assets/styles/styles.scss';
 .content {
        background-color: $N5;
        margin: 0 auto; /* shorthand for setting top and bottom margin to 0 and left and right margin to auto */
        width: 100%;
        height: 100vh;
    }
</style>