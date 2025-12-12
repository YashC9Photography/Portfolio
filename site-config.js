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
        logoImage: "LOGOW3.png",
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
        backgroundImage: "club2.jpeg", 
        buttonText: "Book a Shoot"
    },

    // 3. ABOUT SECTION
    about: {
        title: "Behind the Lens",
        // Place a portrait named 'profile.jpg' in your folder
        image: "Yash.jpeg",
        bio: "I am an enthusiastic photographer passionate about storytelling through images. My style blends cinematic flair with candid emotion. Whether it's the roar of a music festival or the quiet intimacy of a wedding, I am there to capture the moment perfectly.",
        stats: ["5+ Years Experience", "200+ Projects", "Cinematic Style"]
    },

    // 4. SERVICES SECTION
    // You can add or remove services here.
    services: [
        {
            title: "Wedding Photography",
            desc: "Capturing the magic of your special day with cinematic storytelling.",
            image: "weeding.jpeg",
            price: "Contact for Quote"
        },
        {
            title: "Pre-Wedding",
            desc: "Romantic and creative couples shoots before the big day.",
            image: "preweeding.png",
            price: "Contact for Quote"
        },
//        {
//            title: "Corporate",
//            desc: "Professional headshots and event coverage for businesses.",
//            image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=600&auto=format&fit=crop",
//            price: "Contact for Quote"
//        },
        {
            title: "Interior",
            desc: "High-end real estate and architectural photography.",
            image: "interior.jpeg",
            price: "Contact for Quote"
        },
        {
            title: "Food Photography",
            desc: "Mouth-watering styling and photography for menus and social.",
            image: "food.jpeg",
            price: "Contact for Quote"
        },
        {
            title: "Portrait",
            desc: "Creative personal branding, fashion, and lifestyle portraits.",
            image: "protaitSayantika.jpeg",
            price: "Contact for Quote"
        },
 //       {
   //         title: "Studio Session",
     //       desc: "Controlled lighting and backdrops for professional results.",
       //     image: "https://images.unsplash.com/photo-1527011046414-4781f1f94f8c?q=80&w=600&auto=format&fit=crop",
         //   price: "Hourly Rates"
     //   },
        {
            title: "Music Festival",
            desc: "High-energy coverage of live performances and crowds.",
            image: "music event.jpeg",
            price: "Day Rates Available"
        },
      //  {
       //     title: "Music Video Promo",
       //     desc: "Behind the scenes (BTS) and promotional stills for artists.",
       //     image: "https://images.unsplash.com/photo-1514525253440-b393452e8d26?q=80&w=600&auto=format&fit=crop",
       //     price: "Contact for Quote"
      //  },
        {
            title: "Birthday",
            desc: "Documenting parties and milestones with fun and flair.",
            image: "birthday.jpeg",
            price: "Contact for Quote"
        }
    ],

    // 5. PORTFOLIO GALLERY
    // Add your best shots here. Category must match the filter buttons.
    // Categories: 'wedding', 'portrait', 'events', 'commercial'
    portfolio: [
        { src: "weeding.jpeg", category: "wedding" },
        { src: "protait.jpeg", category: "portrait" },
        { src: "event.jpeg", category: "events" },
       // { src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=800", category: "commercial" },
        { src: "weeding2.jpeg", category: "wedding" },
        { src: "event2.jpeg", category: "events" },
    ],

    // 6. TESTIMONIALS
    testimonials: [
        { name: "Sarah J.", text: "Absolutely stunning photos. He captured moments I didn't even know happened!" },
        { name: "TechCorp Inc.", text: "Professional, timely, and the photos elevated our brand significantly." },
        { name: "Mike & Alisha", text: "The best investment we made for our wedding. Highly recommended." }
    ]

};






