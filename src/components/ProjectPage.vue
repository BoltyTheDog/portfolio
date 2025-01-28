<template>
    <div class="project-page">
      <h1>{{ project.title }}</h1>
      <img :src="project.image" :alt="project.title" />
      <p>{{ project.description }}</p>
      <div class="tech-stack">
        <span v-for="tech in project.technologies" :key="tech" class="tech-tag">
          {{ tech }}
        </span>
      </div>
      <a :href="project.githubLink" target="_blank" class="btn">View Code</a>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ProjectPage',
    data() {
      return {
        project: null
      };
    },
    created() {
      const projectName = this.$route.params.projectName; // Get project name from URL
      this.project = this.getProjectByName(projectName); // Fetch project data
    },
    methods: {
      getProjectByName(projectName) {
        // Replace this with your actual projects array or API call
        const projects = [
          {
            title: 'Drones FPV',
            description: 'Built, flew and perfected different kinds of FPV Drones.',
            image: require('@/assets/dronecarreras.png'),
            githubLink: '#',
            technologies: ['3D Printing', 'CAD', 'Electronics']
          },
          {
            title: 'ArcGIS_TerrorSim',
            description: 'Collision Simulator that uses ArcGIS SDK for my final project in INFOII.',
            image: require('@/assets/terrorsim.png'),
            githubLink: 'https://github.com/Info1-DanielBryanArnauDavid/ArcGIS_TerrorSim/tree/Final',
            technologies: ['C#', 'GitHub', 'Grit']
          },
          // Add other projects
        ];
  
        return projects.find(project => project.title.toLowerCase().replace(/\s+/g, '-') === projectName);
      }
    }
  };
  </script>
  
  <style scoped>
  .project-page {
    padding: 2rem;
    text-align: center;
  }
  
  .tech-stack {
    margin: 1rem 0;
  }
  
  .tech-tag {
    background: #333;
    color: #fff;
    padding: 0.2rem 0.5rem;
    border-radius: 12px;
    margin: 0.2rem;
    font-size: 0.7rem;
    display: inline-block;
  }
  
  .btn {
    background: #fff;
    color: #000;
    padding: 0.3rem 0.8rem;
    border-radius: 4px;
    text-decoration: none;
    transition: all 0.2s ease;
    font-size: 0.9rem;
  }
  
  .btn:hover {
    background: #333;
    color: #fff;
  }
  </style>