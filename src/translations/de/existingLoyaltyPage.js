// ExistingLoyaltyPage translations (German)
export const existingLoyaltyPage = {
  hero: {
    badge: "🔄 Loyalty Augmentation Program ✨",
    title: "Sie haben bereits ein Treueprogramm?\n<span className=\"text-transparent bg-clip-text bg-gradient-to-r from-purple-600\">Wir verbessern es.</span>",
    // subtitle and description not fully provided in snippet, leave empty or add if known
    subtitle: "",
    description: ""
  },
  objections: [
    {
      objection: "Wir haben bereits ein Treueprogramm",
      solution: "Buds ersetzt es nicht – wir verbessern es",
      details: "Ihre bestehenden Punkte, Stufen und Belohnungen bleiben unverändert. Buds läuft parallel als zusätzliche Belohnungsebene und bietet Ihren Kunden mehr Wert, ohne Ihr aktuelles System zu verändern."
    },
    {
      objection: "Wir können uns kein weiteres Treueprogramm leisten",
      solution: "Buds kostet Sie nichts",
      details: "Keine Einrichtungsgebühren, keine monatlichen Kosten, keine Transaktionsgebühren. Partner spenden Überbestände – Sie integrieren einfach das Widget. Ihre Kunden erhalten mehr Belohnungen, Sie zahlen keinen Aufpreis."
    },
    {
      objection: "Unsere Kunden sind bereits engagiert",
      solution: "Machen Sie sie noch engagierter",
      details: "Buds steigert den durchschnittlichen Bestellwert (AOV) um 23 % und erhöht die Einlösungsraten durch exklusive Belohnungen von Partner-Marken. Ihre engagierten Kunden werden super-engagiert mit Zugang zu einem erweiterten Belohnungskatalog."
    },
    {
      objection: "Die Integration wird zu komplex sein",
      solution: "5-Minuten-Plugin-Installation",
      details: "Unser Shopify/WooCommerce-Plugin installiert sich in Minuten und funktioniert neben Ihrem bestehenden Treueprogramm. Keine API-Konflikte, keine Datenmigration, keine technischen Kopfschmerzen."
    },
    {
      objection: "Wir wollen keine Kundendaten teilen",
      solution: "Ihre Daten bleiben Ihre Daten",
      details: "Buds ist DSGVO-konform und greift niemals auf Ihre Kundendaten zu. Wir erfassen nur anonyme Widget-Interaktionen. Ihre Kundenbeziehungen und Daten bleiben zu 100 % unter Ihrer Kontrolle."
    },
    {
      objection: "Unser Programm erzielt bereits Ergebnisse",
      solution: "Steigern Sie die Ergebnisse noch weiter",
      details: "Behalten Sie Ihren aktuellen ROI und ergänzen Sie ihn mit Buds. Partner verzeichnen durchschnittlich 15 % mehr Checkout-Konversion, wenn Buds-Belohnungen neben ihrem bestehenden Programm verfügbar sind."
    }
  ],
  integrationModes: [
    {
      title: "Paralleler Modus (Empfohlen)",
      description: "Buds läuft parallel zu Ihrem bestehenden Programm",
      features: [
        "Ihr Punktesystem bleibt unverändert",
        "Buds-Belohnungen erscheinen als Bonusoptionen",
        "Kunden können beide Programme nutzen",
        "Keine Konflikte, maximaler Mehrwert"
      ],
      example: "Kunde sammelt Ihre Punkte + kann Buds-Belohnungen einlösen"
    },
    {
      title: "Hybrid-Modus",
      description: "Konvertieren Sie Ihre Punkte in Buds-Guthaben",
      features: [
        "Optionale Punkteumwandlung beim Checkout",
        "Erweitern Sie Ihren Belohnungskatalog sofort",
        "Erhalten Sie Ihre Punkteökonomie bei",
        "Buds übernimmt die Abwicklung"
      ],
      example: "1000 Ihre Punkte = 100 Buds-Guthaben für Partner-Belohnungen"
    },
    {
      title: "Erweiterter Modus",
      description: "Buds-Belohnungen werden in höheren Stufen freigeschaltet",
      features: [
        "Reservieren Sie Buds für VIP-/Top-Stufen",
        "Schaffen Sie erstrebenswerte Stufen-Vorteile",
        "Motivieren Sie zum Stufenaufstieg",
        "Exklusiver Zugang zu Partner-Marken"
      ],
      example: "Gold-Stufe+ Mitglieder erhalten Zugang zum Buds-Belohnungskatalog"
    }
  ],
  comparisonData: [
    { feature: "Ihre bestehenden Punkte", yours: true, buds: false, together: true },
    { feature: "Ihre bestehenden Belohnungen", yours: true, buds: false, together: true },
    { feature: "Ihr Stufensystem", yours: true, buds: false, together: true },
    { feature: "Ihre Kundendaten", yours: true, buds: false, together: true },
    { feature: "Partner-Marken-Belohnungen", yours: false, buds: true, together: true },
    { feature: "Kostenlose Erweiterung der Belohnungen", yours: false, buds: true, together: true },
    { feature: "Entlastung durch Überbestände für Sie", yours: false, buds: true, together: true },
    { feature: "Netzwerkeffekte als Vorteil", yours: false, buds: true, together: true }
  ],
  useCases: [
    {
      brand: "Fashion Retailer",
      existing: "Punktebasiertes Programm mit Stufensystem",
      integration: "Paralleler Modus",
      result: "VIBES™ Accessoires als Bonusbelohnungen hinzugefügt. 18 % Steigerung des AOV, keine Kannibalisierung der bestehenden Punkteeinlösungen.",
      metric: "+18% AOV"
    },
    {
      brand: "Wellness Platform",
      existing: "Abonnementbasierte Belohnungen",
      integration: "Erweiterter Modus",
      result: "Buds-Belohnungen für Premium-Stufenmitglieder reserviert. Stufenaufstiegsrate um 34 % erhöht, Mitgliederbindung um 22 % gesteigert.",
      metric: "+34% Upgrades"
    },
    {
      brand: "Multi-brand Marketplace",
      existing: "Cashback-Programm",
      integration: "Hybrid-Modus",
      result: "Cashback-Umwandlung in Buds-Guthaben ermöglicht. Belohnungskatalog 10-fach erweitert ohne Lagerkosten.",
      metric: "10x Katalog"
    }
  ],
  faqs: [
    { q: "Verwirrt Buds unsere Kunden?", a: "Nein. Buds erscheint als klar gekennzeichnete 'Bonus-Belohnung'. Kunden verstehen, dass es ein zusätzlicher Vorteil und kein Ersatz ist. Unsere UX ist darauf ausgelegt, zu ergänzen, nicht zu konkurrieren." },
    { q: "Können wir steuern, welche Buds-Belohnungen angezeigt werden?", a: "Ja. Sie haben volle Kontrolle darüber, welche Partner-Belohnungen Ihren Kunden angezeigt werden. Filtern Sie nach Kategorie, Marke, Wert oder schließen Sie sie komplett aus." },
    { q: "Was, wenn wir Buds nicht mehr nutzen wollen?", a: "Deinstallieren Sie einfach das Plugin. Keine Verträge, keine Strafen, keine Datenmigration erforderlich. Ihr bestehendes Programm läuft unverändert weiter." },
    { q: "Müssen wir Inventar spenden, um Buds zu nutzen?", a: "Nein. Sie können Buds ausschließlich zur Anzeige von Partner-Belohnungen integrieren. Die Inventarspende sorgt für bessere Platzierung, ist aber optional." },
    { q: "Wie lösen Kunden Buds-Belohnungen ein?", a: "Beim Checkout sehen sie verfügbare Buds-Belohnungen neben Ihren bestehenden Optionen. Ein Klick fügt die Belohnung zur Bestellung hinzu. Wir übernehmen die Abwicklung (Co-Pack oder zentral)." },
    { q: "Kann das unsere bestehenden Belohnungseinlösungen kannibalisieren?", a: "Daten zeigen keine Kannibalisierung. Buds-Belohnungen sind additive Vorteile – Kunden lösen beide ein. Betrachten Sie es als Erweiterung Ihres Belohnungskatalogs ohne zusätzliche Kosten." },
    { q: "Können wir Buds als White-Label nutzen?", a: "Derzeit nicht, aber das Buds-Branding ist minimal. Das Widget zeigt klar, dass es sich um ein Partner-Belohnungsnetzwerk handelt, was Kunden als Mehrwert schätzen." },
    { q: "Mit welchen Plattformen funktioniert das?", a: "Shopify, WooCommerce und die meisten großen Treueplattformen (Smile.io, LoyaltyLion, Yotpo usw.). Wir integrieren über das Checkout-Widget, nicht durch direkte Plattformintegration." }
  ]
}
