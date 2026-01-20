# Nomad Local

A modern web application for digital nomads built with React, Vite, and Tailwind CSS.

## Features

- 🌍 Discover trending locations worldwide
- 👥 Connect with local digital nomad communities
- 📡 Verified fast Wi-Fi maps for workspaces
- 🏠 Access to vetted housing options
- 📱 Fully responsive design

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Install dependencies:

```bash
npm install
```

2. Start development server:

```bash
npm run dev
```

The app will open at `http://localhost:3000`

### Build for Production

```bash
npm run build
```

This creates optimized production files in the `dist/` folder.

### Preview Production Build

```bash
npm run preview
```

## Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project" and select your GitHub repository
4. Vercel will automatically detect Vite and build settings
5. Click "Deploy"

### Deploy to Netlify

1. Push your code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Click "New site from Git" and select your repository
4. Set build command: `npm run build`
5. Set publish directory: `dist`
6. Click "Deploy"

### Deploy to AWS S3 + CloudFront

1. Build the project: `npm run build`
2. Upload the `dist/` folder to an S3 bucket
3. Create a CloudFront distribution pointing to your S3 bucket

## Project Structure

```
├── index.html          # Main HTML file
├── main.jsx           # React entry point
├── NomadLocal.jsx     # Main component
├── index.css          # Global styles
├── vite.config.js     # Vite configuration
├── tailwind.config.js # Tailwind CSS configuration
└── package.json       # Dependencies and scripts
```

## Technology Stack

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Icon library

## License

MIT
