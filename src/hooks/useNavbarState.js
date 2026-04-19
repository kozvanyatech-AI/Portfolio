import { useState } from 'react'

/**
 * Custom hook to manage navbar open/close state
 */
export const useNavbarState = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const closeMenu = () => {
    setIsOpen(false)
  }

  return { isOpen, toggleMenu, closeMenu }
}
