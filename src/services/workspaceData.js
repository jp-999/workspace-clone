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
      "https://images.unsplash.com/photo-1545079968-1feb76f367d7",
      "https://images.unsplash.com/photo-1594732832278-abd644401426",
      "https://images.unsplash.com/photo-1628157588553-5eeea00af15c"
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