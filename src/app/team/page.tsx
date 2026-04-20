import PageHeader from '@/components/ui/PageHeader'
import TeamSection from '@/components/sections/TeamSection'
import TestimonialCarousel from '@/components/sections/TestimonialCarousel'

export default function TeamPage() {
  return (
    <>
      <PageHeader title="Meet The Team" breadcrumbs={['Home', 'Team']} />
      <TeamSection />
      <TestimonialCarousel />
    </>
  )
}
