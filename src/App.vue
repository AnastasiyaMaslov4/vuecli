<template>
  <HeaderComponent/>
  <IndexComponent/>
  <BlogComponent/>
  <BlogDetails/>
  <ProjectsComponent/>
  <ProjectDetails/>
  <FooterComponent/>
</template>

<script>
import HeaderComponent from './components/HeaderComponent.vue';
import IndexComponent from './components/IndexComponent.vue';
import BlogComponent from './components/BlogComponent.vue';
import FooterComponent from './components/FooterComponent.vue';
import BlogDetails from './components/BlogDetails.vue';
import ProjectsComponent from './components/ProjectsComponent.vue';
import ProjectDetails from './components/ProjectDetails.vue';

export default {
  name: 'App',
  components: {
    HeaderComponent,
    IndexComponent,
    BlogComponent,
    BlogDetails,
    FooterComponent,
    ProjectsComponent,
    ProjectDetails,
  }
}
</script>

<style lang="scss">

</style>
