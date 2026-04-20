import PageHeader from '@/components/ui/PageHeader'
import DonateSection from '@/components/sections/DonateSection'

export default function DonatePage() {
  return (
    <>
      <PageHeader title="Donate / Give Now" breadcrumbs={['Home', 'Donate']} />
      <DonateSection />
    </>
  )
}
