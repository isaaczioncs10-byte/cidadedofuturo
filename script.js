let videosGenerated = 0;

// Inicialização
document.addEventListener('DOMContentLoaded', function() {
  initParticles();
  generateTimeline();
  generateConcepts();
  renderOptions();
  updateStats();
  initScrollAnimations();
});

// Partículas
function initParticles() {
  if (typeof particlesJS !== 'undefined') {
    particlesJS("particles-js", {
      "particles": { "number": { "value": 80 }, "color": { "value": "#00ffff" },
        "shape": { "type": "circle" }, "opacity": { "value": 0.5, "random": true },
        "size": { "value": 3, "random": true },
        "line_linked": { "enable": true, "distance": 150, "color": "#00ffff", "opacity": 0.4, "width": 1 },
        "move": { "enable": true, "speed": 2 }
      },
      "interactivity": { "events": { "onhover": { "enable": true, "mode": "repulse" } } },
      "retina_detect": true
    });
  }
}

// Timeline
function generateTimeline() {
  const timelineItems = [
    { 
      period: "1950-1990",
      title: "Início da Era Digital",
      description: "Primeiros computadores e o Teste de Turing.",
      highlights: [
        "Primeiros computadores eletrônicos",
        "Teste de Turing (1950)",
        "Bases da IA simbólica"
      ],
      icon: "fas fa-desktop",
      color: "cyber-blue",
      side: "left"
    },
    { 
      period: "1990-2000",
      title: "Fundações Modernas",
      description: "Internet global e primeiras redes neurais práticas.",
      highlights: [
        "Popularização da internet",
        "Redes neurais começam a funcionar",
        "Motores de busca em crescimento"
      ],
      icon: "fas fa-microchip",
      color: "cyber-green",
      side: "right"
    },
    { 
      period: "2000-2025",
      title: "Era Moderna",
      description: "Deep Learning, GPT e avanços em visão computacional.",
      highlights: [
        "Avanços em Deep Learning",
        "Modelos de linguagem (GPT, BERT, etc.)",
        "Aplicações em imagens, voz e tradução"
      ],
      icon: "fas fa-brain",
      color: "cyber-purple",
      side: "left"
    },
    { 
      period: "2025-2080",
      title: "O Futuro",
      description: "AGI, cidades inteligentes e colonização espacial.",
      highlights: [
        "Inteligência Artificial Geral (AGI)",
        "Cidades inteligentes conectadas",
        "Exploração e colonização espacial"
      ],
      icon: "fas fa-rocket",
      color: "cyber-pink",
      side: "right"
    }
  ];

  const container = document.getElementById('timeline-items');
  container.innerHTML = ""; // limpa antes de gerar

  timelineItems.forEach((item) => {
    const el = document.createElement('div');
    el.className = 'timeline-item';

    // lista de bullets
    const highlightsHTML = `
      <div class="timeline-description">
        <p>${item.description}</p>
        <ul>
          ${item.highlights.map(h => `<li>${h}</li>`).join('')}
        </ul>
      </div>
    `;

    el.innerHTML = `
      ${item.side === 'left'
        ? `<div class="timeline-content">
             <h3 class="timeline-period" style="color: var(--${item.color});">${item.period}</h3>
             <h4 class="timeline-title">${item.title}</h4>
             ${highlightsHTML}
             <i class="${item.icon}" style="color: var(--${item.color});"></i>
           </div>
           <div class="timeline-dot" style="background: var(--${item.color});"></div>
           <div style="width:45%;"></div>`
        : `<div style="width:45%;"></div>
           <div class="timeline-dot" style="background: var(--${item.color});"></div>
           <div class="timeline-content">
             <h3 class="timeline-period" style="color: var(--${item.color});">${item.period}</h3>
             <h4 class="timeline-title">${item.title}</h4>
             ${highlightsHTML}
             <i class="${item.icon}" style="color: var(--${item.color});"></i>
           </div>`}
    `;
    container.appendChild(el);
  });
}

