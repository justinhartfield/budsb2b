// PlatformsPage translations (German)
export const platformsPage = {
  hero: {
    badge: "🚀 Plattform-Integrationsprogramm 🌐",
    title: "Stärken Sie Ihren Marktplatz mit Buds-Treueprämien",
    subtitle: "Steigern Sie GMV, gewinnen Sie Verkäufer, fördern Sie Netzwerkeffekte – ohne operativen Aufwand",
    description: "Integrieren Sie Buds in Ihre Plattform, um Verkäufern eine fertige Treueprogramm-Lösung anzubieten. Ihre Händler spenden Überbestände, ihre Kunden verdienen Prämien und Sie steigern den Marktplatz-GMV ohne Rabatte."
  },
  
  benefits: {
    title: "Was Plattformen erhalten",
    items: [
      {
        title: "Marktplatz-GMV steigern",
        description: "Verkäufer, die Buds nutzen, verzeichnen 23% höheren AOV. Mehr Umsatz pro Transaktion = mehr Plattformgebühren für Sie.",
        metric: "+23% AOV"
      },
      {
        title: "Verkäufer gewinnen & binden",
        description: "Bieten Sie eine fertige Treueprogramm-Lösung. Verkäufer erhalten Enterprise-Prämien, ohne sie selbst aufzubauen.",
        metric: "Verkäufer-USP"
      },
      {
        title: "Cross-Seller-Entdeckung",
        description: "Kunden, die Prämien von Verkäufer A einlösen, entdecken Verkäufer B. Netzwerkeffekte treiben Marktplatzwachstum.",
        metric: "Netzwerkeffekt"
      },
      {
        title: "Keine Plattformhaftung",
        description: "Buds übernimmt alle Prämienerfüllung, Kundenservice und Compliance. Null operativer Aufwand für Ihre Plattform.",
        metric: "Null Ops"
      }
    ]
  },
  
  integrationOptions: {
    title: "Integrationsoptionen",
    subtitle: "Wählen Sie das Modell, das zu Ihrer Plattform passt",
    items: [
      {
        title: "White-Label-Integration",
        description: "Buds läuft unter Ihrer Plattformmarke",
        features: [
          "Ihr Branding durchgehend",
          "Nahtlose UX in Ihrem Checkout",
          "Plattformkontrollierter Prämienkatalog",
          "Individuelle Provisionsstruktur"
        ],
        bestFor: "Große Marktplätze mit starker Marke"
      },
      {
        title: "Co-Branded-Integration",
        description: "Powered by Buds, präsentiert auf Ihrer Plattform",
        features: [
          "Buds + Ihre Marke zusammen",
          "Gemeinsame Marketingmaterialien",
          "Standard-Prämienkatalog",
          "Umsatzbeteiligungsmodell"
        ],
        bestFor: "Wachsende Marktplätze auf der Suche nach schnellem Mehrwert"
      },
      {
        title: "Nur-API-Integration",
        description: "Erstellen Sie Ihre eigene UI auf Buds-Infrastruktur",
        features: [
          "Vollständiger API-Zugriff",
          "Individuelle Frontend-Implementierung",
          "Flexible Prämienlogik",
          "Entwicklerfreundliche Dokumentation"
        ],
        bestFor: "Technische Plattformen mit individuellen Anforderungen"
      }
    ]
  },
  
  revenueModels: {
    title: "Umsatzmodelle",
    subtitle: "Mehrere Möglichkeiten, Buds auf Ihrer Plattform zu monetarisieren",
    items: [
      {
        model: "Provision auf Einlösungen",
        description: "Verdienen Sie % des Prämienwerts, wenn Kunden einlösen",
        example: "Kunde löst €50 Prämie ein → Plattform verdient €5 (10%)",
        pros: ["Leistungsbasiert", "Keine Vorabkosten", "Skaliert mit Nutzung"]
      },
      {
        model: "Verkäufer-Abo-Upsell",
        description: "Berechnen Sie Verkäufern Buds-Zugang als Premium-Feature",
        example: "€49/Monat für Buds-Integration im Pro-Plan",
        pros: ["Wiederkehrende Einnahmen", "Erhöht Planwert", "Vorhersehbares Einkommen"]
      },
      {
        model: "Hybridmodell",
        description: "Basis-Abo + Provision auf hochwertige Einlösungen",
        example: "€29/Monat + 5% auf Prämien >€100",
        pros: ["Ausgewogenes Risiko/Ertrag", "Mehrere Einnahmequellen", "Flexible Preisgestaltung"]
      }
    ]
  },
  
  examples: {
    title: "Plattform-Erfolgsgeschichten",
    items: [
      {
        platform: "Multi-Vendor-Mode-Marktplatz",
        sellers: "450 Verkäufer",
        integration: "Co-Branded",
        result: "Verkäufer, die Buds nutzen, hatten eine 31% höhere Wiederholungskaufrate. Plattform-GMV stieg um 18% ohne zusätzliche Marketingausgaben.",
        metric: "+18% GMV"
      },
      {
        platform: "Wellness- & CBD-Plattform",
        sellers: "120 Verkäufer",
        integration: "White-Label",
        result: "Als plattformexklusiver Vorteil positioniert. Verkäuferabwanderung um 40% reduziert, neue Verkäuferanmeldungen um 55% gestiegen.",
        metric: "-40% Abwanderung"
      },
      {
        platform: "Lokales Liefernetzwerk",
        sellers: "280 Verkäufer",
        integration: "Nur-API",
        result: "Individuelle Prämienstufen nach Lieferzone erstellt. Cross-Seller-Entdeckung um 67% gestiegen, durchschnittliche Warenkorbgröße +€12.",
        metric: "+€12 Warenkorb"
      }
    ]
  },
  
  technicalSpecs: {
    title: "Technische Spezifikationen",
    subtitle: "Für Entwickler gebaut, für Skalierung konzipiert",
    items: [
      {
        category: "Authentifizierung",
        details: "OAuth 2.0, JWT-Tokens, Webhook-Unterstützung für Echtzeit-Events"
      },
      {
        category: "Prämienkatalog-API",
        details: "Filtern nach Kategorie, Wert, Verkäufer, Geografie. Echtzeit-Bestandsaktualisierungen"
      },
      {
        category: "Einlösungsablauf",
        details: "Checkout-Widget-Einbettung oder API-gesteuerte individuelle UI. Co-Pack oder zentrale Erfüllung"
      },
      {
        category: "Analysen & Berichte",
        details: "Plattform-Dashboard, Verkäufer-Dashboards, CSV-Exporte, individuelle Berichts-API"
      },
      {
        category: "Compliance",
        details: "GDPR/DSGVO-konform, Altersverifizierungs-Hooks, Geo-Restriktionsunterstützung"
      }
    ]
  },
  
  faqs: {
    title: "Plattform-FAQs",
    items: [
      {
        q: "Müssen unsere Verkäufer Inventar spenden?",
        a: "Nein. Verkäufer können rein durch das Anbieten von Partner-Prämien an ihre Kunden teilnehmen. Das Spenden von Inventar verbessert ihre Prämienplatzierung, ist aber optional."
      },
      {
        q: "Wie kontrollieren wir, welche Prämien auf unserer Plattform erscheinen?",
        a: "Vollständige Kontrolle über das Plattform-Admin-Panel. Prämien genehmigen/ablehnen, Kategorien festlegen, nach Wertbereich filtern, nach Geografie einschränken oder spezifische Sammlungen kuratieren."
      },
      {
        q: "Wie hoch ist unsere Umsatzbeteiligung?",
        a: "Flexibel basierend auf Integrationstyp. Typischer Bereich: 10-20% Provision auf Einlösungen oder Verkäufer-Abo-Modell (€29-99/Monat). Individuelle Deals für große Plattformen."
      },
      {
        q: "Wie funktioniert die Erfüllung?",
        a: "Buds übernimmt das. Entweder Co-Pack (Verkäufer versendet direkt) oder zentral (unser 3PL versendet). Ihre Plattform hat null Erfüllungsaufwand oder Kundenservice-Last."
      },
      {
        q: "Können wir dies vollständig white-labeln?",
        a: "Ja, für White-Label-Integration. Buds-Branding wird entfernt und durch Ihres ersetzt. Erfordert minimalen Plattform-GMV-Schwellenwert."
      },
      {
        q: "Was passiert, wenn ein Verkäufer unsere Plattform verlässt?",
        a: "Sein gespendetes Inventar bleibt im Buds-Netzwerk, erscheint aber nicht mehr auf Ihrer Plattform. Keine Auswirkungen auf andere Verkäufer oder Kunden."
      },
      {
        q: "Wie lange dauert die Integration?",
        a: "Co-Branded: 1-2 Wochen. White-Label: 4-6 Wochen. Nur-API: Abhängig von Ihrem Entwicklerteam, typischerweise 2-4 Wochen mit unserer Unterstützung."
      },
      {
        q: "Konkurrieren Sie mit unserer Plattform?",
        a: "Niemals. Buds ist reine B2B-Infrastruktur. Wir betreiben keine verbraucherorientierten Marktplätze. Sie sind unser Kunde, nicht unser Konkurrent."
      }
    ]
  },
  
  cta: {
    title: "Bereit, Buds zu integrieren?",
    subtitle: "Schließen Sie sich führenden Marktplätzen an, die Treue mit Buds stärken",
    applyButton: "Für Integration bewerben",
    dashboardButton: "Beispiel-Dashboard ansehen",
    loginButton: "Plattform-Login"
  }
}

