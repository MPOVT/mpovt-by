# JSC "MPOVT" Web App

A modern, visually-rich website for the commercial property rental division of OAO "MPOVT". Built with React, Vite, and Tailwind CSS, this project delivers a premium, adaptive user experience for showcasing available rental spaces, amenities, and company advantages.


## 🚀 Live Demo

Visit the production site: [lovable preview link](https://preview--mpovt-by.lovable.app/)


## ✨ Features

- **Modern UI/UX**: Unique color palettes, animated gradients, and glowing effects for each section.
- **Responsive Design**: Fully adaptive for desktop and mobile, with custom mobile-only UI for key blocks.
- **Animated Cards**: Passive 3D tilt/parallax, hover glows, and color-synced icons.
- **Sticky Table Header**: Modern, scrollable price list with sticky header and engineering info icons.
- **Sectioned Content**: Clear separation of advantages, main info, types of spaces, amenities, price list, and contacts.
- **Reusable UI Components**: Card, Button, Badge, and more, styled for consistency and flexibility.
- **Lucide Icons**: Rich iconography for engineering features, contacts, and amenities.
- **Dark Mode**: All sections styled for a dark, modern look.


## 🛠️ Tech Stack & Tools

- **React** (with functional components and hooks)
- **Vite** (blazing fast dev/build)
- **TypeScript** (strict typing)
- **Tailwind CSS** (utility-first styling)
- **PostCSS** (for Tailwind and future CSS features)
- **Lucide-react** (icon set)
- **lovable.dev** (production hosting and site skeleton)


## 📁 File Structure

```
mpovt-by/
├── public/                # Static assets (favicons, images, uploads)
├── src/
│   ├── App.tsx            # Main app entry
│   ├── main.tsx           # Vite entry point
│   ├── index.css          # Tailwind base styles
│   ├── components/        # Reusable UI components
│   │   ├── ui/            # Card, Button, Badge, etc.
│   │   ├── Footer.tsx     # Site footer
│   │   ├── ...
│   ├── contexts/          # React context providers
│   ├── hooks/             # Custom React hooks
│   ├── lib/               # Utility functions
│   ├── locales/           # i18n translations
│   ├── pages/             # Main site pages (RentalAreas, AntiCorruption, etc.)
│   └── ...
├── tailwind.config.ts     # Tailwind config
├── vite.config.ts         # Vite config
├── package.json           # Project metadata & scripts
├── README.md              # Project documentation (EN)
├── ...
```


## 🧩 Component & UI Logic

- **Card Blocks**: Each section (advantages, amenities, etc.) uses a unique color palette and animated background. Cards feature passive 3D tilt (CSS keyframes), hover glows, and color-synced icons/titles.
- **Main Info & Location**: Info rows use colored icon backgrounds only, not full-row backgrounds, for clarity and modern look.
- **Amenities**: Cards animate with passive 3D tilt, matching the main page's "Why work with us?" block.
- **Price List Table**: Desktop: sticky header, color-coded columns, engineering info with icons, four repair statuses. Mobile: modern card with download button and decorative glows.
- **Section Headers**: Gradient text, background glows, and clear separation for each block.
- **Footer**: Consistent, minimal, and styled to match the overall theme.


## 📦 Installation & Local Development

1. **Clone the repo:**
   ```sh
   git clone https://github.com/MPOVT/mpovt-by.git
   cd mpovt-by
   ```
2. **Install dependencies:**
   ```sh
   npm install
   # or
   bun install
   ```
3. **Start the dev server:**
   ```sh
   npm run dev
   # or
   bun run dev
   ```
4. **Open in browser:**
   Visit [http://localhost:5173](http://localhost:5173)


## 📝 Scripts

- `dev` – Start local dev server
- `build` – Production build
- `preview` – Preview production build
- `lint` – Lint code with ESLint


## 🌍 Internationalization

- All UI text is ready for translation. See `src/locales/` for language files.


## 🤝 Credits

- First development stages by [lovable.dev](https://lovable.dev)
- Icons by [Lucide](https://lucide.dev)
- Sponsored by [JSC "MPOVT"](https://mpovt.by)
- Special thanks to the JSC "MPOVT" team for content and feedback.


## 📄 License

This project is proprietary and for internal use by JSC "MPOVT". Contact [JSC "MPOVT"](https://mpovt.by) for partnership or licensing inquiries.
