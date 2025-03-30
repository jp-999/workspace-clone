# WorkSpace - Workspace Rental Platform

A modern, futuristic platform where professionals can rent office spaces, meeting rooms, or coworking environments. Built with React.js and styled with Tailwind CSS.

## Features

- **Discover Workspaces**: Browse through a curated selection of high-quality office spaces
- **Detailed Listings**: View comprehensive information about each workspace, including amenities, pricing, and availability
- **Booking System**: Select dates and book spaces directly through the platform
- **Responsive Design**: Fully responsive interface that works on desktop, tablet, and mobile devices
- **Modern UI**: Futuristic and sleek design with glassmorphism, gradients, and animations

## Tech Stack

- **React.js**: Frontend framework
- **React Router**: For navigation
- **Context API**: For state management
- **Framer Motion**: For animations
- **Tailwind CSS**: For styling
- **Axios**: For API calls (using mock data for this demo)

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/workspace-clone.git
cd workspace-clone
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Start the development server:
```bash
npm start
# or
yarn start
```

4. Open [http://localhost:3000](http://localhost:3000) to view the app in your browser.

## Project Structure

```
workspace-clone/
├── public/              # Static files
│   ├── index.html
│   └── ...
├── src/
│   ├── components/      # Reusable UI components
│   │   ├── common/      # Shared components (Button, Card, etc.)
│   │   ├── listings/    # Components related to workspace listings
│   │   ├── booking/     # Components for booking functionality
│   │   └── navigation/  # Navigation components (Header, Footer)
│   ├── pages/           # Page components
│   │   ├── Home.jsx
│   │   ├── ListingDetails.jsx
│   │   └── About.jsx
│   ├── services/        # Services (API calls, mock data)
│   ├── context/         # Context API for state management
│   ├── utils/           # Utility functions
│   ├── assets/          # Images, fonts, etc.
│   ├── App.js           # Main app component
│   └── index.js         # Entry point
└── ...
```

## Deployment

This project is configured to be deployed on Vercel. Just connect your GitHub repository to Vercel, and it will automatically deploy your application.

## Future Enhancements

- Integration with a real backend API
- User authentication and profiles
- Payment processing
- Review and rating system
- Advanced search and filtering
- Interactive maps for location-based search

## License

This project is licensed under the MIT License - see the LICENSE file for details. 