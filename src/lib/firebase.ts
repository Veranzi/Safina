import { initializeApp, getApps, getApp, FirebaseApp } from 'firebase/app'
import { getDatabase, Database } from 'firebase/database'

function getOrCreateApp(name: string, config: Record<string, string | undefined>): FirebaseApp {
  const existing = getApps().find((app) => app.name === name)
  return existing ? getApp(name) : initializeApp(config, name)
}

// Lazy getters — only initialize when actually called (at runtime, not build time)
export function getContactDB(): Database {
  return getDatabase(getOrCreateApp('contactApp', {
    apiKey:            process.env.NEXT_PUBLIC_CONTACT_API_KEY,
    authDomain:        process.env.NEXT_PUBLIC_CONTACT_AUTH_DOMAIN,
    databaseURL:       process.env.NEXT_PUBLIC_CONTACT_DATABASE_URL,
    projectId:         process.env.NEXT_PUBLIC_CONTACT_PROJECT_ID,
    storageBucket:     process.env.NEXT_PUBLIC_CONTACT_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_CONTACT_MESSAGING_SENDER_ID,
    appId:             process.env.NEXT_PUBLIC_CONTACT_APP_ID,
  }))
}

export function getVolunteerDB(): Database {
  return getDatabase(getOrCreateApp('volunteerApp', {
    apiKey:            process.env.NEXT_PUBLIC_VOLUNTEER_API_KEY,
    authDomain:        process.env.NEXT_PUBLIC_VOLUNTEER_AUTH_DOMAIN,
    databaseURL:       process.env.NEXT_PUBLIC_VOLUNTEER_DATABASE_URL,
    projectId:         process.env.NEXT_PUBLIC_VOLUNTEER_PROJECT_ID,
    storageBucket:     process.env.NEXT_PUBLIC_VOLUNTEER_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_VOLUNTEER_MESSAGING_SENDER_ID,
    appId:             process.env.NEXT_PUBLIC_VOLUNTEER_APP_ID,
  }))
}

export function getBlogDB(): Database {
  return getDatabase(getOrCreateApp('blogApp', {
    apiKey:            process.env.NEXT_PUBLIC_BLOG_API_KEY,
    authDomain:        process.env.NEXT_PUBLIC_BLOG_AUTH_DOMAIN,
    databaseURL:       process.env.NEXT_PUBLIC_BLOG_DATABASE_URL,
    projectId:         process.env.NEXT_PUBLIC_BLOG_PROJECT_ID,
    storageBucket:     process.env.NEXT_PUBLIC_BLOG_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_BLOG_MESSAGING_SENDER_ID,
    appId:             process.env.NEXT_PUBLIC_BLOG_APP_ID,
  }))
}
