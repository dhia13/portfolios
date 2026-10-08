import { ThemeProvider } from '@/contexts/ThemeContext'
import profileData from '@/profile.json'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: profileData.seo.title,
  description: profileData.seo.description,
  keywords: profileData.seo.keywords,
  authors: [{ name: profileData.seo.author }],
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.png',
  },
  openGraph: {
    type: profileData.seo.og.type as 'website',
    ...(('url' in profileData.seo.og && (profileData.seo.og as any).url) ? { url: (profileData.seo.og as any).url } : {}),
    title: profileData.seo.og.title,
    description: profileData.seo.og.description,
    images: [
      {
        url: profileData.seo.og.image,
        width: profileData.seo.og.imageWidth,
        height: profileData.seo.og.imageHeight,
        alt: profileData.seo.og.imageAlt,
      },
    ],
  },
  twitter: {
    card: profileData.seo.twitter.card as 'summary_large_image',
    ...(('url' in profileData.seo.twitter && (profileData.seo.twitter as any).url) ? { url: (profileData.seo.twitter as any).url } : {}),
    title: profileData.seo.twitter.title,
    description: profileData.seo.twitter.description,
    images: [profileData.seo.twitter.image],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(profileData.seo.structuredData),
          }}
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}

