# Deployment Guide - Kozvanya Agency

## Prerequisites

- Node.js 16+ installed
- npm or yarn package manager
- Vercel account (https://vercel.com)
- Git repository (GitHub, GitLab, or Bitbucket)

## Pre-Deployment Checklist

- ✅ Build optimizations configured (minification, tree-shaking, code splitting)
- ✅ Legacy components removed (Header, Hero, Features)
- ✅ Meta tags and SEO optimized
- ✅ Responsive design optimized for mobile and fold devices
- ✅ Console logs removed in production
- ✅ Unused imports cleaned up
- ✅ Performance optimizations in place

## Vercel Deployment Steps

### 1. Push Code to Git
```bash
git add .
git commit -m "Prepare for Vercel deployment"
git push origin main
```

### 2. Connect to Vercel

Visit https://vercel.com/new and:
1. Import your Git repository
2. Select the repository containing kozvanya-agency
3. Vercel will auto-detect Vite project settings
4. Click "Deploy"

### 3. Environment Variables (if needed)
In Vercel dashboard → Project Settings → Environment Variables:
- Add any API keys or configuration needed
- Ensure variables match your `.env.local` file

### 4. Build & Deployment
Vercel will automatically:
- Install dependencies
- Run `npm run build`
- Deploy to staging/production

### Manual Deployment (Advanced)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Deploy to production
vercel --prod
```

## Post-Deployment Checks

### 1. Performance Metrics
- PageSpeed Insights: https://pagespeed.web.dev/
- Check Core Web Vitals (LCP, FID, CLS)

### 2. SEO
- Google Search Console: Verify site ownership
- Check meta tags are being served correctly
- Verify structured data (JSON-LD)

### 3. Functionality
- Test all forms work correctly
- Verify animations perform smoothly
- Check all links/navigation
- Test on real devices (mobile, tablet, desktop)

### 4. Security
- Ensure HTTPS is enabled (automatic with Vercel)
- Check security headers in vercel.json
- Verify no sensitive data in code

## Production Optimizations Applied

### Build Optimizations
- Minification enabled (Terser)
- Console logs removed in production
- Vendor code splitting (React apps bundled separately)
- CSS/JS tree-shaking enabled

### Image Optimization
- Consider using Next.js Image component if adding images
- Use WebP format for better compression

### Caching Strategy
- Static assets cached for 1 year (immutable)
- HTML cached for 1 hour
- Configured in `vercel.json`

## Monitoring & Maintenance

### Vercel Analytics
- Enable Web Analytics in Vercel dashboard
- Monitor deployment health
- Track performance metrics

### GitHub Integration
- Push to main branch automatically triggers deploy
- Revert deployments if needed from Vercel dashboard

## Troubleshooting

### Build Fails
```bash
# Clear cache and rebuild
npm ci
npm run build
```

### Performance Issues
1. Check bundle size: `npm run build` shows size
2. Analyze bundle: Add `vite-plugin-visualizer`
3. Optimize images and large dependencies

### Mobile Display Issues
- Test on real devices
- Check viewport meta tag
- Verify Tailwind breakpoints

## Environment Configuration

### Production
- NODE_ENV=production
- Minimized bundle
- No source maps
- Analytics enabled

### Preview/Staging
- Full error reporting
- Source maps available
- For testing before production

## Domain Setup

1. In Vercel dashboard: Project Settings → Domains
2. Add your custom domain (e.g., kozvanya.com)
3. Update DNS records as instructed
4. SSL certificate auto-provisioned

## Rollback & Redeployment

If issues occur:
1. Go to Vercel dashboard → Deployments
2. Find previous working deployment
3. Click "Promote to Production"
4. Or push a fix and redeploy

## Performance Targets

- First Contentful Paint (FCP): < 1.5s
- Largest Contentful Paint (LCP): < 2.5s
- Cumulative Layout Shift (CLS): < 0.1
- Bundle Size: < 150KB (gzipped)

## Resources

- Vercel Docs: https://vercel.com/docs
- Vite Docs: https://vitejs.dev/
- React Docs: https://react.dev/
- Tailwind CSS: https://tailwindcss.com/
