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

    <!-- Introduction Section -->
    <div class="section">
      <h2 class="section-title">Introduction</h2>
      <p class="section-content">This is where you can introduce yourself and explain what you do.</p>
    </div>

    <!-- Tools Section -->
    <div class="section">
      <h2 class="section-title">Tools</h2>
      <p class="section-content">Here you can list the tools and technologies you are familiar with.</p>
    </div>

    <!-- Projects Section -->
    <div class="section">
    <div class="section-header">
      <h2 class="section-title">Projects</h2>
      <div class="sort-buttons">
        <button @click="sortByName">Sort by Name</button>
        <button @click="sortByDate">Sort by Date</button>
        <button @click="sortRandomly">Sort Randomly</button>
      </div>
    </div>
    <!-- Use transition-group for smooth animations -->
    <transition-group name="project-list" tag="div" class="project-grid">
      <div v-for="project in projects" 
          :key="project.title" 
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
    </transition-group>
  </div>

    <!-- 3D Model Viewer Section -->
    <div class="section">
      <h2 class="section-title">3D Model Viewer</h2>
      <model-viewer 
        src="/patitos.glb" 
        alt="A 3D model of patitos" 
        ar 
        auto-rotate 
        camera-controls 
        style="width: 100%; height: 500px;">
      </model-viewer>
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
          image: require('@/assets/project1.png'),
          liveLink: '#',
          githubLink: '#',
          technologies: ['Vue.js', 'Node.js', 'MongoDB'],
          isHovered: false,
          date: '2023-01-15'
        },
        {
          title: 'Pinza GRASS',
          description: 'Description of your second project with its main highlights.',
          image: require('@/assets/project2.png'),
          liveLink: '#',
          githubLink: '#',
          technologies: ['React', 'Firebase', 'Redux'],
          isHovered: false,
          date: '2023-03-22'
        },
        {
          title: 'Drones FPV',
          description: 'Overview of your third project and what makes it special.',
          image: require('@/assets/project3.png'),
          liveLink: '#',
          githubLink: '#',
          technologies: ['Angular', 'TypeScript', 'AWS'],
          isHovered: false,
          date: '2023-05-10'
        },
        {
          title: 'Darwin I',
          description: 'A brief description of your first project and its key features.',
          image: require('@/assets/project4.png'),
          liveLink: '#',
          githubLink: '#',
          technologies: ['Vue.js', 'Node.js', 'MongoDB'],
          isHovered: false,
          date: '2023-07-18'
        },
        {
          title: 'VTTC',
          description: 'A brief description of your first project and its key features.',
          image: require('@/assets/project5.png'),
          liveLink: '#',
          githubLink: '#',
          technologies: ['Vue.js', 'Node.js', 'MongoDB'],
          isHovered: false,
          date: '2023-09-25'
        },
        {
          title: 'WIP',
          description: 'Description of your second project with its main highlights.',
          image: require('@/assets/project6.png'),
          liveLink: '#',
          githubLink: '#',
          technologies: ['React', 'Firebase', 'Redux'],
          isHovered: false,
          date: '2023-11-30'
        }
      ]
    }
  },
  methods: {
    sortByName() {
      this.projects.sort((a, b) => a.title.localeCompare(b.title));
    },
    sortByDate() {
      this.projects.sort((a, b) => new Date(a.date) - new Date(b.date));
    },
    sortRandomly() {
      this.projects.sort(() => Math.random() - 0.5);
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&display=swap');

/* Sorting Buttons */
.sort-buttons {
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
  margin-top: 0.4rem;
}
/* Color fade-in animation */
@keyframes fadeToYellow {
  0% {
    color: #fff;
  }
  40%{
    color: #fff;
  }
  100% {
    color: #ff0; /* Yellow color */
  }
}

/* Update the dot appearance animation */
.nothing-font::after {
  content: '.';
  position: absolute;
  right: -0.5rem;
  bottom: 0.2rem;
  font-size: 3rem;
  color: #ff0;
  opacity: 0;
  animation: dotAppear 0.1s forwards;
  animation-delay: 2s;
  z-index: 2;
}

/* Update ripple wave effect container */
.nothing-font::before {
  content: '';
  position: absolute;
  right: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, 
    transparent 0%,
    rgba(255, 255, 0, 0.3) 50%,
    transparent 100%
  );
  transform-origin: right;
  transform: scaleX(0);
  animation: rippleWave 0.5s cubic-bezier(0.2, 0, 0.1, 1) forwards;
  animation-delay: 2s; /* Start exactly when dot appears */
  z-index: 1;
}

/* Update ripple wave animation */
@keyframes rippleWave {
  0% {
    transform: scaleX(0) translateX(0);
    opacity: 0.8;
  }
  100% {
    transform: scaleX(1) translateX(-100%);
    opacity: 0;
  }
}

/* Update the title container to ensure proper overflow handling */
.nothing-font {
  font-family: 'Space Mono', monospace;
  font-size: 3rem;
  margin: 0;
  padding: 0.5rem;
  font-weight: 700;
  letter-spacing: -0.02em;
  position: relative;
  overflow: hidden; /* Contains the ripple */
  white-space: nowrap;
  animation: fadeToYellow 2s ease-out forwards;
  line-height: 1;
}

/* Abrupt dot appearance */
@keyframes dotAppear {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

/* Ripple effect animation on the text */
@keyframes rippleEffect {
  0% {
    transform: scale(0) translateX(100%);
    opacity: 1;
  }
  50% {
    transform: scale(1) translateX(0);
    opacity: 1;
  }
  100% {
    transform: scale(3) translateX(-100%);
    opacity: 0;
  }
}

/* Apply the animation to sections */
.intro, .section {
  animation: fadeInUp 1s ease-out forwards;
}
/* Section Header */
.section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem; /* Reduced from 1.5rem to 0.5rem */
}

/* Projects Grid */
.project-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
  padding: 1rem 1rem; /* Reduced padding-top from 3rem to 1rem */
  position: relative;
}

