'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Image from 'next/image'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [sticky, setSticky] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setSticky(window.scrollY > 200)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const isActive = (href: string) =>
    pathname === href ? 'nav-item nav-link active' : 'nav-item nav-link'

  return (
    <nav className={`navbar navbar-expand-lg navbar-dark${sticky ? ' nav-sticky' : ''}`}>
      <div className="container-fluid">
        <Link href="/" className="navbar-brand">
          <Image src="/img/logo.png" alt="JCC Logo" className="logo" width={120} height={80} />
        </Link>
        <button
          type="button"
          className="navbar-toggler border-0"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`collapse navbar-collapse justify-content-end${isOpen ? ' show' : ''}`}>
          <div className="navbar-nav">
            <Link href="/"        className={isActive('/')}>Home</Link>
            <Link href="/about"   className={isActive('/about')}>About</Link>
            <Link href="/causes"  className={isActive('/causes')}>Ministries</Link>
            <Link href="/event"   className={isActive('/event')}>Events</Link>
            <Link href="/blog"    className={isActive('/blog')}>Blog</Link>

            <div className="nav-item dropdown">
              <button
                className="nav-link dropdown-toggle btn btn-link"
                style={{ color: 'rgba(255,255,255,.85)', textDecoration: 'none', padding: '10px 14px', fontWeight: 600 }}
                onClick={() => setDropdownOpen(!dropdownOpen)}
              >
                Pages
              </button>
              <div className={`dropdown-menu${dropdownOpen ? ' show' : ''}`}>
                <Link href="/service"   className="dropdown-item" onClick={() => setDropdownOpen(false)}>What We Are</Link>
                <Link href="/team"      className="dropdown-item" onClick={() => setDropdownOpen(false)}>Meet The Team</Link>
                <Link href="/donate"    className="dropdown-item" onClick={() => setDropdownOpen(false)}>Donate / Give Now</Link>
                <Link href="/volunteer" className="dropdown-item" onClick={() => setDropdownOpen(false)}>Become A Volunteer</Link>
                <Link href="/faqs"      className="dropdown-item" onClick={() => setDropdownOpen(false)}>FAQs</Link>
              </div>
            </div>

            <Link href="/contact" className={isActive('/contact')}>Contact</Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
