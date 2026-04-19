/**
 * Reusable Badge component
 */
function Badge({
  children,
  variant = 'primary',
  className = '',
  ...props
}) {
  const variants = {
    primary: 'bg-primary-500/20 text-primary-300 border-primary-500/30',
    gray: 'bg-gray-700/50 text-gray-300 border-gray-600/30',
    success: 'bg-green-500/20 text-green-300 border-green-500/30',
    warning: 'bg-yellow-500/20 text-yellow-300 border-yellow-500/30',
  }

  return (
    <span
      className={`px-3 py-1 text-sm rounded-full border ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </span>
  )
}

export default Badge
