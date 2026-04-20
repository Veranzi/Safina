import { initializeApp, getApps, FirebaseApp } from 'firebase/app'
import { getDatabase, Database } from 'firebase/database'

const contactConfig = {
  apiKey: process.env.NEXT_PUBLIC_CONTACT_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_CONTACT_AUTH_DOMAIN,
  databaseURL: process.env.NEXT_PUBLIC_CONTACT_DATABASE_URL,
  projectId: process.env.NEXT_PUBLIC_CONTACT_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_CONTACT_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_CONTACT_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_CONTACT_APP_ID,
}

const volunteerConfig = {
  apiKey: process.env.NEXT_PUBLIC_VOLUNTEER_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_VOLUNTEER_AUTH_DOMAIN,
  databaseURL: process.env.NEXT_PUBLIC_VOLUNTEER_DATABASE_URL,
  projectId: process.env.NEXT_PUBLIC_VOLUNTEER_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_VOLUNTEER_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_VOLUNTEER_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_VOLUNTEER_APP_ID,
}

const blogConfig = {
  apiKey: process.env.NEXT_PUBLIC_BLOG_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_BLOG_AUTH_DOMAIN,
  databaseURL: process.env.NEXT_PUBLIC_BLOG_DATABASE_URL,
  projectId: process.env.NEXT_PUBLIC_BLOG_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_BLOG_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_BLOG_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_BLOG_APP_ID,
}

function getOrCreateApp(name: string, config: object): FirebaseApp {
  const existing = getApps().find((app) => app.name === name)
  return existing ?? initializeApp(config, name)
}

export const contactApp = getOrCreateApp('contactApp', contactConfig)
export const volunteerApp = getOrCreateApp('volunteerApp', volunteerConfig)
export const blogApp = getOrCreateApp('blogApp', blogConfig)

export const contactDB: Database = getDatabase(contactApp)
export const volunteerDB: Database = getDatabase(volunteerApp)
export const blogDB: Database = getDatabase(blogApp)
