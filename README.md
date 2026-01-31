# còlmemusica

![Screenshot](docs-screenshot.png)

A music portfolio website showcasing album artwork with streaming service links for an artist's discography.

## Features

- **Infinite Draggable Grid** - Physics-based momentum scrolling with smooth drag and wheel support
- **Streaming Service Integration** - Clickable links to Spotify, Apple Music, YouTube Music, Deezer, and Amazon Music
- **Hover Effects** - Full backdrop overlay reveals available streaming platforms
- **Responsive Design** - Works on desktop and mobile devices
- **Touch Support** - Fully interactive on touch devices

## Tech Stack

- **React 18.3.1** - UI framework
- **TypeScript** - Type safety
- **Vite 5.4.10** - Build tool and dev server
- **ESLint 9.13.0** - Code linting

## Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Adding Records

To add a new album to the collection, edit `src/records.db.json`:

```json
{
  "id": "your:unique:id",
  "name": "Album Name",
  "releaseYear": 2025,
  "services": [
    {
      "name": "Spotify",
      "url": "https://open.spotify.com/album/your-album-id"
    },
    {
      "name": "Apple Music",
      "url": "https://music.apple.com/album/your-album-id"
    }
  ],
  "artwork": "/artworks/your-album-art.png"
}
```

### Steps:

1. Add album metadata to `src/records.db.json`
2. Include streaming services with their URLs (optional)
3. Place album artwork in `public/artworks/` folder
4. Supported streaming services: "Spotify", "YouTube Music", "Apple Music", "Deezer", "Amazon Music"

## Project Structure

```
colmemusica/
├── public/
│   ├── artworks/         # Album cover images
│   ├── services/        # Streaming service icons
│   ├── logo.jpeg        # Main logo
│   └── favico.png      # Favicon
├── src/
│   ├── App.tsx          # Main component
│   ├── Grid.tsx         # Physics-based infinite grid (526 lines)
│   ├── main.tsx         # React entry point
│   ├── records.ts       # TypeScript interfaces
│   ├── records.db.json  # Album data
│   └── styles.css      # Global styles
├── docs-screenshot.png  # Application screenshot
└── package.json
```

## Styling

The application uses a dark theme with the following key styles:

- **Gap Between Items** - Two-layer structure creates visual spacing
- **Hover Backdrop** - Full overlay covers album on hover
- **Brightness Filter** - Darkens artwork to highlight icons
- **Service Icons** - 48px icons with hover scale effect
- **Grid Size** - 300px × 300px per item

### Customization

Edit `src/styles.css` to modify:
- `--grid-item-size` - Grid cell dimensions
- Hover effects and transitions
- Backdrop colors and blur effects
- Icon sizing and positioning

## Deployment

The application is ready for static deployment:

```bash
# Build the project
npm run build

# Output is in dist/ folder
# Deploy dist/ contents to your hosting provider
```

## Components

### Grid Component
A class-based component implementing:
- Momentum-based physics scrolling
- Spiral layout algorithm for infinite items
- Mouse, touch, and wheel event handling
- Throttled updates for performance

### Record Rendering
Each record displays:
- Album artwork (full size)
- Streaming service icons (on hover)
- Clickable links to each platform
- Smooth transitions and hover effects

## Attribution

This project uses AI-assisted development with ethical attribution tracking.
See [AI-HUMAN-ATTRIBUTION.md](./AI-HUMAN-ATTRIBUTION.md) for detailed contribution logs.

## License

Private project © 2026 còlmemusica
