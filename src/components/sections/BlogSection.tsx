'use client'

import { useState, useEffect } from 'react'
import { ref, push, onValue } from 'firebase/database'
import { getBlogDB } from '@/lib/firebase'
import { BlogPost, BlogComment } from '@/types'

const posts: BlogPost[] = [
  { id: 'blog1', image: '/img/bl4.jpg', title: 'CHURCH BELIEFS', author: 'Veranzi', commentCount: 0, content: 'The Church is both a spiritual and visible communion of believers who share common beliefs and practices and strive to continue the mission of Christ on earth. It is hence a collective body of Christians adhering to one particular opinion or form of worship and interested in both the spiritual and material needs of humanity.' },
  { id: 'blog2', image: '/img/bl3.jpg', title: 'DISCIPLINE', author: 'Veranzi', commentCount: 0, content: 'Virtues of kindness, truthfulness, obedience, diligence, and bravery among others were taught. Respect to elders, sacred places, and to gods was encouraged. Discipline is one of the virtues that will forever remain imprinted in the members of the church, especially for the Sunday school and youths.' },
  { id: 'blog3', image: '/img/test2.jpg', title: 'HEALING', author: 'Veranzi', commentCount: 0, content: 'The majority of JCC members found their way into this Church due to their various physical, social, and mental ailments. Therefore, healing and revelation are the major attraction for people to this Church.' },
]

function BlogComments({ blogId }: { blogId: string }) {
  const [comments, setComments] = useState<BlogComment[]>([])
  const [text, setText] = useState('')

  useEffect(() => {
    const commentsRef = ref(getBlogDB(), `blog/${blogId}`)
    const unsubscribe = onValue(commentsRef, (snapshot) => {
      const data = snapshot.val()
      if (data) {
        setComments(Object.values(data) as BlogComment[])
      } else {
        setComments([])
      }
    })
    return () => unsubscribe()
  }, [blogId])

  const submitComment = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!text.trim()) return
    await push(ref(getBlogDB(), `blog/${blogId}`), { text, timestamp: new Date().toISOString() })
    setText('')
  }

  return (
    <div className="comments-section">
      <ul>
        {comments.map((c, i) => <li key={i}>{c.text}</li>)}
      </ul>
      <form onSubmit={submitComment}>
        <textarea
          placeholder="Add a comment"
          required
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button type="submit">Post Comment</button>
      </form>
    </div>
  )
}

export default function BlogSection() {
  return (
    <div className="blog">
      <div className="container">
        <div className="section-header text-center">
          <p>News feeds</p>
          <h2>Latest blogs &amp; articles directly from our News feeds</h2>
        </div>
        <div className="row g-4 align-items-stretch">
          {posts.map((post) => (
            <div key={post.id} className="col-lg-4 d-flex">
              <div className="blog-item">
                <div className="blog-img">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={post.image} alt={post.title} />
                </div>
                <div className="blog-text">
                  <h3><a href="#">{post.title}</a></h3>
                  <p>{post.content}</p>
                </div>
                <BlogComments blogId={post.id} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
