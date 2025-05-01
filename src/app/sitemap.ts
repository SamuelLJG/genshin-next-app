import type { MetadataRoute } from 'next'
import { characters } from '@/data/characters'

 
export default function sitemap(): MetadataRoute.Sitemap {
  
const names = characters.map(c => c.name);

const post = names.map((item) => ({
      url: `https://acme.com/${item}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 1,
}))
  return [
    ...post
  ]
}