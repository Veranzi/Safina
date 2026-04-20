export interface CarouselSlide {
  image: string
  title: string
  description: string
  videoSrc?: string
}

export interface TeamMember {
  name: string
  role: string
  image: string
}

export interface Testimonial {
  name: string
  subtitle: string
  image: string
  text: string
}

export interface Ministry {
  image: string
  percentage: number
  present: string
  goal: string
  title: string
  description: string
}

export interface BlogPost {
  id: string
  image: string
  title: string
  content: string
  author: string
  commentCount: number
}

export interface BlogComment {
  text: string
  timestamp: string
}

export interface ChurchEvent {
  title: string
  description: string
  time: string
  location: string
  dayOfWeek: number
  image: string
  link?: string
  hasBibleSearch?: boolean
}

export interface FaqItem {
  question: string
  answer: string
}

export interface ContactFormData {
  name: string
  email: string
  subject: string
  message: string
}

export interface VolunteerFormData {
  name: string
  email: string
  message: string
}

export interface DonateFormData {
  name: string
  email: string
  phone: string
  amount: string
}
