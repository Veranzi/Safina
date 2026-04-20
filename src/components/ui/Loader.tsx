'use client'

import { useEffect, useState } from 'react'

export default function Loader() {
  const [show, setShow] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setShow(false), 1000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div id="loader" className={show ? 'show' : ''}>
      <div className="loader"></div>
    </div>
  )
}
