import { Transition, Variants } from 'framer-motion'

export const spring: Transition = {
  type: 'spring',
  stiffness: 150,
  mass: 0.2
}

export const fade: Variants = {
  visible: {
    opacity: 1
  },
  hidden: {
    opacity: 0
  }
}

export const slideTop: Variants = {
  visible: {
    opacity: 1,
    y: 0,
    scale: 1
  },
  hidden: {
    opacity: 0,
    y: '1rem',
    scale: 0.95
  }
}

export const slideBottom: Variants = {
  visible: {
    opacity: 1,
    y: 0,
    scale: 1
  },
  hidden: {
    opacity: 0,
    y: '-1rem',
    scale: 0.95
  }
}
