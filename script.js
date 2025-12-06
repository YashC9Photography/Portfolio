// Wait for DOM to load
document.addEventListener('DOMContentLoaded', () => {
    loadContent();
    setupGalleryFilters();
    setupLightbox();
});

function loadContent() {
    const config = siteConfig;

    // 1. BRANDING & HERO
    document.title = `${config.brand.name} - Portfolio`;
    document.getElementById('nav-logo').textContent = config.brand.logoText;
    document.getElementById('hero-title').textContent = config.brand.name;
    document.getElementById('hero-tagline').textContent = config.brand.tagline;
    document.getElementById('hero-btn').textContent = config.hero.buttonText;
    document.querySelector('.hero-section').style.backgroundImage = `url('${config.hero.backgroundImage}')`;
    
    // 2. ABOUT
    document.getElementById('about-image').src = config.about.image;
    document.getElementById('about-bio').textContent = config.about.bio;
    
    const statsContainer = document.getElementById('about-stats');
    config.about.stats.forEach(stat => {
        const span = document.createElement('span');
        span.className = 'stat-item';
        span.textContent = stat;
        statsContainer.appendChild(span);
    });

    // 3. SERVICES
    const servicesGrid = document.getElementById('services-grid');
    config.services.forEach(service => {
        const card = document.createElement('div');
        card.className = 'service-card';
        card.innerHTML = `
            <img src="${service.image}" alt="${service.title}">
            <div class="service-info">
                <h3>${service.title}</h3>
                <p>${service.desc}</p>
                <span class="price">${service.price}</span>
            </div>
        `;
        servicesGrid.appendChild(card);
    });

    // 4. PORTFOLIO
    const galleryGrid = document.getElementById('gallery-grid');
    config.portfolio.forEach(item => {
        const imgDiv = document.createElement('div');
        imgDiv.className = `gallery-item ${item.category}`;
        imgDiv.innerHTML = `<img src="${item.src}" alt="Portfolio Image">`;
        galleryGrid.appendChild(imgDiv);
    });

    // 5. TESTIMONIALS
    const testimonialGrid = document.getElementById('testimonials-grid');
    config.testimonials.forEach(t => {
        const div = document.createElement('div');
        div.className = 'testimonial-card';
        div.innerHTML = `"${t.text}" <span class="client-name">- ${t.name}</span>`;
        testimonialGrid.appendChild(div);
    });

    // 6. CONTACT & FOOTER
    document.getElementById('contact-email').textContent = `Email: ${config.brand.email}`;
    document.getElementById('contact-phone').textContent = `Phone: ${config.brand.phone}`;
    document.getElementById('year').textContent = new Date().getFullYear();
    document.getElementById('footer-name').textContent = config.brand.name;
}

// Gallery Filters
function setupGalleryFilters() {
    const buttons = document.querySelectorAll('.filter-btn');
    const items = document.getElementsByClassName('gallery-item');

    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all
            buttons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filter = btn.getAttribute('data-filter');

            for (let item of items) {
                if (filter === 'all' || item.classList.contains(filter)) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            }
        });
    });
}

// Lightbox Logic
function setupLightbox() {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const closeBtn = document.querySelector('.close-lightbox');
    const galleryGrid = document.getElementById('gallery-grid');

    galleryGrid.addEventListener('click', (e) => {
        if(e.target.tagName === 'IMG') {
            lightbox.style.display = "flex";
            lightboxImg.src = e.target.src;
        }
    });

    closeBtn.onclick = () => lightbox.style.display = "none";
    lightbox.onclick = (e) => {
        if(e.target === lightbox) lightbox.style.display = "none";
    }
}