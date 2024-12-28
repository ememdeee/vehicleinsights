'use client'

import React, { useRef, useEffect, useState } from 'react'

interface HoverToFormProps {
  children: React.ReactNode
  className?: string // Add this line to include the className prop
}

export const HoverToForm: React.FC<HoverToFormProps> = ({ children, className }) => {
  const buttonRef = useRef<HTMLDivElement>(null)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768) // Assuming 768px as the breakpoint for mobile
    }

    checkMobile()
    window.addEventListener('resize', checkMobile)

    return () => {
      window.removeEventListener('resize', checkMobile)
    }
  }, [])

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault()
    const formElement = document.getElementById('siteForm')
    if (formElement) {
      const offset = isMobile ? 90 : 140
      const elementPosition = formElement.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  return (
    <div 
      ref={buttonRef} 
      onClick={handleClick} 
      className={`w-fit ${className || ''}`} // Merge the default class with the provided className
    >
      {children}
    </div>
  )
}