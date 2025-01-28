import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/components/mainpage.vue';  // Adjust paths to your components
import ProjectPage from '@/components/ProjectPage.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/projects/:slug',
    name: 'Project',
    component: ProjectPage,
    props: true,  // This will pass the "slug" as a prop to your component
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
