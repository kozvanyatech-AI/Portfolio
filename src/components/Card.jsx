/**
 * Reusable Card component
 */
function Card({
  children,
  className = '',
  hover = true,
  ...props
}) {
  const hoverClass = hover
    ? 'hover:bg-gray-800 hover:border-primary-500 transition-smooth hover:-translate-y-1'
    : 'transition-smooth'

  return (
    <div
      className={`p-6 rounded-lg border border-gray-700 bg-gray-800/50 ${hoverClass} ${className}`}
      {...props}
    >
      {children}
    </div>
  )
}

export default Card
