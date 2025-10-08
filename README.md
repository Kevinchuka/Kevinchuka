<div align="center">

<!-- 🌈 Gradiente animado en el título -->
<h1>
  <svg width="500" height="60">
    <defs>
      <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stop-color="#ff6b6b">
          <animate attributeName="stop-color" values="#ff6b6b;#4ecdc4;#45b7d1;#96ceb4;#ffeaa7;#ff6b6b" dur="4s" repeatCount="indefinite"/>
        </stop>
        <stop offset="100%" stop-color="#4ecdc4">
          <animate attributeName="stop-color" values="#4ecdc4;#45b7d1;#96ceb4;#ffeaa7;#ff6b6b;#4ecdc4" dur="4s" repeatCount="indefinite"/>
        </stop>
      </linearGradient>
    </defs>
    <text x="50%" y="45" text-anchor="middle" font-family="Arial" font-size="40" font-weight="bold" fill="url(#gradient)">
      ¡Hola Mundo! 👋
    </text>
  </svg>
</h1>

<!-- 🎯 Efecto máquina de escribir -->
<p>
  <img src="https://readme-typing-svg.herokuapp.com?font=Fira+Code&size=20&duration=4000&color=00FF88&center=true&vCenter=true&width=500&lines=Desarrollador+Full+Stack;Apasionado+por+la+innovación;Amante+del+código+limpio;Creando+el+futuro+con+líneas+de+código" alt="Typing SVG" />
</p>

<!-- 🎮 Sección interactiva con hover -->
<div style="display: flex; gap: 15px; justify-content: center; flex-wrap: wrap; margin: 30px 0;">
  <div class="interactive-card" data-tech="JavaScript">
    <img src="https://skillicons.dev/icons?i=js" alt="JavaScript"/>
  </div>
  <div class="interactive-card" data-tech="React">
    <img src="https://skillicons.dev/icons?i=react" alt="React"/>
  </div>
  <div class="interactive-card" data-tech="Node.js">
    <img src="https://skillicons.dev/icons?i=nodejs" alt="Node.js"/>
  </div>
  <div class="interactive-card" data-tech="Python">
    <img src="https://skillicons.dev/icons?i=python" alt="Python"/>
  </div>
</div>

<!-- 📊 Estadísticas con efectos -->
<div style="display: flex; gap: 10px; justify-content: center; flex-wrap: wrap;">
  <img class="stat-card" src="https://github-readme-stats.vercel.app/api?username=TU_USUARIO&show_icons=true&theme=radical&bg_color=45,667eea,764ba2&title_color=fff&text_color=fff&icon_color=fff" alt="Estadísticas"/>
  <img class="stat-card" src="https://github-readme-streak-stats.herokuapp.com/?user=TU_USUARIO&theme=radical&background=45,667eea,764ba2" alt="Racha"/>
</div>

<!-- 🎪 Terminal interactivo simulado -->
<div class="terminal">
  <div class="terminal-header">
    <div class="terminal-buttons">
      <span class="terminal-btn red"></span>
      <span class="terminal-btn yellow"></span>
      <span class="terminal-btn green"></span>
    </div>
    <span class="terminal-title">bash — 80×24</span>
  </div>
  <div class="terminal-body">
    <p><span class="prompt">$</span> whoami</p>
    <p class="output">🚀 Desarrollador apasionado creando magia con código</p>
    <p><span class="prompt">$</span> <span class="typing">find . -name "innovación" -type "futuro"</span></p>
  </div>
</div>

<!-- 🌟 Proyectos destacados con efecto acordeón -->
<details class="projects-section">
  <summary class="projects-title">
    <span>🌟 Proyectos Destacados</span>
    <span class="arrow">▼</span>
  </summary>
  <div class="projects-grid">
    <div class="project-card">
      <h3>🎯 Proyecto Alpha</h3>
      <p>Una aplicación revolucionaria built with React & Node.js</p>
      <div class="tech-stack">
        <span class="tech-badge">React</span>
        <span class="tech-badge">TypeScript</span>
        <span class="tech-badge">MongoDB</span>
      </div>
    </div>
    <div class="project-card">
      <h3>🚀 Proyecto Beta</h3>
      <p>Plataforma de machine learning para análisis predictivo</p>
      <div class="tech-stack">
        <span class="tech-badge">Python</span>
        <span class="tech-badge">TensorFlow</span>
        <span class="tech-badge">FastAPI</span>
      </div>
    </div>
  </div>
</details>

