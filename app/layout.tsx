import type { Metadata } from 'next'
import './globals.css'
import { LangProvider } from '@/lib/context'

export const metadata: Metadata = {
  title: 'Polygold — Gold Mining Excellence in Tanzania',
  description: 'Polygold Company Limited is an active gold producer in Tanzania\'s Mara Region, operating within the Lake Victoria gold belt. Mining, processing, and community development since 2018.',
  keywords: 'Polygold, gold mining, Tanzania, Mara Region, Lake Victoria, Seka mine, Ikungu, gold production',
  openGraph: {
    title: 'Polygold — Tanzania\'s Rising Gold Producer',
    description: 'Building a 50+ ton gold mining hub through the cluster approach in the Mara Region.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>
        <LangProvider>
          {children}
        </LangProvider>
      </body>
    </html>
  )
}
