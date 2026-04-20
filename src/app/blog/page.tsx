import PageHeader from '@/components/ui/PageHeader'
import BlogSection from '@/components/sections/BlogSection'

export default function BlogPage() {
  return (
    <>
      <PageHeader title="From Blog" breadcrumbs={['Blog']} />
      <BlogSection />
    </>
  )
}
