<template>
    <header class="header center">
        <a href="index.html" class="header__logo"><img :src="logo" alt="Logo pic"></a>
        <nav class="header__navigation">
            <ul class="header__navigation__list">
                <li class="header__navigation__li"><a href="index.html">Home</a></li>
                <li class="header__navigation__li"><a href="#project">Project</a></li>
                <li class="header__navigation__li"><a href="blog.html">Blog</a></li>
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