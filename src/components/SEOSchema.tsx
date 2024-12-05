import React from 'react';

export default function SEOSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Calculadora de Vacaciones España",
    "description": "Herramienta para calcular los días de vacaciones correspondientes según el tiempo trabajado en una empresa española.",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "EUR"
    },
    "featureList": [
      "Cálculo preciso de días de vacaciones",
      "Ajuste automático para años bisiestos",
      "Información sobre derechos laborales",
      "Preguntas frecuentes sobre vacaciones en España"
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}