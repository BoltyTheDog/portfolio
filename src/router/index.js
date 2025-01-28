import { createRouter, createWebHistory } from 'vue-router';
import ProjectPage from '@/components/ProjectPage.vue'; // Import your project page component

const routes = [
  {
    path: '/projects/:projectName', // Dynamic route for projects
    name: 'ProjectPage',
    component: ProjectPage
  },
  // Add other routes here
];

const router = createRouter({
  history: createWebHistory(), // Use HTML5 history mode
  routes
});

export default router;