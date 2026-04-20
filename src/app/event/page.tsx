import PageHeader from '@/components/ui/PageHeader'
import EventSection from '@/components/sections/EventSection'

export default function EventPage() {
  return (
    <>
      <PageHeader title="Upcoming Events" breadcrumbs={['Home', 'Events']} />
      <EventSection />
    </>
  )
}
