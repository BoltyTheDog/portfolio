<template>
  <div class="portfolio-container">
    <!-- Intro Section -->
    <div class="intro">
      <h1 class="nothing-font">
        <span class="text-container">
          <span class="text-visible" id="animated-title"></span>
        </span>
      </h1>
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
      <div class="section-content">
        <p>
          I am a passionate aerospace engineering student at the <strong>Universitat Politècnica de Catalunya</strong>, specializing in systems engineering. With a strong foundation in <strong>CAD, electronics, and programming</strong>, I have worked on various projects, including autonomous drones, 3D printing, and robotics.
        </p>
        <p>
          I am seasoned in <strong>C++, C# Python, Arduino and MATLAB</strong>, knowledge about <strong>GoLang, JavaScript and C</strong>, and I have hands-on experience with tools like <strong>Fusion 360, SOLIDWORKS, and Blender</strong>. My work spans across <strong>FPV drones, 3D printing, and autonomous systems</strong>, and I am always eager to explore new challenges in technology and engineering.
        </p>
      </div>
    </div>

    <!-- Tools Section -->
    <div class="section">
      <h2 class="section-title">Tools</h2>
      <p class="section-content"> 
          Ni <strong>putisima </strong> idea.
        </p>
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
        src="/kawasaki.glb" 
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
          title: 'Drones FPV',
          description: 'Built, flew and perfectes different kind of FPV Drones.',
          image: require('@/assets/dronecarreras.png'),
          liveLink: '#',
          githubLink: '#',
          technologies: ['3D Printing', 'CAD', 'Electronics'],
          isHovered: false,
          date: '2025-01-10'
        },
        {
          title: 'ArcGIS_TerrorSim',
          description: 'Collision Simulator that uses ArcGIS SDK for my final project in INFOII.',
          image: require('@/assets/terrorsim.png'),
          liveLink: '#',
          githubLink: 'https://github.com/Info1-DanielBryanArnauDavid/ArcGIS_TerrorSim/tree/Final',
          technologies: ['C#', 'GitHub', 'Grit'],
          isHovered: false,
          date: '2024-12-30'
        },
        {
          title: 'Pinza GRASS',
          description: 'Precision linear actuator gripper for the Space Programs Rover GRASS 2024.',
          image: require('@/assets/grass.png'),
          liveLink: '#',
          githubLink: '#',
          technologies: ['Arduino', 'CAD', '3D Printing'],
          isHovered: false,
          date: '2024-06-22'
        },
       
        {
          title: 'Darwin I',
          description: 'Electromechanical prosthetic hand built for under 50€.',
          image: require('@/assets/darwin1.png'),
          liveLink: 'https://drive.google.com/file/d/1Vxdkg0_rJ7waIhSqzCT6aGuWCR8Xoj6n/view',
          githubLink: '#',
          technologies: ['Arduino', 'Electronics', '3D Printing'],
          isHovered: false,
          date: '2023-01-18'
        },
        {
          title: 'VTTC',
          description: 'Vacuum Tube Tesla Coil build inspired by Steve Wards work.',
          image: require('@/assets/vttc.png'),
          liveLink: '#',
          githubLink: '#',
          technologies: ['CAD', 'Safety', 'Electronics', '3D Printing'],
          isHovered: false,
          date: '2021-09-25'
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
  methods: {
    sortByName() {
      this.projects.sort((a, b) => a.title.localeCompare(b.title));
    },
    sortByDate() {
      this.projects.sort((a, b) => new Date(b.date) - new Date(a.date));
    },
    sortRandomly() {
      this.projects.sort(() => Math.random() - 0.5);
    },
    getRandomDelay() {
      return Math.floor(Math.random() * 250) + 50; // Random delay between 50ms and 200ms
    },
    animateTitle() {
      const titleElement = document.getElementById('animated-title');
      const texts = ["boltythedoge.", "David G.C."];
      let index = 0;

      const typeAndUntype = () => {
        const currentText = texts[index];
        let i = 0;

        const type = () => {
          if (i < currentText.length) {
            titleElement.textContent = currentText.substring(0, i + 1);
            i++;
            setTimeout(type, this.getRandomDelay()); // Random delay for typing
          } else {
            setTimeout(untype, 2000); // Wait 2 seconds before untyping
          }
        };

        const untype = () => {
          if (i > 0) {
            titleElement.textContent = currentText.substring(0, i - 1);
            i--;
            setTimeout(untype, 30); // Fixed delay for untyping
          } else {
            index = (index + 1) % texts.length;
            setTimeout(typeAndUntype, 100); // Wait 1 second before starting next cycle
          }
        };

        type();
      };

      typeAndUntype();
    }
  },
  mounted() {
    this.animateTitle();
  },
};
</script>


