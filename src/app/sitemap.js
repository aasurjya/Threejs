export default function sitemap() {
  const baseUrl = 'https://aasurjya.in';

  return [
    {
      // Homepage: The most important page
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly', // Checks weekly for new featured content
      priority: 1, // Highest priority (1.0)
    },
    {
      // About Page: Key company/personal info
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8, // High priority
    },
    {
      // Projects: Portfolio items
      url: `${baseUrl}/projects`,
      lastModified: new Date(),
      changeFrequency: 'weekly', // Updated often with new work
      priority: 0.8,
    },
    {
      // Fullstack Services: Specialized service page
      url: `${baseUrl}/fullstack`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      // Contact: Static information
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'yearly', // Rarely changes
      priority: 0.5, // Lower priority than content pages
    },
  ]
}
