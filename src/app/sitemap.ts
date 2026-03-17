import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  // Bitte ersetze diese URL durch deine echte Live-URL (z.B. https://www.tk-beauty.de)
  // Oder setze die Umgebungsvariable NEXT_PUBLIC_SITE_URL in deinem Hosting-Provider.
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://tkbeautystudio.de';

  return [
    {
      url: `${baseUrl}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${baseUrl}/behandlungen`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/preise`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/ueber-uns`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/kontakt`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.8,
    },
  ]
}
