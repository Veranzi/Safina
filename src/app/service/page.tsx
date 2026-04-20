import PageHeader from '@/components/ui/PageHeader'
import ServiceSection from '@/components/sections/ServiceSection'
import CausesCarousel from '@/components/sections/CausesCarousel'

export default function ServicePage() {
  return (
    <>
      <PageHeader title="Service" breadcrumbs={['Home', 'Service']} />
      <ServiceSection />
      <CausesCarousel />
    </>
  )
}
