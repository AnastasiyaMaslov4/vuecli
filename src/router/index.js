import { createRouter, createWebHistory } from "vue-router";
import BlogComponent from '@/views/BlogComponent.vue';
import BlogDetails from '@/views/BlogDetails.vue';
import IndexComponent from '@/views/IndexComponent.vue';
import ProjectDetails from '@/views/ProjectDetails.vue';
import ProjectsComponent from '@/views/ProjectsComponent.vue';
import NotFound from '@/views/NotFound.vue';

const routes = [
    {
        path: '/',
        name: 'home',
        component: IndexComponent
    },
    {
        path: '/blog',
        name: 'blog',
        component: BlogComponent
    },
    {
        path: '/blogdetails',
        name: 'blogDetails',
        component: BlogDetails
    },
    {
        path: '/projectdetails',
        name: 'projectDetails',
        component: ProjectDetails
    },
    {
        path: '/projects',
        name: 'projects',
        component: ProjectsComponent
    },
    {
        path: '/:CatchAll(.*)',
        name: '404',
        component: NotFound
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router