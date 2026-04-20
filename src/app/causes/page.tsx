import PageHeader from '@/components/ui/PageHeader'
import ServiceSection from '@/components/sections/ServiceSection'
import CausesCarousel from '@/components/sections/CausesCarousel'

export default function CausesPage() {
  return (
    <>
      <PageHeader title="Popular Ministries" breadcrumbs={['Home', 'Ministries']} />
      <ServiceSection />
      <CausesCarousel />
    </>
  )
}
