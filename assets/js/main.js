// --- Neural Network / Particle Simulation Effect ---
        const canvas = document.getElementById('neural-network-canvas'); const ctx = canvas.getContext('2d'); let animationFrameId; let particles = []; const particleCount = 100; const maxDistance = 120; let mouse = { x: null, y: null, radius: 150 }; function resizeCanvas() { canvas.width = window.innerWidth; canvas.height = window.innerHeight; } resizeCanvas(); window.addEventListener('resize', () => { cancelAnimationFrame(animationFrameId); resizeCanvas(); initParticles(); animateParticles(); }); window.addEventListener('mousemove', (event) => { mouse.x = event.clientX; mouse.y = event.clientY; }); window.addEventListener('mouseout', () => { mouse.x = null; mouse.y = null; }); class Particle { constructor() { this.x = Math.random() * canvas.width; this.y = Math.random() * canvas.height; this.size = Math.random() * 2 + 1; this.speedX = Math.random() * 1 - 0.5; this.speedY = Math.random() * 1 - 0.5; this.randomColor = Math.random(); } update() { if (this.x > canvas.width || this.x < 0) this.speedX = -this.speedX; if (this.y > canvas.height || this.y < 0) this.speedY = -this.speedY; this.x += this.speedX; this.y += this.speedY; if (mouse.x != null && mouse.y != null) { const dx = mouse.x - this.x; const dy = mouse.y - this.y; const distance = Math.sqrt(dx * dx + dy * dy); if (distance < mouse.radius) { const forceDirectionX = dx / distance; const forceDirectionY = dy / distance; const force = (mouse.radius - distance) / mouse.radius; const directionX = forceDirectionX * force * 0.5; const directionY = forceDirectionY * force * 0.5; this.x -= directionX; this.y -= directionY; } } } draw() { const hue = this.randomColor * 60 + 180; ctx.fillStyle = `hsl(${hue}, 100%, 70%)`; ctx.beginPath(); ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2); ctx.closePath(); ctx.fill(); } } function initParticles() { particles = []; for (let i = 0; i < particleCount; i++) { particles.push(new Particle()); } } initParticles(); function connectParticles() { let opacityValue = 1; for (let a = 0; a < particles.length; a++) { for (let b = a; b < particles.length; b++) { const dx = particles[a].x - particles[b].x; const dy = particles[a].y - particles[b].y; const distance = Math.sqrt(dx * dx + dy * dy); if (distance < maxDistance) { opacityValue = 1 - (distance / maxDistance); const hue = particles[a].randomColor * 60 + 180; ctx.strokeStyle = `hsla(${hue}, 100%, 70%, ${opacityValue})`; ctx.lineWidth = 1; ctx.beginPath(); ctx.moveTo(particles[a].x, particles[a].y); ctx.lineTo(particles[b].x, particles[b].y); ctx.stroke(); } } } } function animateParticles() { ctx.clearRect(0, 0, canvas.width, canvas.height); for (let i = 0; i < particles.length; i++) { particles[i].update(); particles[i].draw(); } connectParticles(); animationFrameId = requestAnimationFrame(animateParticles); } animateParticles();
        
        // --- Animaciones de ADN ---
        function createDNAAnimation(containerId) { const container = document.getElementById(containerId); if (!container) return; const numStrands = 3; for (let i = 0; i < numStrands; i++) { const strand = document.createElement('div'); strand.className = 'dna-strand'; strand.style.left = `${Math.random() * 100}%`; strand.style.animationDelay = `${Math.random() * 15}s`; strand.style.animationDuration = `${Math.random() * 10 + 15}s`; const numNodes = Math.floor(Math.random() * 5) + 5; for (let j = 0; j < numNodes; j++) { const node = document.createElement('div'); node.className = 'dna-node'; node.style.top = `${Math.random() * 80 + 10}%`; node.style.left = `${Math.random() * 40 - 20}px`; node.style.animation = `dna-node-pulse ${Math.random() * 2 + 1}s infinite alternate`; node.style.animationDelay = `${Math.random() * 2}s`; strand.appendChild(node); } container.appendChild(strand); } } const styleSheet = document.createElement("style"); styleSheet.type = "text/css"; styleSheet.innerText = `@keyframes dna-node-pulse { from { transform: scale(0.8); opacity: 0.7; } to { transform: scale(1.2); opacity: 1; } }`; document.head.appendChild(styleSheet);
        
        // --- Typing Effect (Corregido) ---
        function typeEffect(element, text, speed, callback) {
            let i = 0;
            element.innerHTML = "";
            element.classList.add('typing');
            let typingInterval = setInterval(() => {
                if (i < text.length) {
                    element.innerHTML += text.charAt(i);
                    i++;
                } else {
                    clearInterval(typingInterval);
                    element.classList.remove('typing');
                    if (callback) callback();
                }
            }, speed);
        }
        const heroTitle = document.getElementById('hero-title');
        const heroSubtitle = document.getElementById('hero-subtitle');
        const titleText = "CESAR MANZO";
        const subtitleText = "Navegando la Sinergia de Bioinformática, IA y Robótica. Construyendo el Futuro de la Salud Digital.";
        
        window.addEventListener('load', () => { 
            setTimeout(() => { 
                typeEffect(heroTitle, titleText, 150, () => { 
                    setTimeout(() => { 
                        typeEffect(heroSubtitle, subtitleText, 30); 
                    }, 300); 
                }); 
                activateVisibleSections(); 
                createDNAAnimation('dna-about'); 
                createDNAAnimation('dna-tools'); 
                createDNAAnimation('dna-github'); 
                createDNAAnimation('dna-projects'); 
                createDNAAnimation('dna-portfolio');
                fetchGitHubRepos();
            }, 500); 
        });
        
        // --- Scroll Reveal Effect ---
        const sections = document.querySelectorAll('.content-section'); const observerOptions = { root: null, rootMargin: '0px', threshold: 0.15 }; const observer = new IntersectionObserver((entries, observer) => { entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('is-visible'); } }); }, observerOptions); sections.forEach(section => { observer.observe(section); }); function activateVisibleSections() { if (!('IntersectionObserver' in window)) { sections.forEach(function(section) { var position = section.getBoundingClientRect(); if(position.top < window.innerHeight * 0.8 && position.bottom >= 0) { section.classList.add('is-visible'); } }); } } document.addEventListener('scroll', activateVisibleSections);

        // ******** CÓDIGO PARA EL MENÚ OVERLAY CORREGIDO ********
        document.addEventListener('DOMContentLoaded', () => {
            const menuToggle = document.getElementById('menu-toggle');
            const navOverlay = document.getElementById('nav-overlay');
            const closeMenuButton = document.getElementById('close-menu');
            const body = document.body;

            function closeMenu() {
                if (navOverlay.classList.contains('open')) {
                    navOverlay.classList.remove('open');
                    menuToggle.classList.remove('active');
                    if (document.querySelectorAll('.modal-overlay.open, #immersive-overlay.open').length === 0) {
                        body.classList.remove('menu-open');
                    }
                }
            }
            function openMenu() {
                if (!navOverlay.classList.contains('open')) {
                    navOverlay.classList.add('open');
                    menuToggle.classList.add('active');
                    body.classList.add('menu-open');
                }
            }

            if (menuToggle && navOverlay && closeMenuButton) {
                menuToggle.addEventListener('click', (event) => {
                    event.stopPropagation();
                    if (navOverlay.classList.contains('open')) {
                        closeMenu();
                    } else {
                        openMenu();
                    }
                });
                closeMenuButton.addEventListener('click', (event) => {
                     event.stopPropagation();
                     closeMenu();
                });
                navOverlay.querySelectorAll('a').forEach(link => {
                    link.addEventListener('click', closeMenu);
                });
                navOverlay.addEventListener('click', (event) => {
                    if (event.target === navOverlay) {
                        closeMenu();
                    }
                });
            }
        });
        
        // --- (ACTUALIZADO) CÓDIGO PARA MODALES Y NAVEGACIÓN INMERSIVA ---
        document.addEventListener('DOMContentLoaded', () => {
            const courseCards = document.querySelectorAll('.course-card');
            const immersiveOverlay = document.getElementById('immersive-overlay');
            const immersiveCloseBtn = document.getElementById('immersive-close-btn');
            const body = document.body;

            const courseTitleEl = document.getElementById('immersive-course-title');
            const courseInstitutionEl = document.getElementById('immersive-course-institution');
            const temarioListEl = document.getElementById('immersive-temario-list');
            const contentDisplayEl = document.getElementById('immersive-content-display');

            courseCards.forEach(card => {
                card.addEventListener('click', () => {
                    const targetModalSelector = card.dataset.modalTarget;
                    const sourceModal = document.querySelector(targetModalSelector);
                    if (sourceModal) {
                        openImmersiveView(sourceModal);
                    }
                });
            });

            function openImmersiveView(source) {
                // 1. Extraer datos del modal original
                const title = source.querySelector('h4').textContent;
                const institution = source.querySelector('.modal-institution').textContent;
                const topics = source.querySelectorAll('.topic-details');

                // 2. Poblar el sidebar inmersivo
                courseTitleEl.textContent = title;
                courseInstitutionEl.textContent = institution;
                temarioListEl.innerHTML = ''; // Limpiar lista anterior

                topics.forEach((topic, index) => {
                    const summary = topic.querySelector('.topic-summary').textContent;
                    const li = document.createElement('li');
                    li.textContent = summary;
                    li.dataset.topicIndex = index;
                    temarioListEl.appendChild(li);
                });
                
                // 3. Limpiar contenido principal y añadir evento a los nuevos items
                contentDisplayEl.innerHTML = '<p>Seleccione un tema del panel izquierdo para ver su contenido.</p>';
                addTopicClickListeners(topics);

                // 4. Mostrar el overlay
                immersiveOverlay.classList.add('open');
                body.classList.add('menu-open');
            }

            function addTopicClickListeners(topics) {
                temarioListEl.querySelectorAll('li').forEach(li => {
                    li.addEventListener('click', (e) => {
                        // Resaltar item activo
                        temarioListEl.querySelector('li.active')?.classList.remove('active');
                        e.currentTarget.classList.add('active');
                        
                        // Mostrar contenido
                        const topicIndex = parseInt(e.currentTarget.dataset.topicIndex);
                        const topicContent = topics[topicIndex].querySelector('.topic-content');
                        
                        if (topicContent) {
                            contentDisplayEl.innerHTML = topicContent.innerHTML;
                        } else {
                            contentDisplayEl.innerHTML = '<p>No hay contenido disponible para este tema.</p>';
                        }
                    });
                });
            }

            function closeImmersiveView() {
                immersiveOverlay.classList.remove('open');
                 if (document.querySelectorAll('.modal-overlay.open, #nav-overlay.open').length === 0) {
                    body.classList.remove('menu-open');
                }
            }

            if (immersiveCloseBtn) {
                immersiveCloseBtn.addEventListener('click', closeImmersiveView);
            }
        });

        // --- Actualizar Dashboard (simulado) y Redes Sociales ---
        function updateDashboardAndSocials() { const dataProcItem = document.querySelector('.dashboard-items-container .dashboard-item'); if (dataProcItem) { const dataProcValue = dataProcItem.querySelector('.dashboard-value'); const dataProcBar = dataProcItem.querySelector('.dashboard-progress-bar'); if (dataProcValue && dataProcBar) { let currentProcessing = parseFloat(dataProcBar.style.width) || 87; let newDataProcessing = Math.min(100, Math.max(75, currentProcessing + (Math.random() * 4 - 2))); dataProcValue.innerHTML = `${newDataProcessing.toFixed(1)}<span style="color:var(--text-muted);">%</span>`; dataProcBar.style.width = `${newDataProcessing}%`; } } const socialStats = { github: document.getElementById('github-stats'), linkedin: document.getElementById('linkedin-stats'), facebook: document.getElementById('facebook-stats'), twitter: document.getElementById('twitter-stats'), researchgate: document.getElementById('researchgate-stats') }; for (const platform in socialStats) { if (socialStats[platform]) { let currentValue = parseInt(socialStats[platform].textContent) || 0; let change = Math.floor(Math.random() * 7) - 3; let newValue = Math.max(0, currentValue + change); socialStats[platform].textContent = newValue; const trendIcon = socialStats[platform].nextElementSibling; if (trendIcon && trendIcon.classList.contains('trend')) { if (change > 0) { trendIcon.className = 'trend up'; trendIcon.textContent = '▲'; } else if (change < 0) { trendIcon.className = 'trend down'; trendIcon.textContent = '▼'; } else { trendIcon.className = 'trend'; trendIcon.textContent = ' '; } } } } } setInterval(updateDashboardAndSocials, 3000);

        // Nueva: Fetch GitHub Repos via API (demuestra skills en JS/API)
        async function fetchGitHubRepos() {
            const username = 'abrangel'; // ¡Cambia a tu username real de GitHub!
            const reposContainer = document.getElementById('github-repos');
            reposContainer.innerHTML = ''; // Limpia loading

            try {
                const response = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=6`);
                const repos = await response.json();
                
                if (repos.length === 0) {
                    reposContainer.innerHTML = '<p>No se encontraron repositorios. Visita mi GitHub directamente.</p>';
                    return;
                }

                repos.forEach(repo => {
                    const card = document.createElement('div');
                    card.className = 'repo-card';
                    card.innerHTML = `
                        <h4>${repo.name}</h4>
                        <p>${repo.description || 'Proyecto en desarrollo: Bio-AI tools.'}</p>
                        <div class="badges">
                            <img src="https://img.shields.io/github/stars/${username}/${repo.name}?style=flat-square" alt="Stars">
                            <img src="https://img.shields.io/github/forks/${username}/${repo.name}?style=flat-square" alt="Forks">
                            <img src="https://img.shields.io/github/languages/top/${username}/${repo.name}?style=flat-square" alt="Language">
                        </div>
                    `;
                    card.addEventListener('click', () => window.open(repo.html_url, '_blank'));
                    reposContainer.appendChild(card);
                });
            } catch (error) {
                reposContainer.innerHTML = '<p>Error cargando repos. Visita mi GitHub directamente.</p>';
            }
        }
    