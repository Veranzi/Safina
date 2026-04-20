import PageHeader from '@/components/ui/PageHeader'
import ContactSection from '@/components/sections/ContactSection'

export default function ContactPage() {
  return (
    <>
      <PageHeader title="Contact Us" breadcrumbs={['Do you have any queries?']} />
      <ContactSection />
    </>
  )
}
