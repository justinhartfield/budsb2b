# Files to Update for New Business Model

## Business Model Changes Summary

### OLD MODEL:
- Complex Donor Score system (monthly calculation based on donations)
- Dynamic placement based on donation performance
- Heavy emphasis on product donations and co-packing
- Multiple tiers based on Donor Score performance

### NEW MODEL:
- Standard coalition loyalty program (Comarch out-of-box)
- Partners pay membership fees (€500-5k/month) based on fixed tiers
- Members earn Buds credits (1 credit per €1 spent)
- Fixed tier system: Basic, Growth, Enterprise
- Reward catalog: 80% standard vouchers (Amazon, travel), 20% premium cannabis (manually curated)
- Partners can optionally donate products (tracked manually in Airtable)
- No dynamic Donor Score

## Files Requiring Updates

### 1. Documentation Files
- [x] README.md - Update overview and business model description
- [ ] NETLIFY_DEPLOYMENT_INSTRUCTIONS.md - Check for any business model references

### 2. Main Page Files (Consumer-Facing)
- [ ] src/pages/BudsPage.jsx - Remove Donor Score, update reward catalog description, simplify partner model
- [ ] src/pages/BudsProPage.jsx - Review for any business model references
- [ ] src/pages/ExistingLoyaltyPage.jsx - Update integration messaging

### 3. Partner-Facing Pages
- [ ] src/pages/PartnersPage.jsx - Major update: Replace Donor Score with fixed tiers (Basic/Growth/Enterprise)
- [ ] src/pages/PharmaciesPage.jsx - Update pharmacy-specific partner messaging
- [ ] src/pages/ManufacturersPage.jsx - Update manufacturer messaging, simplify donation model
- [ ] src/pages/PlatformsPage.jsx - Update platform integration messaging
- [ ] src/pages/PartnerDashboardPage.jsx - Remove Donor Score references, update analytics

### 4. Translation Files (English)
- [ ] src/translations/en/common.js
- [ ] src/translations/en/budsProPage.js
- [ ] src/translations/en/existingLoyaltyPage.js
- [ ] src/translations/en/manufacturersPage.js
- [ ] src/translations/en/pharmaciesPage.js
- [ ] src/translations/en/platformsPage.js

### 5. Translation Files (German)
- [ ] src/translations/de/common.js
- [ ] src/translations/de/budsProPage.js
- [ ] src/translations/de/existingLoyaltyPage.js
- [ ] src/translations/de/manufacturersPage.js
- [ ] src/translations/de/pharmaciesPage.js
- [ ] src/translations/de/platformsPage.js

### 6. Data Files
- [ ] src/data/allTranslations.js - Remove all Donor Score references
- [ ] src/data/fullTranslations.js - Check for business model references
- [ ] src/data/partnerContent.js - Update partner tier structure
- [ ] src/data/translations.js - Check for business model references

### 7. Components
- [ ] src/components/RewardsShowcase.jsx - Update reward descriptions to reflect 80/20 split

## Key Content Changes Needed

### Remove/Replace:
- "Donor Score" → "Membership Tier" (Basic, Growth, Enterprise)
- Dynamic placement based on donations → Fixed tier benefits
- Monthly donation targets → Optional product donations
- Co-packing emphasis → Simple membership fees
- Complex analytics tied to Donor Score → Standard analytics for all tiers

### Add/Emphasize:
- Fixed monthly membership fees (€500-5k/month)
- Three clear tiers: Basic, Growth, Enterprise
- Standard coalition loyalty program (Comarch platform)
- 1 credit per €1 spent earning structure
- 80% standard vouchers (Amazon, travel, experiences) via Comarch
- 20% premium cannabis products (manually curated, limited inventory)
- Optional product donations tracked in Airtable
- Standard benefits: widget, analytics, newsletter mentions

### Reward Catalog Updates:
- Emphasize standard voucher catalog (Amazon, travel, experiences)
- De-emphasize cannabis products (now 20%, limited, manually curated)
- Remove references to complex redemption mechanics
- Simplify to: earn credits, redeem from catalog
