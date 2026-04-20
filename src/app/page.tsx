'use client'

import { useState } from 'react'
import HeroCarousel from '@/components/sections/HeroCarousel'
import VideoModal from '@/components/sections/VideoModal'
import AboutTabs from '@/components/sections/AboutTabs'
import ServiceSection from '@/components/sections/ServiceSection'
import FactsSection from '@/components/sections/FactsSection'
import CausesCarousel from '@/components/sections/CausesCarousel'
import DonateSection from '@/components/sections/DonateSection'
import EventSection from '@/components/sections/EventSection'
import TeamSection from '@/components/sections/TeamSection'
import VolunteerSection from '@/components/sections/VolunteerSection'
import TestimonialCarousel from '@/components/sections/TestimonialCarousel'
import ContactSection from '@/components/sections/ContactSection'
import BlogSection from '@/components/sections/BlogSection'

const historyTabs = [
  {
    id: 'tab-history',
    label: 'History',
    content: (
      <p>
        The Jerusalem Church of Christ (JCC) was founded in 1986 by Prophetess Sinaida Mary Dorcas Akatsa,
        known affectionately as &quot;Mummy&quot; for her loving and compassionate care. Her ministry focused
        on uplifting the less fortunate through acts of generosity, including feeding, clothing, and supporting
        people of all backgrounds. The JCC headquarters are in Kawangware, Nairobi, with additional branches
        in Bunyore, Kisa, Naitiri, Maragoli, and Mautuma.
      </p>
    ),
  },
  {
    id: 'tab-mission',
    label: 'Mission',
    content: (
      <p>
        To uplift and empower communities through acts of love, compassion, and spiritual guidance, inspired
        by the teachings of Jesus Christ. We strive to serve the less fortunate by providing nourishment,
        clothing, and support, while fostering an environment of prayer, prophecy, and healing.
      </p>
    ),
  },
  {
    id: 'tab-vision',
    label: 'Vision',
    content: (
      <p>
        To be a beacon of faith, hope, and love, transforming lives and communities across the world through
        unwavering dedication to the principles of Jesus Christ. We aim to create a global network of believers
        committed to worshiping God and uplifting the marginalized.
      </p>
    ),
  },
]

export default function HomePage() {
  const [videoSrc, setVideoSrc] = useState('')

  return (
    <>
      <HeroCarousel onVideoOpen={setVideoSrc} />
      {videoSrc && <VideoModal src={videoSrc} onClose={() => setVideoSrc('')} />}
      <AboutTabs
        subtitle="History"
        heading="Get to know JCC"
        image="/img/wel1.jpg"
        tabs={historyTabs}
        learnMoreLink="https://docs.google.com/document/d/1HtGMkUyEFL-p6Zjc5smo3jXk1cuK-doS/edit?usp=drive_link"
      />
      <ServiceSection />
      <FactsSection />
      <CausesCarousel />
      <DonateSection />
      <EventSection />
      <TeamSection />
      <VolunteerSection />
      <TestimonialCarousel />
      <ContactSection />
      <BlogSection />
    </>
  )
}
