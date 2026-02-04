import { rolesData } from '@/data/data'
import type { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  const gameUrls: MetadataRoute.Sitemap = rolesData.map(role => ({
    url: `https://www.lol-updown.com/game/${role.id}`,
    lastModified: new Date(),
    changeFrequency: 'yearly',
    priority: 0.5
  }));

  const routes = ['guide', 'news', 'privacy', 'terms', 'contact', 'about']
  const urls: MetadataRoute.Sitemap = routes.map(route => ({
    url: `https://www.lol-updown.com/${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.7
  }));

  return [
    {
      url: 'https://www.lol-updown.com',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    ...urls,
    ...gameUrls
  ]
}