/* Section Title */
.section-title {
  font-family: 'Space Mono', monospace;
  font-size: 2.5rem;
  margin: 0;
  text-align: left;
}
/* Sorting Buttons */
.sort-buttons {
  display: flex;
  gap: 0.8rem;
}

.sort-buttons button {
  background: #333;
  color: #fff;
  padding: 0.4rem 0.8rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-family: 'Space Mono', monospace;
  font-size: 0.9rem;
  transition: background 0.2s ease;
}

.sort-buttons button:hover {
  background: #555;
}

/* Project List Animations */
.project-list-move {
  transition: transform 0.5s ease;
}

.project-list-enter-active,
.project-list-leave-active {
  transition: opacity 0.5s ease, transform 0.5s ease;
}

.project-list-enter-from,
.project-list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}

.project-list-leave-active {
  position: absolute;
}

/* Rest of the CSS */
.portfolio-container {
  background-color: #000;
  color: #fff;
  min-height: 100vh;
  margin: 0;
  padding: 0;
}

@keyframes fadeInUp {
  0% {
    opacity: 0;
    transform: translateY(50px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.intro, .section {
  animation: fadeInUp 1s ease-out forwards;
}

.intro {
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
  border-bottom: 2px solid rgba(255, 255, 255, 0.1);
  background: url('@/assets/header.jpeg') no-repeat center center;
  background-size: cover;
  height: 120px;
  position: relative;
  z-index: 0;
}

.nothing-font {
  font-family: 'Space Mono', monospace;
  font-size: 3rem;
  margin: 0;
  padding: 0.5rem;
  font-weight: 700;
  letter-spacing: -0.02em;
  position: relative;
  overflow: hidden;
  white-space: nowrap;
  animation: fadeToYellow 2s ease-out forwards;
  line-height: 1;
}

.contact-links {
  display: flex;
  flex-direction: row;
  left: 0.8rem;
  gap: 1.5rem;
  position: relative;
  z-index: 1;
}

.contact-item {
  color: #fff;
  text-decoration: none;
  transition: opacity 0.2s ease;
  font-size: 1rem;
  opacity: 0.8;
  font-family: 'Space Mono', monospace;
}

.contact-item:hover {
  opacity: 1;
}

.section {
  padding: 1.5rem 2rem;
  border-bottom: 2px solid rgba(255, 255, 255, 0.1);
  animation-delay: 0.3s;
}

.section-title {
  font-family: 'Space Mono', monospace;
  font-size: 2.5rem;
  margin: 0;
  text-align: left;
}

.section-content {
  font-size: 1.2rem;
  line-height: 1.6;
}


.project-card {
  position: relative;
  border-radius: 8px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  aspect-ratio: 16 / 9;
  min-width: 300px;
  max-width: 400px;
  height: auto;
  transition: transform 0.3s ease;
}

.project-card:hover .project-content img {
  filter: blur(4px);
}

.project-content {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: transform 0.3s ease;
}

.project-content img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: filter 0.3s ease;
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
  z-index: 1;
  overflow: hidden;
}

.project-card:hover .project-overlay {
  opacity: 1;
}

.project-overlay h3,
.project-overlay p {
  margin: 0.5rem 0;
}

.project-overlay h3 {
  font-family: 'Space Mono', monospace;
}

.project-overlay p {
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
  .project-grid {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  }

  .nothing-font {
    font-size: 2rem;
  }

  .contact-links {
    flex-wrap: wrap;
    justify-content: center;
  }
}
</style>