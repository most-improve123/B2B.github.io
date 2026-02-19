const services = [
  {
    id: 1,
    title: "Agentes de IA Personalizados",
    description: "Desarrollamos asistentes inteligentes que automatizan tareas, responden consultas y mejoran la experiencia de tus clientes 24/7.",
    icon: "bot",
    features: [
      "Chatbots conversacionales",
      "Asistentes virtuales para atención al cliente",
      "Automatización de respuestas",
      "Integración con tus sistemas existentes"
    ]
  },
  {
    id: 2,
    title: "Desarrollo de Páginas Web",
    description: "Diseñamos y construimos sitios web modernos, responsivos y optimizados que convierten visitantes en clientes.",
    icon: "globe",
    features: [
      "Diseño responsive y moderno",
      "Optimización SEO",
      "Alta velocidad de carga",
      "Integración de analytics"
    ]
  },
  {
    id: 3,
    title: "Automatización de Procesos",
    description: "Optimizamos tus operaciones con soluciones de automatización que ahorran tiempo y reducen costos operativos.",
    icon: "zap",
    features: [
      "Automatización de workflows",
      "Integración de APIs",
      "Procesamiento automático de datos",
      "Reportes y dashboards en tiempo real"
    ]
  }
];

const portfolio = [
  {
    id: 1,
    title: "E-commerce con Chat IA",
    description: "Tienda online con asistente de IA que aumentó las ventas en 45%",
    category: "E-commerce + IA",
    results: "+45% ventas, -30% consultas manuales"
  },
  {
    id: 2,
    title: "Portal Inmobiliario",
    description: "Plataforma web moderna para agencia inmobiliaria con búsqueda inteligente",
    category: "Desarrollo Web",
    results: "500+ propiedades, búsqueda avanzada"
  },
  {
    id: 3,
    title: "Automatización Restaurante",
    description: "Sistema de reservas y pedidos automatizado con IA",
    category: "Automatización",
    results: "70% reducción tiempo gestión"
  },
  {
    id: 4,
    title: "Clínica Dental Digital",
    description: "Sitio web + chatbot para citas y consultas médicas",
    category: "IA + Web",
    results: "+60% citas online, 24/7 atención"
  }
];

const pricingPlans = [
  {
    id: 1,
    name: "Starter",
    description: "Perfecto para emprendedores y pequeños negocios",
    priceRange: "$500 - $2,000",
    features: [
      "Página web responsive (hasta 5 páginas)",
      "Diseño personalizado",
      "Formulario de contacto",
      "Optimización básica SEO",
      "Hosting por 6 meses incluido",
      "Soporte por 30 días"
    ],
    popular: false
  },
  {
    id: 2,
    name: "Professional",
    description: "Ideal para negocios en crecimiento que buscan destacar",
    priceRange: "$2,000 - $5,000",
    features: [
      "Todo lo de Starter",
      "Chatbot IA básico integrado",
      "Hasta 10 páginas",
      "Panel de administración",
      "Integración con redes sociales",
      "Analytics avanzado",
      "Soporte por 90 días"
    ],
    popular: true
  },
  {
    id: 3,
    name: "Enterprise",
    description: "Soluciones completas para empresas establecidas",
    priceRange: "$5,000+",
    features: [
      "Todo lo de Professional",
      "Agente IA avanzado personalizado",
      "Automatización de procesos",
      "Integraciones API ilimitadas",
      "E-commerce completo",
      "Desarrollo a medida",
      "Soporte prioritario 24/7"
    ],
    popular: false
  }
];

// Populate Services
function populateServices() {
  const servicesGrid = document.getElementById('servicesGrid');

  services.forEach(service => {
    const serviceCard = document.createElement('div');
    serviceCard.className = 'service-card';

    serviceCard.innerHTML = `
      <div class="service-icon">
        <i data-lucide="${service.icon}" style="width: 32px; height: 32px;"></i>
      </div>
      <h3 class="service-title">${service.title}</h3>
      <p class="service-description">${service.description}</p>
      <ul class="service-features">
        ${service.features.map(feature => `
          <li class="service-feature-item">
            <i data-lucide="check" class="feature-check" style="width: 18px; height: 18px;"></i>
            <span>${feature}</span>
          </li>
        `).join('')}
      </ul>
    `;

    servicesGrid.appendChild(serviceCard);
  });
}

