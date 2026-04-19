function PageContainer({ children, className = '' }) {
  return (
    <main className={`pt-16 min-h-screen ${className}`}>
      {children}
    </main>
  )
}

export default PageContainer
