'use client'

import Link from 'next/link'

export default function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6">
            <div className="footer-contact">
              <h2>Our Head Office</h2>
              <p><i className="fa fa-map-marker-alt"></i> Kawangware 56, Nairobi, Kenya</p>
              <p><i className="fa fa-phone-alt"></i> +254 112 747 946</p>
              <p><i className="fa fa-envelope"></i> info@jerusalemchurchofchrist.com</p>
              <div className="footer-social">
                <a href="https://www.x.com/@jerusalemc56" target="_blank" rel="noreferrer"><i className="fab fa-twitter"></i></a>
                <a href="https://fb.com/jerusalemc56" target="_blank" rel="noreferrer"><i className="fab fa-facebook-f"></i></a>
                <a href="https://www.youtube.com/@JERUSALEMCHURCHKAWANGWARE56" target="_blank" rel="noreferrer"><i className="fab fa-youtube"></i></a>
                <a href="https://www.instagram.com/jerusalemc56" target="_blank" rel="noreferrer"><i className="fab fa-instagram"></i></a>
                <a href="https://www.tiktok.com/@jerusalemc56" target="_blank" rel="noreferrer"><i className="fab fa-tiktok"></i></a>
                <a href="https://www.linkedin.com/company/jerusalemc56" target="_blank" rel="noreferrer"><i className="fab fa-linkedin-in"></i></a>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="footer-link">
              <h2>Popular Links</h2>
              <Link href="/about">About Us</Link>
              <Link href="/contact">Contact Us</Link>
              <Link href="/causes">Popular Ministries</Link>
              <Link href="/event">Upcoming Events</Link>
              <Link href="/blog">Latest Blog</Link>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="footer-link">
              <h2>Useful Links</h2>
              <a href="#">Terms of use</a>
              <a href="#">Privacy policy</a>
              <a href="#">Cookies</a>
              <Link href="/contact">Help</Link>
              <Link href="/faqs">FAQs</Link>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="footer-newsletter">
              <h2>Newsletter</h2>
              <form onSubmit={(e) => e.preventDefault()}>
                <input className="form-control" placeholder="Email goes here" type="email" />
                <button className="btn-custom" type="submit">Subscribe</button>
                <label>Don&apos;t worry, we don&apos;t spam!</label>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="container copyright">
        <div className="row">
          <div className="col-md-6">
            <p>
              &copy; <a href="#">Jerusalem Church of Christ 56</a>, {new Date().getFullYear()}, All Rights Reserved.
            </p>
          </div>
          <div className="col-md-6">
            <p>
              Designed By <a href="#">Veronicah Anzimbu</a> &amp; Composed By <a href="#">JCC Media Team</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