// Populate Portfolio
function populatePortfolio() {
  const portfolioGrid = document.getElementById('portfolioGrid');

  portfolio.forEach(project => {
    const portfolioCard = document.createElement('div');
    portfolioCard.className = 'portfolio-card';

    portfolioCard.innerHTML = `
      <div class="portfolio-icon">
        <i data-lucide="briefcase" style="width: 24px; height: 24px;"></i>
      </div>
      <div class="portfolio-category">${project.category}</div>
      <h3 class="portfolio-title">${project.title}</h3>
      <p class="portfolio-description">${project.description}</p>
      <div class="portfolio-results">
        <i data-lucide="trending-up" style="width: 18px; height: 18px;"></i>
        <span>${project.results}</span>
      </div>
    `;

    portfolioGrid.appendChild(portfolioCard);
  });
}

// Populate Pricing
function populatePricing() {
  const pricingGrid = document.getElementById('pricingGrid');

  pricingPlans.forEach(plan => {
    const pricingCard = document.createElement('div');
    pricingCard.className = `pricing-card ${plan.popular ? 'pricing-card-popular' : ''}`;

    pricingCard.innerHTML = `
      ${plan.popular ? `
        <div class="popular-badge">
          <i data-lucide="star" style="width: 16px; height: 16px;"></i>
          <span>Más Popular</span>
        </div>
      ` : ''}
      <h3 class="pricing-plan-name">${plan.name}</h3>
      <p class="pricing-description">${plan.description}</p>
      <div class="pricing-amount">
        <span class="price-range">${plan.priceRange}</span>
        <span class="price-note">USD</span>
      </div>
      <ul class="pricing-features">
        ${plan.features.map(feature => `
          <li class="pricing-feature-item">
            <i data-lucide="check" class="feature-check" style="width: 18px; height: 18px;"></i>
            <span>${feature}</span>
          </li>
        `).join('')}
      </ul>
      <a href="#contacto" class="${plan.popular ? 'btn-primary' : 'btn-secondary'} pricing-cta">
        Solicitar Cotización
      </a>
    `;

    pricingGrid.appendChild(pricingCard);
  });
}

// Mobile Menu Toggle
function setupMobileMenu() {
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mobileNav = document.getElementById('mobileNav');

  mobileMenuBtn.addEventListener('click', () => {
    mobileNav.classList.toggle('active');

    // Toggle icon
    const icon = mobileMenuBtn.querySelector('i');
    const isActive = mobileNav.classList.contains('active');
    icon.setAttribute('data-lucide', isActive ? 'x' : 'menu');
    lucide.createIcons();
  });

  // Close menu when clicking on a link
  const mobileLinks = mobileNav.querySelectorAll('a');
  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      mobileNav.classList.remove('active');
      const icon = mobileMenuBtn.querySelector('i');
      icon.setAttribute('data-lucide', 'menu');
      lucide.createIcons();
    });
  });
}

// Smooth Scroll
function setupSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
}

// Contact Form Handler
function setupContactForm() {
  const form = document.getElementById('contactForm');
  const formSuccess = document.getElementById('formSuccess');

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Get form data
    const formData = new FormData(form);
    const data = {};
    formData.forEach((value, key) => {
      data[key] = value;
    });

    // Log to console (in real app, send to backend)
    console.log('Form submitted:', data);

    // Show success message
    form.style.display = 'none';
    formSuccess.style.display = 'flex';

    // Reset after 3 seconds
    setTimeout(() => {
      form.style.display = 'flex';
      formSuccess.style.display = 'none';
      form.reset();
    }, 3000);
  });
}

// Header Scroll Effect
function setupHeaderScroll() {
  const header = document.getElementById('header');
  let lastScroll = 0;

  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 100) {
      header.style.background = 'rgba(0, 0, 0, 0.95)';
      header.style.boxShadow = '0 4px 12px rgba(0, 255, 209, 0.1)';
    } else {
      header.style.background = 'rgba(0, 0, 0, 0.9)';
      header.style.boxShadow = 'none';
    }

    lastScroll = currentScroll;
  });
}

// Initialize everything
document.addEventListener('DOMContentLoaded', () => {
  populateServices();
  populatePortfolio();
  populatePricing();
  setupMobileMenu();
  setupSmoothScroll();
  setupContactForm();
  setupHeaderScroll();

  // Initialize Lucide icons after dynamic content is added
  lucide.createIcons();
});
