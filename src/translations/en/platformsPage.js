// PlatformsPage translations (English)
export const platformsPage = {
  hero: {
    badge: "🚀 Platform Integration Program 🌐",
    title: "Power your marketplace with Buds loyalty rewards",
    subtitle: "Increase GMV, attract sellers, drive network effects—without operational burden",
    description: "Integrate Buds into your platform to offer sellers a ready-made loyalty solution. Your merchants donate overstock, their customers earn rewards, and you increase marketplace GMV without discounting."
  },
  
  benefits: {
    title: "What platforms get",
    items: [
      {
        title: "Increase Marketplace GMV",
        description: "Sellers using Buds see 23% higher AOV. More revenue per transaction = more platform fees for you.",
        metric: "+23% AOV"
      },
      {
        title: "Attract & Retain Sellers",
        description: "Offer a ready-made loyalty solution. Sellers get enterprise-grade rewards without building it themselves.",
        metric: "Seller USP"
      },
      {
        title: "Cross-Seller Discovery",
        description: "Customers redeeming rewards from Seller A discover Seller B. Network effects drive marketplace growth.",
        metric: "Network Effect"
      },
      {
        title: "No Platform Liability",
        description: "Buds handles all reward fulfillment, customer service, and compliance. Zero operational burden on your platform.",
        metric: "Zero Ops"
      }
    ]
  },
  
  integrationOptions: {
    title: "Integration options",
    subtitle: "Choose the model that fits your platform",
    items: [
      {
        title: "White-Label Integration",
        description: "Buds runs under your platform brand",
        features: [
          "Your branding throughout",
          "Seamless UX in your checkout",
          "Platform-controlled reward catalog",
          "Custom commission structure"
        ],
        bestFor: "Large marketplaces with strong brand"
      },
      {
        title: "Co-Branded Integration",
        description: "Powered by Buds, featured on your platform",
        features: [
          "Buds + Your brand together",
          "Shared marketing materials",
          "Standard reward catalog",
          "Revenue share model"
        ],
        bestFor: "Growing marketplaces seeking quick value"
      },
      {
        title: "API-Only Integration",
        description: "Build your own UI on Buds infrastructure",
        features: [
          "Full API access",
          "Custom frontend implementation",
          "Flexible reward logic",
          "Developer-friendly docs"
        ],
        bestFor: "Technical platforms with custom needs"
      }
    ]
  },
  
  revenueModels: {
    title: "Revenue models",
    subtitle: "Multiple ways to monetize Buds on your platform",
    items: [
      {
        model: "Commission on Redemptions",
        description: "Earn % of reward value when customers redeem",
        example: "Customer redeems €50 reward → Platform earns €5 (10%)",
        pros: ["Performance-based", "No upfront cost", "Scales with usage"]
      },
      {
        model: "Seller Subscription Upsell",
        description: "Charge sellers for Buds access as premium feature",
        example: "€49/month for Buds integration in Pro plan",
        pros: ["Recurring revenue", "Increases plan value", "Predictable income"]
      },
      {
        model: "Hybrid Model",
        description: "Base subscription + commission on high-value redemptions",
        example: "€29/month + 5% on rewards >€100",
        pros: ["Balanced risk/reward", "Multiple revenue streams", "Flexible pricing"]
      }
    ]
  },
  
  examples: {
    title: "Platform success stories",
    items: [
      {
        platform: "Multi-Vendor Fashion Marketplace",
        sellers: "450 sellers",
        integration: "Co-Branded",
        result: "Sellers using Buds had 31% higher repeat purchase rate. Platform GMV increased 18% with zero additional marketing spend.",
        metric: "+18% GMV"
      },
      {
        platform: "Wellness & CBD Platform",
        sellers: "120 sellers",
        integration: "White-Label",
        result: "Positioned as platform-exclusive benefit. Seller churn reduced 40%, new seller signups increased 55%.",
        metric: "-40% churn"
      },
      {
        platform: "Local Delivery Network",
        sellers: "280 sellers",
        integration: "API-Only",
        result: "Built custom reward tiers by delivery zone. Cross-seller discovery up 67%, average basket size +€12.",
        metric: "+€12 basket"
      }
    ]
  },
  
  technicalSpecs: {
    title: "Technical specifications",
    subtitle: "Built for developers, designed for scale",
    items: [
      {
        category: "Authentication",
        details: "OAuth 2.0, JWT tokens, Webhook support for real-time events"
      },
      {
        category: "Reward Catalog API",
        details: "Filter by category, value, seller, geography. Real-time inventory updates"
      },
      {
        category: "Redemption Flow",
        details: "Checkout widget embed or API-driven custom UI. Co-pack or central fulfillment"
      },
      {
        category: "Analytics & Reporting",
        details: "Platform dashboard, seller dashboards, CSV exports, custom reporting API"
      },
      {
        category: "Compliance",
        details: "GDPR/DSGVO compliant, age verification hooks, geo-restriction support"
      }
    ]
  },
  
  faqs: {
    title: "Platform FAQs",
    items: [
      {
        q: "Do our sellers need to donate inventory?",
        a: "No. Sellers can participate purely by offering partner rewards to their customers. Donating inventory improves their reward placement, but it's optional."
      },
      {
        q: "How do we control which rewards appear on our platform?",
        a: "Full control via platform admin panel. Approve/reject rewards, set categories, filter by value range, restrict by geography, or curate specific collections."
      },
      {
        q: "What's our revenue share?",
        a: "Flexible based on integration type. Typical range: 10-20% commission on redemptions, or seller subscription model (€29-99/month). Custom deals for large platforms."
      },
      {
        q: "How does fulfillment work?",
        a: "Buds handles it. Either co-pack (seller ships directly) or central (our 3PL ships). Your platform has zero fulfillment burden or customer service load."
      },
      {
        q: "Can we white-label this completely?",
        a: "Yes, for white-label integration. Buds branding is removed, replaced with yours. Requires minimum platform GMV threshold."
      },
      {
        q: "What if a seller leaves our platform?",
        a: "Their donated inventory stays in the Buds network but stops appearing on your platform. No impact on other sellers or customers."
      },
      {
        q: "How long does integration take?",
        a: "Co-branded: 1-2 weeks. White-label: 4-6 weeks. API-only: Depends on your dev team, typically 2-4 weeks with our support."
      },
      {
        q: "Do you compete with our platform?",
        a: "Never. Buds is B2B infrastructure only. We don't operate consumer-facing marketplaces. You're our customer, not our competitor."
      }
    ]
  },
  
  cta: {
    title: "Ready to integrate Buds?",
    subtitle: "Join leading marketplaces powering loyalty with Buds",
    applyButton: "Apply for Integration",
    dashboardButton: "View Sample Dashboard",
    loginButton: "Platform Login"
  }
}

