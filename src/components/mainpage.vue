<template>
  <div class="portfolio-container">
    <!-- Intro Section -->
    <div class="intro">
      <h1 class="nothing-font">boltythedoge</h1>
      <div class="contact-links">
        <a href="mailto:boltythedoge@gmail.com" class="contact-item">Email</a>
        <a href="https://github.com/BoltyTheDog" class="contact-item">GitHub</a>
        <a href="https://www.linkedin.com/in/david-garcia-cirauqui-8a10542b5/" class="contact-item">LinkedIn</a>
        <a href="https://x.com/Bolty9752485505" class="contact-item">Twitter</a>
      </div>
    </div>

    <!-- Projects Grid -->
    <div class="project-grid">
      <div v-for="(project, index) in projects" 
           :key="index" 
           class="project-card"
           @mouseenter="project.isHovered = true"
           @mouseleave="project.isHovered = false">
        <div class="project-content">
          <img :src="project.image" :alt="project.title">
          <div class="project-overlay" :class="{ 'show': project.isHovered }">
            <h3>{{ project.title }}</h3>
            <p>{{ project.description }}</p>
            <div class="tech-stack">
              <span v-for="tech in project.technologies" 
                    :key="tech" 
                    class="tech-tag">
                {{ tech }}
              </span>
            </div>
            <div class="project-links">
              <a :href="project.liveLink" target="_blank" class="btn">View</a>
              <a :href="project.githubLink" target="_blank" class="btn">Code</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DarkPortfolio',
  data() {
    return {
      projects: [
        {
          title: 'Drone WIP',
          description: 'A brief description of your first project and its key features.',
          image: './assets/project1.jpg',
          liveLink: '#',
          githubLink: '#',
          technologies: ['Vue.js', 'Node.js', 'MongoDB'],
          isHovered: false
        },
        {
          title: 'Pinza GRASS',
          description: 'Description of your second project with its main highlights.',
          image: './assets/project2.jpg',
          liveLink: '#',
          githubLink: '#',
          technologies: ['React', 'Firebase', 'Redux'],
          isHovered: false
        },
        {
          title: 'Drones FPV',
          description: 'Overview of your third project and what makes it special.',
          image: './assets/project3.jpg',
          liveLink: '#',
          githubLink: '#',
          technologies: ['Angular', 'TypeScript', 'AWS'],
          isHovered: false
        },
        {
          title: 'Darwin I',
          description: 'A brief description of your first project and its key features.',
          image: './assets/project1.jpg',
          liveLink: '#',
          githubLink: '#',
          technologies: ['Vue.js', 'Node.js', 'MongoDB'],
          isHovered: false
        }, {
          title: 'VTTC',
          description: 'A brief description of your first project and its key features.',
          image: './assets/project1.jpg',
          liveLink: '#',
          githubLink: '#',
          technologies: ['Vue.js', 'Node.js', 'MongoDB'],
          isHovered: false
        }
      ]
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&display=swap');

.portfolio-container {
  background-color: #000;
  color: #fff;
  min-height: 100vh;
  margin: 0;
  padding: 0;
}

/* Intro Section */
.intro {
  padding: 1rem 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.nothing-font {
  font-family: 'Space Mono', monospace;
  font-size: 2.5rem;
  margin: 0;
  padding: 0;
  font-weight: 700;
  letter-spacing: -0.02em;
}

/* Contact Links */
.contact-links {
  display: flex;
  gap: 1.5rem;
}

.contact-item {
  color: #fff;
  text-decoration: none;
  transition: opacity 0.2s ease;
  font-size: 0.9rem;
  opacity: 0.7;
  font-family: 'Space Mono', monospace;
}

.contact-item:hover {
  opacity: 1;
}

/* Projects Grid */
.project-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1rem;
  padding: 3rem 1rem;
}

.project-card {
  position: relative;
  border-radius: 8px;
  overflow: hidden;
  aspect-ratio: 16/9;
}

.project-content {
  position: relative;
  width: 100%;
  height: 100%;
}

.project-content img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.project-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.9);
  padding: 1rem;
  opacity: 0;
  transition: opacity 0.3s ease;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.project-overlay.show {
  opacity: 1;
}

.project-overlay h3 {
  margin: 0 0 0.5rem 0;
  font-family: 'Space Mono', monospace;
}

.project-overlay p {
  margin: 0 0 0.5rem 0;
  font-size: 0.9rem;
}

.tech-stack {
  margin: 0.5rem 0;
}

.tech-tag {
  background: #333;
  color: #fff;
  padding: 0.2rem 0.5rem;
  border-radius: 12px;
  margin: 0.2rem;
  font-size: 0.7rem;
  display: inline-block;
  font-family: 'Space Mono', monospace;
}

.project-links {
  margin-top: 0.5rem;
  display: flex;
  gap: 0.5rem;
}

.btn {
  background: #fff;
  color: #000;
  padding: 0.3rem 0.8rem;
  border-radius: 4px;
  text-decoration: none;
  transition: all 0.2s ease;
  font-size: 0.9rem;
  font-family: 'Space Mono', monospace;
}

.btn:hover {
  background: #333;
  color: #fff;
}

@media (max-width: 768px) {
  .nothing-font {
    font-size: 2rem;
  }
  
  .contact-links {
    flex-wrap: wrap;
    justify-content: center;
  }
}
</style>