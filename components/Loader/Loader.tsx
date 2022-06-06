import { motion } from 'framer-motion'
import styled from 'styled-components'

const Loader = styled(motion.div).attrs({
  animate: { rotate: 360 },
  transition: { ease: 'linear', duration: 2, repeat: Infinity },
})`
  width: ${({ theme }) => theme.sizes[600]};
  height: ${({ theme }) => theme.sizes[600]};
  border-radius: ${({ theme }) => theme.borderRadius.full};
  border: 4px solid transparent;
  border-bottom-color: ${({ theme }) => theme.colors.primary};
  pointer-events: none;
`

export default Loader
