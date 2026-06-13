# YouTube Clone

A modern, responsive YouTube clone application built with React, Vite, and Material-UI. This project demonstrates a fully functional video streaming interface that fetches real YouTube data using the YouTube API.

## 🚀 Features

- **Video Feed**: Browse videos organized by different categories (Music, Coding, Education, Gaming, Sports, and more)
- **Video Search**: Search for videos using keywords
- **Video Details**: View detailed information about individual videos with embedded player
- **Channel Details**: Explore channel information and related videos
- **Responsive Design**: Mobile-friendly interface that works seamlessly on all devices
- **Category Navigation**: Easy-to-use sidebar with multiple content categories
- **Real-time API Integration**: Fetches live YouTube data using RapidAPI

## 📋 Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Configuration](#configuration)
- [Project Structure](#project-structure)
- [Scripts](#scripts)
- [Technologies](#technologies)
- [Usage](#usage)

## 📦 Prerequisites

- Node.js (v14 or higher)
- npm or yarn package manager
- RapidAPI API Key for YouTube v3 API

## 🔧 Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd yt-clone
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Get API Key**
   - Sign up at [RapidAPI](https://rapidapi.com/)
   - Subscribe to [YouTube v3 API](https://rapidapi.com/ytdl-api-ytdl-api-default/api/youtube-v31)
   - Copy your API key

4. **Set environment variables**
   Create a `.env.local` file in the project root:
   ```env
   VITE_RAPID_API_KEY=your_api_key_here
   ```

## 🏗️ Project Structure

```
yt-clone/
├── public/                    # Static assets
├── src/
│   ├── components/           # React components
│   │   ├── ChannelCard.jsx      # Channel card component
│   │   ├── ChannelDetail.jsx    # Channel detail page
│   │   ├── Feed.jsx             # Main feed page with video list
│   │   ├── Loader.jsx           # Loading spinner component
│   │   ├── Navbar.jsx           # Navigation bar
│   │   ├── SearchBar.jsx        # Search input component
│   │   ├── SearchFeed.jsx       # Search results page
│   │   ├── SideBar.jsx          # Category sidebar navigation
│   │   ├── VideoCard.jsx        # Video card component
│   │   ├── VideoDetail.jsx      # Video detail page with player
│   │   ├── Videos.jsx           # Videos grid container
│   │   └── index.js             # Components export file
│   ├── utils/
│   │   ├── constants.jsx        # App constants and category definitions
│   │   ├── FetchFromAPI.js      # API utility functions
│   │   └── index.js             # Utilities export file
│   ├── assets/                # Media assets (images, etc.)
│   ├── App.jsx                # Main app component with routing
│   ├── main.jsx               # React entry point
│   └── index.css              # Global styles
├── index.html                 # HTML entry point
├── package.json               # Project dependencies
├── vite.config.js             # Vite configuration
├── eslint.config.js           # ESLint configuration
└── README.md                  # This file
```

## 📖 Component Details

### Core Pages

- **Feed**: Main page displaying videos categorized by type (Music, Coding, Gaming, etc.)
- **VideoDetail**: Full-screen video player with video information and recommendations
- **ChannelDetail**: Channel information with related videos
- **SearchFeed**: Search results page displaying videos matching user query

### Components

- **Navbar**: Top navigation bar with search functionality
- **SideBar**: Category navigation with icons and labels
- **VideoCard**: Individual video card display with thumbnail and metadata
- **ChannelCard**: Channel card component for channel listings
- **Loader**: Loading spinner shown while fetching data
- **Videos**: Grid container for displaying video cards
- **SearchBar**: Search input field for video queries

## 🎬 Available Categories

- New
- Coding
- Music
- Education
- Podcast
- Movie
- Gaming
- Live
- Sport
- Fashion
- Beauty
- Comedy
- Gym
- Crypto

## 🛠️ Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run ESLint
npm run lint
```

## 🔗 API Integration

The application uses the YouTube v3 API via RapidAPI to fetch:

- Video data based on search queries and categories
- Channel information
- Video details and metadata
- Related recommendations

All API calls are configured in `src/utils/FetchFromAPI.js` with:

- Base URL: `https://youtube-v31.p.rapidapi.com`
- Authentication via API key stored in environment variables
- Axios for HTTP requests

## 💻 Technologies

### Frontend

- **React 19.2.6** - UI library
- **React DOM 19.2.6** - React rendering
- **React Router 7.16.0** - Client-side routing
- **React Player 3.4.0** - Video player component

### UI & Styling

- **Material-UI 9.0.1** - Component library
- **MUI Icons 9.0.1** - Icon library
- **Emotion** - CSS-in-JS styling

### Build & Development

- **Vite 8.0.12** - Build tool and dev server
- **ESLint 10.3.0** - Code quality
- **Axios 1.17.0** - HTTP client

## 🚀 Getting Started

1. Install dependencies: `npm install`
2. Add your RapidAPI key to `.env.local`
3. Start dev server: `npm run dev`
4. Open http://localhost:5173 in your browser

## 📝 Development

- The app uses Vite for hot module replacement (HMR) during development
- ESLint is configured for code quality
- Material-UI components follow the design system standards
- React Router manages client-side navigation

## 🔐 Environment Variables

Create a `.env.local` file with:

```
VITE_RAPID_API_KEY=your_youtube_api_key
```

## 📄 License

This project is open source and available under the MIT License.

## 👨‍💻 Author

Created as a YouTube clone demonstration project - @copyright 2026
