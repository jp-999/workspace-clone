// Mock data for workspace rentals
const workspaces = [
  {
    id: 1,
    title: "Modern Tech Hub",
    description: "A sleek, high-tech workspace designed for startups and tech companies. Features smart office solutions, automated lighting, and cutting-edge meeting rooms.",
    price: 75,
    priceUnit: "per day",
    location: "Downtown Tech District",
    city: "San Francisco",
    rating: 4.9,
    reviewCount: 128,
    capacity: "20-50 people",
    amenities: [
      "High-speed Wi-Fi",
      "Smart conference rooms",
      "24/7 access",
      "Ergonomic furniture",
      "Break room with snacks",
      "Holographic presentation system",
      "AI assistant",
      "Rooftop garden"
    ],
    images: [
      "https://images.unsplash.com/photo-1497366216548-37526070297c",
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2",
      "https://images.unsplash.com/photo-1568992687947-868a62a9f521"
    ],
    featured: true,
    category: "Office",
    type: "Entire office",
    availableDates: [
      { start: "2023-09-01", end: "2023-09-30" },
      { start: "2023-10-15", end: "2023-11-15" }
    ]
  },
  {
    id: 2,
    title: "Creative Studio Loft",
    description: "An inspiring open space for creatives and designers. Natural lighting, minimalist design, and flexible layout to foster innovation and collaboration.",
    price: 60,
    priceUnit: "per day",
    location: "Arts District",
    city: "New York",
    rating: 4.7,
    reviewCount: 93,
    capacity: "10-30 people",
    amenities: [
      "Natural lighting",
      "High ceilings",
      "Design thinking tools",
      "Digital drawing boards",
      "3D printer access",
      "Photography studio",
      "Creative commons area",
      "Meditation room"
    ],
    images: [
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0",
      "https://images.unsplash.com/photo-1593642702821-c8da6771f0c6"
    ],
    featured: true,
    category: "Studio",
    type: "Shared space",
    availableDates: [
      { start: "2023-09-05", end: "2023-10-05" },
      { start: "2023-11-01", end: "2023-12-01" }
    ]
  },
  {
    id: 3,
    title: "Executive Business Center",
    description: "Professional workspace with all the amenities needed for successful business operations. Private offices, meeting rooms, and premium services.",
    price: 90,
    priceUnit: "per day",
    location: "Financial District",
    city: "Chicago",
    rating: 4.8,
    reviewCount: 156,
    capacity: "10-100 people",
    amenities: [
      "Dedicated receptionist",
      "Premium catering",
      "Private parking",
      "Secure access",
      "Videoconferencing",
      "Executive lounge",
      "Mail handling",
      "Concierge services"
    ],
    images: [
      "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c",
      "https://images.unsplash.com/photo-1568992688065-536aad8a12f6",
      "https://images.unsplash.com/photo-1542744095-fcf48d80b0fd"
    ],
    featured: false,
    category: "Business Center",
    type: "Private office",
    availableDates: [
      { start: "2023-09-10", end: "2023-10-10" },
      { start: "2023-11-15", end: "2023-12-15" }
    ]
  },
  {
    id: 4,
    title: "Innovative Coworking Space",
    description: "A collaborative workspace for entrepreneurs, freelancers, and remote workers. Community-focused with networking opportunities and shared resources.",
    price: 40,
    priceUnit: "per day",
    location: "Startup District",
    city: "Austin",
    rating: 4.6,
    reviewCount: 87,
    capacity: "50-200 people",
    amenities: [
      "Community events",
      "Networking opportunities",
      "Phone booths",
      "Hot desks",
      "Game room",
      "Coffee bar",
      "Wellness area",
      "Workshop space"
    ],
    images: [
      "https://images.unsplash.com/photo-1527192491265-7e15c55b1ed2",
      "https://images.unsplash.com/photo-1542744173-05336fcc7ad4",
      "https://images.unsplash.com/photo-1562664377-709f2c337eb2"
    ],
    featured: true,
    category: "Coworking",
    type: "Hot desk",
    availableDates: [
      { start: "2023-09-01", end: "2023-12-31" }
    ]
  },
  {
    id: 5,
    title: "Zen Garden Conference Center",
    description: "A peaceful, nature-inspired space perfect for offsite meetings, retreats, and workshops. Designed to promote mindfulness and creativity.",
    price: 120,
    priceUnit: "per day",
    location: "Botanical Gardens",
    city: "Portland",
    rating: 4.9,
    reviewCount: 72,
    capacity: "20-80 people",
    amenities: [
      "Indoor gardens",
      "Natural soundscapes",
      "Healthy catering options",
      "Outdoor meeting areas",
      "Yoga studio",
      "Meditation pods",
      "Water features",
      "Sustainable design"
    ],
    images: [
      "https://plus.unsplash.com/premium_photo-1661954483883-edd65eac3577?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8emVuJTIwZ2FyZGVufGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1594732832278-abd644401426",
      "https://images.unsplash.com/photo-1588471980726-8346cb477a33"
    ],
    featured: false,
    category: "Retreat",
    type: "Conference center",
    availableDates: [
      { start: "2023-09-15", end: "2023-10-15" },
      { start: "2023-11-01", end: "2023-12-20" }
    ]
  },
  {
    id: 6,
    title: "Futuristic Smart Office",
    description: "The office of the future with IoT integration, AI-powered rooms, and immersive collaborative technology. Experience the cutting edge of workspace design.",
    price: 150,
    priceUnit: "per day",
    location: "Innovation Park",
    city: "Seattle",
    rating: 4.8,
    reviewCount: 64,
    capacity: "10-60 people",
    amenities: [
      "Voice-controlled systems",
      "Immersive VR meeting rooms",
      "Smart desks",
      "Biometric access",
      "Ambient intelligence",
      "Digital walls",
      "Autonomous coffee service",
      "Adaptive lighting"
    ],
    images: [
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
      "https://images.unsplash.com/photo-1550305080-4e029753abcf",
      "https://images.unsplash.com/photo-1551434678-e076c223a692"
    ],
    featured: true,
    category: "Smart Office",
    type: "Tech workspace",
    availableDates: [
      { start: "2023-09-01", end: "2023-11-30" }
    ]
  },
  {
    id: 7,
    title: "Skyline Penthouse Suite",
    description: "Luxurious penthouse workspace with panoramic city views. Premium amenities and exclusive access make this perfect for executive meetings and high-profile gatherings.",
    price: 250,
    priceUnit: "per day",
    location: "City Center",
    city: "Miami",
    rating: 5.0,
    reviewCount: 42,
    capacity: "5-20 people",
    amenities: [
      "Panoramic views",
      "Private elevator",
      "Executive chef service",
      "Luxury furnishings",
      "Outdoor terrace",
      "Private bar",
      "Butler service",
      "Helicopter landing pad access"
    ],
    images: [
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6",
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6",
      "https://images.unsplash.com/photo-1622547748225-3fc4abd2cca0"
    ],
    featured: true,
    premium: true,
    category: "Luxury",
    type: "Penthouse",
    availableDates: [
      { start: "2023-09-01", end: "2023-12-15" }
    ]
  },
  {
    id: 8,
    title: "Beachfront Workspace Paradise",
    description: "Combine work and relaxation in this beachfront workspace with ocean views. Open-air design and resort amenities provide the ultimate work-vacation experience.",
    price: 180,
    priceUnit: "per day",
    location: "Coastal Boulevard",
    city: "San Diego",
    rating: 4.9,
    reviewCount: 57,
    capacity: "5-30 people",
    amenities: [
      "Ocean views",
      "Beach access",
      "Outdoor workstations",
      "Swimming pool",
      "Beachside cafe",
      "Water sports equipment",
      "Sunset happy hour",
      "Hammock lounges"
    ],
    images: [
      "https://images.unsplash.com/photo-1540541338287-41700207dee6",
      "https://images.unsplash.com/photo-1573052905904-34ad8c27f0cc",
      "https://images.unsplash.com/photo-1560448204-603b3fc33dcd"
    ],
    featured: true,
    premium: true,
    category: "Resort",
    type: "Beachfront",
    availableDates: [
      { start: "2023-09-01", end: "2023-11-15" }
    ]
  },
  {
    id: 9,
    title: "Historic Mansion Workspace",
    description: "Work in elegance within a restored historic mansion. Classic architecture combined with modern amenities offers a unique and prestigious working environment.",
    price: 220,
    priceUnit: "per day",
    location: "Heritage District",
    city: "Boston",
    rating: 4.8,
    reviewCount: 39,
    capacity: "10-50 people",
    amenities: [
      "Period architecture",
      "Library access",
      "Grand ballroom meetings",
      "Formal gardens",
      "Antique furnishings",
      "Wine cellar",
      "Fireplace lounges",
      "Historic tours"
    ],
    images: [
      "https://images.unsplash.com/photo-1572025442646-866d16c84a54",
      "https://images.unsplash.com/photo-1541123437800-1bb1317badc2",
      "https://images.unsplash.com/photo-1574691250077-03a929faece5"
    ],
    featured: false,
    premium: true,
    category: "Heritage",
    type: "Mansion",
    availableDates: [
      { start: "2023-09-10", end: "2023-10-30" },
      { start: "2023-11-15", end: "2023-12-20" }
    ]
  },
  {
    id: 10,
    title: "Mountain Retreat Workspace",
    description: "Inspiring mountain views and fresh air to boost creativity and productivity. A perfect blend of rugged nature and comfortable, well-equipped workspaces.",
    price: 175,
    priceUnit: "per day",
    location: "Mountain Range",
    city: "Denver",
    rating: 4.7,
    reviewCount: 48,
    capacity: "5-25 people",
    amenities: [
      "Mountain views",
      "Hiking trails",
      "Outdoor decks",
      "Firepit discussions",
      "Hot tub",
      "Ski-in/ski-out",
      "Lodge restaurant",
      "Adventure equipment"
    ],
    images: [
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4",
      "https://images.unsplash.com/photo-1543465077-db45d34b88a5",
      "https://images.unsplash.com/photo-1563911302283-d2bc129e7570"
    ],
    featured: false,
    premium: true,
    category: "Retreat",
    type: "Mountain Lodge",
    availableDates: [
      { start: "2023-09-15", end: "2023-11-30" }
    ]
  }
];

// Function to get all workspaces
export const getAllWorkspaces = () => {
  return workspaces;
};

// Function to get featured workspaces
export const getFeaturedWorkspaces = () => {
  return workspaces.filter(workspace => workspace.featured);
};

// Function to get premium workspaces
export const getPremiumWorkspaces = () => {
  return workspaces.filter(workspace => workspace.premium);
};

// Function to get a workspace by its ID
export const getWorkspaceById = (id) => {
  return workspaces.find(workspace => workspace.id === Number(id));
};

// Function to get workspaces by category
export const getWorkspacesByCategory = (category) => {
  return workspaces.filter(workspace => workspace.category === category);
};

// Function to search workspaces
export const searchWorkspaces = (query) => {
  const lowercaseQuery = query.toLowerCase();
  return workspaces.filter(workspace => 
    workspace.title.toLowerCase().includes(lowercaseQuery) ||
    workspace.description.toLowerCase().includes(lowercaseQuery) ||
    workspace.location.toLowerCase().includes(lowercaseQuery) ||
    workspace.city.toLowerCase().includes(lowercaseQuery) ||
    workspace.category.toLowerCase().includes(lowercaseQuery) ||
    workspace.type.toLowerCase().includes(lowercaseQuery)
  );
};