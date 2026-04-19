import { useState } from 'react'
import HomePage from './pages/HomePage'
import ServicesPage from './pages/ServicesPage'

function App() {
  // Simple client-side routing (can be replaced with React Router later)
  const [currentPage, setCurrentPage] = useState('home')

  const renderPage = () => {
    switch (currentPage) {
      case 'services':
        return <ServicesPage />
      case 'home':
      default:
        return <HomePage />
    }
  }

  return renderPage()
}

export default App
