document.addEventListener('DOMContentLoaded', () => {
    loadContent();
    setupGalleryFilters();
    setupLightbox();
    setupMobileMenu(); // <--- NEW FUNCTION ADDED
});
// --- LIGHTBOX NAVIGATION LOGIC ---
function changeSlide(n) {
    // 1. Update Index
    currentLightboxIndex += n;

    // 2. Loop Logic (Infinite Scroll)
    if (currentLightboxIndex >= lightboxImages.length) {
        currentLightboxIndex = 0; // Go back to first
    } else if (currentLightboxIndex < 0) {
        currentLightboxIndex = lightboxImages.length - 1; // Go to last
    }

    // 3. Update Image Source
    const lightboxImg = document.getElementById('lightbox-img');
    
    // Add a fade effect
    lightboxImg.style.opacity = 0;
    setTimeout(() => {
        lightboxImg.src = lightboxImages[currentLightboxIndex];
        lightboxImg.style.opacity = 1;
    }, 200);
}

// Enable Left/Right Arrow Keys on Keyboard
document.addEventListener('keydown', (e) => {
    const lightbox = document.getElementById('lightbox');
    if (lightbox.style.display === "flex") {
        if (e.key === "ArrowLeft") changeSlide(-1);
        if (e.key === "ArrowRight") changeSlide(1);
        if (e.key === "Escape") lightbox.style.display = "none";
    }
});
// --- NEW SERVICE GALLERY LOGIC ---
let currentLightboxIndex = 0;
let lightboxImages = []; // Stores the list of photos currently being viewed
function openServiceGallery(folderName, title) {
    if (!folderName) {
        alert("Gallery coming soon!");
        return;
    }

    const modal = document.getElementById('service-modal');
    const grid = document.getElementById('service-gallery-grid');
    const titleEl = document.getElementById('modal-title');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');

    // Set Title
    titleEl.textContent = title + " Gallery";
    grid.innerHTML = ''; // Clear previous photos

    // Show Modal
    modal.style.display = "block";
    document.body.style.overflow = "hidden"; // Stop background scrolling

    // LOADER LOOP: Try to load images 1 to 20
    // Note: We check .jpg, .jpeg, and .png for flexibility
    for (let i = 1; i <= 20; i++) {
        const wrapper = document.createElement('div');
        wrapper.className = 'service-photo-item';
        
        // We set the image source. 
        // onerror="this.parentElement.style.display='none'" hides the box if image doesn't exist
        const imgPath = `images/${folderName}/${i}`;
        
        // We create an image that tries to load. 
        // Since we don't know if it's .jpg or .png, we default to .jpg for simplicity.
        // *Best Practice: Rename all your gallery photos to 1.jpg, 2.jpg...*
        const img = document.createElement('img');
        img.src = `${imgPath}.jpg`; // ASSUMES .jpg extension
        img.onerror = function() { 
            // If .jpg fails, try .jpeg, if that fails, hide it.
            this.src = `${imgPath}.jpeg`;
            this.onerror = function() { this.parentElement.style.display = 'none'; }
        };

        // Click to Open Zoom Lightbox WITH NAVIGATION
        wrapper.onclick = () => {
            // 1. Collect all VISIBLE images in the grid
            // (We filter out any that failed to load and are hidden)
            const allImages = document.querySelectorAll('#service-gallery-grid .service-photo-item:not([style*="display: none"]) img');
            
            // 2. Save them to our global list
            lightboxImages = Array.from(allImages).map(img => img.src);
            
            // 3. Find the index of the clicked image
            // We compare source URLs to find which one was clicked
            currentLightboxIndex = lightboxImages.findIndex(src => src === img.src);
            
            // 4. Open Lightbox
            const lightbox = document.getElementById('lightbox');
            const lightboxImg = document.getElementById('lightbox-img');
            
            lightbox.style.display = "flex";
            lightboxImg.src = lightboxImages[currentLightboxIndex];
        };

        wrapper.appendChild(img);
        grid.appendChild(wrapper);
    }
}

// Close Button Logic
document.querySelector('.close-service-modal').addEventListener('click', () => {
    document.getElementById('service-modal').style.display = "none";
    document.body.style.overflow = "auto"; // Re-enable scrolling
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

    // 3. SERVICES
    const servicesGrid = document.getElementById('services-grid');
    servicesGrid.innerHTML = ''; 
    
    config.services.forEach(service => {
        const card = document.createElement('div');
        card.className = 'service-card';
        
        card.innerHTML = `
            <div class="img-wrapper">
                <img src="${service.image}" alt="${service.title}">
            </div>
            <div class="content-overlay">
                <h3>${service.title}</h3>
                <p>${service.desc}</p>
                <div class="card-action">
                    <button class="btn-card" onclick="openServiceGallery('${service.folderName}', '${service.title}')" style="margin-right:10px; background: transparent; border: 1px solid #d4af37; color: #d4af37;">View Gallery</button>
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