// Conceitos do Futuro
// Substitua a função generateConcepts existente por isso:
function generateConcepts() {
  const concepts = [
    { 
      emoji: "🏙️", 
      title: "Cidades Inteligentes", 
      highlights: [
        "Gestão de energia automatizada",
        "Mobilidade autônoma integrada",
        "Infraestrutura adaptativa"
      ],
      color: "cyber-blue" 
    },
    { 
      emoji: "🤖", 
      title: "Robôs Humanoides", 
      highlights: [
        "Companheiros sociais",
        "Assistência a idosos e deficientes",
        "Trabalhos de risco substituídos"
      ],
      color: "cyber-purple" 
    },
    { 
      emoji: "🧠", 
      title: "IA na Saúde", 
      highlights: [
        "Diagnósticos precisos em segundos",
        "Cirurgias assistidas por IA",
        "Medicina personalizada"
      ],
      color: "cyber-pink" 
    },
    { 
      emoji: "🌌", 
      title: "Exploração Espacial", 
      highlights: [
        "Colonização de Marte",
        "Estações orbitais autossustentáveis",
        "Mineração de asteroides"
      ],
      color: "cyber-green" 
    }
  ];

  const container = document.getElementById('concepts-grid');
  container.innerHTML = "";

  concepts.forEach(concept => {
    const card = document.createElement('div');
    card.className = 'concept-card';
    card.innerHTML = `
      <div class="concept-emoji">${concept.emoji}</div>
      <h3 class="concept-title" style="color: var(--${concept.color});">${concept.title}</h3>
      <ul class="concept-list">
        ${concept.highlights.map(h => `<li>${h}</li>`).join('')}
      </ul>
    `;
    container.appendChild(card);
  });
}

// Opções
const videoOptions = {
  "Ambiente da Cidade": ["Cidade flutuante", "Megalópole vertical", "Cidade subterrânea"],
  "Transporte": ["Carro voador", "Trem hipersônico", "Drone-táxi"],
  "Energia": ["Energia solar espacial", "Reatores de fusão limpa", "Turbinas aéreas flutuantes"],
  "Sociedade": ["Convívio humano-robô", "Realidade virtual no trabalho", "Democracia digital"],
  "Saúde": ["Robôs médicos", "Nanorrobôs no corpo", "Clonagem de órgãos"],
  "Exploração Espacial": ["Colônia em Marte", "Estações orbitais", "Exploração de luas geladas"],
  "Natureza e Sustentabilidade": ["Florestas artificiais", "Cidades verdes", "Limpeza dos oceanos por IA"],
  "Comunicação e Entretenimento": ["Hologramas interativos", "Jogos de realidade aumentada", "Música criada por IA"]
};
// Explicações extras para cada opção
const videoExplanations = {
  "Cidade flutuante": "No futuro, cidades inteiras poderão flutuar sobre oceanos, aproveitando energia limpa das ondas e ventos.",
  "Megalópole vertical": "Arranha-céus interligados formando cidades verticais, otimizando espaço e reduzindo impacto ambiental.",
  "Cidade subterrânea": "Comunidades inteiras abaixo da superfície, protegidas de catástrofes climáticas e aproveitando energia geotérmica.",

  "Carro voador": "Veículos pessoais voando em rotas aéreas inteligentes, reduzindo o trânsito terrestre.",
  "Trem hipersônico": "Trens ultra rápidos em túneis a vácuo, conectando cidades em minutos.",
  "Drone-táxi": "Pequenos drones autônomos transportando passageiros com rapidez e segurança.",

  "Energia solar espacial": "Satélites coletando energia solar no espaço e transmitindo para a Terra.",
  "Reatores de fusão limpa": "Fusão nuclear controlada, oferecendo energia ilimitada e sem poluição.",
  "Turbinas aéreas flutuantes": "Turbinas voadoras aproveitando ventos constantes em grandes altitudes.",

  "Convívio humano-robô": "Robôs integrados ao cotidiano como colegas de trabalho e amigos sociais.",
  "Realidade virtual no trabalho": "Ambientes virtuais imersivos substituindo escritórios físicos.",
  "Democracia digital": "Cidadãos votando e participando em decisões políticas diretamente pela internet, mediadas por IA.",

  "Robôs médicos": "Cirurgias e diagnósticos feitos com precisão milimétrica por IA.",
  "Nanorrobôs no corpo": "Microrrobôs circulando na corrente sanguínea para curar doenças.",
  "Clonagem de órgãos": "Órgãos cultivados em laboratório para transplantes sem rejeição.",

  "Colônia em Marte": "Cidades humanas em Marte, autossustentáveis com energia local.",
  "Estações orbitais": "Megaestruturas orbitando a Terra com habitação e pesquisa científica.",
  "Exploração de luas geladas": "Missões em luas como Europa e Encélado, buscando vida sob oceanos congelados.",

  "Florestas artificiais": "Estruturas que imitam árvores para filtrar ar e gerar oxigênio.",
  "Cidades verdes": "Metrópoles cobertas por vegetação integrada, equilibrando tecnologia e natureza.",
  "Limpeza dos oceanos por IA": "Robôs e sistemas inteligentes removendo plástico e resíduos dos mares.",

  "Hologramas interativos": "Projeções realistas em 3D para comunicação e entretenimento.",
  "Jogos de realidade aumentada": "Jogos fundindo mundo real e virtual em tempo real.",
  "Música criada por IA": "Canções geradas sob medida, adaptadas ao humor e preferências da pessoa."
};


