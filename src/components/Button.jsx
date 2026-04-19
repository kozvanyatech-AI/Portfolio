/**
 * Reusable Button component
 */
function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  ...props
}) {
  const baseStyles = 'font-semibold rounded-lg transition-colors duration-200'

  const variants = {
    primary: 'btn-primary',
    secondary: 'btn-secondary',
    outline: 'px-6 py-3 border border-gray-600 text-white hover:border-white',
    ghost: 'px-6 py-3 text-white hover:bg-gray-700/50',
  }

  const sizes = {
    sm: 'px-3 py-1 text-sm',
    md: 'px-6 py-3',
    lg: 'px-8 py-4 text-lg',
  }

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button
