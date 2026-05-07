export const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.55, ease: 'easeOut' },
} as const

export const cardHover = {
  whileHover: { y: -6, scale: 1.01 },
  transition: { type: 'spring', stiffness: 260, damping: 22 },
} as const

export const buttonHover = {
  whileHover: { y: -2, scale: 1.01 },
  whileTap: { y: 0, scale: 0.985 },
  transition: { type: 'spring', stiffness: 320, damping: 22 },
} as const
