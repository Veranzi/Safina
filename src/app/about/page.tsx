import PageHeader from '@/components/ui/PageHeader'
import AboutTabs from '@/components/sections/AboutTabs'
import FactsSection from '@/components/sections/FactsSection'
import TeamSection from '@/components/sections/TeamSection'
import TestimonialCarousel from '@/components/sections/TestimonialCarousel'

const aboutTabs = [
  {
    id: 'tab-about',
    label: 'About',
    content: <p>Jerusalem Church of Christ is a very dedicated church to helping bring back the lost souls to God.</p>,
  },
  {
    id: 'tab-beliefs',
    label: 'Core Beliefs',
    content: (
      <div>
        <h6>Baptism</h6>
        <p>Jerusalem Church of Christ baptizes in faith of the trinity of God the Father, The Son Jesus Christ and The Holy Spirit.</p>
        <h6>Simplicity</h6>
        <p>Jerusalem is the only Church in Africa that embraces simplicity — sitting down in sermon, use of simple drums, &apos;kengele,&apos; whistle, kayamba and guitar in praise and worship.</p>
        <h6>Discipline</h6>
        <p>Prophet Sinaida Mary set the foundation of Jerusalem Church on decent dressing among both genders, agape love and care.</p>
        <h6>Respect</h6>
        <p>Member congregants respect each other regardless of gender, age, race, profession or ethnic tribe.</p>
        <h6>Faith in God &amp; Voluntary Servicing</h6>
        <p>Jerusalem Church has great faith in the Almighty God of Abraham, Moses and Mummy the founder of Jerusalem.</p>
      </div>
    ),
  },
  {
    id: 'tab-branches',
    label: 'Branches',
    content: (
      <div>
        <h5>HQ</h5><p>Kawangware 56, Nairobi</p>
        <h5>Asikote</h5><p>Bunyore, Vihiga</p>
        <h5>Kisa</h5><p>Kisa, Kakamega</p>
        <h5>Naitiri</h5><p>Naitiri, Kakamega</p>
        <h5>Elianaginga</h5><p>Maragoli, Vihiga</p>
        <h5>Mautuma</h5><p>Mautuma, Uasin Gishu</p>
      </div>
    ),
  },
]

export default function AboutPage() {
  return (
    <>
      <PageHeader title="About Us" breadcrumbs={['Home', 'About JCC']} />
      <AboutTabs subtitle="About" heading="Preaching the word of GOD" image="/img/wel11.jpg" tabs={aboutTabs} />
      <FactsSection />
      <TeamSection />
      <TestimonialCarousel />
    </>
  )
}
