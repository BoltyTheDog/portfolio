<template>
  <div class="project-page">
    <div class="gradient-background"></div>
    
    <!-- Back button -->
    <router-link to="/" class="back-button">
      <span class="arrow">←</span> Back to Projects
    </router-link>

    <div class="content-container">
      <!-- Hero section -->
      <div class="hero-section">
        <h1 class="project-title">{{ project.title }}</h1>
        <div class="project-metadata">
          <div class="date">{{ formatDate(project.date) }}</div>
          <div class="tech-stack">
            <span v-for="tech in project.technologies" 
                  :key="tech" 
                  class="tech-tag">
              {{ tech }}
            </span>
          </div>
        </div>
      </div>

      <!-- Main layout with side-by-side content -->
      <div class="main-content">
        <!-- Image section -->
        <div class="image-container">
          <img :src="project.image" :alt="project.title" class="project-image" />
        </div>

        <!-- Content section -->
        <div class="project-content">
          <div class="description-section">
            <h2>Overview</h2>
            <p class="description">{{ project.description }}</p>
          </div>

          <div class="details-section">
            <div class="detail-card">
              <h3>Technical Details</h3>
              <ul>
                <li v-for="tech in project.technologies" :key="tech">
                  {{ tech }}
                </li>
              </ul>
            </div>

            <div class="detail-card">
              <h3>Key Features</h3>
              <p>Project highlights and achievements will be displayed here.</p>
            </div>
          </div>

          <!-- Links section -->
          <div class="links-section">
            <a v-if="project.githubLink !== '#'" 
               :href="project.githubLink" 
               target="_blank" 
               class="action-button github">
              View on GitHub
            </a>
            <a v-if="project.liveLink !== '#'" 
               :href="project.liveLink" 
               target="_blank" 
               class="action-button live">
              Live Demo
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProjectPage',
  props: ['slug'],
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
          isHovered: false,
          date: '2025-01-10',
          slug: "drones-fpv"
        },
        {
          title: 'ArcGIS_TerrorSim',
          description: 'Collision Simulator that uses ArcGIS SDK for my final project in INFOII.',
          image: require('@/assets/terrorsim.png'),
          liveLink: '/projects/arcgis-terrorsim',
          githubLink: 'https://github.com/Info1-DanielBryanArnauDavid/ArcGIS_TerrorSim/tree/Final',
          technologies: ['C#', 'GitHub', 'Grit'],
          isHovered: false,
          date: '2024-12-30',
          slug: "arcgis-terrorsim"
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
          slug: "pinza-grass"
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
          slug: "darwin-i"
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
          slug: "vttc"
        },
        {
          title: 'Drone WIP',
          description: 'Placeholder.',
          image: require('@/assets/wip.png'),
          liveLink: '#',
          githubLink: '#',
          technologies: ['X', 'X', 'X'],
          isHovered: false,
          date: '2021-01-15',
          slug: "drone-wip"
        }, 
        {
          title: 'WIP',
          description: 'Placeholder.',
          image: require('@/assets/wip.png'),
          liveLink: '#',
          githubLink: '#',
          technologies: ['X', 'X', 'X'],
          isHovered: false,
          date: '2020-11-30',
          slug: "wip"
        }
      ]
    };
  },
  computed: {
    project() {
      return this.projects.find(p => p.slug === this.slug) || {};
    }
  },
  methods: {
    formatDate(dateString) {
      return new Date(dateString).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long'
      });
    }
  }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&display=swap');

.project-page {
  min-height: 100vh;
  position: relative;
  color: #fff;
  font-family: 'Space Mono', monospace;
  overflow-x: hidden;
}

.gradient-background {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    135deg,
    #000000,
    #1a1a1a 25%,
    #333333 50%,
    #1a1a1a 75%,
    #000000
  );
  z-index: -1;
}

.back-button {
  position: fixed;
  top: 2rem;
  left: 2rem;
  color: #fff;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 2rem;
  transition: all 0.3s ease;
  z-index: 10;
}

.back-button:hover {
  background: rgba(255, 255, 255, 0.2);
  transform: translateX(-5px);
}

.content-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 6rem 2rem 2rem;
}

.hero-section {
  text-align: center;
  margin-bottom: 4rem;
}

.project-title {
  font-size: 4rem;
  margin: 0;
  background: linear-gradient(45deg, #ff6b6b, #ffd93d);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 4px 4px 8px rgba(0, 0, 0, 0.3);
}

.project-metadata {
  margin-top: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  flex-wrap: wrap;
}

.date {
  font-size: 1.1rem;
  opacity: 0.8;
}

.tech-stack {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  justify-content: center;
}

.tech-tag {
  padding: 0.5rem 1rem;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(5px);
  border-radius: 2rem;
  font-size: 0.9rem;
}

/* Main layout container */
.main-content {
  display: grid;
  grid-template-columns: minmax(300px, 40%) 1fr;
  gap: 3rem;
  margin-top: 2rem;
}

/* Image container styles */
.image-container {
  position: sticky;
  top: 6rem;
  height: fit-content;
  margin: 0;
  border-radius: 1rem;
  overflow: hidden;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  padding: 1rem;
}

.project-image {
  width: 100%;
  height: auto;
  border-radius: 0.5rem;
  transition: transform 0.3s ease;
}

.project-image:hover {
  transform: scale(1.02);
}

.project-content {
  margin-top: 0;
}

.description-section {
  margin-bottom: 3rem;
}

.description-section h2 {
  font-size: 2rem;
  margin-bottom: 1rem;
  color: #ffd93d;
}

.description {
  font-size: 1.2rem;
  line-height: 1.8;
  opacity: 0.9;
}

.details-section {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin: 3rem 0;
}

.detail-card {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  padding: 2rem;
  border-radius: 1rem;
  transition: transform 0.3s ease;
}

.detail-card:hover {
  transform: translateY(-5px);
}

.detail-card h3 {
  color: #ffd93d;
  margin-bottom: 1rem;
}

.detail-card ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.detail-card li {
  margin-bottom: 0.5rem;
  opacity: 0.9;
}

.links-section {
  display: flex;
  justify-content: flex-start;
  gap: 2rem;
  margin-top: 4rem;
}

.action-button {
  padding: 1rem 2rem;
  border-radius: 2rem;
  text-decoration: none;
  color: #fff;
  font-weight: bold;
  transition: all 0.3s ease;
}

.github {
  background: linear-gradient(45deg, #333, #666);
}

.live {
  background: linear-gradient(45deg, #ff6b6b, #ffd93d);
}

.action-button:hover {
  transform: translateY(-3px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
}

@media (max-width: 1024px) {
  .main-content {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .image-container {
    position: relative;
    top: 0;
  }

  .links-section {
    justify-content: center;
  }
}

@media (max-width: 768px) {
  .project-title {
    font-size: 2.5rem;
  }
  
  .content-container {
    padding: 4rem 1rem 1rem;
  }
  
  .back-button {
    top: 1rem;
    left: 1rem;
  }
  
  .links-section {
    flex-direction: column;
    align-items: stretch;
  }
  
  .action-button {
    width: 100%;
    text-align: center;
  }

  .tech-stack {
    justify-content: center;
  }
}
</style>