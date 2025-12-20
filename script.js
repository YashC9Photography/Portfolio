document.addEventListener('DOMContentLoaded', () => {
    loadContent();
    setupGalleryFilters();
    setupLightbox();
    setupMobileMenu(); // <--- NEW FUNCTION ADDED
});

function loadContent() {
    const config = siteConfig;

    // 1. BRANDING & HERO
    document.title = `${config.brand.name} - Portfolio`;
    
    // UPDATED LOGO LOGIC
    const logoContainer = document.getElementById('nav-logo');
    if (config.brand.logoImage) {
        logoContainer.innerHTML = `<img src="${config.brand.logoImage}" alt="Logo">`;
    } else {
        logoContainer.textContent = config.brand.logoText;
    }

    // --- NEW HERO TITLE LOGIC ---
    const heroTitle = document.getElementById('hero-title');
    heroTitle.innerHTML = `
        <span class="name-main">${config.hero.titleLine1}</span>
        <span class="name-sub">${config.hero.titleLine2}</span>
    `;
    
    // FIXED: We removed the lines that were overwriting the title above!
    
    // Use the tagline from the HERO config, not the brand config
    document.getElementById('hero-tagline').textContent = config.hero.tagline; 
    document.getElementById('hero-btn').textContent = config.hero.buttonText;
    document.querySelector('.hero-section').style.backgroundImage = `url('${config.hero.backgroundImage}')`;
    
    // 2. ABOUT
    document.getElementById('about-image').src = config.about.image;
    document.getElementById('about-bio').textContent = config.about.bio;
    
    const statsContainer = document.getElementById('about-stats');
    // Clear existing stats to prevent duplicates if function runs twice
    statsContainer.innerHTML = ''; 
    config.about.stats.forEach(stat => {
        const span = document.createElement('span');
        span.className = 'stat-item';
        span.textContent = stat;
        statsContainer.appendChild(span);
    });

    // 3. SERVICES (Fixed Structure + Interactive Button)
    const servicesGrid = document.getElementById('services-grid');
    servicesGrid.innerHTML = ''; // Clear existing
    
    config.services.forEach(service => {
        const card = document.createElement('div');
        card.className = 'service-card';
        
        // This structure now matches your style.css perfectly
        card.innerHTML = `
            <div class="img-wrapper">
                <img src="${service.image}" alt="${service.title}">
            </div>
            <div class="content-overlay">
                <h3>${service.title}</h3>
                <p>${service.desc}</p>
                <div class="card-action">
                    <span class="price-tag">${service.price}</span>
                    <a href="#contact" class="btn-card" onclick="prefillForm('${service.title}')">Book This</a>
                </div>
            </div>
        `;
        servicesGrid.appendChild(card);
    });

    // Helper function to auto-select the dropdown in the contact form
    window.prefillForm = (serviceName) => {
        const select = document.querySelector('select[name="shoot-type"]');
        if(select) {
            // Tries to match the service name to an option
            for(let i=0; i<select.options.length; i++) {
                if(select.options[i].value.includes(serviceName) || serviceName.includes(select.options[i].value)) {
                    select.selectedIndex = i;
                    break;
                }
            }
        }
    };

    // 4. PORTFOLIO SLIDESHOW (AUTO-LOADER)
    const track = document.getElementById('gallery-track');
    track.innerHTML = ''; // Clear existing
    
    // --- CONFIGURATION ---
    const folderName = "gallery";  // Your folder name on GitHub
    const totalPhotos = 11;        // <--- CHANGE THIS to the actual number of photos you have!
    const fileExtension = ".jpeg";  // Change to ".png" if needed
    // ---------------------

    // 1. Create a list of numbers: 1, 2, 3 ... totalPhotos
    let photoList = [];
    for(let i = 1; i <= totalPhotos; i++) {
        photoList.push(`${folderName}/${i}${fileExtension}`);
    }

    // 2. Duplicate the list 2 times to ensure seamless infinite scrolling
    const infiniteScrollList = [...photoList, ...photoList];

    // 3. Create the HTML for each slide
    infiniteScrollList.forEach(imageSrc => {
        const slideDiv = document.createElement('div');
        slideDiv.className = 'slide';
        
        // Lightbox Click Event (Opens full size)
        slideDiv.onclick = () => {
            const lightbox = document.getElementById('lightbox');
            const lightboxImg = document.getElementById('lightbox-img');
            lightbox.style.display = "flex";
            lightboxImg.src = imageSrc;
        };
        
        // Inject Image (with Error handling to hide missing photos)
        slideDiv.innerHTML = `<img src="${imageSrc}" alt="Gallery" onerror="this.parentElement.style.display='none'">`;
        track.appendChild(slideDiv);
    });

    // 6. CONTACT & FOOTER
    document.getElementById('contact-email').textContent = `Email: ${config.brand.email}`;
    document.getElementById('contact-phone').textContent = `Phone: ${config.brand.phone}`;
    document.getElementById('year').textContent = new Date().getFullYear();
    document.getElementById('footer-name').textContent = config.brand.name;
    
    // Social Links Injection
    const socialContainer = document.getElementById('social-links');
    socialContainer.innerHTML = ''; // Clear existing
    if(config.brand.social.instagram) socialContainer.innerHTML += `<a href="${config.brand.social.instagram}" target="_blank" style="margin-right:10px"><i class="fab fa-instagram fa-2x"></i></a>`;
    if(config.brand.social.facebook) socialContainer.innerHTML += `<a href="${config.brand.social.facebook}" target="_blank" style="margin-right:10px"><i class="fab fa-facebook fa-2x"></i></a>`;
    if(config.brand.social.youtube) socialContainer.innerHTML += `<a href="${config.brand.social.youtube}" target="_blank"><i class="fab fa-youtube fa-2x"></i></a>`;
}

// Gallery Filters
function setupGalleryFilters() {
    const buttons = document.querySelectorAll('.filter-btn');
    const items = document.getElementsByClassName('gallery-item');

    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
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
// Lightbox Logic (Closing Only)
function setupLightbox() {
    const lightbox = document.getElementById('lightbox');
    const closeBtn = document.querySelector('.close-lightbox');

    // Close when clicking the "X" button
    closeBtn.onclick = () => {
        lightbox.style.display = "none";
    };

    // Close when clicking the dark background outside the image
    lightbox.onclick = (e) => {
        if (e.target === lightbox) {
            lightbox.style.display = "none";
        }
    };
}

// Mobile Menu Logic (NEW)
function setupMobileMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const links = document.querySelectorAll('.nav-links li');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('toggle');
    });

    // Close menu when a link is clicked
    links.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            hamburger.classList.remove('toggle');
        });
    });
}

