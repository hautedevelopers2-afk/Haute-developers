'use client'
import { useState, useEffect } from 'react'
import LeadModal from './LeadModal'

export default function PopupLeadModal({ pageName = 'Website', projectName = 'General Inquiry', delay = 1500 }) {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsOpen(true), delay)
    return () => clearTimeout(timer)
  }, [delay])

  return (
    <LeadModal
      isOpen={isOpen}
      onClose={() => setIsOpen(false)}
      triggerText={`${pageName} — Auto Popup`}
      projectName={projectName}
    />
  )
}