<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&display=swap');

.text-container {
  position: relative;
  display: inline-block;
  overflow: hidden;
  width: 100%; /* Ensure the container takes full width */
  height: 100%; /* Remove fixed height to prevent cutting */
}


/* Typing and Untyping Animation */
@keyframes typing {
  from { width: 100%; }
  to { width: 100%; }
}

@keyframes untyping {
  from { width: 100%; }
  to { width: 100%; }
}

.text-visible {
  display: inline-block;
  overflow: hidden;
  white-space: nowrap;
  animation: typing 2s steps(40, end), untyping 2s steps(40, end) 4s;
}

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


.nothing-font::after {
  content: '.';
  position: absolute;
  right: -0.5rem;
  bottom: 0.3rem;
  font-size: 3rem;
  color: #ff0;
  opacity: 0;
  z-index: 2;
}
/* Apply the vertical sweep animation */
.nothing-font::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    transparent 0%,
    rgba(255, 255, 0, 0.8) 50%,
    transparent 100%
  );
  transform-origin: right;
  transform: scaleX(0);
  z-index: 3; /* Ensure the ripple is above the text */
}

.nothing-font {
  font-family: 'Space Mono', monospace;
  font-size: 3rem;
  margin: 0;
  padding: 0.1rem;
  font-weight: 700;
  letter-spacing: -0.02em;
  position: relative;
  overflow: hidden; /* Contains the ripple */
  white-space: nowrap;
  animation: fadeToYellow 2s ease-out forwards;
  z-index: 1; /* Ensure the text is above the ripple */
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3); /* Add drop shadow */
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
  font-family: 'Space Mono', monospace;
  font-size: 1.2rem;
  line-height: 1.6;

}
/* Project Card */
.project-card {
  position: relative;
  border-radius: 8px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  width: 100%; /* Ensure the card takes up the full width of its container */
  max-width: 400px; /* Optional: Limit the maximum width */
  height: 300px; /* Set a fixed height for the card */
  transition: transform 0.3s ease;
  background: rgba(255, 255, 255, 0.01); /* Optional: Add a subtle background */
}
/* Ensure the image fits within the card */
.project-content img {
  max-width: 90%; /* Ensure the image doesn't exceed the card's width */
  max-height: 90%; /* Ensure the image doesn't exceed the card's height */
  object-fit: contain;
  margin-top: 0.5rem;
  transition: filter 0.3s ease;
}

/* White Radial Blur Effect */
.project-content::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 150%;
  height: 150%;
  background: radial-gradient(circle, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0) 70%);
  transform: translate(-50%, -50%);
  z-index: -1; /* Place it behind the image */
  filter: blur(10px); /* Add blur effect */
}

/* Project Overlay */
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
  z-index: 2; /* Ensure the overlay is above the image and blur */
  overflow: hidden;
}

/* Show overlay on hover */
.project-card:hover .project-overlay {
  opacity: 1;
}

/* Adjust the project grid for responsiveness */
.project-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
  padding: 1rem;
  position: relative;
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
  font-family: 'Space Mono', monospace;
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
  .project-card {
    height: 250px;
    max-width: 100%;
  }
  .intro {
    height: auto;
    padding: 1rem;
    text-align: center;
    background-size: cover;
  }
  .project-grid {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  }

  .project-content img {
    max-width: 100%;
    max-height: 250px;
    margin: 0 auto;
  }


  .nothing-font {
    font-size: 2rem;
  }
  .contact-links {
    flex-wrap: wrap;
    justify-content: center;
  }
  .project-overlay {
    padding: 0.5rem;
  }
  .section {
    padding: 1rem;
  }

  .sort-buttons {
    flex-direction: column;
    gap: 0.5rem;
    align-items: center;
  }

  .section-title {
    font-size: 2rem;
    text-align: center;
  }
}
@media (max-width: 576px) {
  .project-grid {
    grid-template-columns: 1fr;
  }

  .project-card {
    margin: 0 auto;
  }
  .section-content {
    font-size: 1rem;
    line-height: 1.5;
  }

  .tech-tag {
    font-size: 0.8rem;
  }
}

</style>