<template>
    <footer class="footer center">
        <div class="footer__info">
            <router-link to="/" class="header__logo"><img :src="logo" alt="Logo pic"></router-link>
            <p class="footer__info__text">It is a long established fact that a reader will be distracted lookings.</p>
            <div class="footer__info__links">
                <a href="#" class="footer__info__link"><img :src="twitterLogo" alt="twitter logo"></a>
                <a href="#" class="footer__info__link"><img :src="linkedInLogo" alt="linkedin logo"></a>
            </div>
        </div>
        <nav class="footer__navigation">
            <h3 class="footer__navigation__title">Pages</h3>
            <ul class="footer__navigation__list">
                <li class="footer__navigation__li"><router-link to="/">Home</router-link></li>
                <li class="footer__navigation__li"><router-link to="/projects">Project</router-link></li>
                <li class="footer__navigation__li"><router-link to="/blog">Blog</router-link></li>
            </ul>
        </nav>
        <div class="footer__contacts">
            <h3 class="footer__contacts__title">Contacts</h3>
            <p class="footer__contacts__text">55 East Birchwood Ave. Brooklyn, New York 11201 <br><span class="footer__contacts__text__email">contact@interno.com </span><br>(123) 456 - 7890</p>
        </div>
    </footer>
</template>

<script>
    export default {
        name: "FooterComponent",
        data() {
            return {
                logo: require("@/assets/img/Logo.svg"),
                twitterLogo: require('@/assets/img/link1.svg'),
                linkedInLogo: require('@/assets/img/link2.svg'),
            }
        },
    }
</script>

<style scoped>

</style>