/**
 * Reusable SectionHeader component
 */
function SectionHeader({
  title,
  subtitle,
  description,
  className = '',
}) {
  return (
    <div className={`text-center mb-12 md:mb-16 ${className}`}>
      {subtitle && (
        <p className="text-gray-400 text-sm uppercase tracking-wider mb-2">
          {subtitle}
        </p>
      )}
      {title && (
        <h2 className="text-4xl md:text-5xl font-bold mb-4">{title}</h2>
      )}
      {description && (
        <p className="text-gray-400 text-lg max-w-3xl mx-auto">
          {description}
        </p>
      )}
    </div>
  )
}

export default SectionHeader
