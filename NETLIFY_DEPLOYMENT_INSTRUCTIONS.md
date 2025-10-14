# Buds Rewards - Netlify Deployment Instructions

## 📦 Package Contents

The `buds-site-netlify.zip` file contains:
- `dist/` - Production build of the React application
- `netlify.toml` - Netlify configuration for proper routing
- `dist/_redirects` - Redirect rules for SPA routing
- `package.json` - Project dependencies

## 🚀 Deployment Steps

### Option 1: Drag & Drop (Easiest)

1. Go to [Netlify](https://app.netlify.com/)
2. Log in or create an account
3. Click "Add new site" → "Deploy manually"
4. Drag and drop the `dist` folder from the unzipped package
5. Wait for deployment to complete
6. Your site will be live at a Netlify URL (e.g., `random-name-123.netlify.app`)

### Option 2: Netlify CLI

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login to Netlify
netlify login

# Deploy
cd /path/to/unzipped/buds-site
netlify deploy --prod --dir=dist
```

### Option 3: GitHub Integration (Recommended for Production)

1. Push the repository to GitHub
2. Go to Netlify → "Add new site" → "Import an existing project"
3. Connect to GitHub and select your repository
4. Build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
5. Click "Deploy site"

## 🔧 Configuration

The included `netlify.toml` file configures:
- Build command: `npm run build`
- Publish directory: `dist`
- SPA routing redirects (all routes → `/index.html`)

The `_redirects` file ensures that all routes work properly with React Router.

## 🌐 Site Routes

Once deployed, the following routes will be accessible:

### Consumer Routes
- `/` - Main Buds landing page
- `/budspro` - BudsPro premium tier page

### Partner Routes (B2B)
- `/partners` - Partner landing page
- `/partners/login` - Partner login page
- `/partners/dashboard` - Partner analytics dashboard

## ✅ Post-Deployment Checklist

- [ ] Test all routes work correctly
- [ ] Verify navigation between pages
- [ ] Check partner dashboard loads properly
- [ ] Test responsive design on mobile
- [ ] Verify all images load correctly
- [ ] Test form submissions (login page)

## 🎨 Custom Domain (Optional)

To add a custom domain:
1. Go to Site settings → Domain management
2. Click "Add custom domain"
3. Follow the DNS configuration instructions
4. Netlify will automatically provision SSL certificate

## 📊 Features Included

### Main Site
- Buds loyalty program landing page
- BudsPro invite-only premium tier
- Responsive design with animations
- Modern gradient aesthetics

### Partner Portal
- Secure login interface
- Comprehensive analytics dashboard
- Real-time customer insights
- Purchase and redemption tracking
- Customer demographics visualization
- Top products and rewards analytics
- Exportable reports

## 🔐 Security Notes

- The demo login accepts any credentials (for demonstration purposes)
- For production, implement proper authentication backend
- Add environment variables for API keys in Netlify dashboard
- Enable HTTPS (automatic with Netlify)

## 📞 Support

For issues or questions about deployment, refer to:
- [Netlify Documentation](https://docs.netlify.com/)
- [React Router Deployment Guide](https://reactrouter.com/en/main/guides/deployment)

---

**Built with**: React, React Router, Tailwind CSS, Framer Motion, shadcn/ui
**Deployment Ready**: ✅ Optimized for Netlify

