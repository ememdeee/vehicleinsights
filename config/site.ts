const requireEnv = (name: string): string => {
  const value = process.env[name]
  console.log(`Trying to access ${name}, value: ${value}`)
  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`)
  }
  return value
}

export const siteConfig = {
  domain: requireEnv('NEXT_PUBLIC_WEBSITE_DOMAIN'),
  name: requireEnv('NEXT_PUBLIC_WEBSITE_NAME'),
  address: requireEnv('NEXT_PUBLIC_WEBSITE_ADDRESS'),
  phone: requireEnv('NEXT_PUBLIC_WEBSITE_PHONE'),
  description: requireEnv('NEXT_PUBLIC_WEBSITE_DESCRIPTION'),
  email: requireEnv('NEXT_PUBLIC_WEBSITE_EMAIL'),
  socialLinks: {
    twitter: "https://twitter.com/mywebsite",
    facebook: "https://facebook.com/mywebsite",
  }
} as const

// Log all environment variables
console.log('All environment variables:', process.env)

// Type assertion
export type SiteConfig = typeof siteConfig