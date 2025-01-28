<template>
  <div class="project-page">
    <!-- Display the project title -->
    <h1>{{ project.title }}</h1>

    <!-- Display the project image -->
    <img :src="project.image" :alt="project.title" />

    <!-- Display project description -->
    <p>{{ project.description }}</p>

    <!-- Display the technologies used in the project -->
    <div class="tech-stack">
      <span v-for="tech in project.technologies" :key="tech" class="tech-tag">
        {{ tech }}
      </span>
    </div>

    <!-- Link to the project's GitHub repository -->
    <a :href="project.githubLink" target="_blank" class="btn">Code</a>
  </div>
</template>

<script>
export default {
  name: 'ProjectPage',
  props: ['slug'], // Accept the slug as a prop
  data() {
    return {
      projects: [
        {
          title: 'Drones FPV',
          description: 'Built, flew and perfected different kinds of FPV Drones.',
          image: require('@/assets/dronecarreras.png'),
          liveLink: '/projects/drones-fpv', // Vue Router dynamic route
          githubLink: '#',
          technologies: ['3D Printing', 'CAD', 'Electronics'],
          isHovered: false,
          date: '2025-01-10',
          slug: 'drones-FPV'
        },
        {
          title: 'ArcGIS_TerrorSim',
          description: 'Collision Simulator that uses ArcGIS SDK for my final project in INFOII.',
          image: require('@/assets/terrorsim.png'),
          liveLink: '/projects/arcgis-terrorsim', // Updated liveLink
          githubLink: 'https://github.com/Info1-DanielBryanArnauDavid/ArcGIS_TerrorSim/tree/Final',
          technologies: ['C#', 'GitHub', 'Grit'],
          isHovered: false,
          date: '2024-12-30',
          slug: 'arcgis-terrorsim'
        },
        {
          title: 'Pinza GRASS',
          description: 'Precision linear actuator gripper for the Space Programs Rover GRASS 2024.',
          image: require('@/assets/grass.png'),
          liveLink: '/projects/pinza-grass',
          githubLink: '#',
          technologies: ['Arduino', 'CAD', '3D Printing'],
          isHovered: false,
          date: '2024-06-22',
          slug: 'pinza-grass'
        },
       
        {
          title: 'Darwin I',
          description: 'Electromechanical prosthetic hand built for under 50€.',
          image: require('@/assets/darwin1.png'),
          liveLink: '/projects/darwin-i',
          githubLink: 'https://drive.google.com/file/d/1Vxdkg0_rJ7waIhSqzCT6aGuWCR8Xoj6n/view',
          technologies: ['Arduino', 'Electronics', '3D Printing'],
          isHovered: false,
          date: '2023-01-18',
          slug: 'darwin-i'
        },
        {
          title: 'VTTC',
          description: 'Vacuum Tube Tesla Coil build inspired by Steve Wards work.',
          image: require('@/assets/vttc.png'),
          liveLink: 'projects/vttc',
          githubLink: '#',
          technologies: ['CAD', 'Safety', 'Electronics', '3D Printing'],
          isHovered: false,
          date: '2021-09-25',
          slug: 'vttc'
        },
        {
          title: 'Drone WIP',
          description: 'Placeholder.',
          image: require('@/assets/wip.png'),
          liveLink: '#',
          githubLink: '#',
          technologies: ['X', 'X', 'X'],
          isHovered: false,
          date: '2021-01-15'
        }, 
        {
          title: 'WIP',
          description: 'Placeholder.',
          image: require('@/assets/wip.png'),
          liveLink: '#',
          githubLink: '#',
          technologies: ['X', 'X', 'X'],
          isHovered: false,
          date: '2020-11-30'
        }
      ]
    };
  },
  computed: {
    // Compute the current project based on the slug from the route
    project() {
      return this.projects.find(p => p.slug === this.slug);
    }
  }
};
</script>

<style scoped>
/* Add styling for the project page */
.project-page {
  padding: 2rem;
  text-align: center;
}

.project-page h1 {
  font-size: 2rem;
  margin-bottom: 1rem;
}

.project-page img {
  max-width: 100%;
  height: auto;
  border-radius: 8px;
  margin-bottom: 1rem;
}

.project-page p {
  font-size: 1rem;
  margin-bottom: 1rem;
}

.tech-stack {
  margin-bottom: 1rem;
}

.tech-tag {
  background: #333;
  color: #fff;
  padding: 0.5rem;
  margin: 0.5rem;
  display: inline-block;
  border-radius: 4px;
}

.btn {
  background-color: #333;
  color: #fff;
  padding: 0.5rem 1rem;
  text-decoration: none;
  border-radius: 4px;
  display: inline-block;
}

.btn:hover {
  background-color: #555;
}
</style>
