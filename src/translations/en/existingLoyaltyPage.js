// ExistingLoyaltyPage translations (English)
export const existingLoyaltyPage = {
  hero: {
    badge: "🔄 Loyalty Augmentation Program ✨",
    title: "Already have a loyalty program?",
    subtitle: "Buds enhances your existing rewards",
    description:
      "Add partner brand rewards as a bonus layer without replacing your current system. Increase customer engagement, expand your catalog, and boost checkout conversion—all at zero cost."
  },
  objections: [
    {
      objection: "We already have a loyalty program",
      solution: "Buds doesn't replace it—we enhance it",
      details:
        "Your existing points, tiers, and rewards stay exactly as they are. Buds runs alongside as a supplementary reward layer, giving your customers more value without changing your current system."
    },
    {
      objection: "We can't afford another loyalty program",
      solution: "Buds costs you nothing",
      details:
        "Zero setup fees, zero monthly costs, zero per-transaction fees. Partners donate overstock inventory—you simply integrate the widget. Your customers get more rewards, you pay nothing extra."
    },
    {
      objection: "Our customers are already engaged",
      solution: "Make them even more engaged",
      details:
        "Buds adds 23% higher AOV and increases redemption rates by offering exclusive rewards from partner brands. Your engaged customers become super-engaged with access to a wider reward catalog."
    },
    {
      objection: "Integration will be too complex",
      solution: "5-minute plugin installation",
      details:
        "Our Shopify/WooCommerce plugin installs in minutes and works alongside your existing loyalty platform. No API conflicts, no data migration, no technical headaches."
    },
    {
      objection: "We don't want to share customer data",
      solution: "Your data stays yours",
      details:
        "Buds is GDPR-compliant and never accesses your customer data. We only track widget engagement (anonymous). Your customer relationships and data remain 100% under your control."
    },
    {
      objection: "Our program already drives results",
      solution: "Stack the results even higher",
      details:
        "Keep your current ROI and add Buds on top. Partners see average 15% increase in checkout conversion when Buds rewards are available alongside their existing program."
    }
  ],
  integrationModes: [
    {
      title: "Parallel Mode (Recommended)",
      description: "Buds runs alongside your existing program",
      features: [
        "Your points system stays unchanged",
        "Buds rewards appear as bonus options",
        "Customers can use both programs",
        "Zero conflict, maximum value"
      ],
      example: "Customer earns your points + can redeem Buds rewards"
    },
    {
      title: "Hybrid Mode",
      description: "Convert your points to Buds credits",
      features: [
        "Optional points conversion at checkout",
        "Expand your reward catalog instantly",
        "Maintain your point economy",
        "Buds handles fulfillment"
      ],
      example: "1000 your points = 100 Buds credits for partner rewards"
    },
    {
      title: "Augmented Mode",
      description: "Buds rewards unlock at higher tiers",
      features: [
        "Reserve Buds for VIP/top tiers",
        "Create aspirational tier benefits",
        "Incentivize tier progression",
        "Exclusive partner brand access"
      ],
      example: "Gold tier+ members get access to Buds reward catalog"
    }
  ],
  comparisonTable: {
    features: [
      { feature: "Your existing points", yours: true, buds: false, together: true },
      { feature: "Your existing rewards", yours: true, buds: false, together: true },
      { feature: "Your tier system", yours: true, buds: false, together: true },
      { feature: "Your customer data", yours: true, buds: false, together: true },
      { feature: "Partner brand rewards", yours: false, buds: true, together: true },
      { feature: "Zero-cost reward expansion", yours: false, buds: true, together: true },
      { feature: "Overstock relief for you", yours: false, buds: true, together: true },
      { feature: "Network effect benefits", yours: false, buds: true, together: true }
    ]
  },
  useCases: [
    {
      brand: "Fashion Retailer",
      existing: "Points-based program with tier system",
      integration: "Parallel Mode",
      result:
        "Added VIBES™ accessories as bonus rewards. 18% increase in AOV, zero cannibalization of existing point redemptions.",
      metric: "+18% AOV"
    },
    {
      brand: "Wellness Platform",
      existing: "Subscription-based rewards",
      integration: "Augmented Mode",
      result:
        "Reserved Buds rewards for Premium tier members. Tier upgrade rate increased 34%, member retention up 22%.",
      metric: "+34% upgrades"
    },
    {
      brand: "Multi-brand Marketplace",
      existing: "Cashback program",
      integration: "Hybrid Mode",
      result:
        "Allowed cashback conversion to Buds credits. Expanded reward catalog 10x without inventory cost.",
      metric: "10x catalog"
    }
  ],
  faqs: [
    {
      question: "Will Buds confuse our customers?",
      answer:
        "No. Buds appears as a clearly labeled 'bonus reward' option. Customers understand it's an additional benefit, not a replacement. Our UX is designed to complement, not compete."
    },
    {
      question: "Can we control which Buds rewards appear?",
      answer:
        "Yes. You have full control over which partner rewards display to your customers. Filter by category, brand, value, or exclude entirely."
    },
    {
      question: "What if we want to stop using Buds?",
      answer:
        "Simply uninstall the plugin. No contracts, no penalties, no data migration needed. Your existing program continues unchanged."
    },
    {
      question: "Do we need to donate inventory to use Buds?",
      answer:
        "No. You can integrate Buds purely to offer partner rewards to your customers. Donating inventory gets you better placement, but it's optional."
    },
    {
      question: "How do customers redeem Buds rewards?",
      answer:
        "At checkout, they see available Buds rewards alongside your existing options. One click adds it to their order. We handle fulfillment (co-pack or central)."
    },
    {
      question: "Will this cannibalize our existing reward redemptions?",
      answer:
        "Data shows no cannibalization. Buds rewards are additive—customers redeem both. Think of it as expanding your reward catalog without expanding your costs."
    },
    {
      question: "Can we white-label Buds?",
      answer:
        "Not currently, but Buds branding is minimal. The widget clearly shows it's a partner reward network, which customers appreciate as added value."
    },
    {
      question: "What platforms does this work with?",
      answer:
        "Shopify, WooCommerce, and most major loyalty platforms (Smile.io, LoyaltyLion, Yotpo, etc.). We integrate via checkout widget, not direct platform integration."
    }
  ]
}
