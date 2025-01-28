<template>
  <div class="project-page">
    <!-- Main content container -->
    <div class="content-container">
      <!-- Display the project title -->
      <h1>{{ project.title }}</h1>

      <!-- Display the project image -->
      <img :src="project.image" :alt="project.title" />

      <!-- Display project description -->
      <p class="description">{{ project.description }}</p>

      <!-- Display additional project details -->
      <div class="additional-info">
        <div class="info-item">
          <strong>Technologies Used:</strong>
          <div class="tech-stack">
            <span v-for="tech in project.technologies" :key="tech" class="tech-tag">
              {{ tech }}
            </span>
          </div>
        </div>

        <div class="info-item">
          <strong>Project Date:</strong>
          <p>{{ project.date }}</p>
        </div>

        <!-- Placeholder for additional sections -->
        <div class="info-item placeholder">
          <strong>Additional Section 1:</strong>
          <p>This section can be used to add more information about the project.</p>
        </div>

        <div class="info-item placeholder">
          <strong>Additional Section 2:</strong>
          <p>This section can also be used to provide more project details or media.</p>
        </div>

        <div class="info-item">
          <strong>Live Link:</strong>
          <a :href="project.liveLink" target="_blank" class="btn" v-if="project.liveLink !== '#'">View Project</a>
        </div>

        <div class="info-item">
          <strong>GitHub Repository:</strong>
          <a :href="project.githubLink" target="_blank" class="btn" v-if="project.githubLink !== '#'">View Code</a>
        </div>
      </div>
    </div>
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
          liveLink: '/projects/drones-fpv',
          githubLink: '#',
          technologies: ['3D Printing', 'CAD', 'Electronics'],
          date: '2025-01-10',
          slug: 'drones-fpv'
        },
        {
          title: 'ArcGIS_TerrorSim',
          description: 'Collision Simulator that uses ArcGIS SDK for my final project in INFOII.',
          image: require('@/assets/terrorsim.png'),
          liveLink: '/projects/arcgis-terrorsim',
          githubLink: 'https://github.com/Info1-DanielBryanArnauDavid/ArcGIS_TerrorSim/tree/Final',
          technologies: ['C#', 'GitHub', 'Grit'],
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
          date: '2021-01-15',
          slug: 'drone-wip'
        },
        {
          title: 'WIP',
          description: 'Placeholder.',
          image: require('@/assets/wip.png'),
          liveLink: '#',
          githubLink: '#',
          technologies: ['X', 'X', 'X'],
          date: '2020-11-30',
          slug: 'wip'
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
@import url('https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&display=swap');

/* Base styles */
.project-page {
  padding: 3rem;
  background: linear-gradient(to bottom right, #FFEB3B, #FF9800); /* Gradient background */
  color: #fff;
  font-family: 'Space Mono', monospace;
  max-width: 1000px;
  margin: auto;
  border-radius: 10px;
}

.content-container {
  max-width: 900px;
  margin: auto;
  padding: 2rem;
  background: rgba(0, 0, 0, 0.6); /* Dark overlay background */
  border-radius: 10px;
}

h1 {
  font-size: 3rem;
  color: #FFEB3B; /* Bright yellow for the title */
  text-align: left;
  margin-bottom: 1.5rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5); /* Soft shadow effect */
}

.project-page img {
  width: 100%;
  max-width: 1000px;
  height: auto;
  border-radius: 8px;
  margin-bottom: 2rem;
}

.description {
  font-size: 1.2rem;
  color: #f1f1f1;
  margin-bottom: 2rem;
}

.additional-info {
  background-color: #333; /* Dark background for the info section */
  padding: 1.5rem;
  border-radius: 8px;
  margin-top: 1rem;
}

.info-item {
  margin-bottom: 2rem;
}

.info-item strong {
  font-size: 1.1rem;
  display: block;
  margin-bottom: 0.5rem;
}

.tech-stack {
  margin-top: 0.5rem;
}

.tech-tag {
  background-color: #444;
  color: #fff;
  padding: 0.5rem 1rem;
  margin: 0.5rem;
  display: inline-block;
  border-radius: 5px;
}

.btn {
  background-color: #FF9800;
  color: #fff;
  padding: 0.75rem 1.5rem;
  text-decoration: none;
  border-radius: 4px;
  display: inline-block;
  margin-top: 0.5rem;
  text-align: center;
}

.btn:hover {
  background-color: #FF5722;
}

.placeholder {
  background: #444;
  padding: 1rem;
  border-radius: 8px;
  margin-top: 1rem;
}

.placeholder p {
  font-size: 1rem;
  color: #ccc;
}
</style>