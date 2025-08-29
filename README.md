# NVIDIA GTC Keynote Website

A React-based recreation of the NVIDIA GTC Keynote webpage layout, featuring a video player section and AI chatbot interface.

## Features

- **Responsive Design**: Works on desktop, tablet, and mobile devices
- **Modern UI**: Clean, professional design matching NVIDIA's aesthetic
- **Video Player Section**: Interactive video player with controls
- **AI Chatbot Interface**: Styled chatbot section with disclaimers
- **Netlify Ready**: Configured for easy deployment

## Tech Stack

- React 18
- CSS3 with Flexbox/Grid
- React Icons
- Netlify for deployment

## Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd nvidia-gtc-keynote
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The app will open at `http://localhost:3000`

### Building for Production

```bash
npm run build
```

## Deployment on Netlify

### Option 1: Deploy via Netlify UI

1. Push your code to GitHub
2. Go to [Netlify](https://netlify.com) and sign in
3. Click "New site from Git"
4. Choose your repository
5. Set build command: `npm run build`
6. Set publish directory: `build`
7. Click "Deploy site"

### Option 2: Deploy via Netlify CLI

1. Install Netlify CLI:
```bash
npm install -g netlify-cli
```

2. Build the project:
```bash
npm run build
```

3. Deploy:
```bash
netlify deploy --prod --dir=build
```

## Project Structure

```
src/
├── components/
│   ├── Header.js          # Navigation and logo
│   ├── VideoSection.js    # Video player and keynote details
│   ├── ChatbotSection.js  # AI chatbot interface
│   └── Footer.js          # Bottom text
├── App.js                 # Main app component
├── App.css               # Main app styles
├── index.js              # React entry point
└── index.css             # Global styles
```

## Customization

- **Colors**: Update the CSS variables in the component files to match your brand
- **Content**: Modify the text content in the component files
- **Logo**: Replace the CSS-based logo with your own image in the Header component
- **Video**: Update the video player to use your actual video content

## License

This project is for educational/demonstration purposes. NVIDIA branding and content are property of NVIDIA Corporation.
