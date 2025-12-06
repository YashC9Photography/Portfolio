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
        name: "Yash Photography",
        tagline: "Capturing Your Story, One Frame at a Time.",
        logoText: "YASH",
        email: "cyashchowdhuryc9@gmail.com",
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
        // Place a high-res image named 'hero.jpg' in your folder
        backgroundImage: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=2000&auto=format&fit=crop", 
        buttonText: "Book a Shoot"
    },

    // 3. ABOUT SECTION
    about: {
        title: "Behind the Lens",
        // Place a portrait named 'profile.jpg' in your folder
        image: "https://images.unsplash.com/photo-1554048612-387768052bf7?q=80&w=800&auto=format&fit=crop",
        bio: "I am an enthusiastic photographer passionate about storytelling through images. My style blends cinematic flair with candid emotion. Whether it's the roar of a music festival or the quiet intimacy of a wedding, I am there to capture the moment perfectly.",
        stats: ["5+ Years Experience", "200+ Projects", "Cinematic Style"]
    },

    // 4. SERVICES SECTION
    // You can add or remove services here.
    services: [
        {
            title: "Wedding Photography",
            desc: "Capturing the magic of your special day with cinematic storytelling.",
            image: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=600&auto=format&fit=crop",
            price: "Starts at $1500"
        },
        {
            title: "Pre-Wedding",
            desc: "Romantic and creative couples shoots before the big day.",
            image: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=600&auto=format&fit=crop",
            price: "Starts at $400"
        },
        {
            title: "Corporate",
            desc: "Professional headshots and event coverage for businesses.",
            image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=600&auto=format&fit=crop",
            price: "Contact for Quote"
        },
        {
            title: "Interior",
            desc: "High-end real estate and architectural photography.",
            image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=600&auto=format&fit=crop",
            price: "Starts at $300"
        },
        {
            title: "Food Photography",
            desc: "Mouth-watering styling and photography for menus and social.",
            image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=600&auto=format&fit=crop",
            price: "Starts at $250"
        },
        {
            title: "Portrait",
            desc: "Creative personal branding, fashion, and lifestyle portraits.",
            image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=600&auto=format&fit=crop",
            price: "Starts at $200"
        },
        {
            title: "Studio Session",
            desc: "Controlled lighting and backdrops for professional results.",
            image: "https://images.unsplash.com/photo-1527011046414-4781f1f94f8c?q=80&w=600&auto=format&fit=crop",
            price: "Hourly Rates"
        },
        {
            title: "Music Festival",
            desc: "High-energy coverage of live performances and crowds.",
            image: "https://images.unsplash.com/photo-1459749411177-287ce35e8b4f?q=80&w=600&auto=format&fit=crop",
            price: "Day Rates Available"
        },
        {
            title: "Music Video Promo",
            desc: "Behind the scenes (BTS) and promotional stills for artists.",
            image: "https://images.unsplash.com/photo-1514525253440-b393452e8d26?q=80&w=600&auto=format&fit=crop",
            price: "Contact for Quote"
        },
        {
            title: "Birthday",
            desc: "Documenting parties and milestones with fun and flair.",
            image: "https://images.unsplash.com/photo-1530103862676-de3c9a59af38?q=80&w=600&auto=format&fit=crop",
            price: "Starts at $300"
        }
    ],

    // 5. PORTFOLIO GALLERY
    // Add your best shots here. Category must match the filter buttons.
    // Categories: 'wedding', 'portrait', 'events', 'commercial'
    portfolio: [
        { src: "https://images.unsplash.com/photo-1511285560982-1351cdeb9821?q=80&w=800", category: "wedding" },
        { src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800", category: "portrait" },
        { src: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=800", category: "events" },
        { src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=800", category: "commercial" },
        { src: "https://images.unsplash.com/photo-1519225421980-715cb0202128?q=80&w=800", category: "wedding" },
        { src: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?q=80&w=800", category: "events" },
    ],

    // 6. TESTIMONIALS
    testimonials: [
        { name: "Sarah J.", text: "Absolutely stunning photos. He captured moments I didn't even know happened!" },
        { name: "TechCorp Inc.", text: "Professional, timely, and the photos elevated our brand significantly." },
        { name: "Mike & Alisha", text: "The best investment we made for our wedding. Highly recommended." }
    ]

};
