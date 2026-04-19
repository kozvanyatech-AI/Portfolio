# Kozvanya Agency

A premium React + Vite agency website optimized for production deployment and SEO. Built with modern web technologies for exceptional performance and user experience.

## Key Features

✨ **React 18** - Latest React with improved performance  
⚡ **Vite 5** - Next-generation frontend build tool  
🎨 **Tailwind CSS 3** - Utility-first CSS framework  
🌙 **Dark Theme** - Professional dark mode by default  
📱 **Fully Responsive** - Optimized for all devices including fold phones  
🚀 **Production Ready** - Vercel deployment configured  
🔍 **SEO Optimized** - Meta tags, structured data, OG tags  
✨ **Smooth Animations** - Scroll-triggered effects and transitions  

## Quick Start

### Prerequisites
- Node.js 16+
- npm or yarn

### Installation & Development

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

Visit `http://localhost:3000`

## Page Sections

- **Hero** - Large impact heading with CTAs and animated background
- **Services** - 4 service offerings with icons and hover effects
- **Portfolio** - 3 featured projects with images and tech stacks
- **About** - Founder profile with split layout
- **Contact** - Contact form with success state
- **Features** - Key business differentiators

## Project Structure

```
kozvanya-agency/
├── src/
│   ├── components/
│   │   ├── Layout/              # Navbar, Footer, Layout
│   │   ├── HeroSection.jsx
│   │   ├── ServicesSection.jsx
│   │   ├── PortfolioSection.jsx
│   │   ├── AboutSection.jsx
│   │   ├── ContactSection.jsx
│   │   ├── Button.jsx
│   │   ├── Card.jsx
│   │   ├── Badge.jsx
│   │   └── index.js
│   ├── pages/
│   │   └── HomePage.jsx
│   ├── hooks/
│   │   ├── useInView.js        # Scroll animation hook
│   │   └── useNavbarState.js
│   ├── utils/                   # Helpers and constants
│   ├── assets/                  # Images and icons
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── public/
├── vite.config.js               # Production optimizations
├── tailwind.config.js
├── postcss.config.js
├── vercel.json                  # Vercel deployment config
├── .vercelignore
├── DEPLOYMENT.md                # Full deployment guide
└── STRUCTURE.md                 # Architecture documentation
```

## Deployment

### Deploy to Vercel (Recommended)

**Option 1: Git-based deployment**
1. Push code to GitHub/GitLab
2. Visit https://vercel.com/new
3. Import your repository
4. Vercel auto-detects Vite and deploys

**Option 2: CLI deployment**
```bash
npm i -g vercel
vercel --prod
```

Full guide: See [DEPLOYMENT.md](DEPLOYMENT.md)

### Other Platforms
- **Netlify**: Drag & drop `dist` folder
- **AWS**: S3 + CloudFront
- **GitHub Pages**: Static hosting

## Production Optimizations

Build includes:
- ✓ Minified & tree-shaken code
- ✓ Vendor code splitting
- ✓ Console logs removed
- ✓ Source maps disabled
- ✓ Gzipped assets (~140KB)

Performance targets:
- First Contentful Paint: < 1.5s
- Largest Contentful Paint: < 2.5s
- Cumulative Layout Shift: < 0.1

## SEO Features

- ✓ Meta tags (description, keywords)
- ✓ Open Graph tags (Facebook, LinkedIn)
- ✓ Twitter Card tags
- ✓ JSON-LD structured data
- ✓ Canonical URLs
- ✓ Mobile-friendly design
- ✓ Semantic HTML

## Responsive Design

Optimized for:
- Mobile phones (320px+)
- Fold devices (tested)
- Tablets (768px+)
- Desktops (1024px+)
- Large screens (1280px+)

All typography and spacing automatically scale.

## Customization

### Change Primary Colors
Edit `tailwind.config.js`:
```javascript
colors: {
  primary: {
    50: '#f0f9ff',
    500: '#0ea5e9',
    600: '#0284c7',
    // Rest of palette...
  }
}
```

### Update Content
- Edit section components in `src/components/`
- Modify text, images, links
- Update metadata in `index.html`

### Add New Sections
1. Create component in `src/components/`
2. Import in `src/pages/HomePage.jsx`
3. Add to page layout

## Technologies

- **React 18.2** - UI library
- **Vite 5** - Build tool
- **Tailwind CSS 3** - Styling
- **PostCSS** - CSS processing
- **JavaScript ES6+** - Modern JS

## Browser Support

- Chrome/Edge: Latest 2 versions
- Firefox: Latest 2 versions
- Safari: Latest 2 versions
- Mobile: All modern browsers

## Performance Metrics (After Deploy)

Check with:
- [PageSpeed Insights](https://pagespeed.web.dev)
- [WebPageTest](https://www.webpagetest.org)
- [Bundle Analyzer](https://www.npmjs.com/package/vite-plugin-visualizer)

## Future Enhancements

Consider adding:
- Blog section with CMS
- Team member profiles
- Client testimonials
- Pricing page
- Multi-language support
- Newsletter signup
- Analytics integration

## Documentation

- **Architecture**: See [STRUCTURE.md](STRUCTURE.md)
- **Deployment**: See [DEPLOYMENT.md](DEPLOYMENT.md)
- **Components**: Check files for usage examples
- **SEO**: Review index.html for meta tags

## License

MIT License - Free to use and modify

## Support

For issues or questions:
1. Check documentation files
2. Review component examples
3. Create an issue in repository

---

**Version**: 1.0.0 - Production Ready  
**Status**: ✓ Deployment Ready for Vercel