<!-- 📈 Gráfico animado SVG -->
<div class="chart-container">
  <svg width="400" height="120" viewBox="0 0 400 120">
    <defs>
      <linearGradient id="barGradient" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stop-color="#667eea">
          <animate attributeName="stop-color" values="#667eea;#764ba2;#f093fb;#f5576c;#4ecdc4;#667eea" dur="3s" repeatCount="indefinite"/>
        </stop>
        <stop offset="100%" stop-color="#764ba2">
          <animate attributeName="stop-color" values="#764ba2;#f093fb;#f5576c;#4ecdc4;#667eea;#764ba2" dur="3s" repeatCount="indefinite"/>
        </stop>
      </linearGradient>
    </defs>
    
    <!-- Barras animadas -->
    <rect x="50" y="40" width="40" height="10" fill="url(#barGradient)">
      <animate attributeName="height" from="10" to="60" dur="1.5s" fill="freeze"/>
    </rect>
    <rect x="120" y="30" width="40" height="10" fill="url(#barGradient)">
      <animate attributeName="height" from="10" to="70" dur="1.5s" begin="0.2s" fill="freeze"/>
    </rect>
    <rect x="190" y="20" width="40" height="10" fill="url(#barGradient)">
      <animate attributeName="height" from="10" to="80" dur="1.5s" begin="0.4s" fill="freeze"/>
    </rect>
    <rect x="260" y="10" width="40" height="10" fill="url(#barGradient)">
      <animate attributeName="height" from="10" to="90" dur="1.5s" begin="0.6s" fill="freeze"/>
    </rect>
    
    <text x="70" y="105" text-anchor="middle" fill="#fff">Frontend</text>
    <text x="140" y="105" text-anchor="middle" fill="#fff">Backend</text>
    <text x="210" y="105" text-anchor="middle" fill="#fff">DB</text>
    <text x="280" y="105" text-anchor="middle" fill="#fff">Cloud</text>
  </svg>
</div>

<!-- 🎵 Botones interactivos con sonido visual -->
<div class="sound-buttons">
  <button class="sound-btn" data-frequency="1">🎵 Bajo</button>
  <button class="sound-btn" data-frequency="2">🎶 Medio</button>
  <button class="sound-btn" data-frequency="3">🎼 Alto</button>
</div>

<!-- 📍 Contacto con efectos -->
<div class="contact-section">
  <h3>📬 ¡Conectemos!</h3>
  <div class="contact-links">
    <a href="mailto:tu@email.com" class="contact-link">📧 Email</a>
    <a href="https://linkedin.com/in/tu-perfil" class="contact-link">💼 LinkedIn</a>
    <a href="https://twitter.com/tu-usuario" class="contact-link">🐦 Twitter</a>
  </div>
</div>

</div>

