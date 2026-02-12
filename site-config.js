// =========================================================
// PHOTOGRAPHER CONFIGURATION FILE
// =========================================================
// INSTRUCTIONS:
// 1. To change text, edit the text inside the quotes ' '.
// 2. To add photos, copy an image file to your folder and paste the filename here.
// 3. Do not remove commas at the ends of lines.
// =========================================================

const siteConfig = {
    // 1. BRANDING
    brand: {
        name: "Yash Chowdhury",
       // tagline: "Capturing Your Story, One Frame at a Time.",
        logoImage: "images/LOGOW3.png",
        logoText: "YASH",
        email: "yashchowdhuryc9@gmail.com",
        phone: "+916294979124",
        // Social Media Links (leave empty '' if not using)
        social: {
            instagram: "https://www.instagram.com/yash__c9?igsh=NWVqeHhvOWl1bHM=",
            facebook: "https://www.facebook.com/share/1DAZ4cwHHK/",
            youtube: "https://youtube.com"
        }
    },

    // 2. HERO SECTION
    hero: {
        // Line 1: Big Name
        titleLine1: "YASH CHOWDHURY", 
        // Line 2: Small Text
        titleLine2: "PHOTOGRAPHY",
        
        // New Creative Tagline (Option A)
        //tagline: "Visual Poetry in Every Frame.",
        // (Alternative options you can copy-paste if you prefer):
        tagline: "Crafting Timeless Moments.",
        // tagline: "Where Life Meets Light.",
        // Place a high-res image named 'hero.jpg' in your folder
        backgroundImage: "images/club2.jpeg", 
        buttonText: "Book a Shoot"
    },

    // 3. ABOUT SECTION
    about: {
        title: "Behind the Lens",
        // Place a portrait named 'profile.jpg' in your folder
        image: "images/Yash.jpeg",
        bio: "I am an enthusiastic photographer passionate about storytelling through images. My style blends cinematic flair with candid emotion. Whether it's the roar of a music festival or the quiet intimacy of a wedding, I am there to capture the moment perfectly.",
        stats: ["8+ Years Experience", "700+ Projects", "Cinematic Style"]
    },

    
   // 4. SERVICES SECTION (Updated Order)
    services: [
        {
            title: "Event Photography",
            desc: "Capturing the energy and key moments of your special occasions.",
            image: "images/event.jpeg", // Make sure you have this image
            price: "Contact for Quote",
            folderName : "EVENT"
        },
        {
            title: "Portfolio Shoots",
            desc: "High-fashion and modeling portfolios to kickstart your career.",
            image: "images/portfolio.jpeg", // Reusing portrait image
            price: "Contact for Quote",
            folderName : "PORTFOLIO"
        },
       
        {
            title: "Interior & Architectural",
            desc: "Showcasing spaces with perfect lighting and wide angles.",
            image: "images/interior.jpeg", 
            price: "Contact for Quote",
            folderName : "INTERIOR"
        },
        {
            title: "Food Photography",
            desc: "Mouth-watering styling and culinary art photography.",
            image: "images/food.jpeg",
            price: "Contact for Quote",
            folderName : "FOOD"
        },
        {
            title: "Portrait Photography",
            desc: "Creative personal branding, lifestyle, and artistic portraits.",
            image: "images/protaitSayantika.jpeg",
            price: "Contact for Quote",
            folderName : "PORTRAIT"
        },
        {
            title: "Studio Session",
            desc: "Controlled lighting and professional backdrops for polished results.",
            image: "images/protait.jpeg", // Placeholder
            price: "Hourly Rates",
            folderName : "STUDIO"
        },
         {
            title: "Corporate Photography",
            desc: "Professional headshots, branding, and office environment shots.",
            image: "images/event2.jpeg", // Placeholder
            price: "Contact for Quote",
            folderName : "CORPORATE"
        },
        {
            title: "Music Festival & Concert",
            desc: "High-energy coverage of live performances and crowds.",
            image: "images/music event.jpeg",
            price: "Day Rates Available",
            folderName : "MUSIC"
        },
        // {
        //     title: "Music Video & Promo",
        //     desc: "Behind the scenes (BTS) and promotional stills for artists.",
        //     image: "images/event.jpeg", // Placeholder
        //     price: "Contact for Quote"
        // },
        {
            title: "Wedding Photography",
            desc: "Cinematic storytelling of your most special day.",
            image: "images/weeding.jpeg",
            price: "Contact for Quote",
            folderName : "WEDDING"

        },
        {
            title: "Pre-Wedding",
            desc: "Romantic and creative couples shoots before the big day.",
            image: "images/preweeding.png",
            price: "Contact for Quote",
            folderName : "PREWEDDING"
        },
        {
            title: "Birthday Photography",
            desc: "Documenting parties and milestones with fun and flair.",
            image: "images/birthday.jpeg",
            price: "Contact for Quote",
            folderName : "BIRTHDAY"
        }
    ],

    // 5. PORTFOLIO GALLERY
    // Add your best shots here. Category must match the filter buttons.
    // Categories: 'wedding', 'portrait', 'events', 'commercial'
    portfolio: [
        { src: "images/weeding.jpeg", category: "wedding" },
        { src: "images/protait.jpeg", category: "portrait" },
        { src: "images/event.jpeg", category: "events" },
       // { src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=800", category: "commercial" },
        { src: "images/weeding2.jpeg", category: "wedding" },
        { src: "images/event2.jpeg", category: "events" },
    ],

    // 6. TESTIMONIALS
    testimonials: [
        { name: "Sarah J.", text: "Absolutely stunning photos. He captured moments I didn't even know happened!" },
        { name: "TechCorp Inc.", text: "Professional, timely, and the photos elevated our brand significantly." },
        { name: "Mike & Alisha", text: "The best investment we made for our wedding. Highly recommended." }
    ]

};

