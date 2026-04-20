import PageHeader from '@/components/ui/PageHeader'
import VolunteerSection from '@/components/sections/VolunteerSection'

export default function VolunteerPage() {
  return (
    <>
      <PageHeader title="Become A Volunteer" breadcrumbs={['Home', 'Volunteer']} />
      <VolunteerSection />
    </>
  )
}
