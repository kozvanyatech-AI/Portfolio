import Navbar from './Navbar'
import Footer from './Footer'
import PageContainer from './PageContainer'

function Layout({ children, className = '' }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex flex-col">
      <Navbar />
      <PageContainer className={className}>
        {children}
      </PageContainer>
      <Footer />
    </div>
  )
}

export default Layout
