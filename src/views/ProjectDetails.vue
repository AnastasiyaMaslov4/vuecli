<template>
    <div class="projectDetails__heading center">
    </div>
    <main class="projectDetails center">
        <div class="projectDetais__content">
            <h2 class="projectDetails__content__title">{{title}}</h2>
            <p class="projectDetails__content__text">{{text1}}</p>
            <p class="projectDetails__content__text">{{ text2 }}</p>
        </div>
        <SliderComponent/>
    </main>
</template>

<script>
    import {mapState} from 'vuex';
    import SliderComponent from '@/components/SliderComponent.vue'

    export default {
        name: 'ProjectDetails',
        computed: {
            ...mapState(['title', 'text1', 'text2'])
        },
        components: {
            SliderComponent,
        }
    }
</script>

<style scoped>
    .projectDetails {
        margin-bottom: 110px;
    }
    .projectDetails__heading{
        height: 356px;
        background: url('../assets/img/project_top.jpg') no-repeat center;
        background-size: cover;
        margin-bottom: 200px;
    }

    .projectDetais__content {
        margin-left: 272px;
        margin-right: 272px;
        margin-bottom: 50px;
    }

    .projectDetails__content__title {
        font-size: 50px;
        font-style: normal;
        font-weight: 400;
        line-height: 125%; /* 62.5px */
        letter-spacing: 1px;
        margin-bottom: 11px;
    }

    .projectDetails__content__text{
        font-size: 22px;
        font-style: normal;
        font-weight: 400;
        line-height: 150%; /* 33px */
        letter-spacing: 0.22px;
        margin-bottom: 50px;
    }
</style>