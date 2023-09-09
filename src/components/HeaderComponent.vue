<template>
    <header class="header center">
        <router-link to="/" class="header__logo"><img :src="logo" alt="Logo pic"></router-link>
        <nav class="header__navigation">
            <ul class="header__navigation__list">
                <li class="header__navigation__li"><router-link to="/">Home</router-link></li>
                <li class="header__navigation__li"><router-link to="/projects">Project</router-link></li>
                <li class="header__navigation__li"><router-link to="/blog">Blog</router-link></li>
            </ul>
        </nav>
    </header>
</template>

<script>
    export default {
        name: "HeaderComponent",
        data() {
            return {
                logo: require("@/assets/img/Logo.svg")
            }
        },
    }
</script>

<style scoped>

</style>