<!-- 🎨 ESTILOS Y ANIMACIONES CSS -->
<style>
  @keyframes float {
    0%, 100% { transform: translateY(0px) rotate(0deg); }
    33% { transform: translateY(-10px) rotate(1deg); }
    66% { transform: translateY(-5px) rotate(-1deg); }
  }
  
  @keyframes glow {
    0%, 100% { box-shadow: 0 0 5px #667eea, 0 0 10px #667eea; }
    50% { box-shadow: 0 0 20px #764ba2, 0 0 30px #764ba2; }
  }
  
  @keyframes gradientShift {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }
  
  @keyframes typewriter {
    from { width: 0; }
    to { width: 100%; }
  }
  
  @keyframes bounce {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.1); }
  }
  
  @keyframes pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.7; }
  }
  
  @keyframes wave {
    0% { transform: rotate(0deg); }
    25% { transform: rotate(10deg); }
    75% { transform: rotate(-10deg); }
    100% { transform: rotate(0deg); }
  }
  
  body {
    background: linear-gradient(-45deg, #667eea, #764ba2, #f093fb, #f5576c);
    background-size: 400% 400%;
    animation: gradientShift 8s ease infinite;
    color: white;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }
  
  .interactive-card {
    padding: 15px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 15px;
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.2);
    transition: all 0.3s ease;
    cursor: pointer;
    animation: float 4s ease-in-out infinite;
  }
  
  .interactive-card:hover {
    transform: translateY(-10px) scale(1.1);
    background: rgba(255, 255, 255, 0.2);
    animation: bounce 0.5s ease;
  }
  
  .interactive-card:hover::after {
    content: attr(data-tech);
    position: absolute;
    bottom: -30px;
    left: 50%;
    transform: translateX(-50%);
    background: rgba(0, 0, 0, 0.8);
    color: white;
    padding: 5px 10px;
    border-radius: 5px;
    font-size: 12px;
    white-space: nowrap;
  }
  
  .stat-card {
    border-radius: 15px;
    animation: float 6s ease-in-out infinite;
    transition: transform 0.3s ease;
  }
  
  .stat-card:hover {
    transform: scale(1.05);
    animation: glow 2s ease-in-out infinite;
  }
  
  .terminal {
    background: rgba(0, 0, 0, 0.8);
    border-radius: 10px;
    padding: 20px;
    margin: 30px auto;
    max-width: 600px;
    border: 1px solid #333;
    font-family: 'Courier New', monospace;
    animation: pulse 4s ease-in-out infinite;
  }
  
  .terminal-header {
    display: flex;
    align-items: center;
    margin-bottom: 15px;
    border-bottom: 1px solid #333;
    padding-bottom: 10px;
  }
  
  .terminal-buttons {
    display: flex;
    gap: 5px;
  }
  
  .terminal-btn {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    display: inline-block;
  }
  
  .terminal-btn.red { background: #ff5f56; }
  .terminal-btn.yellow { background: #ffbd2e; }
  .terminal-btn.green { background: #27ca3f; }
  
  .terminal-title {
    margin-left: 10px;
    color: #ccc;
    font-size: 12px;
  }
  
  .prompt {
    color: #27ca3f;
    font-weight: bold;
  }
  
  .output {
    color: #66d9ef;
    margin: 5px 0;
  }
  
  .typing {
    display: inline-block;
    overflow: hidden;
    border-right: 2px solid #27ca3f;
    white-space: nowrap;
    animation: typewriter 3s steps(40) infinite alternate,
               blink-caret 0.75s step-end infinite;
  }
  
  @keyframes blink-caret {
    from, to { border-color: transparent; }
    50% { border-color: #27ca3f; }
  }
  
  .projects-section {
    margin: 30px auto;
    max-width: 800px;
  }
  
  .projects-title {
    background: rgba(255, 255, 255, 0.1);
    padding: 15px 20px;
    border-radius: 10px;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 1.2em;
    font-weight: bold;
    transition: all 0.3s ease;
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.2);
  }
  
  .projects-title:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: translateX(10px);
  }
  
  .projects-title .arrow {
    transition: transform 0.3s ease;
  }
  
  .projects-section[open] .projects-title .arrow {
    transform: rotate(180deg);
  }
  
  .projects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 20px;
    margin-top: 20px;
  }
  
  .project-card {
    background: rgba(255, 255, 255, 0.1);
    padding: 20px;
    border-radius: 10px;
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.2);
    transition: all 0.3s ease;
    animation: float 5s ease-in-out infinite;
  }
  
  .project-card:hover {
    transform: translateY(-5px);
    background: rgba(255, 255, 255, 0.2);
    animation: glow 2s ease-in-out infinite;
  }
  
  .tech-stack {
    display: flex;
    gap: 8px;
    margin-top: 15px;
    flex-wrap: wrap;
  }
  
  .tech-badge {
    background: rgba(102, 126, 234, 0.3);
    padding: 4px 8px;
    border-radius: 12px;
    font-size: 0.8em;
    border: 1px solid rgba(102, 126, 234, 0.5);
    transition: all 0.3s ease;
  }
  
  .tech-badge:hover {
    background: rgba(102, 126, 234, 0.6);
    transform: scale(1.1);
  }
  
  .chart-container {
    margin: 40px auto;
    padding: 20px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 15px;
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.2);
    animation: float 7s ease-in-out infinite;
  }
  
  .sound-buttons {
    display: flex;
    gap: 15px;
    justify-content: center;
    margin: 30px 0;
    flex-wrap: wrap;
  }
  
  .sound-btn {
    background: linear-gradient(45deg, #667eea, #764ba2);
    border: none;
    padding: 12px 24px;
    border-radius: 25px;
    color: white;
    font-weight: bold;
    cursor: pointer;
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
  }
  
  .sound-btn::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
    transition: left 0.5s;
  }
  
  .sound-btn:hover::before {
    left: 100%;
  }
  
  .sound-btn:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(0,0,0,0.2);
  }
  
  .sound-btn:active {
    transform: translateY(-1px);
  }
  
  .contact-section {
    margin: 40px auto;
    text-align: center;
  }
  
  .contact-links {
    display: flex;
    gap: 20px;
    justify-content: center;
    flex-wrap: wrap;
    margin-top: 20px;
  }
  
  .contact-link {
    background: rgba(255, 255, 255, 0.1);
    padding: 12px 24px;
    border-radius: 25px;
    text-decoration: none;
    color: white;
    transition: all 0.3s ease;
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.2);
    animation: pulse 3s ease-in-out infinite;
  }
  
  .contact-link:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: translateY(-3px) scale(1.05);
    animation: wave 0.5s ease;
  }
  
  /* Efectos de partículas simuladas */
  .interactive-card:hover, .sound-btn:hover, .contact-link:hover {
    position: relative;
  }
  
  .interactive-card:hover::before, .sound-btn:hover::before, .contact-link:hover::before {
    content: '✨';
    position: absolute;
    top: -10px;
    right: -10px;
    font-size: 12px;
    animation: bounce 0.5s ease infinite;
  }
</style>
