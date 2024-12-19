import { MetadataRoute } from 'next'
import fs from 'fs'
import path from 'path'

// Add these exports for static generation
export const dynamic = 'force-static'
export const revalidate = 86400 // Revalidate every 24 hours

function formatUrl(baseUrl: string, path: string = ''): string {
  const cleanBaseUrl = baseUrl.replace(/\/+$/, '')
  if (!path) {
    return `${cleanBaseUrl}/`
  }
  const cleanPath = path.replace(/^\/+/, '').replace(/\/+$/, '')
  return `${cleanBaseUrl}/${cleanPath}`
}

function getManualPages(dir: string): string[] {
  try {
    const files = fs.readdirSync(dir, { withFileTypes: true })
    let pages: string[] = []

    for (const file of files) {
      if (file.isDirectory()) {
        if (!file.name.startsWith('[')) {
          pages = [...pages, ...getManualPages(path.join(dir, file.name))]
        }
      } else if ((file.name === 'page.tsx' || file.name === 'page.ts') && !dir.includes('[')) {
        const relativePath = path.relative('app', dir)
        pages.push(relativePath === '' ? '/' : `/${relativePath}`)
      }
    }

    return pages
  } catch (error) {
    console.error(`Error reading directory ${dir}:`, error)
    return []
  }
}

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "domain.com" // Replace with your actual domain

  // 1. Homepage
  const homeEntry = {
    url: formatUrl(baseUrl),
    lastModified: new Date(),
    changeFrequency: 'daily' as const,
    priority: 1,
  }

  // 2. Manually created pages
  const appDir = path.join(process.cwd(), 'app')
  const manualPages = getManualPages(appDir)
  const manualEntries = manualPages
    .filter(page => page !== '/') // Remove root page to avoid duplication
    .map(page => ({
      url: formatUrl(baseUrl, page),
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    }))

  // Combine all entries
  const allEntries = [
    homeEntry,
    ...manualEntries,
  ]

  // Remove duplicate entries
  const uniqueEntries = Array.from(new Set(allEntries.map(entry => entry.url)))
    .map(url => allEntries.find(entry => entry.url === url)!)

  return uniqueEntries
}