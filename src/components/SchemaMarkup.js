export default function SchemaMarkup() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Aasurjya",
    "url": "https://aasurjya.in",
    "sameAs": [
      "https://www.linkedin.com/in/aasurjya",
      "https://twitter.com/aasurjya",
      "https://github.com/aasurjya"
    ],
    "jobTitle": "Professional",
    "description": "Welcome to Aasurjya - Professional Portfolio & Services"
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
}
