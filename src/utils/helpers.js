/**
 * Utility function to format dates
 */
export const formatDate = (date) => {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

/**
 * Utility function to truncate text
 */
export const truncateText = (text, length = 100) => {
  if (text.length <= length) return text
  return text.slice(0, length) + '...'
}

/**
 * Utility function to get CSS class conditionally
 */
export const classNames = (...classes) => {
  return classes.filter(Boolean).join(' ')
}
