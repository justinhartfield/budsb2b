# 🌿 Buds Rewards - Cannabis Loyalty Program

A comprehensive cannabis loyalty platform with consumer-facing rewards program and B2B partner analytics portal.

![Buds Rewards](https://img.shields.io/badge/Status-Pre--Launch-green)
![React](https://img.shields.io/badge/React-18.3-blue)
![License](https://img.shields.io/badge/License-MIT-yellow)

## 🎯 Overview

Buds is a cannabis loyalty program launching Summer 2026. Customers collect Buds when they purchase cannabis products and redeem them for exclusive rewards, experiences, and merchandise.

**Tagline:** *Rewards That Hit Different*

## ✨ Features

### Consumer Experience

- **🏠 Home Dispensary** - Set your favorite dispensary and earn double Buds
- **💳 NFC Card** - Tap to collect Buds at participating locations
- **🎁 Rewards Catalog** - Browse and redeem exclusive rewards
- **⭐ BudsPro Tier** - Invite-only premium membership with exclusive perks

### Partner Portal (B2B)

- **📊 Real-Time Analytics** - Track customer behavior and purchases
- **👥 Customer Insights** - Demographics, spending patterns, and loyalty metrics
- **📈 Performance Metrics** - ROI tracking and engagement analytics
- **🎯 Product Analytics** - Top-selling products and redemption trends
- **🔒 Secure Access** - Enterprise-grade authentication and data protection

## 🚀 Tech Stack

- **Frontend:** React 18.3, Vite
- **Routing:** React Router DOM
- **Styling:** Tailwind CSS
- **UI Components:** shadcn/ui
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Charts:** Recharts

## 📁 Project Structure

```
buds-site/
├── src/
│   ├── assets/          # Images and static assets
│   ├── components/      # Reusable components
│   │   ├── ui/         # shadcn/ui components
│   │   └── Navigation.jsx
│   ├── pages/          # Page components
│   │   ├── BudsPage.jsx
│   │   ├── BudsProPage.jsx
│   │   ├── PartnersPage.jsx
│   │   ├── PartnerLoginPage.jsx
│   │   └── PartnerDashboardPage.jsx
│   ├── App.jsx         # Main app component
│   └── main.jsx        # Entry point
├── public/             # Public assets
└── dist/              # Production build
```

## 🌐 Routes

### Consumer Routes
- `/` - Main landing page
- `/budspro` - BudsPro premium tier information

### Partner Routes (B2B)
- `/partners` - Partner landing page
- `/partners/login` - Partner authentication
- `/partners/dashboard` - Analytics dashboard

## 🛠️ Development

### Prerequisites

- Node.js 22.13.0 or higher
- npm or pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/justinhartfield/budsb2b.git
cd budsb2b

# Install dependencies
npm install

# Start development server
npm run dev
```

The site will be available at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The production build will be in the `dist/` directory.

## 🚢 Deployment

### Netlify (Recommended)

1. **Drag & Drop:**
   - Build the project: `npm run build`
   - Drag the `dist` folder to [Netlify Drop](https://app.netlify.com/drop)

2. **GitHub Integration:**
   - Connect this repository to Netlify
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Netlify will auto-deploy on every push

The included `netlify.toml` and `_redirects` files ensure proper SPA routing.

### Other Platforms

The site is a standard React SPA and can be deployed to:
- Vercel
- GitHub Pages
- AWS S3 + CloudFront
- Any static hosting service

## 🎨 Design System

### Color Palette

**Consumer (Buds):**
- Primary: Green to Cyan gradient
- Background: Vibrant multi-color gradients
- Accent: Purple, Pink

**Premium (BudsPro):**
- Primary: Gold/Yellow (#FFD700)
- Background: Black (#000000)
- Accent: Metallic gold tones

**Partner Portal:**
- Primary: Green to Cyan gradient
- Background: Dark gray (#1a1a1a) to Black
- Accent: Blue, Purple, Orange (for metrics)

## 📊 Partner Dashboard Features

The B2B partner portal provides comprehensive analytics:

### Key Metrics
- Active customer count with growth trends
- Total purchase revenue
- Rewards redemption tracking
- Average customer lifetime value

### Analytics
- **Purchase Trends** - Daily/weekly/monthly revenue charts
- **Customer Demographics** - Age distribution and segmentation
- **Top Products** - Best-selling items with revenue data
- **Top Redemptions** - Most popular rewards
- **Recent Activity** - Real-time customer actions
- **Customer Insights** - Individual customer profiles and behavior

### Export & Reporting
- Downloadable reports
- Time range filtering (7d, 30d, 90d, 1y)
- Search and filter capabilities

## 🔐 Security

- Partner portal requires authentication
- Demo mode accepts any credentials (for demonstration)
- Production deployment should implement:
  - Backend authentication API
  - JWT token management
  - Role-based access control
  - Data encryption

## 🌟 BudsPro Perks

Invite-only premium tier includes:

1. **Backdated Buds** - Credit for past purchases
2. **+1 Perks** - Additional benefit tier
3. **Early Access** - First access to limited drops
4. **Unique NFC Card** - Exclusive black card
5. **Preferential Prices** - Member-only discounts
6. **Sticker Packs & Emojis** - Exclusive digital content
7. **Pro Rewards** - Exclusive tier rewards
8. **Invite Only Experiences** - VIP events and tours

## 📝 License

MIT License - see LICENSE file for details

## 🤝 Contributing

This is a private project for Buds Rewards. For partnership inquiries, please contact through the partner portal.

## 📞 Contact

- **Website:** [budsrewards.com](https://budsrewards.com)
- **Partner Portal:** `/partners`
- **Launch:** Summer 2026

---

**Built with ❤️ for the cannabis community**

*Rewards that hit different.*

