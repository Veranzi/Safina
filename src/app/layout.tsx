import type { Metadata } from 'next'
import './globals.css'
import TopBar from '@/components/layout/TopBar'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Loader from '@/components/ui/Loader'
import BackToTop from '@/components/ui/BackToTop'

export const metadata: Metadata = {
  title: 'Jerusalem Church of Christ 56',
  description: 'JCC 56 - SAFINA - Where healing, compassion, and transformation meet.',
  keywords: 'JCC 56, SAFINA, Jerusalem Church of Christ, Kawangware',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/img/logo.png" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Quicksand:wght@500;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
          rel="stylesheet"
        />
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
          rel="stylesheet"
        />
        <link href="/lib/flaticon/font/flaticon.css" rel="stylesheet" />
        <link href="/lib/animate/animate.min.css" rel="stylesheet" />
      </head>
      <body>
        <Loader />
        <TopBar />
        <Navbar />
        {children}
        <Footer />
        <BackToTop />
      </body>
    </html>
  )
}
