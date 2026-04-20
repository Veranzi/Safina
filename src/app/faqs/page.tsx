'use client'

import { useState } from 'react'
import PageHeader from '@/components/ui/PageHeader'
import { FaqItem } from '@/types'

const faqs: FaqItem[] = [
  {
    question: 'Who was Dada Mary Dorcas Sinaida Akatsa?',
    answer: 'Mummy Mary Sinaida Dorcas was a revered spiritual leader, prophetess, and founder of the Jerusalem Church of Christ. She rose from humble beginnings, working as a maid, to becoming a beacon of faith and hope for millions. Known for her no-nonsense adherence to biblical teachings, she fearlessly spoke the truth, healing the sick, helping the poor, and spreading God\'s word with unwavering conviction. Affectionately called "Mummy" or "Dada Mary" by her followers, she was celebrated for her powerful preaching, prophetic gifts, and her ability to connect deeply with those in need.',
  },
  {
    question: 'What are the church\'s beliefs?',
    answer: 'The Jerusalem Church of Christ is rooted in unwavering faith in the Bible as the inspired Word of God. Our beliefs are centered on: i. The Authority of Scripture — We believe in the Bible as the ultimate guide for faith and life. ii. Salvation Through Christ — Salvation is a gift from God, granted through faith in Jesus Christ. iii. The Power of Prayer — Prayer is a cornerstone of our faith. iv. The Holy Spirit — We believe in the power and presence of the Holy Spirit. v. Compassion and Service — We are committed to helping the poor, the sick, and the marginalized.',
  },
  {
    question: 'What makes the Jerusalem Church of Christ unique?',
    answer: 'The Jerusalem Church of Christ stands out as a beacon of unwavering faith and practical Christianity. Its uniqueness is rooted in: Founding Legacy by Mummy Mary Sinaida Dorcus; No-Nonsense Approach to Scripture; Focus on Healing and Deliverance; Community-Centered Ministry; Vibrant Worship and Fellowship; and A Legacy of Transformation that continues to touch hearts.',
  },
  {
    question: 'Where is the Jerusalem Church of Christ located?',
    answer: 'The church is located in Kawangware 56, Nairobi, Kenya. It was Mary Sinaida Mummy\'s base of operations and the site where she held her famous services. There are other branches in the western part of Kenya.',
  },
  {
    question: 'Are services open to everyone?',
    answer: 'Yes, the Jerusalem Church of Christ welcomes everyone with open arms! Our services are inclusive and open to people from all walks of life, regardless of religion, background, age, or circumstance. Whether you are seeking spiritual guidance, healing, a place of worship, or simply a community to connect with, you are welcome to join us.',
  },
  {
    question: 'What was Mary\'s Mummy Sinaida role in the community?',
    answer: 'Mary Sinaida Dorcus was more than just a spiritual leader; she was a cornerstone of her community. She was a Spiritual Leader, Advocate for the Poor and Marginalized, Healer and Comforter, Mentor and Guide, and a Unifying force that brought people together regardless of their backgrounds.',
  },
  {
    question: 'Does the church offer online services or livestreams?',
    answer: 'Plans are in place to begin streaming sermons and hosting virtual services, building on Mummy Mary Sinaida\'s vision of inclusivity.',
  },
  {
    question: 'What languages are spoken during services?',
    answer: 'Services are primarily conducted in English and Swahili, with occasional translations into local dialects like Luhya, Kikuyu, Luo, Kisii, etc.',
  },
]

export default function FaqsPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i)

  return (
    <>
      <PageHeader title="FAQs" breadcrumbs={['Home', 'FAQs']} />
      <div className="faq-container">
        <h1>Frequently Asked Questions</h1>
        {faqs.map((faq, i) => (
          <div key={i} className="faq-item">
            <button
              className={`faq-question${openIndex === i ? ' active' : ''}`}
              onClick={() => toggle(i)}
            >
              {faq.question}
              <span className="arrow">&#9660;</span>
            </button>
            <div
              className="faq-answer"
              style={{ maxHeight: openIndex === i ? '600px' : '0' }}
            >
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}