const categoryIcons = {
  "Ambiente da Cidade": "fa-solid fa-city",
  "Transporte": "fa-solid fa-rocket",
  "Energia": "fa-solid fa-bolt",
  "Sociedade": "fa-solid fa-users",
  "Saúde": "fa-solid fa-heart-pulse",
  "Exploração Espacial": "fa-solid fa-satellite",
  "Natureza e Sustentabilidade": "fa-solid fa-leaf",
  "Comunicação e Entretenimento": "fa-solid fa-vr-cardboard"
};

function renderOptions() {
  const container = document.getElementById("options-container");
  container.innerHTML = "";
  Object.entries(videoOptions).forEach(([category, options]) => {
    const block = document.createElement("div");
    block.className = "option-block";

    block.innerHTML = `
      <div class="option-header">
        <i class="${categoryIcons[category]} option-icon"></i>
        <h3 class="option-title">${category}</h3>
      </div>
    `;

    const btnGroup = document.createElement("div");
    btnGroup.className = "option-buttons";

    options.forEach(option => {
      const btn = document.createElement("button");
      btn.className = "option-btn";
      btn.textContent = option;
      btn.onclick = () => chooseOption(category, option);
      btnGroup.appendChild(btn);
    });

    block.appendChild(btnGroup);
    container.appendChild(block);
  });
}


// Guardar progresso de cada opção (qual vídeo está sendo exibido)
const videoCycleIndex = {};

async function chooseOption(category, option) {
  const loadingSection = document.getElementById("loading-animation");
  const videoResult = document.getElementById("video-result");

  // Mostrar loading
  loadingSection.classList.remove("hidden");
  videoResult.classList.add("hidden");

  await new Promise(r => setTimeout(r, 1000)); // 1s de loading

  // Normalizar nome da pasta
  const folder = option
    .normalize("NFD") // remove acentos
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/\s+/g, "-");

  // Ciclo: qual vídeo exibir agora?
  if (!videoCycleIndex[option]) videoCycleIndex[option] = 0;
  const currentIndex = videoCycleIndex[option];
  videoCycleIndex[option] = (currentIndex + 1) % 4; // avança, volta pro 0 depois do 3

  // Montar URL do GitHub Pages
  const videoUrl = `video/${folder}/video${currentIndex + 1}.mp4`;

  // Dados do vídeo
  const videoData = {
    title: `${option} - ${category}`,
    description: `Uma visão de: ${option}`,
    videoUrl
  };

  // Contabilizar estatísticas
  videosGenerated++;
  updateStats();

  // Mostrar resultado
  showVideoResult(videoData);

  // Esconder loading
   loadingSection.classList.add("hidden");
}

function showVideoResult(videoData) {
  const videoResult = document.getElementById('video-result');
  videoResult.innerHTML = `
    <h3>Vídeo Carregado 🎉</h3>
    <p style="color: var(--text-secondary); margin-bottom: 24px;">
      Sua visão: "<em>${videoData.description}</em>"
    </p>
    <video id="generated-video" controls width="640">
      <source src="${videoData.videoUrl}" type="video/mp4">
      Seu navegador não suporta vídeo.
    </video>
  `;
  videoResult.classList.remove('hidden');

  // Scroll suave até o vídeo
  videoResult.scrollIntoView({ behavior: 'smooth', block: 'center' });

  // Espera um pouquinho para garantir que o vídeo foi renderizado
  setTimeout(() => {
    const vid = document.getElementById("generated-video");
    if (vid) {
      vid.play().catch(() => {
        // Caso o navegador bloqueie autoplay, não quebra o fluxo
        console.log("Autoplay bloqueado pelo navegador.");
      });
    }
  }, 500);
}

function updateStats() {
  document.getElementById('videos-generated').textContent = videosGenerated;
}

function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

function initScrollAnimations() {
  document.querySelectorAll('.timeline-content, .concept-card')
    .forEach(el => { el.style.animation = 'slideUp 0.6s ease-out forwards'; });
}

function closeModal() {
  const modal = document.getElementById('videoModal');
  const modalVideo = document.getElementById('modal-video');
  modal.classList.add('hidden');
  modalVideo.pause();
  modalVideo.src = '';
}
